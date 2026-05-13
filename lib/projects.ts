export type Project = {
  title: string
  description: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'AbyssMarked',
    description: 'A video game I\'m building — diving into game development with original design, mechanics, and art direction.',
    tags: ['Game Dev', 'C#', 'Unity'],
    featured: true,
  },
]
