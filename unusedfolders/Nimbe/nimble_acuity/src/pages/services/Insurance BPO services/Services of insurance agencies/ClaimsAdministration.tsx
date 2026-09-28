import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const ClaimsAdministration: React.FC = () => {
  const services = [
    "Insurance claim setup",
    "Insurance claim eligibility and estimation",
    "Claim document imaging",
    "Disbursement",
    "Full claim adjudication",
    "Fast track adjudication",
    "Claim support and auditing",
    "Account settlement",
    "Modernization of legacy applications",
  ];

  const expertise = [
    "Sound domain proficiency with 18,488+ customers served",
    "Automated generation and archival processes",
    "Proactive risk management using FMEA",
    "Reduced transaction time with accuracy",
    "Legal and regulatory conformity (SOX, HIPAA)",
    "Compliance with state, federal, and industry guidelines",
    "Strong governance, communication, and collaboration",
  ];

  const infrastructure = [
    "State-of-the-art technology with redundancy and load balancing",
    "99.99% business process reliability",
    "250-seat disaster recovery center in Chennai, India",
    "Sufficient bandwidth for offshore administration",
    "Onsite imaging facilities and globally connected workflows",
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAccordion = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Nimble Insurance Claims Administration Service
        </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          With rising risks, regulatory demands, and cost pressures, outsourcing
          insurance claims management to Nimble Acuity ensures high-quality,
          fast, and cost-efficient services.
        </p>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-blue-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">
          Avail 1 WEEK FREE TRIAL
        </h3>
        <p className="text-gray-700 mb-6">
          Try our insurance claims administration services before you buy.{" "}
          <br />
          Experience unmatched accuracy, speed, and compliance!
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 transition">
          Get Started Now
        </button>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Insurance Claims Processing Services
        </h2>
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
                <span className="font-semibold text-lg">{service}</span>
                <span className="text-blue-600 text-xl">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700">
                  Detailed description of {service} goes here. You can expand
                  this with specifics as needed.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Nimble Acuity’s Expertise in Claims Management
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Infrastructure Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Infrastructure
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {infrastructure.map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Partner with Nimble Acuity
        </h2>
        <p className="text-gray-700 mb-6 max-w-3xl mx-auto">
          With 26+ years of experience and a dedicated claims administration
          team, Nimble Acuity provides unmatched reliability, compliance, and
          cost efficiency for your insurance business.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ClaimsAdministration;
