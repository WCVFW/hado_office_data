import React from "react";
import Imainmenu from "../Imainmenu";

const PolicyCheckingFloridaCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nimble Acuity Provided Policy Checking Services to a Leading Insurance Company
          </h1>
          <p className="text-lg text-gray-700">
            Case study highlighting how Nimble Acuity assisted a Florida-based insurance company with policy checking, endorsements, and COI services to achieve operational stability and cost efficiency.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          The client is a leading insurance company based in Florida, United States, offering comprehensive insurance solutions for both business and personal needs.
        </p>
      </section>

      {/* Client's Requirement */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Client's Requirement</h2>
          <p>
            The client needed a reliable, cost-effective partner to manage policy checking services along with endorsement and COI services.
          </p>
        </div>
      </section>

      {/* The Challenges */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Challenges</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Employee retention issues in entry-level and clerical positions.</li>
          <li>Need to stabilize and boost reliability for administrative and clerical tasks without disruptions.</li>
        </ul>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p>
            Nimble Acuity deployed a dedicated, skilled team of policy checking experts to manage all administrative and clerical tasks. This allowed the client to avoid hiring, retention, and scaling hassles while maintaining operational efficiency.
          </p>
        </div>
      </section>

      {/* The Results */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Results</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Achieved stability in business operations.</li>
          <li>Enabled client to focus on core activities by outsourcing administrative tasks.</li>
          <li>Delivered high-quality, cost-effective services that met client expectations.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Policy Checking Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Acuity offers reliable and cost-effective policy checking services using the latest tools and technologies. Our skilled experts deliver top-quality solutions for insurance companies globally.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default PolicyCheckingFloridaCaseStudy;
