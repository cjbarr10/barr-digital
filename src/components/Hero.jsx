import { motion } from 'framer-motion'

// Stagger children animation helper
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

const trustStats = [
  { num: '2–3 wks',  label: 'Avg. delivery time' },
  { num: '90+',      label: 'Lighthouse score guaranteed' },
  { num: '$0',       label: 'Surprise fees. Ever.' },
]

const proofItems = [
  'Contractors & home services',
  'Restaurants & food',
  'Medical & dental offices',
  'Law practices',
]

export default function Hero() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-navy overflow-hidden py-28 md:py-36 px-[5%]">
        {/* Decorative orb */}
        <div className="hero-orb" aria-hidden="true" />

        <motion.div
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="text-2xs font-medium tracking-[0.14em] uppercase text-sky mb-5"
          >
            React · Tailwind · Local SEO
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="font-serif text-warm leading-[1.15] max-w-2xl mb-6"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)' }}
          >
            Your local business,{' '}
            <em className="italic text-sky not-italic" style={{ fontStyle: 'italic' }}>
              built to be found.
            </em>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-mid text-lg leading-relaxed max-w-md mb-10"
          >
            We build fast, modern websites for contractors, restaurants, and service
            businesses — designed to rank on Google and turn visitors into customers.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 items-center mb-16">
            <a href="#contact" className="btn-primary">
              Get a free quote →
            </a>
            <a href="#portfolio" className="btn-ghost">
              See our work ↓
            </a>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-10"
          >
            {trustStats.map(({ num, label }) => (
              <div key={label}>
                <span className="block font-serif text-warm text-3xl leading-none mb-1">
                  {num}
                </span>
                <span className="text-mid text-xs tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Social proof bar ── */}
      <div className="bg-slate border-b border-sky/10 px-[5%] py-3.5">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-6">
          <span className="text-2xs font-medium tracking-[0.1em] uppercase text-mid whitespace-nowrap">
            Trusted by local businesses across Tennessee
          </span>
          <div className="flex flex-wrap gap-6">
            {proofItems.map(item => (
              <span key={item} className="text-sky text-xs flex items-center gap-1.5">
                <span className="text-gold text-[10px]">✓</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
