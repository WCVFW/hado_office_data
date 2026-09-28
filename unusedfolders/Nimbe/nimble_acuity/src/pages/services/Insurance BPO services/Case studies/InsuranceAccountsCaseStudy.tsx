import React from "react";
import Imainmenu from "../Imainmenu";

const InsuranceAccountsCaseStudy: React.FC = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <Imainmenu/>
      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Case Study on Maintaining Insurance Accounts
          </h1>
          <p className="text-lg text-gray-700">
            How Nimble Acuity helped a US-based insurance agency manage their accounts efficiently and accurately.
          </p>
        </div>
      </section>

      {/* The Customer */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Customer</h2>
        <p>
          Our customer is a full-service, independent insurance agency in the US specializing in Business Insurance, Risk Management, Employee Benefits, Finance & Accounting Services, and Private Risk Management. They provide comprehensive protection for individuals and companies.
        </p>
      </section>

      {/* The Challenge */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
          <p>
            The work required high accuracy to maintain and update insurance accounts for both companies and individuals. After two weeks of rigorous training via WebEx sessions, our team started the project, remaining in constant communication with the customer through email, chat, and phone calls. Targets varied based on new policies booked, and monthly updates ensured that every document was accurate and complete.
          </p>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-12 max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
        <h2 className="text-3xl font-bold mb-4">The Solution</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Working on the Sagitta database:</strong> Direct access to the client system via remote connection to manage policy and account information.
          </li>
          <li>
            <strong>Maintaining accounts:</strong> Create new accounts, renew old accounts, calculate premiums received, determine agency percentages, raise invoices, and manage account receivables.
          </li>
          <li>
            Adapted to changing procedures and evolving processes, maintaining constant communication with the customer through phone, chat, and email.
          </li>
        </ul>
      </section>

      {/* The Result */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-4 text-gray-700">
          <h2 className="text-3xl font-bold mb-4">The Result</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Quality:</strong> Met and exceeded customer expectations, leading to an increase in FTEs within a short period.
            </li>
            <li>
              <strong>Value:</strong> The customer Nimbled 40% of their back-office work to us due to high-quality, cost-effective services and ongoing feedback sessions.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Your Insurance Back Office Support
        </h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Partner with Nimble Acuity to manage your insurance accounts efficiently, accurately, and cost-effectively.
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

export default InsuranceAccountsCaseStudy;
