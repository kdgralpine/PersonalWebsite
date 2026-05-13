import type { Metadata } from 'next'
import Link from 'next/link'
import { Clock } from 'lucide-react'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog — Sebastian Piwko',
}

export default function Blog() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">Blog</h1>
      <p className="text-sm mb-10" style={{ color: 'var(--muted)' }}>
        Notes on things I learn, build, and think about.
      </p>

      {posts.length === 0 ? (
        <div className="rounded-xl p-10 border text-center" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p className="text-sm" style={{ color: 'var(--muted)' }}>No posts yet — check back soon.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block rounded-xl p-6 border transition-shadow hover:shadow-md"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                <h2 className="font-semibold">{post.title}</h2>
                <span className="text-xs flex items-center gap-1 shrink-0" style={{ color: 'var(--muted)' }}>
                  <Clock size={12} /> {post.readingTime} min read
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--muted)' }}>
                {post.summary}
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div className="flex gap-1.5 flex-wrap">
                  {post.tags?.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full font-mono"
                      style={{ background: 'var(--border)', color: 'var(--muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <time className="text-xs" style={{ color: 'var(--muted)' }}>
                  {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
