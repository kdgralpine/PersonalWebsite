import type { Metadata } from 'next'
import PrintResume from '@/components/PrintResume'

export const metadata: Metadata = {
  title: 'Resume — Sebastian Piwko',
}

const skills = {
  Languages: ['Java', 'Python', 'C', 'C++', 'C#', 'TypeScript', 'JavaScript', 'SQL'],
  'Web & Frameworks': ['React', 'Next.js', 'Node.js', 'Tailwind CSS', '.NET'],
  Tools: ['Git', 'GitHub', 'VS Code', 'IntelliJ', 'Linux', 'MongoDB', 'Docker'],
  Concepts: ['Data Structures', 'Algorithms', 'OOP', 'Systems Programming', 'Security', 'Cryptography / Encryption', 'Agile / Scrum'],
}

const tagColors: Record<string, string> = {
  Java: '#f59e0b',
  Python: '#3b82f6',
  C: '#6366f1',
  'C++': '#6366f1',
  'C#': '#8b5cf6',
  TypeScript: '#06b6d4',
  JavaScript: '#eab308',
  SQL: '#10b981',
  React: '#38bdf8',
  'Next.js': '#ffffff',
  'Node.js': '#84cc16',
  'Tailwind CSS': '#38bdf8',
  '.NET': '#8b5cf6',
  Git: '#f97316',
  GitHub: '#a3a3a3',
  'VS Code': '#3b82f6',
  IntelliJ: '#ec4899',
  Linux: '#f59e0b',
  MongoDB: '#10b981',
  Docker: '#38bdf8',
  'Data Structures': '#10b981',
  Algorithms: '#10b981',
  OOP: '#f59e0b',
  'Systems Programming': '#6366f1',
  Security: '#ef4444',
  'Cryptography / Encryption': '#f97316',
  'Agile / Scrum': '#84cc16',
}

export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-10">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold mb-1">Resume</h1>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Skills, education, and experience</p>
          </div>
          <PrintResume />
        </div>
      </div>

      <div className="space-y-6">
        {/* Education */}
        <div className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-semibold mb-4">Education</h2>
          <div className="flex items-start justify-between gap-2 flex-wrap">
            <div>
              <p className="font-medium text-sm">Colorado State University</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>B.S. Computer Science</p>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded" style={{ background: 'var(--border)', color: 'var(--muted)' }}>
              In Progress
            </span>
          </div>
        </div>

        {/* Skills */}
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
            <h2 className="font-semibold mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {items.map(skill => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full font-mono font-medium"
                  style={{
                    background: `${tagColors[skill] ?? '#64748b'}18`,
                    color: 'var(--foreground)',
                    border: `1px solid ${tagColors[skill] ?? '#64748b'}30`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Coursework */}
        <div className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-semibold mb-4">Relevant Coursework</h2>
          <ul className="text-sm space-y-1.5" style={{ color: 'var(--muted)' }}>
            {[
              'CS250 — Data Structures & Algorithms',
              'CS314 - Team Project (Fall 2025)',
              'CS320 — Software Engineering',
              'CS356 — System Security',
              'Computer Systems',
            ].map(course => (
              <li key={course} className="flex items-start gap-2">
                <span style={{ color: 'var(--accent)' }}>›</span>
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
