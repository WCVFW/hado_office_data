import React, { useState } from "react";
import Imainmenu from "../Imainmenu";

const RenewalExposureSummary: React.FC = () => {
  const services = [
    {
      title: "Advance Tracking of Renewals",
      description:
        "Stay ahead of the process with proactive tracking of possible policy changes before the renewal date, ensuring no surprises for your customers.",
    },
    {
      title: "Renewal Reminders & Summary Reports",
      description:
        "Collect vital data, generate renewal reminders, and prepare accurate exposure summaries for timely decision-making.",
    },
    {
      title: "Renewal Requests & Carrier Interaction",
      description:
        "Our team handles acceptance of renewal requests and maintains frequent interactions with carriers to ensure smooth processing.",
    },
    {
      title: "Consideration of All Adjustments",
      description:
        "We capture every adjustment in policies, no matter how small, for complete accuracy in future reporting and renewals.",
    },
  ];

  const benefits = [
    "Quick turnaround times (30 minutes to 4 hours)",
    "Compliance with industry standards and guidelines",
    "24/7 customer support availability",
    "Affordable pricing and overall cost reduction",
    "Enhanced quality and efficiency",
    "Multiple distribution channels for flexibility",
    "Secure data storage and processing",
    "Scalable solutions to support business growth",
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
          Nimble Insurance Renewal Exposure Summary Services
        </h1>
        <p className="text-gray-700 text-lg">
          Ensure accuracy and efficiency in policy renewals, claims, and premium
          calculations with Nimble Acuity’s expert support.
        </p>
      </section>

      {/* Services Accordion */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Our Renewal Summary Services
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
                <span className="font-semibold text-lg">{service.title}</span>
                <span className="text-blue-600 text-xl">
                  {openIndex === idx ? "▲" : "▼"}
                </span>
              </button>
              {openIndex === idx && (
                <div className="px-6 py-4 bg-white text-gray-700">
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-blue-50 py-8 rounded-lg shadow">
        <h3 className="text-2xl font-semibold mb-4">
          Avail 1 WEEK FREE TRIAL
        </h3>
        <p className="text-gray-700 mb-6">
          Try our renewal exposure summary services before you buy. Experience
          the accuracy and speed we deliver!
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 transition">
          Get Started Now
        </button>
      </section>

      {/* Benefits Section */}
      <section>
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-blue-600 pl-4 py-2 bg-blue-50 rounded"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nimble Renewal Exposure Summary Services
        </h2>
        <p className="text-gray-700 mb-6">
          With 26+ years of expertise, Nimble Acuity helps insurance agencies
          manage renewals efficiently, reduce risks, and enhance profitability.
        </p>
        <button className="px-8 py-4 font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-green-600 hover:from-green-600 hover:to-blue-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RenewalExposureSummary;
