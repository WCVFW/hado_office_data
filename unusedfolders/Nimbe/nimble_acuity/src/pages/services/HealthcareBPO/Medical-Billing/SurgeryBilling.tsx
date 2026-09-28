import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const SurgeryBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Surgery Billing Services: Maximize Reimbursements and Minimize Denials
            </h2>
            <p className="text-lg text-gray-600">
              Are long AR days and inefficient follow-up with insurers slowing your surgical practice? 
              <strong> nimble acuity</strong> offers expert surgery billing services, combining technology, compliance audits, and experienced professionals to reduce denials, shorten accounts receivable cycles, and maximize reimbursements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our team works closely with you to verify documentation completeness, perform coding audits, and ensure accurate claims submission. With HIPAA-compliant processes and advanced technology, your surgical billing is handled efficiently and securely.
            </p>
          </div>

          {/* Comprehensive Surgical Billing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Surgical Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Electronic Billing:</strong> Same-day submission of claims to government and third-party payers.</li>
              <li><strong>Contractual Evaluation:</strong> Optimize agreements with thorough consultation and analysis.</li>
              <li><strong>Fee Analysis & Physician Credentialing:</strong> Ensure smooth billing processes through accurate fee management and credentialing.</li>
              <li><strong>Managed-Care Contracts:</strong> Navigate complex contracts for maximum reimbursement.</li>
              <li><strong>Successful Payment Collection:</strong> Strategic approaches to maximize payments from insurers.</li>
              <li><strong>Coding Audits & CPT Coding:</strong> Rigorous audits and accurate coding to reduce errors and denials.</li>
              <li><strong>Custom Reporting:</strong> Gain full visibility into your financial health with tailored reports.</li>
            </ul>

            <p className="mt-4 text-gray-700 font-medium">
              We also specialize in billing for surgical procedures including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Reconstruction Surgery</li>
              <li>Breast Reconstruction Surgery</li>
              <li>Laceration Repair</li>
              <li>Post-mastectomy Surgery</li>
              <li>Scar Revision</li>
            </ul>
          </div>

          {/* Transparent Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transparent Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Insurance Eligibility Verification of all patients using digital and paper records.</li>
              <li>Coding and Diagnosis using relevant surgical coding standards for compliance.</li>
              <li>Charge Entry with accurate patient accounts and detailed invoice documentation.</li>
              <li>Claims Submission to ensure timely reimbursement from insurers.</li>
              <li>Payment Posting directly into EHR for seamless reconciliation.</li>
              <li>Denial Management & Appeal for rejected claims with timely resubmission.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Your Surgical Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified and Compliant:</strong> HIPAA-compliant, ISO 9001:2015-accredited, with 6+ years of experience.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022-accredited systems and strict NDAs to protect confidential data.</li>
              <li><strong>High Accuracy & Quality:</strong> Rigorous checks to prevent billing errors and maximize reimbursements.</li>
              <li><strong>Fast Turnaround Time:</strong> Digitized workflows and organized invoicing for quicker processing.</li>
              <li><strong>Scalable Services:</strong> Flexible options to handle fluctuating claim volumes.</li>
              <li><strong>Affordable Pricing:</strong> Pocket-friendly, customizable packages for optimal cost-performance.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication and updates.</li>
              <li><strong>Experienced Team:</strong> 500+ billing and coding experts ensuring reliable and timely service.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced software and secure hardware for efficient billing with minimal errors.</li>
              <li><strong>Secure Data Exchange:</strong> VPN and SFTP protocols to prevent data loss during transfer.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support for instant assistance.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Surgical Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for accurate, compliant, and efficient surgical billing services that reduce denials and optimize revenue.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us today for a customized quote and experience streamlined surgical billing within 24 hours.
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

export default SurgeryBilling;
