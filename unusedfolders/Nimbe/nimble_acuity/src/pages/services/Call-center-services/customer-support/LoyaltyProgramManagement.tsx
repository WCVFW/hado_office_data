import React from "react";
import CCmainmenu from "../CCmainmenu";

const LoyaltyProgramManagement: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Loyalty Program Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Retain your existing clients and ensure business growth by outsourcing loyalty program management services for maximized profits starting at just $8 an hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Customer retention delivers statistically validated business outcomes that extend beyond transactional revenue. Enhanced loyalty supports long-term brand equity and operational continuity. By outsourcing loyalty program management, businesses gain Critical-to-Quality (CTQ) driven insights and apply data-backed strategies to reduce churn and increase customer lifetime value.
        </p>
        <p>
          Nimble Auity has been working with a range of companies – both big and small – for over 15 years to strengthen their relationship with their clients and garner trust and loyalty. We gain a deep understanding of each client’s business to align loyalty program management services with tailor-made strategies.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Loyalty Program Management Services We Offer
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Processing Forms",
              desc: "We provide forms processing services, converting hard data into electronic data using algorithms for handwritten and printed forms, ensuring accuracy and efficiency.",
            },
            {
              title: "Data Cleaning, Capturing, Verification",
              desc: "Our workflows align with the DMAIC lifecycle, validating CTQ attributes for accuracy and completeness, supporting segmentation and targeting strategies.",
            },
            {
              title: "Data and Workflow Management",
              desc: "We analyze buyer behavior patterns to target them effectively, building trust and loyalty while enabling informed decision-making.",
            },
            {
              title: "Data Updating and Maintenance",
              desc: "We validate updates, eliminate redundancies, and maintain database integrity to support loyalty cycles, reducing documentation errors by 30%.",
            },
            {
              title: "Media-Based Promotion and Marketing",
              desc: "Our strategies leverage CTQ insights from Voice of Customer (VoC) analysis, ensuring loyalty campaigns deliver measurable customer value.",
            },
            {
              title: "Customer Response Analysis and Reporting",
              desc: "We identify behavior trends linked to CTQ indicators, improving client retention by over 45% with standardized reporting and actionable insights.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Nimble Auity for Loyalty Program Management?
        </h2>
        <ul className="space-y-4 list-disc list-inside">
          <li>
            <strong>Cost-efficient Services:</strong> Optimized through Lean Six Sigma analysis, eliminating unnecessary steps and enhancing customer value.
          </li>
          <li>
            <strong>Complete Quality Assurance:</strong> Trusted by thousands of clients for quality-first loyalty management.
          </li>
          <li>
            <strong>ISO Certification:</strong> ISO:9001:2015 certified, adhering to global quality standards.
          </li>
          <li>
            <strong>Cutting-Edge Technology:</strong> Leveraging the latest tools and software for accuracy and precision.
          </li>
          <li>
            <strong>Quick TAT:</strong> Efficient project planning ensures quick delivery with satisfaction guaranteed.
          </li>
          <li>
            <strong>Complete Transparency:</strong> Clear communication on costs, processes, and updates.
          </li>
          <li>
            <strong>24/7 Assistance:</strong> Always available via email, calls, or our website.
          </li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Case Study on Call Quality Monitoring for a Tech Firm",
              desc: "Call monitoring services were provided to a US-based tech firm. The client’s in-house calls were monitored with precision and they were delighted with the outcome.",
            },
            {
              title: "Case Study on Ticketing and Email Support Services",
              desc: "Helped a leading home furnishing product manufacturer streamline workflow with efficient ticketing and email support.",
            },
          ].map((caseStudy, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600">{caseStudy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700">
          “Nimble Auity will have a positive effect on any company’s turnover I do not doubt that.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">
          – Marketing Director, Spray Foam Insulation Company, UK
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Loyalty Program Management Services
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Outsourcing loyalty program management is a crucial decision for sustained business success. Partner with Nimble Auity for reliable, transparent, and results-driven services.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LoyaltyProgramManagement;