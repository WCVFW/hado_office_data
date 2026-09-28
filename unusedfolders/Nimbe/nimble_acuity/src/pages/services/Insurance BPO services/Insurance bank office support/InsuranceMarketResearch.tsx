import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceMarketResearches: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Insurance Prospect and Market Research
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Get access to independent market & prospect analysis, expert opinions,
          & real-time support from an experienced team of insurance experts{" "}
          <span className="font-semibold">starting at $8/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="mb-6">
          Are you struggling to survive in the insurance industry due to the
          lack of quality prospects and market research? Is your organization
          falling short of skilled resources and tools to cater to your
          insurance market research requirements? Then, the best option for your
          firm would be to Nimble insurance prospect and market research
          services to an experienced and skilled service provider.
        </p>
        <p>
          Nimble Acuity is one such provider that can be your one-stop-shop
          for all your insurance back-office needs. We leverage the best and
          latest market research tools to provide{" "}
          <span className="font-semibold">high-quality services</span> within a
          short turnaround time.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Insurance Prospect and Market Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Car and Motorcycle Insurance",
            "Title Insurance",
            "Risk Management",
            "Brokers and Agencies",
            "Homeowners Insurance",
            "Health and Medical Insurance",
            "Product Warranty and Liability Insurance",
            "Life Insurance and Annuities",
            "Property Casualty and Direct Insurance",
            "Workers Compensation Insurance",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              {service}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-blue-700">
            Avail 1 WEEK FREE TRIAL on any Service
          </p>
          <button className="mt-4 bg-blue-700 text-white px-6 py-3 rounded-2xl shadow hover:bg-blue-800">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Insurance Prospect and Market Research Process
        </h2>
        <ol className="space-y-6">
          {[
            {
              step: "01. Requirement Analysis",
              desc: "Understand client requirements in detail and define the problem.",
            },
            {
              step: "02. Research Plan",
              desc: "Develop a detailed plan tailored to the client’s challenges.",
            },
            {
              step: "03. Collect Relevant Information",
              desc: "Execute the plan and collect valid, verified, unbiased information.",
            },
            {
              step: "04. Analyze Data",
              desc: "Research analysts analyze information to derive actionable insights.",
            },
            {
              step: "05. Final Delivery",
              desc: "Create detailed reports, perform quality checks, and deliver the final output.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-md"
            >
              <h3 className="font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            "Insurance Reporting Services",
            "Insurance Analytics Services",
            "Insurance Software Development",
            "Business Process Management for Insurance",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-md"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="space-y-4 list-disc list-inside text-gray-700">
          <li>Flexible Pricing Options</li>
          <li>World-class Infrastructure</li>
          <li>Experienced Insurance Researchers</li>
          <li>Dedicated Project Manager (SPOC)</li>
          <li>Insurance Data Security (ISO/IEC 27001:2022 Certified)</li>
          <li>Scalable Solutions</li>
          <li>Multiple Delivery Locations</li>
          <li>24/7 Support</li>
          <li>High-quality, ISO Certified Services</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Back-office Operations for Miami-based Client",
              desc: "We provided cost-effective insurance back-office support for a well-known agency in Miami.",
            },
            {
              title: "Policy Checking Services for NY-based Provider",
              desc: "We delivered reliable policy checking services for a New York-based insurance service provider.",
            },
          ].map((story, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-3">{story.title}</h3>
              <p className="text-gray-600">{story.desc}</p>
              <button className="mt-4 text-blue-600 font-medium hover:underline">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nimble Insurance Prospect and Market Research to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Looking for a cost-effective insurance prospect and market research
          service provider? Get in touch with our team today!
        </p>
        <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default InsuranceMarketResearches;
