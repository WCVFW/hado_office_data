import SEO from "@/components/SEO";

const faqs = [
  {
    q: "How do I choose the right company structure?",
    a: "It depends on ownership, liability, funding plans, and compliance appetite. We provide a quick assessment to recommend Pvt Ltd, LLP, OPC, or Sole Proprietorship.",
  },
  {
    q: "Do you provide end-to-end support?",
    a: "Yes. From incorporation and licenses to accounting, taxation, fundraising, and compliance.",
  },
  {
    q: "Can I get assistance with international incorporation?",
    a: "Absolutely. We handle US, UK, Singapore, Dubai, and more including bank and compliance support.",
  },
  {
    q: "Do you offer refunds?",
    a: "For government fee-based filings, refunds are not possible once submitted. Professional fees may be refundable before work begins.",
  },
  {
    q: "How fast can I get started?",
    a: "Most services kick off within 24 hours after KYC and payment.",
  },
];

export default function FAQ() {
  return (
    <div>
      <SEO
        title="FAQ | BizSuite"
        description="Answers to common questions about company registration, licenses, international setups, fundraising, and NGO services."
        keywords={[
          "FAQ",
          "company registration",
          "licenses",
          "fundraising",
          "NGO",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
      <header className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-2 text-white/80">
            Everything you need to know to get started.
          </p>
        </div>
      </header>
      <div className="container py-10 grid gap-4">
        {faqs.map((f, i) => (
          <details key={i} className="rounded-lg border p-4">
            <summary className="font-medium cursor-pointer">{f.q}</summary>
            <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
