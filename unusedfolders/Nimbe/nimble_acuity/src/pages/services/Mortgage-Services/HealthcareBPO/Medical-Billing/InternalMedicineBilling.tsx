import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const InternalMedicineBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Internal Medicine Billing: Maximize Revenue, Eliminate Redundancies
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with collections or claim denials in your internal medicine practice? 
              Partner with <strong>nimble acuity</strong> to streamline your billing, reduce costs, 
              and improve cash flow. Our expert team delivers precise, error-free services that 
              maximize reimbursements and strengthen your practice's financial health.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience in medical billing and coding, <strong>nimble acuity</strong> 
              provides specialized solutions tailored to the unique needs of internal medicine practices. 
              We ensure accuracy, compliance, and efficiency across all billing operations.
            </p>
          </div>

          {/* Comprehensive Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Internal Medicine Billing Solutions
            </h3>
            <p className="text-gray-700 mb-4"><strong>Specialties:</strong></p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 list-disc list-inside mb-4">
              <li>Rheumatology</li>
              <li>Pulmonology</li>
              <li>Nephrology</li>
              <li>Cardiology</li>
              <li>Oncology</li>
              <li>Gastroenterology</li>
              <li>Geriatric Medicine</li>
              <li>Infectious Diseases</li>
              <li>Endocrinology</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Procedures:</strong></p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700 list-disc list-inside mb-4">
              <li>Bronchoscopy</li>
              <li>ERCP</li>
              <li>Dialysis</li>
              <li>Endoscopy</li>
              <li>Mechanical Ventilation</li>
              <li>Intra-aortic Balloon Pump</li>
              <li>Cardiac Ablation</li>
              <li>Angioplasty</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Additional Services:</strong></p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Insurance Verification and Authorization</li>
              <li>Coding and Audits</li>
              <li>Electronic Claim Submission</li>
              <li>AR Follow-up</li>
              <li>Patient Collections</li>
              <li>Advanced Reporting and Analytics</li>
            </ul>
          </div>

          {/* Streamlined Billing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Billing Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Analyze Requirements:</strong> Assess your practice’s specific billing needs.</li>
              <li><strong>Secure Records:</strong> Receive medical billing records through secure, encrypted channels.</li>
              <li><strong>Validate and Submit:</strong> Validate each record and submit claims accurately into your software.</li>
              <li><strong>Reporting:</strong> Generate comprehensive reports to keep you informed at every step.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Pay only for the services you need with customizable options.</li>
              <li><strong>Complete Data Security:</strong> ISO/IEC 27001:2022 ISMS-certified and HIPAA-compliant for full confidentiality.</li>
              <li><strong>High-Quality, Error-Free Services:</strong> ISO-certified processes ensure flawless billing.</li>
              <li><strong>Dedicated Support:</strong> Project manager as a single point of contact for all your needs.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support for questions or issues.</li>
              <li><strong>Scalability:</strong> Resources and bandwidth to handle growth seamlessly.</li>
              <li><strong>Quick Turnaround:</strong> Multiple global delivery centers allow fast service delivery.</li>
              <li><strong>Experienced Experts:</strong> Highly skilled internal medicine billing specialists ensuring accuracy and efficiency.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Improve Cash Flow and Focus on Patients?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for reliable, efficient, and cost-effective internal medicine billing solutions that maximize your reimbursements and reduce administrative burden.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to get started with a trusted partner for your internal medicine billing needs.
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

export default InternalMedicineBilling;
