import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import TiltCard from '../components/TiltCard'
import { institutionalOffer, institutionalWhy } from '../data/content'

export default function ForBanks() {
  return (
    <>
      <PageHero
        eyebrow="For Banks & NBFCs"
        title="A Structured, Compliant Partner for Your Loan Portfolio"
        body="Banks, NBFCs, financial institutions and fintech lenders manage large and diverse loan portfolios, where consistent follow-up, professional borrower communication and structured resolution support directly affect portfolio health."
        variant="octahedron"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <p className="text-slate-600 leading-relaxed">
              Veritaz Consultancy Limited works with lending institutions as an outsourced, contractually
              appointed partner across collection, recovery, resolution-support and related coordination
              services — subject to applicable regulatory requirements and the terms of appointment.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist-50 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading eyebrow="Institutional Services" title="What We Offer Institutional Clients" align="center" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {institutionalOffer.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <TiltCard max={5}>
                  <Link to={`/services/${item.slug}`} data-cursor-hover className="tilt-surface group block h-full rounded-2xl border border-navy-100 bg-white p-7">
                    <h3 className="font-heading font-bold text-lg text-navy-950 group-hover:text-gold-500 transition-colors">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.body}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold-500">
                      View Service
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Why Partner With Us" title="Why Institutions Work With Veritaz" light />
            </div>
            <div className="lg:col-span-7 grid gap-4">
              {institutionalWhy.map((point, i) => (
                <Reveal key={point} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-xl border border-navy-700/60 bg-navy-900/60 p-5">
                    <span className="shrink-0 grid place-items-center h-7 w-7 rounded-full bg-gold-400/15 text-gold-300 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <p className="text-sm leading-relaxed text-slate-300">{point}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <SectionHeading eyebrow="Engagement Approach" title="Strictly Within Your Authorisation" align="center" />
          <Reveal delay={0.1}>
            <p className="mt-8 text-slate-600 leading-relaxed text-center">
              All institutional services are provided subject to contractual appointment, applicable
              regulatory requirements, and the specific authorisation granted by your institution. Veritaz
              does not undertake collection, recovery, resolution or portfolio-support activity without a
              formal engagement in place, and operates strictly within the boundaries, protocols and
              escalation matrix defined by the appointing institution.
            </p>
          </Reveal>
        </div>
      </section>

      <CTASection
        text="Exploring an outsourced collection, recovery or portfolio-support partner?"
        button="Discuss an Institutional Partnership"
      />
    </>
  )
}
