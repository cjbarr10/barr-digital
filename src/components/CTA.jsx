import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from './useInView'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [ref, inView] = useInView()

  async function handleSubmit(e) {
    e.preventDefault()

    const response = await fetch('https://formspree.io/f/xkoewreb', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        message,
      }),
    })

    if (response.ok) {
      setSubmitted(true)
      setEmail('')
      setMessage('')
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-navy py-24 px-[5%] overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: '600px',
          height: '300px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(74,159,212,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-2xl mx-auto text-center" ref={ref}>

        <motion.h2
          className="font-serif text-warm leading-snug mb-4"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          Ready to grow your business online?
        </motion.h2>

        <motion.p
          className="text-mid mb-10 text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Tell us about your project and we’ll get back to you within 24 hours.
        </motion.p>

        {submitted ? (
          <div className="bg-sky/10 border border-sky/30 rounded-2xl py-6 px-6 text-sky text-lg">
            ✓ Thanks! Your quote request has been sent.
          </div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            {/* EMAIL */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-5 py-4 rounded-2xl
                         bg-white border border-slate-200
                         text-slate-900 placeholder:text-slate-400
                         outline-none focus:border-sky-500"
            />

            {/* MESSAGE */}
            <textarea
              required
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              className="w-full px-5 py-4 rounded-2xl
                         bg-white border border-slate-200
                         text-slate-900 placeholder:text-slate-400
                         outline-none focus:border-sky-500 resize-none"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="bg-gold text-navy font-semibold
                         py-4 rounded-2xl
                         hover:scale-[1.02]
                         transition-all duration-300"
            >
              Get Free Quote →
            </button>
          </motion.form>
        )}

        <p className="text-mid text-sm mt-6">
          Or email directly at{' '}
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