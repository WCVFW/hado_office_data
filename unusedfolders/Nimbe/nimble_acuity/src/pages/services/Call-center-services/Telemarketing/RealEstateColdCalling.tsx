import React from "react";
import CCmainmenu from "../CCmainmenu";

const RealEstateColdCalling: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Proactive Real Estate Cold Calling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Expand your market reach! Harness technically advanced cold calling services for quality leads, expanded reach, and enhanced profitability.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Real estate businesses face unique challenges in acquiring and converting leads. Nimble Auity’s real estate cold calling services offer a cost-effective and efficient solution, reducing operational costs while ensuring no potential lead slips through the cracks.
        </p>
        <p>
          Our services integrate Voice of the Customer (VoC) inputs with Critical to Quality (CTQ) metrics, providing specialized cold calling that navigates the complexities of commercial and residential property markets.
        </p>
        <p className="mt-4">
          We leverage advanced software like Zendesk, Dixa, Salesforce, and Avaya to provide stellar aftersales service, follow-ups, and CRM integration.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Real Estate Cold Calling Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Prospect Qualification", desc: "Qualify leads using advanced data analysis to ensure your sales team focuses on high-potential prospects." },
            { title: "Appointment Setting", desc: "Schedule appointments efficiently using integrated calendar tools, optimizing your team's productivity." },
            { title: "Follow-up Calls", desc: "Systematic follow-ups maintain engagement, foster loyalty, and enhance sales opportunities." },
            { title: "Script Development", desc: "Tailored scripts based on competitor analysis, market research, and A/B testing to resonate with your audience." },
            { title: "Post-Call Activities", desc: "Update CRM, send follow-ups, and automate tasks to ensure efficiency and accuracy." },
            { title: "Market Research", desc: "Comprehensive market insights to refine strategies and understand customer behavior." },
            { title: "Reporting and Analysis", desc: "Visualized reporting to support data-driven decisions and track success metrics." },
            { title: "Customer Support", desc: "AI-assisted support for 24/7 assistance, providing positive customer experiences." },
            { title: "Telemarketing Services", desc: "Generate leads, increase sales, and maintain customer loyalty through persuasive outreach." },
            { title: "List Building Services", desc: "Targeted segmentation and pitching of property listings to qualified prospects." },
            { title: "Sale & Lease Recommendations", desc: "Data-driven insights for strategic decisions on property sales and leases." },
            { title: "Lead Qualification", desc: "AI/ML scoring ensures sales teams focus on promising prospects." },
            { title: "Teleprospecting Services", desc: "Multi-channel outreach to expand your customer base." },
            { title: "Customer Acquisition", desc: "Optimize every step of the sales funnel for maximum conversion." },
            { title: "Compliance Assurance", desc: "Ensure adherence to relevant regulations to protect your brand." },
            { title: "Back Office Support", desc: "Administrative support from data entry to invoice processing." },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Procedure Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Our Real Estate Cold Calling Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
          {[
            "Understanding Client Needs",
            "Creating a Process Blueprint",
            "Trial Run",
            "Task Allocation",
            "Incorporating Advanced Tools",
            "Performance Evaluation",
            "Process Improvement",
            "Documentation of the Procedure"
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Clients Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Clients Who Can Benefit</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center max-w-6xl mx-auto">
          {[
            "Real Estate Agents",
            "Real Estate Investors",
            "Property Wholesalers",
            "Brokers",
            "Property Management Companies",
            "Real Estate Marketing Agencies",
          ].map((client, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {client}
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-6">Call Center Tools We Use</h2>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 font-semibold">
          {["HubSpot", "Bitrix24", "Talkdesk", "Five9", "Zendesk", "Dixa", "Salesforce", "LiveAgent", "Avaya"].map((tool, idx) => (
            <span key={idx} className="px-4 py-2 bg-green-100 rounded-full">{tool}</span>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Benefits of Our Real Estate Call Center Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Cost-Efficient Lean-optimized resourcing",
            "Trained Lean Six Sigma Yellow Belt professionals",
            "Global 24/7 coverage",
            "Multitasking virtual assistants",
            "High-quality services with continuous checks",
            "Transparent pay-as-you-go pricing",
            "Hassle-free management of administrative tasks",
            "Timely deliverables ensuring competitive advantage"
          ].map((benefit, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "We experienced double-digit growth after partnering with Nimble Auity for real estate cold calling. Their professionalism is unmatched."
          <footer className="mt-4 font-semibold">– MD, Skincare Clinic, New Jersey, USA</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-700 to-green-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Real Estate Cold Calling to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Take your real estate business to new heights. Partner with Nimble Auity for top-tier cold calling services optimized for revenue, lead quality, and operational efficiency.
        </p>
        <button className="bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default RealEstateColdCalling;
