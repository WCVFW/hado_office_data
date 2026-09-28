import React from "react";
import Imainmenu from "../Imainmenu";

const BusinessProcessingCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nimble Acuity Provided Business Processing Services to an Insurance Firm
          </h1>
          <p className="text-lg text-gray-700">
            Case study highlighting how Nimble Acuity efficiently handled policy checking, new sales processing, and client notifications for a California-based insurance firm.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          The client is a well-known insurance firm based in Temecula, California, catering to vehicle, business, property, life, health, and pet insurance clients globally.
        </p>
      </section>

      {/* Client's Requirement */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Client's Requirement</h2>
          <p>
            The client required a reliable and cost-effective partner to manage business processing tasks including new sales, system entry, signature management, issuing proof of insurance, and sending late payment notifications via email or text.
          </p>
        </div>
      </section>

      {/* The Challenges */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Challenges</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Client’s previous team member had left; required immediate replacement.</li>
          <li>Needed highly skilled and experienced insurance experts to handle complex requirements.</li>
        </ul>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p>
            Nimble Acuity hired and deployed skilled resources who quickly understood the client’s processes. A standard operating procedure (SOP) was established to ensure smooth, hassle-free project execution.
          </p>
        </div>
      </section>

      {/* The Results */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Results</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>High-quality results delivered within 2 weeks.</li>
          <li>Processes executed exactly as per client expectations.</li>
          <li>Cost-effective solution impressed the client and ensured satisfaction.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Business Processing Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Acuity provides reliable and cost-effective insurance business processing services, leveraging skilled experts and advanced tools to deliver high-quality outcomes. We help clients streamline operations while saving time and costs.
        </p>
        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default BusinessProcessingCaseStudy;
