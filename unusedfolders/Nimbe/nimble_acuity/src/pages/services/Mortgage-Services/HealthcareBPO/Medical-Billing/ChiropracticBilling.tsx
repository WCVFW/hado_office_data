import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ChiropracticBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Chiropractic Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize collections and reduce outstanding receivables with Nimble Acuity’s expert chiropractic billing services. 
              Our team ensures accurate claims, regulatory compliance, and seamless integration with your practice management system.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Complex chiropractic coding, insurance coverage limitations, and regulatory compliance can disrupt your cash flow. 
              Nimble Acuity’s experienced team simplifies your billing operations, reduces claim denials, and enhances your revenue cycle performance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With automated systems for insurance verification, charge entry, payment posting, and EHR assistance, we streamline processes to improve efficiency and increase reimbursements.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Chiropractic Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Insurance Verification:</strong> Confirm patient coverage and validate policies to reduce claim denials.</li>
              <li><strong>Patient Data Entry:</strong> Accurately capture all patient details for improved claim approvals.</li>
              <li><strong>Eligibility & Benefits Verification:</strong> Ensure services are covered to prevent out-of-pocket surprises.</li>
              <li><strong>Coding Services:</strong> Certified coders apply the latest regulations for accurate claims.</li>
              <li><strong>Claims Submission:</strong> Handle preparation and submission to expedite reimbursements.</li>
              <li><strong>Claim Follow-up:</strong> Proactively follow up with insurers for timely settlements.</li>
              <li><strong>Denial Management:</strong> Review denied claims, correct errors, and resubmit promptly.</li>
              <li><strong>Payment Posting:</strong> Apply payments accurately to maintain financial records.</li>
              <li><strong>Accounts Receivable (AR) Management:</strong> Monitor aging accounts and implement reduction strategies.</li>
              <li><strong>AR Collections:</strong> Collect outstanding receivables with strategic follow-ups and negotiations.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Customized integration with your existing practice management system for a secure setup.</li>
              <li>Secure access to patient data to perform billing tasks, ledger adjustments, and claims dispatch.</li>
              <li>Collection capture framework including coding, denial management, and AR processing.</li>
              <li>Regular reporting with real-time updates and dashboards to track revenue and pending payments.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Quality Assurance:</strong> ISO-certified processes ensuring accuracy from data collection to coding.</li>
              <li><strong>Data Security:</strong> Secure infrastructure with reliable file-sharing options.</li>
              <li><strong>Billing Accuracy:</strong> Over 6 years of experience providing professional, error-free services.</li>
              <li><strong>Swift Turnaround:</strong> Streamlined operations and 24/7 work to meet deadlines.</li>
              <li><strong>Flexible Pricing:</strong> Transparent, customizable pricing to suit your practice.</li>
              <li><strong>Regulatory Compliance:</strong> HIPAA, ICD-10, ICD-11, DSM-5, RBMA, and ISO standards maintained.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your Chiropractic Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity to streamline your billing, improve compliance, and enhance revenue with automated, efficient solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us today to optimize operations and boost your bottom line.
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

export default ChiropracticBilling;
