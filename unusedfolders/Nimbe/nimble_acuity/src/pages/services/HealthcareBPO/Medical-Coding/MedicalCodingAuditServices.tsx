import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalCodingAudit: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Coding Audit Services
            </h2>
            <p className="text-lg text-gray-600">
              Prevent revenue leakage with <strong>Nimble Acuity’s</strong> 
              medical coding audit services. Our experts identify and correct 
              coding errors so you are appropriately reimbursed for every service.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Coding errors and claim denials during audits are common in healthcare 
              operations—impacting both efficiency and revenue. Hospitals, clinics, 
              nursing homes, and private practices rely on accurate coding to maintain 
              financial stability. Our comprehensive audit services minimize errors, 
              ensure compliance, and optimize the claims process for maximum revenue.
            </p>
          </div>

          {/* How Our Audits Transform Healthcare */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              How Do Our Medical Coding Audit Services Transform Healthcare?
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Medical Coding Compliance:</strong> Adheres to regulations, prevents denials, and ensures accuracy.</li>
                <li><strong>Claims Management:</strong> Reduces errors, increases reimbursements, and lowers costs.</li>
                <li><strong>HCC Coding & Auditing:</strong> Optimizes risk adjustment scores and boosts revenue.</li>
                <li><strong>Clinical Documentation:</strong> Improves patient care quality and billing accuracy.</li>
                <li><strong>Risk Adjustment:</strong> Enhances reimbursements while minimizing financial risks.</li>
              </ul>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Coding Process Efficiency:</strong> Streamlines workflows and boosts productivity.</li>
                <li><strong>Unbiased Reporting:</strong> Delivers actionable insights into coding practices.</li>
                <li><strong>Coding Due Diligence:</strong> Detects compliance gaps and prevents penalties.</li>
                <li><strong>Coding Accuracy & Review:</strong> Ensures correct reimbursements with fewer denials.</li>
                <li><strong>Denials Management:</strong> Identifies root causes and prevents future claim rejections.</li>
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Our Medical Coding Audit Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Patient Chart Access:</strong> Securely retrieve and protect patient data for audit readiness.</li>
              <li><strong>Pre-Coding:</strong> Enter insurance, provider, and procedure details to establish coding accuracy.</li>
              <li><strong>ICD & CPT Coding:</strong> Apply correct medical codes while identifying discrepancies.</li>
              <li><strong>Quality Check:</strong> Conduct multi-layer audits to avoid upcoding/downcoding risks.</li>
              <li><strong>Submission:</strong> Deliver accurate coded charts for smooth claims processing.</li>
              <li><strong>Client Feedback:</strong> Integrate client feedback to continuously improve performance.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for Coding Audits?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>HIPAA Compliance:</strong> Full adherence to data privacy regulations.</li>
              <li><strong>Robust Security:</strong> Safeguards with encryption, access control, and audit tracking.</li>
              <li><strong>Expert Team:</strong> Certified professionals with years of audit experience.</li>
              <li><strong>Advanced Tools:</strong> Leverage the latest audit software for precision and speed.</li>
              <li><strong>Affordable Pricing:</strong> High-quality services delivered at cost-effective rates.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Revenue Cycle Management</li>
              <li>CPT Coding Services</li>
              <li>Denial Management</li>
              <li>Eligibility Verification</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-5xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>ICD-10 Migration for a Florida Billing Firm:</strong> Nimble Acuity trained and supported 
              a billing company through ICD-9 to ICD-10 transition, ensuring compliance and performance improvement.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Accounts Receivable Recovery:</strong> Our AR solutions helped a healthcare company clear denials 
              and improve claim settlements significantly.
            </p>
            
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <blockquote className="text-lg italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "Hello, I wanted to express my gratitude for the hard work the Data and AR teams have done. 
              Their efforts over the past month have paid off and delivered great results."
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              – RCM Account Manager, EMR Provider, Florida, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Coding Audit Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Our HIPAA-compliant audits safeguard patient data while ensuring accuracy, efficiency, 
              and compliance. With advanced safeguards and expert auditors, we help you transform 
              coding challenges into revenue opportunities.
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

export default MedicalCodingAudit;
