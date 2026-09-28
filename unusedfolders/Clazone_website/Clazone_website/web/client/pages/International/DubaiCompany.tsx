import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function DubaiCompany() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "AED 3,999 + Govt. Fees",
      bullets: [
        "Free zone company setup",
        "Name registration support",
        "Basic documentation filing",
      ],
    },
    {
      name: "Standard",
      priceLabel: "AED 6,999 + Govt. Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Office/virtual address options",
        "Bank account opening guidance",
      ],
    },
    {
      name: "Pro",
      priceLabel: "AED 10,999 + Govt. Fees",
      bullets: [
        "Everything in Standard",
        "Visa assistance for investors & employees",
        "Compliance & renewals calendar",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Company Registration in Dubai: An Overview",
      paragraphs: [
        "Dubai is one of the most popular destinations for business setup due to its strategic location, business-friendly environment, and competitive tax rates.",
        "The process involves selecting a business structure, registering your name, obtaining a business license, arranging visas, office space, accounting, and marketing.",
        "The total cost depends on structure, license type, and office location, but Dubai offers fast incorporation timelines and long-term benefits.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of Business Setup in Dubai or UAE",
      items: [
        "Strategic location at the crossroads of Europe, Asia, and Africa.",
        "Business-friendly environment with low taxes and simple regulations.",
        "No corporate tax, no personal income tax, and no capital gains tax.",
        "World-class infrastructure including airports, seaports, and roads.",
        "Vibrant, fast-growing economy with ample opportunities.",
        "Easy visa process for foreign investors and employees.",
        "Multiple free zones offering 100% foreign ownership and tax exemptions.",
        "Large pool of skilled and English-speaking workforce.",
        "Government actively promotes entrepreneurship with incentives and support services.",
      ],
    },
    {
      kind: "list",
      title: "Detailed Procedure for Business Setup in Dubai",
      ordered: true,
      items: [
        "Choose the right business structure – Mainland, Free Zone, or Offshore.",
        "Register your business name with the Department of Economic Development (DED).",
        "Obtain the required business license based on your activity.",
        "Apply for investor and employee visas.",
        "Rent or lease an office space (physical or virtual).",
        "Set up accounting and bookkeeping systems.",
        "Market your business and establish operations.",
      ],
    },
    {
      kind: "list",
      title: "Types of Business Setup in Dubai",
      items: [
        "Mainland Companies – can trade freely in UAE and own property in the mainland, but subject to corporate tax and regulations.",
        "Free Zone Companies – 100% foreign ownership and tax-free, but can only trade within the free zone.",
        "Offshore Companies – no corporate tax and free to trade globally, but cannot own UAE property.",
      ],
    },
    {
      kind: "list",
      title: "Difference between Mainland, Free Zone, and Offshore Companies",
      items: [
        "Mainland: Subject to UAE corporate tax, can own mainland property, free trading within UAE.",
        "Free Zone: No corporate tax, cannot own mainland property, limited to free zone trading.",
        "Offshore: No corporate tax, cannot own UAE property, free to trade globally.",
      ],
    },
    {
      kind: "list",
      title: "Types of Licenses Issued in the UAE",
      items: [
        "Trade License – for trading activities.",
        "Industrial License – for manufacturing businesses.",
        "Professional License – for service providers, professionals, artisans, and craftsmen.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Starting a Business in Dubai",
      items: [
        "Shareholder information.",
        "Passport and visa copies of shareholders.",
        "Completed application form.",
        "PDF copy of business plan.",
        "Board resolution documents.",
        "Memorandum of Association (MoA).",
        "Articles of Association (AoA).",
        "Identity proof of shareholders.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria for Company Registration in Dubai",
      items: [
        "Minimum age of 18 years.",
        "No nationality restrictions (specific free zones may have requirements).",
        "No criminal record in the UAE or abroad.",
        "Sufficient funding to set up and operate the business.",
        "A structured business plan with goals and strategies.",
        "Resident visa for foreign investors (if living in UAE).",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Trusted by 19k+ happy clients with top ratings on Google & Trustpilot.",
        "Fast, affordable, and expert incorporation in Dubai and UAE.",
        "Tailored packages based on business type and location.",
        "Experienced consultants for licensing, visas, and banking.",
        "End-to-end support with complete confidentiality.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Business Setup in UAE/Dubai",
      qa: [
        {
          q: "Can a foreigner establish a business in the UAE?",
          a: "Yes, foreigners can establish businesses in both free zones and mainland UAE.",
        },
        {
          q: "How quickly can I integrate?",
          a: "With proper documentation, setup can be completed within 1–3 weeks.",
        },
        {
          q: "How much does it cost to start a company in Dubai?",
          a: "Costs vary by license type, office space, and business activity. Starter packages begin around AED 3,999 + government fees.",
        },
        {
          q: "What types of businesses can I start in the UAE?",
          a: "Trading, professional services, industrial/manufacturing, and offshore holding companies are common options.",
        },
        {
          q: "How do I get an investor visa in Dubai?",
          a: "Investor visas are applied through the free zone authority or DED along with company incorporation.",
        },
        {
          q: "Can an Indian set up a company in Dubai?",
          a: "Yes, Indians are among the largest group of foreign entrepreneurs in Dubai.",
        },
        {
          q: "How can I start my own business in Dubai from India?",
          a: "With remote documentation and a local agent/consultant, you can incorporate without being physically present until later visa steps.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Setup Your Business in Dubai/UAE"
      subtitle="Incorporate in Dubai with complete guidance on free zone, mainland, or offshore structures."
      gradientFrom="from-emerald-700"
      gradientTo="to-lime-700"
      serviceLabel="Dubai Business Setup"
      pricing={pricing}
      sections={sections}
      serviceKey="dubai-company"
    />
  );
}
