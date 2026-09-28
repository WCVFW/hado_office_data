import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";  // add this at the top



const GynecologyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Gynecology Medical Billing
            </h2>
            <p className="text-lg text-gray-600">
              Are denied claims and revenue cycle headaches slowing you down?
              Instead of constantly battling denials and chasing payments,
              imagine a billing process that just works. With
              <strong> nimble acuity</strong>, you can boost collections,
              reduce denials, and run a more profitable practice.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, we specialize in maximizing revenue
              by tackling the complexities of gynecology and OB/GYN billing.
              With nearly two decades of expertise, our certified billers and coders
              act as an extension of your practice—ensuring precision, compliance,
              and faster reimbursements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              From routine visits to advanced procedures, our team helps you streamline
              billing so you can focus on what matters most: delivering exceptional patient care.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our OB/GYN Medical Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Patient Enrollment & Verification:</strong> Insurance eligibility checks from day one.</li>
              <li><strong>Precise Coding & Claims Submission:</strong> Every claim scrubbed for accuracy to reduce denials.</li>
              <li><strong>Proactive AR Management:</strong> Active follow-up on unpaid claims and patient balances.</li>
              <li><strong>Detailed Reporting:</strong> Custom financial reports for full visibility into practice performance.</li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Expertise Across Gynecological Specialties
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Advanced Laparoscopic Surgery</li>
              <li>Maternal-fetal Medicine</li>
              <li>Uro-gynecology & Pelvic Reconstruction</li>
              <li>Menopausal & Geriatric Gynecology</li>
              <li>Pediatric & Adolescent Gynecology</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Kick-off:</strong> Analyze your practice’s needs and create a tailored billing strategy.</li>
              <li><strong>Secure Handoff:</strong> Transfer records via HIPAA-compliant channels.</li>
              <li><strong>Validate & Submit:</strong> Verify all records and submit claims using your existing software.</li>
              <li><strong>Reporting:</strong> Receive comprehensive, transparent reports to track progress.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective & Flexible:</strong> Transparent pricing—you pay only for what you need.</li>
              <li><strong>Unwavering Security:</strong> ISO/IEC 27001:2022 certified and HIPAA-compliant.</li>
              <li><strong>Dedicated Support:</strong> A single account manager keeps you updated on claim status.</li>
              <li><strong>Scalability:</strong> Services that adapt as your practice grows or changes.</li>
              <li><strong>Faster Turnaround:</strong> Multiple delivery centers ensure speed and reliability.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Boost Collections and Reduce Denials?
            </h3>
            <p className="text-gray-700 mb-6">
              Don’t let billing challenges slow your practice. With
              <strong> nimble acuity</strong>, you gain a partner committed to accuracy,
              transparency, and profitability.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for a free consultation and experience the difference
              a dedicated billing partner can make.
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

export default GynecologyBilling;
