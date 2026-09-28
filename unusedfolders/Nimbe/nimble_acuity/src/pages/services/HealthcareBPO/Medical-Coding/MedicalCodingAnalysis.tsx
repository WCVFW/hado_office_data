import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const MedicalCodingAnalysis: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Coding Analysis Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your coding workflows and reduce denials by outsourcing{" "}
              <strong>medical coding analysis</strong> to{" "}
              <strong>Nimble Acuity</strong> — starting at{" "}
              <strong>$1280 per biller/month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With complex healthcare regulations and strict payer policies,{" "}
              <strong>coding accuracy is critical</strong>. Incomplete or
              incorrect coding leads to denials, underpayments, and workflow
              disruptions. At <strong>Nimble Acuity</strong>, our certified
              coders and proven processes minimize risks, reduce administrative
              burdens, and improve financial outcomes for providers worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Medical Coding Analysis Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Revenue Cycle Management:</strong> End-to-end RCM covering
                eligibility verification, registration, coding analysis, billing,
                and claims management.
              </li>
              <li>
                <strong>Coding Estimation:</strong> CPC/CCS-certified coders
                ensuring fewer denials and higher reimbursements.
              </li>
              <li>
                <strong>EHR Integration:</strong> Specialty-specific support for
                cardiology, internal medicine, dermatology, pain management, and
                more.
              </li>
              <li>
                <strong>Credentialing:</strong> Assistance with payer enrollment,
                fee schedules, and insurance reimbursements.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Proven Coding Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Receiving Files:</strong> Secure transfer via FTP or PMS/VPN access.</li>
              <li><strong>Pre-coding:</strong> Adding provider, payer, and modifier details with codes.</li>
              <li><strong>Coding:</strong> ICD-10, HCPCS, and CPT coding by certified experts.</li>
              <li><strong>Quality Control:</strong> Senior coders audit records to eliminate errors.</li>
              <li><strong>Submission:</strong> Validated charts securely submitted with daily logs.</li>
            </ol>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Tools We Use
            </h3>
            <p className="text-gray-700 mb-4">
              Our coders are proficient in industry-leading medical coding and
              practice management tools:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <li>MEDISOFT</li>
              <li>NextGen</li>
              <li>Epic</li>
              <li>Brightree</li>
              <li>Lytec</li>
              <li>athenahealth</li>
              <li>PULSE</li>
              <li>ProClaim</li>
              <li>CareCloud</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Industries We Serve
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
              <li>Diagnostic Labs</li>
              <li>Hospitals</li>
              <li>Insurance Firms</li>
              <li>Billing Companies</li>
              <li>Healthcare Clinics</li>
              <li>RCM Firms</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Affordable and flexible pricing tailored to your needs.</li>
              <li>ISO/IEC 27001:2022 certified data security and HIPAA compliance.</li>
              <li>World-class infrastructure with advanced tools.</li>
              <li>Dedicated project manager (SPOC) for seamless communication.</li>
              <li>Experienced coders certified in HCPCS II, ICD-10-CM, ICD-10-PCS.</li>
              <li>24/7 global support for fast issue resolution.</li>
              <li>Multiple delivery centers ensuring 7–10 hour turnaround.</li>
              <li>Scalable services to match growing demand.</li>
            </ul>
          </div>

          {/* Case Studies */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>ICD-10 Transition:</strong> Helped a US-based billing
                company migrate from ICD-9 to ICD-10 with seamless compliance.{" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">
                  Read more »
                </Link>
              </li>
              <li>
                <strong>Backlog Clearance:</strong> Supported a Maryland-based
                billing firm in quickly clearing large volumes of pending cases.{" "}
                <Link to="/case-studies" className="text-[#006A7C] hover:underline">
                  Read more »
                </Link>
              </li>
            </ul>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "We are very satisfied with your services. Keep up the good work!"
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – Leading Doctor, Kids Dental Clinic, Tampa, FL
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Coding Analysis?
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you need short-term support or full-scale outsourcing,{" "}
              <strong>Nimble Acuity</strong> delivers certified, ICD-10-compliant
              coding with precision and speed. Let’s optimize your revenue cycle today.
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

export default MedicalCodingAnalysis;
