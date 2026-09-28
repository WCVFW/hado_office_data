import React from "react";
import DSmainmenu from "../DSmainmenu";

const DocumentFormattingServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Document Formatting Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Create impressive, attractive, and engaging documents with our
          professional formatting services delivered by seasoned experts.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-purple-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Get a Free Quote
        </button>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Professional Document Formatting
          </h2>
          <p>
            We help you format your existing Word and other documents to
            world-class standards. Our experts create customized templates,
            apply branding guidelines, and ensure consistency in styles, tables,
            headers, and footers.
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
          Our Word Formatting Services
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">Changing the Format</h3>
            <p>
              Based on your guidelines, we enhance the aesthetic appeal of your
              documents by adjusting layouts and formatting styles.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-3">
              Applying Customized Styles
            </h3>
            <p>
              We apply client-requested or custom formatting styles for
              proposals, eBooks, and presentations to ensure consistency and
              professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Our Document Formatting Process
        </h2>
        <ol className="space-y-6 text-lg">
          <li>
            <strong>01. Briefing –</strong> Requirements, timelines, and resources
            are discussed with our Business Development Head.
          </li>
          <li>
            <strong>02. Input –</strong> Clients share documents via FTP, Dropbox,
            Email, or Google Drive.
          </li>
          <li>
            <strong>03. Word Formatting –</strong> Our professionals perform manual
            formatting based on your instructions.
          </li>
          <li>
            <strong>04. Review –</strong> Edits are incorporated as per client
            feedback.
          </li>
          <li>
            <strong>05. Final Output –</strong> Final formatted files delivered via
            FTP or Dropbox.
          </li>
        </ol>
      </section>

      {/* Why Choose */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Why Choose Us as Your Document Formatting Partner?
        </h2>
        <ul className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 list-disc list-inside text-lg">
          <li>ISO-quality processes with 99% SLA adherence</li>
          <li>Fast turnaround with experienced professionals</li>
          <li>3+ years average team experience</li>
          <li>Secure handling with GDPR, NDA, and FTP</li>
          <li>Capability to process 160+ pages/day</li>
          <li>Flexible, cost-effective pricing models</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Data Entry Services",
            "Data Processing Services",
            "OCR Services",
            "eBook Conversion Services",
            "Catalog Processing Service",
            "Data Conversion Services",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow text-center"
            >
              <h3 className="text-xl font-semibold">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “Working with Nimble Acuity has been a great experience. They quickly
          learned our line of business, adapted to our requirements, and
          consistently performed well. They’ve gone above and beyond their duty
          — a wonderful partner.”
        </blockquote>
        <p className="mt-4 font-semibold">– Spokesperson, Recruitment Firm (US)</p>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Nimble Document Formatting Services to Us
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Ensure formatting accuracy, reduce costs, and focus on your core
          business activities. Call or email today for a free quote — or test
          our quality at no cost.
        </p>
        <button className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-2xl shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DocumentFormattingServices;
