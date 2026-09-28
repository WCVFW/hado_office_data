import React from "react";
import CCmainmenu from "../CCmainmenu";

const B2BLeadGeneration: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">

      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Outsource B2B Lead Generation Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get tailored, data-driven strategies to generate qualified, high-converting leads. Combine targeted research and multi-channel outreach to create sales opportunities with our B2B lead generation services.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <p className="mb-6">
          Entrepreneurs, business owners, and marketing and sales teams worldwide face challenges with low-quality leads, misguided targeting, and inadequate in-house expertise. Nimble Acuity provides game-changing B2B lead generation services, identifying the target audience, crafting compelling messaging, and deploying highly effective lead generation channels. Benefit from operational flexibility, time-zone advantage, and robust data security.
        </p>
        <p>
          A prominent publishing company partnered with us for lead capturing and follow-up. Through our seamlessly integrated, customized solutions, they experienced exponential sales growth, revenue surge, and exceptional cost efficiency.
        </p>
      </section>

      {/* Solutions Offered */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          B2B Lead Generation Solutions We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Market Research and Analysis",
            "Target Audience Identification",
            "Lead Qualification",
            "Lead Nurturing",
            "Sales Pipeline Management",
            "Appointment Setting",
            "Demand Generation",
            "Lead Scoring and Prioritization",
            "Data Management and Enrichment",
            "Marketing Automation and CRM Integration",
            "Performance Tracking and Reporting"
          ].map((service) => (
            <div key={service} className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Call Center Software */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          Call Center Software We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-purple-700 font-medium">
          {["HubSpot","Bitrix24","Talkdesk","Five9","Zendesk","Dixa","Salesforce","LiveAgent","Avaya"].map((tool) => (
            <span key={tool} className="border px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition">{tool}</span>
          ))}
        </div>
      </section>

      {/* B2B Lead Generation Process */}
      <section className="bg-purple-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Our B2B Lead Generation Process
        </h2>
        {[
          {step: "01. Project Assignment", desc: "Once you outsource the project, our project manager assigns a dedicated team according to volume, client requirements, and deadlines."},
          {step: "02. Strategy Implementation", desc: "Our expert agents implement a smart strategy to tackle lead generation and generate leads as per client needs."},
          {step: "03. Quality Check & Transfer", desc: "Leads are verified for quality through follow-up and then transferred to the client."},
          {step: "04. Feedback Incorporation", desc: "The process is continuously streamlined to improve lead quality over time."}
        ].map((item) => (
          <div key={item.step} className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Industries Served */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Industries We Serve
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-purple-700 font-medium">
          {[
            "E-commerce & Retail","Software & Technology","Marketing & Advertising","Business Consultancies",
            "Health & Medical Services","Real Estate & Property Management","Manufacturing & Industrial",
            "Logistics & Supply Chain","Hospitality & Travel","Education & Training"
          ].map((industry) => (
            <span key={industry} className="border px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition">{industry}</span>
          ))}
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
          B2B Lead Generation in the Philippines
        </h2>
        <p>
          Nimble Acuity operates in 10+ countries including the UK, USA, India, Kenya, and Colombia. We leverage the latest technology and state-of-the-art infrastructure to provide top-quality B2B lead generation services in the Philippines and beyond.
        </p>
      </section>

      {/* What Sets Us Apart */}
      <section className="bg-purple-50 py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">What Sets Our B2B Lead Generation Company Apart?</h2>
        <ul className="list-disc list-inside space-y-4">
          <li><strong>Superior Service Quality:</strong> Data-driven approach, nurturing leads meticulously for optimal conversion.</li>
          <li><strong>Unwavering Data Security:</strong> ISO/IEC 27001:2022 compliant, NDAs enforced for confidentiality.</li>
          <li><strong>Swift Turnaround:</strong> Time-zone advantage enables faster lead priming and conversion.</li>
          <li><strong>Certified Excellence:</strong> ISO 9001:2015 accredited, providing domain expertise across industries.</li>
          <li><strong>Cutting-Edge Tools:</strong> Leverage latest lead generation tools for maximum efficiency.</li>
          <li><strong>Seasoned Team:</strong> 500+ skilled specialists driving multichannel campaigns.</li>
          <li><strong>Flexible Pricing:</strong> Customized, cost-effective solutions to align with client budgets.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Additional Services You Can Benefit From</h2>
        <div className="flex flex-wrap justify-center gap-4 text-purple-700 font-medium">
          {["Cold Calling Services","Appointment Setting Services","Real Estate Lead Generation","e-Commerce Lead Generation Services"].map((service) => (
            <span key={service} className="border px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 transition">{service}</span>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="bg-white py-12 px-6 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">B2B Lead Generation to a Manufacturing Giant</h3>
            <p>
              Nimble provided a leading European manufacturing company with fast and reliable B2B lead generation services.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Outbound Telemarketing & B2C Lead Generation</h3>
            <p>
              Nimble drove brand awareness for a US retail giant and rolled out festive offers to increase footfalls during the holiday season.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 md:px-20 max-w-6xl mx-auto text-center bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="italic text-gray-700 max-w-2xl mx-auto">
          "We wish to extend our business with Nimble Acuity in the future. We would be delighted to refer them for Outsourcing Customer Service Operations."
          <footer className="mt-4 font-semibold">Co-Founder, Tech-startup based out of UK</footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Outsource B2B Lead Generation Services to Nimble Acuity</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          B2B lead generation outsourcing to an experienced firm like Nimble Acuity optimizes operations, mitigates risks, and delivers high-quality results with operational flexibility and 24/7 support.
        </p>
        <button className="bg-white text-purple-600 font-bold px-6 py-3 rounded shadow hover:bg-purple-100 transition">
          Get in Touch Today
        </button>
      </section>
    </div>
  );
};

export default B2BLeadGeneration;
