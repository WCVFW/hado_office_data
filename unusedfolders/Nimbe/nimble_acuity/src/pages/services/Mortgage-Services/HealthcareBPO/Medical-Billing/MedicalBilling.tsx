import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";


const MedicalBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Specialized Medical Billing and Coding Services
            </h2>
            <p className="text-lg text-gray-600">
              Is your medical facility looking to reduce billing denials, increase efficiency, and ensure timely reimbursement? Nimble Acuity offers seamless solutions to help you focus on what matters most: patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a leading <strong>medical BPO service provider</strong> with nearly two decades of experience. We offer comprehensive, end-to-end solutions that can reduce your operating costs by as much as 40%. Our team of skilled experts handles everything from following up on claims to managing denied claims and tracking receivable balances, ensuring your financial operations run smoothly.
            </p>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Your Billing & Coding to Us?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Significant Cost Savings:</strong> Reduce your billing and coding costs by 40-60%.</li>
              <li><strong>Minimized Denials:</strong> Our accurate data management drastically reduces claims denials.</li>
              <li><strong>Faster Reimbursements:</strong> Benefit from expedited processing and submission of claims.</li>
              <li><strong>Zero Staffing Hassles:</strong> Eliminate costs associated with training, employee benefits, and turnover.</li>
              <li><strong>Improved Cash Flow:</strong> Experience a steady and predictable revenue stream.</li>
              <li><strong>Round-the-Clock Service:</strong> We work overnight so your medical staff can focus on patients.</li>
            </ul>
          </div>

          {/* Our Medical Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Billing & Coding Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Medical Billing</li>
              <li>Medical Coding</li>
              <li>Physician Billing Services</li>
              <li>EHR Chart Building Services</li>
              <li>HCC Medical Coding Services</li>
              <li>Patient Demographic Entry</li>
              <li>ICD-10 and CPT Coding</li>
              <li>Medical Data Entry Services</li>
              <li>Charge Entry</li>
              <li>Claims Submission</li>
              <li>Appointment Scheduling</li>
              <li>Healthcare Collection Services</li>
              <li>...and many more tailored services.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Differentiators
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Experts:</strong> Our team is proficient with ICD-10, CPT, and HCPCS codes, and is certified (CPC).</li>
              <li><strong>Data Security:</strong> We are ISO/IEC 27001:2022 certified, ensuring the highest level of information security.</li>
              <li><strong>HIPAA Compliant:</strong> All services are conducted with strict adherence to HIPAA regulations.</li>
              <li><strong>Scalable Solutions:</strong> Easily scale our services up or down to meet your changing needs.</li>
              <li><strong>Dedicated Support:</strong> Get a single point of contact for all your project updates and queries.</li>
              <li><strong>High-Quality Services:</strong> As an ISO-certified organization, we guarantee error-free and top-quality services.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Simplify Your Healthcare Financials
            </h3>
            <p className="text-gray-700 mb-6">
              With over 6 years of experience and a 98% accuracy rate, Nimble Acuity is a trusted partner for hospitals, clinics, and individual practices. Let us handle the complexities of billing and coding so you can focus on patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to streamline your billing process? Contact us today to discuss your needs.
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
export default MedicalBilling;
