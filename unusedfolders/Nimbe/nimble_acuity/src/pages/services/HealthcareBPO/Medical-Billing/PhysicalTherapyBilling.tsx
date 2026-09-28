import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const PhysicalTherapyBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Physical Therapy Billing Services: Streamline Your Revenue, Starting at $1280/month
            </h2>
            <p className="text-lg text-gray-600">
              Billing challenges slowing your physical therapy practice? Partner with 
              <strong> nimble acuity</strong> for expert management of your billing process. 
              Our skilled team leverages advanced tools to deliver efficient, error-free services, 
              freeing up your staff and boosting revenue.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, we provide customized physical therapy billing solutions 
              designed to meet the unique needs of each client. With over two decades of experience, 
              we streamline your billing process from start to finish.
            </p>
          </div>

          {/* Comprehensive Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accurate Billing Data Entry:</strong> Enter all patient data precisely, reducing claim denials.</li>
              <li><strong>Eligibility Verification:</strong> Verify patient eligibility and documentation upfront for smooth billing.</li>
              <li><strong>Proactive AR Follow-up:</strong> Regular insurance follow-ups to ensure timely reimbursements and improved cash flow.</li>
              <li><strong>Error-Free Claims Submission:</strong> Submit accurate claims with advanced technology to minimize denials.</li>
              <li><strong>Effective Appeal Management:</strong> Handle denials efficiently to recover revenue and improve reimbursement rates.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible options to fit your budget and business needs.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified and HIPAA-compliant for full confidentiality.</li>
              <li><strong>Superior Quality:</strong> ISO-certified, delivering error-free, high-quality billing services.</li>
              <li><strong>Dedicated Support:</strong> Assigned manager as a single point of contact for your practice.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support for questions and assistance.</li>
              <li><strong>Scalable Services:</strong> Easily scale services up or down as your practice grows.</li>
              <li><strong>Quick Turnaround:</strong> Multiple global delivery centers ensure fast, efficient results.</li>
              <li><strong>Experienced Team:</strong> Certified specialists skilled in all physical therapy billing requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Simplify Your Billing and Boost Revenue?
            </h3>
            <p className="text-gray-700 mb-6">
              Don’t let billing challenges slow your practice. Partner with 
              <strong> nimble acuity</strong> for efficient, reliable physical therapy billing services 
              that free your staff to focus on patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to learn how we can streamline your billing process and maximize your revenue.
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

export default PhysicalTherapyBilling;
