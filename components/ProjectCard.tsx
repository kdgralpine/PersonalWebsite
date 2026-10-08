import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import type { Project } from '@/lib/projects'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="project-card">
    <div className={`project-art ${project.title === 'Pleroma' ? 'pleroma-art' : 'course-art'}`} aria-hidden="true"><span className="art-index">0{index + 1} / {project.category}</span>{project.title === 'Pleroma' ? <><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" /><strong>PLEROMA</strong><span className="art-bottom">AN ACTION GAME IN THE MAKING</span></> : <><span className="code-symbol">{'{'}<em>{project.title.includes('314') ? '55' : 'AM'}</em>{'}'}</span><span className="art-bottom">CS 314 Â· COLORADO STATE UNIVERSITY</span></>}</div>
    <div className="project-body"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="project-actions">{project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Visit website <ArrowUpRight size={17} /></a>}{project.github && <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub size={16} /> View repository <ArrowUpRight size={15} /></a>}</div></div>
  </article>
}

