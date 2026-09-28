import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-cursor-hover
          className="fixed bottom-6 right-5 sm:right-8 z-40 grid place-items-center h-12 w-12 rounded-full bg-navy-950 text-gold-300 border border-gold-400/30 shadow-lg shadow-black/25 hover:border-gold-400 transition-colors"
          aria-label="Back to top"
        >
          <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
            <path d="M8 13V3M8 3L3 8M8 3l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
