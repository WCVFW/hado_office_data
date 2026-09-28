import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const NeurologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Neurology Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Keep your neurology practice financially healthy with <strong>Nimble Acuity</strong>. 
              Our experts provide accurate billing, claims management, and revenue cycle solutions tailored 
              to neurology providers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Neurology billing rules update annually, and inaccurate claims can delay reimbursements and increase administrative burden. 
              Outsource your neurology medical billing to <strong>Nimble Acuity</strong> to focus on patient care while we handle coding, 
              claims, and collections efficiently.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Neurology Medical Billing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Neurology Medical Billing:</strong> HIPAA-compliant, error-free invoices submitted to payers to maximize timely reimbursements.</li>
              <li><strong>Denial Management:</strong> Identify and correct errors, recheck claims, and resubmit to minimize denied claims.</li>
              <li><strong>Accounts Receivable (AR) Follow-up:</strong> Routine follow-ups on unpaid claims, posting captured funds, and sending reminders to payers.</li>
              <li><strong>Credentialing Services:</strong> Verify patient eligibility for procedures and insurance coverage, ensuring smooth claims processing.</li>
              <li><strong>Pre-authorization:</strong> Obtain prior approvals for procedures to prevent denied claims and maintain patient-provider-insurer harmony.</li>
              <li><strong>Charge Posting & Reporting:</strong> Collect and post payments, reconcile electronic remittance advice (ERA), and generate custom reports.</li>
            </ul>
          </div>

          {/* Sub-specializations */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Neurology Sub-specializations We Support
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Neuromuscular</li>
              <li>Behavioral</li>
              <li>Nerve Blocks</li>
              <li>Neurorehabilitation</li>
              <li>Chemodenervation</li>
              <li>Vascular</li>
              <li>Interventional</li>
              <li>Pain Management</li>
              <li>Clinical Neurophysiology</li>
              <li>Neuroimmunology</li>
            </ul>
          </div>

          {/* Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Neurology Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Execution of Service Agreement:</strong> Sign necessary paperwork, including Business Associate Agreement.</li>
              <li><strong>Project Allocation:</strong> Assign a dedicated account manager and AAPC/AHIMA certified coders for end-to-end billing.</li>
              <li><strong>Data Capture via Secure Channel:</strong> Securely transmit clinical and insurance data through encrypted channels with EHR access.</li>
              <li><strong>Billing Service:</strong> Code and bill using ICD-10, ICD-11, and DSM-5 systems following HIPAA compliance.</li>
              <li><strong>Quality Check:</strong> Ensure claims meet payer-specific guidelines and HIPAA standards before submission.</li>
              <li><strong>Denial Management:</strong> Identify errors or missing data in returned claims, correct them, and resubmit.</li>
              <li><strong>Final Claims Submission:</strong> Submit claims in the insurer-specific format digitally, with status tracking and reporting.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Neurology Medical Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Secure Data Management:</strong> Confidential health data handled with NDAs and SLAs ensuring integrity.</li>
              <li><strong>Accuracy & Quality:</strong> Up to 98% clean claim rate, reducing rework and resubmissions.</li>
              <li><strong>Fast Turnaround:</strong> Projects completed within 12 hours to increase collections by up to 30%.</li>
              <li><strong>Flexible Pricing Options:</strong> Tailored billing services to fit your budget without unnecessary costs.</li>
              <li><strong>Advanced Medical Billing Software:</strong> Efficient handling of routine tasks with multi-format file support.</li>
              <li><strong>Skilled Team:</strong> Certified coders with experience in ICD-10, ICD-11, and DSM-5 systems for HIPAA-compliant billing.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Secure, modern facility with access control to handle large volumes of data.</li>
              <li><strong>24/7 Availability:</strong> Direct access to dedicated subject matter experts through a single point of contact.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Neurology Medical Billing Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Trust <strong>Nimble Acuity</strong> for neurology medical billing services with expertise, accuracy, HIPAA compliance, 
              and fast turnaround to improve your practice’s collections. Our transparent and cost-effective solutions 
              are designed to save you time and resources.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default NeurologyBilling;
