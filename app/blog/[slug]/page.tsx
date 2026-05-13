import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getPostSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }))
}

export async function generateMetadata(props: PageProps<'/blog/[slug]'>): Promise<Metadata> {
  const { slug } = await props.params
  try {
    const post = getPost(slug)
    return { title: `${post.title} — Sebastian Piwko`, description: post.summary }
  } catch {
    return { title: 'Post not found' }
  }
}

export default async function BlogPost(props: PageProps<'/blog/[slug]'>) {
  const { slug } = await props.params

  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1 text-sm mb-8 transition-opacity hover:opacity-70"
        style={{ color: 'var(--muted)' }}
      >
        <ArrowLeft size={14} /> Back to blog
      </Link>

      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-3">{post.title}</h1>
        <div className="flex items-center gap-4 flex-wrap" style={{ color: 'var(--muted)' }}>
          <time className="text-sm">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </time>
          <span className="text-sm flex items-center gap-1">
            <Clock size={13} /> {post.readingTime} min read
          </span>
        </div>
        {post.tags?.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mt-3">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full font-mono"
                style={{ background: 'var(--border)', color: 'var(--muted)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-sm max-w-none" style={{ color: 'var(--foreground)' }}>
        <MDXRemote source={post.content} />
      </article>
    </div>
  )
}
