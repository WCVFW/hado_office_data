import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import MagneticButton from './MagneticButton'

interface CTASectionProps {
  text: string
  button: string
  to?: string
}

export default function CTASection({ text, button, to = '/contact' }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <motion.div
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <Reveal className="relative mx-auto max-w-4xl px-6 py-20 text-center">
        <h3 className="font-heading font-bold text-fluid-h2 text-white text-balance">{text}</h3>
        <MagneticButton className="mt-8">
          <Link
            to={to}
            data-cursor-hover
            className="btn-shimmer inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-semibold text-navy-950 hover:brightness-110 transition-all shadow-lg shadow-gold-500/20"
          >
            {button}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </Link>
        </MagneticButton>
      </Reveal>
    </section>
  )
}
