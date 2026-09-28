import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const InsuranceEligibility: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Insurance Eligibility Verification Services
            </h2>
            <p className="text-lg text-gray-600">
              From initial data collection to final eligibility confirmation, Nimble Acuity provides
              end-to-end insurance coverage validation services. Our dusk-to-dawn approach ensures
              you start each day with accurate and updated insurance information, reducing claim
              denials and ensuring faster reimbursements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We are proficient in interpreting and applying the intricacies of health plans and policy
              changes. By leveraging advanced verification systems, our experts optimize your revenue
              cycle, minimize denials, and enhance financial stability. Partner with <strong>Nimble Acuity</strong> 
              to improve your operational efficiency and patient satisfaction.
            </p>
          </div>

          {/* Key Service Areas */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Insurance Verification Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Patient Registration & Identity Validation</li>
              <li>Insurance Coverage Assessment</li>
              <li>Eligibility & Benefits Confirmation</li>
              <li>Exclusions and Deductibles Review</li>
              <li>Auditing & Quality Checks</li>
              <li>Claim Discrepancy Resolution</li>
              <li>Regulatory Standards Compliance</li>
              <li>Co-pay and Deductible Clarification</li>
              <li>Upfront & Back-end Payment Collections</li>
              <li>Comprehensive Documentation</li>
            </ul>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Verification Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Patient Data Collection:</strong> Capture demographics and visit details for verification.</li>
              <li><strong>Insurance Data Acquisition:</strong> Record policy numbers, coverage type, and provider details.</li>
              <li><strong>Provider Communication:</strong> Engage with insurers to validate eligibility status.</li>
              <li><strong>Coverage Confirmation:</strong> Verify plan inclusions, exclusions, and pre-existing conditions.</li>
              <li><strong>Policy Detail Review:</strong> Ensure validity, active dates, and coverage applicability.</li>
              <li><strong>Financial Clarification:</strong> Outline co-pays, deductibles, and patient obligations.</li>
            </ol>
          </div>

          {/* Technology Advantage */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Technology We Leverage
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Advanced Billing Software:</strong> AI-powered tools for accurate, timely billing.</li>
              <li><strong>Error-Free Verification:</strong> Automated systems with built-in quality checks.</li>
              <li><strong>High-Speed Systems:</strong> Ensure efficient and up-to-date verification processing.</li>
              <li><strong>Optimized Workflows:</strong> Fast turnaround times with streamlined operations.</li>
              <li><strong>Automated Check-In:</strong> Simplifies patient onboarding and reduces wait times.</li>
              <li><strong>Claims Handling:</strong> Reduces rejections with efficient automated claim workflows.</li>
              <li><strong>Patient Satisfaction:</strong> Enhanced through accurate, quick, and transparent processes.</li>
            </ul>
          </div>

          {/* Beneficiaries */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Who Can Benefit?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Healthcare Providers</li>
              <li>Dental Practices</li>
              <li>Mental Health Clinics</li>
              <li>Physical Therapy Centers</li>
              <li>Chiropractic Offices</li>
              <li>Home Healthcare Agencies</li>
              <li>Ambulance Services</li>
              <li>Pharmaceutical Companies</li>
              <li>Medical Equipment Suppliers</li>
              <li>Health Insurance Companies</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>US Medical Billing Firm:</strong> Boosted ROI by refining verification and pre-authorization processes.
              </li>
              <li>
                <strong>Urgent Care Clinic:</strong> Increased collections from 53% to 65% and reduced A/R to 20 days within six months.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <p className="text-gray-700 italic">
              “The verifications are going well. Anytime there is an issue or something additional we
              need; it gets addressed quickly. We appreciate your follow-up. Thank you so much.”
            </p>
            <p className="text-gray-700 font-medium mt-2">
              – Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Enhance Profitability with Accurate Insurance Verification
            </h3>
            <p className="text-gray-700 mb-6">
              By outsourcing insurance eligibility verification to <strong>Nimble Acuity</strong>, you gain access to
              HIPAA-compliant, technology-driven processes that minimize denials and maximize revenue.
              Let our experts ensure every claim is supported by accurate eligibility checks.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Custom Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default InsuranceEligibility;
