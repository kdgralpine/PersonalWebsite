import type { Metadata } from 'next'
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa6'

export const metadata: Metadata = {
  title: 'About — Sebastian Piwko',
}

const socials = [
  { href: 'https://github.com/kdgralpine', label: 'GitHub', Icon: FaGithub },
  { href: 'https://linkedin.com/in/sebastian-piwko', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://youtube.com/@kdgralpine', label: 'YouTube', Icon: FaYoutube },
  { href: 'https://instagram.com/kdgralpine', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://tiktok.com/@kdgralpine', label: 'TikTok', Icon: FaTiktok },
]

const interests = ['Software Engineering', 'Cybersecurity', 'Quality Assurance', 'Game Development', '3D Modeling', 'World-building', 'Planted Aquariums']

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-2">About Me</h1>
      <p className="mb-10 text-sm font-mono" style={{ color: 'var(--accent)' }}>sebastian piwko · cs student · ft. collins, co</p>

      <div className="space-y-8">
        <div className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-semibold mb-3">Who I am</h2>
          <div className="space-y-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
            <p>I’m Sebastian, a fourth-year computer science student at Colorado State University in Fort Collins. My concentration is Software Engineering, and I expect to graduate in December 2027.</p>
            <p>My interest in computers began with building PCs and experimenting with code. I’m interested in software engineering, cybersecurity, and quality assurance, and I’m seeking a summer internship or co-op.</p>
            <p>Pleroma is my ongoing Unreal Engine 5 project. It brings together C++ combat systems, data-driven levels, save validation, original Blender assets, and dark fantasy lore. I enjoy connecting the technical side of development with the worlds and stories it can support.</p>
            <p>My coursework adds experience with genetic algorithms, cryptographic tools, object oriented C++, and collaboration in a five-person agile software team. Away from code, I build and maintain planted aquariums.</p>
          </div>
        </div>

        <div className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-semibold mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {interests.map(i => (
              <span
                key={i}
                className="text-sm px-3 py-1 rounded-full border"
                style={{ borderColor: 'var(--border)', color: 'var(--foreground)' }}
              >
                {i}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl p-6 border" style={{ background: 'var(--card)', borderColor: 'var(--border)' }}>
          <h2 className="font-semibold mb-4">Find me online</h2>
          <div className="flex flex-wrap gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-lg transition-opacity hover:opacity-70"
                style={{ color: 'var(--muted)', border: '1px solid var(--border)' }}
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
