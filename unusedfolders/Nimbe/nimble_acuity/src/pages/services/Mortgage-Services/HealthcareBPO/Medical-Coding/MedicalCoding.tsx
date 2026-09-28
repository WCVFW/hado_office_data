import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalCoding: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Coding Services
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with coding accuracy, compliance updates, or lack of skilled resources? 
              <strong> Nimble Acuity </strong> delivers specialized medical coding services for 
              both inpatient and outpatient facilities—helping you maximize reimbursements while 
              reducing denials and compliance risks.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With coding regulations evolving constantly, healthcare organizations face revenue 
              leakage and compliance challenges. At <strong>Nimble Acuity</strong>, we provide 
              end-to-end coding solutions powered by certified coders and the latest tools. Our 
              services ensure error-free documentation, optimized reimbursements, and reduced 
              administrative burden.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Medical Coding Solutions
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Medical Coding Audits:</strong> Identify errors, eliminate revenue leakage, and stay audit-ready.</li>
              <li><strong>HCC & Risk Adjustment Coding:</strong> Accurate prospective and retrospective reviews for MRA/CRA.</li>
              <li><strong>Medical Coding Analysis:</strong> Streamline claims submission and ensure compliance.</li>
              <li><strong>Specialty Coding:</strong> Expertise across cardiology, neurology, pediatrics, radiology, orthopedics, ER, SNF, and more.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Medical Coding Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>File Access:</strong> Securely receive patient charts via FTP, VPN, or PMS access.</li>
              <li><strong>Pre-Coding:</strong> Add insurance, doctor, and modifier details before coding begins.</li>
              <li><strong>Accurate Coding:</strong> Assign CPT/ICD/HCPCS codes with precision.</li>
              <li><strong>Quality Check:</strong> Certified senior coders audit charts for upcoding/downcoding risks.</li>
              <li><strong>Submission:</strong> Deliver coded charts to billing teams or clients for claims processing.</li>
              <li><strong>Client Feedback:</strong> Continuous improvement with feedback integration.</li>
            </ol>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Coding Standards & Tools We Use
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>CPT & HCPCS (Level I & II)</li>
              <li>ICD-10-CM Coding</li>
              <li>Compliance with LMRP, CPT Assistant, and HCPCS Level II norms</li>
              <li>Error prevention for both undercoding and overcoding</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for Medical Coding?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>HIPAA & ISO/IEC 27001:2022 Certified:</strong> Strict adherence to compliance and data security.</li>
              <li><strong>Experienced Coders:</strong> 100+ man-years of expertise across multiple specialties.</li>
              <li><strong>High-Quality Results:</strong> Error-free, audit-ready coding services.</li>
              <li><strong>Dedicated Project Managers:</strong> Single point of contact for all project updates.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock availability across global time zones.</li>
              <li><strong>Scalable Services:</strong> Flexible to match seasonal or urgent needs.</li>
              <li><strong>Cost-Effective:</strong> Affordable pricing models that reduce overhead costs.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Medical Billing Services</li>
              <li>Revenue Cycle Management</li>
              <li>Healthcare Claims Adjudication</li>
              <li>Telehealth Billing Support</li>
              <li>EMR/EHR Data Management</li>
              <li>Pharmacy Business Support</li>
              <li>Medical Transcription & Animation Services</li>
            </ul>
          </div>

          {/* Customer Success */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customer Success Story
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Clearing Coding Backlogs for a Maryland Provider:</strong> 
              Nimble Acuity’s team eliminated coding backlogs within days, improving reimbursements 
              and reducing denials.
            </p>
            
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "Thank you so much! You have gone above and beyond and have helped us tremendously."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – Spokesperson, EMR Service Provider, Florida
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Coding to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With 6+ years of expertise, Nimble Acuity ensures compliant, error-free, and 
              cost-effective coding services that maximize reimbursements and reduce denials. 
              Partner with us to simplify your coding operations and focus on patient care.
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

export default MedicalCoding;
