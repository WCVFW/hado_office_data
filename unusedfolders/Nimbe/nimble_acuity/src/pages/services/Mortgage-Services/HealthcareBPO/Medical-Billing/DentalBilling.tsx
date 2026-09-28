import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DentalBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dental Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Simplify complex dental billing and maximize revenue with Nimble Acuity’s expert services. 
              We ensure accurate CDT coding, HIPAA compliance, and seamless insurance claim management for your dental practice.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Navigating CDT codes, insurance rules, and HIPAA compliance can be challenging for dental practices. 
              Nimble Acuity’s certified coders and billing experts streamline the process, reducing errors and freeing your team to focus on patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our proactive approach includes insurance verification, claims submission, follow-ups, and reporting, helping practices minimize denials and improve revenue cycle efficiency.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Dental Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Insurance Claims Submission & Management:</strong> Handle the full claims process accurately and efficiently.</li>
              <li><strong>Insurance Verification & Eligibility Checks:</strong> Reduce claim denials with meticulous coverage checks.</li>
              <li><strong>Dental Coding & Documentation:</strong> Accurate CDT coding and documentation by certified professionals.</li>
              <li><strong>Accounts Receivable (AR) Management:</strong> Track and manage outstanding claims and patient balances.</li>
              <li><strong>Payment Posting & Reconciliation:</strong> Ensure timely and accurate posting of payments and account reconciliation.</li>
              <li><strong>Appeals & Denials Management:</strong> Identify denial reasons, appeal, and resubmit promptly.</li>
              <li><strong>Patient Billing Support:</strong> Transparent support for all patient inquiries.</li>
              <li><strong>Financial Reporting & Analytics:</strong> Detailed reports to optimize revenue management strategies.</li>
              <li><strong>Revenue Cycle Management (RCM):</strong> End-to-end RCM services for a profitable billing cycle.</li>
              <li><strong>Online Dental Billing:</strong> Secure online platforms to manage claims, payments, and inquiries.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Dental Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Patient Registration: Gather and verify patient information for accurate billing.</li>
              <li>Insurance Verification: Confirm coverage to minimize claim denials.</li>
              <li>Treatment Planning: Create detailed treatment plans with procedure costs.</li>
              <li>Coding Procedures: Ensure accurate CDT coding for all services.</li>
              <li>Claim Preparation & Submission: Submit complete and accurate claims to insurers promptly.</li>
              <li>Insurance Adjudication: Monitor claims for approval or denial.</li>
              <li>Payment Posting: Record payments accurately from patients and insurers.</li>
              <li>Patient Billing & Support: Provide clear statements and responsive support.</li>
              <li>Financial Reporting & Analytics: Generate insights into practice revenue and performance.</li>
              <li>Audit Preparation: Maintain meticulous records for compliance and audits.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>State-of-the-Art Technology:</strong> Streamlined billing processes with innovative tools.</li>
              <li><strong>Consistent Quality & Accuracy:</strong> High-quality, error-free billing services.</li>
              <li><strong>HIPAA Compliant:</strong> Fully HIPAA compliant and ISO/IEC 27001:2013 certified.</li>
              <li><strong>Rapid Turnaround:</strong> Efficient processes for timely reimbursements.</li>
              <li><strong>Personalized Assistance:</strong> Tailored support for your practice’s unique needs.</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective, customizable service packages.</li>
              <li><strong>Scalability:</strong> Services that grow with your practice.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your Dental Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity to streamline your dental billing, improve compliance, and boost revenue with our expert services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us today to optimize your revenue management and reduce administrative overhead.
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

export default DentalBilling;
