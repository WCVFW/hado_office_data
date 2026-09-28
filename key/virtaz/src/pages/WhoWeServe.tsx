import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { audiences } from '../data/content'

export default function WhoWeServe() {
  return (
    <>
      <PageHero
        eyebrow="Who We Serve"
        title="Individuals, businesses, investors, banks and financial institutions."
        body="Different visitors arrive with very different intents — here's how Veritaz supports each."
        variant="icosahedron"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8 flex flex-col gap-6">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="rounded-2xl border border-navy-100 p-8 sm:p-10 card-hover flex flex-col sm:flex-row gap-6">
                <div className="sm:w-64 shrink-0">
                  <span className="text-xs font-semibold tracking-[0.18em] uppercase text-gold-500">Segment {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-heading font-bold text-xl text-navy-950">{a.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{a.body}</p>
                </div>
                <div className="flex-1 border-t sm:border-t-0 sm:border-l border-navy-100 pt-5 sm:pt-0 sm:pl-6">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{a.long}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection text="Wherever you fit, our team is ready to understand your situation." button="Contact Veritaz" />
    </>
  )
}
