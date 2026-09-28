import React from "react";
import DSmainmenu from "../DSmainmenu";

const AddressManagement: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nimble Address Management Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Implement a valid and accurate address management system to foster
          enriching customer relationships, at rates starting at{" "}
          <span className="font-semibold">$7 per hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Maintaining updated customer addresses is critical for smooth
          communication and strong relationships. With addresses constantly
          changing, outsourcing to a professional address management service
          provider simplifies this task while ensuring accuracy.
        </p>
        <p>
          Nimble Acuity leverages over 2 decades of experience and advanced
          tools to maintain clean, validated, and standardized address
          databases for clients across the US and globally.
        </p>
      </section>

      {/* Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Comprehensive Address Management Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Address List Accuracy Service:</strong> Validate and verify
            addresses, remove duplicates, correct area codes, and ensure
            precision using automated systems.
          </li>
          <li>
            <strong>Delivery Management Service:</strong> Update addresses to
            reduce undeliverable mail and ensure accurate, on-time delivery.
          </li>
          <li>
            <strong>Address Sequencing Service:</strong> Organize address lists
            for carrier routes, submit electronic files, and establish correct
            formats.
          </li>
          <li>
            <strong>Address Standardization Service:</strong> Format addresses
            as per USPS guidelines, using proper casing, punctuation, and
            abbreviations.
          </li>
          <li>
            <strong>Zip Code Verification Service:</strong> Validate zip codes
            and map them to towns or cities to ensure accuracy.
          </li>
          <li>
            <strong>Surcharge Validation Services:</strong> Apply correct
            delivery surcharges based on weight and destination for bulk mail
            discounts.
          </li>
          <li>
            <strong>Real-Time Service Alerts:</strong> Track every mail in
            real-time and provide updates on status, delays, or disruptions.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Address Management Process
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Understanding Data:</strong> Identify inconsistencies,
            duplicate entries, and changes in postal records.
          </li>
          <li>
            <strong>Preparing Checklist:</strong> Create a checklist to guide
            validation and correction steps.
          </li>
          <li>
            <strong>Automate Address Correction:</strong> Use automated tools
            for formatting and manual methods for exceptions.
          </li>
          <li>
            <strong>Connect to Source:</strong> Validate addresses with trusted
            data sources to achieve a single customer view.
          </li>
          <li>
            <strong>Quality Check:</strong> Conduct manual verification to
            ensure the database is accurate, complete, and functional.
          </li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Benefits of Outsourcing Address Management Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Cost savings while maintaining high-quality service</li>
          <li>Validated and standardized addresses for accurate communication</li>
          <li>Automated processes to reduce errors and save time</li>
          <li>Faster operational efficiency and reduced management overhead</li>
          <li>Improved customer satisfaction and brand reputation</li>
          <li>Reduced rate of returned mail and missed deliveries</li>
          <li>Skilled experts using advanced tools and workflows</li>
          <li>24/7 service leveraging global time-zone advantages</li>
          <li>Assured data protection with robust security measures</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Address Management Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          With over 20 years of experience, our expert staff and advanced tools
          ensure accurate, validated, and standardized address databases. Our
          services help improve CRM, customer loyalty, and operational efficiency.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default AddressManagement;
