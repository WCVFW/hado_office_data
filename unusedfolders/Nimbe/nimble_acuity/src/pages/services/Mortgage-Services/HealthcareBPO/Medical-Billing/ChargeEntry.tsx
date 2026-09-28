import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ChargeEntry: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Charge Entry Services: Accurate Claims, Maximum Reimbursement
            </h2>
            <p className="text-lg text-gray-600">
              Are charge entry tasks slowing down your front office team? Are claim denials piling up due to errors? 
              <strong> Nimble Acuity</strong> ensures clean claims, faster reimbursements, and reduced denials so your 
              revenue cycle runs smoothly.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of expertise in healthcare BPO, <strong>Nimble Acuity</strong> provides 
              specialized charge entry services that accelerate reimbursements and minimize errors. 
              Our team ensures account-specific rules are applied for every specialty, guaranteeing 
              that only clean claims are transmitted to insurers.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Charge Entry Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Billing Data Capture</li>
              <li>Physician Charge Comparison & Mapping</li>
              <li>Patient Demographic Data Entry</li>
              <li>Billing Data Audit</li>
              <li>Claims Submission</li>
              <li>Denial Management</li>
              <li>Explanation of Benefits (EOB) Processing</li>
              <li>Reporting & Feedback</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & HIPAA Compliant:</strong> ISO 9001:2015 accredited and fully HIPAA compliant.</li>
              <li><strong>Data Security:</strong> Robust infrastructure and strict NDAs safeguard your information.</li>
              <li><strong>High Accuracy:</strong> 98% accuracy rate ensures faster reimbursements with fewer denials.</li>
              <li><strong>Quick Turnaround:</strong> 30% faster claim processing compared to industry standards.</li>
              <li><strong>Scalable Solutions:</strong> Services that expand or contract based on your business needs.</li>
              <li><strong>Affordable Pricing:</strong> High-quality services at competitive rates.</li>
              <li><strong>Expert Team:</strong> 10+ years of average experience per charge entry specialist.</li>
              <li><strong>24/7 Support:</strong> Always available across time zones for seamless communication.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Charge Entry Process
            </h3>
            <p className="text-gray-700 mb-6">
              By outsourcing charge entry services to <strong>Nimble Acuity</strong>, you gain accurate claims, 
              reduced denials, and faster reimbursements — allowing your team to focus on patient care instead 
              of paperwork.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to maximize your reimbursements? Contact us today for a free consultation.
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

export default ChargeEntry;
