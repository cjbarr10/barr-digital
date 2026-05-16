import { motion } from 'framer-motion'
import { useInView } from './useInView'

const plans = [
  {
    name:     'Launch',
    price:    '$600',
    cadence:  'one-time · delivered in 2 weeks',
    featured: false,
    features: [
      '5-page React website',
      'Mobile-first design',
      'Contact form + Google Maps',
      'Basic on-page SEO',
      '1 round of revisions',
      'Deployed & live',
    ],
  },
  {
    name:     'Growth',
    price:    '$1,200',
    cadence:  'one-time · delivered in 3 weeks',
    featured: true,
    features: [
      'Up to 8 pages',
      'CMS — edit your own content',
      'Analytics dashboard',
      'Google Business integration',
      '90+ Lighthouse score',
      '2 rounds of revisions',
      'Priority support for 30 days',
    ],
  },
  {
    name:     'Authority',
    price:    '$2,000',
    cadence:  'one-time · delivered in 4 weeks',
    featured: false,
    features: [
      '10+ pages + blog',
      'Full CMS + lead capture',
      'Local SEO strategy doc',
      'Custom animations',
      'Email integration',
      'Unlimited revisions (in scope)',
      '3 months priority support',
    ],
  },
]

export default function Pricing() {
  const [ref, inView] = useInView()

  return (
    <section id="pricing" className="bg-warm py-20 px-[5%]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          className="eyebrow mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Transparent pricing
        </motion.p>

        <motion.h2
          className="font-serif text-navy leading-snug max-w-xl mb-3"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Fixed prices. No surprises.
        </motion.h2>

        <motion.p
          className="text-[#4a6070] max-w-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          Every package is a fixed quote — you'll never receive an invoice you didn't expect.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          {plans.map(({ name, price, cadence, featured, features }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className={`relative bg-white rounded-2xl p-7 transition-all duration-200
                ${featured
                  ? 'border-2 border-sky shadow-[0_4px_30px_rgba(74,159,212,0.15)] -mt-2'
                  : 'border border-[#e8e3da] hover:-translate-y-1 hover:border-sky/40'
                }`}
            >
              {/* Featured badge */}
              {featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2
                                bg-sky text-navy text-[10px] font-medium tracking-wide
                                uppercase px-4 py-1 rounded-full whitespace-nowrap">
                  Most popular
                </div>
              )}

              <p className="text-xs font-medium tracking-wider uppercase text-steel mb-2">
                {name}
              </p>
              <p className="font-serif text-navy text-5xl mb-1 leading-none">{price}</p>
              <p className="text-[#8a9ba8] text-xs mb-5">{cadence}</p>

              <hr className="border-[#f0ece5] mb-5" />

              <ul className="space-y-2 mb-7">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#3d5060] leading-snug">
                    <span className="text-sky mt-0.5 flex-shrink-0 text-xs">→</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-2.5 rounded-full text-sm font-medium
                            transition-all duration-200
                  ${featured
                    ? 'bg-sky text-navy hover:bg-[#5fb3e8] hover:-translate-y-px'
                    : 'border-[1.5px] border-steel text-navy hover:bg-navy hover:text-warm hover:border-navy'
                  }`}
              >
                Get started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
