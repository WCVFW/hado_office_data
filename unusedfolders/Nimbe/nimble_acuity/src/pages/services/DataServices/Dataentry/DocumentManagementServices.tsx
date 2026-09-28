import React from "react";
import DSmainmenu from "../DSmainmenu";

const DocumentManagementServices: React.FC = () => {
  const dmsTools = ["DocuWare", "Laserfiche", "Evernote", "M-Files"];
  const additionalServices = [
    "Data Entry Services",
    "Data Conversion Services",
    "Data Processing Services",
    "Online Catalog Management Services",
  ];

  const benefits = [
    "Error-free data handling: AI validation and intelligent error detection enhance accuracy and dataset integrity.",
    "Regulatory document management: HIPAA, GDPR compliance with robust audit trails, role-based access, and retention policies.",
    "Scalable workflow automation: RPA-driven document approval, data capture, and processing reduces turnaround time.",
    "Multi-format data conversion: Legacy or handwritten documents are transformed into searchable, structured formats.",
    "eCommerce catalogs with AI: Bulk product incorporation, metadata structuring, and cross-platform deployment improve visibility and conversions.",
    "Real-time data processing & insights: AI-powered data cleansing enables faster decision-making and actionable business intelligence.",
  ];

  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Document Management Services
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          Employ advanced encryption, multifactor authentication, role-based access controls, and zero-trust architecture to safeguard your documents and sensitive records.
        </p>
        <p className="text-gray-600">
          Get end-to-end digital document digitization, AI-driven indexing, compliant storage, automated workflows, and system integrations for AEC, real estate, finance, healthcare, and legal industries.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Comprehensive Document Management Consulting Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
            <h3 className="font-semibold mb-2">Document Scanning</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>High-resolution digitization of paper records</li>
              <li>OCR-enabled searchable document conversion</li>
              <li>Secure archival and cloud-based storage</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
            <h3 className="font-semibold mb-2">Records Management Services</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Centralized storage with access controls</li>
              <li>Compliance-driven retention policies</li>
              <li>Version tracking and audit-ready logs</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
            <h3 className="font-semibold mb-2">Workflow Automation</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>AI-powered process automation solutions</li>
              <li>Customizable document approval workflows</li>
              <li>Integration with ERP, CRM, and DMS</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition">
            <h3 className="font-semibold mb-2">Data Capture & Extraction Services</h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Intelligent document recognition technology</li>
              <li>Automated metadata extraction and tagging</li>
              <li>AI-based structured and unstructured data retrieval</li>
              <li>Scalable processing for large datasets</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DMS Tools */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">DMS System Software We Leverage</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {dmsTools.map((tool, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-4 py-2 rounded shadow hover:bg-blue-100 transition"
            >
              {tool}
            </span>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Document Management Company?</h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Additional Services We Provide
        </h2>
        <ul className="list-disc pl-5 text-gray-700 space-y-3">
          {additionalServices.map((service, idx) => (
            <li
              key={idx}
              className="bg-blue-50 p-4 rounded border-l-4 border-blue-600 hover:bg-blue-100 transition"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
          Contact Us for Document Management Services
        </button>
      </section>
    </div>
  );
};

export default DocumentManagementServices;
