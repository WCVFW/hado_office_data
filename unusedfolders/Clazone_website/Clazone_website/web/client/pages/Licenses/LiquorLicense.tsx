import RegistrationTemplate, { Section } from "@/components/RegistrationTemplate";

export default function LiquorLicenseRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Apply for Liquor License Online",
      paragraphs: [
        "This permit holds significant importance for those aiming to engage in the hospitality, entertainment, or retail sectors dealing with alcoholic drinks. Whether establishing an eatery, pub, or late-night venue, securing a liquor license is a critical stride towards adhering to legal regulations while presenting clientele with an extensive array of drink selections.",
        "Applying online ensures expert guidance, legal compliance, and end-to-end support for bar, restaurant, retail, or distribution licenses.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required for Obtaining a Liquor License",
      items: [
        "Applicant's Identity Proof",
        "Applicant's Address Proof",
        "Address Proof of the Premises Used",
        "No Objection Certificate from the Fire Department",
        "No Objection Certificate from the Municipal Corporation",
        "Application with Business Details",
        "List of Directors (for Companies)",
        "Memorandum of Association and Articles of Association (for Companies)",
        "Copy of Latest Income Tax Return",
        "Photograph of an Authorized Person",
        "Affidavit of No Past Criminal Record",
        "Affidavit of Non-Defaulter",
      ],
    },
    {
      kind: "list",
      title: "Types of Liquor Licenses",
      items: [
        "Retail Liquor License – Sell pre-packaged alcoholic beverages off-site.",
        "Hotel and Restaurant License – Sell and serve alcohol on premises.",
        "Club License – Dispense alcohol to members within private club premises.",
        "Beer and Wine License – Sell beer and wine within specific settings.",
        "Wholesale License – Distribute alcohol from manufacturers to retailers.",
        "Temporary Event License – For events like festivals, weddings, or exhibitions.",
        "Import and Export License – For cross-border alcohol trade.",
        "FL-3 License – Upscale restaurants and bars serving imported liquor.",
        "CL-4 License – Country liquor sales in rural areas and small towns.",
        "FL-2 License – Moderate hotels/restaurants serving foreign-made liquor.",
        "Military Canteen License – Authorized canteens for military personnel.",
      ],
    },
    {
      kind: "list",
      title: "Need to Obtain a Liquor License",
      items: [
        "Mandatory for businesses selling, distributing, or manufacturing alcohol.",
        "Ensures compliance with state-specific regulations.",
        "State oversight to monitor alcohol sales and consumption.",
        "Avoid legal consequences for selling or possessing alcohol without a license.",
        "Get the right license in accordance with state laws.",
      ],
    },
    {
      kind: "list",
      title: "Classification of Liquor Licenses",
      items: [
        "Beer and Wine License – Sell soft/mild beverages such as beer and wine; no hard liquor allowed.",
        "Restaurant Liquor License – 'All-Liquor License' for restaurants primarily reliant on food sales; liquor sales capped at 40%.",
        "Tavern Liquor License – Businesses deriving substantial profits from alcohol alongside food.",
        "Brewpub Liquor License – For producing or brewing own beer and wine.",
      ],
    },
    {
      kind: "list",
      title: "Validity and Renewal of License",
      items: [
        "Initially valid for one year from the issuance date.",
        "Annual renewal required to sustain validity.",
        "Submit application form and renewal fee on the State Excise Department website.",
        "Renewal fees vary by license type; reductions may apply for good conduct.",
      ],
    },
    {
      kind: "list",
      title: "Revocation of Liquor License",
      items: [
        "Dispensing liquor on designated dry days.",
        "Serving alcoholic beverages to minors.",
        "Contravening state excise regulations.",
      ],
    },
    {
      kind: "list",
      title: "Laws That Regulate Liquor Consumption in India",
      items: [
        "Article 47 of the Indian Constitution – Protects public health and restricts intoxicating substances except for medicinal purposes.",
        "Schedule VII – Alcohol falls under the state list; regulations vary across states.",
        "Dry States – Bihar, Gujarat, Nagaland, Manipur, Lakshadweep prohibit alcohol sale/consumption.",
        "Eligibility – Individuals aged 21+ can obtain a liquor license.",
        "Age Restrictions – Individuals under 25 prohibited from consuming alcohol.",
      ],
    },
    {
      kind: "list",
      title: "Why Choose Vakilsearch?",
      items: [
        "Expertise in legal procedures and liquor licensing.",
        "Streamlined application process to save time and effort.",
        "Up-to-date knowledge of state regulations.",
        "Assistance in document preparation and submission.",
        "Communication with authorities handled on your behalf.",
        "Timely reminders for renewals.",
        "Updates on regulatory changes.",
        "Personalized advice based on business model.",
        "Minimized bureaucratic hassle and paperwork.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on Apply for Liquor License Online",
      qa: [
        { q: "What is a liquor license, and why is it important?", a: "A liquor license is a legal permit required to sell, distribute, or serve alcohol legally in India." },
        { q: "What types of licenses are available for alcohol-related businesses?", a: "Retail, hotel/restaurant, club, beer/wine, wholesale, temporary event, import/export, FL-2/FL-3, CL-4, and military canteen licenses." },
        { q: "What documents do I need to provide when applying?", a: "Identity proofs, address proofs, NOCs, business details, directors list, tax returns, affidavits, and photographs." },
        { q: "How do I apply for a liquor license?", a: "Submit the required documents and application to the State Excise Department; experts like Vakilsearch provide end-to-end support." },
        { q: "How long does it take to get a liquor license?", a: "Processing time varies by state and license type, usually weeks to months depending on verification and inspections." },
        { q: "Can I serve alcohol without a liquor license?", a: "No, serving or selling alcohol without a valid license is illegal and punishable by law." },
        { q: "Are there age restrictions for obtaining a liquor license?", a: "Yes, applicants must be at least 21 years old." },
        { q: "What are the consequences of not having a valid license?", a: "Legal penalties including fines, revocation of business permissions, or criminal liability." },
        { q: "Can I get a temporary license for events?", a: "Yes, temporary event licenses are available for weddings, festivals, and exhibitions." },
        { q: "How do I know which license is right for my business?", a: "License type depends on business model, alcohol type, and state regulations; legal experts can guide selection." },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="Apply for Liquor License Online"
      subtitle="Get expert guidance to apply for your liquor license quickly and legally compliant."
      gradientFrom="from-purple-600"
      gradientTo="to-pink-500"
      serviceLabel="Liquor License Application"
      sections={sections}
      serviceKey="liquor-license"
    />
  );
}
