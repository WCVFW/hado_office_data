import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const services = [
  {
    title: "Forensic Accounting",
    items: [
      "Fraud detection & investigation",
      "Insurance claim reviews",
      "Dispute resolution among stakeholders",
      "Insurance fraud investigations",
      "Risk & security assessments",
      "Due diligence for mergers & acquisitions",
    ],
  },
  {
    title: "Bookkeeping Services",
    items: [
      "Direct bill reconciliation",
      "Commission & deposit management",
      "Vendor payables & invoicing",
      "Payroll & tax return preparation",
      "Journal & ledger maintenance",
      "Month-end & year-end reporting",
    ],
  },
  {
    title: "Value-Added Reports",
    items: [
      "Customer & employee reports",
      "Expense breakdown reports",
      "Event analysis reports",
      "Income statements & balance sheets",
      "Cash flow & renewal tracking reports",
    ],
  },
];

const processSteps = [
  {
    step: "01. Server-Based Bookkeeping",
    desc: "Upload documents via secure FTP. We update your books within 24 hours and return updated files.",
  },
  {
    step: "02. Remote Access",
    desc: "We log in securely via VPN/remote desktop to update your books overnight.",
  },
  {
    step: "03. Cloud-based (ASP)",
    desc: "Upload documents to your accounting software; we update directly so records are ready next day.",
  },
];

const BookkeepingPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Insurance Bookkeeping & Forensic Accounting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Cut costs, boost efficiency, and secure your financial records with
          Nimble Acuity’s expert bookkeeping and forensic accounting support.
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow hover:bg-yellow-300">
          Get Free Trial
        </button>
      </section>

      {/* Why Nimble */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Why Insurance Companies Nimble to Us?
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
          <li className="bg-white shadow rounded-lg p-6">
            ✔️ Fraud detection & prevention
          </li>
          <li className="bg-white shadow rounded-lg p-6">
            ✔️ Unbiased financial insights
          </li>
          <li className="bg-white shadow rounded-lg p-6">
            ✔️ Accurate & compliant bookkeeping
          </li>
          <li className="bg-white shadow rounded-lg p-6">
            ✔️ Cost savings up to 40%
          </li>
          <li className="bg-white shadow rounded-lg p-6">
            ✔️ 24/7 expert support
          </li>
          <li className="bg-white shadow rounded-lg p-6">
            ✔️ Dedicated project managers
          </li>
        </ul>
      </section>

      {/* Services Accordion */}
      <section className="max-w-4xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Core Services
        </h2>
        {services.map((service, idx) => (
          <div key={idx} className="mb-4 border rounded-lg bg-white shadow">
            <button
              onClick={() => toggleAccordion(idx)}
              className="w-full flex justify-between items-center p-4 font-semibold text-lg"
            >
              {service.title}
              <span>{openIndex === idx ? "▲" : "▼"}</span>
            </button>
            {openIndex === idx && (
              <ul className="px-6 pb-4 list-disc space-y-2">
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      {/* Process */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Our Bookkeeping Process
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {step.step}
              </h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Get Started with a 1-Week Free Trial
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Try our services free for 7 days and experience the Nimble Acuity advantage
          before you commit.
        </p>
        <button className="bg-yellow-400 text-blue-900 font-semibold px-8 py-4 rounded-lg shadow hover:bg-yellow-300">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default BookkeepingPage;
