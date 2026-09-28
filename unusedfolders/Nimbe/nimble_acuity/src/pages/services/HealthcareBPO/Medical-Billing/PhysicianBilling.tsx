import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";


const PhysicianBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Physician Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize your revenue, streamline A/R, and increase first-pass resolution rates with our customized, HIPAA-compliant healthcare billing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Improper medical billing can cause significant challenges for physicians, from financial instability to delayed claims. <strong>Nimble Acuity</strong>, with over two decades of industry experience, helps you overcome these hurdles. We leverage our extensive knowledge to collect up to 99% of total billed revenue, ensuring your practice's financial health and freeing you to focus on patient care.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reduced A/R Days:</strong> Our streamlined processes ensure faster payments and improved cash flow.</li>
              <li><strong>Significant Cost Savings:</strong> Increase collections by 25% and save up to 40% on billing costs.</li>
              <li><strong>High First-Pass Rate:</strong> Achieve a remarkable 97% of claims paid on the first submission.</li>
              <li><strong>Expertise Across Specialties:</strong> Our team is adept at coding and billing for a wide range of medical fields.</li>
              <li><strong>HIPAA Compliance:</strong> We adhere to strict HIPAA regulations, guaranteeing data confidentiality and security.</li>
              <li><strong>Global Availability:</strong> We operate 24/7 with global delivery centers to provide round-the-clock support.</li>
            </ul>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Physician Medical Billing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Revenue Cycle Management</li>
              <li>Coding Services (ICD-10, CPT, HCPCS)</li>
              <li>Claims Submission</li>
              <li>Payment Posting</li>
              <li>Claims Settlement & Denial Management</li>
              <li>Patient Preauthorization</li>
              <li>Financial Analysis & Reporting</li>
              <li>Insurance Eligibility Verification</li>
              <li>Account Management</li>
              <li>Credentialing & Enrollment</li>
              <li>...and many more tailored services.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Medical Coding:</strong> Our AAPC-certified professionals use their expertise to ensure accurate coding.</li>
              <li><strong>Eligibility Verification & Pre-authorization:</strong> We verify insurance eligibility in real-time to save time and effort.</li>
              <li><strong>Charge Posting:</strong> Payments are meticulously posted to your account with a proactive review of billing data.</li>
              <li><strong>Claim Submission & Follow-up:</strong> We submit claims electronically and track their status in real-time for faster reimbursement.</li>
              <li><strong>Claims Denial Management:</strong> We proactively manage unpaid or underpaid claims to recover lost revenue.</li>
              <li><strong>Uncleared Invoice Reminders:</strong> We handle follow-ups with slow-paying patients, dispatching account statements on your behalf.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Revenue Cycle?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides end-to-end solutions that automate routine tasks and enhance quality with advanced technologies like AI and machine learning. Our global presence ensures competitive pricing and rapid scalability to meet your unique needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to book a free consultation and let us help you achieve financial stability.
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

export default PhysicianBilling;
