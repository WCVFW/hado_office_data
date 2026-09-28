import React from "react";
import CCmainmenu from "../CCmainmenu";

const InsuranceTelemarketingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Insurance Telemarketing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Nimble Acuity's insurance telemarketing services are designed to help LSPs create meaningful conversations that impact your bottom line.
        </p>
        <p className="mt-4 text-lg">Starting at $10/hour</p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Reduce your insurance telemarketing expenses without sacrificing productivity. By outsourcing to Nimble, you can eliminate Non-Value-Adding (NVA) tasks, reduce costs, and increase agent efficiency. Our DMAIC-optimized telemarketing processes provide customized solutions that ensure statistically validated improvements through higher lead conversion and reduced operational drag.
        </p>
        <p>
          A robust sales force and well-developed lead generation program are essential for insurance companies. Nimble Acuity has 25+ years of experience delivering telemarketing services that maximize ROI while enhancing customer engagement.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Insurance Telemarketing Services We Offer</h2>
        <ul className="max-w-4xl mx-auto space-y-4 list-disc list-inside text-gray-700 text-lg">
          <li>Do-not-call compliance with regulations</li>
          <li>Conformity to telemarketing standards</li>
          <li>Non-ATDS solution for wireless telephone calls</li>
          <li>Personnel script and training experts</li>
          <li>Agency-based dynamic scripting</li>
          <li>Data transfer and reporting to your team daily</li>
          <li>Customized training for agents to sound like agency representatives</li>
          <li>Call monitoring to ensure maximum customer experience</li>
        </ul>
      </section>

      {/* Telemarketing Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Insurance Telemarketing Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              step: "01. Team Meet",
              desc: "From day one till project handoff, we guide your team and manage the campaign efficiently."
            },
            {
              step: "02. Devising the Strategy",
              desc: "Integrate dashboards into your lead management system for flawless handoff between telemarketers, insurers, and agents."
            },
            {
              step: "03. Contact Prospecting",
              desc: "Routing and live calls ensure warm leads are connected to your representatives with a smooth introduction."
            },
            {
              step: "04. Training and Support",
              desc: "We provide training to your teams for handling calls with high customer retention rates."
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You May Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {["Telemarketing Services","Lead Generation Services","Customer Support Services","Virtual Assistant Services"].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">{service}</div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble Acuity for Insurance Telemarketing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable Prices and Plans: Competitive costs to fit your business volume and budget.",
            "Latest Tools and Software: Advanced technologies, AI-powered applications, and analytics tools to transform your contact centers.",
            "Complete Data Security: Encrypted servers and strict data protection protocols to safeguard your information.",
            "Instant Access to Certified Experts: Highly skilled and thoroughly trained telemarketing professionals.",
            "Customized Services and Solutions: Tailored services to meet your company’s specific needs.",
            "Single Point of Contact: Dedicated project managers ensuring seamless communication and project tracking.",
            "Quick Service Delivery: Timely execution via worldwide delivery centers.",
            "24/7 Help & Support: Round-the-clock assistance for all queries and concerns."
          ].map((adv, idx) => (
            <div key={idx} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">{adv}</div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Client Success Stories</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">IT Support to UK Motorcycle Insurance Company</h3>
            <p>Nimble Acuity provided level 1 and level 2 services to a UK-based motorcycle insurance firm, increasing service levels from 30% to 90%.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">Inbound Technical Support for Leading IT Services Company</h3>
            <p>Nimble Acuity resolved in-depth technical concerns for a global IT services company, streamlining their inbound support operations.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "With Nimble Acuity we found a reliable partner who quickly handled first-level support for our 10,000+ users. The integration worked seamlessly to everyone's satisfaction."
          <footer className="mt-4 font-semibold">– Project Manager, Non-profit Healthcare Organization</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 to-blue-500 text-white">
        <h2 className="text-3xl font-bold mb-4">Stop Losing Valuable Leads</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Allow Nimble Acuity's telemarketers to handle your most time-consuming tasks and boost revenue with high-quality leads, optimized appointment setting, and customer success management.
        </p>
        <button className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default InsuranceTelemarketingPage;
