import { motion } from 'framer-motion'
import { useInView } from './useInView'

const plans = [
  {
    name:     'Starter',
    price:    '$249',
    cadence:  'one-time project',
    featured: false,
    features: [
      'Custom 3-page website',
      'Mobile-optimized design',
      'Contact form + Google Maps',
      'Basic local SEO setup',
      'Fast-loading performance',
      'Launch support included',
    ],
  },
  {
    name:     'Growth',
    price:    '$499',
    cadence:  'most popular',
    featured: true,
    features: [
      'Custom 5-page website',
      'Advanced animations + branding',
      'CMS content editing',
      'Google Business integration',
      'Analytics dashboard',
      'Lead capture optimization',
      'Priority support included',
    ],
  },
  {
    name:     'Authority',
    price:    '$999',
    cadence:  'best for scaling businesses',
    featured: false,
    features: [
      '8+ page custom website',
      'Blog + SEO structure',
      'Full CMS integration',
      'Custom lead funnels',
      'Advanced performance optimization',
      'Premium animations & interactions',
      'Ongoing support + strategy',
    ],
  },
]

const addon = {
  name:     'Monthly Care Plan',
  price:    '$100',
  cadence:  'per month · cancel anytime',
  features: [
    'Hosting & security updates',
    'Monthly backups',
    'Minor content edits',
    'Performance monitoring',
    'Priority email support',
  ],
}

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

        {/* Main 3 plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start mb-6">
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

        {/* Monthly care plan add-on */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="bg-navy rounded-2xl p-7 border border-sky/20"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <p className="text-xs font-medium tracking-wider uppercase text-sky">
                  Add-on
                </p>
                <span className="bg-sky/20 text-sky text-[10px] font-medium px-2.5 py-0.5 rounded-full">
                  Pair with any plan
                </span>
              </div>
              <p className="font-serif text-warm text-2xl mb-1">{addon.name}</p>
              <p className="text-mid text-sm">{addon.cadence}</p>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="font-serif text-warm text-5xl leading-none">{addon.price}</span>
              <span className="text-mid text-sm">/mo</span>
            </div>

            <div className="flex flex-col gap-2 md:min-w-[220px]">
              {addon.features.map(f => (
                <div key={f} className="flex items-center gap-2 text-sm text-mid">
                  <span className="text-sky text-xs flex-shrink-0">→</span>
                  {f}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="whitespace-nowrap border border-sky/40 text-sky text-sm font-medium
                         px-6 py-2.5 rounded-full hover:bg-sky hover:text-navy
                         transition-all duration-200 text-center"
            >
              Add to my plan
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
