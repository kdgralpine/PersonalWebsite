import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/ThemeProvider'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sebastian Piwko',
  description: 'Colorado State University computer science student concentrating in software engineering. Explore C++ gameplay systems, Blender modeling, algorithms, and collaborative software projects.',
  openGraph: {
    title: 'Sebastian Piwko',
    description: 'Colorado State University computer science student concentrating in software engineering. Explore C++ gameplay systems, Blender modeling, algorithms, and collaborative software projects.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
