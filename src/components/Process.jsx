import { motion } from 'framer-motion'
import { useInView } from './useInView'

const steps = [
  {
    num: '1',
    week: 'Day 1–2',
    title: 'Discovery call',
    desc: 'We learn your business, goals, and what success looks like. Free, no obligation.',
  },
  {
    num: '2',
    week: 'Day 3–5',
    title: 'Proposal & contract',
    desc: 'You receive a fixed-price proposal with full scope. No open-ended billing.',
  },
  {
    num: '3',
    week: 'Week 1–2',
    title: 'Design & build',
    desc: 'We design and develop your site, sharing progress at each milestone.',
  },
  {
    num: '4',
    week: 'Week 2–3',
    title: 'Review & refine',
    desc: 'You review, request changes, and we polish until it\'s exactly right.',
  },
  {
    num: '5',
    week: 'Week 3–4',
    title: 'Launch',
    desc: 'We go live, submit to Google, and you start showing up in searches.',
  },
]

export default function Process() {
  const [ref, inView] = useInView()

  return (
    <section id="process" className="bg-warm py-20 px-[5%]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          className="eyebrow mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          How it works
        </motion.p>

        <motion.h2
          className="font-serif text-navy leading-snug max-w-xl mb-3"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          From first call to live site in under a month.
        </motion.h2>

        <motion.p
          className="text-[#4a6070] max-w-lg leading-relaxed mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          A clear, structured process with no surprises — so you always know what's happening.
        </motion.p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {steps.map(({ num, week, title, desc }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="relative"
            >
              {/* Connector line (hidden on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 left-10 right-0 h-px bg-[#e8e3da]" />
              )}

              {/* Step number circle */}
              <div className="w-9 h-9 rounded-full bg-navy text-warm font-serif text-base
                              flex items-center justify-center mb-4 relative z-10">
                {num}
              </div>

              <p className="text-sky text-[10px] font-medium tracking-wide uppercase mb-1">
                {week}
              </p>
              <h3 className="font-medium text-navy text-sm mb-1.5">{title}</h3>
              <p className="text-[#5a6b78] text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
