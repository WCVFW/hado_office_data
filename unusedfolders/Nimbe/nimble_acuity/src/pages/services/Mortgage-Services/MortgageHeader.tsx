import { useState } from "react";

interface DropdownLink {
  text: string;
  href: string;
}

interface DropdownMenu {
  subheading: string;
  subheadingHref: string;
  links: DropdownLink[];
}

interface MegaMenuItem {
  title: string;
  href: string;
  dropdown?: DropdownMenu;
}

const megaMenuData: MegaMenuItem[] = [
  {
    title: " Loan Processing Support",
    href: "/services/MortgageService/MortgageLoanProcessing",
    dropdown: {
      subheading: " Loan Processing Support Service",
      subheadingHref: "/services/MortgageService/MortgageLoanProcessing",
      links: [
        { text: "Jumbo Mortgage Loan Processing Support", href: "/services/MortgageService/MortgageLoanProcessing/JumboMortgageProcessing" },
        { text: "Robotic Process Automation", href: "/services/MortgageService/MortgageLoanProcessing/MortgageRPA" },
        { text: "No Money Down Mortgage Support", href: "/services/MortgageService/MortgageLoanProcessing/NoMoneyDownMortgage" },
        { text: "Mortgage Indexing and Data Extraction Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageIndexingAndExtraction" },
        { text: "Broker Price Opinion Support", href: "/services/MortgageService/MortgageLoanProcessing/BrokerPriceOpinion" },
        { text: "Document Recording Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageDocumentRecording" },
        { text: "Title Policy and Document Retrieval Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageTitlePolicy" },
        { text: "Pre-fund QC Audit Support", href: "/services/MortgageService/MortgageLoanProcessing/PreFundQCAudit" },
        { text: "Foreclosure Title and Resolution Support", href: "/services/MortgageService/MortgageLoanProcessing/ForeclosureTitleAndResolution" },
        { text: "Accounting and Bookkeeping Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageAccountingAndBookkeeping" },
        { text: "Lien Release Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageLienRelease" },
        { text: "Virtual Assistant Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageVirtualAssistant" },
        { text: "Processing Support For Credit Unions", href: "/services/MortgageService/MortgageLoanProcessing/MortgageCreditUnion" },
        { text: "User Experience Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageUXSupport" },
        { text: "Mortgage Audit Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageAudit" },
        { text: "USDA Mortgage Loan Support", href: "/services/MortgageService/MortgageLoanProcessing/USDAMortgageSupport" },
        { text: "Warehouse Line QC Audit Support", href: "/services/MortgageService/MortgageLoanProcessing/WarehouseQCAudit" },
        { text: "Mortgage Pre-processing Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgagePreprocessing" },
        { text: "Reverse Mortgage Services", href: "/services/MortgageService/MortgageLoanProcessing/ReverseMortgageSupport" },
        { text: "Loan Quality and Retention Support", href: "/services/MortgageService/MortgageLoanProcessing/MortgageQualityRetention" },
        { text: "Mortgage Dashboard Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageDashboardCreation" },
        { text: "VA Loan Support Services", href: "/services/MortgageService/MortgageLoanProcessing/VALoanSupport" },
        { text: "Assignment of Mortgage Support Services", href: "/services/MortgageService/MortgageLoanProcessing/AssignmentOfMortgage" },
        { text: "FHA Loan Support", href: "/services/MortgageService/MortgageLoanProcessing/FHALoanSupport" },
        { text: "Conventional Mortgage Loan Processing", href: "/services/MortgageService/MortgageLoanProcessing/ConventionalLoanProcessing" },
        { text: "Loan Boarding Support Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageLoanBoarding" },
        { text: "Loan Setup Support Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageLoanSetup" },
        { text: "Residential Mortgage Loan Support Services", href: "/services/MortgageService/MortgageLoanProcessing/ResidentialMortgageLoanSupport" },
        { text: "Whole Loan Purchase Review Support Services", href: "/services/MortgageService/MortgageLoanProcessing/WholeLoanPurchaseReview" },
        { text: "Conforming Mortgage Loan Support Services", href: "/services/MortgageService/MortgageLoanProcessing/ConformingMortgageLoanSupport" },
        { text: "Fixed Rate and Adjustable Rate Mortgage Loan Support", href: "/services/MortgageService/MortgageLoanProcessing/FixedAndAdjustableMortgageSupport" },
        { text: "MLO Client Support Services", href: "/services/MortgageService/MortgageLoanProcessing/MLOClientSupport" },
        { text: "Second Mortgage Loan Support", href: "/services/MortgageService/MortgageLoanProcessing/SecondMortgageSupport" },
        { text: "Renovation Loan Mortgage Support Services", href: "/services/MortgageService/MortgageLoanProcessing/RenovationMortgageSupport" },
        { text: "Mortgage Trailing Documents Support", href: "/services/MortgageService/MortgageLoanProcessing/TrailingDocumentsSupport" },
        { text: "Equipment Leasing  Services", href: "/services/MortgageService/MortgageLoanProcessing/EquipmentLeasingSupport" },
        { text: "Mortgage Default Management Support Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageDefaultSupport" },
        { text: "Compliance Support Services", href: "/services/MortgageService/MortgageLoanProcessing/MortgageComplianceSupport" },
      ],
    },
  },
  {
    title: "Underwriting Support",
    href: "/services/MortgageService/MortgageUnderwritingSupport",
    dropdown: {
      subheading: "Underwriting Support Services",
      subheadingHref: "/services/MortgageService/MortgageUnderwritingSupport",
      links: [
        { text: "Underwriting Support Services For Credit Unions", href: "/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingSupportCreditUnion" },
        { text: "Modification and Origination Underwriting Services", href: "/services/MortgageService/MortgageUnderwritingSupport/MortgageOriginationUnderwriting" },
        { text: "Borrower Solicitation Support Services", href: "/services/MortgageService/MortgageUnderwritingSupport/BorrowerSolicitationSupport" },
        { text: "Underwriting Assistance for Lenders", href: "/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingSupportLenders" },
        { text: "Loan Modification Assistance", href: "/services/MortgageService/MortgageUnderwritingSupport/MortgageLoanModificationAssistance" },
        { text: "Underwriting QC Support Services", href: "/services/MortgageService/MortgageUnderwritingSupport/MortgageUnderwritingQC" },
        { text: "Modification Underwriting Support", href: "/services/MortgageService/MortgageUnderwritingSupport/ModificationUnderwritingSupport" },
        { text: "Foreclosure Assistance Services", href: "/services/MortgageService/MortgageUnderwritingSupport/ForeclosureAssistanceServices" },
        { text: "Appraisal Underwriting Support Services", href: "/services/MortgageService/MortgageUnderwritingSupport/MortgageAppraisalUnderwriting" },
        { text: "Loss Mitigation Assistance Services", href: "/services/MortgageService/MortgageUnderwritingSupport/LossMitigationAssistance" },
        { text: "Short Sale Support Services", href: "/services/MortgageService/MortgageUnderwritingSupport/ShortSaleSupportServices" },
        { text: "Signing Support Services for Loss Mitigation", href: "/services/MortgageService/MortgageUnderwritingSupport/SigningSupportServices" },
      ],
    },
  },
  {
    title: "Closing Support",
    href: "/services/MortgageService/MortgageClosingSupportServices",
    dropdown: {
      subheading: "Mortgage Closing Services",
      subheadingHref: "/services/MortgageService/MortgageClosingSupportServices",
      links: [
        { text: "Mortgage Closing Support For Lenders", href: "/services/MortgageService/MortgageClosingSupportServices/MortgageLenderSupportServices" },
        { text: "Pre-post Closing Compliance Support Services", href: "/services/MortgageService/MortgageClosingSupportServices/PrePostClosingComplianceServices" },
        { text: "Post-close QC Audit Services", href: "/services/MortgageService/MortgageClosingSupportServices/PostCloseQCSupportServices" },
        { text: "Closing Support for Credit Unions", href: "/services/MortgageService/MortgageClosingSupportServices/MortgageCreditUnionSupport" },
        { text: "Closing Disclosure Preparation Support Services", href: "/services/MortgageService/MortgageClosingSupportServices/MortgageDisclosurePreparation" },
        { text: "Pre-Closing Support Services", href: "/services/MortgageService/MortgageClosingSupportServices/PreClosingQCSupportServices" },
        { text: "Mortgage Pre-Closing Support Services", href: "/services/MortgageService/MortgageClosingSupportServices/MortgagePreClosingSupportServices" },
        { text: "Mortgage Post Closing Services", href: "/services/MortgageService/MortgageClosingSupportServices/MortgagePostClosingSupportServices" },
        { text: "", href: "" },

      ],
    },
  },
  {
    title: "Title Support",
    href: "/services/MortgageService/MortgageTitleSupportServices",
    dropdown: {
      subheading: "Title Support Services",
      subheadingHref: "/services/MortgageService/MortgageTitleSupportServices",
      links: [
        { text: "Title Support Services for Companies", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageTitleSupportServicesCompanies" },
        { text: "Mortgage Title Commitment Preparation Support", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageTitleCommitmentPreparation" },
        { text: "Title Support Services for Lenders", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageTitleSupportForLenders" },
        { text: "Mortgage Title Insurance Processing", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageTitleInsuranceProcessing" },
        { text: "", href: "" },
      ],
    },
  },
  {
    title: "Appraisal Support",
    href: "/services/MortgageService/MortgageAppraisalSupport",
    dropdown: {
      subheading: "Appraisal Support Services",
      subheadingHref: "/services/MortgageService/MortgageAppraisalSupport",
      links: [
        { text: "Appraisal Support Services We offer to the Companies", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageAppraisalSupportForCompanies" },
        { text: "Real Estate Data Entry Services", href: "/services/MortgageService/MortgageTitleSupportServices/RealEstateAppraisalDataEntrySupport" },
        { text: "Appraisal Review Support Services", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageAppraisalReviewSupport" },
        { text: "Valuation Support Services", href: "/services/MortgageService/MortgageTitleSupportServices/MortgageValuationSupport" },
      ],
    },
  },
  {
    title: "Digital Marketing",
    href: "/services/MortgageService/DigitalMarketingServicesForMortgage",
    dropdown: {
      subheading: "Digital Marketing Services",
      subheadingHref: "/services/MortgageService/DigitalMarketingServicesForMortgage",
      links: [
        { text: "Marketing Services We Offer for Brokers", href: "/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForBrokers" },
        { text: "Digital Marketing Services for Mortgage Credit Unions", href: "/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForCreditUnions" },
        { text: "Marketing Services We Offer for Banks", href: "/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForBanks" },
        { text: "Marketing Services We Offer for Lenders", href: "/services/MortgageService/MortgageAppraisalSupport/DigitalMarketingServicesForLenders" }
      ],
    },
  },
  {
    title: "REO Support",
    href: "/services/MortgageService/REOSupport",
    dropdown: {
      subheading: "REO Support Services",
      subheadingHref: "/services/MortgageService/REOSupport",
      links: [
        { text: "REO Billing and Reimbursement ", href: "/services/MortgageService/REOSupport/REOReimbursementServices" },
        { text: "REO Listing Support Services", href: "/services/MortgageService/REOSupport/REOListingSupportServices" },
        { text: "Real Estate Title Support Services", href: "/services/MortgageService/REOSupport/RealEstateTitleSupport" },
        { text: "Lease Abstraction Support Services", href: "/services/MortgageService/REOSupport/LeaseAbstactionSupportServices" }
      ],
    },
  },
  {
    title: "Mortgage Loan",
    href: "/services/MortgageService/MortgageLoanServicing",
  },
]

const MortgageHeader = () => {
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
          {/* Logo or Home Link */}
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
          className={`fixed inset-0 bg-white z-50 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
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

            {/* Primary Mobile Menu Links */}
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
                          className={`w-5 h-5 transform transition-transform duration-300 ${
                            activeDropdown === item.title ? "rotate-180" : ""
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
                      {/* Mobile Dropdown Content */}
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

        {/* Desktop Navigation Centered */}
        <ul className="hidden md:flex space-x-6">
          {megaMenuData.map((item, index) => {
            const isLast = index === megaMenuData.length - 1;

            return (
              <li
                key={index}
                className="relative group px-1 py-1 cursor-pointer hover:text-[#006A7C] transition-colors duration-200"
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
                  ${
                    isLast
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



export default MortgageHeader;