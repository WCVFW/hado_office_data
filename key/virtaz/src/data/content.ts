export interface Service {
  slug: string
  navTitle: string
  title: string
  subtitle: string
  intro: string[]
  howWeHelp: { title: string; body: string }[]
  howWeHelpHeading: string
  process?: string[]
  extraNote?: { heading: string; body: string[] }
  roleStatement?: { heading: string; body: string }
  cta: { text: string; button: string }
  seo: { title: string; description: string }
}

export const services: Service[] = [
  {
    slug: 'auction-property-advisory',
    navTitle: 'Auction Property Advisory',
    title: 'Auction Property Advisory & Consulting',
    subtitle: 'Structured Guidance Through Bank & NBFC Property Auctions',
    intro: [
      `Properties offered for sale by banks, NBFCs and financial institutions — typically secured assets being sold under applicable auction processes — can represent genuine opportunities, but they also involve a distinct process, timeline and set of risks compared to a regular property purchase. Veritaz's Auction Property Advisory & Consulting service helps individuals, investors and businesses navigate this process in a structured, informed manner.`,
    ],
    howWeHelpHeading: 'How We Help',
    howWeHelp: [
      { title: 'Identification of Auction Properties', body: 'Helping you identify properties being offered through bank, NBFC and financial institution auction processes, based on your requirements and budget.' },
      { title: 'Property Shortlisting', body: 'Narrowing down options based on location, category, indicative value and your stated objectives.' },
      { title: 'Preliminary Property Assessment', body: "Coordinating an initial, preliminary review of the property's condition and background before you commit further time or resources." },
      { title: 'Auction-Process Guidance', body: 'Explaining the applicable auction procedure, timelines, eligibility conditions and participation requirements as published by the concerned bank/NBFC/authority.' },
      { title: 'Auction-Document Review Coordination', body: 'Coordinating review of auction notices, terms and conditions, and related documentation, including through qualified professionals where legal or technical review is required.' },
      { title: 'Site-Visit Coordination', body: 'Arranging and coordinating site visits so you can assess the property first-hand.' },
      { title: 'Property Valuation Coordination', body: 'Coordinating an independent assessment of market value through qualified/approved valuation professionals.' },
      { title: 'Legal Due-Diligence Coordination', body: 'Coordinating title and encumbrance checks through appropriately qualified legal professionals.' },
      { title: 'Financing Assistance', body: 'Where financing is required for the auction purchase, coordinating with lenders on your behalf as part of our Loan Advisory services.' },
      { title: 'Bid-Process Guidance', body: 'Helping you understand the bidding mechanism, submission requirements and applicable timelines.' },
      { title: 'Post-Auction Documentation Coordination', body: 'Coordinating the documentation required after a successful bid, including liaison with the concerned bank/NBFC and other stakeholders.' },
    ],
    extraNote: {
      heading: 'Important Risk Disclosure',
      body: [
        'Purchasing a property through an auction process is different from a conventional property transaction and involves risks that every participant should understand before proceeding, including:',
        'Title risk — auction properties are typically sold on an "as is, where is" and "as is, what is" basis, and title clarity should be independently verified.',
        'Possession risk — physical and legal possession of an auctioned property is not always immediate or guaranteed at the time of sale.',
        'Financial risk — earnest money deposits and bid amounts are typically non-refundable beyond specified conditions, and financing approval is not guaranteed.',
        'Procedural risk — auction timelines, eligibility conditions and documentation requirements are set by the selling bank/NBFC/authority and are subject to change.',
        'Veritaz strongly recommends independent legal, financial and technical due diligence before participating in any auction process. Our advisory and coordination services are designed to support this due diligence — they do not eliminate the inherent risks of auction-property transactions, and Veritaz does not guarantee title, possession, valuation accuracy or transaction outcome.',
      ],
    },
    cta: { text: 'Considering an auction property? Get structured guidance before you bid.', button: 'Talk to Our Auction Advisory Team' },
    seo: { title: 'Auction Property Advisory & Consulting | Veritaz', description: 'Structured guidance through bank and NBFC secured-asset auction processes, from shortlisting to post-auction documentation.' },
  },
  {
    slug: 'loan-advisory-processing',
    navTitle: 'Loan Advisory & Processing',
    title: 'Loan Advisory & Processing',
    subtitle: 'Structured Support for Your Financing Requirements',
    intro: [
      `Securing the right financing — for a business, a project, working capital, or a property — involves more than approaching a lender. It requires understanding eligibility, preparing accurate documentation, and presenting your case clearly. Veritaz's Loan Advisory & Processing service supports individuals and businesses through this process, while final credit and sanction decisions always remain with the relevant lending institution.`,
    ],
    howWeHelpHeading: 'Areas We Cover',
    howWeHelp: [
      { title: 'Business Loans', body: 'Advisory and documentation support for general business financing needs.' },
      { title: 'Working Capital', body: 'Assistance in assessing and applying for working-capital facilities.' },
      { title: 'Term Loans', body: 'Support for medium- and long-term financing requirements.' },
      { title: 'Loan Against Property', body: 'Advisory for property-backed financing, coordinated with relevant lenders.' },
      { title: 'MSME Finance', body: 'Support tailored to the documentation and eligibility patterns typical of MSME financing schemes and lender programmes.' },
      { title: 'Project Finance', body: 'Advisory support for structuring financing requirements around specific projects.' },
      { title: 'Home/Property Finance', body: 'Assistance with property-linked financing requirements, where applicable.' },
      { title: 'Financial Restructuring', body: 'Support in preparing restructuring-related documentation and proposals for existing facilities, coordinated with the concerned lender.' },
    ],
    process: ['Requirement Assessment', 'Eligibility Review', 'Documentation', 'Financial Preparation', 'Lender Coordination', 'Sanction Follow-Up', 'Disbursement Coordination'],
    roleStatement: {
      heading: 'Our Role, Clearly Stated',
      body: 'Veritaz acts as an advisory and facilitation partner in the loan process. We do not sanction, approve or guarantee any loan. Credit assessment, approval, sanction terms and disbursement are entirely at the discretion of the respective bank, NBFC or lending institution, based on their own independent evaluation, policies and applicable regulatory requirements. Our role is to help you prepare a strong, well-documented case and to coordinate the process efficiently — not to influence or guarantee the lender’s decision.',
    },
    cta: { text: 'Need help navigating your financing requirement?', button: 'Speak to Our Loan Advisory Team' },
    seo: { title: 'Loan Advisory & Processing Services | Veritaz', description: 'End-to-end advisory support for business, working capital, term, MSME, project and property-linked finance requirements.' },
  },
  {
    slug: 'npa-resolution-stressed-loan-advisory',
    navTitle: 'NPA Resolution & Stressed Loan Advisory',
    title: 'NPA Resolution & Stressed Loan Advisory',
    subtitle: 'Structured Support for Borrowers Facing Stressed Loan Situations',
    intro: [
      `A loan account slipping into stress or classified as a Non-Performing Asset (NPA) can be an overwhelming experience for individuals and businesses alike. Veritaz's NPA Resolution & Stressed Loan Advisory service is designed to help eligible borrowers understand their situation clearly and work toward a structured resolution — always in coordination with, and subject to the approval of, the concerned lender.`,
    ],
    howWeHelpHeading: 'How We Help',
    howWeHelp: [
      { title: 'Loan Account Assessment', body: 'Reviewing the current status, repayment history and terms of your loan account.' },
      { title: 'NPA Account Review', body: 'Understanding the specific classification, timeline and applicable process relevant to your account.' },
      { title: 'Cash-Flow Assessment', body: "Assessing your (or your business's) current cash-flow position to understand realistic repayment capacity." },
      { title: 'Repayment Restructuring Proposals', body: 'Assisting in preparing restructuring proposals for submission to the lender, based on your assessed repayment capacity.' },
      { title: 'Settlement Strategy', body: 'Helping you think through settlement options and prepare a realistic, well-supported proposal.' },
      { title: 'OTS Coordination', body: 'Assisting with One-Time Settlement proposal preparation and coordination with the lender, where such a scheme is offered.' },
      { title: 'Lender Negotiation/Coordination Support', body: 'Coordinating communication and follow-up with the concerned lender on your behalf.' },
      { title: 'Documentation Assistance', body: 'Helping compile and organise the documentation required to support your resolution proposal.' },
      { title: 'Resolution Proposal Preparation', body: 'Structuring your proposal in a clear, lender-ready format.' },
      { title: 'Legal & Financial Professional Coordination', body: 'Coordinating with independent legal and financial professionals where specialised advice or representation is required.' },
    ],
    extraNote: {
      heading: 'Important Clarification',
      body: [
        'All restructuring, settlement or resolution outcomes are subject to the sole discretion and approval of the concerned lender, and to applicable regulatory guidelines and internal lender policies. Veritaz does not guarantee restructuring approval, settlement acceptance, or any specific financial outcome.',
        'Veritaz is not an Asset Reconstruction Company (ARC), bank, NBFC, insolvency professional, law firm, or any other regulated entity, and does not represent itself as such. Where a matter requires services reserved for such regulated entities or professionals — including formal insolvency proceedings, statutory recovery mechanisms, or legal representation — Veritaz coordinates with appropriately qualified and authorised professionals rather than undertaking these functions directly.',
      ],
    },
    cta: { text: 'Facing a stressed loan account? Understand your options with a structured assessment.', button: 'Talk to Our NPA Advisory Team' },
    seo: { title: 'NPA Resolution & Stressed Loan Advisory | Veritaz', description: 'Assessment and resolution-proposal support for borrowers facing stressed loan accounts.' },
  },
  {
    slug: 'loan-collection-recovery',
    navTitle: 'Loan Collection & Recovery',
    title: 'Loan Collection & Recovery Agency Services',
    subtitle: 'Professional Collection & Recovery Support for Lenders',
    intro: [
      'Audience: Banks | NBFCs | Financial Institutions | Fintech Lenders | Other Eligible Lending Organisations',
      'Managing overdue accounts and delinquency across a growing loan book requires a disciplined, well-documented and compliant approach. Veritaz Consultancy Limited provides authorised loan collection and recovery support services on behalf of lenders, subject to contractual appointment and applicable regulatory requirements. We work as an extension of your collections function — structured, accountable, and aligned with your policies.',
    ],
    howWeHelpHeading: 'Our Services',
    howWeHelp: [
      { title: 'EMI/Payment Follow-Up', body: 'Routine follow-up on upcoming and due instalments.' },
      { title: 'Early-Stage Delinquency Follow-Up', body: 'Proactive contact at the earliest stage of overdue status, to support timely resolution.' },
      { title: 'Overdue Account Follow-Up', body: 'Structured follow-up across ageing buckets, aligned with your internal escalation policy.' },
      { title: 'Borrower Communication', body: 'Professional, respectful communication with borrowers regarding their outstanding obligations.' },
      { title: 'Payment Reminders', body: 'Scheduled reminders through approved communication channels.' },
      { title: 'Field Collection Coordination', body: 'Coordinating field-level follow-up where required and authorised, following lender-approved protocols.' },
      { title: 'Collection Case Management', body: 'Structured tracking of each case from assignment through to resolution or escalation.' },
      { title: 'Customer Contact & Follow-Up', body: 'Maintaining a documented record of all borrower interactions.' },
      { title: 'Repayment Commitment Tracking', body: 'Recording and following up on repayment commitments made by borrowers.' },
      { title: 'Collection MIS & Reporting', body: 'Regular, structured reporting on case status, contact outcomes and portfolio trends for the appointing lender.' },
      { title: 'Escalation of Unresolved Cases', body: "Clear escalation pathways for cases that do not resolve through standard follow-up, in line with the lender's process." },
      { title: 'NPA Recovery Support', body: 'Collection and recovery support specifically for accounts classified as NPA, as authorised by the lender.' },
      { title: 'Settlement Coordination', body: 'Coordinating settlement discussions strictly as authorised by, and within parameters set by, the appointing lender.' },
      { title: 'Documentation & Collection-Status Reporting', body: 'Maintaining audit-ready documentation of contact history, commitments and case status.' },
    ],
    extraNote: {
      heading: 'Ethical & Compliant Recovery Practices',
      body: [
        'Veritaz is committed to conducting all collection and recovery activity professionally, respectfully and within the boundaries set by law and by the appointing lender. Our approach is built around:',
        'Respectful Borrower Communication — every interaction is conducted courteously and professionally, regardless of account status.',
        'No Intimidation or Harassment — our teams do not use threatening, coercive or intimidating language or conduct under any circumstances.',
        'Customer Confidentiality — borrower information is handled confidentially and shared only as required for the collection mandate.',
        'Data Protection — borrower and account data is handled in accordance with applicable data-protection requirements and the appointing lender’s data-handling policies.',
        'Proper Identification & Authorisation — our representatives identify themselves clearly and act only within the scope of the authorisation granted by the appointing lender.',
        'Following Lender-Approved Processes — all collection activity follows the specific process, tone and escalation matrix approved by the appointing institution.',
        'Appropriate Calling/Contact Practices — contact is made within permissible hours and through approved channels, consistent with applicable guidelines.',
        'Escalation Mechanisms — a clear internal escalation path for disputed accounts, borrower grievances, or cases requiring lender intervention.',
        'Staff Training — our personnel are trained on communication standards, applicable regulatory expectations, and lender-specific protocols before handling any case.',
        'Documentation & Audit Trails — every contact, commitment and outcome is documented to support transparency and audit requirements.',
        'Compliance with Applicable RBI/Lender Requirements — our processes are designed to operate within applicable regulatory guidelines and the specific requirements set by each appointing lender.',
        'Veritaz positions itself as a professional collection and recovery support partner to lenders — not as a debt-collection service offering forceful, guaranteed, or unconditional recovery outcomes. All services are performed strictly under contractual appointment and applicable regulatory requirements, and recovery outcomes are not guaranteed.',
      ],
    },
    cta: { text: 'Looking for a professional, compliant collection and recovery partner?', button: 'Discuss an Institutional Engagement' },
    seo: { title: 'Loan Collection & Recovery Agency Services | Veritaz', description: 'Authorised collection and recovery support for banks, NBFCs and lending institutions, subject to contractual appointment.' },
  },
  {
    slug: 'property-search-acquisition-advisory',
    navTitle: 'Property Search & Acquisition',
    title: 'Property Search & Acquisition Advisory',
    subtitle: 'Structured Support Across Residential, Commercial, Industrial and Investment Properties',
    intro: [
      `Finding the right property — for personal use, business use or investment — requires more than browsing listings. Veritaz's Property Search & Acquisition Advisory service brings structure to this process, whether you are looking at residential, commercial, industrial, investment, or auction properties.`,
    ],
    howWeHelpHeading: 'Categories We Cover',
    howWeHelp: [
      { title: 'Residential Properties', body: 'Homes and residential investment options.' },
      { title: 'Commercial Properties', body: 'Office, retail and commercial-use properties.' },
      { title: 'Industrial Properties', body: 'Industrial land, sheds and facilities.' },
      { title: 'Investment Properties', body: 'Properties evaluated primarily for investment potential.' },
      { title: 'Auction Properties', body: 'Coordinated jointly with our Auction Property Advisory service where relevant.' },
    ],
    process: ['Requirement Analysis', 'Property Search', 'Shortlisting', 'Market Comparison', 'Site Visit', 'Negotiation Support', 'Due-Diligence Coordination', 'Transaction Support'],
    extraNote: {
      heading: 'A Note on Outcomes',
      body: ["Property market values, appreciation and investment outcomes are subject to market conditions and cannot be guaranteed. Veritaz's role is to support an informed, well-documented acquisition process."],
    },
    cta: { text: 'Looking for the right property?', button: 'Start Your Property Search' },
    seo: { title: 'Property Search & Acquisition Advisory | Veritaz', description: 'Structured search and acquisition support across residential, commercial, industrial and investment properties.' },
  },
  {
    slug: 'property-valuation-assessment',
    navTitle: 'Property Valuation',
    title: 'Property Valuation & Assessment Coordination',
    subtitle: 'Coordinated Valuation Through Qualified Professionals',
    intro: [
      `An accurate, well-supported valuation is central to property transactions, loan applications and auction decisions. Veritaz coordinates property valuation and assessment through qualified/approved valuation professionals, tailored to the purpose of the valuation.`,
    ],
    howWeHelpHeading: 'Areas Covered',
    howWeHelp: [
      { title: 'Residential Property', body: 'Valuation coordination for residential properties.' },
      { title: 'Commercial Property', body: 'Valuation coordination for commercial properties.' },
      { title: 'Industrial Property', body: 'Valuation coordination for industrial properties.' },
      { title: 'Land Valuation', body: 'Coordination for land valuation requirements.' },
      { title: 'Loan-Related Valuation', body: 'Coordinated in line with lender requirements.' },
      { title: 'Auction-Property Valuation', body: 'Supporting informed bidding decisions.' },
      { title: 'Market-Value Assessment', body: 'Indicative market positioning for a property.' },
    ],
    roleStatement: {
      heading: 'How This Works',
      body: "Veritaz coordinates the valuation process — including identifying and engaging appropriately qualified or approved valuation professionals, scheduling site inspections, and compiling the resulting valuation report — for the client's or lender's requirement. Veritaz does not itself issue statutory or regulated valuation reports unless it holds the necessary registered/approved valuer status for the relevant purpose; valuation opinions are provided by the qualified professionals engaged for the assignment. Valuation figures represent professional opinion as of a point in time and are not a guarantee of sale price, loan eligibility, or future market value.",
    },
    cta: { text: 'Need a professionally coordinated property valuation?', button: 'Request Valuation Coordination' },
    seo: { title: 'Property Valuation & Assessment Coordination | Veritaz', description: 'Coordinating valuation of property through qualified/approved professionals.' },
  },
  {
    slug: 'legal-due-diligence-documentation',
    navTitle: 'Legal Due-Diligence',
    title: 'Property Legal Due-Diligence & Documentation Coordination',
    subtitle: 'Coordinated Legal Review for Informed Property Decisions',
    intro: [
      `Property transactions carry legal risk when title, ownership, encumbrance or approval documentation is not properly verified. Veritaz coordinates legal due-diligence and documentation review — through appropriately qualified legal professionals — to help clients approach property decisions with clearer information.`,
    ],
    howWeHelpHeading: 'Areas Covered',
    howWeHelp: [
      { title: 'Title-Document Review Coordination', body: 'Coordinating review of title documents relevant to the property.' },
      { title: 'Ownership-Document Verification', body: 'Coordinating verification of ownership documentation.' },
      { title: 'Encumbrance Review', body: 'Coordinating checks on encumbrances against the property.' },
      { title: 'Property-Document Verification', body: 'Coordinating verification of property documentation generally.' },
      { title: 'Approval-Document Review', body: 'Building plan approvals, statutory permissions, and similar.' },
      { title: 'Sale-Document Coordination', body: 'Coordinating review and preparation of sale-related documentation.' },
      { title: 'Auction-Document Review', body: 'Coordinated with our Auction Property Advisory service.' },
      { title: 'Legal-Opinion Coordination', body: 'Coordinating formal legal opinions through qualified legal professionals.' },
      { title: 'Loan Legal-Documentation Coordination', body: 'Coordinating legal documentation tied to property-linked financing.' },
    ],
    roleStatement: {
      heading: 'Our Role, Clearly Stated',
      body: 'Legal opinions and other reserved legal services are undertaken and issued through appropriately qualified and licensed legal professionals engaged or coordinated by Veritaz for the specific assignment — Veritaz does not itself act as a law firm or provide legal opinions. Our role is to coordinate the engagement, gather and organise the required documents, liaise between the client and the legal professional, and help ensure the review is completed in a timely, structured manner. Findings and opinions on legal matters rest with the qualified legal professional engaged for the assignment, and Veritaz does not guarantee the outcome of any legal review, including clear title.',
    },
    cta: { text: 'Need coordinated legal due diligence before your property transaction?', button: 'Request Due-Diligence Coordination' },
    seo: { title: 'Property Legal Due-Diligence & Documentation Coordination | Veritaz', description: 'Coordinating title checks, encumbrance review and documentation through appropriately qualified legal professionals.' },
  },
]

