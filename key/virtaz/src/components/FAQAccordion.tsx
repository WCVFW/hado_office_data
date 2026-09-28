import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal'

interface FAQItem {
  q: string
  a: string
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <Reveal key={item.q} delay={Math.min(i * 0.03, 0.3)}>
            <div className={`rounded-xl border bg-white overflow-hidden transition-colors ${isOpen ? 'border-gold-400' : 'border-navy-100'}`}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5"
              >
                <span className="font-heading font-semibold text-navy-950 text-sm sm:text-base">{item.q}</span>
                <span className={`shrink-0 grid place-items-center h-7 w-7 rounded-full border transition-all ${isOpen ? 'border-gold-400 bg-gold-400/10 rotate-45' : 'border-navy-200'}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M1 6H11" stroke={isOpen ? '#c9a24b' : '#1f3760'} strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm leading-relaxed text-slate-600">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        )
      })}
    </div>
  )
}
