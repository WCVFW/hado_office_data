import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PodiatryBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Podiatry Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Stay on top of billing regulations and get your podiatric claims cleared on the first submission. 
              Simplify your workflow and improve revenue with our specialized billing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Endless patient records, exhaustive insurance verifications, and complex compliance requirements can 
              impact podiatric care. <strong>Nimble Acuity</strong> provides expert podiatry billing services, 
              accurately coding and billing surgical, medical, and physical treatments for foot and ankle care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Delegating your billing to us reduces administrative burden and ensures timely reimbursements. 
              Our dedicated team keeps your practice compliant with HIPAA, ACA, and CMS regulations while 
              effectively communicating with payers to secure fair compensation.
            </p>
          </div>

          {/* Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              End-to-End Podiatry Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Patient Registration & Insurance Verification</li>
              <li>Coding for Podiatric Procedures</li>
              <li>Claims Processing & Submission</li>
              <li>Accounts Receivable Follow-up</li>
              <li>Denial Management</li>
              <li>Payment Posting</li>
              <li>Podiatry EMR & EHR Services</li>
              <li>Practice Management Consulting</li>
              <li>Real-time Financial Reports</li>
            </ul>
          </div>

          {/* Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Podiatry Billing Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Gather Essential Patient Data:</strong> Collect insurance and personal information for seamless billing.</li>
              <li><strong>Verify Insurance Coverage:</strong> Ensure coverage for podiatric treatments to prevent claim rejections.</li>
              <li><strong>Document Procedures:</strong> Maintain detailed records of all treatments provided.</li>
              <li><strong>Assign Accurate ICD & CPT Codes:</strong> Correct coding ensures proper reimbursement.</li>
              <li><strong>Add Appropriate Modifiers:</strong> Specify services clearly for accurate claim submission.</li>
              <li><strong>Check Claims for Accuracy & Compliance:</strong> Thorough validation before submission to insurers.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Podiatry Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA-Compliant Data Protection:</strong> Robust security protocols safeguard patient information.</li>
              <li><strong>Podiatry Billing Expertise:</strong> Accurate coding and modifiers unique to foot and ankle procedures.</li>
              <li><strong>Improved Cash Flow:</strong> Timely claim processing accelerates reimbursements.</li>
              <li><strong>Personalized Support:</strong> Tailored services to match your podiatry practice needs.</li>
              <li><strong>Cost-Efficient Solutions:</strong> Transparent pricing based on billing cycles with no hidden fees.</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Podiatry Billing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From patient enrollment and insurance verification to claim submission and payment reconciliation, 
              <strong> Nimble Acuity</strong> ensures your podiatry practice receives accurate, timely reimbursements. 
              Focus on patient care while we handle your billing efficiently and securely.
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

export default PodiatryBilling;
