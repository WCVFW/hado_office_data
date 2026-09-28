import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CPTICD10Coding: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              CPT and ICD-10 Coding Services
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with pending claims or untimely reimbursements? Expert coding with 
              <strong> ICD-10 </strong> and <strong>CPT</strong> can transform your revenue cycle, 
              reduce denials, and ensure accurate, timely payments.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a trusted leader in medical coding with nearly 
              two decades of experience in healthcare support services. Our certified coders 
              ensure accurate documentation, compliance, and efficient claims processing. 
              By outsourcing your CPT and ICD-10 coding to us, you save time, minimize errors, 
              and maximize reimbursements.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our CPT and ICD-10 Coding Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>ICD Coding:</strong> Skilled coding for ICD-9, ICD-9-CM, ICD-10, ICD-10-CM, ICD-10-CA, and ICPM.
              </li>
              <li>
                <strong>CPT Coding:</strong> Accurate assignment across Category I, II, and III codes, 
                including surgical, diagnostic, evaluation, and emerging technologies.
              </li>
              <li>
                <strong>Additional Services:</strong> Patient statement preparation, claims submission, 
                insurance follow-ups, payment processing, and detailed reporting.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Medical Coding Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Patient Information Retrieval:</strong> Secure access via FTP or VPN.</li>
              <li><strong>Pre-Coding:</strong> Translate diagnoses and procedures into accurate code categories.</li>
              <li><strong>Assigning Codes:</strong> Apply correct ICD-10 and CPT codes for claims processing.</li>
              <li><strong>Quality Audit:</strong> Multi-level QA ensures accuracy, compliance, and zero discrepancies.</li>
              <li><strong>Submission:</strong> Upload or transfer coded charts securely for claims processing.</li>
              <li><strong>Feedback & Improvement:</strong> Client feedback drives continuous optimization.</li>
            </ol>
            <div className="mt-6 text-gray-600 space-y-1">
              <p>✔ 24-hour TAT</p>
              <p>✔ 98% Accuracy</p>
              <p>✔ 40% Cost Reduction</p>
              <p>✔ 26+ Years of Experience</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable Services:</strong> Cost-efficient coding with accurate results.</li>
              <li><strong>HIPAA Compliance:</strong> Complete adherence to privacy and data security standards.</li>
              <li><strong>Advanced Tools:</strong> Use of ICD-10-compliant and industry-leading software.</li>
              <li><strong>Robust Infrastructure:</strong> Secure delivery centers with 200% backup and redundancy.</li>
              <li><strong>Expert Coders:</strong> 50+ AAPC-certified professionals ensuring compliance and accuracy.</li>
              <li><strong>Global Delivery:</strong> Multiple centers enabling fast turnaround times worldwide.</li>
            </ul>
          </div>

          {/* Client Success Story */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Story
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Nimble Acuity</strong> helped a Maryland-based billing company 
              clear extensive backlogs within just 12 hours, ensuring smooth reimbursement 
              processing and reduced denials.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 text-left">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "I appreciate your help! I am very impressed by the efficiency and the quality of medical transcription."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – MD, Medical Practice, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking for Reliable CPT & ICD-10 Coding Services?
            </h3>
            <p className="text-gray-700 mb-6">
              Our certified multi-specialty coders deliver safe, accurate, and efficient coding solutions. 
              Partner with Nimble Acuity to ensure compliance, maximize reimbursements, and optimize 
              your revenue cycle.
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

export default CPTICD10Coding;
