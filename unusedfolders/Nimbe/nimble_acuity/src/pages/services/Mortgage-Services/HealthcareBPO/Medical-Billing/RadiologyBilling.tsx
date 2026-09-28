import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const RadiologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Radiology Medical Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Experience the full potential of your radiology practice with our specialized billing 
              solutions—covering everything from charge entry to denial management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our tailored <strong>radiology medical billing services</strong> for diagnostic imaging centers 
              and hospitals map complex payer-specific requirements and help you adapt to evolving 
              healthcare coverage. We adhere to accurate billing and coding practices in line with 
              CPT and ICD-10 standards to ensure faster reimbursements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>Nimble Acuity</strong>, you gain an all-inclusive suite of services—charge entry, 
              payment posting, claim submission, denial management, and patient billing. Our advanced 
              radiology billing software reviews services, conducts audits, and ensures compliance to 
              minimize errors and maximize revenue.
            </p>
          </div>

          {/* Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Radiology Medical Billing Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Medical Coding & Charge Entry</li>
              <li>Claims Submission Services</li>
              <li>Payment Posting Services</li>
              <li>Accounts Receivable Management</li>
              <li>Denial Management & Appeals</li>
              <li>Patient Billing & Collections</li>
              <li>Compliance & Audit Support</li>
              <li>Reporting & Analytics</li>
              <li>Insurance Verification & Eligibility Checks</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Radiology Billing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Insurance Verification & Pre-Authorization:</strong> Real-time eligibility checks and prior authorization tracking for imaging exams.</li>
              <li><strong>Accuracy in Interventional Radiology Billing:</strong> Expertise in IR procedures, catheterizations, and fluoroscopic guidance coding.</li>
              <li><strong>KPI-Based Revenue Cycle Reports:</strong> Real-time dashboards with AR trends, denial analysis, and modality-based profitability insights.</li>
              <li><strong>Swift Payment Posting:</strong> Automated ERA/EOB reconciliation with underpayment flagging for timely follow-up.</li>
              <li><strong>Payer Negotiation & Contract Management:</strong> Optimized fee schedules for imaging services and contract compliance reviews.</li>
              <li><strong>End-to-End Patient Billing Support:</strong> Transparent billing, e-payment options, and proactive self-pay balance management.</li>
            </ul>
          </div>

          {/* Partner CTA */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Join hands with us for advanced radiology billing solutions that help you maintain 
              compliance, accuracy, and faster reimbursements—without the administrative burden.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              What Our Clients Say
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Thank you so much, as always, for the absolutely brilliant work. The quality is always 
              outstanding. I truly appreciate the support and dedication you bring to our billing needs!"
            </blockquote>
            <p className="mt-4 text-gray-600 font-medium">
              – Radiologist & Oncological Imaging Specialist, Australia
            </p>
          </div>

          {/* Final CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your Radiology Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Let Nimble Acuity handle the complexities of radiology billing while you focus on 
              delivering quality imaging services. From coding to collections, we’ve got you covered.
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

export default RadiologyBilling;
