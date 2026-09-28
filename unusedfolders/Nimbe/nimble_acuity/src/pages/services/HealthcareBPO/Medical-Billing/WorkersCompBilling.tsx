import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const WorkersCompBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Workers' Compensation Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your workers’ compensation claims with <strong>Nimble Acuity</strong>. 
              Our HIPAA-certified billing experts ensure accurate submissions, timely reimbursements, 
              and full revenue cycle transparency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Workers’ compensation billing is complex, with state-specific guidelines, strict tariffs, 
              and manual oversight requirements. <strong>Nimble Acuity</strong> has over two decades of 
              experience managing WCB accounts, ensuring proper authorization, compliant billing, and 
              early electronic submissions for faster reimbursements.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Workers' Compensation Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Submit Invoices & Billing Forms:</strong> Ensure accurate data entry for injured worker info, claim numbers, diagnosis codes, tariffs, and WCB account details.</li>
              <li><strong>Processing & Payment Review:</strong> Reconcile carrier statements with submitted bills to ensure accuracy.</li>
              <li><strong>Handle Denied Claims:</strong> Investigate denial reasons, resubmit claims, or coordinate legal appeals as required.</li>
              <li><strong>Understand Tariffs by Profession:</strong> Clarify WCB-specific fees for physicians, chiropractors, physiotherapists, pharmacies, vendors, and more.</li>
              <li><strong>Account Receivables & Revenue Management:</strong> End-to-end management including coding, billing, collections, payer relations, fee analysis, and reporting.</li>
            </ul>
          </div>

          {/* Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Workers' Compensation Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Verify Employee Credentials:</strong> Confirm employment and injury details from employee or employer.</li>
              <li><strong>Case Verification:</strong> Validate insurance company, adjuster info, case status, and affected body parts.</li>
              <li><strong>Pre-Authorization Request:</strong> Submit required forms (DLSR 5021, DWC PR-2, physician reports) to start utilization review.</li>
              <li><strong>Billing & Coding:</strong> Use up-to-date codes for workers’ compensation based on medical reports and treatments.</li>
              <li><strong>Bill Submission:</strong> Submit bills on carrier portals promptly to meet reimbursement timelines.</li>
              <li><strong>Timely Follow-up:</strong> Regularly monitor claims and ensure payments are processed on schedule.</li>
              <li><strong>Review & Resubmission:</strong> Scrutinize payments, file second reviews if needed, and initiate independent reviews when necessary.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Workers' Compensation Billing to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>End-to-End Revenue Cycle Management:</strong> Complete accounts receivable handling to let you focus on patient care.</li>
              <li><strong>Improved Collections & Revenue:</strong> Timely submissions and continuous follow-ups ensure maximum payments and zero denials.</li>
              <li><strong>HIPAA-Compliant Processes:</strong> Secure handling of sensitive health information and adherence to all HHS regulations.</li>
              <li><strong>Advanced Software Solutions:</strong> Utilization of cutting-edge billing systems compatible with client platforms.</li>
              <li><strong>Complete Transparency:</strong> Clear reporting and pricing for every step of the revenue cycle.</li>
              <li><strong>24/7 Remote Access:</strong> Round-the-clock access to financial and patient data via cloud-based systems.</li>
              <li><strong>Superior Customer Service:</strong> Dedicated support for providers and patients, ensuring clarity and trust.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Workers' Compensation Billing Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With extensive experience in workers’ compensation billing, <strong>Nimble Acuity</strong> helps healthcare providers handle complex claims, 
              maintain HIPAA compliance, and improve revenue cycle efficiency with full transparency and timely reporting.
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

export default WorkersCompBilling;
