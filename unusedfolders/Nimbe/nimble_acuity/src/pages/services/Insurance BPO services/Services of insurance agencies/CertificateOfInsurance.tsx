import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const CertificateOfInsurance: React.FC = () => {
  const services = [
    {
      title: "Receiving, Processing, and Issuing COI",
      description:
        "Our team ensures accurate receiving, processing, and issuing of certificates of insurance on ACORD-approved forms, efficiently and at affordable rates.",
    },
    {
      title: "Verifying Contact for Compliance",
      description:
        "We check all policies for compliance, track non-compliant or expired policies, and reduce risks of uninsured claims.",
    },
    {
      title: "Managing/Following-up Third-party Communication",
      description:
        "Our specialists efficiently handle communication and follow-ups, increasing compliance rates and improving client service levels.",
    },
    {
      title: "Processing Revised Certificates",
      description:
        "We securely store insurance data and quickly deliver revised certificates via email, ensuring error-free, high-quality documents.",
    },
    {
      title: "Compliance Reporting",
      description:
        "We maintain a secure database of insurance claims and renewals, generating detailed reports for all insurance policies and compliance tracking.",
    },
  ];

  const benefits = [
    "Affordable Prices – Pay only for services you use",
    "Skilled Team with vast insurance expertise",
    "Quick Turnaround Time across global delivery centers",
    "ISO, ACORD, and industry-standard compliant services",
    "24/7 Customer Support",
    "Data Security with ISO/IEC 27001:2022 certification",
    "Unique Reporting System for clarity and control",
    "Reduced Risk of uninsured claims and legal disputes",
    "Scalable services to match client needs",
    "Best Infrastructure and latest insurance tools",
    "Single Point of Contact for project management",
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Nimble Certificate of Insurance Services
        </h1>
        <p className="text-gray-700 text-lg">
          Streamline your COI process and ensure compliance with our experienced team at Nimble Acuity.
        </p>
      </section>

      {/* Services Accordion */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Certificate of Insurance Services</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div key={idx} className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-green-50 hover:bg-green-100 focus:outline-none"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-green-600 text-xl">{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && <div className="px-6 py-4 bg-white text-gray-700">{service.description}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-green-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Avail 1 WEEK FREE TRIAL</h3>
        <p className="text-gray-700 mb-6">Try our COI services before you buy! Experience hassle-free processing.</p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600 transition">
          Get Started Now
        </button>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((item, idx) => (
            <div key={idx} className="border-l-4 border-green-600 pl-4 py-2 bg-green-50 rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Simplify Your Certificate of Insurance Process
        </h2>
        <p className="text-gray-700 mb-6">
          Nimble your COI services to us and focus on core business while we handle compliance, verification, and reporting.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-blue-600 hover:to-green-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CertificateOfInsurance;
