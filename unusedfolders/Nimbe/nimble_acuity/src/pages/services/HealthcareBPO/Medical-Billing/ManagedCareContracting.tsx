import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const ManagedCareContracting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Managed Care Contracting Services: Maximize Your Revenue and Overcome Denials
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with profit margins or payer reimbursements? Partner with 
              <strong> nimble acuity</strong> to optimize your managed care contracts. 
              Our certified contracting agents analyze your pricing data, catch errors early, 
              and negotiate effectively to ensure you receive timely and accurate payments.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience, <strong>nimble acuity</strong> provides a 
              comprehensive approach to managed care contracting, handling everything from 
              preparation and analysis to negotiation, ensuring alignment with top payers.
            </p>
          </div>

          {/* Comprehensive Contracting Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Contracting Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Reimbursement Benchmarking:</strong> Assess market reimbursements to optimize service costs and accelerate negotiations.</li>
              <li><strong>Payment and Contract Analysis:</strong> Audit contracts for compliance, payment accuracy, and quality of care to avoid complications.</li>
              <li><strong>Best Practices Adherence:</strong> Ensure staff follows industry standards, track claim timelines, and assist with negotiations.</li>
              <li><strong>Strategic Negotiations:</strong> Develop tailored contracting strategies based on your practice size, risk, and goals.</li>
            </ul>
          </div>

          {/* Managed Care Contracting Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Managed Care Contracting Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Develop a Strategy:</strong> Assess your practice, contract performance, and revenue opportunities.</li>
              <li><strong>Negotiate Contracts:</strong> Analyze rates, perform disruption analysis, and implement contracting strategy with payers.</li>
              <li><strong>Contract Implementation:</strong> Ensure contract accuracy, manage patient relationships, and track payer performance.</li>
              <li><strong>Finalize and Report:</strong> Provide detailed reports after audit and analysis for transparency and records.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Solutions:</strong> Custom packages providing full process visibility at a fair cost.</li>
              <li><strong>High-Quality Services:</strong> Focused on delivering the best possible outcomes.</li>
              <li><strong>Patient Data Security:</strong> ISO/IEC 27001:2022 compliant and HIPAA-adherent for total data protection.</li>
              <li><strong>Expert Team:</strong> Qualified physicians and contracting agents with in-depth knowledge of guidelines.</li>
              <li><strong>Scalable and Fast:</strong> Quick turnaround using the latest tools, without slowing ongoing operations.</li>
              <li><strong>Reliable Support:</strong> Dedicated team ensuring support every step of the way.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Get What You’re Owed?
            </h3>
            <p className="text-gray-700 mb-6">
              With 6+ years of experience, <strong>nimble acuity</strong> helps healthcare providers recover revenue, optimize contracts, and maintain a proven track record of 98% accuracy.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to explore expert managed care contracting services and maximize your reimbursements.
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

export default ManagedCareContracting;
