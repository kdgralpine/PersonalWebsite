import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const BLOG_DIR = path.join(process.cwd(), 'content/blog')

export type PostMeta = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  readingTime: number
}

export type Post = PostMeta & { content: string }

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs.readdirSync(BLOG_DIR)
    .filter(f => f.endsWith('.mdx'))
    .map(f => f.replace('.mdx', ''))
}

export function getPost(slug: string): Post {
  const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf8')
  const { data, content } = matter(raw)
  const words = content.split(/\s+/).length
  const readingTime = Math.max(1, Math.ceil(words / 200))
  return { slug, content, readingTime, ...data } as Post
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map(slug => {
      const { content, ...meta } = getPost(slug)
      return meta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
