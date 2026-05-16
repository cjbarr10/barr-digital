import { motion } from 'framer-motion'
import { useInView } from './useInView'

const projects = [
  {
    bg:     'bg-navy',
    accent: '#4A9FD4',
    cta:    '#C8A96E',
    tag:    'Home services · Launch site',
    name:   'Apex Plumbing & HVAC',
    result: 'Ranked #3 on Google Maps within 6 weeks of launch.',
  },
  {
    bg:     'bg-[#1a2f1a]',
    accent: '#5DCAA5',
    cta:    '#1D9E75',
    tag:    'Restaurant · Growth site',
    name:   'The Ironwood Kitchen',
    result: '40% more reservation form submissions in month one.',
  },
  {
    bg:     'bg-[#2a1a10]',
    accent: '#C8A96E',
    cta:    '#C8A96E',
    tag:    'Law practice · Authority site',
    name:   'Mercer Family Law',
    result: 'From invisible to page 1 for 3 local search terms.',
  },
]

// Small SVG mock-up thumbnail rendered inside each card
function MockThumb({ accent, cta }) {
  return (
    <div className="w-52 bg-white/7 rounded-lg p-3 border border-white/10">
      <div className="h-1.5 rounded mb-1.5" style={{ background: accent, width: '60%' }} />
      <div className="h-1.5 rounded mb-1.5 bg-white/20 w-4/5" />
      <div className="h-1.5 rounded mb-3 bg-white/20 w-1/2" />
      <div className="h-5 rounded-full" style={{ background: cta, width: '35%' }} />
    </div>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView()

  return (
    <section id="portfolio" className="bg-white py-20 px-[5%]">
      <div className="max-w-6xl mx-auto" ref={ref}>

        <motion.p
          className="eyebrow mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Recent work
        </motion.p>

        <motion.h2
          className="font-serif text-navy leading-snug max-w-xl mb-3"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Sites that perform, not just look good.
        </motion.h2>

        <motion.p
          className="text-[#4a6070] max-w-lg leading-relaxed mb-12"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          Every project is built from scratch — no templates, no shortcuts.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map(({ bg, accent, cta, tag, name, result }, i) => (
            <motion.article
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="rounded-xl overflow-hidden border border-[#e8e3da]
                         hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
            >
              {/* Thumbnail */}
              <div className={`${bg} h-48 flex items-center justify-center`}>
                <MockThumb accent={accent} cta={cta} />
              </div>

              {/* Info */}
              <div className="p-5 bg-white">
                <p className="text-sky text-[10px] font-medium tracking-wide uppercase mb-1.5">
                  {tag}
                </p>
                <h3 className="font-medium text-navy mb-1.5">{name}</h3>
                <p className="text-[#5a6b78] text-sm leading-relaxed">{result}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
