import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { projects } from '@/lib/projects'

const socials = [
  { href: 'https://github.com/kdgralpine', label: 'GitHub', Icon: FaGithub },
  { href: 'https://linkedin.com/in/sebastian-piwko', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://youtube.com/@kdgralpine', label: 'YouTube', Icon: FaYoutube },
  { href: 'https://instagram.com/kdgralpine', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://tiktok.com/@kdgralpine', label: 'TikTok', Icon: FaTiktok },
]

export default function Home() {
  const featured = projects.filter(p => p.featured)

  return (
    <div className="max-w-5xl mx-auto px-4">
      {/* Hero */}
      <section className="py-14 sm:py-28">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-10">
          <div className="flex-1">
            <p className="text-sm font-mono mb-4" style={{ color: 'var(--accent)' }}>
              Hi, I&apos;m
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
              Sebastian Piwko
            </h1>
            <p className="text-lg sm:text-xl mb-8" style={{ color: 'var(--muted)' }}>
              CS Student @ Colorado State University · Building things with code
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-80"
                style={{ background: 'var(--accent)' }}
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border transition-opacity hover:opacity-70"
                style={{ borderColor: 'var(--border)' }}
              >
                About Me
              </Link>
            </div>
            <div className="flex items-center gap-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-md transition-opacity hover:opacity-60"
                  style={{ color: 'var(--muted)' }}
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 self-center sm:self-auto">
            <div
              className="relative w-40 h-40 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2"
              style={{ borderColor: 'var(--border)' }}
            >
              <Image
                src="/profile.jpg"
                alt="Sebastian Piwko"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="pb-16">
        <h2 className="text-xs font-mono font-semibold uppercase tracking-widest mb-6" style={{ color: 'var(--muted)' }}>
          About
        </h2>
        <div className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <p className="text-base leading-relaxed mb-4">
            I&apos;m a computer science student at CSU with a passion for building software that actually works.
            I enjoy working across the stack — from low-level systems programming to full-stack web apps.
            When I&apos;m not coding you&apos;ll find me making content, gaming, or exploring the outdoors in Colorado.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-sm font-medium transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
          >
            More about me <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs font-mono font-semibold uppercase tracking-widest" style={{ color: 'var(--muted)' }}>
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm transition-opacity hover:opacity-70"
            style={{ color: 'var(--accent)' }}
          >
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {featured.map(project => (
            <div
              key={project.title}
              className="rounded-xl p-5 border flex flex-col gap-3 transition-shadow hover:shadow-md"
              style={{ background: 'var(--card)', borderColor: 'var(--border)' }}
            >
              <h3 className="font-semibold text-sm">{project.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full font-mono"
                    style={{ background: 'var(--border)', color: 'var(--muted)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs transition-opacity hover:opacity-70"
                  style={{ color: 'var(--accent)' }}
                >
                  <FaGithub size={12} /> GitHub <ExternalLink size={10} />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
