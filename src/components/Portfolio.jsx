import { motion } from 'framer-motion'
import { useInView } from './useInView'

import churchImg from '../assets/Images/churchImg.png'
import barberImg from '../assets/Images/barberImg.png'
import luxeImg   from '../assets/Images/luxeImg.png'

const projects = [
  {
    bg:        'bg-[#1a2e1f]',
    img:       churchImg,
    imgAlt:    'Highland Baptist Church website preview',
    accent:    '#D4A017',
    badge:     { color: '#4ade80', label: 'Live site' },
    tier:      'Starter',
    tierColor: '#4ade80',
    industry:  'Faith community · Pulaski, TN',
    tag:       'Church Website — Free Redesign',
    name:      'Highland Baptist Church',
    desc:      'Full redesign of a site last updated in 2004. Mobile-first layout with service times, YouTube sermon integration, ministry pages, and preschool spotlight.',
    pills:     ['React + Vite', 'Tailwind CSS', 'Framer Motion', 'SEO'],
    result:    'Delivered as a free community project — now a live portfolio case study.',
    href:      'https://highland-webpage.vercel.app',
    btnLabel:  'View project',
    external:  true,
  },
  {
    bg:        'bg-[#0A0A0A]',
    img:       barberImg,
    imgAlt:    'Cut N Up Barbershop website preview',
    accent:    '#C9A84C',
    badge:     { color: '#fbbf24', label: 'Live site' },
    tier:      'Growth',
    tierColor: '#C9A84C',
    industry:  'Barbershop · Arkadelphia, AR',
    tag:       'Premium Brand Website',
    name:      'Cut N Up Barbershop',
    desc:      'Cinematic luxury barbershop brand with fullscreen hero, Bebas Neue typography, matte black + gold palette, masonry gallery, and Fresha booking integration.',
    pills:     ['React + Vite', 'Tailwind CSS', 'Framer Motion', 'Fresha Booking'],
    result:    'Premium 5-page brand experience designed to attract high-value local clients.',
    href:      'https://cut-n-up-barbershop.vercel.app',
    btnLabel:  'View Project',
    external:  true,
  },
  {
    bg:        'bg-[#0A0A0A]',
    img:       luxeImg,
    imgAlt:    'Luxe Estates luxury real estate website preview',
    accent:    '#C9A84C',
    badge:     { color: '#C9A84C', label: 'Live site' },
    tier:      'Authority',
    tierColor: '#C9A84C',
    industry:  'Luxury real estate · Multi-market',
    tag:       'Full-Stack Real Estate Platform',
    name:      'Luxe Estates',
    desc:      'Multi-page luxury real estate platform with 12 property listings, advanced filters, mortgage calculator, agent profiles, and full 9-page architecture.',
    pills:     ['React Router', 'Tailwind CSS', 'Framer Motion', 'Multi-page', 'Mortgage Calc'],
    result:    'Authority-level template — 9 pages, 33 components, production-ready for any real estate client.',
    href:      'https://real-estate-site-pi-murex.vercel.app',
    btnLabel:  'View Project',
    external:  true,
  },
]

// ── Tier badge ───────────────────────────────────────────────────────────────
function TierBadge({ tier, color }) {
  const icons = { Starter: '⬡', Growth: '⬡⬡', Authority: '⬡⬡⬡' }
  return (
    <div
      className="absolute top-3 left-3 z-10 flex items-center gap-1.5
                 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-wide uppercase"
      style={{
        background: 'rgba(0,0,0,0.65)',
        backdropFilter: 'blur(6px)',
        border: `1px solid ${color}40`,
        color: color,
      }}
    >
      <span style={{ letterSpacing: '-1px', fontSize: '8px' }}>{icons[tier]}</span>
      {tier} Plan
    </div>
  )
}

// ── Arrow icon ───────────────────────────────────────────────────────────────
function ArrowIcon() {
  return (
    <svg
      width="13" height="13" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2.5"
      className="transition-transform duration-200 group-hover/btn:translate-x-1"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ── Tier legend ───────────────────────────────────────────────────────────────
function TierLegend() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mb-12 p-4 bg-[#f8fafb] rounded-xl border border-[#e8e3da]">
      {[
        { tier: 'Starter',   color: '#4ade80', desc: 'Small business launch site'   },
        { tier: 'Growth',    color: '#C9A84C', desc: 'Full brand experience'         },
        { tier: 'Authority', color: '#C9A84C', desc: 'Multi-page platform & systems' },
      ].map(({ tier, color, desc }) => (
        <div key={tier} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
          <span className="text-xs font-semibold text-navy">{tier}</span>
          <span className="text-[11px] text-[#5a6b78]">— {desc}</span>
        </div>
      ))}
    </div>
  )
}

// ── Single card ───────────────────────────────────────────────────────────────
function ProjectCard({ project, index, inView }) {
  const {
    bg, img, imgAlt, accent, badge, tier, tierColor,
    industry, tag, name, desc, pills, result,
    href, btnLabel, external,
  } = project

  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      aria-label={`View ${name} project`}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col rounded-2xl overflow-hidden
                 border border-[#e8e3da] bg-white no-underline
                 transition-all duration-300
                 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                 hover:border-sky/40"
    >
      {/* ── Thumbnail ── */}
      <div className={`relative h-52 flex items-center justify-center overflow-hidden ${bg}`}>

        {/* Screenshot */}
        <img
          src={img}
          alt={imgAlt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top
                     transition-transform duration-500 group-hover:scale-105"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition-colors duration-300" />

        {/* Tier badge — top left */}
        <TierBadge tier={tier} color={tierColor} />

        {/* Status badge — top right */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5
                        bg-black/55 backdrop-blur-sm border border-white/20
                        rounded-full px-2.5 py-1">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: badge.color }}
          />
          <span className="text-white/85 text-[10px] font-medium tracking-wide uppercase">
            {badge.label}
          </span>
        </div>

      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-5">

        <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-mid mb-0.5">
          {industry}
        </p>

        <p className="text-sky text-[10px] font-medium tracking-wide uppercase mb-2">
          {tag}
        </p>

        <h3 className="font-serif text-navy text-lg leading-snug mb-2">
          {name}
        </h3>

        <p className="text-[#5a6b78] text-sm leading-relaxed mb-3">
          {desc}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-3">
          {pills.map(pill => (
            <span
              key={pill}
              className="text-[10px] font-medium tracking-wide uppercase
                         bg-[#f0f4f8] text-steel border border-[#e0e8f0]
                         px-2 py-0.5 rounded-full"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex items-start gap-1.5 bg-[#edfaf4] border border-[#c3ebda]
                        rounded-lg px-3 py-2 text-[#3d8c6e] text-xs leading-snug mb-4">
          <span className="text-[#1d9e75] mt-px flex-shrink-0">✓</span>
          {result}
        </div>

        <div className="flex-1" />

        <div className="group/btn flex items-center gap-1.5 text-sky text-sm font-medium
                        transition-all duration-200 group-hover/btn:gap-2.5 group-hover:text-steel">
          {btnLabel}
          <ArrowIcon />
        </div>
      </div>
    </motion.a>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────
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
          Three real projects.
          <br />Built from scratch.
        </motion.h2>

        <motion.p
          className="text-[#4a6070] max-w-lg leading-relaxed mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.14 }}
        >
          Every site designed and developed by Barr Digital — no templates,
          no page builders, just clean React code built to perform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TierLegend />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.55, duration: 0.5 }}
        >
          <a href="#contact" className="btn-primary">
            Start your project →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
