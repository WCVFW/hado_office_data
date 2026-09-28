import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PersonalInjuryBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Personal Injury Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your personal injury claims with <strong>Nimble Acuity</strong>. 
              Our certified billing specialists ensure accurate coding, fast reimbursements, 
              and seamless claims management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Personal injury billing is complex, often involving invasive treatments and extensive follow-ups. 
              <strong>Nimble Acuity</strong> has over two decades of experience handling personal injury claims, 
              maximizing reimbursements through precise coding, meticulous documentation, and timely claim follow-ups.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Personal Injury Billing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li><strong>End-to-End Accounts Receivables Management:</strong> Recover pending amounts from insurers and patients while protecting your revenue stream.</li>
              <li><strong>Accurate Coding for Maximum Reimbursements:</strong> ICD-10 certified coders ensure precise coding for fractures, dislocations, sprains, and other injuries.</li>
              <li><strong>Electronic Claims Submission:</strong> HIPAA-compliant electronic claims with error checking and quick resubmissions.</li>
              <li><strong>Advanced Collection Methods:</strong> Timely follow-ups with insurers and claim monitoring to prevent payment delays.</li>
              <li><strong>Assistance with Attorneys and Liens:</strong> Expert guidance on state laws and lien management to recover denied claims efficiently.</li>
            </ul>
          </div>

          {/* Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Personal Injury Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Review the Accident Report:</strong> Verify accuracy to ensure insurance compliance.</li>
              <li><strong>Documentation:</strong> Collect and compile all necessary medical records, including ER and rehab reports.</li>
              <li><strong>Billing and Coding:</strong> Assign ICD-10 codes by injury site, ensuring maximum reimbursement.</li>
              <li><strong>Quality Check and Settlement:</strong> Validate bills and submit them to insurance carriers.</li>
              <li><strong>Attorney Assistance:</strong> Provide documentation and support for claims requiring legal intervention.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Personal Injury Billing to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-effective Services:</strong> Economical billing with thorough quality checks and consistent follow-ups.</li>
              <li><strong>Professional Expertise:</strong> Experienced team handling complex personal injury claims with accuracy.</li>
              <li><strong>Maximum Reimbursements:</strong> ICD-10 certified coders ensure claims are fully reimbursed.</li>
              <li><strong>Advanced Technology Solutions:</strong> Custom software for injury-specific workflows and reporting.</li>
              <li><strong>Precise Financial Reporting:</strong> Daily, weekly, and monthly updates on outstanding claims and account status.</li>
              <li><strong>Easy Online Access:</strong> Secure client portals for transparency and real-time access to billing data.</li>
              <li><strong>Attorney Coordination:</strong> Assistance with denied claims and legal follow-ups to recover payments.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Personal Injury Billing Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 20 years of experience, <strong>Nimble Acuity</strong> delivers accurate, timely, and cost-effective personal injury billing. 
              Focus on patient care while we manage your claims, documentation, and reimbursements with full transparency.
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

export default PersonalInjuryBilling;