export const taglines = [
  'Property. Finance. Resolution.',
  'Where Property and Finance Meet Resolution.',
  'Structured Solutions for Property, Loans and Recovery.',
  'Clarity in Property. Confidence in Finance.',
  'Advisory That Bridges Property, Credit and Recovery.',
  'Process-Driven Solutions for Property and Finance.',
  'Integrated Expertise. Informed Decisions.',
  'From Property Search to Loan Resolution — One Trusted Partner.',
  'Professional Advisory Across Property, Lending and Recovery.',
  'Trusted Coordination for Property, Finance and Stressed Assets.',
]

export const processSteps = [
  { title: 'Understand', body: 'We understand your requirement, whether it is a property purchase, a loan need, a stressed account, or an institutional collection mandate.' },
  { title: 'Assess', body: 'We assess eligibility, documentation, property status or account status, as relevant to the engagement.' },
  { title: 'Coordinate', body: 'We coordinate with lenders, qualified valuers, legal professionals and other stakeholders on your behalf.' },
  { title: 'Document', body: 'We support documentation at every stage, keeping the process organised and traceable.' },
  { title: 'Resolve', body: "We work toward a structured outcome — a completed purchase, a sanctioned facility, a workable resolution proposal, or a resolved collection case — always subject to the relevant lender's, authority's or professional's final decision." },
]

