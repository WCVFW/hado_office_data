interface MarqueeProps {
  items: string[]
  className?: string
}

export default function Marquee({ items, className }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className={`marquee-row overflow-hidden ${className ?? ''}`}>
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 text-sm sm:text-base font-heading font-semibold tracking-wide">
            <span>{item}</span>
            <span className="text-gold-400/60" aria-hidden="true">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
