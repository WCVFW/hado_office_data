import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HospitalBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hospital Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce costs and maximize revenue by outsourcing your hospital billing services
              to Nimble Acuity. With over 6 years of experience, we help hospitals maintain
              efficient billing systems, track expenses, and increase reimbursements by more
              than 20%.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing hospital billing in-house can be time-consuming and costly. Nimble Acuity
              provides expert hospital billing services, combining strict quality control with
              deep knowledge of U.S. and U.K. healthcare systems to minimize errors and optimize
              revenue collection.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team handles all aspects of hospital billing, allowing your staff to focus
              on patient care while we improve your reimbursement process.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Hospital Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Accounts Receivable Management:</strong> Follow-ups on bills, collections reporting, insurance follow-up, denial analysis, and re-billing.</li>
              <li><strong>Data Entry:</strong> Accurate entry of patient demographics, insurance information, and guarantor details.</li>
              <li><strong>Charge Entry:</strong> Precise entry of CPT/ICD codes, date of service, referring physician, and authorization/referral details.</li>
              <li><strong>EOB Entry:</strong> Capture Explanation of Benefits details, including patient account numbers, procedure codes, billed amounts, and denial information.</li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Hospital Billing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In-house hospital billing can be expensive and tedious, with costs from staff,
              administration, and infrastructure. Outsourcing to Nimble Acuity saves money,
              reduces overhead, and allows your team to focus on patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expertise in U.S. healthcare billing ensures minimal errors and increased
              reimbursements for your hospital.
            </p>
          </div>

          {/* Standards */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medical Standards We Follow
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Proficient with major billing software: Medisoft, Medical Manager, eClinicalWorks, AdvancedMD, Kareo.</li>
              <li><strong>HIPAA Compliant:</strong> Ensuring secure and confidential patient data handling.</li>
              <li>Expertise in CPT, HCPCS, and ICD-10 coding (Levels I, II, and III).</li>
              <li>Experienced with Medicare, Medicaid, managed care, third-party liability, workers' compensation, and more.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Hospital Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides expert hospital billing services that minimize errors,
              reduce costs, and maximize revenue. Let us handle your billing so you can focus
              on delivering superior patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to streamline your hospital billing and collections process.
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

export default HospitalBilling;