export const audiences = [
  { title: 'Individual Customers', body: 'Property purchase, loans, investment guidance', long: 'Whether you are purchasing your first home, exploring an auction property, applying for a loan, or planning a property investment, Veritaz supports you through structured search, financing and due-diligence assistance — explaining each step clearly and coordinating the right professionals on your behalf.' },
  { title: 'Businesses & MSMEs', body: 'Business finance, restructuring, property needs', long: 'From working-capital and term-loan requirements to loan restructuring and property-linked financing, Veritaz helps businesses and MSMEs prepare stronger loan applications, navigate stressed-account situations, and manage property-related needs — while lenders retain full discretion over credit decisions.' },
  { title: 'Property Investors', body: 'Regular and auction property opportunities', long: 'Veritaz supports investors evaluating residential, commercial, industrial or auction properties, with structured search, market comparison, valuation coordination and due-diligence support to inform investment decisions.' },
  { title: 'Banks & NBFCs', body: 'Loan processing support, collection/recovery, portfolio support', long: 'Veritaz partners with banks and NBFCs on outsourced collection and recovery, resolution-support coordination, and loan-processing documentation support — operating strictly within the scope of contractual appointment and applicable regulatory requirements.' },
  { title: 'Financial Institutions & Fintechs', body: 'Customer follow-up, documentation, collection operations', long: 'For fintech lenders and other financial institutions, Veritaz offers structured collection operations, borrower follow-up, documentation coordination and portfolio-support services, adapted to the specific policies and risk framework of the appointing institution.' },
]

