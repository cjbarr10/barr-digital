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
      <nav className="flex items-center justify-between h-16 px-[5%] max-w-7xl mx-auto">

        {/* Logo */}
        <a
          href="#"
          className="font-serif text-xl text-warm tracking-tight hover:opacity-90 transition-opacity"
        >
          Barr Digital
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
