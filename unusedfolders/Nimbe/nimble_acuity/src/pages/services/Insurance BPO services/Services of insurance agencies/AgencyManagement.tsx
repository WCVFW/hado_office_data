import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const AgencyManagement: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  const services = [
    {
      title: "Insurance Policy Management",
      desc: "End-to-end policy services including issuance, renewals, policy checking, endorsements, and more.",
    },
    {
      title: "Insurance Claims Management",
      desc: "Efficient claims verification, validation, adjudication, and processing with accuracy.",
    },
    {
      title: "Insurance Commission Management",
      desc: "From commission data entry to commission accounting — complete management support.",
    },
    {
      title: "Insurance Reporting",
      desc: "Agent commission reports, accounts, finance, and policy listing reports handled seamlessly.",
    },
    {
      title: "New Business Services",
      desc: "Document uploading, quote creation, invoice entry, policy checking, and more.",
    },
    {
      title: "Insurance Accounting",
      desc: "Comprehensive accounting including accounts payable, receivable, reconciliation, and beyond.",
    },
  ];

  const processSteps = [
    { step: "01", title: "Requirement Analysis", desc: "Understand client needs and devise an efficient service plan." },
    { step: "02", title: "Plan Improvement", desc: "Share plan with client, gather feedback, and refine strategy." },
    { step: "03", title: "Implementation", desc: "Form a skilled team to execute the plan and deliver results." },
    { step: "04", title: "Validation & Verification", desc: "Thorough quality checks across all records and services." },
    { step: "05", title: "Final Delivery", desc: "Verified records delivered to client in the required format." },
  ];

  const benefits = [
    "Flexible Pricing Options",
    "ISO/IEC 27001:2022 Certified Data Security",
    "Quick Turnaround with Global Delivery Centers",
    "Experienced Insurance Agents & Specialists",
    "ISO Certified Error-free Services",
    "Access to Latest Insurance Tools & Infrastructure",
    "Dedicated Project Manager (Single Point of Contact)",
    "24/7 Availability for Support",
    "Ease of Scalability to Match Demand",
  ];

  const successStories = [
    {
      title: "Back-office Operations for Health Insurance Company",
      desc: "A leading health insurer Nimbled to Nimble Acuity and achieved streamlined back-office operations with higher efficiency.",
    },
    {
      title: "Back-office Operations for Miami-based Customer",
      desc: "Delivered insurance back-office support within short turnaround time, ensuring smooth client operations.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Nimble Insurance Agency Management Services
        </h1>
        <p className="text-gray-700 text-lg max-w-4xl mx-auto">
          Resolve insurance back-office issues cost-effectively with extreme
          professionalism by outsourcing insurance agency management to Nimble Acuity. Focus on your core competencies while we manage your back-office operations.
        </p>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Insurance Agency Management Services We Offer
        </h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100"
              >
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-xl text-blue-600">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 text-gray-700 bg-white">
                  {service.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Nimble Acuity’s Insurance Agency Management Process
        </h2>
        <div className="grid md:grid-cols-5 gap-6 text-center">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border shadow rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="text-2xl font-bold text-green-600 mb-2">
                {step.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded text-gray-700"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {successStories.map((story, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow hover:shadow-lg transition bg-blue-50"
            >
              <h3 className="font-semibold text-xl mb-2">{story.title}</h3>
              <p className="text-gray-700 text-sm">{story.desc}</p>
              <a
                href="#"
                className="text-blue-600 font-medium mt-2 inline-block hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center space-y-4">
        <h2 className="text-3xl font-semibold">
          Nimble Insurance Agency Management Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          With decades of expertise, skilled professionals, and advanced
          technology, Nimble Acuity is your reliable partner for insurance agency
          management. Save costs, improve efficiency, and focus on your growth.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600 transition">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default AgencyManagement;