export const whyVeritaz = [
  { title: 'Integrated Service Model', body: 'Property advisory, financing support, NPA resolution and collection services under a single, coordinated organisation, rather than multiple disconnected vendors.' },
  { title: 'Professional, Process-Driven Approach', body: 'Every engagement follows a defined process — from requirement assessment to documentation to resolution — rather than an ad hoc, relationship-only approach.' },
  { title: 'Transparent Communication', body: 'We are clear about what Veritaz does, what remains with the lender, valuer, legal professional or authority, and what the realistic next steps are.' },
  { title: 'Financial and Property Understanding', body: 'Our teams work at the intersection of property and finance, allowing us to see how a property decision and a financing decision affect each other.' },
  { title: 'Structured Documentation Support', body: 'We help organise and coordinate the documentation that property and loan transactions typically require, reducing delays caused by incomplete paperwork.' },
  { title: 'Compliance-Focused Approach', body: 'We coordinate reserved or licensed functions through appropriately qualified professionals, and we do not represent ourselves as a regulated entity we are not.' },
  { title: 'Single-Point Coordination', body: 'One team coordinating across lenders, valuers, legal professionals and other stakeholders on your behalf, so you are not managing every relationship separately.' },
  { title: 'Respectful, Ethical Conduct', body: 'Particularly in our collection and recovery work, we prioritise respectful borrower communication and lender-aligned, compliant processes over aggressive tactics.' },
]

