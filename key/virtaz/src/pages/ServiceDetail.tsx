import { Link, useParams, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import TiltCard from '../components/TiltCard'
import { services } from '../data/content'

const orbVariants: Array<'icosahedron' | 'torus' | 'octahedron'> = ['icosahedron', 'torus', 'octahedron']

export default function ServiceDetail() {
  const { slug } = useParams()
  const index = services.findIndex((s) => s.slug === slug)
  const service = services[index]

  useEffect(() => {
    if (service) document.title = service.seo.title
  }, [service])

  if (!service) return <Navigate to="/services" replace />

  const prev = services[(index - 1 + services.length) % services.length]
  const next = services[(index + 1) % services.length]

  return (
    <>
      <PageHero
        eyebrow={`Service ${String(index + 1).padStart(2, '0')} of ${services.length}`}
        title={service.title}
        body={service.subtitle}
        variant={orbVariants[index % orbVariants.length]}
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            {service.intro.map((p) => (
              <p key={p} className="text-slate-600 leading-relaxed text-base mb-4">{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading eyebrow="Scope of Support" title={service.howWeHelpHeading} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.howWeHelp.map((item, i) => (
              <Reveal key={item.title} delay={Math.min(i * 0.05, 0.4)}>
                <TiltCard max={5}>
                  <div className="tilt-surface h-full rounded-xl border border-navy-100 bg-white p-6">
                    <h3 className="font-heading font-semibold text-navy-950 text-[15px] leading-snug">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {service.process && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-5xl px-5 lg:px-8">
            <SectionHeading eyebrow="Our Process" title="Step by Step" align="center" />
            <Reveal delay={0.1}>
              <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
                {service.process.map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full border border-navy-200 bg-mist-50 px-4 py-2 text-sm font-medium text-navy-800">
                      {step}
                    </span>
                    {i < service.process!.length - 1 && (
                      <svg width="16" height="10" viewBox="0 0 18 10" fill="none" className="text-navy-300 shrink-0"><path d="M1 5H17M17 5L13 1M17 5L13 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {service.roleStatement && (
        <section className="bg-navy-950 py-16 sm:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <Reveal className="relative mx-auto max-w-4xl px-5 lg:px-8">
            <h3 className="font-heading font-bold text-xl text-gold-300 mb-4">{service.roleStatement.heading}</h3>
            <p className="text-slate-300 leading-relaxed">{service.roleStatement.body}</p>
          </Reveal>
        </section>
      )}

      {service.extraNote && (
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-5 lg:px-8">
            <Reveal>
              <div className="rounded-2xl border border-gold-400/40 bg-gold-300/5 p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid place-items-center h-8 w-8 rounded-full bg-gold-400/15 text-gold-600">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L14.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </span>
                  <h3 className="font-heading font-bold text-lg text-navy-950">{service.extraNote.heading}</h3>
                </div>
                <div className="space-y-3">
                  {service.extraNote.body.map((p) => (
                    <p key={p} className="text-sm text-slate-600 leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <CTASection text={service.cta.text} button={service.cta.button} />

      <section className="bg-white py-10 border-t border-navy-100">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to={`/services/${prev.slug}`} className="group flex items-center gap-3 text-sm">
            <span className="grid place-items-center h-9 w-9 rounded-full border border-navy-200 group-hover:border-gold-400 transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <span>
              <span className="block text-xs text-slate-400">Previous</span>
              <span className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors">{prev.navTitle}</span>
            </span>
          </Link>
          <Link to="/services" className="text-sm font-semibold text-navy-500 hover:text-gold-500 transition-colors">
            All Services
          </Link>
          <Link to={`/services/${next.slug}`} className="group flex items-center gap-3 text-sm text-right">
            <span>
              <span className="block text-xs text-slate-400">Next</span>
              <span className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors">{next.navTitle}</span>
            </span>
            <span className="grid place-items-center h-9 w-9 rounded-full border border-navy-200 group-hover:border-gold-400 transition-colors">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </Link>
        </div>
      </section>
    </>
  )
}
