import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const LossRunProcessing: React.FC = () => {
  const solutions = [
    {
      title: "Loss Run Data Extraction",
      description:
        "Gather, organize, and analyze loss history data using advanced tools for accuracy. Faster turnaround times, improved efficiency, and cost reduction.",
    },
    {
      title: "Sending Claims Reports to Underwriters",
      description:
        "Ensure all claims reports are accurately presented and promptly delivered, fostering smoother underwriting and faster decision-making.",
    },
    {
      title: "Forwarding Loss Run Reports to Brokers and Agencies",
      description:
        "Promptly and securely deliver loss run reports to necessary parties, reducing errors and freeing internal resources for strategic growth.",
    },
  ];

  const industries = [
    "Insurance Companies",
    "Insurance Brokers",
    "Risk Management Firms",
    "Reinsurance Companies",
    "Self-Insured Organizations",
    "Underwriting Agencies",
    "Claims Management Companies",
    "Risk Consultants",
  ];

  const reasonsToChoose = [
    "Expertise: Extensive industry knowledge delivering insightful solutions.",
    "Data Security: Strict confidentiality agreements safeguard sensitive information.",
    "Precision: Accurate, timely execution with 24/7 support.",
    "Enhanced Client Confidence: Deliver impressive customer experiences.",
    "Regulatory Compliance: Ensure industry-standard adherence.",
    "Scalable Solutions: Expand seamlessly as your business grows.",
    "Cost-Effective Pricing: Transparent, adaptable pricing models.",
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          Nimble Loss Run Processing Services
        </h1>
        <p className="text-lg text-gray-700">Redefine Risk Management Efficiency!</p>
        <p className="text-gray-600">
          Overcome time hurdles, amplify underwriting efficacy, and foster transparent alliances with our expert loss run processing services.
        </p>
      </section>

      {/* Solutions Section with Accordion */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Solutions</h2>
        <div className="space-y-4">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 focus:outline-none"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-semibold text-lg">{solution.title}</span>
                <span className="text-blue-600 text-xl">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700">{solution.description}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Industries We Serve</h2>
        <ul className="grid md:grid-cols-2 gap-2 list-disc list-inside text-gray-700 text-center">
          {industries.map((industry, idx) => (
            <li key={idx}>{industry}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {reasonsToChoose.map((reason, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded">
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Software Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Insurance Software We Use</h2>
        <div className="max-h-40 overflow-y-auto p-4 border rounded shadow text-gray-700 bg-white">
          {softwareList.split(", ").map((software, idx) => (
            <span
              key={idx}
              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 m-1 rounded-full text-sm"
            >
              {software}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Optimize Your Loss Run Processing</h2>
        <p className="text-gray-700 mb-6">
          Simplify your loss run processing, improve decision-making, and refine risk management strategies by partnering with our expert team.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LossRunProcessing;
