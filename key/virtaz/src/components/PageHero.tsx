import Reveal from './Reveal'
import AccentOrb3D from './AccentOrb3D'
import SplitText from './SplitText'

interface PageHeroProps {
  eyebrow: string
  title: string
  body?: string
  variant?: 'icosahedron' | 'torus' | 'octahedron'
}

export default function PageHero({ eyebrow, title, body, variant = 'icosahedron' }: PageHeroProps) {
  return (
    <section className="relative bg-navy-950 pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-full sm:w-1/2 opacity-70">
        <AccentOrb3D variant={variant} className="h-full w-full" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-300 border border-gold-400/40 rounded-full px-4 py-1.5">
              {eyebrow}
            </span>
          </Reveal>
          <SplitText
            as="h1"
            text={title}
            delay={0.1}
            className="mt-6 font-heading font-extrabold text-fluid-h1-sm text-white leading-[1.1] text-balance"
          />
          {body && (
            <Reveal delay={0.3}>
              <p className="mt-5 text-fluid-lead text-slate-300 leading-relaxed max-w-xl">{body}</p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