export const faqs = [
  { q: 'What does Veritaz Consultancy Limited do?', a: 'Veritaz provides integrated Property, Loan, NPA Resolution, Debt Collection and Financial Facilitation advisory and coordination services to individuals, businesses, investors, banks, NBFCs and other financial institutions, subject to applicable laws and professional requirements.' },
  { q: 'Is Veritaz a bank, NBFC or lender?', a: 'No. Veritaz is a Public Limited Company providing advisory, facilitation and coordination services. We are not a bank, NBFC, or lending institution, and we do not sanction or disburse loans ourselves.' },
  { q: 'Does Veritaz guarantee loan approval?', a: 'No. Loan approval and sanction are entirely at the discretion of the respective bank, NBFC or lending institution, based on their own independent credit evaluation. Veritaz assists with preparation, documentation and coordination, but does not guarantee sanction.' },
  { q: 'Is it safe to buy a bank-auctioned property?', a: 'Auction properties can be a genuine opportunity, but they carry title, possession, financial and procedural risks that differ from regular property purchases. We strongly recommend independent legal and financial due diligence, and our advisory services are designed to support — not replace — that due diligence.' },
  { q: 'Does Veritaz guarantee clear title on properties it advises on?', a: 'No. Title verification is coordinated through appropriately qualified legal professionals, and legal opinions rest with those professionals. Veritaz does not guarantee title clarity for any property, including auction properties.' },
  { q: 'What is NPA Resolution & Stressed Loan Advisory?', a: "It is advisory support for borrowers whose loan accounts are stressed or classified as NPA, covering account assessment, restructuring or settlement proposal preparation, and coordination with the concerned lender. All outcomes are subject to the lender's approval." },
  { q: 'Is Veritaz an Asset Reconstruction Company (ARC) or insolvency professional?', a: 'No. Veritaz is not an ARC, bank, NBFC, insolvency professional, or law firm. Where such regulated functions are required, we coordinate with appropriately qualified and authorised professionals.' },
  { q: 'Can Veritaz guarantee a loan settlement or One-Time Settlement (OTS)?', a: "No. Any restructuring, settlement or OTS outcome is entirely subject to the concerned lender's discretion, internal policies, and applicable regulatory guidelines." },
  { q: 'Who does Veritaz work with for loan collection and recovery?', a: 'We work with banks, NBFCs, financial institutions and fintech lenders, providing collection and recovery support strictly under contractual appointment and applicable regulatory requirements.' },
  { q: 'How does Veritaz ensure ethical debt-collection practices?', a: 'Our processes are built around respectful borrower communication, no intimidation or harassment, confidentiality, data protection, proper identification, lender-approved protocols, appropriate contact timing, staff training, and documented audit trails.' },
  { q: 'Does Veritaz guarantee debt recovery for lenders?', a: 'No. Recovery outcomes depend on borrower circumstances, applicable law, and the specific case, and are not guaranteed. Veritaz provides professional, structured collection and recovery support within the scope of its appointment.' },
  { q: 'Does Veritaz provide property valuation itself?', a: 'Veritaz coordinates property valuation through qualified/approved valuation professionals. We do not ourselves issue statutory or regulated valuation reports unless the necessary registered/approved valuer status exists.' },
  { q: 'Does Veritaz provide legal opinions on property documents?', a: 'Legal opinions and reserved legal services are coordinated through appropriately qualified, licensed legal professionals engaged for the assignment. Veritaz itself does not act as a law firm.' },
  { q: 'What types of properties does Veritaz help with?', a: 'Residential, commercial, industrial, investment and bank/NBFC-auctioned properties, across search, valuation coordination and legal due-diligence coordination.' },
  { q: 'What types of loans does Veritaz provide advisory support for?', a: 'Business loans, working capital, term loans, loan against property, MSME finance, project finance, and home/property finance where applicable, along with financial restructuring support.' },
  { q: 'How does Veritaz charge for its services?', a: 'Fee structures vary by service and engagement, and are shared and agreed with the client or institution before an engagement begins. Please contact us for details specific to your requirement.' },
  { q: 'Can individuals as well as institutions approach Veritaz?', a: 'Yes. Veritaz works with individual customers, businesses and investors on property and loan-related needs, and with banks, NBFCs and other institutions on portfolio-related, outsourced services.' },
  { q: 'How can I raise a concern or complaint about a Veritaz interaction?', a: 'Clients and borrowers can reach our team through the contact details on our Contact Us page. We maintain an internal escalation process for unresolved concerns, particularly in relation to collection and recovery interactions.' },
]

