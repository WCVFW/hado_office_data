import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [enabled] = useState(() => typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 550, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 550, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!enabled) return

    document.documentElement.classList.add('has-custom-cursor')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const target = e.target as HTMLElement
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }
    const down = () => setPressed(true)
    const up = () => setPressed(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <motion.div
      style={{ translateX: springX, translateY: springY }}
      className="pointer-events-none fixed top-0 left-0 z-[90] mix-blend-difference"
    >
      <motion.div
        animate={{
          width: hovering ? 48 : 14,
          height: hovering ? 48 : 14,
          x: hovering ? -24 : -7,
          y: hovering ? -24 : -7,
          scale: pressed ? 0.85 : 1,
        }}
        transition={{ type: 'spring', stiffness: 420, damping: 32 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  )
}
