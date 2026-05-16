import { motion } from 'framer-motion'
import { useInView } from './useInView'

const problems = [
  {
    icon: '🐢',
    title: 'Loads too slowly',
    desc: '53% of mobile visitors leave if a site takes more than 3 seconds. Most local business sites take 6–10 seconds.',
  },
  {
    icon: '📱',
    title: 'Broken on mobile',
    desc: '70% of local searches happen on a phone. If your site doesn\'t work on mobile, you\'re invisible to most customers.',
  },
  {
    icon: '🔍',
    title: 'Invisible on Google',
    desc: 'Without proper SEO setup, you won\'t appear when someone nearby searches for what you offer.',
  },
  {
    icon: '📞',
    title: 'No clear call to action',
    desc: 'Visitors land on your site and don\'t know what to do next. A good site tells them exactly how to become your customer.',
  },
]

const services = [
  {
    num: '01',
    title: 'Launch site',
    desc: 'A fast, professional 3-page website to establish your online presence and start showing up in local searches.',
    price: 'From $249',
    time:  'Delivered in 2 weeks',
  },
  {
    num: '02',
    title: 'Growth site',
    desc: 'Full business site with CMS, analytics, Google Business integration, and 90+ Lighthouse performance score.',
    price: 'From $499',
    time:  'Delivered in 3 weeks',
  },
  {
    num: '03',
    title: 'Authority site',
    desc: 'Premium site with blog, lead capture, local SEO strategy, custom animations, and 3 months priority support.',
    price: 'From $999',
    time:  'Delivered in 4 weeks',
  },
  {
    num: '04',
    title: 'Monthly care plan',
    desc: 'Hosting, security, backups, content updates, and a monthly performance report. Add to any project.',
    price: 'From $99/mo',
    time:  'Cancel anytime',
  },
]

// Shared scroll-trigger animation config
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  show:    { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut', delay } },
})

export default function Services() {
  const [probRef, probInView] = useInView()
  const [svcRef,  svcInView]  = useInView()

  return (
    <>
      {/* ── Problem section ── */}
      <section id="problem" className="bg-warm py-20 px-[5%]">
        <div className="max-w-6xl mx-auto" ref={probRef}>
          <motion.p
            className="eyebrow mb-2"
            variants={fadeUp()}
            initial="hidden"
            animate={probInView ? 'show' : 'hidden'}
          >
            Sound familiar?
          </motion.p>

          <motion.h2
            className="font-serif text-navy leading-snug max-w-xl mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={probInView ? 'show' : 'hidden'}
          >
            Most local business websites are quietly losing you customers.
          </motion.h2>

          <motion.p
            className="text-[#4a6070] max-w-lg leading-relaxed mb-12"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={probInView ? 'show' : 'hidden'}
          >
            Your site might look fine to you — but if it's slow, broken on mobile, or
            invisible on Google, it's costing you.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {problems.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                variants={fadeUp(0.1 * i)}
                initial="hidden"
                animate={probInView ? 'show' : 'hidden'}
                className="bg-white border border-[#e8e3da] rounded-xl p-6
                           hover:-translate-y-1 hover:border-sky/40 transition-all duration-200"
              >
                <span className="text-2xl mb-3 block">{icon}</span>
                <h3 className="font-medium text-navy mb-2">{title}</h3>
                <p className="text-[#5a6b78] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services section ── */}
      <section id="services" className="bg-navy py-20 px-[5%]">
        <div className="max-w-6xl mx-auto" ref={svcRef}>
          <motion.p
            className="text-2xs font-medium tracking-[0.14em] uppercase text-sky mb-2"
            variants={fadeUp()}
            initial="hidden"
            animate={svcInView ? 'show' : 'hidden'}
          >
            What we build
          </motion.p>

          <motion.h2
            className="font-serif text-warm leading-snug max-w-xl mb-3"
            style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
            variants={fadeUp(0.08)}
            initial="hidden"
            animate={svcInView ? 'show' : 'hidden'}
          >
            Every site built for speed, search, and sales.
          </motion.h2>

          <motion.p
            className="text-mid max-w-lg leading-relaxed mb-12"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate={svcInView ? 'show' : 'hidden'}
          >
            We specialize in one thing: React websites for local businesses that actually perform.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ num, title, desc, price, time }, i) => (
              <motion.div
                key={num}
                variants={fadeUp(0.1 * i)}
                initial="hidden"
                animate={svcInView ? 'show' : 'hidden'}
                className="bg-slate border border-sky/15 rounded-xl p-7
                           hover:border-sky/40 hover:-translate-y-1 transition-all duration-200
                           group cursor-default"
              >
                <span className="block font-serif text-5xl text-sky/20 leading-none mb-3
                                 group-hover:text-sky/35 transition-colors duration-200">
                  {num}
                </span>
                <h3 className="font-medium text-warm mb-2">{title}</h3>
                <p className="text-mid text-sm leading-relaxed mb-4">{desc}</p>
                <p className="text-sky text-xs font-medium">
                  {price} · {time}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