export const ctaLibrary = [
  { trigger: 'Auction property seekers', headline: 'Looking for an Auction Property?', button: 'Explore Auction Advisory', slug: 'auction-property-advisory' },
  { trigger: 'Businesses needing finance', headline: 'Need Business Finance Assistance?', button: 'Talk to Our Loan Advisory Team', slug: 'loan-advisory-processing' },
  { trigger: 'Stressed borrowers', headline: 'Facing an NPA or Stressed Loan Situation?', button: 'Get Resolution Advisory', slug: 'npa-resolution-stressed-loan-advisory' },
  { trigger: 'Banks/NBFCs', headline: 'Looking for a Collection & Recovery Partner?', button: 'Discuss an Institutional Engagement', slug: 'loan-collection-recovery' },
  { trigger: 'Property buyers/legal checks', headline: 'Need Property Due Diligence?', button: 'Request Due-Diligence Coordination', slug: 'legal-due-diligence-documentation' },
  { trigger: 'Property investors', headline: 'Exploring Property Investment Options?', button: 'Start Your Property Search', slug: 'property-search-acquisition-advisory' },
  { trigger: 'Valuation seekers', headline: 'Need a Property Valued?', button: 'Request Valuation Coordination', slug: 'property-valuation-assessment' },
]

export const institutionalOffer = [
  { title: 'Collection & Recovery Support', body: 'Structured, documented and ethically conducted collection support across early-stage delinquency, overdue accounts and NPA recovery, following your approved protocols.', slug: 'loan-collection-recovery' },
  { title: 'NPA Resolution Support', body: 'Coordination support for borrower-facing resolution activity — restructuring proposal assistance, settlement coordination, and documentation support — always within parameters set and approved by your institution.', slug: 'npa-resolution-stressed-loan-advisory' },
  { title: 'Loan Processing & Documentation Support', body: 'Support in coordinating documentation, borrower communication and follow-up during the loan origination and disbursement cycle, where appointed to do so.', slug: 'loan-advisory-processing' },
  { title: 'Valuation & Legal Due-Diligence Coordination', body: 'Coordinating property valuation and legal due-diligence through qualified professionals, for loan-linked or asset-backed portfolio requirements.', slug: 'property-valuation-assessment' },
  { title: 'Auction & Asset-Disposal Support', body: 'Advisory support around secured-asset auction processes for properties in your portfolio, including buyer coordination and documentation support.', slug: 'auction-property-advisory' },
]

