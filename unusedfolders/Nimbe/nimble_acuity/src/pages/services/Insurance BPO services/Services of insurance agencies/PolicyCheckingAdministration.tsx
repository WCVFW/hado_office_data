import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const PolicyCheckingAdministration: React.FC = () => {
  const services = [
    {
      title: "Policy Checking Services",
      description:
        "Review policy documents for completeness and accuracy, ensure policies match proposals, record variances, report discrepancies to carriers, and request revisions to guarantee final documents are error-free.",
    },
    {
      title: "Policy Insights - Automation Platform",
      description:
        "Expedite policy checking with our automation-powered platform that integrates skilled professionals and technology to eliminate backlogs, mitigate errors, deliver policies faster, and minimize administration costs.",
    },
    {
      title: "Policy Administration Services",
      description:
        "Handle client adjustment requests, evaluate changes, check premium impact, issue insurance certificates, create quotes, verify quote/proposal/policy details, request loss runs, and review policy accounting history.",
    },
  ];

  const benefits = [
    "Highly skilled global team with 5+ years experience",
    "Cost-effective services with quick turnaround time",
    "Data security, privacy, and integrity are prioritized",
    "Strict confidentiality agreements in place",
    "Experience with Hacksoft, Nexsure, AMS 360, Salesforce, Bill.com",
    "Backup resources for uninterrupted service",
    "Support for diverse insurance verticals (Life, Health, Auto, P&C, Annuity, Liability)",
    "Customizable solutions to meet international standards",
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
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Nimble Insurance Policy Checking & Administration
        </h1>
        <p className="text-gray-700 text-lg">
          Streamline your policy checking and administration processes with expert support from Nimble Acuity.
        </p>
      </section>

      {/* Services Accordion */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Services</h2>
        <div className="space-y-4">
          {services.map((service, idx) => (
            <div key={idx} className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <button
                className="w-full flex justify-between items-center px-6 py-4 bg-blue-50 hover:bg-blue-100 focus:outline-none"
                onClick={() => toggleAccordion(idx)}
              >
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-blue-600 text-xl">{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && <div className="px-6 py-4 bg-white text-gray-700">{service.description}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-blue-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">Avail 1 WEEK FREE TRIAL</h3>
        <p className="text-gray-700 mb-6">Try our policy checking and administration services before you buy!</p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 transition">
          Get Started Now
        </button>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((item, idx) => (
            <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Nimble Policy Checking & Administration</h2>
        <p className="text-gray-700 mb-6">
          Let our experts manage policy checking and administration while you focus on core business operations.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PolicyCheckingAdministration;
