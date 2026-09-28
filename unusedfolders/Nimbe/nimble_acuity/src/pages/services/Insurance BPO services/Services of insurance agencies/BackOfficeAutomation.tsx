import React from "react";
import Imainmenu from "../Imainmenu";

const BackOfficeAutomation: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Back-Office Automation for Insurance
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Offshore Back-Office Automation Services for Insurance companies.
          We leverage RPA and AI-based automation to streamline back-office
          tasks and boost efficiency.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6 text-lg">
        <p>
          Are you investing too much time and resources in paperwork and
          complicated workflows? This is a common challenge for large insurance
          carriers. Simple tasks like quotation requests may end up triggering
          long processes across multiple systems.
        </p>
        <p>
          Save time and cut costs through insurance back-office automation. Bring
          back your team’s focus on core business functions by outsourcing
          intelligent process automation to Nimble Acuity. We provide RPA for
          insurance companies in 160+ countries.
        </p>
        <p>
          We collaborate with your in-house team to understand your specific
          challenges and deliver customized automation solutions. Reach out to us
          today!
        </p>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">
          Our Back-Office Automation for Insurance Companies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "RPA For Claims Processing",
              desc: "On-time claims processing is document-intensive. With automation, you can process claims 75% faster with minimal manual intervention."
            },
            {
              title: "AI-Powered Underwriting Process",
              desc: "Bots fill data fields, analyze customer history, provide pricing options, and flag fraud risks, speeding up underwriting."
            },
            {
              title: "RPA Controlled Regulatory Compliance",
              desc: "High record volumes make compliance tricky. Intelligent automation eliminates regulatory breaches due to human errors."
            },
            {
              title: "Intelligent Automation for Policy Cancellation",
              desc: "AI reduces policy cancellation time by two-thirds by streamlining data across emails, CRMs, and spreadsheets."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Other Applications */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            Other Applications for Insurance RPA
          </h3>
          <ul className="list-disc list-inside grid md:grid-cols-2 gap-x-8 gap-y-2 text-gray-700">
            <li>Business continuity and disaster recovery</li>
            <li>Customer due diligence (CDD)</li>
            <li>File transfers</li>
            <li>Risk, compliance, and audit analysis</li>
            <li>Insurance planning and reporting</li>
            <li>Customer account reconciliation</li>
            <li>Data validation</li>
            <li>Operational insurance and accounting</li>
          </ul>
        </div>
      </section>

      {/* Other Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Insurance Data Entry",
            "Insurance Reporting Services",
            "Document Indexing Services",
            "Insurance BPO Customer Support"
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Nimble Back-Office Automation to Nimble Acuity?
        </h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-3 text-lg text-gray-700">
          <li>
            <strong>Skilled Resources:</strong> Certified experts handle policy
            checking and administration requests.
          </li>
          <li>
            <strong>Quick Turnaround:</strong> Operates from 10+ global delivery
            centers for time zone advantage.
          </li>
          <li>
            <strong>Data Security:</strong> ISO-certified with NDA agreements
            ensuring complete data protection.
          </li>
          <li>
            <strong>Cost-Effective Pricing:</strong> Affordable rates starting
            at $8/hour.
          </li>
          <li>
            <strong>24/7 Services:</strong> Round-the-clock customer support for
            emergencies.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “We enjoy working with Nimble Acuity and find the entire team very
          responsive and detail-oriented when it comes to following our policy
          checking instructions and identifying new forms.”
        </blockquote>
        <p className="mt-4 font-medium">
          – Partner, Risk Management & Property & Casualty Insurance Brokerage,
          PA, USA
        </p>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-6">Customer Success Stories</h2>
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Insurance Policy Checking – NY
            </h3>
            <p>
              Provided back-office support to a NY-based risk insurance agent,
              boosting profit by 22%.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold">
              Back-office Operations – Health Insurance Company
            </h3>
            <p>
              Optimized workflows for a renowned health insurance firm, enabling
              record-breaking operational speed.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Back-Office Automation Services for Insurance Companies
        </h2>
        <p className="mb-6 text-lg">
          Cut costs by 40% and increase efficiency by up to 75% with our RPA
          solutions.
        </p>
        <button className="bg-white text-blue-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default BackOfficeAutomation;
