import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2CColdCalling: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble B2C Cold Calling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Improve your prospect-to-sale ratio with B2C cold calling services, powered by customer persona segmentation.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Ineffective B2C cold calling often stems from poor Voice of the Customer (VoC) segmentation, generic scripts, and misaligned CTQs. Nimble resolves these through structured outreach, personalized engagement, and measurable conversion optimization.
        </p>
        <p>
          Our highly skilled super agents generate leads, run email campaigns, develop niche calling scripts, pitch introductory sales, and engage prospects based on their convenience.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">B2C Cold Calling Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Lead Nurturing Services",
              desc: "Structured workflows using DMAIC optimize Marketing Qualified Leads (MQLs) into Sales Qualified Leads (SQLs) via CTQ-aligned messaging."
            },
            {
              title: "Lead Qualification Services",
              desc: "We identify potential buyers based on responses, engaging decision-makers on their schedule to maximize prospect-to-sales conversion."
            },
            {
              title: "Lead Generation Services",
              desc: "Predictive segmentation models and real-time dashboards guide campaigns, optimizing response, opt-in, and engagement rates."
            },
            {
              title: "B2C Lead Appointment Setting",
              desc: "Persona-driven filters and Poka-Yoke triggers ensure no qualified lead is missed during the appointment scheduling process."
            },
            {
              title: "Telemarketing & Outbound Sales",
              desc: "Trained agents boost your sales campaigns and act as an extension of your sales team for maximum reach and conversions."
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
        <h2 className="text-2xl font-bold text-center mb-8">Our B2C Cold Calling Process</h2>
        {[
          {
            step: "01. Requirement Gathering",
            desc: "Understand exact requirements and sign the contract to kick-start the project."
          },
          {
            step: "02. Evaluation of Customer List",
            desc: "Sort and prioritize potential prospects for efficient outreach."
          },
          {
            step: "03. Creation of Script & Sales Collateral",
            desc: "Develop extensive scripts and FAQs for agents to engage customers effectively."
          },
          {
            step: "04. Initiate Cold Call",
            desc: "Agents deliver opening pitch, gather info, investigate needs, and pass qualified leads to sales team."
          },
          {
            step: "05. Creation of B2C Cold Calling Report",
            desc: "Provide weekly/monthly reports to identify gaps and optimize campaigns."
          },
        ].map((process, idx) => (
          <div key={idx} className="mb-6 p-6 bg-gray-50 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">{process.step}</h3>
            <p className="text-gray-700">{process.desc}</p>
          </div>
        ))}
      </section>

      {/* Industries Served */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Industries We Cater To</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {[
            "Aerospace", "Agriculture", "Automotive", "Chemical", "Defense/Arm",
            "Education", "Energy", "Entertainment", "Finance", "Fishing/Timber",
            "Food", "Healthcare", "Hospitality", "IT", "Logistics",
            "Manufacturing", "Mass", "Multimedia", "Public Sector/Govt", "Pharmaceutical",
            "Retail & eCommerce", "Telecommunications", "Transport"
          ].map((industry, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {["HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"].map((tool, idx) => (
            <span key={idx} className="px-4 py-2 bg-purple-100 rounded-full">{tool}</span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble B2C Cold Calling?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "100% Information Security with ISO/IEC 27001:2022 certified processes",
            "State-of-the-art infrastructure and modern technology",
            "High-quality prospects to reduce cost per lead",
            "Multilingual language support for global outreach",
            "Bilingual resources for wider audience reach",
            "Detailed monthly cold calling reports",
            "Ease of scalability for changing business needs",
            "Flexible pricing options based on volume and industry"
          ].map((reason, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Cold Calling Services", 
            "B2C Lead Generation Services", 
            "B2C Appointment Setting Services", 
            "B2C Telemarketing Services"
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-purple-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonial</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I personally recommend the services of Nimble Auity Solutions for effective outbound communication campaigns."
          <footer className="mt-4 font-semibold">– Operations Specialist, Scientific Innovations Company, Korea</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-pink-600 to-purple-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource B2C Cold Calling to Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Streamline your B2C engagements with cold calling campaigns governed by Lean Six Sigma principles. Every interaction is tracked and optimized against VoC-aligned CTQs for maximum conversions.
        </p>
        <button className="bg-white text-pink-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default B2CColdCalling;
