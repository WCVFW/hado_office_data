import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DenialManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Denial Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Turn denials into dollars and boost your clean-claims rate with Nimble Acuity’s denial management expertise.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Physician clinics, hospitals, and healthcare providers worldwide face revenue challenges from denied claims.
              Managing these claims requires time, expertise, and resources—this is where we step in. Our specialists resolve
              everything from coding errors and inaccurate patient information to delayed submissions and lack of authorization.
            </p>
            <p>
              With over two decades of experience, we skillfully guide you through the complex landscape of claim denials.
              Our comprehensive approach includes root cause analysis, corrective actions, and strategies to prevent
              future denials. We also recommend automation where possible—automating tasks like claim scrubbing,
              eligibility checks, and prior authorization to reduce denials and streamline your revenue cycle.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Denial Management Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Denial Identification</li>
              <li>Root Cause Analysis</li>
              <li>Categorizing Denials</li>
              <li>Denial Documentation</li>
              <li>Denied Claim Appeals</li>
              <li>Coding Review</li>
              <li>Clinical Documentation Improvement</li>
              <li>Denial Reporting & Analysis</li>
              <li>Technology Solutions</li>
              <li>Workflow Optimization</li>
              <li>Denied Claim Follow-up</li>
              <li>Monitoring & Preventing Denials</li>
              <li>Specialty-specific Services</li>
            </ul>
          </div>

          {/* Sectors */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Who We Serve
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Hospitals</li>
              <li>Clinics</li>
              <li>Private Practices</li>
              <li>Medical Billing Companies</li>
              <li>Medical Groups</li>
              <li>Specialized Medical Centers</li>
              <li>Telemedicine Providers</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Denial Management Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Claim Analysis:</strong> Thorough review of denied claims to identify patterns and root causes.</li>
              <li><strong>Error Correction:</strong> Fixing patient data, coding, and billing errors.</li>
              <li><strong>Re-submission of Claims:</strong> Submitting corrected claims for swift reimbursements.</li>
              <li><strong>Preventive Measures:</strong> Strategies like automated scrubbing and eligibility checks.</li>
              <li><strong>Continuous Monitoring:</strong> Regular review and adaptation to payer requirements.</li>
            </ol>
          </div>

          {/* Differentiators */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Service Quality:</strong> ISO-compliant, reliable, and continuously improving solutions.</li>
              <li><strong>Data Security:</strong> GDPR-compliant with strict privacy safeguards.</li>
              <li><strong>Global Delivery:</strong> Multiple centers ensuring round-the-clock services.</li>
              <li><strong>Advanced Tools & Automation:</strong> Proactive solutions to minimize denials.</li>
              <li><strong>Skilled Specialists:</strong> Experienced claims professionals for faster resolutions.</li>
              <li><strong>Flexible Pricing:</strong> Tailored pricing options to maximize ROI.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Revenue Cycle Management</li>
              <li>Medical Billing</li>
              <li>Medical Coding</li>
              <li>Medical Transcription</li>
              <li>Dental Billing</li>
              <li>Physician Billing</li>
              <li>Chiropractic Billing</li>
              <li>Healthcare Call Center</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Denial Management Services
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with Nimble Acuity to transform your denial management process, maximize revenue, and reduce claim denials.
              Our cost-efficient, scalable solutions allow you to focus on patient care while we ensure faster reimbursements.
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

export default DenialManagement;
