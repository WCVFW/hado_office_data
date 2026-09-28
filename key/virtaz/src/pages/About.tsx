import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'

const values = [
  { title: 'Trust', body: 'We aim to earn trust through consistency, not claims.' },
  { title: 'Transparency', body: "We explain what we do, what we don't do, and who else is involved in a transaction." },
  { title: 'Professionalism', body: 'We conduct every engagement with structured processes and clear documentation.' },
  { title: 'Compliance', body: 'We operate within applicable laws and professional boundaries, and coordinate reserved functions through qualified professionals.' },
  { title: 'Respect', body: 'In every interaction — including collection and recovery communication — we treat individuals with courtesy and dignity.' },
]

const commitments = [
  'Not guaranteeing outcomes — such as loan sanction, auction-property title, NPA settlement, or debt recovery — that are not within our control.',
  'Coordinating reserved or licensed functions (legal opinions, statutory valuation, insolvency proceedings) through appropriately qualified professionals.',
  'Conducting loan collection and recovery activity only under proper lender authorisation, following respectful, non-coercive communication practices consistent with applicable requirements.',
  'Maintaining confidentiality of client and borrower information and handling data responsibly.',
  'Continually reviewing our internal processes to align with applicable regulatory expectations as our business and registrations evolve.',
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Veritaz"
        title="A Public Limited Company, built for structure and professionalism."
        body="Providing integrated Property, Loan, NPA Resolution, Debt Collection and Financial Facilitation services across India."
        variant="icosahedron"
      />

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <SectionHeading eyebrow="Who We Are" title="Structure and professionalism, replacing fragmentation." />
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <p className="text-slate-600 leading-relaxed">
                  Veritaz Consultancy Limited is a Public Limited Company incorporated in India, providing
                  integrated Property, Loan, NPA Resolution, Debt Collection and Financial Facilitation
                  services to individuals, businesses, investors, banks, NBFCs and other financial
                  institutions. We were established to bring structure and professionalism to a segment of
                  the market that has traditionally been served by fragmented, informal brokers and agents —
                  replacing that fragmentation with a single, process-driven organisation.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  Our work sits at the intersection of property and finance: helping people find and secure
                  the right property, helping businesses access the right financing, helping stressed
                  borrowers understand their options, and helping lenders manage their loan portfolios
                  responsibly. In every engagement, Veritaz operates as an advisor, facilitator and
                  coordinator — connecting clients with the right lenders, qualified valuers, legal
                  professionals and other stakeholders, while final decisions on credit, valuation, title and
                  settlement remain with the relevant authority.
                </p>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  All services are provided subject to applicable laws, regulations, professional standards
                  and any authorisations required for the specific engagement.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-2xl bg-navy-950 p-8 sm:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <span className="relative text-gold-300 text-xs font-semibold tracking-[0.18em] uppercase">Our Vision</span>
              <p className="relative mt-4 text-white text-lg leading-relaxed font-heading font-medium">
                To be recognised as a dependable, professional and compliant advisory partner across
                property, financing and loan-resolution needs — for individuals and institutions alike.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl bg-white border border-navy-100 p-8 sm:p-10">
              <span className="text-gold-500 text-xs font-semibold tracking-[0.18em] uppercase">Our Mission</span>
              <p className="mt-4 text-navy-900 text-lg leading-relaxed font-heading font-medium">
                To simplify complex property and financial decisions through structured processes,
                transparent communication and coordinated professional support — helping our clients move
                from uncertainty to a clear, well-documented path forward.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading eyebrow="Our Values" title="Trust | Transparency | Professionalism | Compliance | Respect" align="center" />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-navy-100 p-6 card-hover text-center">
                  <h3 className="font-heading font-bold text-gold-500">{v.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist-50 py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeading eyebrow="Our Approach" title="A disciplined framework, in every engagement." />
              <Reveal delay={0.1}>
                <p className="mt-6 text-slate-600 leading-relaxed">
                  We approach every engagement — whether it is a property purchase, a business loan
                  requirement, a stressed account, or an institutional collection mandate — through the same
                  disciplined framework: understand the requirement, assess the relevant facts, coordinate
                  with the right stakeholders, document each step, and work toward a structured, well-recorded
                  outcome. We do not shortcut due diligence, and we do not make commitments on behalf of
                  lenders, valuers, legal professionals or courts — our role is to make the process clearer
                  and more manageable for everyone involved.
                </p>
              </Reveal>
              <div className="mt-10">
                <SectionHeading eyebrow="Why Veritaz" title="One roof, one team, every need." />
                <Reveal delay={0.1}>
                  <p className="mt-6 text-slate-600 leading-relaxed">
                    Veritaz was built as an integrated organisation rather than a single-service broker. A
                    client with a property requirement often also has a financing question; a business
                    restructuring a loan often also needs documentation and legal coordination; a bank
                    managing a stressed portfolio often needs both resolution advisory and collection support.
                    Veritaz is structured to serve all of these needs under one roof, coordinated by one team,
                    rather than requiring clients to manage multiple unconnected vendors.
                  </p>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.15}>
              <div className="rounded-2xl bg-white border border-navy-100 p-8 sm:p-10 h-full">
                <h3 className="font-heading font-bold text-xl text-navy-950">Commitment to Ethical &amp; Compliant Practices</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  As a Public Limited Company, Veritaz is committed to conducting its business ethically,
                  transparently and in compliance with applicable laws and regulations. This includes:
                </p>
                <ul className="mt-6 space-y-4">
                  {commitments.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span className="shrink-0 grid place-items-center h-6 w-6 rounded-full bg-gold-400/15 text-gold-500 mt-0.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-sm text-slate-600 leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection text="Have a property, financing, or resolution requirement in mind?" button="Talk to Our Team" />
    </>
  )
}
