import Image from 'next/image'
import type { Metadata } from 'next'
import { photos } from '@/lib/photos'
export const metadata: Metadata = { title: 'Aquariums — Sebastian Piwko' }
export default function FishTanks() {
  return <div className="portfolio-shell subpage"><p className="eyebrow">BEYOND THE KEYBOARD</p><h1 className="page-title">Small worlds.<br />Always growing.</h1><p className="section-intro">My planted aquariums: a space for creativity, patience, and attention to the little things. Select a photograph for a closer look.</p><div className="aquarium-gallery">{photos.map(photo => <figure key={photo.src}><a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${photo.title}`}><Image src={photo.src} alt={photo.alt} width={1200} height={1200} sizes="(max-width: 700px) 100vw, 70vw" /></a><figcaption><h2>{photo.title}</h2><p>{photo.caption}</p></figcaption></figure>)}</div></div>
}
