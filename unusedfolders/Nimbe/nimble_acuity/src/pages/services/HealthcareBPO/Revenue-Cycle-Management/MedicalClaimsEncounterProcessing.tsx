import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const MedicalClaimsEncounterProcessing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Claims and Encounter Processing Services
            </h2>
            <p className="text-lg text-gray-600">
              We handle medical backend tasks like claims and encounter processing with <strong>98% accuracy</strong>. Our experts work on tight schedules at nominal rates starting from <strong>$1280/month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Are medical bills and encounter submissions taking time away from patient care? Handling the minutiae of claims and encounters can be tedious and complex. 
            </p>
            <p>
              At <strong>Nimble Acuity</strong>, our experienced team ensures an error-free, smooth process while keeping you informed at every step. Outsourcing medical claims and encounter processing has never been simpler.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Medical Claims and Encounter Processing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Entry for Claims & Encounters:</strong> Collecting all patient and physician details and entering them into billing software for submission.</li>
              <li><strong>Medical Claims Authentication:</strong> Verifying invoices, bills, and documentation; flagging incomplete or invalid claims.</li>
              <li><strong>Claims Data Processing:</strong> Cross-checking and processing data into HIPAA-compliant ANSI format and submitting to insurance companies.</li>
              <li><strong>Review of Claims & Encounters:</strong> Ensuring all submissions comply with Medicare, Medicaid, and insurance regulations.</li>
              <li><strong>Resubmissions & Appeals:</strong> Correcting rejected claims and resubmitting for approval, including formal appeals where necessary.</li>
              <li><strong>Administrative Support:</strong> Assistance with missing documentation, duplicate requests, and communication with authorities.</li>
              <li><strong>Data Indexing & Maintenance:</strong> Systematic storage of patient, EOB, insurance, and treatment information for future retrieval.</li>
              <li><strong>Explanation of Benefits (EOBs):</strong> Detailed reporting on covered medical expenses and patient responsibilities.</li>
              <li><strong>Accounting Support:</strong> Cross-checking financial details to maximize reimbursement.</li>
              <li><strong>Online Tracking:</strong> Real-time updates and notifications at every stage of the claims process.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Process for Medical Claims and Encounter Processing
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Data Accumulation & Entry:</strong> Collect and enter patient, physician, CPT, and ICD code information.</li>
              <li><strong>Authentication:</strong> Cross-check documents for accuracy.</li>
              <li><strong>Adjudication:</strong> Examine all claims for correctness.</li>
              <li><strong>Explanation of Benefits:</strong> Prepare detailed EOB reports.</li>
              <li><strong>Submission of Claims:</strong> Send claims to the insurance company.</li>
              <li><strong>Follow-ups:</strong> Ensure timely responses and payments.</li>
              <li><strong>Claim Status Updates:</strong> Keep clients informed at every stage.</li>
              <li><strong>Re-adjudication:</strong> Resubmit denied claims for approval.</li>
            </ol>
            <p className="mt-4 text-gray-700">
              Encounter processing includes: Collect Patient Data → Data Validation → Submission of Processed Report.
            </p>
          </div>

          {/* Why Partner With Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Outsource to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Data Security:</strong> All patient information is confidential and secure under our non-disclosure agreement.</li>
              <li><strong>HIPAA Compliant:</strong> All submissions comply with HIPAA standards.</li>
              <li><strong>Cost-effective:</strong> Reduce time and resource overhead while improving claim efficiency.</li>
              <li><strong>State-of-the-art Technology:</strong> Latest tools and predictive analytics to optimize claims and reduce denials.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals handling resubmissions and claim denials.</li>
              <li><strong>Error-free Services:</strong> High accuracy with low denial rates.</li>
              <li><strong>High-quality Screening:</strong> Thorough review ensures higher claim approval rates.</li>
              <li><strong>Rapid Turnaround:</strong> Timely processing of all claims and encounters.</li>
              <li><strong>Data Archiving & Retrieval:</strong> Systematic storage for future reference.</li>
              <li><strong>Claims Coding Expertise:</strong> Knowledge of CPT, HCPCS, and revenue codes.</li>
              <li><strong>High-priority Service:</strong> Prioritization based on urgency and medical condition severity.</li>
              <li><strong>Global Support:</strong> 24/7 availability across all time zones via chat, phone, email, or on-site consults.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Claims & Encounter Processing to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Achieve faster claim settlements and reduce denials by outsourcing your medical claims and encounter processing to <strong>Nimble Acuity</strong>. Save time and resources while ensuring maximum reimbursements.
            </p>
            <p className="text-gray-600 mb-8 font-medium">
              Get in touch with us today for reliable, accurate, and efficient medical claims and encounter processing services.
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

export default MedicalClaimsEncounterProcessing;
