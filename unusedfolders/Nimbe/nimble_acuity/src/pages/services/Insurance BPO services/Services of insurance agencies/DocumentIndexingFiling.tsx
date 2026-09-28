import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const DocumentIndexingFiling: React.FC = () => {
  const services = [
    {
      title: "Category-Based Document Segregation",
      description:
        "Categorize and organize insurance documents based on type and usability. Custom folder structures make accounting and filing easier.",
    },
    {
      title: "Document Indexing and Labeling",
      description:
        "Index and label documents by policy holder, status, claims filed, policy history, etc., following client-specific naming conventions for faster processing.",
    },
    {
      title: "Make Documents Editable and Searchable",
      description:
        "Use standard labeling and indexing procedures to make documents easily retrievable, reducing handling time and errors.",
    },
    {
      title: "Provide a Comprehensive Document Summary",
      description:
        "Prepare in-depth summaries of premiums, coverage limitations, claim history, and policy details for quick insights into policyholder information.",
    },
  ];

  const additionalServices = [
    "Imaging and indexing of insurance applications, claim letters, client receipts, certificates of insurance, ACORD forms, invoices, and more.",
  ];

  const softwareList = `Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix, Applied Agency Management, Newton Agency Solution, Agency Systems, Insly, SEMCATA, A1 Tracker, Jenesis, Agent & Broker Software (ABS), SIBRO, 1app - C2MS Insurance Software, AgencyIntel, QQCatalyst, BoardEverString, Halo, IBM SPSS, Infer Insurance Analytics, Radius, SAS Advanced Analytics, Statistica Decisioning Platform, A1 Tracker, ClickClaims, PLEXIS payer platforms, Record360, Virtual Claims Adjuster, Bitrix24, Commission calculator, CommissionsEZ, CommissionTrac, Evolve, SPM, GoalPost, GreenWave, Iconixx, Incentive SPM, inLOGIC.ca, Advanced Insurance System, Caseblocks, Cases CRM, Claims Manager, DocuPhase, HealthQx, HEALTHsuite, INSIS, PCRS, QUICK CAP, Intuit QuickBooks, Billbooks, MYOB, Invoice Studio, Tradeshift, Sage, CheckMark MultiLedger, Invoicera`;

  const whyChooseUs = [
    "Cutting-edge technologies and state-of-the-art infrastructure for accurate, customized solutions",
    "Disaster recovery with off-site archiving and secure backup servers",
    "Multiple global delivery centers for uninterrupted service",
    "Efficient scanning and indexing for easy future retrieval",
    "Strict privacy and confidentiality agreements for total data security",
    "Top-quality services at reasonable rates with transparent pricing",
    "Highly skilled indexing and filing experts trained on the latest insurance software",
    "HIPAA-compliant back-office services",
    "Flexible project scalability",
    "Dependable and satisfying customer experience",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Nimble Document Indexing & Filing Services for Insurance
        </h1>
        <p className="text-gray-700 text-lg">
          Efficiently organize, index, and file your insurance documents while focusing on core business tasks.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-purple-50 hover:bg-purple-100 focus:outline-none"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-purple-600 text-xl">{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700">{service.description}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Additional Services</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1 text-center md:text-left">
          {additionalServices.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-purple-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Avail 1 WEEK FREE TRIAL</h3>
        <p className="text-gray-700 mb-6">Try before you buy! Experience our services risk-free.</p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition">
          Get Started Now
        </button>
      </section>

      {/* Software Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Insurance Software We Use</h2>
        <div className="max-h-40 overflow-y-auto p-4 border rounded shadow text-gray-700 bg-white">
          {softwareList.split(", ").map((software, idx) => (
            <span
              key={idx}
              className="inline-block bg-purple-100 text-purple-800 px-3 py-1 m-1 rounded-full text-sm"
            >
              {software}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="border-l-4 border-purple-600 pl-4 py-2 bg-purple-50 rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Index & File Your Insurance Documents Easily</h2>
        <p className="text-gray-700 mb-6">
          Focus on your core business while we handle accurate indexing, filing, and document management.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DocumentIndexingFiling;
