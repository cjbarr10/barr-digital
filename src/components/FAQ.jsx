import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from './useInView'

const faqs = [
  {
    q: 'Do I need to provide content and photos?',
    a: 'We can work with whatever you have. If you have photos and copy, great — we\'ll use them. If not, we can write basic copy and source stock photography. For best results, real photos of your business always outperform stock.',
  },
  {
    q: 'Will I be able to update the site myself?',
    a: 'Yes — Growth and Authority packages include a CMS (content management system) so you can update text, images, hours, and more without touching any code. We provide a short walkthrough video so you\'re comfortable from day one.',
  },
  {
    q: 'What happens after the site launches?',
    a: 'You own the site outright. We offer optional monthly care plans starting at $99/month that cover hosting, security updates, backups, and minor content edits. There\'s no lock-in — cancel anytime.',
  },
  {
    q: 'How is Barr Digital different from a $500 freelancer or Squarespace?',
    a: 'Squarespace and cheap freelancers give you a site that looks fine but loads slowly, ranks poorly, and can\'t scale. We build in React — the same technology used by Facebook and Airbnb — optimized for speed and SEO from the ground up. The difference shows up in your Google rankings and your customer calls.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. We typically split projects into 50% upfront and 50% on launch. For larger projects we can discuss a three-payment structure. We want this to be accessible for local businesses.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div
      className="border-b border-[#eee] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex justify-between items-center gap-4 py-5">
        <p className="font-medium text-navy text-sm md:text-base">{q}</p>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-lg
            transition-colors duration-200
            ${isOpen ? 'bg-sky text-navy' : 'bg-ice text-steel'}`}
        >
          +
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-[#5a6b78] text-sm leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, inView] = useInView()

  const toggle = (i) => setOpenIndex(prev => (prev === i ? null : i))

  return (
    <section id="faq" className="bg-white py-20 px-[5%]">
      <div className="max-w-3xl mx-auto" ref={ref}>

        <motion.p
          className="eyebrow mb-2"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Common questions
        </motion.p>

        <motion.h2
          className="font-serif text-navy leading-snug mb-10"
          style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)' }}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          Everything you're wondering.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              isOpen={openIndex === i}
              onClick={() => toggle(i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
