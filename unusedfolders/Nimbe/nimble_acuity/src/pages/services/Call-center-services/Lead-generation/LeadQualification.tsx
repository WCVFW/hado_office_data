import React from "react";
import CCmainmenu from "../CCmainmenu";

const LeadQualification: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Lead Qualification Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Expand your lead volume with vetted leads that convert. Spend less time
          qualifying and more time converting with our lead qualification services.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
          Get a Free Quote
        </button>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-6">
          If rigid lead qualification methods are preventing your team from
          meeting sales targets, it may be time to transition to a process-aligned
          model. At <strong>Nimble Acuity</strong>, we implement a VoC-to-CTQ
          (Voice of the Customer to Critical to Quality) lead qualification
          framework to target the right prospects. This approach eliminates
          Non-Value Adding (NVA) screening delays and ensures validated improvement
          in conversion quality.
        </p>
        <p className="text-lg leading-relaxed">
          Businesses worldwide benefit from our multi-channel lead evaluation
          strategies that evolve with the changing market trends and varying
          product/service offerings. We help you narrow down leads with monetary
          potential and meet your criteria using our proprietary software and
          expertise.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Virtual Lead Qualification Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Lead Nurturing",
              desc: "Cultivate relationships with personalized content and CRM-powered nurturing."
            },
            {
              title: "Lead Response",
              desc: "Respond in real-time to queries with robust CRM platforms for higher conversions."
            },
            {
              title: "Lead Segmentation",
              desc: "CTQ-aligned segmentation driven by demographics, behavior, and signals."
            },
            {
              title: "Lead Verification",
              desc: "Error-proofing and validation to reduce qualification errors and improve accuracy."
            },
            {
              title: "Teleprospecting",
              desc: "Strategic communication to connect with potential customers and grow pipelines."
            },
            {
              title: "Sales Prospecting",
              desc: "DMAIC-driven qualification for measurable sales cycle reduction and retention gains."
            },
            {
              title: "Lead Re-Engagement",
              desc: "Reignite inactive leads with personalized outreach and past interaction insights."
            },
            {
              title: "Marketing Automation",
              desc: "Integrate email, social media, CRM, and analytics to automate and personalize."
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Approach to Qualify Leads
        </h2>
        <ol className="space-y-6">
          <li>
            <strong>01. Ideate:</strong> Conceptualize and develop a strategy
            tailored to client needs.
          </li>
          <li>
            <strong>02. Experiment:</strong> Run pilot campaigns to test
            effectiveness.
          </li>
          <li>
            <strong>03. Scale:</strong> Expand successful strategies to larger
            demographics.
          </li>
          <li>
            <strong>04. Optimize:</strong> Continually assess and refine for best
            results.
          </li>
        </ol>
      </section>

      {/* Industry-Specific */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customized Assistance for Specific Entities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "E-commerce Companies",
            "Financial Institutions",
            "Telecommunications Companies",
            "Software and IT Services",
            "Marketing Agencies",
            "Startups & Entrepreneurs",
            "Lead Generation Companies",
          ].map((industry, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{industry}</h3>
              <p className="text-gray-600 mt-2">
                Tailored lead qualification strategies to maximize ROI and growth.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble for Lead Qualification Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Flexible Pricing Options",
            "100% Information Security (ISO/IEC 27001:2022 certified)",
            "State-of-the-art Infrastructure",
            "High Quality Services",
            "Multilingual Language Support",
            "24/7 Availability",
            "Experienced Team with 26+ Years Cumulative Experience",
            "Detailed Monthly Reports",
            "Ease of Scalability",
          ].map((point, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-gray-700">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">
          Additional Services You Can Benefit From
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            "Appointment Setting Services",
            "Telemarketing Lead Generation Services",
            "B2B Lead Generation Services",
            "B2B Tele Sales Services",
          ].map((service, i) => (
            <li
              key={i}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center"
            >
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Customer Success Stories
        </h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Outbound Calling Process to Generate Leads for an IT
              Giant
            </h3>
            <p className="text-gray-600">
              Customized B2B nurturing campaign with outbound calls helped a
              US-based travel agency boost engagement and sales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="font-semibold mb-2">
              Nimble Provided Lead Verification for a Medical Supplies Company
            </h3>
            <p className="text-gray-600">
              Quick and reliable verification improved accuracy and conversion
              rates for a global medical supplies client.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
          <p className="italic text-gray-700 mb-4">
            "We were very satisfied with the quality of service Nimble Acuity
            provided. They were able to meet our requests with great professionalism
            and flexibility."
          </p>
          <p className="font-semibold">– Spokesperson, Online Health Lessons Company, Canada</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Outsource Lead Qualification to Enhance Lead Quality
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Providing streamlined, efficient, and analytics-driven lead qualification
          services, Nimble helps you transform every lead into a sales-ready
          prospect. Reach out today to boost your conversions.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default LeadQualification;
