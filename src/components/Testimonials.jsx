import { motion } from 'framer-motion'
import { useInView } from './useInView'

const testimonials = [
  {
    initials: 'DM',
    name:     'Dave M.',
    biz:      'Owner, Apex Plumbing & HVAC',
    quote:    'We were losing customers to competitors with better websites. Barr Digital fixed that. Our phone started ringing within weeks.',
  },
  {
    initials: 'SL',
    name:     'Sarah L.',
    biz:      'Owner, The Ironwood Kitchen',
    quote:    'No jargon, no surprises, just a great website delivered on time. Exactly what I needed as a small business owner.',
  },
  {
    initials: 'RM',
    name:     'Rachel M.',
    biz:      'Partner, Mercer Family Law',
    quote:    'I was skeptical a new website would make a difference. I was wrong. We\'re now on the first page of Google for our main search terms.',
  },
]

export default function Testimonials() {
  const [ref, inView] = useInView()

  return (
    <section id="testimonials" className="bg-navy py-20 px-[5%]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          className="text-2xs font-medium tracking-[0.14em] uppercase text-sky mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Client results
        </motion.p>

        <motion.h2
          className="font-serif text-warm leading-snug max-w-xl mb-12"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          What local business owners say.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map(({ initials, name, biz, quote }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
              className="bg-slate border border-sky/10 rounded-xl p-7
                         hover:border-sky/30 transition-all duration-200"
            >
              {/* Stars */}
              <p className="text-gold tracking-wide mb-4">★★★★★</p>

              {/* Quote */}
              <p className="font-serif italic text-warm text-lg leading-relaxed mb-6">
                "{quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-steel flex items-center justify-center
                                text-sky text-xs font-medium flex-shrink-0">
                  {initials}
                </div>
                <div>
                  <p className="text-warm text-sm font-medium">{name}</p>
                  <p className="text-mid text-xs">{biz}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
