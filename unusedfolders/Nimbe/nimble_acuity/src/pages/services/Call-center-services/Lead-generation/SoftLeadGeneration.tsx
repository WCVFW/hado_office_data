import React from "react";
import CCmainmenu from "../CCmainmenu";

const SoftLeadGeneration: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Nimble Soft Lead Generation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          We provide up-front soft value propositions aligned with
          Voice-of-the-Customer (VoC) to Critical-to-Quality (CTQ) mapping,
          increasing lead conversion while minimizing costs.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          Non-value Add (NVA) procedures like manual contact verification are
          common for organizations, and they divert attention away from
          long-term conversion tactics. Nimble Acuity’s Lean Six Sigma (LSS)-led
          soft lead creation optimizes engagement workflows and removes such
          inefficiencies.
        </p>
        <p>
          At Nimble Acuity, we take great care of client needs by addressing lead
          generation issues through in-depth analysis and diagnosis of the lead
          engine. Using DMAIC (Define, Measure, Analyze, Improve, Control), we
          reduced cycle time in a recent optimization project by{" "}
          <strong>32.2%</strong>.
        </p>
        <p>
          With over 25+ years of service excellence, our pragmatic approach
          shrinks workload, cost, and complexity in soft lead generation. Today,
          we are recognized as a top provider of reliable soft lead generation
          services in India.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Soft Lead Generation Services We Offer
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Email Soft Lead Generation",
              desc: "We send personalized marketing emails and event-triggered emails to educate leads without high-pressure commitments.",
            },
            {
              title: "Voice Lead Generation",
              desc: "We make segmented lists and perform voice calls to maximize conversions after email introductions and follow-ups.",
            },
            {
              title: "Soft Lead Generation via Social Channel",
              desc: "We reach leads through social channels where they are most active and follow-up with emails when needed.",
            },
            {
              title: "Soft Lead Generation by Chat Stream",
              desc: "Using Poka-Yoke controls, our chat engagement ensures responsiveness and accurate handoff, reducing sales transition errors by 30%.",
            },
            {
              title: "Soft Lead Generation by Website",
              desc: "We design custom CTA banner ads that move prospects from landing pages to product/service subscriptions.",
            },
            {
              title: "Soft Lead Generation via Webinar",
              desc: "We promote webinars, manage invites, track satisfaction, and enhance post-event follow-ups.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our Soft Lead Generation Process
        </h2>
        <ol className="space-y-4 text-lg max-w-3xl mx-auto">
          <li>01 – Consult with your team to understand requirements</li>
          <li>02 – Collect and segment the lead list</li>
          <li>03 – Assign tasks to qualified agents</li>
          <li>04 – Run soft lead generation and provide value propositions</li>
          <li>05 – Follow up with leads and prepare them for sales teams</li>
          <li>06 – Compile detailed process reports</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Lead Generation for Startups",
            "Lead Generation for IT Companies",
            "Insurance Lead Generation",
            "Lead Generation for Education Sector",
          ].map((srv, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              {srv}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for Soft Lead Generation?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-lg">
          <li>✅ Cost-effective Services using Lean Six Sigma workflows</li>
          <li>✅ Rigorous Quality Control & follow-ups</li>
          <li>✅ State-of-the-art Call Center Technology</li>
          <li>✅ Experienced Team with 25+ years of expertise</li>
          <li>✅ Rapid Turnaround without delays</li>
          <li>✅ Client Confidentiality (strict NDAs)</li>
          <li>✅ 24/7 All-round Support</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold mb-3">
              Lead Generation for Management Company
            </h3>
            <p>
              Nimble Acuity provided high-quality and cost-effective
              telemarketing lead generation for a management platform
              development company.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold mb-3">
              Lead Generation for Web Development Firm
            </h3>
            <p>
              A leading web development firm trusted Nimble Acuity for reliable,
              cost-effective lead generation services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “I'm impressed! :) You ladies and gentlemen are doing fantastic work.
          Thank you so much!”
        </blockquote>
        <p className="mt-4 font-semibold">
          Reservations Supervisor, Travel Website Company, CA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Lead Generation?
        </h2>
        <p className="mb-6 text-lg">
          Partner with Nimble Acuity today for professional, reliable, and
          cost-effective soft lead generation services.
        </p>
        <button className="bg-white text-indigo-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SoftLeadGeneration;
