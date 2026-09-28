import RegistrationTemplate, {
  Section,
} from "@/components/RegistrationTemplate";

export default function ADCodeRegistration() {
  const sections: Section[] = [
    {
      kind: "overview",
      title: "Overview - AD Code Registration",
      paragraphs: [
        "An AD, or Authorised Dealer, is a 14-digit code issued by a bank to an exporter or importer. It is required for all export and import transactions involving foreign currency.",
        "The purpose of the AD Code is to ensure that foreign currency transactions are genuine and not used for illegal purposes.",
      ],
    },
    {
      kind: "list",
      title: "Benefits of AD Code Registration",
      items: [
        "Ease of making and receiving foreign currency payments.",
        "Faster customs clearance of shipments.",
        "Access to government incentives and schemes.",
        "Reduced risk of penalties and fines.",
      ],
    },
    {
      kind: "list",
      title: "Eligibility for AD Code Registration",
      items: [
        "Entity must be registered with DGFT for an Import Export Code (IEC).",
        "Must have a current account with a bank authorised to deal in foreign currency.",
        "Provide all required documents to the bank.",
      ],
    },
    {
      kind: "list",
      title: "Documents Required",
      items: [
        "IEC Registration Certificate",
        "Bank Account Details (bank name, branch, account number, IFSC code)",
        "Proof of Identity (PAN, Aadhaar, Passport, or Voter ID)",
        "Proof of Address (utility bill, lease, or property registration)",
        "Board Resolution authorising AD Code registration",
        "Letter of Authorisation from the authorised signatory",
      ],
    },
    {
      kind: "list",
      title: "How to Apply for an AD Code",
      items: [
        "Apply through your bank by submitting application letter, supporting documents, and paying applicable fees.",
        "Register your AD Code on ICEGATE: verify port locations, obtain Class-3 digital signature, add bank account, upload documents, and submit.",
      ],
    },
    {
      kind: "list",
      title: "Ports / ICD for AD Code Registration",
      items: [
        "Chennai, Cochin, Kolkata, Mumbai, New Delhi, Kandla, Visakhapatnam, Haldia, Paradip, Mangalore, Tuticorin",
        "Inland Container Depots (ICDs) like Ahmedabad ACC ICD, Alang, Azhikkal Port, Agra ICD, Coimbatore Sriperumbudur ICD",
      ],
    },
    {
      kind: "list",
      title: "Why AD Code Registration is Required",
      items: [
        "To prevent illegal outflow of foreign exchange.",
        "To ensure foreign currency transactions are for genuine trade purposes.",
        "To facilitate smooth export and import processes.",
        "To avail government incentives and schemes.",
      ],
    },
    {
      kind: "list",
      title: "Consequences of Not Registering",
      items: [
        "Unable to make or receive foreign currency payments.",
        "Delays or denial in clearing goods from customs.",
        "Ineligibility for government incentives and schemes.",
        "Potential penalties and fines under FEMA and PMLA.",
      ],
    },
    {
      kind: "list",
      title: "Importance of AD Code Registration",
      items: [
        "Prevents illegal outflow of foreign exchange.",
        "Ensures transactions are genuine trade activities.",
        "Speeds up export and import process.",
        "Required for eligibility in government schemes and incentives.",
      ],
    },
    {
      kind: "list",
      title: "Why Vakilsearch?",
      items: [
        "Expertise in foreign exchange regulations and AD Code registration.",
        "Efficient and timely processing of applications.",
        "Customised solutions for exporters and importers.",
        "Compliance assurance with RBI regulations.",
        "Risk mitigation for smoother international trade.",
        "Transparent and competitive pricing.",
        "Dedicated customer support.",
        "Proven track record in successful AD Code registrations.",
      ],
    },
    {
      kind: "faq",
      title: "FAQs on AD Code Registration",
      qa: [
        {
          q: "What is AD Code Registration?",
          a: "AD Code is a 14-digit code issued to exporters/importers by a bank to facilitate foreign currency transactions.",
        },
        {
          q: "How to check AD Code registration status?",
          a: "You can verify your AD Code status on the ICEGATE portal using PAN or IE Code details.",
        },
        {
          q: "What is AD Code registration for export?",
          a: "It is required for all export transactions involving foreign currency to ensure compliance and authenticity.",
        },
        {
          q: "How to check AD Code registration status in ICEGATE?",
          a: "Log in to ICEGATE, navigate to user details or IE code status enquiry, and verify your registration.",
        },
        {
          q: "Can I apply for AD Code online?",
          a: "Yes, through your bank and by registering the code on ICEGATE portal.",
        },
        {
          q: "What is the 7-digit AD code in Delhi?",
          a: "AD Code is a 14-digit code; some banks may refer to partial codes for internal purposes.",
        },
        {
          q: "Who gives AD Code?",
          a: "A bank authorised to deal in foreign currency issues the AD Code to exporters/importers.",
        },
        {
          q: "Is AD Code 7-digit or 14-digit?",
          a: "The official AD Code is 14-digit.",
        },
        {
          q: "What is ICEGATE registration?",
          a: "ICEGATE is the Indian Customs Electronic Gateway used for registration and tracking of import/export activities.",
        },
        {
          q: "Who is eligible for ICEGATE registration?",
          a: "Exporters/importers with valid IEC and bank AD Code can register on ICEGATE.",
        },
      ],
    },
  ];

  return (
    <RegistrationTemplate
      title="AD Code Registration"
      subtitle="Expert-assisted AD Code registration to simplify your import-export process."
      gradientFrom="from-green-600"
      gradientTo="to-blue-500"
      serviceLabel="AD Code Registration"
      sections={sections}
      serviceKey="ad-code-registration"
    />
  );
}
