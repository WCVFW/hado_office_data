import React, { useEffect, useRef, useState } from "react";

// ---------- Types ----------
interface MenuLink {
  label: string;
  href: string;
  isHeading?: boolean;
}

interface MenuSection {
  title: string;
  description?: string;
  mainHref: string;
  links?: MenuLink[];
  sections?: { heading: string; links: MenuLink[] }[];
}

// ---------- Data ----------
const MenuLink: MenuSection[] = [
  {
    title: "Inbound Call Center",
    mainHref: "/call-center/inbound-call-center-services/",
    description:
      "We offer specialized call center services. Get more information on our inbound call center services and sub-services.",
    links: [
      { label: "800 Answering Services", href: "/call-center/inbound/800-answering-services.asp" },
      { label: "Order Taking Services", href: "/call-center/inbound/order-taking-services.asp" },
      { label: "Rebate Processing Services", href: "/call-center/inbound/rebate-processing-services.asp" },
      { label: "Claims Processing Services", href: "/call-center/inbound/claims-processing-services.asp" },
      { label: "Product Information Request Services", href: "/call-center/inbound/product-information-request-services.asp" },
      { label: "Product Recall Management Services", href: "/call-center/inbound/product-recall-management-services.asp" },
      { label: "Interactive Voice Response (IVR) Services", href: "/call-center/inbound/interactive-voice-response.asp" },
      { label: "Billing Query Services", href: "/call-center/inbound/billing-query-services.asp" },
      { label: "Reservation Booking Services", href: "/call-center/inbound/reservation-booking-services.asp" },
      { label: "Omnichannel Contact Center Services", href: "/call-center/call-center-consulting/omnichannel-contact-center-services.asp" },
      { label: "Inbound Sales Services", href: "/call-center/inbound/inbound-sales-services.asp" },
      { label: "Sales Management Services", href: "/call-center/inbound/sales-management-services.asp" },
      { label: "Consumer Response Services", href: "/call-center/inbound/consumer-response-services.asp" },
      { label: "Hotline Services", href: "/call-center/inbound/hotline-services.asp" },
      { label: "Enquiry Handling Services", href: "/call-center/inbound/enquiry-handling-services.asp" },
    ],
  },
    {
    title: "Outbound Call Center",
    mainHref: "/call-center/outbound-call-center-services/",
    description:
      "We offer specialized call center services. Get more information on our outbound call center services and sub-services.",
    links: [
      { label: "Database Development and Management Services", href: "/call-center/outbound/database-development-management-services.asp" },
      { label: "Debt Collection Services", href: "/call-center/outbound/debt-collection-services.asp" },
      { label: "Call Center Disaster Recovery Services", href: "/call-center/outbound/disaster-recovery-services.asp" },
      { label: "Database Selling Services", href: "/callcenter/database-selling-services.asp" },
      { label: "Direct Mail Follow Up Services", href: "/call-center/outbound/direct-mail-follow-up-services.asp" },
      { label: "Customer Follow-Up Services", href: "/call-center/outbound/customer-follow-up-services.asp" },
      { label: "Market Intelligence Services", href: "/call-center/outbound/market-intelligence-services.asp" },
      { label: "Customer Satisfaction Survey Services", href: "/call-center/outbound/customer-satisfaction-survey-services.asp" },
      { label: "Customer Acquisition Services", href: "/call-center/outbound/customer-acquisition-services.asp" },
      { label: "CATI Services", href: "/call-center/outbound/cati-services.asp" },
      { label: "Subscription Renewal Services", href: "/call-center/outbound/subscription-renewal-services.asp" },
      { label: "Customer Loyalty Management Services", href: "/call-center/outbound/customer-loyalty-management-services.asp" },
      { label: "Email List Management Services", href: "/call-center/outbound/email-list-management-services.asp" },
      { label: "Customer Retention Services", href: "/call-center/outbound/customer-retention-services.asp" },
      { label: "Product Promotion Services", href: "/call-center/outbound/product-promotion-services.asp" },
      { label: "Upselling and Cross Selling Services", href: "/call-center/outbound/upselling-and-cross-selling-services.asp" },
    ],
  },
    {
    title: "Telemarketing",
    mainHref: "/call-center/telemarketing-services/",
    description:
      "We offer specialized call center services. Get more information on our telemarketing services and sub-services.",
    links: [
      { label: "Cold Calling Services", href: "/call-center/telemarketing/cold-calling-services.asp" },
      { label: "Real Estate Cold Calling Services", href: "/call-center/telemarketing/real-estate-cold-calling-services.asp" },
      { label: "B2B Cold Calling Services", href: "/call-center/telemarketing/b2b-cold-calling-services.asp" },
      { label: "B2C Cold Calling Services", href: "/call-center/telemarketing/b2c-cold-calling-services.asp" },
      { label: "Teleprospecting Services", href: "/call-center/telemarketing/teleprospecting-services.asp" },
      { label: "Cold Canvassing Services", href: "/call-center/telemarketing/cold-canvassing-services.asp" },
      { label: "B2B Telesales Services", href: "/call-center/telemarketing/b2b-telesales-services.asp" },
      { label: "Commercial Insurance Telemarketing Services", href: "/call-center/telemarketing/commercial-insurance-telemarketing-services.asp" },
      { label: "Telecommunication Consulting Services", href: "/call-center/telemarketing/telecommunication-consulting-services.asp" },
      { label: "B2B Telemarketing Services", href: "/callcenter/b2b-telemarketing-services.asp" },
      { label: "Insurance Telemarketing Services", href: "/call-center/telemarketing/insurance-telemarketing-services.asp" },
      { label: "Telesales Customer Acquisition Services", href: "/call-center/telemarketing/telesales-customer-acquisition-services.asp" },
    ],
  },
{
  title: "Lead Generation",
  mainHref: "/call-center/lead-generation-services/",
  description:
    "We offer specialized call center services. Get more information on our lead generation services and sub-services.",
  links: [
    { label: "Lead Generation for BFSI Industry", href: "/call-center/lead-generation/lead-generation-services-for-bfsi-industry.asp" },
    { label: "B2C Lead Generation Services", href: "/call-center/lead-generation/b2c-lead-generation-services.asp" },
    { label: "Telemarketing Lead Generation", href: "/call-center/lead-generation/telemarketing-lead-generation-services.asp" },
    { label: "Lead Generation for Travel and Hospitality Industry", href: "/call-center/lead-generation/lead-generation-for-the-travel-hospitality-industry.asp" },
    { label: "Lead Generation for the Logistics & Transportation Industry", href: "/call-center/lead-generation/lead-generation-for-logistics-transportation-industry.asp" },
    { label: "Local Lead Generation", href: "/call-center/lead-generation/local-lead-generation-services.asp" },
    { label: "B2B Lead Generation Services", href: "/call-center/lead-generation/b2b-lead-generation-services.asp" },
    { label: "Lead Generation Process", href: "/call-center/lead-generation/lead-generation-process.asp" },
    { label: "Lead Generation for IT Companies", href: "/call-center/lead-generation/lead-generation-for-it-companies.asp" },
    { label: "Lead Generation for Education Sector", href: "/call-center/lead-generation/education-sector-lead-generation-services.asp" },
    { label: "e-Commerce Lead Generation Services", href: "/call-center/lead-generation/ecommerce-lead-generation-services.asp" },
    { label: "Lead Generation for Small Business", href: "/call-center/lead-generation/lead-generation-for-small-business.asp" },
    { label: "Real Estate Lead Generation Services", href: "/call-center/lead-generation/real-estate-lead-generation-services.asp" },
    { label: "Mortgage Lead Generation", href: "/call-center/lead-generation/mortgage-lead-generation-services.asp" },
    { label: "Appointment Setting Services", href: "/call-center/lead-generation/appointment-setting-services.asp" },
    { label: "Outbound Lead Generation", href: "/call-center/lead-generation/outbound-lead-generation-services.asp" },
    { label: "B2B Appointment Setting Services", href: "/call-center/lead-generation/b2b-appointment-setting-services.asp" },
    { label: "B2C Appointment Setting Services", href: "/call-center/lead-generation/b2c-appointment-setting-services.asp" },
    { label: "Lead Generation for the Chemical and Manufacturing Industry", href: "/call-center/lead-generation/lead-generation-for-the-chemical-and-manufacturing-industry.asp" },
    { label: "Soft Lead Generation Services", href: "/call-center/lead-generation/soft-lead-generation-services.asp" },
    { label: "Lead Qualification Services", href: "/call-center/lead-generation/lead-qualification-services.asp" },
    { label: "Insurance Lead Generation", href: "/call-center/lead-generation/insurance-lead-generation-services.asp" },
    { label: "Home Insurance Lead Generation Services", href: "/call-center/lead-generation/home-insurance-lead-generation-services.asp" },
    { label: "Health Insurance Lead Generation Services", href: "/call-center/lead-generation/health-insurance-lead-generation-services.asp" },
    { label: "Trucking Insurance Lead Generation Services", href: "/call-center/lead-generation/trucking-insurance-lead-generation-services.asp" },
    { label: "Lead Generation For Insurance Agents", href: "/call-center/lead-generation/lead-generation-for-insurance-agents.asp" },
    { label: "Commercial Insurance Lead Generation Services", href: "/call-center/lead-generation/commercial-insurance-lead-generation-services.asp" },
    { label: "Pet Insurance Lead Generation Services", href: "/call-center/lead-generation/pet-insurance-lead-generation-services.asp" },
    { label: "Life Insurance Lead Generation Services", href: "/call-center/lead-generation/life-insurance-lead-generation-services.asp" },
    { label: "Auto Insurance Lead Generation Services", href: "/call-center/lead-generation/auto-insurance-lead-generation-services.asp" },
    { label: "Car Insurance Lead Generation Services", href: "/call-center/lead-generation/car-insurance-lead-generation-services.asp" },
  ],
},
{
  title: "Customer Support",
  mainHref: "/call-center/customer-support-services/",
  description:
    "We offer specialized call center services. Get more information on our Customer Support services and sub-services.",
  links: [
    { label: "Reactivating Dormant Client Services", href: "/call-center/customer-support/reactivating-dormant-client-services.asp" },
    { label: "Third-Party Verification Services", href: "/call-center/customer-support/third-party-verification-services.asp" },
    { label: "Click to Talk Support Services", href: "/call-center/customer-support/click-to-talk-support-services.asp" },
    { label: "Technical Support Call Center Services", href: "/call-center/customer-support/technical-support-call-center-services.asp" },
    { label: "Remote IT Support Services", href: "/call-center/customer-support/remote-it-support-services.asp" },
    { label: "Toll Free Customer Support", href: "/call-center/customer-support/toll-free-customer-support-services.asp" },
    { label: "Multilingual Call Center Services", href: "/call-center/customer-support/multilingual-call-center-services.asp" },
    { label: "Retail Customer Support Services", href: "/call-center/customer-support/retail-customer-support-services.asp" },
    { label: "Retail BPO Support Services", href: "/call-center/customer-support/retail-bpo-support-services.asp" },
    { label: "Order Tracking and Status Enquiry", href: "/call-center/customer-support/order-tracking-and-status-enquiry-services.asp" },
    { label: "Business Process Reengineering Services", href: "/call-center/customer-support/business-process-reengineering-services.asp" },
    { label: "Complaint Management Services", href: "/call-center/customer-support/complaint-management-services.asp" },
    { label: "Loyalty Program Management Services", href: "/call-center/customer-support/loyalty-program-management-services.asp" },
    { label: "Email Support Services", href: "/call-center/customer-support/email-support-services.asp" },
    { label: "Chat Support Services", href: "/call-center/customer-support/chat-support-services.asp" },
    { label: "Social Media Customer Service", href: "/call-center/customer-support/social-media-customer-services.asp" },
    { label: "Video Chat Customer Services", href: "/call-center/customer-support/video-chat-support-services.asp" },
    { label: "Multi-channel Support", href: "/call-center/customer-support/multi-channel-contact-center-services.asp" },
    { label: "Railway Logistics BPO Services", href: "/call-center/customer-support/railway-logistics-bpo-services.asp" },
    { label: "Customer Interaction Services", href: "/call-center/customer-support/customer-interaction-services.asp" },
    { label: "eCommerce Customer Support Services", href: "/call-center/customer-support/ecommerce-customer-support-services.asp" },
    { label: "Seminar Registration Services", href: "/call-center/customer-support/seminar-registration-services.asp" },
    { label: "Consumer Product Support", href: "/call-center/customer-support/consumer-product-support-services.asp" },
    { label: "Digital Agent Services", href: "/call-center/customer-support/digital-agent-services.asp" },
    { label: "Pre-sales Support Services", href: "/call-center/customer-support/pre-sales-support-services.asp" },
    { label: "Administrative Support Services", href: "/call-center/customer-support/administrative-support-services.asp" },
    { label: "Customer Service Representative (CSR) Services", href: "/call-center/customer-support/customer-service-representative-services.asp" },
    { label: "Digital Customer Support Services", href: "/call-center/customer-support/digital-customer-support-services.asp" },
    { label: "Customer Experience (CX) Transformation Services", href: "/call-center/customer-support/customer-experience-cx-transformation-services.asp" },
    { label: "Business Continuity Planning Services", href: "/call-center/customer-support/business-continuity-planning-services.asp" },
  ],
},

{
  title: "Virtual Assistant",
  mainHref: "/call-center/virtual-assistant-services/",
  description:
    "We offer specialized call center services. Get more information on our virtual assistant services and sub-services.",
  links: [
    { label: "Real Estate Virtual Assistant", href: "/call-center/virtual-assistant/real-estate-virtual-assistant-services.asp" },
    { label: "Call Answering", href: "/call-center/virtual-assistant/virtual-assistant-phone-answering-services.asp" },
    { label: "Accounting and Bookkeeping", href: "/call-center/virtual-assistant/virtual-assistants-for-accounting-and-bookkeeping-services.asp" },
    { label: "Appointment Scheduling", href: "/call-center/virtual-assistant/virtual-appointment-scheduling-assistant-services.asp" },
    { label: "Data Entry Services", href: "/call-center/virtual-assistant/data-entry-virtual-assistant-services.asp" },
    { label: "Internet Research", href: "/call-center/virtual-assistant/virtual-internet-research-assistant-services.asp" },
    { label: "Business Card Scanning", href: "/call-center/virtual-assistant/virtual-business-card-scanning-assistant-services.asp" },
    { label: "DTP", href: "/call-center/virtual-assistant/virtual-desktop-publishing-assistant-services.asp" },
    { label: "Travel Reservations", href: "/call-center/virtual-assistant/travel-planning-virtual-assistant-services.asp" },
    { label: "Correspondence Management", href: "/call-center/virtual-assistant/virtual-correspondence-management-assistant-services.asp" },
    { label: "Event Planning", href: "/call-center/virtual-assistant/virtual-event-planning-assistant-services.asp" },
    { label: "Supply Management Services", href: "/call-center/virtual-assistant/virtual-assistants-for-supply-management-services.asp" },
    { label: "Hire A Transaction Coordinator", href: "/call-center/virtual-assistant/transaction-coordinator-services.asp" },
    { label: "Virtual Receptionist Services", href: "/call-center/virtual-assistant/virtual-receptionist-services.asp" },
    { label: "Virtual Medical Assistant Services", href: "/call-center/virtual-assistant/virtual-medical-assistant-services.asp" },
    { label: "Virtual Assistant for Healthcare", href: "/call-center/virtual-assistant/virtual-assistant-for-healthcare.asp" },
    { label: "Virtual Assistant for Small Business", href: "/call-center/virtual-assistant/virtual-assistant-for-small-business.asp" },
  ],
},

{
  title: "Monitoring Support",
  mainHref: "/call-center/call-center-monitoring-services/",
  description:
    "We offer specialized call center services. Get more information on our call center monitoring services and sub-services.",
  links: [
    { label: "Audio Monitoring Services", href: "/call-center/call-center-monitoring/audio-monitoring-services.asp" },
    { label: "CCTV Monitoring Services", href: "/call-center/call-center-monitoring/cctv-monitoring-services.asp" },
    { label: "Call Quality Analytics Services", href: "/call-center/call-center-monitoring/call-quality-analytics-services.asp" },
    { label: "Call Quality Monitoring", href: "/call-center/call-center-monitoring/call-quality-monitoring-support.asp" },
    { label: "Video Monitoring Services", href: "/call-center/call-center-monitoring/video-monitoring-services.asp" },
    { label: "Text Monitoring Services", href: "/call-center/call-center-monitoring/text-monitoring-services.asp" },
    { label: "AI Monitoring Support", href: "/call-center/call-center-monitoring/ai-monitoring-support.asp" },
    { label: "Call Auditing Services", href: "/call-center/call-center-monitoring/call-auditing-services.asp" },
    { label: "Voice Broadcasting Services", href: "/call-center/call-center-monitoring/voice-broadcasting-services.asp" },
    { label: "Content Monitoring Support Services", href: "/call-center/call-center-monitoring/content-monitoring-support-services.asp" },
    { label: "Remote Video Monitoring Services", href: "/call-center/call-center-monitoring/remote-video-monitoring-services.asp" },
    { label: "Content Moderation Services", href: "/call-center/call-center-monitoring/content-moderation-services.asp" },
  ],
},
{
  title: "Answering Services",
  mainHref: "/call-center/answering-services/",
  description:
    "We offer specialized call center services. Get more information on our answering services and sub-services.",
  links: [
    { label: "Phone Answering Services", href: "/call-center/answering-service/phone-answering-services.asp" },
    { label: "Medical Answering Services", href: "/call-center/answering-service/medical-answering-services.asp" },
    { label: "Real Estate Call Answering Services", href: "/call-center/answering-service/real-estate-call-answering-services.asp" },
    { label: "After Hours Call Center Services", href: "/call-center/answering-service/after-hours-call-center-services.asp" },
  ],
},
{
  title: "Call Center Consulting",
  mainHref: "/call-center/call-center-consulting-services/",
  description:
    "We offer specialized call center services. Get more information on our call center consulting services and sub-services.",
  links: [
    { label: "Contact Center Services", href: "/call-center/call-center-consulting/contact-center-services.asp" },
    { label: "Cloud Contact Center", href: "/call-center/call-center-consulting/cloud-contact-center-services.asp" },
    { label: "BPaaS", href: "/call-center/call-center-consulting/business-process-as-a-service.asp" },
    { label: "Contact Center Modernization Services", href: "/call-center/call-center-consulting/contact-center-modernization-services.asp" },
    { label: "Contact Center Transformation Services", href: "/call-center/call-center-consulting/contact-center-transformation-services.asp" },
  ],
},
{
  "title": "Articles",
  "mainHref": "/why-outsource/articles/call-center-article.asp",
  "description": "Our call center resources are comprehensive, informative, and well-researched. Check out our call center articles and resources.",
  "sections": [
    {
      "heading": "Inbound Call Center Articles",
      "links": [
        {
          "label": "FAQs on Inbound Customer Services",
          "href": "/callcenter/articles/faqs-on-inbound-customer-services.asp"
        },
        {
          "label": "Call Center Services - FAQs",
          "href": "/call-center/articles/faqs-on-outsourcing-call-center-services.asp"
        },
        {
          "label": "Outsourcing Inbound Customer Services",
          "href": "/callcenter/articles/outsourcing-inbound-customer-support-to-o2i.asp"
        }
      ]
    },
    {
      "heading": "General Articles",
      "links": [
        {
          "label": "How Can Outsourcing Order Taking Increase Profit Margins?",
          "href": "/callcenter/articles/how-outsourcing-order-taking-can-increase-your-profit.asp"
        },
        {
          "label": "Shaping the Future of Call Centers - Efficient Workforce Management Strategies for 2024",
          "href": "/callcenter/articles/shaping-the-future-of-call-centers-efficient-workforce-management-strategies.asp"
        },
        {
          "label": "Keep Them Coming Back - Why Should Your Business Embrace 24/7 Customer Support?",
          "href": "/callcenter/articles/why-should-you-embrace-24-7-customer-support.asp"
        },
        {
          "label": "Strategies for Overcoming Call Center Challenges and Securing Success",
          "href": "/callcenter/articles/strategies-for-overcoming-call-center-challenges.asp"
        },
        {
          "label": "6 Key Call Center Trends Charting the Course of Customer Service",
          "href": "/callcenter/articles/6-call-center-trends-charting-the-course-of-customer-service.asp"
        },
        {
          "label": "Embracing Offshore Call Center Services: A Strategic Move in Global B2B Outsourcing",
          "href": "/callcenter/articles/embracing-offshore-call-center-services-for-strategic-business-growth.asp"
        },
        {
          "label": "10 Tips to Leverage Virtual Assistant Services in Keeping Your Business Ahead of the Curve",
          "href": "/callcenter/articles/10-tips-to-leverage-virtual-assistant-services.asp"
        },
        {
          "label": "The Impact of Customer Support Outsourcing on Customer Satisfaction",
          "href": "/callcenter/articles/the-impact-of-customer-support-outsourcing-on-customer-satisfaction.asp"
        },
        {
          "label": "Intelligent Contact Center - What is It",
          "href": "/callcenter/articles/what-intelligent-contact-center.asp"
        },
        {
          "label": "Post-Pandemic Challenges for Call Centers (And Their Solutions)",
          "href": "/callcenter/articles/post-pandemic-challenges-contact-centers-solutions.asp"
        },
        {
          "label": "Call Centers and Chatbots: Use Cases & Opportunities You Need to Know",
          "href": "/callcenter/articles/call-centers-chatbots-use-cases-opportunities.asp"
        },
        {
          "label": "How is AI Becoming Instrumental in Boosting Call Center Productivity",
          "href": "/callcenter/articles/how-ai-becoming-instrumental-boosting-call-center-productivity.asp"
        },
        {
          "label": "Unique Selling Proposition - Your Key to Successful Marketing",
          "href": "/callcenter/articles/unique-selling-proposition-your-key-to-successful-marketing.asp"
        },
        {
          "label": "IVR Set Up and Their Benefits",
          "href": "/callcenter/articles/ivr-setup-benefits.asp"
        },
        {
          "label": "Key Benefits of Outsourcing Call Center Services You Must Not Miss",
          "href": "/callcenter/articles/benefits-of-outsourcing-call-center-services-you-must-not-miss.asp"
        },
        {
          "label": "Top 8 Benefits of Ringless Voicemail for Businesses",
          "href": "/callcenter/articles/top-benefits-of-ringless-voicemail-for-businesses.asp"
        },
        {
          "label": "Top 10 Post-Covid Contact Center Trends & Insights in 2021",
          "href": "/callcenter/articles/top-post-covid-contact-center-trends-insights.asp"
        },
        {
          "label": "Top 8 Call Center Security Trends and Predictions for 2021",
          "href": "/callcenter/articles/call-center-security-trends-predictions.asp"
        },
        {
          "label": "10 Reasons Why All eCom Sites Should Have Live Chat Support",
          "href": "/callcenter/articles/10-reasons-why-ecom-sites-should-have-live-chat-support.asp"
        },
        
      ]
    }
  ]
}

    // ... add your other sections here (Business Research, Pharma, etc.)

];


