import { useState } from "react";

interface MegaMenuLink {
  text: string;
  href: string;
}

interface MegaMenuDropdown {
  subheading: string;
  subheadingHref: string;
  links: MegaMenuLink[];
}

interface MegaMenuItem {
  title: string;
  href?: string;
  dropdown?: MegaMenuDropdown;
}

const megaMenuData: MegaMenuItem[] = [
  {
    title: "Bookkeeping Services",
    dropdown: {
      subheading: "Bookkeeping Services",
      subheadingHref: "/services/finance-accounting-finops/Bookkeeping-Services/",
      links: [
        { text: "Real Estate Bookkeeping", href: "/services/finance-accounting-finops/Bookkeeping-Services/Real-EstateBookkeeping-Services" },
        { text: "Accounting Setup Services", href: "/services/finance-accounting-finops/Bookkeeping-Services/Accounting-Setup-Services" },
        { text: "Bookkeeping Services for CPA Firms", href: "/services/finance-accounting-finops/Bookkeeping-Services/CPA-Bookkeeping-Services" },
        { text: "Bookkeeping Services for Small Businesses", href: "/services/finance-accounting-finops/Bookkeeping-Services/SmallBusiness-Bookkeeping" },
        { text: "QuickBooks Bookkeeping Services", href: "/services/finance-accounting-finops/Bookkeeping-Services/QuickBooks-Bookkeeping" },
        { text: "Virtual Bookkeeping Services", href: "/services/finance-accounting-finops/Bookkeeping-Services/Virtual-Bookkeeping" },
      ],
    },
  },
  {
    title: "Accounting Services",
    dropdown: {
      subheading: "Accounting Services",
      subheadingHref: "/services/finance-accounting-finops/accounting-service/Accounting-Services",
      links: [
        { text: "Valuation Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Valuation-Advisory-service" },
        { text: "Cost Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Cost-Accounting-service" },
        { text: "Accounting Automation Services", href: "/services/finance-accounting-finops/accounting-service/Accounting-Automation-services" },
        { text: "Real Estate Accounting Services", href: "/services/finance-accounting-finops/accounting-service/RealEstate-Accounting-services" },
        { text: "Wealth Management Services", href: "/services/finance-accounting-finops/accounting-service/Wealth-Management-service" },
        { text: "Financial Accounting Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Accounting-Advisory-sesrvice" },
        { text: "Ledger Management Services", href: "/services/finance-accounting-finops/accounting-service/Ledger-Management-Services" },
        { text: "General Accounting Services", href: "/services/finance-accounting-finops/accounting-service/General-Accounting-Services" },
        { text: "ESG Consulting Services", href: "/services/finance-accounting-finops/accounting-service/ESG-Consulting-Services" },
        { text: "Corporate Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Corporate-Accounting-Services" },
        { text: "Fixed Asset Management Services", href: "/services/finance-accounting-finops/accounting-service/Fixed-Asset-Management-Services" },
        { text: "Management Avisory Services", href: "/services/finance-accounting-finops/accounting-service/Management-Advisory-Services" },
        { text: "Management Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Management-Accounting-Services" },
        { text: "Construction Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Construction-Accounting-Services" },
        { text: "Fixed Asset Auditing Services", href: "/services/finance-accounting-finops/accounting-service/Fixed-Asset-Auditing-Services" },
        { text: "Internal Audit Services", href: "/services/finance-accounting-finops/accounting-service/Internal-Audit-Services" },
        { text: "Portfolio Investor Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Portfolio-Investor-Accounting-service" },
        { text: "Post-Merger Integration Services", href: "/services/finance-accounting-finops/accounting-service/PostMerger-Integration-service" },
        { text: "Compliance Audit Services", href: "/services/finance-accounting-finops/accounting-service/Compliance-Audit-service" },
        { text: "Fixed Asset Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Fixed-Asset-Accounting-service" },
        { text: "Accounting Services for Startups", href: "/services/finance-accounting-finops/accounting-service/Startup-Accounting-service" },
        { text: "Cloud Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Cloud-Accounting-Services" },
        { text: "Cleanup And Historic Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Accounting-Cleanup-Services" },
        { text: "Model Risk Management Services", href: "/services/finance-accounting-finops/accounting-service/ModelRiskManagementServices" },
        { text: "Auditing Services", href: "/services/finance-accounting-finops/accounting-service/Audit-Support-Services" },
        { text: "CFO Services", href: "/services/finance-accounting-finops/accounting-service/CFO-Services" },
        { text: "Fiduciary Services", href: "/services/finance-accounting-finops/accounting-service/Fiduciary-Services" },
        { text: "Finance Transformation Services", href: "/services/finance-accounting-finops/accounting-service/Finance-Transformation-Services" },
        { text: "Record to Report Services", href: "/services/finance-accounting-finops/accounting-service/RecordToReport-Services" },
        { text: "Business Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Business-Advisory-Services" },
        { text: "Forensic Audit Services", href: "/services/finance-accounting-finops/accounting-service/Forensic-Audit-Services" },
        { text: "Order Management Services", href: "/services/finance-accounting-finops/accounting-service/Order-Management-Services" },
        { text: "Accounting Services For Dental Practices", href: "/services/finance-accounting-finops/accounting-service/Dental-Accounting-Services" },
        { text: "Write-up Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Writeup-Services" },
        { text: "SMSF Accounting Services", href: "/services/finance-accounting-finops/accounting-service/SMSF-Accounting-Services" },
        { text: "Retail Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Retail-Accounting-Services" },
        { text: "Financial Reporting", href: "/services/finance-accounting-finops/accounting-service/Financial-Reporting-Services" },
        { text: "Small Business Accounting Services", href: "/services/finance-accounting-finops/accounting-service/SmallBusiness-Accounting-Services" },
        { text: "Forensic Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Forensic-Accounting-Services" },
        { text: "Accounts Reconciliation Services", href: "/services/finance-accounting-finops/accounting-service/Accounts-Reconciliation-Services" },
        { text: "Financial Budgeting Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Budgeting-Services" },
        { text: "Automotive Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Automotive-Accounting-Services" },
        { text: "Bank & Credit Reconciliation Services", href: "/services/finance-accounting-finops/accounting-service/BankCredit-Reconciliation-service" },
        { text: "Cash Flow Forecasting Services", href: "/services/finance-accounting-finops/accounting-service/CashFlow-Forecasting-services" },
        { text: "Restaurant Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Restaurant-Accounting-services" },
        { text: "Cash Flow Management Services", href: "/services/finance-accounting-finops/accounting-service/CashFlow-Management-services" },
        { text: "Financial Controller Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Controller-services" },
        { text: "Electrical Contractors Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Electrical-Contractors-Accounting-services" },
        { text: "Financial Statement Preparation Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Statements-Services" },
        { text: "SPAC Transaction Services", href: "/services/finance-accounting-finops/accounting-service/Spac-Transaction-Services" },
        { text: "Financial Investigations Services", href: "/services/finance-accounting-finops/accounting-service/Financial-Investigations-Services" },
        { text: "Customer Order Processing Services", href: "/services/finance-accounting-finops/accounting-service/Order-Processing-Services" },
        { text: "XBRL Filing Services", href: "/services/finance-accounting-finops/accounting-service/XBRL-Filing-Services" },
        { text: "Business Recovery Services", href: "/services/finance-accounting-finops/accounting-service/Business-Recovery-Services" },
        { text: "Manual Journal Entry Services", href: "/services/finance-accounting-finops/accounting-service/ManualJournalEntry-Services" },
        { text: "Corporate Secretarial Services", href: "/services/finance-accounting-finops/accounting-service/Corporate-Secretarial-Services" },
        { text: "Transaction Advisory Services", href: "/services/finance-accounting-finops/accounting-service/Transaction-Advisory-Services" },
        { text: "Invoice Processing Services", href: "/services/finance-accounting-finops/accounting-service/Invoice-Processing-Services" },
        { text: "Real Estate Financial Statement Reporting Services", href: "/services/finance-accounting-finops/accounting-service/RealEstate-Financial-Reporting-services" },
        { text: "Trucking Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Trucking-Accounting-Services" },
        { text: "Virtual Accountant Services", href: "/services/finance-accounting-finops/accounting-service/Virtual-Accounting-Services" },
        { text: "Xero Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Xero-Accounting-Services" },
        { text: "Global Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Global-Accounting-Services" },
        { text: "Spend Analysis Services", href: "/services/finance-accounting-finops/accounting-service/SpendAnalysis-Services" },
        { text: "General Ledger Accounting Services", href: "/services/finance-accounting-finops/accounting-service/GeneralLedger-Accounting-Services" },
        { text: "Excel Accounting Services", href: "/services/finance-accounting-finops/accounting-service/Excel-Accounting-Services" },
        { text: "Financial Analysis for Banking Industry", href: "/services/finance-accounting-finops/accounting-service/Banking-Financial-Analysis-Services" },
        { text: "LIBOR Transition Services", href: "/services/finance-accounting-finops/accounting-service/LIBORTransition-Services" },
        { text: "Year-end Accounting Services", href: "/services/finance-accounting-finops/accounting-service/YearEnd-Accounting-Services" },
        { text: "Invoice Factoring Services", href: "/services/finance-accounting-finops/accounting-service/Invoice-Factoring-Services" },
        { text: "Fixed Asset Reconciliation Services", href: "/services/finance-accounting-finops/accounting-service/FixedAsset-Reconciliation-Services" },
        { text: "Cloud Financial Management Services", href: "/services/finance-accounting-finops/accounting-service/Cloud-Financial-Management-Services" },
        { text: "Virtual CFO Services", href: "/services/finance-accounting-finops/accounting-service/VirtualCFO-Services" },
        { text: "BAS Services", href: "/services/finance-accounting-finops/accounting-service/BAS-Services" },
        { text: "Fractional CFO Services", href: "/services/finance-accounting-finops/accounting-service/FractionalCFO-Services" },
        { text: "QuickBooks Clean Up Services", href: "/services/finance-accounting-finops/accounting-service/QuickBooks-CleanUp-Services" },
        { text: "Transaction Support Services", href: "/services/finance-accounting-finops/accounting-service/Transaction-Support-Services" },
      ],
    },
  },

  {
    title: "Accounts Payable",
    href: "/services/finance-accounting-finops/Accounts-Payable/Accounts-Payable-Services",
  },
  {
    title: "Accounts Receivable",
    dropdown: {
      subheading: "Accounts Receivable",
      subheadingHref: "/services/finance-accounting-finops/Accounts-Receivable-Services",
      links: [
        { text: "Real Estate Accounts Receivable", href: "/services/finance-accounting-finops/Accounts-Receivable-Services/RealEstate-Accounts-Receivable" },
        { text: "Accounts Receivable Factoring Services", href: "/services/finance-accounting-finops/Accounts-Receivable-Services/Accounts-Receivable-Factoring" },
        { text: "AR Aging Report Creation Services", href: "/services/finance-accounting-finops/Accounts-Receivable-Services/ARAging-Reports-Services" },
      ],
    },
  },
  {
    title: "Tax Preparation",
    dropdown: {
      subheading: "Tax Preparation",
      subheadingHref: "/services/finance-accounting-finops/Tax-Preparation-Services",
      links: [
        { text: "Tax and Regulatory Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/TaxRegulatory-Services" },
        { text: "Tax Processing Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/TaxProcessing-Services" },
        { text: "Tax Consulting Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/TaxConsulting-Services" },
        { text: "Pro Series Tax Processing Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/ProSeriesTax-Processing-Services" },
        { text: "Sales Tax Return Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/SalesTax-Services" },
        { text: "Business Tax Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/BusinessTax-Services" },
        { text: "H&R Block Tax Cut Processing Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/HRBlockTaxCut-Processing-service" },
        { text: "Federal Tax Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/FederalTax-Services" },
        { text: "Vat Return Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/VATReturn-Services" },
        { text: "Virtual Tax Preparation Services", href: "/services/finance-accounting-finops/Tax-Preparation-Services/VirtualTax-Preparation-Services" },
      ],
    },
  },
  {
    title: "CPA services",
    dropdown: {
      subheading: "CPA services",
      subheadingHref: "/services/finance-accounting-finops/CPA-Service",
      links: [
        { text: "Small Business CPA Solutions", href: "/services/finance-accounting-finops/CPA-Service/SmallBusiness-CPA-service" },
        { text: "CPA Tax Services", href: "/services/finance-accounting-finops/CPA-Service/CPATax-Services" },
        { text: "CPA Payroll Services", href: "/services/finance-accounting-finops/CPA-Service/CPA-Payroll-Services" },
        { text: "CPA Accounting Services", href: "/services/finance-accounting-finops/CPA-Service/CPA-Accounting-Services" },
      ],
    },
  },
  {
    title: "Financial Analysis",
    dropdown: {
      subheading: "Financial Analysis",
      subheadingHref: "/services/finance-accounting-finops/Financial-Analysis-Services",
      links: [
        { text: "Due Diligence Services ", href: "/services/finance-accounting-finops/Financial-Analysis-Services/DueDiligence-Services" },
        { text: "Portfolio Analysis Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/Portfolio-Analysis-Services" },
        { text: "Financial Statement Audit Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/FinancialStatement-Audit-Services" },
        { text: "Treasury Management Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/Treasury-Management-Services" },
        { text: "Regulatory Compliance Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/Regulatory-Compliance-Services" },
        { text: "Enterprise Performance Management Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/Enterprise-Performance-Management" },
        { text: "Investment Analysis Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/Investment-Analysis-Services" },
        { text: "Business Forecasting Services ", href: "/services/finance-accounting-finops/Financial-Analysis-Services/BusinessForecasting-Services" },
        { text: "Financial Budgeting Services", href: "/services/finance-accounting-finops/Financial-Analysis-Services/BudgetingForecasting-Services" },
      ],
    },
  },
  {
    title: "Payroll Services",
    dropdown: {
      subheading: "Payroll Services",
      subheadingHref: "/services/finance-accounting-finops/Payroll-Processing-Services",
      links: [
        { text: "Payroll Compliance Services", href: "/services/finance-accounting-finops/Payroll-Processing-Services/Payroll0Compliance-Services" },
        { text: "Payroll Data Analytics Services", href: "/services/finance-accounting-finops/Payroll-Processing-Services/Payroll-Data-Analytics-Services" },
        { text: "Payroll Administration Services", href: "/services/finance-accounting-finops/Payroll-Processing-Services/Payroll-Administration-Services" },
      ],
    },
  },
];



const AccountsHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMobileDropdownToggle = (item) => {
    setActiveDropdown(activeDropdown === item.title ? null : item.title);
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-20 px-4 md:px-6 py-4">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        {/* Mobile Navigation */}
        <div className="flex items-center w-full justify-between md:hidden">
          {/* Logo */}
          <div className="font-bold text-xl text-[#006A7C]"></div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // close icon
                    : "M4 6h16M4 12h16m-7 6h7" // hamburger
                }
              />
            </svg>
          </button>
        </div>

        {/* Full-screen Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-50 transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 md:hidden overflow-y-auto`}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-xl text-[#006A7C]">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Links */}
            <ul className="space-y-4">
              {megaMenuData.map((item, index) => (
                <li key={index}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleMobileDropdownToggle(item)}
                        className="flex justify-between items-center w-full text-left font-medium text-lg text-black hover:text-[#006A7C] transition-colors"
                      >
                        <span>{item.title}</span>
                        <svg
                          className={`w-5 h-5 transform transition-transform duration-300 ${activeDropdown === item.title ? "rotate-180" : ""
                            }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {/* Dropdown content */}
                      {activeDropdown === item.title && (
                        <div className="mt-4 pl-4 border-l-2 border-gray-200">
                          <h4 className="font-bold text-[#006A7C] text-md mb-2">
                            <a href={item.dropdown.subheadingHref}>
                              {item.dropdown.subheading}
                            </a>
                          </h4>
                          <ul className="space-y-2">
                            {item.dropdown.links.map((link, linkIndex) => (
                              <li key={linkIndex}>
                                <a
                                  href={link.href}
                                  className="block text-gray-700 hover:text-[#006A7C] transition-colors"
                                >
                                  {link.text}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-lg font-medium text-black hover:text-[#006A7C] transition-colors"
                    >
                      {item.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Navigation with Mega Menu (unchanged) */}
        <ul className="hidden md:flex space-x-4">
          {megaMenuData.map((item, index) => {
            const isLast = index === megaMenuData.length - 1;

            return (
              <li
                key={index}
                className="relative group px-1 py-1 -ml-10 cursor-pointer hover:text-[#006A7C] transition-colors duration-200"
              >
                <a
                  href={item.href}
                  className="font-medium text-black text-sm whitespace-nowrap"
                >
                  {item.title}
                </a>

                {item.dropdown && (
                  <div
                    className={`absolute top-full mt-4 min-w-[22rem] max-w-[40rem] bg-white border border-gray-200 rounded-lg shadow-xl z-50 transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    ${isLast
                        ? "right-0"
                        : index === 0
                          ? "left-2"
                          : "left-1/3 -translate-x-1/3"
                      }`}
                  >
                    {/* Subheading */}
                    <div className="px-6 py-3 border-b border-gray-100">
                      <h4 className="font-bold text-[#006A7C] text-lg">
                        <a href={item.dropdown.subheadingHref}>
                          {item.dropdown.subheading}
                        </a>
                      </h4>
                    </div>

                    {/* Scrollable Links */}
                    <div className="max-h-[400px] overflow-y-auto p-6">
                      <ul className="grid grid-cols-2 gap-3">
                        {item.dropdown.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <a
                              href={link.href}
                              className="block text-sm text-gray-800 px-2 py-1 rounded-md hover:bg-[#006A7C] hover:text-white transition"
                            >
                              {link.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default AccountsHeader;