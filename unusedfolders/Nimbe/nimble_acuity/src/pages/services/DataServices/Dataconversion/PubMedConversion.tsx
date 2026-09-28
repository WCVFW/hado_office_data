import React from "react";
import DSmainmenu from "../DSmainmenu";

const PubMedConversion: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble PubMed Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity's PubMed Conversion Services can help you convert your medical
          research papers, manuscripts, and journals into XML or SGML format so
          they can be easily submitted to the PubMed Central Library — starting
          at just $6/hour.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Get a Free Quote
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Professional PubMed Conversion</h2>
          <p>
            PubMed requires strict compliance with NLM and JATS specifications.
            At Nimble Acuity, we work with publishers, authors, and medical
            institutes to ensure your content is accurately converted and fully
            compliant for submission to the PubMed Central Library.
          </p>
        </div>
        <div className="bg-gray-50 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Quick Facts</h3>
          <ul className="space-y-2">
            <li>✅ 40% Cost Reduction</li>
            <li>✅ 8–24 Hours Faster Turnaround</li>
            <li>✅ 500+ Satisfied Clients</li>
            <li>✅ 350+ Skilled Experts</li>
            <li>✅ 99% Accuracy</li>
            <li>✅ 21 Years of Experience</li>
          </ul>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          PubMed Conversion Services We Offer
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Format Conversion",
              desc: "Convert Word, PDF, Text, ePub, and SGML files to PubMed XML format adhering to JATS standards.",
            },
            {
              title: "Figures & Charts Processing",
              desc: "Ensure consistency of formulas, charts, and graphics with PubMed Central Library requirements.",
            },
            {
              title: "Bookshelf XML Conversion",
              desc: "Convert books into PubMed-compatible Bookshelf XML and NLM XMS formats.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our PubMed Conversion Process
        </h2>
        <ol className="space-y-6 max-w-4xl mx-auto text-lg">
          <li><span className="font-semibold">01. Understanding Requirements:</span> Gather project scope, resources, and timelines, then receive files via secure FTP.</li>
          <li><span className="font-semibold">02. Conversion:</span> A dedicated project manager assigns tasks to our PubMed experts for conversion.</li>
          <li><span className="font-semibold">03. Quality Check:</span> Converted files undergo multiple reviews to ensure PubMed compliance.</li>
          <li><span className="font-semibold">04. Delivery:</span> Final files are securely shared via Dropbox or FTP after client approval.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for PubMed Conversion?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc list-inside text-lg max-w-5xl mx-auto">
          <li>Strict data security with NDA and secure transfer protocols</li>
          <li>Competitive and reasonable pricing models</li>
          <li>Quick turnaround with accuracy and consistency</li>
          <li>ISO-certified service provider</li>
          <li>Single point of contact (dedicated project manager)</li>
          <li>24/7 global support for clients across time zones</li>
        </ul>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">UK Software Firm</h3>
            <p>
              Nimble Acuity provided scanning & data entry services to a UK-based software
              firm, delivering a tailored data management solution quickly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="font-semibold mb-2">E-commerce Data Entry</h3>
            <p>
              We provided eCommerce data entry services to a Polish bike
              accessories seller, meeting their budget and deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “We were very satisfied with the quality of service Nimble Acuity
          provided. They met our requests with professionalism and flexibility.
          We look forward to future projects with their team.”
        </blockquote>
        <p className="mt-4 font-semibold">
          – Spokesperson, Online Health Lessons Company (Canada)
        </p>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-800 to-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Nimble PubMed Conversion Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Save time, reduce costs, and ensure compliance with PubMed and JATS
          standards by partnering with Nimble Acuity’s PubMed conversion experts.
        </p>
        <button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PubMedConversion;