import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { complianceClauses } from '../data/content'

export default function Compliance() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Compliance & Disclaimer"
        body="The information on this website is for general informational purposes and does not constitute financial, legal, investment or professional advice."
        variant="icosahedron"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <p className="text-slate-600 leading-relaxed">
              By using this website and engaging with Veritaz Consultancy Limited's services, you acknowledge
              and agree to the following:
            </p>
          </Reveal>

          <div className="mt-10 flex flex-col gap-8">
            {complianceClauses.map((clause, i) => (
              <Reveal key={clause.title} delay={Math.min(i * 0.05, 0.3)}>
                <div className="border-l-2 border-gold-400 pl-6">
                  <h3 className="font-heading font-bold text-navy-950">{clause.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{clause.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 rounded-xl bg-mist-100 border border-navy-100 p-6">
              <p className="text-xs text-slate-500 leading-relaxed">
                This disclaimer is a general template and should be reviewed by Veritaz's legal counsel before
                publication, particularly to reflect the company's specific registrations, authorisations, and
                any state- or activity-specific regulatory requirements applicable to its actual service
                offerings.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
