import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

const VALID_TANKS = ['10g', '20g']
const MAX_BYTES = 10 * 1024 * 1024 // 10 MB

// Map each allowed MIME type to a safe extension and its magic bytes
const ALLOWED: Record<string, { ext: string; magic: number[][] }> = {
  'image/jpeg': {
    ext: '.jpg',
    magic: [[0xff, 0xd8, 0xff]],
  },
  'image/png': {
    ext: '.png',
    magic: [[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]],
  },
  'image/webp': {
    ext: '.webp',
    // RIFF????WEBP — bytes 0-3 are RIFF, bytes 8-11 are WEBP
    magic: [[0x52, 0x49, 0x46, 0x46]],
  },
  'image/gif': {
    ext: '.gif',
    magic: [
      [0x47, 0x49, 0x46, 0x38, 0x37, 0x61], // GIF87a
      [0x47, 0x49, 0x46, 0x38, 0x39, 0x61], // GIF89a
    ],
  },
}

// Valid filename produced by this route: digits + known extension
const SAFE_FILENAME = /^\d+\.(jpg|png|webp|gif)$/

function matchesMagic(buf: Buffer, sequences: number[][]): boolean {
  return sequences.some(seq => seq.every((byte, i) => buf[i] === byte))
}

function tankDir(tank: string): string {
  return path.join(process.cwd(), 'public', 'fish-tanks', tank)
}

export async function POST(request: NextRequest) {
  const tank = request.nextUrl.searchParams.get('tank') ?? ''
  if (!VALID_TANKS.includes(tank)) {
    return NextResponse.json({ error: 'Invalid tank' }, { status: 400 })
  }

  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!file) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: 'File too large (max 10 MB)' }, { status: 413 })
  }

  const spec = ALLOWED[file.type]
  if (!spec) {
    return NextResponse.json({ error: 'Only JPEG, PNG, WebP, or GIF images are allowed' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Verify actual file bytes match the claimed MIME type
  if (!matchesMagic(buffer, spec.magic)) {
    return NextResponse.json({ error: 'File content does not match its type' }, { status: 400 })
  }

  const dir = tankDir(tank)
  await mkdir(dir, { recursive: true })

  // Extension comes from the verified MIME type, never from the client filename
  const filename = `${Date.now()}${spec.ext}`
  await writeFile(path.join(dir, filename), buffer)

  return NextResponse.json({ filename })
}

export async function DELETE(request: NextRequest) {
  const body = await request.json()
  const { filename, tank } = body

  if (!VALID_TANKS.includes(tank)) {
    return NextResponse.json({ error: 'Invalid tank' }, { status: 400 })
  }

  // Only allow filenames that this route could have produced
  if (typeof filename !== 'string' || !SAFE_FILENAME.test(filename)) {
    return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
  }

  const { unlink } = await import('fs/promises')
  await unlink(path.join(tankDir(tank), filename))

  return NextResponse.json({ ok: true })
}
