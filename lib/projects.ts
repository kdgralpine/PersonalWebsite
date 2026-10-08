export type Project = {
  title: string
  description: string
  category: string
  tags: string[]
  github?: string
  demo?: string
  detail?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Pleroma',
    demo: 'https://pleroma-game.vercel.app/details',
    category: 'PERSONAL PROJECT / GAME DEVELOPMENT',
    description: 'A dark fantasy action game I’m developing in Unreal Engine 5 with C++. Pleroma brings together ability-based combat, data-driven levels, save validation, original Blender assets, and a world shaped by lore and player choice.',
    tags: ['C++', 'Unreal Engine 5', 'Gameplay Ability System', 'Blender'],
    detail: '/projects#pleroma',
    featured: true,
  },
  {
    title: 'CS 314 · Team 55',
    category: 'COURSE PROJECT / FALL 2025',
    description: 'A semester-long project built with a five-person agile team at CSU. Our full-stack app plots breweries on an interactive 3D globe and computes multi-stop routes, with MongoDB work for storing and querying airport data.',
    tags: ['Agile collaboration', 'Full-stack development', 'MongoDB'],
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
