import React, { useEffect, useRef, useState } from "react";
import { ShieldCheckIcon } from "@heroicons/react/24/solid";


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
  title: "Data Entry",
  description: "We offer specialized data entry services. Get more information on our data entry services and sub-services.",
  mainHref: "/data-support/data-entry-services/",
  links: [
    { label: "Data Annotation Services", href: "/data-support/data-entry/data-annotation-services.asp" },
    { label: "Digital Asset Management Services", href: "/data-support/data-entry/digital-asset-management-services.asp" },
    { label: "Real Estate Data Management Services", href: "/data-support/data-entry/real-estate-data-management-services.asp" },
    { label: "Email Appending Services", href: "/data-support/data-entry/email-appending-services.asp" },
    { label: "Online Data Entry Services", href: "/data-support/data-entry/online-data-entry-services.asp" },
    { label: "Offline Data Entry Services", href: "/data-support/data-entry/offline-data-entry-services.asp" },
    { label: "Directory Services", href: "/data-support/data-entry/directory-services.asp" },
    { label: "Real Estate Appraisals Data Entry", href: "/data-support/data-entry/real-estate-appraisal-data-entry-services.asp" },
    { label: "Geotagging Data Entry Services", href: "/data-support/data-entry/geotagging-data-entry-services.asp" },
    { label: "Data Entry for Business Cards", href: "/data-support/data-entry/business-card-data-entry-services.asp" },
    { label: "Food Nutrition Scale Data Entry Services", href: "/data-support/data-entry/food-nutrition-scale-data-entry-services.asp" },
    { label: "Image Data Entry Services", href: "/data-support/data-entry/image-data-entry-services.asp" },
    { label: "Ebook Data Entry Services", href: "/data-support/data-entry/ebooks-data-entry-services.asp" },
    { label: "Document Data Entry Services", href: "/data-support/data-entry/document-data-entry-services.asp" },
    { label: "Data Capture Services", href: "/data-support/data-entry/document-imaging-services.asp" },
    { label: "Data Extraction Services", href: "/data-support/data-entry/data-extraction-services.asp" },
    { label: "Document Management Systems", href: "/data-support/data-entry/document-management-services.asp" },
    { label: "Data Entry From Dictionaries & Manuals", href: "/data-support/data-entry/data-entry-from-dictionaries-manuals-encyclopedias.asp" },
    { label: "Copy Paste Services", href: "/data-support/data-entry/copy-paste-services.asp" },
    { label: "Offshore Data Entry Services", href: "/data-support/data-entry/offshore-data-entry-services.asp" },
    { label: "Catalog Data Entry Services", href: "/data-support/data-entry/catalog-data-entry-services.asp" },
    { label: "Data Entry Mailing List Services", href: "/data-support/data-entry/mailing-list-data-entry-services.asp" },
    { label: "Company Reports Data Entry Services", href: "/data-support/data-entry/company-reports-data-entry-services.asp" },
    { label: "Questionnaire Data Entry Services", href: "/data-support/data-entry/questionnaires-dataentry-services.asp" },
    { label: "Data Entry of Business Surveys", href: "/data-support/data-entry/data-entry-surveys.asp" },
    { label: "Invoice Forms Data Entry", href: "/data-support/data-entry/invoice-forms-data-entry-services.asp" },
    { label: "Internet Data Input Services", href: "/data-support/data-entry/internet-data-input-services.asp" },
    { label: "Database Data Entry Services", href: "/data-support/data-entry/database-entry-services.asp" },
    { label: "Data Entry for Restaurant Menu Digitization", href: "/data-support/data-entry/restaurant-menu-data-entry-services.asp" },
    { label: "Product Registration Data Entry", href: "/data-support/data-entry/product-registration-data-entry-services.asp" },
    { label: "Insurance Claims Data Entry", href: "/data-support/data-entry/insurance-claims-data-entry-services.asp" },
    { label: "Enrollment Forms Data Entry Services", href: "/data-support/data-entry/enrolment-forms-data-entry-services.asp" },
    { label: "Text & Numeric Data Entry", href: "/data-support/data-entry/text-numeric-data-entry-services.asp" },
    { label: "Classifieds Data Entry Services", href: "/data-support/data-entry/classifieds-data-entry-services.asp" },
    { label: "Legal Documents Data Entry", href: "/data-support/data-entry/legal-documents-data-entry-services.asp" },
    { label: "Data Entry of Printed/Handwritten Documents", href: "/data-support/data-entry/printed-handwritten-documents-data-entry-services.asp" },
    { label: "MySQL Database Data Entry Services", href: "/data-support/data-entry/mysql-database-data-entry-services.asp" },
    { label: "Data Entry From Telephone Directories", href: "/data-support/data-entry/telephone-directory-data-entry-services.asp" },
    { label: "Website Data Entry Services", href: "/data-support/data-entry/website-data-entry-services.asp" },
    { label: "Translingual Data Entry Services", href: "/data-support/data-entry/translingual-data-entry-services.asp" },
    { label: "Multilingual Invoice Data Entry", href: "/data-support/data-entry/multilingual-invoice-data-entry-services.asp" },
    { label: "Biological Species Database Creation", href: "/data-support/data-entry/biological-species-database-creation-services.asp" },
    { label: "QuickBooks Data Entry Services", href: "/data-support/data-entry/quickbooks-data-entry-services.asp" },
    { label: "CRM Data Entry Services", href: "/data-support/data-entry/crm-data-entry-services.asp" },
    { label: "Digital Transaction Processing Services", href: "/data-support/data-entry/digital-transaction-processing-services.asp" },
    { label: "Survey Forms Processing Services", href: "/data-support/data-entry/survey-forms-processing-services.asp" },
    { label: "CRM Database Management Services", href: "/data-support/data-entry/crm-database-management-services.asp" },
    { label: "ERP Data Entry Services", href: "/data-support/data-entry/erp-data-entry-services.asp" },
    { label: "SKU Data Entry Services", href: "/data-support/data-entry/sku-data-entry-services.asp" },
    { label: "Data Licensing Services", href: "/data-support/data-entry/data-licensing-services.asp" },
    { label: "Healthcare Data Mining Services", href: "/data-support/data-entry/healthcare-data-mining-services.asp" },
    { label: "Remote Data Entry Services", href: "/data-support/data-entry/remote-data-entry-services.asp" },
    { label: "Address Management Services", href: "/data-support/data-entry/address-management-services.asp" },
    { label: "CRM Data Mining Services", href: "/data-support/data-entry/crm-data-mining-services.asp" },
    { label: "Banking Data Entry Services", href: "/data-support/data-entry/banking-data-entry-services.asp" },
    { label: "Image Search Services", href: "/data-support/data-entry/image-search-services.asp" },
    { label: "Typing Services", href: "/data-support/data-entry/typing-services.asp" },
    { label: "Medical Image Annotation & Tagging Services", href: "/data-support/data-entry/medical-image-annotation-tagging-services.asp" },
    { label: "Data Indexing Services", href: "/data-support/data-entry/data-indexing-services.asp" },
    { label: "Book Indexing Services", href: "/data-support/data-entry/book-indexing-services.asp" },
    { label: "Data Validation Services", href: "/data-service/data-entry/data-validation-services.asp" },
    { label: "Data Masking Services", href: "/data-support/data-entry/data-masking-services.asp" },
    { label: "Data Profiling Services", href: "/data-support/data-entry/data-profiling-services.asp" },
    { label: "Data Labeling Services", href: "/data-support/data-entry/data-labeling-services.asp" },
    { label: "Data Appending Services", href: "/DataManagement/data-appending-services.asp" },
    { label: "Data Enrichment Services", href: "/DataManagement/data-enrichment-services.asp" }
  ]
},
{
  title: "Data Conversion",
  description: "We offer specialized data entry services. Get more information on our data conversion services and sub-services.",
  mainHref: "/data-support/data-conversion-services/",
  links: [
    { label: "JATS XML Conversion Services", href: "/data-support/data-conversion/jats-xml-conversion-services.asp" },
    { label: "Document Conversion Services", href: "/data-support/data-conversion/document-conversion-services.asp" },
    { label: "File Conversion Services", href: "/data-support/data-conversion/file-format-conversion-services.asp" },
    { label: "ePub3 Conversion Services", href: "/data-support/data-conversion/epub3-conversion-services.asp" },
    { label: "XML Conversion Services", href: "/data-support/data-conversion/xml-conversion-services.asp" },
    { label: "PDF Conversion Services", href: "/data-support/data-conversion/pdf-conversion-services.asp" },
    { label: "Book Conversion Services", href: "/data-support/data-conversion/book-conversion-services.asp" },
    { label: "HTML Conversion Services", href: "/data-support/data-conversion/html-conversion-services.asp" },
    { label: "SGML Conversion Services", href: "/data-support/data-conversion/sgml-conversion-services.asp" },
    { label: "EDM Services", href: "/data-support/data-conversion/electronic-document-management-services.asp" },
    { label: "Document Formatting Services", href: "/data-support/data-conversion/document-formatting-services.asp" },
    { label: "XBRL Conversion Services", href: "/data-support/data-conversion/xbrl-conversion-services.asp" },
    { label: "PubMed Conversion Services", href: "/data-support/data-conversion/pubmed-conversion-services.asp" },
    { label: "DTBook Conversion Services", href: "/data-support/data-conversion/dtbook-conversion-services.asp" },
    { label: "PSD to HTML Conversion Services", href: "/data-support/data-conversion/psd-to-html-conversion-services.asp" },
    { label: "Figma to HTML Conversion Services", href: "/data-support/data-conversion/figma-to-html-conversion-services.asp" },
    { label: "HTML to Responsive Conversion Services", href: "/data-support/data-conversion/html-to-responsive-conversion-services.asp" },
    { label: "Adobe XD to HTML Conversion Services", href: "/data-support/data-conversion/adobe-xd-to-html-conversion-services.asp" },
    { label: "HTML to WordPress Conversion Services", href: "/data-support/data-conversion/html-to-wordpress-conversion-services.asp" },
    { label: "Sketch to HTML Conversion Services", href: "/data-support/data-conversion/sketch-to-html-conversion-services.asp" },
    { label: "Zeplin to HTML Conversion Services", href: "/data-support/data-conversion/zeplin-to-html-conversion-services.asp" },
    { label: "PDF Accessibility Services", href: "/data-support/data-conversion/pdf-accessibility-services.asp" }
  ]
},


