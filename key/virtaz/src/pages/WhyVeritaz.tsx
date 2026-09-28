import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import TiltCard from '../components/TiltCard'
import { whyVeritaz } from '../data/content'

export default function WhyVeritaz() {
  return (
    <>
      <PageHero
        eyebrow="Why Veritaz"
        title="Integrated. Process-Driven. Compliance-Focused."
        body="Consistent with the brief, this page deliberately avoids superlative or unverifiable claims — our differentiators are about how we work, not unverified numbers."
        variant="torus"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyVeritaz.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.06, 0.4)}>
                <TiltCard max={6}>
                  <div className="tilt-surface h-full rounded-2xl border border-navy-100 p-7">
                    <span className="font-heading text-2xl font-extrabold text-gold-500">{String(i + 1).padStart(2, '0')}</span>
                    <h3 className="mt-3 font-heading font-bold text-navy-950 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-14 text-sm text-slate-500 leading-relaxed max-w-3xl mx-auto text-center italic">
              Once Veritaz has verifiable data — years of operation, client numbers, empanelments, or similar —
              these differentiators can be strengthened with specific, factual detail.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection text="Ready to work with a structured, coordinated advisory partner?" button="Contact Veritaz" />
    </>
  )
}
