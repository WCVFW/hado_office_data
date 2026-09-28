import React from "react";
import DSmainmenu from "../DSmainmenu";

const DataMaskingServices: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Data Masking Services
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          We deliver safe, referentially accurate test sets for relational databases and custom-formatted structured/semi-structured files. Prices start at{" "}
          <span className="font-semibold">$6/hour</span>
        </p>
      </section>

      {/* Intro */}
      <section className="mb-12 text-gray-700 space-y-4">
        <p>
          Data is one of your company's most valuable assets and also its biggest risk. Nimble Acuity ensures your sensitive data is de-identified and protected. Outsourcing data masking services helps reduce risk, ensure compliance, and save costs without hiring additional personnel or training specialists.
        </p>
        <p>
          Our team categorizes, retrieves, and masks data from databases, folders, Hadoop, and virtual servers, providing audit logs and compliance reports to give you complete peace of mind.
        </p>
      </section>

      {/* Services Offered */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Informatica Data Masking Services We Offer
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Risk Scoring Services:</strong> HIPAA Data SHM/EDM compliance training, de-identification, re-identification risk scoring, PHI compliance certification, and breach insurance.
          </li>
          <li>
            <strong>Test Data Services:</strong> Secure, contextually accurate test datasets for RDBMS of any size, custom-formatted data files, and support for demonstrations, prototypes, software benchmarks, and DevOps testing.
          </li>
        </ul>
      </section>

      {/* Data Masking Process */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Dynamic Data Masking Process We Follow
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li><strong>Understanding the Requirement:</strong> Categorize and analyze sensitive data under NDA, provide initial cost estimates, and knowledge extraction.</li>
          <li><strong>Analyzing Your Data:</strong> Transfer data to secure staging or remote access, mask it using Nimble Acuity’s tools according to business criteria.</li>
          <li><strong>Data Masking:</strong> Migrate newly masked data for analytics, programming, testing, or learning while maintaining strict security standards.</li>
          <li><strong>Creating Personalized Reports:</strong> Customized reports with charts and graphs to help quickly grasp the action plan and results.</li>
        </ol>
      </section>

      {/* Related Services */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Data Conversion Services</li>
          <li>Data Analytics Services</li>
          <li>ePUB Solutions</li>
          <li>Optical Character Recognition</li>
        </ul>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Why Nimble Data Masking Services to Nimble Acuity?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Data Security: Sensitive data never jeopardized.</li>
          <li>High-Quality Services: Paired checks to ensure accuracy.</li>
          <li>Quick Turnaround Time: Global delivery centers and SLAs ensure prompt delivery.</li>
          <li>Complete Peace of Mind: Focus on business while we handle masking.</li>
          <li>Instant Access to Certified Experts: Experienced annotators for accurate tagging and analysis.</li>
          <li>Use of Latest Tools & Software: Real-time monitoring using AI and ML technologies.</li>
          <li>24/7 Service Support: Round-the-clock assistance for your queries.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Client Success Stories
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>UK-based Software Firm:</strong> Customized scanning and data entry solution to manage workload efficiently.
          </li>
          <li>
            <strong>Poland-based Bike Accessories Seller:</strong> Offshored eCommerce data entry services within budget.
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Nimble Data Masking Services to Nimble Acuity
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          We provide professional, efficient, and cost-effective data masking services, tailored to your needs. Protect your sensitive data while gaining actionable insights and improved data management.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DataMaskingServices;
