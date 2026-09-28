import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'span'
}

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

const container: Variants = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.045, delayChildren: delay },
  }),
}

const word: Variants = {
  hidden: { opacity: 0, y: '110%', rotate: 4 },
  show: {
    opacity: 1,
    y: '0%',
    rotate: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
}

const tagMap = {
  h1: motion.h1,
  h2: motion.h2,
  span: motion.span,
} as const

export default function SplitText({ text, className, delay = 0, as = 'span' }: SplitTextProps) {
  const words = text.split(' ')
  const Tag = tagMap[as]

  return (
    <Tag
      className={className}
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-1 align-bottom mr-[0.28em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  )
}
