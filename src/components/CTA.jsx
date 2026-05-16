import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function CTA() {
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [ref, inView]           = useInView()

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    // TODO: wire to your email service (Formspree, EmailJS, etc.)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative bg-navy py-24 px-[5%] overflow-hidden text-center"
    >
      {/* Decorative glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74,159,212,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-xl mx-auto" ref={ref}>

        <motion.h2
          className="font-serif text-warm leading-snug mb-4"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          Ready to get your business{' '}
          <em className="italic text-sky">found online?</em>
        </motion.h2>

        <motion.p
          className="text-mid mb-10"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Free quote. No pressure. We'll tell you exactly what your site needs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.18 }}
        >
          {submitted ? (
            <div className="bg-sky/10 border border-sky/30 rounded-xl py-5 px-6 text-sky">
              ✓ Got it — we'll be in touch within 24 hours.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 min-w-0 px-5 py-3 rounded-full
                           bg-white/6 border border-sky/30 text-warm placeholder:text-mid
                           text-sm outline-none focus:border-sky transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-gold text-navy font-medium text-sm px-7 py-3 rounded-full
                           hover:bg-[#d9bc82] hover:-translate-y-px transition-all duration-200
                           whitespace-nowrap"
              >
                Get a free quote
              </button>
            </form>
          )}

          <p className="text-mid text-xs mt-4">
            Or email us directly:{' '}
            <a
              href="mailto:hello@barrdigital.com"
              className="text-sky hover:underline"
            >
              hello@barrdigital.com
            </a>
            {' '}· Response within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
