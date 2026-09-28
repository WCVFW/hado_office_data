import RegistrationTemplate, { PricingPlan, Section } from "@/components/RegistrationTemplate";

export default function FIEORegistration() {
  const pricing: PricingPlan[] = [
    {
      name: "Basic",
      priceLabel: "₹6,250",
      bullets: ["RCMC registration", "Document assistance", "Certificate delivery"],
    },
    {
      name: "Standard",
      priceLabel: "₹9,375",
      highlight: true,
      bullets: ["Everything in Basic", "Expert consultation", "Compliance guidance"],
    },
    {
      name: "Pro",
      priceLabel: "₹25,000+",
      bullets: ["Everything in Standard", "International trade guidance", "Renewal handling"],
    },
  ];

  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview",
      paragraphs: [
        "The Federation of Indian Export Organisations (FIEO) is established by the Ministry of Commerce, Government of India, to supervise and promote India's exports.",
        "FIEO membership helps exporters take their businesses global and addresses challenges faced in international trade.",
        "Vakilsearch provides complete online RCMC registration for FIEO membership, ensuring timely certificate delivery and full compliance support.",
      ],
    },
    {
      kind: "list",
      title: "FIEO Membership Annual Subscription Fees",
      items: [
        "Individual Exporter: ₹6,250",
        "Multi-Products Group: ₹6,250",
        "Multi-Product Group (Premier): ₹7,000",
        "Service Providers: ₹6,250",
        "FTZ units/EOUs: ₹9,375",
        "One Star Export House: ₹9,375",
        "Two Star Export House: ₹12,500",
        "Three Star Export House: ₹25,000",
        "Four Star Export House: ₹50,000",
        "Five Star Export House: ₹93,750",
        "State Export Organisation: ₹6,250",
      ],
    },
    {
      kind: "list",
      title: "FIEO Registration Process",
      items: [
        "Upload the necessary files and data to our web portal",
        "Speak with our business advisor for your category of scheduled goods",
        "Experts confirm accuracy of the documents and information",
        "Make online payment using available payment methods",
        "Experts submit application and necessary paperwork",
        "Government issues FIEO Registration certificate after successful verification",
      ],
    },
    {
      kind: "list",
      title: "Who Can Get RCMC From FIEO?",
      items: [
        "Genuine exporter engaged in international trade",
        "Valid business adhering to all regulatory requirements",
        "Involved in export-related activities: manufacturing, trading, or services",
        "Member of Export Promotion Council (EPC) or Commodity Board",
      ],
    },
    {
      kind: "list",
      title: "Services of FIEO in India",
      items: [
        "Weekly e-bulletin on national and international trade news",
        "Free online portal with MFN tariffs, SPS/TBT info, and import statistics",
        "Chat services on trade, legal matters, arbitration, technology, marketing, and IP",
        "Press articles on global trade",
        "FOREX services including spot rates, forward rates, calculators, and historical data",
      ],
    },
    {
      kind: "list",
      title: "RCMC Membership Types for FIEO Registration",
      items: [
        "Common Membership: For new organisations in export/import",
        "Partner Membership: For experienced organisations, higher fees",
      ],
    },
    {
      kind: "list",
      title: "Benefits of FIEO Registration",
      items: [
        "Trade concessions under Foreign Trade Policy",
        "MAI grant for exhibitions, trade fairs, and delegations",
        "Hosting of product pictures and member profiles on FIEO website",
        "Searchable database for buyers to contact exporters directly",
        "Platform to discuss issues with authorities like excise, customs, DGFT",
        "FIEO certificate of origin and visa recommendation letters",
        "Online chat facility for export-related clarifications",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for FIEO Registration",
      items: [
        "Self-certified copy of IEC",
        "Annual membership fee (DD, Pay Order, or Check)",
        "Letter of authority on company letterhead",
        "Self-certified SSI registration certificate, Industrial License, or IEM",
        "Certificates for 1-5 star export houses",
        "Government recognized IDs of directors, partners, and owners",
        "GSTIN",
        "Export revenue and foreign exchange earnings for past three fiscal years",
      ],
    },
    {
      kind: "list",
      title: "Eligibility Criteria for RCMC Registration",
      items: [
        "Merchant or Exporter engaged in export-import operations",
        "Valid IEC registration under DGFT",
        "Specify main business and obtain board approval if required",
        "Required FIEO authorisation obtained for export of goods",
      ],
    },
    {
      kind: "faq",
      title: "FIEO FAQs",
      qa: [
        { q: "What are the benefits for E-commerce sellers having FIEO registration?", a: "FIEO membership increases credibility and provides access to trade concessions, MAI grants, and international exposure." },
        { q: "What perquisites do FIEO members get?", a: "Members can participate in exhibitions, trade delegations, online product hosting, and access market intelligence and legal guidance." },
        { q: "Who is a Status holder?", a: "A status holder is an exporter recognised by the government for excellence in export performance." },
        { q: "How do I pay for my annual subscription?", a: "Payment can be made via demand draft, pay order, or cheque as specified by FIEO." },
        { q: "How do I obtain an FIEO certification?", a: "Submit the required documents online and get the RCMC certificate issued after verification." },
        { q: "What is an FIEO certificate?", a: "It is the RCMC (Registration-Cum-Membership Certificate) issued by FIEO for eligible exporters." },
        { q: "How much does IEC code cost?", a: "IEC registration fee is fixed by DGFT; check the official DGFT portal for latest charges." },
        { q: "What is Registration Cum Membership Certificate (RCMC)?", a: "RCMC certifies the firm as an exporter and is required for availing export-related benefits." },
        { q: "How FIEO registrations help its members to increase the credibility of Exporter?", a: "RCMC membership validates your status as a legal exporter, increasing trust with buyers and authorities." },
        { q: "How is the FIEO Registration beneficial for Exporters?", a: "It provides access to trade concessions, MAI grants, international exposure, and legal & policy support." },
        { q: "What is the benefit of RCMC?", a: "Allows exporters to claim benefits under Foreign Trade Policy and participate in FIEO programs." },
        { q: "What are the reports required to submit by the RCMC holder?", a: "Annual reports and financial statements may need submission for compliance and renewal purposes." },
        { q: "Is FIEO an export promotion council?", a: "Yes, it is recognised by the Ministry of Commerce as an EPC to promote Indian exports." },
        { q: "Can I export without RCMC?", a: "No, certain benefits and legal compliance require RCMC; however, export itself may not always require it." },
        { q: "How long does it take to get IEC code?", a: "IEC registration typically takes 3-5 working days online, subject to DGFT verification." },
        { q: "How do FIEO registrations assist members in enhancing their exporter's credibility?", a: "They provide official certification, access to global trade platforms, and recognition among buyers." },
        { q: "What services are not covered by the FIEO-RCMC?", a: "RCMC does not cover logistics, shipping, or insurance services; these remain the exporter’s responsibility." },
        { q: "What is the Registration Validity?", a: "RCMC is valid for five years from 1 April of the licensing year, unless specified otherwise." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="FIEO Registration Online"
      subtitle="Get FIEO-RCMC registration done in 3 simple steps with expert legal assistance."
      gradientFrom="from-blue-700"
      gradientTo="to-indigo-600"
      serviceLabel="FIEO Registration"
      pricing={pricing}
      sections={sections}
      serviceKey="fieo-registration"
    />
  );
}
