import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CardiologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cardiology Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Focus on patient care while <strong>Nimble Acuity</strong> manages your cardiology billing with precision, 
              compliance, and faster reimbursements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Cardiology departments face evolving regulations, payment models, and digital healthcare challenges. 
              Our certified billing specialists handle CPT, HCPCS, and ICD coding to ensure your collections are accurate, 
              timely, and compliant.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> delivers end-to-end cardiology medical billing services including 
              denial management, AR follow-up, pre-authorizations, and credentialing—keeping your revenue cycle 
              healthy while you focus on patient care.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cardiology Medical Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Medical Document Capture</li>
              <li>Insurance Eligibility Verification</li>
              <li>Insurance Credentialing & Enrollment</li>
              <li>Pre-Authorization Support</li>
              <li>Web-based Electronic Referral</li>
              <li>Cardiology Medical Coding</li>
              <li>Accounts Receivable (AR) Follow-up</li>
              <li>Denial Management</li>
              <li>Claims Scrubbing</li>
              <li>Customized Reporting & Analytics</li>
            </ul>
          </div>

          {/* Sub-specializations */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cardiology Billing Sub-specializations
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Surgical Cardiology</li>
              <li>Transplant Cardiology</li>
              <li>Echo Cardiology</li>
              <li>Interventional Cardiology</li>
              <li>General Clinical Cardiology</li>
              <li>Nuclear Cardiology</li>
            </ul>
          </div>

          {/* Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cardiology Billing Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Service Agreement Execution:</strong> Complete all necessary agreements including BAA.</li>
              <li><strong>Project Allocation:</strong> Assign dedicated project managers and certified billing professionals.</li>
              <li><strong>Secure Data Capture:</strong> Safe transmission via secure FTP and access to EHR/DMS.</li>
              <li><strong>Billing Service:</strong> Accurate coding using ICD-10, ICD-11, CPT, and HCPCS.</li>
              <li><strong>Quality Check:</strong> Verify all documents to reduce errors and ensure smooth reimbursement.</li>
              <li><strong>Denial Management:</strong> Identify errors in returned claims and resubmit quickly for payment.</li>
              <li><strong>Final Claims Submission:</strong> Transmit verified claims securely in insurer-specific formats.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Cardiology Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Secure Data Management:</strong> Robust measures prevent unauthorized access or modifications.</li>
              <li><strong>Accuracy & Quality:</strong> Up to 98% clean claim rate with error-free submissions.</li>
              <li><strong>Fast Turnaround:</strong> Efficient workflows accelerate reimbursements by up to 30%.</li>
              <li><strong>Flexible Pricing Options:</strong> Cost-efficient billing tailored to your practice budget.</li>
              <li><strong>Advanced Medical Billing Software:</strong> Automated systems streamline daily billing tasks.</li>
              <li><strong>Skilled Team:</strong> AAPC-certified specialists with extensive cardiology expertise.</li>
              <li><strong>State-of-the-Art Infrastructure:</strong> Reliable facilities support multiple projects seamlessly.</li>
              <li><strong>24/7 Availability:</strong> Dedicated point of contact for queries and support at any time.</li>
            </ul>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Cardiology Billing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From document capture to claims submission and denial management, 
              <strong> Nimble Acuity</strong> ensures accurate, timely reimbursements for cardiology practices. 
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

export default CardiologyBilling;
