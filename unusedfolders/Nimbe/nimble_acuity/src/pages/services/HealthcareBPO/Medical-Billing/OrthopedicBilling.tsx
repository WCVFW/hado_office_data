import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OrthopedicBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Orthopedic Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Implement denial management strategies and root-cause analysis to reduce claim rejections and 
              accelerate payment collection in orthopedic practices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Orthopedic practices often face bottlenecks in claims processing, causing delayed reimbursements 
              and higher claim rejections. <strong>Nimble Acuity</strong> automates claims submission, provides 
              comprehensive denial tracking, manages pre-authorizations, and verifies patient eligibility to ensure 
              timely resolution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated accounts receivable follow-up team actively pursues outstanding claims to prevent revenue 
              loss. Partner with us to reduce billing cycle times, improve financial stability, and elevate your 
              practice’s financial outcomes.
            </p>
          </div>

          {/* Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Orthopedic Billing & Coding Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Patient Demographics Entry & Management</li>
              <li>Insurance Verification & Eligibility Checks</li>
              <li>Medical Coding & Charge Entry</li>
              <li>Claims Submission & Management</li>
              <li>Payment Posting & Reconciliation</li>
              <li>Denial Management & Appeals</li>
              <li>Patient Billing, Statements & Collections</li>
              <li>Compliance, Audits & Consulting</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Orthopedic Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>International Compliance Adherence:</strong> Global regulatory compliance and audits to mitigate risks.</li>
              <li><strong>Multilingual Support Systems:</strong> Seamless billing communication across languages and regions.</li>
              <li><strong>Real-Time Data Analytics:</strong> Actionable insights for optimizing orthopedic revenue cycles and financial planning.</li>
              <li><strong>Automated Claim Scrubbing:</strong> Error detection and correction pre-submission to improve first-pass acceptance rates.</li>
              <li><strong>Cross-Border Payment Integration:</strong> Streamlined international transactions with accurate reconciliation.</li>
              <li><strong>Global Payer Negotiation Expertise:</strong> Optimized reimbursement rates through deep market insights.</li>
            </ul>
          </div>

          {/* Partner CTA */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Ensure compliance and smooth workflows with expert audits and dedicated support. Let us handle your 
              orthopedic billing efficiently while you focus on patient care.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              What Our Clients Say
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Hi, I am pleased with the support. The response time and communication are fine. Knowledge of billing 
              and claims is excellent. All the best!"
            </blockquote>
            <p className="mt-4 text-gray-600 font-medium">
              – Founder, Healthcare Consulting Company, California
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Orthopedic Billing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From claim submission and denial management to accounts receivable follow-up, 
              <strong> Nimble Acuity</strong> ensures your orthopedic practice receives timely reimbursements 
              with accuracy and compliance.
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

export default OrthopedicBilling;
