import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataProfilingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Profiling Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Get a high volume of data analyzed by professionals using structured and statistical metrics. Prices start at{" "}
          <span className="font-semibold">$7/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Nimble Acuity (Nimble Acuity) helps companies extract maximum value from their data through robust data profiling services. We clean, analyze, and structure your data to gain actionable business intelligence, helping you make informed decisions while saving time and costs.
        </p>
        <p>
          Our data profiling process converts raw data into meaningful insights, identifies anomalies, improves quality, and ensures predictive and informed decision-making for your organization.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Data Profiling Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Better Data Quality:</strong> Identify duplicates, anomalies, and significant business issues to ensure high accuracy and authenticity.
          </li>
          <li>
            <strong>Proactive Crisis Management:</strong> Detect and fix issues before they occur to avoid lost productivity and missed opportunities.
          </li>
          <li>
            <strong>Well-Organized Sorting:</strong> Trace, analyze, and align datasets across multiple sources to comply with business policies and statistical metrics.
          </li>
          <li>
            <strong>Better and Predictive Decision Making:</strong> Detect minor errors early, analyze data trends, and support predictive business strategies.
          </li>
        </ul>
      </section>

      {/* Data Profiling Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Data Profiling Process We Follow
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>Receive client's files securely via FTP or online database access.</li>
          <li>Dedicated specialists analyze, evaluate, and profile the data.</li>
          <li>Multiple Quality Assurance checks to fix errors and ensure accuracy.</li>
          <li>Final results shared with clients through database server or FTP.</li>
          <li>Ongoing support for revisions and customer queries.</li>
        </ol>
      </section>

      {/* Related Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Forms Processing Services</li>
          <li>Data Cleansing Services</li>
          <li>Check Processing Services</li>
          <li>Survey Processing Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Data Profiling Services to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Flexible Pricing Options: Pay only for the services you use.</li>
          <li>High-Quality Service: Multiple QA teams ensure top-notch results.</li>
          <li>Faster Turnaround: Deliverables provided within deadlines.</li>
          <li>High Data Security: ISO/IEC certified, secured FTP channels.</li>
          <li>Ease of Scalability: Scale services up or down according to your business needs.</li>
          <li>Latest Tools and Technologies: Cutting-edge software and data profiling metrics.</li>
          <li>Dedicated Team: Transparent, quick communication with experts assigned.</li>
          <li>Access to Expertise: Experienced professionals to handle varying client requirements.</li>
          <li>World Class Infrastructure: Multiple global locations with modern facilities.</li>
          <li>Accountability and IP Protection: Secure, reliable, and compliant processes.</li>
          <li>24/7 Customer Support: Continuous support regardless of time zone.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>UK-based Software Firm:</strong> Customized scanning & data entry solution that streamlined workload and accelerated revenue.
          </li>
          <li>
            <strong>Poland-based Bike Accessories Seller:</strong> eCommerce data entry solutions delivered on budget and on time.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Data Profiling Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Partner with a reliable, cost-effective, and highly efficient data profiling services provider in India. Gain accurate, actionable insights and improve your business intelligence today.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataProfilingServices;
