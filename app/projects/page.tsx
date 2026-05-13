import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Projects — Sebastian Piwko',
}

const tagColors: Record<string, string> = {
  Java: '#f59e0b',
  Python: '#3b82f6',
  C: '#6366f1',
  'C#': '#8b5cf6',
  TypeScript: '#06b6d4',
  JavaScript: '#eab308',
  React: '#38bdf8',
  'Data Structures': '#10b981',
  Algorithms: '#10b981',
  'Game Dev': '#ec4899',
  'Software Engineering': '#f97316',
  Testing: '#84cc16',
  Systems: '#6366f1',
  OS: '#8b5cf6',
  OOP: '#f59e0b',
}

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Projects</h1>
      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
        Things I&apos;ve built — coursework, personal projects, and experiments.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {projects.map(project => (
          <div
            key={project.title}
            className="rounded-xl p-6 border flex flex-col gap-4 transition-shadow hover:shadow-md"
            style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div>
              <h2 className="font-semibold mb-2">{project.title}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full font-mono font-medium"
                  style={{
                    background: `${tagColors[tag] ?? '#64748b'}20`,
                    color: tagColors[tag] ?? 'var(--muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-auto">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'var(--muted)' }}
                >
                  <FaGithub size={14} /> Code
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                  style={{ color: 'var(--accent)' }}
                >
                  <ExternalLink size={14} /> Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
