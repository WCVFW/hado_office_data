import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OccupationalHealthBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Occupational Health Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Minimize errors and maximize revenue by outsourcing your occupational health billing
              to experts. Nimble Acuity ensures accurate, compliant, and efficient billing processes,
              freeing your team to focus on patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing occupational health billing in-house can strain your staff and expose you
              to regulatory risks. Nimble Acuity brings two decades of expertise, delivering
              fast and accurate billing services tailored to your practice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is to help your practice get reimbursed quickly, reduce errors, and ensure
              full compliance while you concentrate on providing excellent patient care.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Occupational Health Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li><strong>Charge Entry:</strong> Accurate and affordable charge entry services, including patient demographic capture and document aggregation.</li>
              <li><strong>Payment Posting:</strong> Track insurance and patient payments, posting them securely in your EHR using tools like Medisoft and NextGen.</li>
              <li><strong>Client Reporting:</strong> Detailed productivity and performance reports to help identify gaps and optimize processes.</li>
              <li><strong>Denial Management & Appeal:</strong> Investigate, correct, and resubmit denied claims promptly for faster reimbursement.</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transparent Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Scheduling & Eligibility Verification:</strong> Collaborate with your team to finalize plans and verify patient eligibility.</li>
              <li><strong>Document Aggregation:</strong> Collect and organize diagnostic reports, X-rays, MRIs, and treatment records.</li>
              <li><strong>Billing Services:</strong> Generate itemized bills for coded reports, fully compliant with HIPAA regulations.</li>
              <li><strong>Claim Submission:</strong> Transmit securely formatted claims to ensure smooth processing.</li>
              <li><strong>Denial Management:</strong> Investigate flagged claims, correct errors, and resubmit promptly.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified and Compliant:</strong> ISO 9001:2015 certified and HIPAA-compliant services with 20+ years of experience.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, NDA-protected billing executives, secure infrastructure.</li>
              <li><strong>High Accuracy and Quality:</strong> Diligent billing ensures clean claims and fewer errors.</li>
              <li><strong>Short Turnaround:</strong> Efficient processing for timely reimbursement.</li>
              <li><strong>Scalable Services:</strong> Flexible solutions tailored to your evolving needs.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective options that can save thousands annually.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project assistant for seamless communication.</li>
              <li><strong>Experienced Team:</strong> AAPC-certified experts skilled in complex billing regulations.</li>
              <li><strong>Modern Infrastructure:</strong> Handles multiple projects simultaneously without delays.</li>
              <li><strong>Secure Data Exchange:</strong> SFTP and VPN ensure risk-free sharing of sensitive data.</li>
              <li><strong>24/7 Availability:</strong> Support via phone, email, and web chat anytime you need it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Boost Your Revenue Collection?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides dependable healthcare BPO solutions with advanced technology,
              specialized teams, and infrastructure to speed up your reimbursement process.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out today for a cost-effective occupational health billing solution tailored
              to your practice.
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

export default OccupationalHealthBilling;
