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
    links: MenuLink[];
}

interface DropdownItem {
    label: string;
    href: string;
}

interface DropdownProps {
    title: string;
    heading?: string;
    headingHref: string;
    description?: string;              // optional
    descriptionLinkText?: string;      // optional
    descriptionHref?: string;          // optional
    items: DropdownItem[];
}



// ---------- Data ----------
// ---------- Data ----------
const MenuLink: MenuSection[] = [
{
  title: "Services for Insurance Agencies",
  description: "Explore a wide range of services designed to streamline operations and improve efficiency for insurance agencies.",
  mainHref: "/insurance/insurance-services-for-agencies.asp",
  links: [
    { label: "Insurance Eligibility Management Services", href: "/insurance/insurance-eligibility-management-services.asp" },
    { label: "Loss Run Processing Services", href: "/insurance/loss-run-processing-services.asp" },
    { label: "Insurance Quote Summary and Proposal", href: "/insurance/insurance-quote-summary-proposal.asp" },
    { label: "Document Imaging and Indexing Service", href: "/insurance/documentation-indexing-services.asp" },
    { label: "Insurance Accounting and Billing Services", href: "/insurance/insurance-accounting-services.asp" },
    { label: "Certificate Of Insurance (COI)", href: "/insurance/certificate-of-insurance-services.asp" },
    { label: "Insurance Policy Management / Policy Checking and Administration", href: "/insurance/policy-administration.asp" },
    { label: "Insurance Renewal Exposure Summary Services", href: "/insurance/insurance-renewal-exposure-summary-services.asp" },
    { label: "Claims Administration", href: "/insurance/insurance-claims-administration.asp" },
    { label: "Insurance Agency Management", href: "/insurance/insurance-agency-management-services.asp" },
    { label: "Insurance Bookkeeping and Forensic Accounting", href: "/insurance/insurance-bookkeeping-forensic-accounting-services.asp" },
    { label: "Public Policy Engagement Services", href: "/insurance/public-policy-engagement-services.asp" },
    { label: "Policy Owner Services", href: "/insurance/policy-owner-services.asp" },
    { label: "Insurance Credentialing Services", href: "/insurance/insurance-credentialing-services.asp" },
    { label: "Back-Office Automation for Insurance Companies", href: "/insurance/back-office-support-for-insurance-companies.asp" },
    { label: "Insurance Underwriting Services", href: "/insurance/insurance-underwriting-services.asp" },
  ],
},
{
  title: "Services for Insurance Carriers",
  description: "Comprehensive services tailored to meet the operational and administrative needs of insurance carriers.",
  mainHref: "/insurance/carriers.asp",
  links: [
    { label: "Loss Run Processing for Insurance Carriers", href: "/insurance/loss-run-processing-for-insurance-carriers.asp" },
    { label: "Insurance Billing & Accounts Receivable Services", href: "/insurance/billing-accounts-receivable-services.asp" },
    { label: "Policy Issuance Services", href: "/insurance/policy-issuance-services.asp" },
    { label: "Life/Annuity Insurance Claims Management", href: "/insurance/life-annuity-insurance-claims-management.asp" },
    { label: "Insurance Claims Management for Property and Casualty", href: "/insurance/insurance-claims-management-for-property-casualty.asp" },
    { label: "ACORD Forms Processing Services", href: "/insurance/acord-forms-processing-services.asp" },
    { label: "New Business Setup Services", href: "/insurance/new-business-setup-services.asp" },
    { label: "Insurance Renewals Processing", href: "/insurance/insurance-renewals-processing-services.asp" },
    { label: "Insurance Claims Management", href: "/insurance/insurance-claims-management-for-carriers.asp" },
    { label: "Policy Administration, Maintenance, & Servicing", href: "/insurance/policy-administration-maintenance-servicing.asp" },
  ],
},
{
  title: "Services for MGAs",
//   description: "Customized insurance services for Managing General Agents (MGAs) to streamline operations and improve efficiency.",
  mainHref: "/insurance/mga.asp",
  links: [],
},

{
  title: "Insurance Back Office Support",
  description: "Comprehensive back-office support services for insurance companies, including data entry, underwriting, claims management, and analytics.",
  mainHref: "/insurance/insurance-back-office-operations.asp",
  links: [
    { label: "CAQH Profile Services for Insurance Credentialing", href: "/insurance/caqh-profile-services-for-insurance-credentialing.asp" },
    { label: "Insurance Prospect and Market Research", href: "/insurance/insurance-prospect-market-research.asp" },
    { label: "Insurance Appointment Setting Services", href: "/insurance/insurance-appointment-setting-services.asp" },
    { label: "Insurance Commission Management", href: "/insurance/insurance-commission-management-services.asp" },
    { label: "Insurance Data Entry", href: "/insurance/insurance-data-services.asp" },
    { label: "Insurance Endorsements", href: "/insurance/insurance-endorsements.asp" },
    { label: "Insurance BPO Customer Support", href: "/insurance/insurance-bpo-customer-support-services.asp" },
    { label: "Insurance Reporting", href: "/insurance/insurance-reporting-services.asp" },
    { label: "Underwriting for Property and Casualty Insurance", href: "/insurance/underwriting-services-for-property-casualty-insurance.asp" },
    { label: "Life/Annuity Insurance Underwriting", href: "/insurance/life-annuity-insurance-underwriting-services.asp" },
    { label: "Catastrophe Modeling for Insurance", href: "/insurance/catastrophe-modeling-for-insurance.asp" },
    { label: "Warranty Claims Management", href: "/insurance/warranty-claims-management-services.asp" },
    { label: "Business Process Management (BPM) for Insurance", href: "/insurance/business-process-management-bpm-for-insurance.asp" },
    { label: "Insurance Software", href: "/insurance/insurance-software-development-services.asp" },
    { label: "Insurance Analytics Services", href: "/insurance/insurance-analytics-services.asp" },
    { label: "QQCatalyst Management Services", href: "/insurance/qqcatalyst-management-services.asp" },
    { label: "Insurance Operations Services", href: "/insurance/insurance-operations-services.asp" }
  ],
},
{
  title: "Articles",
  description: "Explore insightful articles on insurance outsourcing, claims management, and data analytics in the insurance industry.",
  mainHref: "/insurance/articles/",
  links: [
    { label: "Why Should You Nimble Insurance Services to a Professional Service Provider?", href: "/insurance/articles/why-Nimble-insurance-services-to-professional-service-provider.asp" },
    { label: "All You Need to Know About Insurance Claims", href: "/insurance/articles/all-you-need-to-know-about-insurance-claims.asp" },
    { label: "Top 6 Ways Data Analytics is Transforming the Insurance Industry", href: "/insurance/articles/6-ways-data-analytics-transforming-insurance-industry.asp" },
    { label: "All You Need to Know about E-filing of US DOT", href: "/insurance/articles/all-you-need-to-know-about-e-filing-of-us-dot.asp" }
  ],
},
{
  title: "Case Studies",
  description: "Explore our customer success stories showcasing customized insurance solutions and back-office support for clients worldwide.",
  mainHref: "/insurance/case-studies/",
  links: [
    { label: "Nimble Acuity’s Insurance Back-office Support Helped a Florida-based Insurance Giant Scale with Cost Efficiency", href: "/insurance/case-studies/back-office-support-to-florida-based-insurance-agency.asp" },
    { label: "Nimble Acuity Provided Back-office Support to a Texas-based Insurance Agency", href: "/insurance/case-studies/back-office-support-for-texas-client.asp" },
    { label: "Nimble Acuity Helped a Brokerage Consulting Firm With Policy Checking", href: "/insurance/case-studies/policy-checking-for-brokerage-consulting-firm.asp" },
    { label: "Nimble Acuity Provided Business Processing Services to an Insurance Firm", href: "/insurance/case-studies/business-processing-to-insurance-firm.asp" },
    { label: "Nimble Acuity Provided Policy Checking Services to a Leading Insurance Company", href: "/insurance/case-studies/policy-checking-services-to-insurance-company.asp" },
    { label: "Insurance Policy Checking Services for NY-based Insurance Service Provider", href: "/insurance/case-studies/policy-checking-new-york-client.asp" },
    { label: "Complete Insurance Back-Office Solutions for Renowned Health Insurance Company", href: "/insurance/case-studies/insurance-back-office-solutions-healthcare-provider.asp" },
    { label: "Streamlined Back-office Operations for Miami-based Client", href: "/insurance/case-studies/back-office-operations-miami-client.asp" },
    { label: "Maintenance of Insurance Accounts for US-based Insurance Agency", href: "/financial/case-studies/maintaining-insurance-accounts.asp" }
  ],
},


    // ... add your other sections here (Business Research, Pharma, etc.)

];

// ---------- DropdownMenu Component (Desktop only) ----------
const DropdownMenu: React.FC<MenuSection> = ({ title, mainHref, description, links }) => {
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
        className={`
          absolute top-full mt-2 z-50 p-4
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
      </div>
    </li>
  );
};

// ---------- Main Menu Component ----------
const Imainmenu: React.FC = () => {
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
              {MenuLink.map((section, idx) => {
    if (idx === 2) {
      // Direct link for index 2
      return (
        <li key={idx}>
          <a
            href={section.mainHref}
            className="px-5 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 rounded-lg text-left break-words"
          >
            {section.title}
          </a>
        </li>
      );
    }
    return <DropdownMenu key={idx} {...section} />;
  })}
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

  // If index 2, render a direct link
  if (idx === 2) {
    return (
      <a
        key={idx}
        href={section.mainHref}
        className="w-full block px-3 py-2 text-left font-semibold text-gray-800 hover:text-green-600 transition-all duration-300 rounded-lg border-b last:border-b-0 mb-2"
      >
        {section.title}
      </a>
    );
  }

  // Other sections with accordion
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


export default Imainmenu




