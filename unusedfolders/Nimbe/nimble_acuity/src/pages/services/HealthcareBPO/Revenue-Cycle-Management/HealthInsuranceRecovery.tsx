import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const HealthInsuranceRecovery: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Health Insurance Recovery Services
            </h2>
            <p className="text-lg text-gray-600">
              Avail quick healthcare insurance claims settlement without any hassles. 
              <strong> Nimble Acuity</strong> offers HIRS at cost-effective rates starting at just $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Over 10% of U.S. medical claims are paid incorrectly due to discrepancies, 
              and nearly 15% go unfulfilled because of segmented follow-ups. This results in 
              higher costs and governance issues for providers.
            </p>
            <p>
              As experts in health insurance recovery, <strong>Nimble Acuity</strong> helps you fight 
              fraud, waste, and reduced fees. With advanced tools, analytics, and trained experts, 
              we maximize recovery while ensuring accuracy and compliance.
            </p>
          </div>

          {/* What is HIRS */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              What is Health Insurance Recovery?
            </h3>
            <p className="text-gray-700 mb-4">
              Our HIRS system is flexible, customizable, and ensures full resolution through payer liability 
              confirmation, collections, and identification of unrealized payments. Common reasons for unpaid claims include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Patient Demography Errors</li>
              <li>Insurance Writing Errors</li>
              <li>Medical Coding & Coverage Issues</li>
              <li>Payer Processing-Related Issues</li>
              <li>Delays Caused by Carriers</li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Health Insurance Recovery Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Subrogation Recovery:</strong> Recover unpaid amounts from liabilities such as MVAs, product issues, premises, and malpractice.</li>
              <li><strong>Overpayment Recovery:</strong> Identify and recover overpayments, ensuring accurate primary payments and reducing leakage.</li>
              <li><strong>Accurate Reporting:</strong> Ensure entitlement data accuracy, MSP/non-MSP reporting, and record maintenance.</li>
              <li><strong>Secondary Payer Validation:</strong> Validate commercial insurance coverage for accurate payer listing and premium accuracy.</li>
              <li><strong>Pharmacy Audits & Compliance:</strong> Retail, LTC, mail-order, drug audits, and FWA risk mitigation through analytics.</li>
              <li><strong>Specialty Medical Audits:</strong> DME, infusion therapy, and high-cost drug audits focusing on compliance and overpayment drivers.</li>
              <li><strong>Dependent Eligibility Audits:</strong> Validate dependents and remove ineligible members to cut costs and recover claims.</li>
              <li><strong>Medical Credit Balance Audits:</strong> Recover duplicate payments, COB errors, and contract overpayments.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Medical Billing & Coding</li>
              <li>Claims Adjudication Services</li>
              <li>Denial Management Services</li>
              <li>Insurance Eligibility Verification</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Outsource Health Insurance Recovery to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Exceptional Quality:</strong> ISO-certified with strict compliance and full record-keeping.</li>
              <li><strong>Enhanced Security:</strong> HIPAA-compliant infrastructure ensuring confidentiality and data protection.</li>
              <li><strong>Flexible & Scalable Model:</strong> Easily adjust resources, integrate with multiple systems, and scale with your needs.</li>
              <li><strong>Experienced Staff:</strong> Specialists with 5+ years of expertise handling U.S. healthcare payers.</li>
              <li><strong>Remote Follow-up:</strong> Direct, secure patient and payer follow-ups for faster resolution.</li>
              <li><strong>Seamless Integration:</strong> Works with Meditech, Invision, STAR, Paragon, Artiva, Medicare FISS, and more.</li>
              <li><strong>Dedicated Project Managers:</strong> A SPOC for smooth communication and project updates.</li>
              <li><strong>Custom Reporting:</strong> Dashboards and reporting with daily/weekly/monthly insights.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Eligibility Verification for a Clinical Billing Consumer:</strong> Provided verification, pre-authorization, and A/R follow-up services with cost efficiency and high quality.
              </li>
              <li>
                <strong>Pharmacy & Insurance Eligibility for Telemedicine Provider:</strong> Delivered accurate eligibility verification services, ensuring project commitments were met.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 ">
            <blockquote className="text-gray-700 italic mb-4">
              "The verifications are going well. Anytime there is an issue or something additional we need, it gets addressed and usually gets corrected quickly. We appreciate you following up. Thank you so much."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 ">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for High-Quality Health Insurance Recovery
            </h3>
            <p className="text-gray-600 mb-6">
              We identify and correct underpayments, prevent revenue leakage, and enhance 
              compliance while boosting patient satisfaction. Partner with us to streamline 
              health insurance recovery and strengthen your bottom line.
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

export default HealthInsuranceRecovery;
