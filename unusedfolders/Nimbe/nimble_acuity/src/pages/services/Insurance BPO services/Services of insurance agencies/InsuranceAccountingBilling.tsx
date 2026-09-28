import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const InsuranceAccountingBilling: React.FC = () => {
  const services = [
    {
      title: "Invoice Delivery",
      description:
        "Ensure accurate and timely delivery of invoices. Generate premium invoices in Excel and PDF formats and send them via email to policyholders.",
    },
    {
      title: "Maintaining Accessible Records",
      description:
        "Keep easy-to-access records of insurance premium bookings and other charges for effortless retrieval when needed.",
    },
    {
      title: "Payment Follow-Ups",
      description:
        "Send regular reminders and record payments efficiently to prevent delinquencies and fraud.",
    },
    {
      title: "Generate Categorized Invoices",
      description:
        "Prepare monthly, quarterly, and annual invoice reports with detailed tax and commission information.",
    },
    {
      title: "Accounts Receivable Statements",
      description:
        "Document accounts receivable transactions and provide policyholders with periodic statements.",
    },
    {
      title: "Simplify Cash Application",
      description:
        "Maintain subsidiary ledgers, generate AR reports, and direct received cash to individual accounts.",
    },
    {
      title: "Revenue Stream Tracking",
      description:
        "Track all revenue streams for insurance agencies, enabling easy querying of invoices and payments.",
    },
  ];

  const whyChooseUs = [
    "ISO 9001:2015 certified provider ensuring top-quality services",
    "ISO/IEC 27001:2022 certified for robust data security",
    "High accuracy and quality in insurance back-office support",
    "Quick turnaround time for all accounting and billing tasks",
    "Scalable solutions tailored to your agency's needs",
    "Affordable, pocket-friendly pricing options",
    "Single point of contact for training, queries, and progress updates",
    "Experienced team with 10+ years in insurance accounting",
    "Modern infrastructure ensuring reliability and security",
    "Expertise in major insurance accounting software (MYOB, QuickBooks, Sage, CheckMark MultiLedger)",
  ];

  const softwareList = ["MYOB", "CheckMark MultiLedger", "Intuit QuickBooks", "Sage"];

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
          Nimble Insurance Accounting & Billing Services
        </h1>
        <p className="text-gray-700 text-lg">
          Improve cashflow, streamline billing, and manage accounts efficiently with our expert services.
        </p>
      </section>

      {/* Services Accordion */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Key Services</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 focus:outline-none"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-blue-600 text-xl">{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700">{service.description}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-blue-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Avail 1 WEEK FREE TRIAL</h3>
        <p className="text-gray-700 mb-6">Try before you buy! Experience our services risk-free.</p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition">
          Get Started Now
        </button>
      </section>

      {/* Software Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-4 text-center">Accounting Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-2">
          {softwareList.map((software, idx) => (
            <span
              key={idx}
              className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
            <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Streamline Your Insurance Accounting & Billing
        </h2>
        <p className="text-gray-700 mb-6">
          Focus on your core business while we handle invoicing, accounts receivable, and cashflow management efficiently.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-600 hover:to-blue-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceAccountingBilling;
