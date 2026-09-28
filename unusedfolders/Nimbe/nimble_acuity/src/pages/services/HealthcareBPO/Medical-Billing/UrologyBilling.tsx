import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const UrologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Urology Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your urology billing process with Nimble Acuity’s expert services. 
              Our skilled team uses the latest billing tools to provide accurate, efficient, and cost-effective solutions starting at just $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing urology billing in-house can be complex and resource-intensive. 
              Nimble Acuity offers comprehensive, error-free billing solutions that let your practice focus on patient care while we handle claims, receivables, and reporting.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team’s extensive experience ensures timely reimbursements, compliance with HIPAA regulations, and seamless workflow integration.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Urology Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Receivables Management:</strong> Efficient follow-ups on invoice payments to ensure timely collection.</li>
              <li><strong>Claims Processing:</strong> Streamlined, error-free processing of all claims for prompt submission to payers.</li>
              <li><strong>Eligibility Verification:</strong> Verify patient claims in advance to prevent rejections and delays.</li>
              <li><strong>Claims Review:</strong> Multiple checks for accuracy before submission to ensure on-time payment.</li>
              <li><strong>Quality Assurance:</strong> HIPAA-compliant practices and rigorous QA for error-free claims.</li>
              <li><strong>Claims Reporting:</strong> Detailed weekly, monthly, or quarterly reporting for full transparency.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Receive requests from patients.</li>
              <li>Submit medical claims electronically.</li>
              <li>Receive authorization support from recurring patients.</li>
              <li>Follow up on claims.</li>
              <li>Deposit payments received from insurance companies.</li>
              <li>Update re-validations and enrollments.</li>
              <li>Document the entire process.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing:</strong> Cost-effective plans that suit your practice needs and budget.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, ensuring safe handling of sensitive data.</li>
              <li><strong>Best Infrastructure:</strong> Latest tools, technologies, and world-class facilities for top-notch services.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified, error-free billing processes.</li>
              <li><strong>Single Point of Contact (SPOC):</strong> Dedicated project manager to streamline communication.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance via phone or email.</li>
              <li><strong>Experienced Team:</strong> Skilled billing experts trained in multiple software platforms.</li>
              <li><strong>Scalable Services:</strong> Easily adjust resources as your practice grows.</li>
              <li><strong>Short Turnaround Time:</strong> Multiple global delivery locations allow fast, efficient service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your Urology Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity to reduce errors, save time, and improve revenue collection with our expert urology billing services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for a reliable, cost-effective solution for your practice.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default UrologyBilling;
