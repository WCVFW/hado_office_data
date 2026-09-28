import React from "react";
import Imainmenu from "../Imainmenu";

const PolicyCheckingNYCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Insurance Policy Checking Services for NY-based Insurance Service Provider
          </h1>
          <p className="text-lg text-gray-700">
            Case study showcasing how Nimble Acuity helped a New York-based risk insurance agency improve policy checking, COI generation, and back-office efficiency.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          Our client is a New York-based risk insurance agency specializing in both personal and commercial insurances. They have served over 1,000 families and more than 2,000 businesses in the Tri-state area.
        </p>
      </section>

      {/* Requirement & Challenges */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Client's Requirement & Project Challenges</h2>
          <p>
            With exponential growth in customers, the client faced delays in policy processing, checking, generating COIs, and updating their Agency Management System. This caused unsatisfied customers and overtaxed employees.
          </p>
          <p>
            The client needed a partner to handle all back-office insurance processes efficiently, ensuring cost-effective solutions without impacting productivity.
          </p>
        </div>
      </section>

      {/* The Nimble Acuity Solution */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Nimble Acuity Solution</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Created an executive team of insurance experts to execute daily back-office requirements.</li>
          <li>Included professionals ensuring completeness and accuracy of each policy document.</li>
          <li>Implemented a cost-effective claims standardization process to handle high customer volumes efficiently.</li>
        </ul>
      </section>

      {/* The Result */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Result</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Achieved exceptional customer satisfaction through a standardized process.</li>
            <li>Improved efficiency with significantly shortened claims processing cycles.</li>
            <li>Reduced overall costs for the claims processing lifecycle by more than 22%.</li>
            <li>Enhanced employee productivity and satisfaction.</li>
            <li>Enabled superior policy tracking, fraud detection, and quick tracking of re-insurers' recoverables.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Acuity for Insurance Back Office Support
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Acuity delivers top-quality insurance back-office support at cost-effective rates. Our team is skilled in US and UK insurance systems and adept at handling complex challenges with ease.
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

export default PolicyCheckingNYCaseStudy;
