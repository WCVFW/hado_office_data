import React from "react";
import CCmainmenu from "../CCmainmenu";

const TeleprospectingServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Teleprospecting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Hire expert teleprospecting professionals at just $8/hour to expand your business reach and increase client engagement.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Aligning Voice of the Customer (VoC) insights with prospecting to nurture existing accounts stretches your sales team’s bandwidth. Nimble’s Lean-optimized teleprospecting services help identify potential customers, understand their needs, and reduce operational overhead.
        </p>
        <p>
          Our agents strategically analyze potential clients and target those with purchasing intent, saving time, money, and effort while delivering measurable business outcomes.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Teleprospecting Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Lead Generation",
              desc: "360-degree teleprospecting solutions generate high-quality leads using expert agents, marketing automation, and cloud-based lead management."
            },
            {
              title: "Setting-Up Sales Appointments & Meetings",
              desc: "We fix appointments with your sales team for qualified leads, ensuring high conversion rates with transparent, compliant call tracking."
            },
            {
              title: "Prospect Database Management",
              desc: "Custom lists and segmentation, verification, and detailed profiling expand your market opportunities with a high-quality prospect database."
            },
            {
              title: "Market Research",
              desc: "We conduct in-depth market research for target markets, helping businesses strategize, identify pain points, and refine marketing approaches."
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Teleprospecting Process</h2>
        {[
          {
            step: "01. Need Analysis",
            desc: "VoC-to-CTQ mapping to understand prospecting requirements and align workflows to critical metrics."
          },
          {
            step: "02. Market Profiling",
            desc: "Custom target market profiling and prospect list creation, updated and cleansed regularly."
          },
          {
            step: "03. Pitching",
            desc: "Agents follow standardized scripts enhanced with Poka-Yoke techniques for consistency and compliance."
          },
          {
            step: "04. Lead Qualification",
            desc: "Statistical scoring models aligned with CTQ metrics identify high-intent leads accurately."
          },
          {
            step: "05. Lead Transferring",
            desc: "Hot leads are transferred via validated handoffs to reduce information loss and sales friction."
          },
        ].map((process, idx) => (
          <div key={idx} className="mb-6 p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{process.step}</h3>
            <p className="text-gray-700">{process.desc}</p>
          </div>
        ))}
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You May Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {[
            "Cold Calling Services",
            "B2B Cold Calling Services",
            "Real Estate Cold Calling Services",
            "B2C Cold Calling Services"
          ].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble for Teleprospecting?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Cutting-edge technology infrastructure with cloud-based lead management",
            "Highly-qualified teleprospectors with excellent communication skills",
            "Time and cost-effective outsourcing solution, 24/7 operations",
            "Global reach as an ISO 9001:2015 certified provider",
            "Better chances of lead conversion with expert agents and large database",
            "Strict confidentiality with ISO/IEC 27001:2022 compliance",
            "Single-point of contact for seamless project coordination"
          ].map((reason, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-green-50">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Outbound and Inbound Calling for a Top Software Provider</h3>
            <p>We provided inbound and outbound calling support, delivering measurable satisfaction and improved client engagement.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Outbound Calling for a Top Travel Agency</h3>
            <p>Our outbound calling services enhanced the client's business operations, resulting in positive client feedback.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I'm impressed! :) Nimble's team is doing fantastic work. Thank you so much!"
          <footer className="mt-4 font-semibold">– Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-teal-500 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource Teleprospecting Services to Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          With 25+ years of experience, ISO certifications, and a skilled team of teleprospectors, Nimble ensures high-quality lead generation and market expansion.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default TeleprospectingServices;
