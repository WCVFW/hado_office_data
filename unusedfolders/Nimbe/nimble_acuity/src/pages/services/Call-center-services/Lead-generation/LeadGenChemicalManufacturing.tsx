import React from "react";
import CCmainmenu from "../CCmainmenu";

const LeadGenChemicalManufacturing: React.FC = () => {
  return (
    <div className="w-full bg-white text-gray-800">
      {/* Hero Section */}
      <CCmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Nimble Lead Generation for the Chemical and Manufacturing Industry
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Remain competitive, focused, and efficient in the highly challenging
          chemical and manufacturing industry by getting ready leads at prices
          starting at <span className="font-semibold">$8/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p>
          Are you looking to maintain a competitive advantage in the extremely
          challenging chemical and manufacturing industry? Are you looking to
          partner with Nimble Acuity for lead generation to acquire
          high-quality leads that can help you increase your sales footprint? Do
          you want efficient and effective BPO services that let you focus on
          core operations while leaving non-core tasks to an experienced and
          reliable provider? If so, you are at the right place.
        </p>
        <p>
          Nimble Acuity provides high-quality lead generation services in India
          for the chemical and manufacturing industry. Our services help
          companies around the world remain competitive and acquire
          high-quality leads they can pursue. We are a leading provider of
          business process outsourcing for this sector and can help you save
          time and effort, so you can focus on your business growth.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Our BPO Services for the Chemical and Manufacturing Industry
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-3">
              Lead Generation for the Chemical and Manufacturing Industry
            </h3>
            <p>
              The industry is highly competitive, and using Nimble Acuity’s
              services ensures that every lead meets Voice of the Customer
              (VoC)-aligned quality thresholds. Our workflow reengineering
              reduced cycle times by 32.2% in comparable projects, boosting
              productivity and sales.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-3">
              MSDS Transcription Solutions
            </h3>
            <p>
              Material Safety Data Sheets (MSDS) are critical for compliance and
              safety. We accurately transcribe these sheets with utmost
              precision, covering health, reactivity, and fire hazard aspects.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold text-xl mb-3">
              MSDS Classification Services
            </h3>
            <p>
              Our classification services ensure compliance by segmenting
              hazards into proper categories. Lean Six Sigma methods have
              reduced error rates by 30% in our documentation workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Other Services You May Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Lead Generation for Startups",
            "Lead Generation for IT Companies",
            "Insurance Lead Generation",
            "Lead Generation for Education Sector",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-50 rounded-2xl shadow hover:shadow-lg transition"
            >
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 text-lg">
          <li>✅ Affordable Pricing Options (CVA-BVA-NVA aligned)</li>
          <li>✅ ISO-certified high-quality services</li>
          <li>✅ Superb Infrastructure and Tools</li>
          <li>✅ Structured Processes with measurable outcomes</li>
          <li>✅ Experienced Team with 26+ years of expertise</li>
          <li>✅ Data Security with ISO/IEC 27001:2022 compliance</li>
          <li>✅ Short Turnaround Times</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold mb-3">
              Case Study on Lead Generation for Management Company
            </h3>
            <p>
              Nimble Acuity delivered cost-effective lead generation through
              telemarketing for a management platform development company.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow">
            <h3 className="font-semibold mb-3">
              Case Study on Lead Generation for Web Development Firm
            </h3>
            <p>
              A leading web development firm trusted Nimble Acuity to provide
              high-quality, cost-effective lead generation services.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “We have had the distinct pleasure of working with Nimble Acuity to
          complement our existing lead generation efforts with targeted calling
          in the US. Overall, our experience has exceeded expectations.”
        </blockquote>
        <p className="mt-4 font-semibold">
          Director, Sales Operations, Software Company, USA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Accelerate Your Growth?
        </h2>
        <p className="mb-6 text-lg">
          Partner with Nimble Acuity today for professional, reliable, and
          cost-effective lead generation services for the chemical and
          manufacturing industry.
        </p>
        <button className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LeadGenChemicalManufacturing;
