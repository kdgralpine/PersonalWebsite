import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import { photos } from '@/lib/photos'

export default function Home() {
  return <div className="portfolio-shell">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE & CREATIVE WORK</p>
        <h1>Sebastian<br /><span>Piwko.</span></h1>
        <p className="hero-statement">Curious by nature.<br />A builder by practice.</p>
        <p className="hero-description">Computer science student at Colorado State University, exploring software, systems, and the worlds we can build with code.</p>
        <div className="hero-actions"><Link className="button primary" href="#work">Explore my work <ArrowRight size={17} /></Link><Link className="button secondary" href="/resume">View résumé <ArrowUpRight size={17} /></Link></div>
        <div className="hero-links"><span><MapPin size={14} /> Fort Collins, Colorado</span><a href="https://github.com/kdgralpine" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/sebastian-piwko" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
      </div>
      <figure className="portrait-card"><div className="portrait-window"><Image src="/photos/portrait.png" alt="Sebastian Piwko" fill preload sizes="(max-width: 700px) 85vw, 400px" className="portrait-image" /></div><figcaption><span>THE PERSON BEHIND THE CODE</span><span>SP / CO</span></figcaption></figure>
    </section>
    <div className="focus-strip"><span>A FEW THINGS I WORK WITH</span><p>C++ <i>/</i> Unreal Engine <i>/</i> TypeScript <i>/</i> React <i>/</i> Next.js</p></div>
    <section className="section-block" id="work"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>From idea to implementation.</h2></div><Link href="/projects" className="text-link">All projects <ArrowUpRight size={18} /></Link></div><div className="project-grid">{projects.filter(p => p.featured).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>
    <section className="about-band"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><div><h2>I like understanding how things work.<br /><span>Then building something of my own.</span></h2><p>My interests stretch from low-level systems to web applications and game development. Pleroma gives me a place to explore gameplay systems; my coursework at CSU brings a different perspective through collaborative projects.</p><Link href="/about" className="text-link">More about me <ArrowRight size={17} /></Link></div></section>
    <section className="section-block"><div className="section-heading"><div><p className="eyebrow">03 / BEYOND THE KEYBOARD</p><h2>A different kind of ecosystem.</h2></div><Link href="/fish-tanks" className="text-link">Explore the aquariums <ArrowUpRight size={18} /></Link></div><p className="section-intro">When I step away from code, I spend time building and maintaining planted aquariums. Here’s a glimpse of that side of my world.</p><div className="photo-grid">{photos.map((photo, index) => <figure key={photo.src}><Link href="/fish-tanks" className="photo-frame"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 40vw" /></Link><figcaption><span>0{index + 1}</span>{photo.title}</figcaption></figure>)}</div></section>
    <section className="contact-band"><div><p className="eyebrow">LET’S CONNECT</p><h2>Have something in mind?</h2><p>I’d love to talk about software, game development, and opportunities to build.</p></div><a className="button primary" href="https://linkedin.com/in/sebastian-piwko" target="_blank" rel="noopener noreferrer">Connect on LinkedIn <ArrowUpRight size={17} /></a></section>
  </div>
}
