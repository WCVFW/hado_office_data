import Reveal from './Reveal'
import TiltCard from './TiltCard'

interface Step {
  title: string
  body: string
}

export default function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.08}>
          <TiltCard max={6} className="relative">
            <div className="tilt-surface relative h-full rounded-xl border border-navy-100 bg-white p-6">
              <span className="font-heading text-4xl font-extrabold text-navy-100 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-heading font-semibold text-lg text-navy-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.body}</p>
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-navy-200">
                  <svg width="18" height="10" viewBox="0 0 18 10" fill="none"><path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </span>
              )}
            </div>
          </TiltCard>
        </Reveal>
      ))}
    </div>
  )
}
