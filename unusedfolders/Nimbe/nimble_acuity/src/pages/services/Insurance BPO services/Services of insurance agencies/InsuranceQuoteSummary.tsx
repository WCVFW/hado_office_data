import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const InsuranceQuoteSummary: React.FC = () => {
  const services = [
    {
      title: "Summarizing Coverage Details",
      description:
        "Create carrier-wise summaries including premiums, liabilities, exclusions, deductibles, and other essential details.",
    },
    {
      title: "Creating Summary Tables",
      description:
        "Comprehensive premium and commission tables for easy comparison of binding quotes that meet client requirements.",
    },
    {
      title: "Extracting Carrier Financial Ratings",
      description:
        "Extract AM Best financial ratings to determine carrier performance and ensure sufficient funds for claims.",
    },
    {
      title: "Spreadsheet Creation",
      description:
        "Generate detailed, well-structured spreadsheets for side-by-side comparison of different insurance carriers.",
    },
    {
      title: "Creating Proposal Templates",
      description:
        "Populate insurance quote proposal templates with all necessary information based on client requirements.",
    },
    {
      title: "Proposal Structuring",
      description:
        "Structure completed quote proposals into printable formats as desired by the client.",
    },
  ];

  const additionalServices = [
    "Receiving, processing, and issuing certificate of insurance (COI)",
    "Managing third-party communication/follow-ups to process requests faster",
    "Verifying contacts for compliance and following up on non-compliant matters",
    "Renewal requests and compliance reporting",
    "Processing revised certificates after renewals",
  ];

  const verticals = [
    "Life Insurance Services",
    "Annuity Insurance Services",
    "Property & Casualty Insurance",
    "Motor Insurance",
    "Health Insurance",
    "Liability Insurance",
  ];

  const softwareList = `Vertafore, Nexsure, Aspire, InsurancePro, HawkSoft, Agency Matrix, Applied Agency Management, Newton Agency Solution, Agency Systems, Insly, SEMCATA, A1 Tracker, Jenesis, Agent & Broker Software (ABS), SIBRO, 1app - C2MS Insurance Software, AgencyIntel, QQCatalyst, BoardEverString, Halo, IBM SPSS, Infer Insurance Analytics, Radius, SAS Advanced Analytics, Statistica Decisioning Platform, A1 Tracker, ClickClaims, PLEXIS payer platforms, Record360, Virtual Claims Adjuster, Bitrix24, Commission calculator, CommissionsEZ, CommissionTrac, Evolve, SPM, GoalPost, GreenWave, Iconixx, Incentive SPM, inLOGIC.ca, Advanced Insurance System, Caseblocks, Cases CRM, Claims Manager, DocuPhase, HealthQx, HEALTHsuite, INSIS, PCRS, QUICK CAP, Intuit QuickBooks, Billbooks, MYOB, Invoice Studio, Tradeshift, Sage, CheckMark MultiLedger, Invoicera`;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          Nimble Insurance Quote Summary Services
        </h1>
        <p className="text-lg text-gray-700">
          Streamline your insurance quoting process and focus on your core business competencies.
        </p>
      </section>

      {/* Services Section with Accordion */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Key Services</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-green-50 hover:bg-green-100 focus:outline-none"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-green-600 text-xl">{openIndex === idx ? "▲" : "▼"}</span>
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
      <section className="text-center bg-green-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Avail 1 WEEK FREE TRIAL</h3>
        <p className="text-gray-700 mb-6">Try before you buy! Experience our services risk-free.</p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-teal-600 hover:to-green-600 transition">
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
              className="inline-block bg-green-100 text-green-800 px-3 py-1 m-1 rounded-full text-sm"
            >
              {software}
            </span>
          ))}
        </div>
      </section>

      {/* Verticals Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Industries We Cater To</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700 text-center">
          {verticals.map((vertical, idx) => (
            <li key={idx}>{vertical}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {[
            "Experienced Team: Highly trained specialists to handle any quote or proposal request.",
            "Top-quality Infrastructure: State-of-the-art technology for precise quote summary services.",
            "Affordable Pricing: Cost-effective services with customizable pricing options.",
            "Quick Turnaround Time: Multiple delivery centers across time zones ensure fast delivery.",
            "Data Security: Strict network and data security measures for confidentiality.",
            "Easily Scalable: Scale up or down based on project requirements.",
            "Customized Solutions: Tailor-made quote processes to meet client needs.",
          ].map((reason, idx) => (
            <div key={idx} className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded">
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Get Hassle-Free Insurance Quote Summary Services</h2>
        <p className="text-gray-700 mb-6">
          Stop worrying about mundane tasks and focus on your core competencies. Contact our team today!
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-green-600 to-teal-600 hover:from-teal-600 hover:to-green-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceQuoteSummary;
