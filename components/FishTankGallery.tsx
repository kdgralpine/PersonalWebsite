'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Trash2 } from 'lucide-react'

type Props = {
  tank: string
  label: string
  initialImages: string[]
}

export default function FishTankGallery({ tank, label, initialImages }: Props) {
  const [images, setImages] = useState(initialImages)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch(`/api/fish-tanks?tank=${tank}`, { method: 'POST', body: formData })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? 'Upload failed')
      setImages(prev => [...prev, data.filename])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed')
    } finally {
      setUploading(false)
      e.target.value = ''
    }
  }

  async function handleDelete(filename: string) {
    try {
      const res = await fetch('/api/fish-tanks', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, tank }),
      })
      if (!res.ok) throw new Error('Delete failed')
      setImages(prev => prev.filter(f => f !== filename))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Delete failed')
    }
  }

  return (
    <div
      className="rounded-xl border"
      style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
    >
      {/* Header + upload */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-6 py-4 border-b" style={{ borderColor: 'var(--border)' }}>
        <div>
          <h2 className="font-semibold">{label}</h2>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>{images.length} photo{images.length !== 1 ? 's' : ''}</p>
        </div>
        <label
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer transition-opacity hover:opacity-80 self-start sm:self-auto"
          style={{ background: 'var(--accent)' }}
        >
          {uploading ? 'Uploading…' : 'Upload Photo'}
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleUpload}
            disabled={uploading}
          />
        </label>
      </div>

      {/* Body */}
      <div className="p-6">
        {error && <p className="text-sm mb-4" style={{ color: '#ef4444' }}>{error}</p>}

        {images.length === 0 ? (
          <p className="text-sm" style={{ color: 'var(--muted)' }}>No photos yet — upload your first shot!</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map(filename => (
              <div
                key={filename}
                className="relative group rounded-xl overflow-hidden border"
                style={{ borderColor: 'var(--border)', aspectRatio: '4/3' }}
              >
                <Image
                  src={`/fish-tanks/${tank}/${filename}`}
                  alt={`${label} photo`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <button
                  onClick={() => handleDelete(filename)}
                  className="absolute top-2 right-2 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
                  aria-label="Delete photo"
                >
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
