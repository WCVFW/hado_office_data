import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using this website, you agree to be bound by these Terms of Use and by our Compliance & Disclaimer and Privacy Policy, each of which forms part of these terms.',
  },
  {
    title: '2. Nature of Services',
    body: 'Veritaz Consultancy Limited provides advisory, facilitation and coordination services across property, loan, NPA resolution and debt-collection matters. Veritaz is not a bank, NBFC, ARC, law firm, registered valuer or insolvency professional, and does not perform reserved or licensed functions itself unless it holds the relevant registration or authorisation.',
  },
  {
    title: '3. No Guarantee of Outcomes',
    body: 'Nothing on this website constitutes a guarantee of loan sanction, auction-property title or possession, valuation accuracy, NPA settlement, debt recovery, or investment returns. All such outcomes remain subject to the decisions of the relevant lender, court, authority, qualified professional or market.',
  },
  {
    title: '4. Use of Website Content',
    body: 'Content on this website is provided for general informational purposes and may not be reproduced, distributed or used for commercial purposes without prior written consent from Veritaz.',
  },
  {
    title: '5. Limitation of Liability',
    body: 'To the extent permitted by applicable law, Veritaz shall not be liable for any loss or damage arising from reliance on information provided on this website, except where such liability cannot be excluded by law.',
  },
  {
    title: '6. Governing Law',
    body: 'These terms are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the competent courts, as specified by Veritaz at the time of a formal engagement.',
  },
]

export default function TermsOfUse() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Use" body="The terms governing your use of this website and Veritaz's services." variant="icosahedron" />
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8 flex flex-col gap-8">
          {sections.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 0.05, 0.3)}>
              <div className="border-l-2 border-gold-400 pl-6">
                <h3 className="font-heading font-bold text-navy-950">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-4 rounded-xl bg-mist-100 border border-navy-100 p-6">
              <p className="text-xs text-slate-500 leading-relaxed">
                This is a general draft and should be reviewed by Veritaz's legal counsel before publication.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
