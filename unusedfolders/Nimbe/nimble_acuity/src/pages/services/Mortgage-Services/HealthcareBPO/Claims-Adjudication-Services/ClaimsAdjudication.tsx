import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ClaimsAdjudication: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Claims Adjudication Services
            </h2>
            <p className="text-lg text-gray-600">
              Expedite claims execution and contain risks impacting your profit with accurate and thorough healthcare claims adjudication solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to achieve fast adjudication relying on internal staff? Is productivity dropping due to claims backlog? Partner with <strong>nimble acuity</strong> for healthcare claims adjudication services and streamline your claims process with accuracy, speed, and compliance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We help fight fraud, boost productivity, and ensure timely reimbursements by thoroughly scrutinizing claims. Our examiners validate patient details, diagnostic codes, and reject erroneous or duplicate submissions — helping you contain risks and maximize profit.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Claims Adjudication Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Claims Processing:</strong> End-to-end processing for payers, providers, clinics, and billing companies.</li>
              <li><strong>Encounter Processing:</strong> High-accuracy claims and encounter processing with quick turnaround times.</li>
              <li><strong>Remittance Processing:</strong> Reliable processing to ensure uninterrupted provider payments.</li>
              <li><strong>Medicare Reimbursements:</strong> Manage payments for Medicare beneficiaries efficiently.</li>
              <li><strong>Dental Claims Adjudication:</strong> Settle disputes and ensure timely entitlement for dental claims.</li>
            </ul>
          </div>

          {/* Types of Claims */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Types of Claims We Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>HCFA 1500 / CMS 1500</li>
              <li>UB92 / UB04</li>
              <li>Dental Claims</li>
              <li>Pends / Correspondence</li>
              <li>Enrollment Forms Processing (EFP)</li>
              <li>Vision Forms</li>
              <li>Miscellaneous / Non-standard Claims</li>
            </ul>

            <h4 className="text-xl font-semibold text-[#006A7C] mt-6 mb-2">
              Additional Related Services
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>PPO Repricing</li>
              <li>Forms Processing</li>
              <li>Insurance Fraud Detection</li>
              <li>EDI Integration</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Claims Adjudication Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Initial Processing Review:</strong> Detect errors such as incorrect patient details, missing codes, or mismatched data.</li>
              <li><strong>Automatic Review:</strong> Validate eligibility, pre-certification, deadlines, and coding accuracy.</li>
              <li><strong>Manual Review:</strong> Detailed manual checks by nurses and doctors for complex or special procedures.</li>
              <li><strong>Payment Determination:</strong> Categorize claims as paid, denied, or reduced based on diagnosis and billing.</li>
              <li><strong>Payment:</strong> Generate explanation of payment with detailed reimbursement and adjudication data.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Claims Adjudication?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO-Certified & HIPAA Compliant:</strong> Secure and compliant claims handling.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with strong encryption protocols.</li>
              <li><strong>Qualified Team:</strong> Experienced adjudicators and insurance experts.</li>
              <li><strong>Best Infrastructure:</strong> Modern systems for reliable and fast delivery.</li>
              <li><strong>Quick Turnaround:</strong> Global delivery centers ensure faster processing.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for smooth communication.</li>
              <li><strong>Scalable & Affordable:</strong> Flexible pricing based on processed claims volume.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support for clients worldwide.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Medical Transcription Services</li>
              <li>Medical Billing Services</li>
              <li>Revenue Cycle Management</li>
              <li>EMR Services</li>
              <li>Telehealth Services</li>
              <li>Medical Coding Services</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Eligibility Verification:</strong> Streamlined verification and A/R follow-up for a billing client with great results.</li>
              <li><strong>Telemedicine Provider:</strong> Enabled fast pharmacy & insurance eligibility checks with short turnaround times.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 italic text-gray-700">
            <p>
              "Overall I am pleased with the support. The response time and communication were fine. Knowledge of billing and claims was above expectation. I recommend <strong>nimble acuity</strong> to those contemplating claims adjudication services from an experienced partner."
            </p>
            <p className="mt-4 font-medium">
              — Founder, Medical Device Market Strategy & Reimbursement Company, Tustin, CA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for Healthcare Claims Adjudication
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26+ years of experience, we deliver efficient, accurate, and secure claims adjudication services for global clients. Improve your operational efficiency and revenue cycle management with us.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss your claims adjudication needs.
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

export default ClaimsAdjudication;
