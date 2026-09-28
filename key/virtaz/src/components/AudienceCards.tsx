import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { audiences } from '../data/content'

const icons = [
  <path key="1" d="M12 12a4 4 0 100-8 4 4 0 000 8zM5 20a7 7 0 0114 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  <path key="2" d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  <path key="3" d="M3 17l6-6 4 4 8-8M21 7v6M21 7h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  <path key="4" d="M4 21V10l8-6 8 6v11M9 21v-5h6v5M4 10h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
  <path key="5" d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
]

export default function AudienceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {audiences.map((a, i) => (
        <Reveal key={a.title} delay={i * 0.07}>
          <TiltCard max={6}>
            <div className="tilt-surface h-full rounded-xl border border-navy-100 bg-white p-6 flex flex-col">
              <span className="grid place-items-center h-11 w-11 rounded-lg bg-navy-950 text-gold-400 mb-4">
                <svg width="20" height="20" viewBox="0 0 24 24">{icons[i]}</svg>
              </span>
              <h3 className="font-heading font-semibold text-navy-950 text-base leading-snug">{a.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{a.body}</p>
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  )
}
