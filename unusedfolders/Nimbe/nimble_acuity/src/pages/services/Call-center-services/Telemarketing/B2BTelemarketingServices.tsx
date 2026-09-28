import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2BTelemarketingServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          B2B Telemarketing Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Engage prospects and convert leads effectively with our personalized B2B telemarketing services.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Struggling to convert B2B leads despite training your telemarketers? Our DMAIC-governed B2B telemarketing services help identify root causes of lead loss, implement BANT-driven qualification models, and deliver validated improvements across the conversion lifecycle.
        </p>
        <p>
          With structured workflows, AI-enhanced scripting, and CVA-BVA-NVA mapping, we help you build awareness, engage ideal customers, and achieve higher-quality leads—resulting in improved call quality and enhanced business outcomes.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Our B2B Telemarketing Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "List Building",
              desc: "We build ICP-aligned lists with structured discovery and validation workflows, ensuring zero NVA contacts."
            },
            {
              title: "Database Enrichment",
              desc: "Collecting and verifying data from multiple sources to deliver accurate, error-free lead information."
            },
            {
              title: "Inside Sales",
              desc: "BANT-based lead scoring and DMAIC-structured workflows to generate CRM-ready conversions."
            },
            {
              title: "Appointment Setting",
              desc: "Lean-optimized handoffs convert qualified prospects into sales-ready appointments, reducing no-show rates."
            }
          ].map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6">Other Services You May Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center text-gray-700 font-medium">
          {["Cold Calling Services","Customer Support Services","Virtual Assistant Services","Teleprospecting Services"].map((service, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl shadow hover:shadow-md transition">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose O2I for B2B Telemarketing?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Competitive Pricing Options: Tailor your payment and talent selection according to your business needs.",
            "High Accuracy & Quality: Lean QA scorecards ensure consistent, traceable performance.",
            "Telemarketing Infrastructure: CRM-integrated dialers, AI-enhanced call intelligence, and dashboards to maximize throughput.",
            "Operational Transparency & Data Security: Full process visibility with strict data protection measures.",
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
            <h3 className="font-semibold text-lg mb-2">Appointment Setting for a Mortgage Lender</h3>
            <p>We funneled warm leads to the client's in-house sales team with professional appointment setting services.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">US-based Mortgage Client Appointment Setting</h3>
            <p>Our team successfully supported appointment setting services for mortgage clients, improving lead engagement and conversions.</p>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-12 px-6 bg-gray-50">
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "We would like to appreciate your good work and the endless hours of service that you have dedicated to our company."
          <footer className="mt-4 font-semibold">– Executive Team, Medical Coaching Institute</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-500 text-white">
        <h2 className="text-3xl font-bold mb-4">Maximize Reach and Drive Growth</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Catalyze your B2B telemarketing efforts with precision targeting, warm-up prospects, and scalable on-demand services.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default B2BTelemarketingServices;
