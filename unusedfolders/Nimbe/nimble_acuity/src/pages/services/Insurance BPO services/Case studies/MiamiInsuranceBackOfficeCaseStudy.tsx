import React from "react";
import Imainmenu from "../Imainmenu";

const MiamiInsuranceBackOfficeCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Streamlined Insurance Back-office Operations for Miami-based Client
          </h1>
          <p className="text-lg text-gray-700">
            Case study showcasing how Nimble Acuity optimized back-office operations for a leading Miami insurance agency.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          Our client is an established insurance agency based in Miami, Florida, specializing in Commercial Insurance Brokerage. They offer domestic and international coverages for commercial transport, trucking, land, air, and marine cargo, as well as physical damage insurance.
        </p>
      </section>

      {/* Project Challenges */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Project Challenges</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>The team had to work on multiple systems and databases with different architectures and processes.</li>
            <li>Employee performance was difficult to analyze effectively.</li>
            <li>Existing monitoring tools were not sufficient to assess overall productivity.</li>
          </ul>
        </div>
      </section>

      {/* The Nimble Acuity Solution */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Nimble Acuity Solution</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Set up a dedicated back-office team to allow the client’s staff to focus on critical tasks.</li>
          <li>Deployed agents experienced in personal, business, and general liability insurance.</li>
          <li>Optimized day-to-day processes to improve overall productivity.</li>
        </ul>
      </section>

      {/* The Results */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Results</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Improved management and updates of the insurance agency management system, data entry, and reporting.</li>
            <li>Overall productivity increased by more than 20%.</li>
            <li>Streamlined operations allowed staff to focus on immediate priorities effectively.</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Choose Nimble Acuity for High-quality Insurance Back Office Support
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Our solutions ensure all client requirements are met efficiently, cost-effectively, and in alignment with existing processes. We help insurance agencies and carriers enhance productivity and reduce costs.
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

export default MiamiInsuranceBackOfficeCaseStudy;
