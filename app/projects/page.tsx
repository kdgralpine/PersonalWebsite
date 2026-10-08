import type { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
import { pleromaWork, coursework } from '@/lib/resume'

export const metadata: Metadata = { title: 'Projects · Sebastian Piwko' }

export default function Projects() {
  return <div className="portfolio-shell subpage">
    <p className="eyebrow">IDEAS, EXPERIMENTS & IMPLEMENTATIONS</p>
    <h1 className="page-title">Selected work.</h1>
    <p className="section-intro">Personal projects and coursework, connecting software engineering with creative design and team collaboration.</p>
    <div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div>
    <section className="section-block project-story" id="pleroma">
      <div className="section-heading"><div><p className="eyebrow">PROJECT IN FOCUS / ONGOING DEVELOPMENT</p><h2>Inside Pleroma.</h2></div><a className="text-link" href="https://pleroma-game.vercel.app/details" target="_blank" rel="noopener noreferrer">Explore the game <ArrowUpRight size={18} /></a></div>
      <p className="section-intro">Pleroma is where I bring software engineering, world-building, original 3D assets, and marketing into one large personal project. Its dark fantasy world gives me a reason to build systems that support both gameplay and creative expression.</p>
      <div className="experience-grid">{pleromaWork.map((item, index) => <article className="experience-card" key={item.title}><span className="eyebrow">0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p><p className="experience-relevance">{item.relevance}</p></article>)}</div>
      <aside className="project-takeaway"><p className="eyebrow">THE ENGINEERING BEHIND THE WORLD</p><h3>Why this project matters to my work.</h3><p>Building Pleroma lets me practice designing reusable systems, handling damaged data, evolving content formats, and integrating assets across tools. It also asks me to carry an idea from technical implementation into a coherent visual and narrative experience.</p></aside>
    </section>
    <section className="coursework-section"><div className="section-heading"><div><p className="eyebrow">COURSEWORK / COLORADO STATE UNIVERSITY</p><h2>Learning through implementation.</h2></div></div><div className="experience-grid">{coursework.map(item => <article className="experience-card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p>{item.github && <a className="text-link" href={item.github} target="_blank" rel="noopener noreferrer">View team repository <ArrowUpRight size={16} /></a>}</article>)}</div></section>
  </div>
}
