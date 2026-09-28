import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const DentalClaimsAdjudication: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Dental Claims Adjudication Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with <strong>nimble acuity</strong> to settle dental claims disputes, ensure compliance, and secure the reimbursements you deserve — with zero hassle and maximum efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you caught in disputes with your dental insurance provider? Do manual adjudication processes drain your productivity and revenue? At <strong>nimble acuity</strong>, we simplify the dental claims adjudication process with accuracy, transparency, and compliance. With 26+ years of experience, our claims experts resolve denials, prevent errors, and maximize reimbursements, leaving you stress-free.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dental Claims Adjudication Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Determination of Claims Value:</strong> Ensure maximum benefits by accurately evaluating insurance coverage for dental procedures.</li>
              <li><strong>Preparation of EOBs:</strong> Provide clear Explanation of Benefits including payer paid amount, covered amount, discounts, and patient responsibility.</li>
              <li><strong>Fraud Detection & Validation:</strong> Scrutinize claims, bills, and codes to prevent fraudulent or lapsed claims from slipping through.</li>
              <li><strong>Duplicate Claims Check:</strong> Flag and resolve duplicate submissions to reduce denials.</li>
              <li><strong>Adjudication of Claim Benefits:</strong> Cross-check documents against payer policies for compliant processing.</li>
              <li><strong>Claims Data Extraction:</strong> Extract and process raw claims data to minimize backlogs and delays.</li>
              <li><strong>Software-driven Verification:</strong> Use advanced adjudication engines for automated, high-accuracy claim verification.</li>
              <li><strong>Dental Codes Review:</strong> Validate claims with complete CDT code knowledge as maintained by the ADA.</li>
              <li><strong>Re-adjudication Support:</strong> Resubmit denied claims with corrections for faster settlements.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dental Claims Adjudication Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Eligibility Verification:</strong> Validate claim authenticity before processing.</li>
              <li><strong>Data Entry:</strong> Input verified patient, treatment, and CDT code details into billing software.</li>
              <li><strong>Adjudication:</strong> Thorough review for compliance and accuracy.</li>
              <li><strong>Duplicate Check:</strong> Identify and flag duplicate or lapsed claims.</li>
              <li><strong>Benefit Determination:</strong> Generate a detailed Explanation of Benefits (EOB).</li>
              <li><strong>Code & Diagnosis Review:</strong> Check coding accuracy, bundling, and down-coding risks.</li>
              <li><strong>Status Tracking:</strong> Keep clients updated with online tracking and real-time status reports.</li>
              <li><strong>Follow-ups & Settlement:</strong> Engage with insurers until final settlement is approved.</li>
              <li><strong>Re-adjudication:</strong> Rectify and resubmit denied claims for approval.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Dental Claims Adjudication?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>State-of-the-art Technology:</strong> Advanced billing tools for faster adjudication.</li>
              <li><strong>Data Security:</strong> HIPAA-compliant and NDA-protected handling of sensitive patient data.</li>
              <li><strong>Experienced Team:</strong> Skilled negotiators adept at overturning denials.</li>
              <li><strong>Error-free Services:</strong> Low denial rate through multi-tier quality reviews.</li>
              <li><strong>Cost-effective:</strong> Affordable services without compromising accuracy.</li>
              <li><strong>24/7 Support:</strong> Assistance via phone, email, chat, or remote access anytime.</li>
              <li><strong>Rapid Turnaround:</strong> Swift claim resolutions with proactive follow-ups.</li>
              <li><strong>Fraud Detection:</strong> Early identification of suspicious or false claims.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated executive to handle all your queries.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Eligibility Verification Process:</strong> Helped a clinical billing client streamline pre-authorization and A/R follow-up with cost-effective solutions.</li>
              <li><strong>Insurance Eligibility Services:</strong> Assisted a telemedicine provider with pharmacy and medical eligibility verification, meeting timelines with high accuracy.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Overall, I am pleased with the support. The response time and communication were fine. Knowledge of billing and claims was above the expectation. I recommend nimble acuity to those who are contemplating claims adjudication services from an experienced partner."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Founder, Medical Device Market Strategy and Reimbursement Company, Tustin, California
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Dental Claims Adjudication Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Streamline claims processing, reduce denials, and maximize reimbursements with <strong>nimble acuity</strong>. Our proven methodology and experienced team help you save resources and achieve faster settlements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for a free quote and let us handle your dental claims adjudication with accuracy and efficiency.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default DentalClaimsAdjudication;
