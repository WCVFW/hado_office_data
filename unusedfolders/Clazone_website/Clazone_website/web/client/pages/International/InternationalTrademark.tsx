import RegistrationTemplate, {
  PricingPlan,
  Section,
} from "@/components/RegistrationTemplate";

export default function InternationalTrademark() {
  const pricing: PricingPlan[] = [
    {
      name: "Starter",
      priceLabel: "$299 + Govt. Fees",
      bullets: [
        "Trademark search & class advisory",
        "Single-class filing in one country",
        "Drafting & submission of application",
      ],
    },
    {
      name: "Standard",
      priceLabel: "$599 + Govt. Fees",
      highlight: true,
      bullets: [
        "Everything in Starter",
        "Madrid Protocol advisory",
        "Multi-class / multi-country filing",
        "Basic objection handling",
      ],
    },
    {
      name: "Pro",
      priceLabel: "$1,299 + Govt. Fees",
      bullets: [
        "Everything in Standard",
        "Global watch & monitoring (1 year)",
        "Responses to office actions",
        "Renewal & compliance support",
      ],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Introduction to International Trademark Registration",
      paragraphs: [
        "International trademark registration, under the Madrid Agreement and the Madrid Protocol, enables businesses to safeguard their trademarks in over 120 countries through a single application.",
        "Managed by the World Intellectual Property Organization (WIPO), this system simplifies filings, reduces costs, and helps protect against trademark misuse globally.",
        "For Indian businesses, applications begin with the Indian Trademark Registry and are then extended internationally via WIPO. Registrations last for 10 years, renewable indefinitely.",
      ],
    },
    {
      kind: "list",
      title: "What is International Trademark Registration?",
      items: [
        "Allows organizations and businesses to protect trademarks across multiple countries with one application.",
        "Managed under the Madrid Protocol through WIPO’s International Bureau.",
        "Ensures trademarks are safeguarded from misuse in international markets.",
        "Applicants must provide list of goods/services under Nice Classification.",
        "Helps enhance brand recognition and secure legal rights worldwide.",
      ],
    },
    {
      kind: "list",
      title: "Importance of International Trademark Registration",
      items: [
        "Protects your brand across multiple countries with a single filing.",
        "Prevents misuse and builds credibility in global markets.",
        "Cost-effective compared to separate country filings.",
        "Enhances brand recognition and legal enforceability abroad.",
        "Provides exclusive rights and strengthens market expansion.",
      ],
    },
    {
      kind: "list",
      title: "Understanding International Trademark Registration",
      items: [
        "Centralized filing via Madrid Protocol, managed by WIPO.",
        "Applicants file in their Country of Origin’s IP Office first.",
        "Fees are generally in Swiss Francs (CHF).",
        "Designated countries then review and grant protection individually.",
        "WIPO Gazette of International Marks helps track registrations.",
      ],
    },
    {
      kind: "list",
      title: "Difference Between National and International Trademarks",
      items: [
        "National Trademark: Protection within a single country.",
        "International Trademark: Protection in multiple countries.",
        "National filings: More affordable but jurisdiction-limited.",
        "International filings: Cost-effective for multi-country coverage.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of International Trademark Registration",
      items: [
        "Trademark protection across multiple jurisdictions.",
        "Simplified application process via WIPO (Madrid System).",
        "Valid for 10 years, renewable indefinitely.",
        "Access to the WIPO Global Brand Database.",
        "Efficient management of global trademark portfolio.",
      ],
    },
    {
      kind: "list",
      title: "Who Can Apply?",
      items: [
        "Businesses or individuals with a national registration or application in a Madrid member country.",
        "Available for SMEs, large corporations, and individuals.",
        "Trademark owners seeking streamlined global protection.",
        "Applicants expanding into multiple international markets.",
      ],
    },
    {
      kind: "list",
      title: "Legal Framework",
      items: [
        "Madrid Agreement (1891) and Madrid Protocol (1989).",
        "WIPO’s International Bureau processes applications.",
        "GATT-TRIPS / WTO set minimum standards globally.",
        "115+ member states covering 130+ countries.",
        "National IP laws still apply in each designated country.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility and Requirements",
      items: [
        "Must hold a national registration or application in a Madrid member country.",
        "Applicants must designate countries where protection is sought.",
        "Available in English, French, or Spanish.",
        "Compliance with both national and international rules required.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "Identity proof of applicant.",
        "Address proof of applicant.",
        "Business registration documents.",
        "Form MM2 (International Application).",
        "Copy of trademark representation (logo/wordmark).",
        "National trademark certificate (India or other).",
      ],
    },
    {
      kind: "list",
      ordered: true,
      title: "Step-by-Step Process",
      items: [
        "Trademark search using WIPO Global Brand Database.",
        "File international application (Form MM2) via national office (e.g., IP India).",
        "Examination by WIPO International Bureau.",
        "Forwarding to designated countries for local examination.",
        "Objections/oppositions handled at national level.",
        "Approval and issuance of International Registration Certificate.",
        "Renew every 10 years to maintain protection.",
      ],
    },
    {
      kind: "list",
      title: "Fees & Cost Breakdown",
      items: [
        "Basic Application Fee: 700 CHF.",
        "Complementary Fee: 100 CHF per designated country.",
        "Supplementary Fee: 100 CHF per additional class beyond three.",
        "Individual Country Fees: Vary per jurisdiction (e.g., US, EU).",
        "Yearly Maintenance Fee: Around $500.",
      ],
    },
    {
      kind: "list",
      title: "Renewal of International Trademark",
      items: [
        "International trademarks last 10 years.",
        "Renewal fees similar to initial application.",
        "Failure to renew may result in loss of protection.",
        "Timely renewal ensures continuous global coverage.",
      ],
    },
    {
      kind: "list",
      title: "Challenges & Pitfalls",
      items: [
        "Central Attack: If national application is rejected, international may collapse.",
        "Complex objections and oppositions across multiple jurisdictions.",
        "Varied examination timelines (12–18 months).",
        "Renewal and management costs across countries.",
        "Different enforcement standards per jurisdiction.",
      ],
    },
    {
      kind: "list",
      title: "How to Register an International Trademark from India",
      ordered: true,
      items: [
        "Trademark search before filing.",
        "Fill Form MM2 (E) at Indian Trademark Office.",
        "Pay fees on official IP India portal.",
        "Registrar examines application.",
        "Forwarded to WIPO, Geneva.",
        "WIPO examines and publishes.",
        "Certificate of registration issued by WIPO.",
        "Notification sent to designated countries.",
        "Protection awarded in those jurisdictions.",
      ],
    },
    {
      kind: "list",
      title: "Assignment, Transfer & Modifications",
      items: [
        "International trademarks can be assigned/transferred.",
        "Ownership updates needed in case of mergers or acquisitions.",
        "Failure to update may affect validity of registration.",
      ],
    },
    {
      kind: "list",
      title: "Countries That Recognize International Trademarks",
      items: [
        "115+ member states covering 130+ countries.",
        "Includes US, EU, India, China and major global markets.",
        "Choice of countries depends on business strategy.",
      ],
    },
    {
      kind: "list",
      title: "Conclusion",
      items: [
        "Vakilsearch ensures seamless international trademark registration.",
        "Expert guidance from application to renewal.",
        "Trusted by 19,000+ clients with 4.5★ rating.",
        "Comprehensive legal support for global protection.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on International Trademark Registration",
      qa: [
        { q: "What is WIPO?", a: "The World Intellectual Property Organization is a UN agency managing global IP treaties, including the Madrid System." },
        { q: "What is the process?", a: "File via your national office, WIPO examines, then designated countries decide individually." },
        { q: "Can MSMEs benefit?", a: "Yes, streamlined filing makes it affordable and efficient for MSMEs to protect brands globally." },
        { q: "What is a Geographical Indication?", a: "It’s a sign used on products with a specific origin and qualities, e.g., Darjeeling tea." },
        { q: "Can I apply with a national registration in India?", a: "Yes, Indian nationals/businesses can apply under Madrid Protocol." },
        { q: "How long is protection?", a: "10 years, renewable indefinitely." },
        { q: "What if one country rejects my application?", a: "Protection continues in other approved countries." },
        { q: "What is central attack?", a: "If the basic national registration is cancelled, it may cancel the international registration." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="International Trademark Registration"
      subtitle="Register your international trademark with expert IP lawyers. 100% online process, global coverage, and reliable support."
      serviceLabel="International Trademark Registration"
      pricing={pricing}
      serviceKey="international-trademark"
      sections={sections}
    />
  );
}
