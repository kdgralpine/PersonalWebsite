export type Project = {
  title: string
  description: string
  category: string
  tags: string[]
  github?: string
  demo?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Pleroma',
    demo: 'https://pleroma-game.vercel.app/details',
    category: 'PERSONAL PROJECT / GAME DEVELOPMENT',
    description: 'An action game I’m building in Unreal Engine with C++. The project explores ability-based combat, magic styles, movement, and a style meter through the Gameplay Ability System.',
    tags: ['C++', 'Unreal Engine', 'Gameplay Ability System'],
    featured: true,
  },
  {
    title: 'CS 314 · Team 55',
    category: 'COURSE PROJECT / FALL 2025',
    description: 'My team project for CS 314 at Colorado State University. The course repository brings together our work from the Fall 2025 semester.',
    tags: ['CS 314', 'Team project', 'Colorado State University'],
    github: 'https://github.com/CSU-CS-314-Fall-2025/t55',
    featured: true,
  },
  {
    title: 'AbyssMarked',
    category: 'PERSONAL PROJECT / GAME DEVELOPMENT',
    description: 'A game development project exploring original design, mechanics, and art direction.',
    tags: ['C#', 'Unity', 'Game development'],
  },
]
