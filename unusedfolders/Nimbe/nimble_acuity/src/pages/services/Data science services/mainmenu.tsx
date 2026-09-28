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
const MenuLink: MenuSection[] = [
    {
        title: "Data Engineering",
        description:
            "We develop specialized data engineering. Get more information on different technologies we develop using data science.",
        mainHref: "/data-science/data-engineering-services/",
        links: [
            { label: "Intelligent Process Automation", href: "/data-science/artificial-intelligence/intelligent-process-automation-services.asp" },
            { label: "Big Data Lakes Consulting", href: "/data-science/data-engineering/big-data-lake-consulting-services.asp" },
            { label: "Hadoop Development Services", href: "/data-science/data-engineering/hadoop-development-services.asp" },
            { label: "Enterprise Data Integration Services", href: "/data-science/enterprise-data-integration-services.asp" },
            { label: "Big Data Infrastructure Services", href: "/data-science/data-engineering/big-data-infrastructure-services.asp" },
        ],
    },
    {
        title: "Data Science",
        description:
            "We develop specialized data science. Get more information on different technologies we develop using data science.",
        mainHref: "/data-science/", // since your HTML heading had no direct href
        links: [
            { label: "Cloudera Support Services", href: "/data-science/cloudera-support-services.asp" },
            { label: "Data Science as a Service", href: "/data-science/data-science-as-a-service.asp" },
            { label: "Lead Scoring Services", href: "/data-science/lead-scoring-services.asp" },
            { label: "Route Optimization Services", href: "/data-science/route-optimization-services.asp" },
            { label: "Recommender System Development", href: "/data-science/recommender-system-development-services.asp" },
            { label: "Video Analytics Software Development", href: "/data-science/video-analytics-software-development-using-deep-learning.asp" },
            { label: "Offensive Image & Video Recognition Software", href: "/data-science/offensive-image-video-recognition-software-development-using-deep-learning.asp" },
            { label: "ETL Data Integration Services", href: "/data-science/etl-data-integration-services.asp" },
            { label: "Cloudera Data Science Workbench", href: "/data-science/cloudera-data-science-workbench-services.asp" },
            { label: "Big Data Management Services", href: "/data-science/big-data-management-services.asp" },
            { label: "Data Wrangling Services", href: "/data-science/data-wrangling-services.asp" },
            { label: "Data Analytics Application Development Services", href: "/data-science/data-analytics-application-development-services.asp" },
            { label: "Data Fabric Services", href: "/data-science/data-fabric-services.asp" },
            { label: "Data Stack Modernization", href: "/data-science/data-stack-modernization-services.asp" },
            { label: "Hyperautomation Services", href: "/data-science/hyperautomation-services.asp" },
            { label: "PyTorch Development Services", href: "/data-science/pytorch-development-services.asp" },
            { label: "Concurrent Audit Services", href: "/data-science/concurrent-audit-services.asp" },
            { label: "Blockchain Development Services", href: "/data-science/blockchain-development-services.asp" },
            { label: "Customer Intelligence Services", href: "/data-science/customer-intelligence-services.asp" },
            { label: "Customer Journey Mapping Services", href: "/data-science/customer-journey-mapping-services.asp" },
        ],
    },
    {
        title: "Data Science Consulting",
        description:
            "We develop specialized data science consulting. Get more information on different technologies we develop using data science.",
        mainHref: "/data-science/data-science-consulting-services.asp",
        links: [
            { label: "AI-driven Digital Transformation Services", href: "/data-science/ai-driven-digital-transformation-solutions.asp" },
            { label: "Location Intelligence Services", href: "/data-science/location-intelligence-services.asp" },
        ],
    },
    {
        title: "AI Solutions",
        description:
            "We develop specialized AI solutions. Get more information on different technologies we develop using data science.",
        mainHref: "/data-science/artificial-intelligence-services/",
        links: [
            { label: "Artificial Intelligence Services", href: "/data-science/artificial-intelligence-services/" },
            { label: "Automatic Classification of Documents", href: "/data-science/artificial-intelligence/automatic-document-classification-indexing-services.asp" },
            { label: "Cognitive Process Automation", href: "/data-science/artificial-intelligence/cognitive-process-automation-services.asp" },
            { label: "Robotic Process Automation Services", href: "/data-science/robotic-process-automation-services.asp" },
            { label: "Computer Vision Services", href: "/data-science/artificial-intelligence/computer-vision-services.asp" },
            { label: "Natural Language Processing Services", href: "/data-science/artificial-intelligence/natural-language-processing-services.asp" },
            { label: "Machine Learning Services", href: "/data-science/artificial-intelligence/machine-learning-services.asp" },
            { label: "Speech Recognition Services", href: "/data-science/artificial-intelligence/speech-recognition-services.asp" },
            { label: "Machine Vision Services", href: "/data-science/artificial-intelligence/machine-vision-services.asp" },
            { label: "Artificial Neural Networks Services", href: "/data-science/artificial-intelligence/artificial-neural-networks-services.asp" },
            { label: "Automated Visual Inspection Services", href: "/data-science/artificial-intelligence/automated-visual-inspection-services.asp" },
            { label: "Anomaly Detection Services", href: "/data-science/artificial-intelligence/anomaly-detection-services.asp" },
            { label: "Conversational AI Services", href: "/data-science/artificial-intelligence/conversational-ai-services.asp" },
            { label: "AI Consulting Services", href: "/data-science/artificial-intelligence/ai-consulting-services.asp" },
            { label: "Deep Learning Services", href: "/data-science/artificial-intelligence/deep-learning-services.asp" },
            { label: "Cognitive Computing Services", href: "/data-science/artificial-intelligence/cognitive-computing-services.asp" },
            { label: "Fraud Analytics Services", href: "/data-science/artificial-intelligence/fraud-analytics-services.asp" },
            { label: "AI Services in Healthcare", href: "/data-science/artificial-intelligence/ai-services-in-healthcare.asp" },
            { label: "AI in Supply Chain Services", href: "/data-science/ai-in-supply-chain.asp" },
            { label: "AI in Manufacturing Industry", href: "/data-science/artificial-intelligence/ai-in-manufacturing-industry.asp" },
        ],
    },
    {
        title: "Business Intelligence Services",
        // description: "",
        mainHref: "/data-science/business-intelligence-services/",
        links: [],
        // description: ""
    },
    {
        title: "Data Science Training",
        // description: "",
        mainHref: "/data-science/data-science-training-for-corporates.asp",
        links: [],
    },
    {
        title: "Data Analytics",
        description:
            "We offer specialized data entry services. Get more information on our data analytics services and sub-services.",
        mainHref: "/data-science/data-analytics-services/",
        links: [
            { label: "Big Data Analytics", href: "/data-science/data-analytics/big-data-analytics-services.asp" },
            { label: "Data Modeling Services", href: "/data-science/data-analytics/data-modeling-services.asp" },
            { label: "Data Intelligence Services", href: "/data-science/data-analytics/data-intelligence-services.asp" },
            { label: "Augmented Analytics Services", href: "/data-science/data-analytics/augmented-analytics-services.asp" },
            { label: "Statistical Data Analysis Services", href: "/data-science/data-analytics/statistical-data-analysis-services.asp" },
            { label: "Reverse E-mail Appending Services", href: "/data-science/data-analytics/reverse-email-appending-services.asp" },
            { label: "Edge Analytics Services", href: "/data-science/data-analytics/edge-analytics-services.asp" },
            { label: "Data Tabulation and Analysis Services", href: "/data-science/data-analytics/data-tabulation-and-analysis-services.asp" },
            { label: "Data Research Services", href: "/data-science/data-analytics/data-research-services.asp" },
            { label: "Predictive Modeling Services", href: "/data-science/data-analytics/predictive-modeling-services.asp" },
            { label: "Azure Stream Analytics Services", href: "/data-science/data-analytics/azure-stream-analytics-services.asp" },
        ],
    },
    {
        title: "Business Analytics",
        description:
            "We offer specialized research & analysis services. Get more information on our business analytics services and sub-services.",
        mainHref: "/data-science/business-analytics-services/",
        links: [
            { label: "Risk Analytics Services", href: "/data-science/business-analytics/risk-analytics-services.asp" },
            { label: "Visual Analytics", href: "/data-science/business-analytics/visual-analytics-services.asp" },
            { label: "Survey Analytics", href: "/data-science/business-analytics/survey-analytics-services.asp" },
            { label: "Contact Center Analytics", href: "/data-science/business-analytics/contact-center-analytics-services.asp" },
            { label: "Text Analytics", href: "/data-science/business-analytics/text-analytics-services.asp" },
            { label: "Financial Analytics", href: "/data-science/business-analytics/financial-analytics-services.asp" },
            { label: "Predictive Intelligence Analysis", href: "/data-science/business-analytics/predictive-analytics-services.asp" },
            { label: "Supply Chain Analytics", href: "/data-science/business-analytics/supply-chain-analytics-services.asp" },
            { label: "Collections Analytics", href: "/data-science/business-analytics/collection-analytics-services.asp" },
            { label: "Retail Analytics Services", href: "/data-science/business-analytics/retail-analytics-services.asp" },
            { label: "BPM Analytics Services", href: "/data-science/business-analytics/bpm-analytics-services.asp" },
            { label: "Operational Analytics Services", href: "/data-science/business-analytics/operational-analytics-services.asp" },
        ],
    },
    {
        title: "Articles",
        description:
            "Our data science related resources are comprehensive and well-researched. Check out our data science articles and resources.",
        mainHref: "/data-science/articles/",
        links: [
            // Sub-heading: Business Analytics Articles
            { label: "Business Analytics Articles", href: "" },
            {
                label: "Predictive Modeling Applications in Social Media",
                href: "/kpo/marketresearch/predictive-modeling-apps-in-social-media.asp",
            },

            // Sub-heading: General Articles
            { label: "General Articles", href: "" },
            {
                label:
                    "The Power of Data Lakes - Strategies, Solutions, and Best Practices for Enterprises",
                href: "/data-science/articles/data-lakes-strategies-for-enterprises.asp",
            },
            {
                label:
                    "Addressing Complex Data Issues - Advanced Strategies in Data Engineering",
                href: "/data-science/articles/advanced-strategies-in-data-engineering.asp",
            },
            {
                label: "5 Ways Data Engineering Maximizes Business Potential",
                href: "/data-science/articles/ways-data-engineering-maximizes-business-potential.asp",
            },
            {
                label:
                    "Top 10 Data Engineering Strategies That Will Transform Your Business",
                href: "/data-science/articles/data-engineering-strategies-for-business.asp",
            },
            {
                label: "Pros and Cons of Outsourcing Data Science Services",
                href: "/data-science/articles/pros-and-cons-outsourcing-data-science-services.asp",
            },
            {
                label: "Can AI Beat Doctors in Disease Identification?",
                href: "/data-science/articles/can-ai-beat-doctors-in-disease-identification.asp",
            },
            {
                label: "Introducing RPA and the Best RPA Chatbot Tools",
                href: "/data-science/articles/introducing-rpa-and-best-rpa-chatbot-tools.asp",
            },
            {
                label: "Predictive Analytics and Big Data - the Future of B2B Sales",
                href: "/data-science/articles/predictive-analytics-big-data-future-b2b-sales.asp",
            },
            {
                label:
                    "All You Need to Know About Convolutional Neural Networks - A Complete Guide",
                href: "/data-science/articles/all-you-need-know-about-conventional-neural-networks.asp",
            },
            {
                label: "Practical Approach to Blockchain Analytics and its Future",
                href: "/data-science/articles/practical-approach-blockchain-analytics-future.asp",
            },
            {
                label: "How Can AI Help in Reshaping Customer Experiences?",
                href: "/data-science/articles/how-ai-help-reshaping-customer-experiences.asp",
            },
            {
                label:
                    "AI for Businesses - The Ultimate Guide to Choosing the Right Artificial Intelligence Services",
                href: "/data-science/articles/selecting-the-right-ai-services-for-business.asp",
            },
        ],
    },
    {
        title: "Case Studies",
        description:
            "We provide reliable customized solutions to unique customer problems. Read our customer success stories to know more.",
        mainHref: "/data-science/case-studies/",
        links: [
            {
                label:
                    "Nimble Acuity Helped Streamline Inventory Management to an Electronics Firm",
                href: "/data-science/case-studies/helped-streamline-inventory-management-to-electronics-firm.asp",
            },
            {
                label:
                    "Nimble Acuity Helped a Healthcare Service Provider with Chart Extraction Services",
                href: "/data-science/case-studies/helped-healthcare-service-provider-with-chart-extraction.asp",
            },
            {
                label:
                    "Nimble Acuity Reduced Client Onboarding Time for a LA-based Bank",
                href: "/data-science/case-studies/reduced-client-onboarding-time-for-la-based-bank.asp",
            },
            {
                label:
                    "Nimble Acuity Provided Digital Transformation to an African Automotive Firm",
                href: "/data-science/case-studies/digital-transformation-to-african-automotive-firm.asp",
            },
            {
                label:
                    "Nimble Acuity Helped a Healthcare Company to Increase Their Service Portfolio",
                href: "/data-science/case-studies/helped-healthcare-company-to-increase-service-portfolio.asp",
            },
            {
                label:
                    "Nimble Acuity Designed a Plugin to Convert NoSQL to SQL for a US Restaurant Chain using Predictive Algorithm",
                href: "/data-science/case-studies/plugin-design-using-predictive-algorithm.asp",
            },
            {
                label: "Nimble Acuity Identified High Value Transaction Parties for a Bank",
                href: "/data-science/case-studies/high-value-transaction-parties-identification.asp",
            },
            {
                label: "Nimble Acuity Developed a Big Data Platform for Document Processing Automation",
                href: "/data-science/case-studies/document-processing-automation-platform-development.asp",
            },
            {
                label: "Nimble Acuity Architected an Open Source Analytics Workbench for a Bank",
                href: "/data-science/case-studies/open-source-analytics-workbench-for-bank.asp",
            },
            {
                label:
                    "Nimble Acuity Created a Data Storage and Processing Infrastructure for a Banking Group",
                href: "/data-science/case-studies/created-data-storage-processing-infrastructure.asp",
            },
            {
                label:
                    "Nimble Acuity helped a Mortgage Company in the US by Automating Loan Quality Investment (LQI) Process",
                href: "/data-science/case-studies/helped-us-mortgage-company-automating-lqi-process.asp",
            },
            {
                label:
                    "Nimble Acuity's Route Optimization Services Helped a Leading Dairy Supplier in the Middle East Streamline Their Product Delivery",
                href: "/data-science/case-studies/route-optimization-to-streamline-delivery.asp",
            },
            {
                label:
                    "Nimble Acuity Helped a Logistics and Security Services Company Dynamically Collect Telemetry Data from Vehicles",
                href: "/data-science/case-studies/dynamic-data-collection-for-logistics-firm.asp",
            },
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
const DSMainMenu: React.FC = () => {
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
    if (idx === 4 || idx === 5) {
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
  if (idx === 4 || idx === 5) {
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


export default DSMainMenu