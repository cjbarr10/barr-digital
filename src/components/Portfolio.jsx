import { motion } from 'framer-motion'
import { useInView } from './useInView'

import churchImg   from '../assets/Images/churchImg.png'
import barberImg   from '../assets/Images/barberImg.png'
import pressureImg from '../assets/Images/pressurewashingImg.png'

const projects = [
  {
    bg:       'bg-[#1a2e1f]',
    img:      churchImg,
    imgAlt:   'Highland Baptist Church website preview',
    accent:   '#D4A017',
    badge:    { color: '#4ade80', label: 'Live site' },
    industry: 'Faith community · Pulaski, TN',
    tag:      'Church Website — Free Redesign',
    name:     'Highland Baptist Church',
    desc:     'Full redesign of a site last updated in 2004. Mobile-first layout with service times, YouTube sermon integration, and ministry pages.',
    pills:    ['React + Vite', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    result:   'Delivered as a free community project — now a live case study.',
    href:     'https://highland-webpage.vercel.app/',
    btnLabel: 'View project',
    external: true,
  },
  {
    bg:       'bg-[#0A0A0A]',
    img:      barberImg,
    imgAlt:   'Cut-N-Up Barbershop website preview',
    accent:   '#C9A84C',
    badge:    { color: '#fbbf24', label: 'Live site' },
    industry: 'Barbershop · Arkadelphia, AR',
    tag:      'Premium Brand Website — Spec Project',
    name:     'Cut-N-Up Barbershop',
    desc:     'Cinematic brand experience with matte black + gold palette, Bebas Neue typography, Framer Motion animations, and Fresha booking integration.',
    pills:    ['React + Vite', 'Tailwind CSS', 'Framer Motion', 'Dark luxury UI'],
    result:   'Designed to attract premium barbershop clients who want a brand — not a template.',
    href:     'https://barber-webpage-sigma.vercel.app',
    btnLabel: 'View project',
    external: true,
  },
  {
    bg:       'bg-[#0B1628]',
    img:      pressureImg,
    imgAlt:   'ProWash Pressure Washing website preview',
    accent:   '#0EA5E9',
    badge:    { color: '#38bdf8', label: 'Live site' },
    industry: 'Home services · Local market',
    tag:      'Lead-Gen Website — Spec Project',
    name:     'ProWash Pressure Washing',
    desc:     'Conversion-focused site with a drag-to-compare before/after slider, glassmorphism quote form, mobile sticky CTA, and 8 animated sections.',
    pills:    ['React + Vite', 'Tailwind CSS', 'Framer Motion', 'Before/After slider'],
    result:   'Built to generate quote requests — mobile sticky CTA and quote form with success state.',
    href:     'https://pressurewash-website-koiy.vercel.app',
    btnLabel: 'View project',
    external: true,
  },
]

function ArrowIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function ProjectCard({ project, index, inView }) {
  const { bg, img, imgAlt, badge, industry, tag, name, desc, pills, result, href, btnLabel, external } = project
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={`View ${name} project`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`portfolio-card-link group`}
    >
      <div className={`relative h-52 overflow-hidden ${bg}`}>
        <img src={img} alt={imgAlt} loading="lazy" className="portfolio-thumb-img" />
        <div className="portfolio-thumb-overlay" />
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 bg-black/55 backdrop-blur-sm border border-white/20 rounded-full px-2.5 py-1">
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: badge.color }} />
          <span className="text-white/85 text-[10px] font-medium tracking-wide uppercase">{badge.label}</span>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 bg-white">
        <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-mid mb-0.5">{industry}</p>
        <p className="text-sky text-[10px] font-medium tracking-wide uppercase mb-2">{tag}</p>
        <h3 className="font-serif text-navy text-lg leading-snug mb-2">{name}</h3>
        <p className="text-[#5a6b78] text-sm leading-relaxed mb-3">{desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {pills.map(pill => (
            <span key={pill} className="text-[10px] font-medium tracking-wide uppercase bg-[#f0f4f8] text-steel border border-[#e0e8f0] px-2 py-0.5 rounded-full">{pill}</span>
          ))}
        </div>
        <div className="flex items-start gap-1.5 bg-[#edfaf4] border border-[#c3ebda] rounded-lg px-3 py-2 text-[#3d8c6e] text-xs leading-snug mb-4">
          <span className="text-[#1d9e75] mt-px flex-shrink-0">✓</span>
          {result}
        </div>
        <div className="flex-1" />
        <div className="portfolio-view-btn">{btnLabel}<ArrowIcon /></div>
      </div>
    </motion.a>
  )
}

export default function Portfolio() {
  const [ref, inView] = useInView()
  return (
    <section id="portfolio" className="bg-white py-20 px-[5%]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.p className="eyebrow mb-2" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          Recent work
        </motion.p>
        <motion.h2 className="font-serif text-navy leading-snug max-w-xl mb-3" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}>
          Three real projects.<br />Built from scratch.
        </motion.h2>
        <motion.p className="text-[#4a6070] max-w-lg leading-relaxed mb-12" initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.14 }}>
          Every site designed and developed by Barr Digital — no templates, no page builders, just clean React code built to perform.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} inView={inView} />
          ))}
        </div>
        <motion.div className="flex justify-center mt-12" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55, duration: 0.5 }}>
          <a href="#contact" className="btn-primary">Start your project →</a>
        </motion.div>
      </div>
    </section>
  )
}