{
  title: "eBook Conversion",
  description: "We offer specialized data entry services. Get more information on our eBook Conversion services and sub-services.",
  mainHref: "/data-support/ebook-conversion-services/",
  links: [
    { label: "ePub Conversions", href: "/data-support/ebook-conversion/epub-conversion-services.asp" },
    { label: "ePUB", href: "/data-support/ebook-conversion/epub-services.asp" },
    { label: "Kindle Conversions", href: "/data-support/ebook-conversion/kindle-conversion-services.asp" },
    { label: "iPad and iPhone e-Book Conversions", href: "/data-support/ebook-conversion/ipad-and-iphone-ebook-conversion-services.asp" },
    { label: "Comprehensive Digital Services", href: "/data-support/ebook-conversion/comprehensive-digital-services.asp" },
    { label: "Reflowable eBook Conversion Services", href: "/data-support/ebook-conversion/reflowable-ebook-conversion-services.asp" },
    { label: "Fixed Layout ePub Conversion Services", href: "/data-support/ebook-conversion/fixed-layout-epub-conversion-services.asp" },
    { label: "Multilingual eBook Conversion Services", href: "/data-support/ebook-conversion/multilingual-ebook-conversion-services.asp" },
    { label: "Enhanced eBook Conversion Services", href: "/data-support/ebook-conversion/enhanced-ebook-conversion-services.asp" },
    { label: "Web Accessible eBook Development", href: "/data-support/ebook-conversion/web-accessible-ebook-development-services.asp" },
    { label: "Interactive eBook Conversion Services", href: "/data-support/ebook-conversion/interactive-ebook-conversion-services.asp" },
    { label: "DocBook XML Conversion Services", href: "/data-support/ebook-conversion/docbook-xml-conversion-services.asp" }
  ]
},
{
  title: "Property Management",
//   description: "Customized insurance services for Managing General Agents (MGAs) to streamline operations and improve efficiency.",
  mainHref: "/DataManagement/property-management-back-office-outsourcing.asp",
  links: [],
},
{
  title: "Data Processing",
  description: "We offer specialized data processing services. Get more information on our data processing services and sub-services.",
  mainHref: "/data-support/data-processing-services/",
  links: [
    { label: "Metadata Tagging Services", href: "/data-support/data-processing/metadata-tagging-services.asp" },
    { label: "Data Transformation Services", href: "/data-support/data-processing/data-transformation-services.asp" },
    { label: "Master Data Management Services", href: "/data-support/data-processing/master-data-management-services.asp" },
    { label: "Semantic Image Segmentation Services", href: "/data-support/data-processing/semantic-image-segmentation-services.asp" },
    { label: "Metadata Management Services", href: "/data-support/data-processing/metadata-management-services.asp" },
    { label: "Data Harmonization Services", href: "/data-support/data-processing/data-harmonization-services.asp" },
    { label: "Data Standardization Services", href: "/data-support/data-processing/data-standardization-services.asp" },
    { label: "Merge Purge Services", href: "/data-support/data-processing/merge-purge-services.asp" },
    { label: "Forms Processing Services", href: "/data-support/data-processing/forms-processing-services.asp" },
    { label: "Order Processing Services", href: "/data-support/data-processing/order-processing-services.asp" },
    { label: "Image Processing Services", href: "/data-support/data-processing/image-processing-services.asp" },
    { label: "Data Cleansing Services", href: "/data-support/data-processing/data-cleansing-services.asp" },
    { label: "Insurance Claims Processing", href: "/DataManagement/insurance-claims-processing.asp" },
    { label: "Market Research Forms Processing", href: "/data-support/data-processing/market-research-forms-processing-services.asp" },
    { label: "Check Processing Services", href: "/data-support/data-processing/check-processing-services.asp" },
    { label: "Credit Card Processing Services", href: "/data-support/data-processing/credit-card-processing-services.asp" },
    { label: "Transaction Processing Services", href: "/data-support/data-processing/transaction-processing-services.asp" },
    { label: "Survey Processing Services", href: "/data-support/data-processing/survey-processing-services.asp" },
    { label: "Data Deduplication Services", href: "/data-support/data-processing/data-deduplication-services.asp" },
    { label: "Mailing List Compilation Services", href: "/data-support/data-processing/mailing-list-compilation-services.asp" },
    { label: "Database Creation", href: "/data-support/data-processing/database-creation-services.asp" },
    { label: "Data Abstraction", href: "/data-support/data-processing/data-abstraction-services.asp" },
    { label: "Data Mining Services", href: "/data-support/data-processing/data-mining-services.asp" },
    { label: "Text and Web Mining", href: "/data-support/data-processing/text-and-web-data-mining-services.asp" },
    { label: "Student Loan Processing Services", href: "/data-support/data-processing/student-loan-processing-services.asp" },
    { label: "Tagging and Annotation Services", href: "/data-support/data-processing/tagging-and-annotation-services.asp" },
    { label: "Image Annotation Services", href: "/data-support/data-processing/image-annotation-services.asp" },
    { label: "Human Gesture Annotation", href: "/data-support/data-processing/human-gesture-annotation-services.asp" },
    { label: "Bounding Box Services", href: "/data-support/data-processing/bounding-box-annotation-services.asp" },
    { label: "Purchase Order Processing Services", href: "/data-support/data-processing/purchase-order-processing-services.asp" },
    { label: "SKU Data Management Services", href: "/data-support/data-processing/sku-data-management-services.asp" },
    { label: "Product Information Management Services", href: "/data-support/data-processing/product-information-management-services.asp" },
    { label: "Data Preparation Services", href: "/data-support/data-processing/data-preparation-services.asp" },
    { label: "Video Annotation Services", href: "/data-support/data-processing/video-annotation-services.asp" },
    { label: "CRM Data Cleansing Services", href: "/data-support/data-processing/crm-data-cleansing-services.asp" },
    { label: "Data Consolidation Services", href: "/data-support/data-processing/data-consolidation-services.asp" },
    { label: "Data Provisioning Services", href: "/data-support/data-processing/data-provisioning-services.asp" },
    { label: "Data Monitoring Services", href: "/data-support/data-processing/data-monitoring-services.asp" },
    { label: "Data Collection Services", href: "/data-support/data-processing/data-collection-services.asp" },
    { label: "Data Lifecycle Management Services", href: "/data-support/data-processing/data-lifecycle-management-services.asp" },
    { label: "DMS Support Services", href: "/data-support/data-processing/dms-support-services.asp" },
    { label: "Data Verification Services", href: "/data-support/data-processing/data-verification-services.asp" },
    { label: "Data Scrubbing Services", href: "/data-support/data-processing/data-scrubbing-services.asp" },
    { label: "Document Indexing Services", href: "/data-support/data-processing/document-indexing-services.asp" },
    { label: "Document Scanning Services", href: "/data-support/ocr/document-scanning-services.asp" }
  ]
},
{
  title: "Data Management",
  description: "Explore our comprehensive Data Management services and sub-services.",
  mainHref: "/data-support/data-management-services/",
  links: [
    { label: "Data Protection Officer Services", href: "/data-support/data-entry/data-protection-officer-services.asp" },
    { label: "Records Management Services", href: "/data-support/data-entry/records-management-services.asp" },
    { label: "eCommerce Taxonomy Development Services", href: "/data-support/data-entry/e-commerce-taxonomy-development-services.asp" },
    { label: "Cloud Data Management Services", href: "/data-support/data-entry/cloud-data-management-services.asp" },
    { label: "Sports Data Tagging Services", href: "/data-support/data-processing/sports-data-tagging-services.asp" },
    { label: "Data Formatting Services", href: "/data-support/data-entry/data-formatting-services.asp" },
    { label: "eCommerce Product Data Classification Services", href: "/data-support/data-entry/ecommerce-product-data-classification-services.asp" },
    { label: "Magento Data Entry Services", href: "/data-support/data-entry/magento-data-entry-services.asp" },
    { label: "e-Commerce Product Data Cleansing Services", href: "/data-support/data-processing/ecommerce-product-data-cleansing-services.asp" },
    { label: "Data Protection Consulting Services", href: "/data-support/data-processing/data-protection-consulting-services.asp" },
    { label: "Data Governance Services", href: "/data-support/data-processing/data-governance-services.asp" },
    { label: "Data Virtualization Services", href: "/data-support/data-processing/data-virtualization-services.asp" },
    { label: "Financial Data Processing Services", href: "/data-support/data-processing/financial-data-processing-services.asp" },
    { label: "Data Quality Management Services", href: "/data-support/data-processing/data-quality-management-services.asp" },
    { label: "Data Modernization Services", href: "/data-support/data-processing/data-modernization-services.asp" },
    { label: "Property Preservation Data Entry Services", href: "/data-support/data-entry/property-preservation-data-entry-services.asp" }
  ]
},
{
  title: "Online Catalog",
  description: "We offer specialized data entry services. Get more information on our online catalog services and sub-services.",
  mainHref: "/data-support/online-catalog-management-services/",
  links: [
    { label: "Catalog Conversion Services", href: "/data-support/catalog/catalog-conversion-services.asp" },
    { label: "e-commerce Product Data Entry", href: "/data-support/catalog/ecommerce-product-data-entry-services.asp" },
    { label: "Catalog Processing Services", href: "/data-support/catalog/catalog-processing-services.asp" },
    { label: "Catalog Updation Services", href: "/data-support/catalog/product-catalog-maintenance-services.asp" },
    { label: "Catalog Content Management", href: "/data-support/catalog/catalog-content-management-services.asp" },
    { label: "Catalog Building and Indexing Services", href: "/data-support/catalog/catalog-building-and-indexing-services.asp" }
  ]
},
{
  title: "OCR",
  description: "We offer specialized data entry services. Get more information on our OCR & scanning services and sub-services.",
  mainHref: "/data-support/ocr-services/",
  links: [
    { label: "OCR Clean Up Services", href: "/data-support/ocr/ocr-cleanup-services.asp" },
    { label: "Document Digitization Services", href: "/data-support/ocr/document-digitization-services.asp" },
    { label: "OCR Conversion Services", href: "/data-support/ocr/ocr-conversion-services.asp" }
  ]
},
{
  title: "Industries",
  description: "We offer specialized data entry services for various Industries. Get more information on the Industries we cater to.",
  mainHref: "/DataManagement/industries/",
  links: [
    { label: "Manufacturing Industry", href: "/DataManagement/manufacturing-data-entry-services.asp" },
    { label: "Healthcare Industry", href: "/DataManagement/healthcare-data-entry-services.asp" },
    { label: "Architecture Industry", href: "/DataManagement/architectural-data-entry-services.asp" },
    { label: "Gaming Industry", href: "/DataManagement/gaming-data-entry-services.asp" },
    { label: "Government Agencies", href: "/DataManagement/government-agencies-data-entry.asp" },
    { label: "Publishing Industry", href: "/DataManagement/publishing-industry-data-entry.asp" },
    { label: "Accounting Firms", href: "/DataManagement/accounting-data-entry.asp" },
    { label: "Legal Organizations", href: "/DataManagement/legal-organizations-data-entry.asp" },
    { label: "Educational Institutions", href: "/DataManagement/educational-institutions-data-entry.asp" },
    { label: "Studios", href: "/DataManagement/studio-data-entry-services.asp" },
    { label: "ACI e-Manifest Services", href: "/DataManagement/aci-e-manifest-services.asp" }
  ]
},
{
  title: "Articles",
  description: "Our data entry resources are comprehensive, informative, and well-researched. Check out our data entry articles and resources.",
  mainHref: "/DataManagement/articles/",
  links: [
    { label: "Top Things to Avoid While Hiring the Perfect Customs Brokerage Service Provider", href: "/DataManagement/articles/top-things-avoid-while-hiring-perfect-customs-brokerage-service-provider.asp" },
    { label: "How Can Your Firm Benefit from Nimble Data Entry Services?", href: "/DataManagement/articles/how-can-your-firm-benefit-from-Nimble-data-entry-services.asp" },
    { label: "Big Data in 2020: Future, Growth, and Challenges", href: "/DataManagement/articles/big-data-future-growth-challenges.asp" },
    { label: "10 Common Misconceptions about Data Management", href: "/DataManagement/articles/common-misconceptions-about-data-management.asp" },
    { label: "Best Practices of OCR Data Capture", href: "/DataManagement/articles/best-practices-of-ocr-data-capture.asp" },
    { label: "The Ultimate Cheat Sheet on Big Data Analytics", href: "/DataManagement/articles/ultimate-cheat-sheet-on-big-data-analytics.asp" },
    { label: "Data Mining Techniques", href: "/DataManagement/articles/data-mining-techniques.asp" },
    { label: "10 Signs You Should Invest in Data Analytics", href: "/DataManagement/articles/signs-you-should-invest-in-data-analytics.asp" },
    { label: "How to Solve the Manual Data Entry Challenges", href: "/DataManagement/articles/how-to-solve-manual-data-entry-challenges.asp" },
    { label: "Top 10 Data Extraction Tools", href: "/DataManagement/articles/top-data-extraction-tools.asp" },
    { label: "10 Reasons to Nimble Product Data Entry to India", href: "/DataManagement/articles/reasons-to-Nimble-product-data-entry-to-india.asp" },
    { label: "Cloud Data Management Trends to Watch Out For", href: "/DataManagement/articles/cloud-data-management-trends.asp" },
    { label: "10 Best Practices for Successful Data Migration", href: "/DataManagement/articles/data-migration-best-practices.asp" },
    { label: "7 Big Data Predictions You May be Interested In", href: "/DataManagement/articles/big-data-trends.asp" },
    { label: "6 Key Benefits of Restaurant Menu Digitization", href: "/DataManagement/articles/restaurant-menu-digitization-benefits.asp" },
    { label: "How Can Efficient Form Creation Help You in Data Entry?", href: "/DataManagement/articles/form-creation-benefits-data-entry.asp" },
    { label: "7 Top Ways to Improve Data Accuracy", href: "/DataManagement/articles/ways-to-improve-data-accuracy.asp" },
    { label: "Skills of an Online Data Entry Clerk", href: "/DataManagement/articles/data-entry-clerk-skills.asp" },
    { label: "Data Entry India", href: "/DataManagement/articles/get-the-data-entry-advatage-at-Nimble-Acuity.asp" },
    { label: "Better Data Management", href: "/DataManagement/articles/better-data-management.asp" },
    { label: "Nimble Data Entry to India", href: "/DataManagement/articles/Nimble-data-entry-to-india.asp" },
    { label: "Nimble Data Entry Services", href: "/DataManagement/articles/Nimble-data-entry-services.asp" },
    { label: "Finding the Best Data Quality Solutions", href: "/DataManagement/articles/data-quality-solutions.asp" },
    { label: "Solving Issues Related to Inaccurate Data", href: "/DataManagement/articles/solve-data-issues.asp" },
    { label: "How to Convert Scanned Spreadsheet/PDF to Excel using OCR", href: "/DataManagement/articles/spreadsheet-to-excel-conversion.asp" },
    { label: "Microfilm Scanning & Conversion", href: "/DataManagement/microfilm-scanning-conversion-services.asp" }
  ]
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
const DSmainmenu: React.FC = () => {
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
    if (idx === 3) {
      // Direct link for index 3
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
  if (idx === 3) {
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

export default DSmainmenu


