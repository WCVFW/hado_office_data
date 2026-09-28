import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DmeBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              DME Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Tackle complex Durable Medical Equipment (DME) billing, reduce denials, and maximize reimbursements with Nimble Acuity. 
              Our certified experts handle coding, claims, insurance verification, and denial management while ensuring full HIPAA compliance.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              DME billing errors can lead to claim rejections, delayed payments, and lost revenue. 
              Nimble Acuity’s experienced team streamlines the billing process, manages claims efficiently, and expedites reimbursements, giving your practice financial stability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With real-time audits, proactive claim follow-ups, and detailed denial management, we minimize administrative burdens so you can focus on patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive DME Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Claims Submission:</strong> Timely, accurate submissions to reduce denials and maximize revenue.</li>
              <li><strong>Insurance Verification:</strong> Validate patient coverage to prevent delays and rejected claims.</li>
              <li><strong>Order Verification:</strong> Ensure DME orders are processed correctly and compliantly.</li>
              <li><strong>Coding Services:</strong> Certified coders maintain compliance and optimize reimbursements.</li>
              <li><strong>Claim Follow-Up:</strong> Persistent tracking to reduce payment delays and resolve issues promptly.</li>
              <li><strong>Denial Management:</strong> Analyze and resolve claim denials efficiently, implementing preventive measures.</li>
              <li><strong>Data Capture:</strong> Accurate patient data entry to reduce administrative burden.</li>
              <li><strong>Custom Reporting:</strong> Tailored financial and performance insights for strategic decision-making.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined DME Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Obtain and Validate Details: Collect patient and coverage information and verify insurance.</li>
              <li>Confirm Coverage: Ensure DME procedures/items are covered and identify patient responsibilities.</li>
              <li>Report Findings: Communicate coverage details to patients and practice staff.</li>
              <li>Billing and Collection: Submit claims, track statuses, and ensure timely collections from insurers and patients.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>HIPAA-Compliant & Secure:</strong> ISO/IEC 27001:2013 certified, ensuring data confidentiality and security.</li>
              <li><strong>Reduced Claim Denials:</strong> Proficient billing and coding to minimize errors and rejected claims.</li>
              <li><strong>Regular Reporting:</strong> Daily, weekly, and monthly reports provide actionable insights.</li>
              <li><strong>Process-Driven Approach:</strong> Structured workflow from eligibility verification to denial analysis.</li>
              <li><strong>Scalable Services:</strong> Easily adjust resources as your billing needs evolve.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance to address queries and resolve issues.</li>
              <li><strong>Affordable Pricing:</strong> Budget-friendly options tailored to your requirements.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager ensures seamless communication and updates.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Maximize Your DME Revenue?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your DME billing to Nimble Acuity and ensure accurate claims, timely reimbursements, and a significant boost in revenue.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Let us handle the complexities of coding, claims, and denial management while you focus on delivering excellent patient care.
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

export default DmeBilling;
