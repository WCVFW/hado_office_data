import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero3D from '../components/Hero3D'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import ProcessSteps from '../components/ProcessSteps'
import AudienceCards from '../components/AudienceCards'
import SplitText from '../components/SplitText'
import Marquee from '../components/Marquee'
import MagneticButton from '../components/MagneticButton'
import TiltCard from '../components/TiltCard'
import { services, processSteps, trustPoints, taglines } from '../data/content'

const propertyServices = services.slice(0, 1).concat(services.slice(4))
const financialServices = services.slice(1, 4)

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-navy-950">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-noise opacity-[0.04] mix-blend-overlay pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/20 via-navy-950/60 to-navy-950" />
        <Hero3D />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-28 pb-16 w-full">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-gold-300 border border-gold-400/40 rounded-full px-4 py-1.5">
                Veritaz Consultancy Limited
              </span>
            </Reveal>
            <SplitText
              as="h1"
              text="Property. Finance. Resolution."
              delay={0.15}
              className="mt-6 font-heading font-extrabold text-fluid-h1 text-white leading-[1.06] text-balance"
            />
            <SplitText
              as="span"
              text="One Trusted Advisory Partner."
              delay={0.5}
              className="block font-heading font-extrabold text-fluid-h1 text-gold-300 leading-[1.06] text-balance mt-1"
            />
            <Reveal delay={0.75}>
              <p className="mt-6 text-fluid-lead text-slate-300 leading-relaxed max-w-xl">
                Veritaz helps individuals, businesses, investors, banks and financial institutions navigate
                property transactions, loan requirements, stressed-loan situations and recovery processes —
                through structured, compliant and professionally coordinated advisory services.
              </p>
            </Reveal>
            <Reveal delay={0.9}>
              <div className="mt-9 flex flex-wrap gap-4">
                <MagneticButton>
                  <Link
                    to="/services"
                    data-cursor-hover
                    className="btn-shimmer inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3.5 text-sm font-semibold text-navy-950 hover:brightness-110 transition-all shadow-lg shadow-gold-500/20"
                  >
                    Explore Our Services
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    to="/contact"
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-md border border-slate-500/40 px-6 py-3.5 text-sm font-semibold text-white hover:border-gold-400 hover:text-gold-300 transition-colors"
                  >
                    Contact Us
                  </Link>
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-8 w-5 rounded-full border border-slate-500 flex items-start justify-center pt-1.5"
          >
            <span className="h-1.5 w-1 rounded-full bg-gold-400" />
          </motion.span>
        </motion.div>
      </section>

      {/* Tagline marquee */}
      <div className="bg-navy-900 border-y border-navy-700/50 py-4 text-gold-300/90">
        <Marquee items={taglines} />
      </div>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Who We Are" title="A single, process-driven organisation for property and finance." />
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-slate-600 leading-relaxed">
                  Veritaz Consultancy Limited is a Public Limited Company offering integrated Property, Loan,
                  NPA Resolution, Debt Collection and Financial Facilitation services across India, subject to
                  applicable laws, authorisations and professional requirements. We work with individual
                  customers, businesses, MSMEs, property investors, banks, NBFCs and other financial
                  institutions — bringing together property expertise and financial understanding under one
                  structured organisation.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Rather than operating as a single-service brokerage or agency, Veritaz is built to coordinate
                  across the full lifecycle of a property or credit decision: from identifying the right
                  property or loan, through documentation and due diligence, to resolution of stressed accounts
                  and, where appointed, recovery support for lenders. Our role throughout is that of an
                  advisor, facilitator and coordinator — final decisions on credit sanction, valuation, legal
                  title and settlement always rest with the relevant lender, professional or authority.
                </p>
                <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-gold-500 transition-colors">
                  More About Veritaz
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-mist-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="What We Do" title="Overview of Our Services" align="center" />

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Reveal>
              <TiltCard max={4}>
                <div className="tilt-surface rounded-2xl bg-white border border-navy-100 p-7 sm:p-9 h-full">
                  <h3 className="font-heading font-bold text-xl text-navy-950 mb-5">Property Services</h3>
                  <ul className="space-y-4">
                    {propertyServices.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="group flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                          <span>
                            <span className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors">{s.navTitle}</span>
                            <span className="block text-sm text-slate-500 mt-0.5">{s.subtitle}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/services/legal-due-diligence-documentation" className="group flex items-start gap-3">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-500 shrink-0" />
                        <span>
                          <span className="font-semibold text-navy-900 group-hover:text-gold-500 transition-colors">Legal Due-Diligence &amp; Documentation</span>
                          <span className="block text-sm text-slate-500 mt-0.5">Coordinated legal review for informed property decisions</span>
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={0.12}>
              <TiltCard max={4}>
                <div className="tilt-surface rounded-2xl bg-navy-950 p-7 sm:p-9 h-full relative overflow-hidden border border-transparent">
                  <div className="absolute inset-0 bg-grid opacity-30" />
                  <h3 className="relative font-heading font-bold text-xl text-white mb-5">Financial Services</h3>
                  <ul className="relative space-y-4">
                    {financialServices.map((s) => (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="group flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-400 shrink-0" />
                          <span>
                            <span className="font-semibold text-white group-hover:text-gold-300 transition-colors">{s.navTitle}</span>
                            <span className="block text-sm text-slate-400 mt-0.5">{s.subtitle}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who we serve snapshot */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Who We Serve" title="Built for individuals, businesses and institutions alike." align="center" />
          <div className="mt-14">
            <AudienceCards />
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-mist-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Our Process" title="A consistent, structured approach across engagements." align="center" />
          <div className="mt-14">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="bg-navy-950 py-16 sm:py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Trust &amp; Compliance" title="We operate as a Public Limited Company and take our compliance responsibilities seriously." light />
            </div>
            <div className="lg:col-span-7 grid gap-4">
              {trustPoints.map((point, i) => (
                <Reveal key={point} delay={i * 0.08}>
                  <div className="flex gap-4 rounded-xl border border-navy-700/60 bg-navy-900/60 p-5">
                    <span className="shrink-0 grid place-items-center h-7 w-7 rounded-full bg-gold-400/15 text-gold-300 mt-0.5">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <p className="text-sm leading-relaxed text-slate-300">{point}</p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.4}>
                <Link to="/compliance-disclaimer" className="inline-flex items-center gap-2 text-sm font-semibold text-gold-300 mt-2">
                  Read Full Compliance &amp; Disclaimer
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Audience CTA cards */}
      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Get Started" title="Wherever you are in your journey, we can help." align="center" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Individuals & Investors', body: 'Looking for the right property, or the right financing for it? Talk to our advisory team.', button: 'Explore Property & Loan Advisory', to: '/services/property-search-acquisition-advisory' },
              { title: 'Businesses & MSMEs', body: 'Need structured support for business finance or a stressed loan account?', button: 'Speak to Our Loan & NPA Advisory Team', to: '/services/loan-advisory-processing' },
              { title: 'Banks & NBFCs', body: 'Looking for a professional, process-driven collection and recovery partner?', button: 'Explore Institutional Services', to: '/for-banks-nbfcs' },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <TiltCard max={5}>
                  <div className="tilt-surface h-full rounded-2xl border border-navy-100 p-8 flex flex-col">
                    <h3 className="font-heading font-bold text-lg text-navy-950">{card.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">{card.body}</p>
                    <Link to={card.to} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-500 hover:text-gold-600">
                      {card.button}
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        text="Let's discuss your requirement. Our team is ready to understand your situation and guide you through the right process."
        button="Contact Veritaz"
      />
    </>
  )
}
