import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const sections = [
  {
    title: '1. Information We Collect',
    body: 'When you use this website or engage with Veritaz Consultancy Limited, we may collect information you provide directly — such as your name, contact number, email address, and details of your property, loan or institutional requirement — along with limited technical information collected automatically through standard website analytics.',
  },
  {
    title: '2. How We Use Information',
    body: 'Information collected is used to respond to your enquiry, route it to the relevant advisory team, coordinate with lenders, valuers or legal professionals where you have engaged us to do so, and to improve our services and website. We do not sell personal information to third parties.',
  },
  {
    title: '3. Sharing of Information',
    body: 'Information is shared only with the lenders, qualified valuers, legal professionals or other stakeholders relevant to your specific engagement, and only to the extent necessary to progress that engagement, or where required by applicable law.',
  },
  {
    title: '4. Data Security',
    body: 'We take reasonable technical and organisational measures to protect personal and borrower information against unauthorised access, loss or misuse, consistent with applicable data-protection requirements.',
  },
  {
    title: '5. Your Choices',
    body: 'You may contact us at any time to ask what information we hold about you, to request a correction, or to raise a concern about how your information has been handled, through our Contact Us page.',
  },
  {
    title: '6. Changes to This Policy',
    body: 'This policy may be updated from time to time to reflect changes in our practices or applicable law. The updated version will be posted on this page.',
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" body="How Veritaz Consultancy Limited collects, uses and protects your information." variant="octahedron" />
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
                This is a general draft policy and should be reviewed by Veritaz's legal counsel before
                publication, and updated to reflect the company's actual data-handling practices and
                applicable regulatory requirements.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
