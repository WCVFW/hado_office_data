import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2BColdCalling: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-green-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble B2B Cold Calling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Leverage high-tech infrastructure, skilled professionals, and advanced telecommunication software to nurture high-quality leads.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Prospect objections like “I’m not interested” often indicate deeper misalignment between messaging and client CTQs (Critical to Quality attributes). Nimble identifies these friction points using root cause analysis and restructures your B2B cold calling flow for improved conversions.
        </p>
        <p>
          Using DMAIC-structured strategies, we systematically identify, qualify, and engage prospects while eliminating inefficiencies, maximizing Client Value Add (CVA) at every interaction.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">B2B Cold Calling Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "B2B Telemarketing Services",
              desc: "Agents use standardized scripts refined via Voice of the Customer (VoC) inputs and continuous A/B testing to improve conversion metrics."
            },
            {
              title: "Cold Canvassing Services",
              desc: "Target prospective clients across territories for geo-targeting campaigns, closing quality deals efficiently."
            },
            {
              title: "B2B Lead Qualification",
              desc: "We identify and qualify the maximum number of leads using proven analytics and strategies."
            },
            {
              title: "B2B Lead Support",
              desc: "Our telemarketers provide complete lead support from acquisition to closure to avoid disqualification."
            },
            {
              title: "B2B Cold Calling Reporting",
              desc: "Detailed reports and insights help optimize processes and provide a superior customer experience."
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Industries We Cater To</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {[
            "Real Estate", "Insurance", "Manufacturing", "Aerospace & Defense",
            "Banking & Financial Services", "Energy & Utilities", "E-Commerce",
            "Public Sector/Government", "Healthcare", "Logistics"
          ].map((industry, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition">{industry} Cold Calling</div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6">Call Center Software We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {["HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"].map((tool, idx) => (
            <span key={idx} className="px-4 py-2 bg-green-100 rounded-full">{tool}</span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble B2B Cold Calling?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable Cold Calling Services tied to CTQ outcomes",
            "World-class Infrastructure and uninterrupted network",
            "Transparent Operations and accountable processes",
            "Multilingual Call Center Agents for higher conversions",
            "Latest integrated software with analytics modules",
            "ISO/IEC 27001:2022 ISMS Certified for complete data security",
            "Quick Turnaround with distributed teams",
            "Easily Scalable according to volume needs",
            "Experienced Team of Telemarketers",
            "24/7 Availability with dedicated Project Manager"
          ].map((reason, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">Additional Services for Customer Engagement</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Cold Calling Services", 
            "B2B Lead Generation", 
            "B2B Appointment Setting", 
            "B2B Telesales Services"
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonial</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "We only use Nimble Auity for marketing purposes due to their extremely high levels of professionalism and clear communication."
          <footer className="mt-4 font-semibold">– Marketing Director, Spray Foam Insulation Company, UK</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 to-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">Outsource B2B Cold Calling to Nimble Auity</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Experience zero operational drift and measurable returns with our skilled, certified, and experienced agents. Our B2B cold calling services consistently deliver validated improvements in lead qualification, conversion rates, and time-to-engagement.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default B2BColdCalling;
