import React from "react";
import DSmainmenu from "../DSmainmenu";

const TypingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Typing Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get comprehensive typing solutions covering multiple domains for the
          best outcomes from an experienced team of experts, linguists, and
          typists. Prices start at <span className="font-semibold">$6/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity (Nimble Acuity) offers best-in-class typing services across
          multiple industrial domains. From online and data typing to
          transcription, academic, medical, and audio typing, our expert team
          ensures accurate and timely delivery. Our services help you maintain
          a competitive edge while digitizing documents for efficient use.
        </p>
        <p>
          We cater to clients globally in finance, healthcare, insurance,
          academic, media, publishing, banking, legal, and other key sectors,
          offering specialized solutions tailored to your requirements.
        </p>
      </section>

      {/* Typing Solutions */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Typing Solutions
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Academic Typing:</strong> Preserving the thoughts and ideas
            of academic documents with subject expertise.
          </li>
          <li>
            <strong>Business Letters:</strong> Professional tone aligned with
            your organization’s mission, vision, and message.
          </li>
          <li>
            <strong>Survey Typing:</strong> Fast and accurate typing of survey
            forms to save time and improve efficiency.
          </li>
          <li>
            <strong>Document Typing:</strong> Typing across industrial domains
            while maintaining correct formats and zero errors.
          </li>
          <li>
            <strong>Specialist Typing:</strong> Domain-specific typing by
            subject experts for specialized documents.
          </li>
          <li>
            <strong>Audio Typing:</strong> Typing services from audio recordings
            with accuracy and speed.
          </li>
          <li>
            <strong>Other Typing Services:</strong> Image data typing, medical
            data typing, legal document typing, and more.
          </li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Typing Tasks To Us?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong>Cost:</strong> Competitive and affordable pricing tailored to your needs.</li>
          <li><strong>Accuracy:</strong> High-quality services with minimal corrections required.</li>
          <li><strong>Faster Turnaround:</strong> Efficient execution to give your business a competitive edge.</li>
          <li><strong>Data Security:</strong> 100% confidentiality and secure handling of your data.</li>
          <li><strong>Experience:</strong> Expert typists with cross-domain experience ensuring professional results.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>US-based Online Store:</strong> Delivered efficient online
            data entry services quickly and accurately.
          </li>
          <li>
            <strong>Florida-based Legal Client:</strong> Provided high-quality
            data extraction and typing services at affordable rates.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Choose Our Exemplary Typing Solutions
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Nimble Acuity has been the top choice for typing services across
          industries worldwide. Get in touch with us today for a free
          consultation and let our experts handle your typing requirements with
          precision and efficiency.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default TypingServices;
