import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const AnesthesiaBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Anesthesia Billing Services: Unparalleled Accuracy, Enhanced Revenue
            </h2>
            <p className="text-lg text-gray-600">
              Efficient, accurate, and compliant billing is the key to a successful healthcare practice. Our advanced anesthesia billing services help manage the revenue cycle, reduce billing errors, ensure regulatory compliance, and save time and resources.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Leveraging cutting-edge technologies and best practices, <strong>nimble acuity</strong> handles all anesthesia codes, optimizes claim submissions, follow-ups, and collections, and maximizes reimbursements. Our data-driven insights help detect potential revenue leaks and enhance financial performance.
            </p>
          </div>

          {/* Anesthesia Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Anesthesia Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Payment Posting:</strong> Streamlined data entry using EHRs and RCM systems for accurate financial records and transparency.</li>
              <li><strong>Accurate Coding:</strong> Expertise in ICD-10, CPT, and ASA codes ensures precise billing, reduced denials, and compliance.</li>
              <li><strong>Accounts Receivable:</strong> Proactive AR analytics monitor KPIs and minimize bad debt write-offs for steady cash flow.</li>
              <li><strong>Denial Management:</strong> Track and manage denied claims, providing actionable insights to improve future billing.</li>
              <li><strong>Charge Capture:</strong> Accurate documentation of services, synced with EMRs and PMS to ensure all services are billed.</li>
              <li><strong>Claim Submission:</strong> EDI technology and payer-specific expertise accelerate processing and reimbursements.</li>
              <li><strong>Compliance:</strong> Regular audits and compliant software systems ensure HIPAA and regulatory adherence.</li>
            </ul>
          </div>

          {/* Anesthesia Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Pre-Anesthesia Evaluation:</strong> Review evaluation forms to ensure accurate billing.</li>
              <li><strong>Insurance Pre-Authorization:</strong> Confirm insurance coverage before services are provided.</li>
              <li><strong>Procedure Coding:</strong> Certified coders translate services into accurate medical codes.</li>
              <li><strong>Claim Generation:</strong> Generate claims with complete information for successful reimbursement.</li>
              <li><strong>Claim Scrubbing:</strong> Review and correct errors to avoid rejections.</li>
              <li><strong>Electronic Claim Submission:</strong> Submit claims electronically for faster processing.</li>
              <li><strong>Follow-up and Collections:</strong> Actively manage follow-ups to ensure prompt payment.</li>
              <li><strong>Reporting and Analysis:</strong> Provide detailed reports to identify revenue cycle improvements.</li>
            </ol>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Anesthesia Coding Expertise:</strong> Precision in ASA codes, modifiers, and crosswalks ensures accurate claims and reduced denials.</li>
              <li><strong>Efficient Revenue Cycle Management:</strong> Streamlined processes enhance cash flow and operational efficiency.</li>
              <li><strong>Operational Efficiency:</strong> We handle billing complexities so your team can focus on patient care.</li>
              <li><strong>Cost Savings:</strong> Efficient billing practices lead to substantial cost reductions.</li>
              <li><strong>Regulatory Compliance:</strong> HIPAA-compliant processes minimize audit risks and legal issues.</li>
              <li><strong>Analytics and Reporting:</strong> Data-driven reports with KPIs, trend analysis, and financial forecasting support strategic decisions.</li>
              <li><strong>24/7 Customer Support:</strong> Dedicated support team available round-the-clock to resolve billing queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Anesthesia Billing Today
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing anesthesia billing to <strong>nimble acuity</strong> ensures accurate claims, higher acceptance rates, and steady cash flow. Let us manage your billing so you can focus on delivering exceptional patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to enhance your revenue cycle and reduce denials? Contact us today!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default AnesthesiaBilling;