// ---------- DropdownMenu Component (Desktop only) ----------
const DropdownMenu: React.FC<MenuSection> = ({ title, description, links, sections }) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [alignRight, setAlignRight] = useState(false);

  useEffect(() => {
    const handlePosition = () => {
      if (dropdownRef.current) {
        const rect = dropdownRef.current.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        setAlignRight(rect.right > viewportWidth);
      }
    };
    handlePosition();
    window.addEventListener("resize", handlePosition);
    return () => window.removeEventListener("resize", handlePosition);
  }, []);

  return (
    <li className="relative group">
      <button className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg text-left break-words">
        {title}
      </button>

      <div
        ref={dropdownRef}
        className={`absolute top-full mt-2 z-50 p-4
          opacity-0 scale-95 -translate-y-2
          group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0
          pointer-events-none group-hover:pointer-events-auto
          bg-white rounded-xl border border-gray-200 shadow-lg
          w-[90vw] sm:w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px]
          max-h-[500px] overflow-auto
          ${alignRight ? "right-0 origin-top-right" : "left-0 origin-top-left"}
          transition-all duration-300 ease-out
        `}
      >
        {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}

        {/* Render flat links if available */}
        {links && (
          <div className="grid grid-cols-2 gap-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="block px-3 py-2 rounded-md text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* Render sections with subheadings */}
        {sections &&
          sections.map((section, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-semibold text-gray-800 bg-blue-50 px-2 py-1 rounded-md">
                {section.heading}
              </h3>
              <div className="grid grid-cols-2 gap-2 mt-1">
                {section.links.map((link, li) => (
                  <a
                    key={li}
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-gray-700 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
      </div>
    </li>
  );
};

// ---------- Main Menu Component ----------
const CCmainmenu: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const toggleSection = (idx: number) => {
    setExpandedSections((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center justify-start flex-wrap gap-2">
            {MenuLink.map((section, idx) => (
              <DropdownMenu key={idx} {...section} />
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-all duration-300"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-2 bg-white rounded-xl shadow-lg">
            {MenuLink.map((section, idx) => {
              const isExpanded = expandedSections.includes(idx);
              return (
                <div key={idx} className="border-b last:border-b-0 mb-2">
                  <button
                    onClick={() => toggleSection(idx)}
                    className="w-full flex justify-between items-center px-3 py-2 text-left font-semibold text-gray-800 hover:text-green-600 transition-all duration-300 rounded-lg"
                  >
                    <span>{section.title}</span>
                    <span className="text-gray-500">{isExpanded ? "−" : "+"}</span>
                  </button>

                  {isExpanded && (
                    <div className="mt-1 pl-4">
                      {section.description && (
                        <p className="text-sm text-gray-600 mb-1">{section.description}</p>
                      )}

                      {/* Render flat links */}
                      {section.links && (
                        <div className="flex flex-col gap-1">
                          {section.links.map((link, linkIdx) => (
                            <a
                              key={linkIdx}
                              href={link.href}
                              className="text-sm text-gray-700 hover:text-green-600 hover:underline px-2 py-1 rounded-lg transition-all duration-200"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      )}

                      {/* Render sections with subheadings */}
                      {section.sections &&
                        section.sections.map((sub, subIdx) => (
                          <div key={subIdx} className="mt-2">
                            <h4 className="font-semibold text-gray-700 bg-blue-50 px-2 py-1 rounded-md">
                              {sub.heading}
                            </h4>
                            {sub.links.map((link, li) => (
                              <a
                                key={li}
                                href={link.href}
                                className="text-sm text-gray-700 hover:text-green-600 hover:underline px-2 py-1 rounded-lg transition-all duration-200 block"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default CCmainmenu;