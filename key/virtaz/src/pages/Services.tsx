import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import TiltCard from '../components/TiltCard'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="What We Do"
        title="Seven services, one coordinated advisory partner."
        body="From property search to loan resolution — structured, compliant and professionally coordinated advisory across the full lifecycle of a property or credit decision."
        variant="torus"
      />

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <TiltCard max={5}>
                  <Link
                    to={`/services/${s.slug}`}
                    data-cursor-hover
                    className="tilt-surface group block h-full rounded-2xl border border-navy-100 p-8"
                  >
                    <span className="font-heading text-3xl font-extrabold text-navy-100 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-3 font-heading font-bold text-xl text-navy-950 group-hover:text-gold-500 transition-colors">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500 font-medium">{s.subtitle}</p>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed line-clamp-3">{s.intro[0]}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-500">
                      Learn More
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection text="Not sure which service you need? Talk to our advisory team." button="Get Guidance" />
    </>
  )
}
