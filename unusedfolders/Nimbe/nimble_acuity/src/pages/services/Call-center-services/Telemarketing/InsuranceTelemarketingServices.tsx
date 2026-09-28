import React from "react";
import CCmainmenu from "../CCmainmenu";

const InsuranceTelemarketingServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Commercial Insurance Telemarketing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Drive validated lead conversions through outcome-focused insurance telemarketing optimized with Lean Six Sigma frameworks.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Insurance telemarketing involves complex prospecting cycles that can divert valuable resources. By outsourcing to Nimble Auity, insurers can eliminate non-value-adding steps, streamline workflows, and achieve faster, CTQ-driven lead generation outcomes. Our dedicated call center professionals ensure superior appointment setting, dynamic scripting, and standardized reporting for all your insurance telemarketing needs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Commercial Insurance Telemarketing Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Cold Calling Services",
              desc: "VoC-aligned scripts refined through DMAIC feedback loops for maximum lead engagement."
            },
            {
              title: "Database Cleansing",
              desc: "We reorganize and cleanse your database, enhancing its quality for telemarketing and sales teams."
            },
            {
              title: "Prospecting Services",
              desc: "Standardized workflows separate prospecting from core selling, reducing cycle time and improving efficiency."
            },
            {
              title: "Appointment Setting",
              desc: "CTQ-based qualification ensures high-quality appointments for your sales team."
            },
            {
              title: "Managing Inbound Leads",
              desc: "Efficient handling of inbound calls, queries, and lead generation to streamline your insurance operations."
            },
            {
              title: "Compiling and Collating Data",
              desc: "Structured LSS protocols validate and maintain complete, accurate datasets for decision-making."
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Related Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You May Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {["Cold Calling Services","Real Estate Cold Calling Services","B2B Cold Calling Services","Teleprospecting Services"].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Advantages of Outsourcing Insurance Telemarketing to Nimble Auity</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Saves Time: Streamlined sales cycles lead to faster results.",
            "Experienced Team: LSS Yellow Belt certified, industry-trained telemarketing professionals.",
            "Cost-effective Pricing: Tailored to your specific needs and budgets.",
            "DMAIC-driven approach ensuring measurable outcomes and process optimization.",
            "Standardized reporting for accountability and transparency.",
            "Enhanced lead quality for higher conversion rates.",
            "Strict confidentiality and data security following ISO/IEC 27001 standards."
          ].map((adv, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p>{adv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Call Quality Monitoring for a Leading Tech Firm</h3>
            <p>Moderate and robust call quality monitoring services improved operational efficiency and client satisfaction.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Live Video, Audio & Text Monitoring for a Major Internet Company in Singapore</h3>
            <p>Integrated backend monitoring reduced costs and improved productivity for the client.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "Nimble Auity will have a positive effect on any company's turnover. I do not doubt that."
          <footer className="mt-4 font-semibold">– Marketing Director, Insulation Company, UK</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource Commercial Insurance Telemarketing Services</h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 25+ years of experience and DMAIC-governed frameworks, Nimble ensures traceable, measurable, and CTQ-aligned telemarketing campaigns for insurance businesses.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default InsuranceTelemarketingServices;
