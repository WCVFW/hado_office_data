import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const sections: { id: string; title: string; desc: string; img: string }[] = [
  {
    id: "us",
    title: "US Incorporation",
    desc: "Register a US LLC or C-Corp with EIN, bank, and compliance support.",
    img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "singapore",
    title: "Singapore Incorporation",
    desc: "Incorporate in Singapore with nominee director and address options.",
    img: "https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "uk",
    title: "UK Incorporation",
    desc: "Form a UK Limited Company with VAT and HMRC compliance.",
    img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "netherlands",
    title: "Netherlands Incorporation",
    desc: "Incorporate BV with bank account assistance and ongoing filings.",
    img: "https://images.unsplash.com/photo-1446822775955-c34f483b410b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "hk",
    title: "Hong Kong Company",
    desc: "Set up a Hong Kong entity with accounting and audit support.",
    img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "dubai",
    title: "Dubai Company",
    desc: "Form a Free Zone or Mainland company with visa and PRO services.",
    img: "https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "tm",
    title: "International TM Registration",
    desc: "Protect your brand globally with trademark filing and watch.",
    img: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "dsc",
    title: "Digital Signature Certificate",
    desc: "Get your Class 3 DSC with doorstep verification.",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "udyam",
    title: "Udyam / MSME",
    desc: "Register MSME to unlock government benefits and tenders.",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "iso",
    title: "ISO Certification",
    desc: "End-to-end ISO 9001/27001 certification assistance.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fssai",
    title: "FSSAI (Food License)",
    desc: "Obtain FSSAI registration/license for food businesses.",
    img: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "iec",
    title: "Import/Export Code",
    desc: "IEC registration for exporters and importers.",
    img: "https://images.unsplash.com/photo-1468581264429-2548ef9eb732?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "bis",
    title: "BIS Registration",
    desc: "BIS certification and testing coordination.",
    img: "https://images.unsplash.com/photo-1554474054-6a0778412b4f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "liquor",
    title: "Liquor License",
    desc: "Liquor license application and compliance assistance.",
    img: "https://images.unsplash.com/photo-1527169080185-3d96b7c1fa2f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fundraising",
    title: "Fundraising",
    desc: "End-to-end fundraising support from seed to growth.",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pitchdeck",
    title: "Pitch Deck",
    desc: "Investor-ready pitch decks crafted by experts.",
    img: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "loan",
    title: "Business Loan",
    desc: "Secure business loans with documentation and lender matchmaking.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "dpr",
    title: "DPR Service",
    desc: "Detailed Project Reports for funding and approvals.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ngo",
    title: "NGO Registration",
    desc: "Set up NGOs with compliant structures and filings.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "section8",
    title: "Section 8 Company",
    desc: "Non-profit company incorporation and governance.",
    img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "trust",
    title: "Trust Registration",
    desc: "Trust formation, deed drafting, and registration.",
    img: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "society",
    title: "Society Registration",
    desc: "Register a society with bylaws and compliance.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "compliance",
    title: "NGO Compliance",
    desc: "Annual filings, audit, and governance for NGOs.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "sec8compliance",
    title: "Section 8 Compliance",
    desc: "Compliance services tailored for Section 8 entities.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "csr1",
    title: "CSR-1 Filing",
    desc: "CSR-1 registration and advisory for CSR funding.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "80G12A",
    title: "Sec.80G & Sec.12A",
    desc: "Tax exemptions for donors and NGOs with 80G/12A.",
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "darpan",
    title: "Darpan Registration",
    desc: "NGO Darpan portal registration and updates.",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "fcra",
    title: "FCRA Registration",
    desc: "FCRA registration, renewals, and compliance.",
    img: "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Services() {
  return (
    <div>
      <SEO
        title="Services | BizSuite"
        description="Explore all services: international incorporations, licenses, fundraising, NGO, and more."
        keywords={[
          "business setup",
          "international company",
          "licenses",
          "fundraising",
          "NGO",
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Services",
        }}
      />
      <header className="bg-gradient-to-r from-indigo-600 to-pink-600 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold">All Services</h1>
          <p className="mt-2 text-white/80">
            Find the solution you need and submit a request online.
          </p>
        </div>
      </header>
      <div className="container py-10 grid gap-10">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="grid md:grid-cols-2 gap-8 items-center border rounded-xl p-6 bg-white"
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-56 object-cover rounded-lg"
            />
            <div>
              <h2 className="text-2xl font-semibold">{s.title}</h2>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="#contact"
                  className="rounded-md bg-indigo-600 text-white px-4 py-2 text-sm hover:bg-indigo-700"
                >
                  Enquire
                </a>
                <Link
                  to="/checkout"
                  className="rounded-md border px-4 py-2 text-sm hover:bg-secondary"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
