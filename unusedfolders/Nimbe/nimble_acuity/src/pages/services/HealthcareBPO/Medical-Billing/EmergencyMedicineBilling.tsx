import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EmergencyMedicineBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Emergency Medicine Billing Services
            </h2>
            <p className="text-lg text-gray-600">
              Speed up payment capture through accurate and clean emergency medicine billing solutions. 
              Streamline your revenue cycle management (RCM) with our billing services starting at just 
              <strong> $1280/month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your RCM stuck with inconsistent cash flow and bad debts? Are you losing revenue due to billing errors? 
              <strong> Nimble Acuity</strong> helps you restore efficiency with expert emergency medicine billing practices. 
              From patient onboarding to final bill payment, we ensure quick capture, reduced denials, and smooth revenue tracking.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Backed by <strong>6+ years of experience</strong> and trusted by <strong>6,000+ healthcare clients</strong> worldwide, 
              Nimble Acuity delivers HIPAA-compliant, SLA-driven solutions. Our proven RCM expertise brings relief to 
              emergency medicine practices, ensuring timely collections and long-term financial stability.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Emergency Medicine Billing Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Billing & Coding:</strong> Accurate coding with CPT/ICD knowledge, chart audits, and digitized data storage 
                to maximize claim approvals.
              </li>
              <li>
                <strong>Revenue Collection:</strong> Ensure timely insurer payments are tracked and deposited to improve cash flow.
              </li>
              <li>
                <strong>Debt Collection:</strong> Compassionate and compliant follow-up with patients and insurers to reduce bad debts.
              </li>
              <li>
                <strong>Revenue Cycle Management:</strong> Comprehensive RCM support including denial management, underpayment reviews, 
                appeals, and payment tracking from registration to settlement.
              </li>
            </ul>
          </div>

          {/* Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Emergency Medicine Billing Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Preauthorization & Eligibility Verification:</strong> Patient eligibility checks before admission.</li>
              <li><strong>Medical Coding:</strong> ICD, CPT, and HCPCS-compliant coding and billing.</li>
              <li><strong>Billing Services:</strong> Organized, insurer-ready bill preparation and submission.</li>
              <li><strong>Billing Audit:</strong> Thorough compliance and accuracy checks for every bill.</li>
              <li><strong>Denial Management:</strong> Audit and correction of denied claims with resubmission.</li>
              <li><strong>Final Claims Submission:</strong> Secure, digital submission of verified claims.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Expertise:</strong> 6+ years of emergency medicine billing experience with HIPAA and ISO 9001:2015 compliance.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with NDA protection for total data safety.</li>
              <li><strong>High Accuracy:</strong> 100% compliant billing with unmatched quality assurance.</li>
              <li><strong>Quick Turnaround:</strong> Fast processing to ensure timely reimbursements.</li>
              <li><strong>Scalability:</strong> Flexible solutions that grow with your practice.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective packages designed for small and mid-sized practices.</li>
              <li><strong>Dedicated Support:</strong> Single-point contact for personalized assistance.</li>
              <li><strong>Experienced Team:</strong> 500+ professionals with 10+ years of expertise in billing and coding.</li>
              <li><strong>Advanced Infrastructure:</strong> Robust, modern systems for reliability and security.</li>
              <li><strong>Specialized Software:</strong> Licensed emergency medicine billing platforms for accuracy and compliance.</li>
              <li><strong>Secure Data Exchange:</strong> Encrypted transfer via SFTP and VPN.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support via phone, email, or chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Emergency Medicine Billing to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With decades of experience and a proven track record, Nimble Acuity is your trusted partner for 
              emergency medicine billing. From small practices to large hospitals, we provide cost-effective, 
              accurate, and reliable solutions tailored to your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to maximize revenue and reduce denials? Contact us today to get started.
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

export default EmergencyMedicineBilling;
