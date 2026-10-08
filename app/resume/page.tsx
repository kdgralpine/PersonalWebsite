import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import PrintResume from '@/components/PrintResume'
import { education, skills, pleromaWork, coursework } from '@/lib/resume'

export const metadata: Metadata = { title: 'Résumé · Sebastian Piwko' }

export default function Resume() {
  return <div className="portfolio-shell subpage resume-page">
    <div className="section-heading"><div><p className="eyebrow">BACKGROUND / SKILLS / EXPERIENCE</p><h1 className="page-title">Résumé.</h1><p className="section-intro">Sebastian Piwko · Computer Science Undergraduate Student</p></div><PrintResume /></div>
    <p className="resume-summary">Fourth-year computer science student at Colorado State University with interests in software engineering, cybersecurity, and quality assurance. I developed a passion for computers by building PCs and experimenting with code, then carried that into Unreal Engine game development. I’m seeking a summer internship or co-op where I can contribute design and technical coding skills.</p>
    <div className="resume-contact"><span>Fort Collins, Colorado</span><a href="mailto:sebastianpcollege@gmail.com">sebastianpcollege@gmail.com</a><a href="https://github.com/kdgralpine" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={14} /></a></div>
    <section className="resume-section"><h2>Education</h2><div className="education-row"><div><h3>{education.school}</h3><p>{education.degree} · {education.concentration} concentration</p><p>{education.location}</p></div><p className="education-date">Expected {education.graduation}</p></div></section>
    <section className="resume-section"><h2>Skills</h2><div className="skill-groups">{Object.entries(skills).map(([category, items]) => <div key={category}><h3>{category}</h3><div className="project-tags">{items.map(skill => <span key={skill}>{skill}</span>)}</div></div>)}</div></section>
    <section className="resume-section"><div className="section-heading"><h2>Personal project</h2><Link className="text-link" href="/projects#pleroma">Read the project story <ArrowUpRight size={16} /></Link></div><h3><a href="https://pleroma-game.vercel.app/details" target="_blank" rel="noopener noreferrer">Pleroma · Unreal Engine 5, C++, Blender <ArrowUpRight size={15} className="inline" /></a></h3><ul className="resume-bullets">{pleromaWork.map(item => <li key={item.title}>{item.description}</li>)}<li>Combining software engineering, world-building, 3D asset creation, and marketing across a large-scale personal game project.</li></ul></section>
    <section className="resume-section"><h2>Relevant coursework projects</h2><div className="resume-coursework">{coursework.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p>{item.github && <a className="text-link" href={item.github} target="_blank" rel="noopener noreferrer">View team repository <ArrowUpRight size={15} /></a>}</article>)}</div></section>
    <section className="resume-section"><h2>Certification</h2><p>Certified Pool Operator</p></section>
  </div>
}