export const institutionalWhy = [
  'Single-point coordination across collection, resolution and documentation needs, reducing the number of vendors your institution manages.',
  'Documented, audit-ready processes at every stage of a case or account.',
  'Ethical, lender-aligned communication practices, with staff trained on respectful and compliant borrower interaction.',
  'Structured MIS and reporting, giving your team clear visibility into case status and portfolio trends.',
  'Engagement strictly within your authorisation and policy framework — Veritaz does not act beyond the scope of any contractual appointment.',
]

export const trustPoints = [
  'We do not guarantee loan sanction, auction-property title, NPA settlement, debt recovery, or investment returns — these decisions rest with the relevant lender, court, authority or market.',
  'Where a service requires a licensed, registered or reserved professional function — such as legal opinions, statutory valuation, or insolvency processes — we coordinate that function through appropriately qualified professionals rather than performing it ourselves, unless the relevant registration or authorisation exists.',
  'Our loan collection and recovery services are performed only under appropriate lender engagement/authorisation, following ethical and lender-approved communication practices.',
  'We do not represent ourselves as a bank, NBFC, Asset Reconstruction Company, law firm, registered valuer or insolvency professional unless that status is separately and specifically confirmed.',
]

export const complianceClauses = [
  { title: '1. Loan Sanction and Approval', body: "Loan approval, sanction terms, interest rates and disbursement are determined solely at the discretion of the respective bank, NBFC or lending institution, based on their own independent credit evaluation and applicable regulatory requirements. Veritaz Consultancy Limited does not sanction, approve, guarantee or influence any lender's credit decision." },
  { title: '2. Auction Property Transactions', body: 'Properties offered through bank/NBFC/financial-institution auction processes are typically sold on an "as is, where is" and "as is, what is" basis and involve legal, title, possession, financial and procedural risks. Independent legal, financial and technical due diligence is strongly recommended before participating in any auction process or completing any auction-property purchase. Veritaz does not guarantee title, possession, or any transaction outcome in relation to auction properties.' },
  { title: '3. Property Valuation & Legal Opinions', body: 'Property valuation and legal-opinion services referenced on this website are provided and/or coordinated through appropriately qualified and, where applicable, registered or licensed professionals, depending on the specific engagement. Veritaz does not itself provide statutory or regulated valuation, or legal opinions, unless it holds the necessary registration, licence or authorisation for that specific function.' },
  { title: '4. NPA Resolution and Settlement', body: 'Any loan restructuring, settlement, One-Time Settlement (OTS), or other resolution outcome discussed or facilitated by Veritaz is subject to the sole discretion and approval of the concerned lender, and to applicable regulatory guidelines. Veritaz does not guarantee restructuring approval, settlement acceptance, or any specific resolution outcome.' },
  { title: '5. Loan Collection and Recovery Services', body: 'Loan collection and recovery services are performed by Veritaz only under appropriate contractual engagement and/or authorisation from the appointing bank, NBFC or financial institution, and in accordance with applicable regulatory and lender-specific requirements. Veritaz does not guarantee recovery of any outstanding amount.' },
  { title: '6. Regulatory Status', body: 'Veritaz Consultancy Limited is a Public Limited Company incorporated in India. Veritaz does not claim to be, and does not represent itself as, a bank, Non-Banking Financial Company (NBFC), Asset Reconstruction Company (ARC), law firm, registered valuer, insolvency professional, or any other regulated entity or professional, unless such status is specifically confirmed in writing by Veritaz for a particular service. All services are provided subject to applicable laws, regulations and any professional or regulatory requirements relevant to the specific engagement, and reserved or licensed functions are coordinated through appropriately qualified and authorised third-party professionals.' },
  { title: '7. No Guarantee of Outcomes', body: "Veritaz does not guarantee, and makes no representation regarding, loan sanction, auction-property title or possession, property valuation accuracy, NPA settlement or restructuring approval, debt recovery, investment returns, or property price appreciation. All such outcomes depend on factors outside Veritaz's control, including the decisions of lenders, courts, authorities, qualified professionals and market conditions." },
  { title: '8. Independent Professional Advice', body: 'Clients, borrowers and institutions are encouraged to seek independent legal, financial and professional advice appropriate to their specific circumstances before making any property, financial or credit-related decision.' },
]
