import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa6'

const socials = [
  { href: 'https://github.com/kdgralpine', label: 'GitHub', Icon: FaGithub },
  { href: 'https://linkedin.com/in/sebastian-piwko', label: 'LinkedIn', Icon: FaLinkedin },
  { href: 'https://youtube.com/@kdgralpine', label: 'YouTube', Icon: FaYoutube },
  { href: 'https://instagram.com/kdgralpine', label: 'Instagram', Icon: FaInstagram },
  { href: 'https://tiktok.com/@kdgralpine', label: 'TikTok', Icon: FaTiktok },
]

export default function Footer() {
  return (
    <footer className="border-t mt-auto py-8" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} Sebastian Piwko
        </p>
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
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
