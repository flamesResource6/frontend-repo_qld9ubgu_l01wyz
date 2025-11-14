import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="relative px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 rounded-md bg-blue-500/0 hover:bg-blue-500/10 transition-colors" />
    </a>
  )

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? 'backdrop-blur-md bg-white/70 shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold tracking-tight">
            <span className="text-slate-800">dev</span>
            <span className="text-blue-600">.folio</span>
          </a>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100 transition-colors"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-100 transition-colors"><Linkedin size={18} /></a>
            <a href="#contact" className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">Hire me</a>
          </div>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur-md"
          >
            <div className="px-4 py-3 flex flex-col">
              {links.map((l) => (
                <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
              ))}
              <div className="flex items-center gap-3 px-1 py-2">
                <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm font-medium"><Mail size={16}/>Contact</a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
