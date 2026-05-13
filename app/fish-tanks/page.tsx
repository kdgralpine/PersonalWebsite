import type { Metadata } from 'next'
import { readdirSync } from 'fs'
import path from 'path'
import FishTankGallery from '@/components/FishTankGallery'

export const metadata: Metadata = {
  title: 'Fish Tanks — Sebastian Piwko',
}

function getImages(tank: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'fish-tanks', tank)
  try {
    return readdirSync(dir).filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
  } catch {
    return []
  }
}

export default function FishTanks() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Fish Tanks</h1>
      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
        Tanks I&apos;ve built and maintained.
      </p>
      <div className="space-y-8">
        <FishTankGallery tank="10g" label="10 Gallon" initialImages={getImages('10g')} />
        <FishTankGallery tank="20g" label="20 Gallon" initialImages={getImages('20g')} />
      </div>
    </div>
  )
}
