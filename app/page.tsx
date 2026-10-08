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
        <p className="eyebrow"><span className="status-dot" /> CSU COMPUTER SCIENCE / SOFTWARE ENGINEERING</p>
        <h1>Sebastian<br /><span>Piwko.</span></h1>
        <p className="hero-statement">Curious by nature.<br />A builder by practice.</p>
        <p className="hero-description">Fourth-year computer science student at Colorado State University, concentrating in software engineering. I build gameplay systems and collaborative software projects, with interests in cybersecurity and quality assurance.</p>
        <p className="opportunity-note">Seeking a summer internship or co-op · Expected graduation December 2027</p><div className="hero-actions"><Link className="button primary" href="#work">Explore my work <ArrowRight size={17} /></Link><Link className="button secondary" href="/resume">View résumé <ArrowUpRight size={17} /></Link></div>
        <div className="hero-links"><span><MapPin size={14} /> Fort Collins, Colorado</span><a href="https://github.com/kdgralpine" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a><a href="https://linkedin.com/in/sebastian-piwko" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={14} /></a></div>
      </div>
      <figure className="portrait-card"><div className="portrait-window"><Image src="/photos/portrait.png" alt="Sebastian Piwko" fill preload sizes="(max-width: 700px) 85vw, 400px" className="portrait-image" /></div><figcaption><span>THE PERSON BEHIND THE CODE</span><span>SP / CO</span></figcaption></figure>
    </section>
    <div className="focus-strip"><span>A FEW THINGS I WORK WITH</span><p>C++ <i>/</i> Python & Java <i>/</i> Unreal Engine 5 <i>/</i> Blender <i>/</i> MongoDB</p></div>
    <section className="section-block" id="work"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORK</p><h2>From idea to implementation.</h2></div><Link href="/projects" className="text-link">All projects <ArrowUpRight size={18} /></Link></div><div className="project-grid">{projects.filter(p => p.featured).map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></section>
    <section className="about-band"><p className="eyebrow">02 / A LITTLE ABOUT ME</p><div><h2>I like understanding how things work.<br /><span>Then building something of my own.</span></h2><p>Building PCs and experimenting with code sparked my interest in computing. Today, Pleroma brings together C++ gameplay systems, save-data reliability, Blender modeling, and original lore. At CSU, I’ve worked on genetic algorithms and collaborated in a five-person agile team to build a full-stack application.</p><Link href="/about" className="text-link">More about me <ArrowRight size={17} /></Link></div></section>
    <section className="section-block"><div className="section-heading"><div><p className="eyebrow">03 / BEYOND THE KEYBOARD</p><h2>A different kind of ecosystem.</h2></div><Link href="/fish-tanks" className="text-link">Explore the aquariums <ArrowUpRight size={18} /></Link></div><p className="section-intro">When I step away from code, I spend time building and maintaining planted aquariums. Here’s a glimpse of that side of my world.</p><div className="photo-grid">{photos.map((photo, index) => <figure key={photo.src}><Link href="/fish-tanks" className="photo-frame"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 100vw, 40vw" /></Link><figcaption><span>0{index + 1}</span>{photo.title}</figcaption></figure>)}</div></section>
    <section className="contact-band"><div><p className="eyebrow">LET’S CONNECT</p><h2>Have something in mind?</h2><p>I’m looking for a summer internship or co-op in software engineering, cybersecurity, or quality assurance. Let’s talk about how I can contribute.</p></div><a className="button primary" href="mailto:sebastianpcollege@gmail.com">Get in touch <ArrowUpRight size={17} /></a></section>
  </div>
}
