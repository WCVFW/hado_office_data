import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HospiceBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hospice Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize reimbursements and streamline operations with Nimble Acuity’s expert hospice billing services.
              Our certified team ensures accurate claims processing, ICD-10 coding, and transparent communication to accelerate payments.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Hospice billing can be complex, with unique insurance requirements and strict documentation standards. 
              Nimble Acuity provides accurate and timely billing for Medicaid, Medicare, and private insurance, helping you improve cash flow and reduce claim rejections.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our transparent billing practices and open communication provide actionable insights, streamlined denial handling, and improved financial performance for your hospice.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Hospice Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Claim Submissions & Verification:</strong> Compliance with payer regulations for improved first-pass acceptance and faster reimbursements.</li>
              <li><strong>Payment Posting & Reconciliation:</strong> Accurate payment-to-claim matching and prompt discrepancy resolution for better cash flow.</li>
              <li><strong>Denial Management & Appeals:</strong> Identify root causes of denials and implement corrective actions with detailed documentation.</li>
              <li><strong>Patient Demographics:</strong> Reduce errors and maintain up-to-date records for efficient payer communication.</li>
              <li><strong>Insurance Verification:</strong> Validate coverage prior to service and audit payer databases to reduce delays.</li>
              <li><strong>Accounts Receivable:</strong> Follow up on aging claims to decrease DSO and ensure timely collections.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Sets Our Services Apart?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Data Security & Compliance:</strong> HIPAA-compliant processes and stringent patient data protection.</li>
              <li><strong>Continuous Staff Training:</strong> Ongoing education on billing codes, policy updates, and best practices.</li>
              <li><strong>Performance Analytics:</strong> Detailed reports to monitor billing trends and efficiency.</li>
              <li><strong>Cost-Efficiency:</strong> Scalable solutions to pay only for the services you need.</li>
              <li><strong>Rapid Onboarding:</strong> Efficient integration with existing EHR, EMR, and EDI systems with minimal disruption.</li>
              <li><strong>Proven Track Record:</strong> Consistently deliver accurate, timely, and reliable hospice billing services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Maximize Your Hospice Collections?
            </h3>
            <p className="text-gray-700 mb-6">
              Improve billing accuracy, reduce administrative burden, and gain actionable insights with Nimble Acuity’s hospice billing services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to streamline your operations and optimize reimbursements.
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

export default HospiceBilling;
