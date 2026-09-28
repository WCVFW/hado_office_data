import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PainManagementBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pain Management Billing Services: Maximize Reimbursements with 98% Accuracy
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with pain management claim reimbursements? We know dealing with chronic pain is challenging enough — billing shouldn’t add to the stress. 
            </p>
            <p className="text-lg text-gray-600 mt-4">
              For over 6 years, <strong>nimble acuity</strong> has served clients ranging from small clinics to large rehabilitation centers. 
              We simplify billing for pain management treatments, maximize reimbursements, and ensure compliance with the latest insurance guidelines.
            </p>
          </div>

          {/* Solutions Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Pain Management Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Eligibility & Insurance Verification:</strong> Validate policy details before claims are initiated.</li>
              <li><strong>Document Authentication:</strong> Review all bills and invoices to prevent rejections or delays.</li>
              <li><strong>Demographics Capture:</strong> Double-check all patient data to meet payer compliance requirements.</li>
              <li><strong>Pre-authorization:</strong> Confirm coverage upfront to maximize entitled reimbursements.</li>
              <li><strong>Claim Adjudication:</strong> Eliminate errors like mismatched codes and incomplete details.</li>
              <li><strong>Down-coding & Bundling Assessment:</strong> Review down-coded claims to recover full benefits.</li>
              <li><strong>Explanation of Benefits (EOBs):</strong> Provide clear, easy-to-understand reports for patients and providers.</li>
              <li><strong>Claims Resubmission:</strong> Fix and resubmit denied claims until payment is received.</li>
              <li><strong>Overturning Denials:</strong> Resolve denials caused by simple errors like misspellings or incorrect codes.</li>
              <li><strong>Data Indexing & Maintenance:</strong> Maintain a secure, accessible database for all claims.</li>
            </ul>
          </div>

          {/* Process Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Claim Eligibility:</strong> Verify claim initiation based on provided data.</li>
              <li><strong>Data Entry:</strong> Enter all valid patient, physician, and treatment details with CPT codes.</li>
              <li><strong>Authentication:</strong> Cross-check documents for accuracy.</li>
              <li><strong>Adjudication:</strong> Review claims thoroughly before submission.</li>
              <li><strong>EOBs:</strong> Generate detailed, patient-friendly benefit explanations.</li>
              <li><strong>Claims Calculation:</strong> Ensure accurate computation of all reimbursements.</li>
              <li><strong>Claim Submission:</strong> Submit claims electronically to insurers.</li>
              <li><strong>Online Tracking:</strong> Provide real-time claim tracking via secure links.</li>
              <li><strong>Follow-ups:</strong> Consistent follow-ups with insurers to avoid delays.</li>
              <li><strong>Intimation:</strong> Keep providers updated on claim status.</li>
              <li><strong>Re-adjudication:</strong> Rework and resubmit denied claims until approved.</li>
            </ol>
          </div>

          {/* Why Choose Section */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> Strict non-disclosure and full HIPAA compliance.</li>
              <li><strong>Value for Money:</strong> Get maximum reimbursement with transparent pricing.</li>
              <li><strong>Error-Free Services:</strong> High accuracy and efficiency in claims processing.</li>
              <li><strong>State-of-the-Art Technology:</strong> Advanced billing software and predictive analysis.</li>
              <li><strong>Experienced Team:</strong> Skilled billers providing clarity and fast resolutions.</li>
              <li><strong>Remote Billing:</strong> Certified billers work seamlessly with your existing systems.</li>
              <li><strong>Systematic Workflow:</strong> Organized process that accelerates claim approvals.</li>
              <li><strong>High-Quality Screening:</strong> In-depth scrutiny reduces denials.</li>
              <li><strong>Quick Turnaround:</strong> Faster claim approvals and payments.</li>
              <li><strong>Decreased Denials:</strong> Persuasive appeals ensure more approvals in your favor.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock availability across time zones.</li>
            </ul>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with nimble acuity for Pain Management Billing
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing your pain management billing to <strong>nimble acuity</strong> means faster approvals, quicker reimbursements, and fewer denials — so you can focus more on patient care. 
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to maximize reimbursements with 98% accuracy? <strong>Get in touch with us today for a free billing analysis!</strong>
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PainManagementBilling;
