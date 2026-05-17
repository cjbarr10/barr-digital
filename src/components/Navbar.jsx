import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work',     href: '#portfolio' },
  { label: 'Pricing',  href: '#pricing' },
]

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false)
  const [scrolled,   setScrolled]   = useState(false)

  // Add subtle shadow when user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route-style anchor click
  const close = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 bg-navy transition-shadow duration-300
        border-b border-sky/10
        ${scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.4)]' : ''}`}
    >
      <nav className="flex items-center justify-between h-20 px-[5%] max-w-7xl mx-auto">

        {/* Logo */}
        <a
          href="#"
          className="hover:opacity-85 transition-opacity flex-shrink-0"
          aria-label="Barr Digital — home"
        >
          <svg
            viewBox="0 0 260 68"
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-auto"
            aria-hidden="true"
          >
            {/* Mark */}
            <rect x="0"  y="2"  width="28" height="28" rx="4" fill="#F5F1EB"/>
            <rect x="32" y="2"  width="28" height="28" rx="4" fill="#4A9FD4"/>
            <rect x="0"  y="34" width="28" height="28" rx="4" fill="#4A9FD4" fillOpacity="0.28"/>
            <rect x="32" y="34" width="28" height="28" rx="4" fill="#F5F1EB" fillOpacity="0.12"/>
            {/* Wordmark */}
            <text x="70" y="30"
                  fontFamily="'DM Serif Display', Georgia, serif"
                  fontSize="24"
                  fontWeight="400"
                  fill="#F5F1EB"
                  letterSpacing="-0.3">Barr Digital</text>
            {/* Sub-label */}
            <text x="71" y="48"
                  fontFamily="'DM Sans', system-ui, sans-serif"
                  fontSize="8.5"
                  fontWeight="400"
                  fill="#4A9FD4"
                  letterSpacing="2.8">WEB DESIGN</text>
          </svg>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-mid text-sm hover:text-sky transition-colors duration-200"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-sky text-navy text-sm font-medium px-5 py-2 rounded-full
                       hover:bg-[#5fb3e8] transition-all duration-200 hover:-translate-y-px"
          >
            Get a free quote
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-[5px] p-1"
        >
          <span className={`block w-5 h-0.5 bg-warm rounded transition-all duration-250
            ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-0.5 bg-warm rounded transition-all duration-250
            ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-warm rounded transition-all duration-250
            ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-slate border-t border-sky/10"
          >
            <div className="flex flex-col px-[5%] py-4 gap-1">
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={close}
                  className="text-mid text-sm py-2.5 border-b border-sky/10 hover:text-sky transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-3 text-center bg-sky text-navy font-medium text-sm py-2.5 rounded-full
                           hover:bg-[#5fb3e8] transition-colors"
              >
                Get a free quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
