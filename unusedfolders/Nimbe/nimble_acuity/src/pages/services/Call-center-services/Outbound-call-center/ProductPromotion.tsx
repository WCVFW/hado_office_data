import React from "react";
import CCmainmenu from "../CCmainmenu";

const ProductPromotion: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Product Promotion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Drive awareness and increase sales opportunities with Nimble Auity’s expert product promotion solutions at rates starting at $8/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Struggling to achieve marketing goals? Nimble Auity’s product promotion services use smart technologies and automation to amplify your product’s visibility and generate sales opportunities.
        </p>
        <p>
          We provide robust strategies that help small and large businesses reach target audiences, boost engagement, and increase revenue.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Product Promotion Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Brand/Product Hotlines",
              desc: "We schedule appointments with prospects, identify suitable products, and highlight benefits to encourage repeat orders.",
            },
            {
              title: "Product Advisory Notices Services",
              desc: "Our consultants analyze market trends, demand, and sustainability to create impactful promotion strategies.",
            },
            {
              title: "Outcome Research",
              desc: "We assess ongoing promotions to provide insights that enhance product outreach and campaign effectiveness.",
            },
            {
              title: "Product Recall Management",
              desc: "We manage recalls efficiently, assessing risk and offering solutions without financial strain.",
            },
            {
              title: "Line Extension Introductions",
              desc: "We deliver customer experiences that match or surpass your in-house operations, freeing your resources for product portfolio growth.",
            },
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Catered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {[
            "Aerospace & Defense",
            "Banking & Financial",
            "Customs Brokerage",
            "Education",
            "Healthcare",
            "Manufacturing",
            "Oil & Gas",
            "Public Sector / Government",
            "Telecommunications",
            "Software",
          ].map((industry, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Product Promotion Process */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Product Promotion Process
        </h2>
        <ol className="max-w-4xl mx-auto list-decimal list-inside space-y-4 text-lg">
          {[
            "Discuss with clients and understand their business challenges",
            "Design a product promotion plan based on marketing budget and target audience",
            "Identify talented marketers from our talent pool and provide project briefing",
            "Commence product promotion across multichannel",
            "Capture responses and create insights to optimize the reach",
            "Furnish detailed report on the calls converted",
          ].map((step, idx) => (
            <li key={idx} className="bg-white p-4 rounded-xl shadow">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">
          Other Services You May Benefit From
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Disaster Recovery Services",
            "Data Recovery Services",
            "Customer Follow-up Services",
            "Customer Satisfaction Surveys",
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">
          Why Choose Nimble Product Promotion Services?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Certified Service Provider (ISO 9001:2015)",
            "Affordable Product Promotion Services",
            "State-of-the-art Infrastructure",
            "ISMS Certified Data Management (ISO/IEC 27001:2022)",
            "High-quality Promotion Strategies",
            "Quick Turnaround Time",
            "Easily Scalable",
            "Expert Call Center Agents",
            "24/7 Availability",
          ].map((point, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "US Retail Giant - B2C Lead Generation",
              desc: "Nimble’s lead generation experts promoted new products and offers, converting prospects into loyal customers.",
            },
            {
              title: "UK Company - Mobile App Sales via Outbound Calling",
              desc: "Optimized sales and customer reach, boosting product awareness and sales performance.",
            },
          ].map((story, idx) => (
            <div key={idx} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg">{story.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{story.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-indigo-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "I am proud to personally recommend the services of Nimble Auity. They deploy effective outbound campaigns efficiently and quickly."
          <footer className="mt-4 font-semibold">– Operations Specialist, Scientific Innovations Company, Korea</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-700 to-indigo-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Product Promotion to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Boost awareness, engagement, and sales with Nimble Auity’s professional product promotion services.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ProductPromotion;
