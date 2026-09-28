import React from "react";
import CCmainmenu from "../CCmainmenu";

const OutboundLeadGeneration: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Acuity Outbound Lead Generation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get highly responsive leads that convert into sales. Leverage our
          outbound lead generation services to launch nurture and
          conversion-based campaigns that bring in high-quality leads.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto space-y-6">
        <p>
          Outbound lead generation presents structural challenges such as data
          inconsistency, lack of VoC (Voice of Customer) insights, and poor CTQ
          (Critical to Quality) alignment. Our standardized workflows address
          these by eliminating Non-Value Adding (NVA) steps and optimizing lead
          qualification processes for long-term conversion success.
        </p>
        <p>
          We understand the struggles that companies face when seeking to
          generate qualified leads, and we strive to deliver highly responsive
          leads to our clients. As a leading service provider for outbound lead
          generation, <b>Nimble Acuity</b> can be the one-stop-shop for all your
          requirements. We can provide you with the right leads for your
          business, help boost revenue, and also give your sales and marketing
          department a chance to focus on other critical activities.
        </p>
        <p>
          Choose a proactive approach to lead generation and brand awareness by
          partnering with us!
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Outbound Call Center Lead Generation Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Outbound B2B Lead Generation Services",
              desc: "Our targeted B2B lead generation approach includes prospect list creation, personalized outreach message crafting, and follow-ups with potential clients.",
            },
            {
              title: "Outbound Lead Generation for Service Based Companies",
              desc: "We help service-based companies generate new leads by creating targeted lists of potential customers and highlighting the company's unique selling points.",
            },
            {
              title: "Outbound Lead Generation for B2B SaaS Companies",
              desc: "Our services help B2B SaaS companies identify potential customers who can benefit from their software and generate new leads through customized outreach plans.",
            },
            {
              title: "Outbound Lead Generation for Small Businesses",
              desc: "Small businesses and startups often have limited resources. With our targeted campaigns, they can easily identify and connect with prospects.",
            },
            {
              title: "Outbound B2C Lead Generation Services",
              desc: "Our services let B2C companies identify and connect with the target audience most likely to purchase their product or services.",
            },
            {
              title: "Outbound Lead Generation for IT Companies",
              desc: "Our services, including B2B lead generation, appointment setting, and cold calling, help IT companies identify and connect with prospective clients.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Outbound Lead Generation Process
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          {[
            {
              step: "01. Requirement Analysis",
              desc: "Our project manager analyzes and assigns a special team to work with the client depending on volume, customer needs, and deadlines.",
            },
            {
              step: "02. Strategy Implementation",
              desc: "We execute strategies under the DMAIC lifecycle, ensuring CTQ alignment and applying root cause techniques to refine lead acquisition.",
            },
            {
              step: "03. Quality Analysis & Transfer",
              desc: "Our team monitors lead quality and ensures qualified leads are directed to clients promptly.",
            },
            {
              step: "04. Feedback Incorporation",
              desc: "We apply continuous improvement loops based on VoC feedback, eliminating NVA steps. A redesign using DMAIC delivered a 32.2% reduction in cycle time.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6">
              <h3 className="font-bold text-lg mb-2">{item.step}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity as Your Outbound Lead Generation Company?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            "ISO 9001:2015 Certification – Quality assured services.",
            "Best Infrastructure – Latest tools and technology.",
            "Information Security – ISO/IEC 27001:2022 certified.",
            "24/7 Availability – Round-the-clock support.",
            "Experienced Call Center Agents – Persuasive and skilled.",
            "Fast Turnaround Time – Global delivery centers ensure agility.",
            "Easy Scalability – Expand services as needed.",
            "Single Contact Point – Dedicated project manager.",
            "Reasonable Pricing – Cost-effective solutions.",
          ].map((point, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 bg-gray-50 rounded-xl p-4 shadow"
            >
              <span className="text-blue-600 font-bold">✔</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Customer Testimonials
        </h2>
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="italic text-lg">
            "The team at Nimble Acuity have provided excellent support and always
            delivered an extra mile in their efforts. Right from the outset, it
            has been a great experience to work with the Nimble team."
          </p>
          <p className="font-semibold">- Co-Founder, Tech-startup (UK)</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Partner with Nimble Acuity Today!
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          If you are seeking a lead generation partner who delivers measurable
          results, our team is ready to help. We implement outbound strategies
          based on VoC to CTQ alignment and eliminate NVA delays across your
          lead funnel.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default OutboundLeadGeneration;
