import Reveal from './Reveal'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  body?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, body, align = 'left', light = false }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <Reveal className={`flex flex-col ${alignClass} max-w-2xl`}>
      {eyebrow && (
        <span className={`text-xs font-semibold tracking-[0.18em] uppercase mb-3 ${light ? 'text-gold-300' : 'text-gold-500'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`gold-underline font-heading font-bold text-fluid-h2 leading-tight text-balance ${light ? 'text-white' : 'text-navy-950'} ${align === 'center' ? 'after:left-1/2 after:-translate-x-1/2' : ''}`}>
        {title}
      </h2>
      {body && (
        <p className={`mt-6 text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{body}</p>
      )}
    </Reveal>
  )
}
