import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataValidationServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Validation Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get access to accurate and consistent data with our data validation services. Prices start at{" "}
          <span className="font-semibold">$8/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity (Nimble Acuity) is a leading data validation service provider. We help businesses ensure that all data is accurate, consistent, and free from errors or duplicates. By leveraging our expertise, you can Nimble tedious validation tasks and focus on core business processes.
        </p>
        <p>
          Our services combine automated and manual validation methodologies, allowing you to verify migrated or existing data, enhance databases, and create reliable datasets for marketing, analytics, and operational purposes.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Our Data Validation Services
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Data Verification Services:</strong> Identify errors, inconsistencies, and duplicates in your dataset. Validate addresses, emails, postal codes, and other essential information.
          </li>
          <li>
            <strong>New Database Creation Services:</strong> Build accurate and authentic databases from multiple sources with verified and validated information.
          </li>
          <li>
            <strong>Existing Database Enhancement Services:</strong> Scrutinize existing datasets, remove inconsistencies, and add supplemental validated information for robust datasets.
          </li>
        </ul>
      </section>

      {/* Other Related Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Other Services You May Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Debt Collection Services</li>
          <li>Customer Follow-up Services</li>
          <li>Market Intelligence Services</li>
          <li>Customer Satisfaction Surveys</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Data Validation to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Affordable Pricing Options</li>
          <li>High-quality ISO-certified services</li>
          <li>Superb Infrastructure and latest tools</li>
          <li>Structured process-driven methodology</li>
          <li>Experienced team with 26+ years in the industry</li>
          <li>Data security compliant with ISO/IEC 27001:2022</li>
          <li>Quick turnaround time to meet deadlines</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Pharma Company:</strong> High-quality call answering support to help sell healthcare products online.
          </li>
          <li>
            <strong>US-based IT Client:</strong> Appointment setting and call center support to enhance customer engagement.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Data Validation Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          With over 26 years of experience, we provide reliable, accurate, and cost-effective data validation services for small, medium, and large organizations. Get in touch with us today to ensure your data is 100% error-free and dependable.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataValidationServices;
