import React from "react";
import Imainmenu from "../Imainmenu";

const PolicyCheckingCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-blue-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Nimble Acuity Helped a Brokerage Consulting Firm With Policy Checking
          </h1>
          <p className="text-lg text-gray-700">
            Case study demonstrating how Nimble Acuity efficiently handled large volumes of policy checking and certificate of insurance requests for a brokerage consulting firm.
          </p>
        </div>
      </section>

      {/* The Client */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Client</h2>
        <p>
          The client is a brokerage consulting firm with offices in Chicago and Los Angeles. They specialize in comprehensive risk management, commercial insurance, and group employee benefit solutions.
        </p>
      </section>

      {/* Client's Requirement */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Client's Requirement</h2>
          <p>
            The client needed help in handling large volumes of policy checking and certificate of insurance requests. They wanted immediate assistance with agents already trained in the EPIC agency management system.
          </p>
        </div>
      </section>

      {/* The Challenges */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Challenges</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Quick recruitment, training, and project kickstart.</li>
          <li>In-house operational managers to handle large volumes and deadlines.</li>
        </ul>
      </section>

      {/* The Solution */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Solution</h2>
          <p>
            Nimble Acuity devised a streamlined plan, assigning trained agents and starting the project within 7 business days. In-house operations managers and floor supervisors were provided at zero cost to handle managerial responsibilities.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>No client time or expense spent on recruiting, onboarding, or training local agents.</li>
            <li>Experienced operations managers ensured smooth project execution.</li>
            <li>Agents quickly started production and efficiently handled high volumes.</li>
          </ul>
        </div>
      </section>

      {/* The Results */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Results</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>High-quality and prompt results impressed the client.</li>
          <li>Ongoing support and quality monitoring ensured consistent performance.</li>
          <li>Cost-effective execution of the entire project exceeded client expectations.</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Policy Checking Services to Nimble Acuity
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Nimble Acuity provides reliable and cost-effective policy checking and COI services using the latest tools and software. Our skilled insurance back-office experts ensure accuracy, efficiency, and quick turnaround.
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

export default PolicyCheckingCaseStudy;
