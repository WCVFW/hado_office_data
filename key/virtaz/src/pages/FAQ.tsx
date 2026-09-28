import PageHero from '../components/PageHero'
import FAQAccordion from '../components/FAQAccordion'
import CTASection from '../components/CTASection'
import { faqs } from '../data/content'

export default function FAQ() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        body="18 straight answers about what Veritaz does, what it doesn't, and how outcomes are decided."
        variant="octahedron"
      />

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection text="Still have a question? Our advisory team is happy to help." button="Speak to Our Advisory Team" />
    </>
  )
}
