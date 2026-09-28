import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const RevenueIntegrity: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Revenue Integrity Services
            </h2>
            <p className="text-lg text-gray-600">
              Maximize your ROI with a flexible blend of leading-edge technologies and an experienced
              workforce. Outsource healthcare revenue integrity services to <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              On average, healthcare systems lose up to 5% of their net charges due to revenue
              leakages. Without a standardized program, 64% of providers face financial risk. As
              value-based reimbursement (VBR) rises, today’s captured charges shape tomorrow’s
              target prices. <strong>Nimble Acuity</strong> helps providers establish scalable
              revenue integrity programs, improve compliance, and optimize the revenue cycle using
              AI-driven workflows.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Revenue Integrity Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Structured Revenue Integrity Program:</strong> Improve coding, charge
                accuracy, documentation, and compliance with advanced QA processes.
              </li>
              <li>
                <strong>Clinical Documentation Improvement:</strong> Identify documentation gaps,
                track trends, educate staff, and enable collaboration for accuracy.
              </li>
              <li>
                <strong>Charge Capture Audit:</strong> Detect missed billing opportunities through
                detailed claim and documentation reviews, with performance improvement plans.
              </li>
              <li>
                <strong>HIM Coding Review & Staffing:</strong> Expert coders clear backlogs, ensure
                compliance, and provide coding education across CPT, HCPCS, and DRG coding.
              </li>
              <li>
                <strong>Payment Variance Analysis:</strong> Review underpaid/denied claims and manage
                appeals with root cause analysis.
              </li>
              <li>
                <strong>Clinical Access & Triage Management:</strong> Direct patients to appropriate
                care centers for efficient treatment.
              </li>
              <li>
                <strong>Utilization Management:</strong> Ensure medical necessity and cost-effective
                care with prospective reviews.
              </li>
              <li>
                <strong>Medical Authorization Management:</strong> Manage pre-certifications and
                authorizations for inpatient and outpatient services.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Revenue Integrity Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Pre-registration:</strong> Collect patient data and communicate payment procedures upfront.</li>
              <li><strong>Registration:</strong> Verify pre-registration data to reduce errors.</li>
              <li><strong>Charge Capture:</strong> Record services accurately and submit to payers.</li>
              <li><strong>Utilization Management:</strong> Confirm coverage and treatment necessity.</li>
              <li><strong>Medical Coding:</strong> Translate services into ICD-10, CPT, and HCPCS codes.</li>
              <li><strong>Claim Submission:</strong> File accurate claims to minimize denials.</li>
              <li><strong>Denial Management:</strong> Identify discrepancies and resubmit claims.</li>
              <li><strong>Insurance Follow-up:</strong> Pursue unpaid or underpaid claims.</li>
              <li><strong>Billing & Collections:</strong> Generate accurate statements and track balances.</li>
            </ol>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Tools & Platforms We Use
            </h3>
            <p className="text-gray-700">
              Our team leverages advanced platforms including Medisoft, Nextgen, Epic, Brightree,
              Athena, Pulse, Proclaim, and CareCloud to deliver faster, more accurate results.
            </p>
          </div>

          {/* Industries */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Industries We Serve
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Clinics & Care Centers</li>
              <li>Diagnostic Labs</li>
              <li>Hospitals</li>
              <li>Insurance & Billing Companies</li>
              <li>RCM Companies</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible, cost-effective solutions tailored to your budget.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with HIPAA compliance.</li>
              <li><strong>Industry Certifications:</strong> HITRUST CSF, SOC 1, PCI DSS, ISO 9001:2015.</li>
              <li><strong>Dedicated Project Managers:</strong> Single point of contact for streamlined communication.</li>
              <li><strong>Experienced Coders:</strong> Skilled, certified professionals trained in the latest tools.</li>
              <li><strong>24/7 Support:</strong> Always available to resolve issues and queries.</li>
              <li><strong>Scalable Services:</strong> Easily adjustable to handle additional volume.</li>
              <li><strong>Proven Results:</strong> 240+ programs, 24+ global delivery centers, and support for 278,000+ physicians.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Georgian Client:</strong> Processed 1200+ claims per month across 4 practices with demographics entry.
              </li>
              <li>
                <strong>Houston Client:</strong> Managed 17,000+ claims monthly using Kareo with high accuracy and efficiency.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <p className="text-gray-700 italic">
              “I want to thank you for the professional way in which you are managing the project
              and meeting our deadlines.”
            </p>
            <p className="text-gray-700 font-medium mt-2">
              – CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Strengthen Your Healthcare Revenue Integrity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> to discover hidden leakages, ensure compliance, 
              and improve financial performance with our scalable, technology-driven revenue integrity services.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default RevenueIntegrity;
