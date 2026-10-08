import type { Metadata } from 'next'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'
export const metadata: Metadata = { title: 'Projects — Sebastian Piwko' }
export default function Projects() {
  return <div className="portfolio-shell subpage"><p className="eyebrow">IDEAS, EXPERIMENTS & IMPLEMENTATIONS</p><h1 className="page-title">Selected work.</h1><p className="section-intro">Personal projects and coursework, from gameplay systems to collaborative software development.</p><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}</div></div>
}
