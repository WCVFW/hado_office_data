import React from "react";
import CCmainmenu from "../CCmainmenu";

const UpsellingCrossSelling: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Upselling & Cross-selling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Increase profits by up-selling and cross-selling your products/services to existing customers efficiently with Nimble Auity.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Up-selling and cross-selling are critical to maximizing revenue. Nimble Auity’s expert services reduce non-value-adding internal effort, freeing your core team to focus on high-priority work.
        </p>
        <p>
          Using DMAIC-based processes, we convert transactional interactions into validated revenue outcomes by aligning engagements with Voice of Customer (VoC) and Critical-to-Quality (CTQ) metrics.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Our Upselling Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Structured CTQ-based Upselling",
              desc: "Our agents use CTQ-mapped prompts to offer higher-value solutions aligned with customer usage patterns without pressuring the customer.",
            },
            {
              title: "B2B & B2C Upselling",
              desc: "Behavioral segmentation and VoC mapping help guide clients toward value-enhanced options, improving deal value by up to 28.6%.",
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Our Cross-selling Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Structured CTQ-based Cross-selling",
              desc: "We identify complementary product needs across your client base, increasing Customer Value Add (CVA) and continuity in product experience.",
            },
            {
              title: "B2B & B2C Cross-selling",
              desc: "Trained agents with excellent communication skills convince customers to buy related products/services that enhance the original purchase.",
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center max-w-6xl mx-auto">
          {[
            "Aerospace",
            "Defense",
            "Banking & Financial",
            "Consumer Goods & Services",
            "Customs Brokerage",
            "Education",
            "Energy & Utilities",
            "Healthcare",
            "Logistics",
            "Manufacturing",
            "Retail & e-Commerce",
            "Telecommunications",
          ].map((industry, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Benefits of Outsourcing to Nimble</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Eliminate intermediate supply chain management",
            "Reduce NVA load internally and reallocate resources",
            "Enhance customer trust and satisfaction",
            "Skilled professionals adept at cross-selling & up-selling",
            "State-of-the-art technology and backup support",
            "Adherence to strict audit and call center metrics",
            "ISO/IEC 27001:2022 certified, ensuring data security",
            "High-quality services at affordable prices",
            "Dedicated project manager as single point of contact",
            "Access to world-class infrastructure & tools",
          ].map((benefit, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Inbound Technical Help Desk Support",
              desc: "Nimble provided affordable inbound helpdesk services for a leading IT services company.",
            },
          ].map((story, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{story.title}</h3>
              <p className="text-gray-600 mt-2">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-indigo-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I'm impressed! Nimble Auity's team is meticulous and provides fantastic up-selling and cross-selling services."
          <footer className="mt-4 font-semibold">– Reservations Supervisor, Travel Website Company, CA</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Up-selling & Cross-selling to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Maximize revenue and customer loyalty with Nimble Auity’s professional call center services.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default UpsellingCrossSelling;
