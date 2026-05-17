import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function CTA() {
  const [email,     setEmail]     = useState('')
  const [message,   setMessage]   = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error,     setError]     = useState('')
  const [ref, inView] = useInView()

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xkoewreb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      })

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
        setMessage('')
      } else {
        setError('Something went wrong. Please email us directly.')
      }
    } catch {
      setError('Network error. Please email us directly.')
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-navy py-24 px-[5%] overflow-hidden"
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

      <div className="relative max-w-2xl mx-auto text-center" ref={ref}>

        <motion.h2
          className="font-serif text-warm leading-snug mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          Ready to grow your business{' '}
          <em className="italic text-sky">online?</em>
        </motion.h2>

        <motion.p
          className="text-mid mb-10 text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          Tell us about your project and we'll get back to you within 24 hours.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-sky/10 border border-sky/30 rounded-2xl py-8 px-6 text-sky text-lg"
          >
            ✓ Thanks! Your quote request has been sent.
            <p className="text-mid text-sm mt-2">We'll be in touch within 24 hours.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-left"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            {/* Email */}
            <div>
              <label className="block text-mid text-xs font-medium tracking-widest uppercase mb-2">
                Your email address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourbusiness.com"
                className="w-full px-5 py-4 rounded-2xl
                           bg-white border border-slate-200
                           text-slate-900 placeholder:text-slate-400
                           outline-none focus:border-sky transition-colors duration-200"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-mid text-xs font-medium tracking-widest uppercase mb-2">
                Tell us about your project *
              </label>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="What kind of site do you need? What's your business? What's your timeline? Any details help."
                className="w-full px-5 py-4 rounded-2xl
                           bg-white border border-slate-200
                           text-slate-900 placeholder:text-slate-400
                           outline-none focus:border-sky transition-colors duration-200 resize-none"
              />
            </div>

            {/* Error message */}
            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="bg-gold text-navy font-semibold text-base
                         py-4 rounded-2xl
                         hover:scale-[1.02] hover:brightness-105
                         transition-all duration-300"
            >
              Get Free Quote →
            </button>
          </motion.form>
        )}

        <p className="text-mid text-sm mt-6">
          Or email us directly at{' '}
          <a
            href="mailto:barrdigitalweb@gmail.com"
            className="text-sky hover:underline"
          >
            barrdigitalweb@gmail.com
          </a>
        </p>
      </div>
    </section>
  )
}
