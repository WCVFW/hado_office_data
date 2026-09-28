import React from "react";
import CCmainmenu from "../CCmainmenu";

const ColdCallingServices: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Nimble Cold Calling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Transform cold leads into validated sales appointments with Nimble Auity’s expert cold calling services.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg leading-relaxed">
        <p className="mb-6">
          Today's competitive market requires proactive engagement. Nimble Auity’s cold calling services establish direct contact with potential clients, convert interest into action, and drive pipeline velocity.
        </p>
        <p>
          We leverage VoC-to-CTQ scripting to build trust, capture market data, and deliver appointment setting services, allowing your sales team to focus on closing deals.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Our Cold Calling Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Cold Calling Lead Generation",
              desc: "Identify and engage potential leads, freeing your resources to focus on other critical sectors."
            },
            {
              title: "B2B Cold Calling Services",
              desc: "Connect with decision-makers to generate leads and guide them down your sales funnel."
            },
            {
              title: "B2C Cold Calling Services",
              desc: "Personalized strategies for connecting with individual consumers effectively."
            },
            {
              title: "Prospecting Services",
              desc: "Create a robust pipeline by strategically identifying potential clients."
            },
            {
              title: "Appointment Setting",
              desc: "Ensure your sales team has a constant stream of qualified prospects."
            },
            {
              title: "Customer Surveys",
              desc: "Gather actionable insights to refine your offerings through structured cold calling."
            },
            {
              title: "Product Promotion",
              desc: "Generate awareness and interest in your products/services with persuasive outreach."
            },
            {
              title: "Follow-up Calls",
              desc: "Nurture potential leads to maximize conversion opportunities."
            },
            {
              title: "Direct Sales",
              desc: "Focused cold calls to connect with previously overlooked prospects."
            },
            {
              title: "Market Research",
              desc: "Gain insights into consumer behavior and market trends via calls."
            },
            {
              title: "Lead Qualification Services",
              desc: "Authenticate leads so your sales team focuses on high-potential prospects."
            },
            {
              title: "Lead Development & Nurturing",
              desc: "Regular touchpoints to keep your brand top-of-mind for prospects."
            },
            {
              title: "Cold Calling Virtual Assistants",
              desc: "Streamlined support from trained global virtual assistants."
            },
            {
              title: "Outbound Sales",
              desc: "Generate interest and drive sales via structured cold calls."
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
        <h2 className="text-2xl font-bold text-center mb-6">Our Proven Cold Calling Process</h2>
        <ul className="list-decimal list-inside space-y-2 text-lg text-gray-700">
          {[
            "Research and identify the target audience",
            "Develop persuasive calling scripts",
            "Initiate cold calls and engage prospects",
            "Qualify and nurture leads",
            "Follow-up and track progress"
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ul>
      </section>

      {/* Industries Section */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-8">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center max-w-6xl mx-auto">
          {[
            "Real Estate",
            "Insurance",
            "Education",
            "Healthcare",
            "Small Business",
            "Banking & Finance",
            "Automotive",
            "Financial & Accounting Services",
            "Legal Services",
            "Manufacturers & Distributors",
            "Education & Training Providers",
          ].map((industry, idx) => (
            <div key={idx} className="p-4 bg-gray-100 rounded-xl shadow hover:shadow-md transition">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose Nimble Auity Cold Calling Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Top-notch call quality with DMAIC-optimized scripts",
            "Secure and confidential data handling, TCPA/GDPR compliant",
            "Regularly updated, compelling calling scripts",
            "Experienced agents across industries",
            "Flexible pricing models linked to outcomes",
            "Streamlined support via cold calling virtual assistants",
            "B2B and B2C lead generation expertise",
            "Appointment setting for warm, qualified leads",
            "Comprehensive market research insights",
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
              title: "Lead Verification for Medical Supplies Company",
              desc: "Nimble provided cold calling and appointment setting services for a US-based entrepreneur, delivering transparent and reliable results."
            },
            {
              title: "Cold Calling Services for Brazilian Cosmetics Firm",
              desc: "Customized telemarketing support to help a global brand expand its customer base and sales pipeline."
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
      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-2xl font-bold text-center mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow text-center italic text-gray-700">
          "We utilize Nimble Auity to reach out to clients and pre-screen prospects. Their team is extremely responsive and makes the process seamless."
          <footer className="mt-4 font-semibold">– President, Medicare Insurance Company, US</footer>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-700 to-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Outsource Cold Calling to Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Replace inefficiency with validated sales outcomes. Partner with Nimble Auity to improve outreach efficiency, reduce lead leakage, and convert interest into revenue.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
};

export default ColdCallingServices;
