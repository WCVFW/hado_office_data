import { useState } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { services } from '../data/content'

const roles = ['Individual', 'Business', 'Bank / NBFC', 'Other']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Discuss Your Requirement"
        body="Whether it's a property decision, a financing need, a stressed account, or an institutional mandate — our team is ready to understand your situation and guide you to the right next step."
        variant="torus"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <Reveal className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-heading font-bold text-navy-950 mb-3">For Individuals &amp; Investors</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Property advisory, loan advisory, valuation and due-diligence coordination.</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-950 mb-3">For Businesses &amp; MSMEs</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Loan advisory, restructuring and NPA resolution support.</p>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy-950 mb-3">For Banks, NBFCs &amp; Financial Institutions</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">Collection, recovery, resolution-support and portfolio-coordination partnerships.</p>
                </div>

                <div className="rounded-xl border border-navy-100 bg-mist-50 p-6">
                  <h4 className="font-heading font-semibold text-navy-950 text-sm mb-3">Registered Office</h4>
                  <dl className="space-y-2 text-sm text-slate-600">
                    <div className="flex gap-2"><dt className="font-medium text-navy-700 shrink-0">Address:</dt><dd className="italic text-slate-400">To be completed by Veritaz</dd></div>
                    <div className="flex gap-2"><dt className="font-medium text-navy-700 shrink-0">Phone:</dt><dd className="italic text-slate-400">To be completed by Veritaz</dd></div>
                    <div className="flex gap-2"><dt className="font-medium text-navy-700 shrink-0">Email:</dt><dd className="italic text-slate-400">To be completed by Veritaz</dd></div>
                    <div className="flex gap-2"><dt className="font-medium text-navy-700 shrink-0">CIN:</dt><dd className="italic text-slate-400">To be completed by Veritaz</dd></div>
                  </dl>
                </div>

                <div id="grievance" className="rounded-xl border border-gold-400/40 bg-gold-300/5 p-6 scroll-mt-28">
                  <h4 className="font-heading font-semibold text-navy-950 text-sm mb-2">Grievance Redressal / Escalation</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Clients and borrowers can reach our team through the details above to raise a concern or
                    complaint. We maintain an internal escalation process for unresolved concerns, particularly
                    in relation to collection and recovery interactions.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-3">
              <div className="rounded-2xl border border-navy-100 p-7 sm:p-9 bg-white shadow-sm">
                {submitted ? (
                  <div className="py-16 text-center">
                    <span className="mx-auto grid place-items-center h-14 w-14 rounded-full bg-gold-400/15 text-gold-500 mb-5">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                    <h3 className="font-heading font-bold text-xl text-navy-950">Thank you</h3>
                    <p className="mt-2 text-sm text-slate-600">We've received your requirement and our team will get in touch shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      setSubmitted(true)
                    }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                  >
                    <div className="sm:col-span-2">
                      <h3 className="font-heading font-bold text-lg text-navy-950 mb-1">Send Us Your Requirement</h3>
                      <p className="text-sm text-slate-500">We'll route this to the right advisory team.</p>
                    </div>

                    <label className="flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-navy-800">Name</span>
                      <input required type="text" className="rounded-md border border-navy-200 px-3.5 py-2.5 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all" placeholder="Your full name" />
                    </label>

                    <label className="flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-navy-800">Contact Number</span>
                      <input required type="tel" className="rounded-md border border-navy-200 px-3.5 py-2.5 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all" placeholder="+91" />
                    </label>

                    <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-navy-800">Email</span>
                      <input required type="email" className="rounded-md border border-navy-200 px-3.5 py-2.5 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all" placeholder="you@example.com" />
                    </label>

                    <label className="flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-navy-800">I am a</span>
                      <select required defaultValue="" className="rounded-md border border-navy-200 px-3.5 py-2.5 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all bg-white">
                        <option value="" disabled>Select one</option>
                        {roles.map((r) => <option key={r} value={r}>{r}</option>)}
                      </select>
                    </label>

                    <label className="flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-navy-800">Service of Interest</span>
                      <select required defaultValue="" className="rounded-md border border-navy-200 px-3.5 py-2.5 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all bg-white">
                        <option value="" disabled>Select a service</option>
                        {services.map((s) => <option key={s.slug} value={s.slug}>{s.navTitle}</option>)}
                      </select>
                    </label>

                    <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm">
                      <span className="font-medium text-navy-800">Brief Requirement</span>
                      <textarea required rows={4} className="rounded-md border border-navy-200 px-3.5 py-2.5 outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-300/40 transition-all resize-none" placeholder="Tell us briefly what you need help with" />
                    </label>

                    <button
                      type="submit"
                      className="sm:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-3.5 text-sm font-semibold text-navy-950 hover:brightness-110 transition-all shadow-md shadow-gold-500/20"
                    >
                      Send Requirement
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
