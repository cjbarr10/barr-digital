const footerCols = [
  {
    title: 'Services',
    links: [
      { label: 'Launch site',      href: '#services' },
      { label: 'Growth site',      href: '#services' },
      { label: 'Authority site',   href: '#services' },
      { label: 'Monthly care plan',href: '#services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our work',  href: '#portfolio' },
      { label: 'Pricing',   href: '#pricing'   },
      { label: 'Process',   href: '#process'   },
      { label: 'Contact',   href: '#contact'   },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'hello@barrdigital.com', href: 'mailto:hello@barrdigital.com' },
      { label: 'Book a free call',      href: '#contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#080f17] border-t border-sky/10 px-[5%] pt-12 pb-6">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a
              href="#"
              className="font-serif text-xl text-warm no-underline block mb-2"
            >
              HC Digital
            </a>
            <p className="text-[#4a6070] text-sm leading-relaxed">
              Fast, modern React websites for local businesses across Tennessee and beyond.
            </p>
          </div>

          {/* Nav columns */}
          {footerCols.map(({ title, links }) => (
            <div key={title}>
              <p className="text-[10px] font-medium tracking-[0.12em] uppercase text-mid mb-3">
                {title}
              </p>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[#4a6070] text-sm hover:text-sky transition-colors duration-200
                                 no-underline"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3
                        border-t border-white/5 pt-5">
          <p className="text-[#3d5060] text-xs">
            © {new Date().getFullYear()} HC Digital. All rights reserved.
          </p>
          <p className="font-serif italic text-[#4a6070] text-sm">
            Built to be found.
          </p>
        </div>
      </div>
    </footer>
  )
}
