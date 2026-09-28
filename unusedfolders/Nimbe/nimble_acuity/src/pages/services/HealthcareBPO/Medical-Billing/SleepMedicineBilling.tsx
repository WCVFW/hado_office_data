import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const SleepMedicineBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Sleep Medicine Billing Services: Streamline Your Revenue, Starting at $1280/month
            </h2>
            <p className="text-lg text-gray-600">
              Are billing challenges slowing down your sleep medicine practice? 
              <strong> nimble acuity</strong> offers expert billing services with a highly skilled team, leveraging the latest tools to deliver accurate, error-free results that maximize reimbursements and reduce denials.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, we provide customized billing solutions tailored to your practice. Our experts handle everything from claims submission to AR follow-up, ensuring a smooth, efficient process while freeing up your staff to focus on patient care.
            </p>
          </div>

          {/* Sleep Medicine Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Sleep Medicine Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Denial Management:</strong> Minimize claim denials with expert handling and timely follow-ups.</li>
              <li><strong>AR Follow-up:</strong> Ensure prompt reimbursements with proactive accounts receivable management.</li>
              <li><strong>Eligibility Verification:</strong> Accurate verification using the latest tools to confirm patient coverage.</li>
              <li><strong>Demographics Entry:</strong> High-precision patient data entry for error-free records.</li>
              <li><strong>Claims Submission:</strong> Accurate and timely claim submissions to improve reimbursement rates.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Your Billing Needs?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> Affordable and customizable solutions to fit your practice’s budget.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 ISMS-certified for complete protection of your patient data.</li>
              <li><strong>HIPAA Compliant:</strong> All projects begin after signing HIPAA agreements to ensure confidentiality.</li>
              <li><strong>Error-Free Services:</strong> ISO-certified quality assurance ensures precise, accurate billing.</li>
              <li><strong>Dedicated Support:</strong> Single point of contact for seamless communication and updates.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support to resolve any queries promptly.</li>
              <li><strong>Scalable Services:</strong> Adjust team size and resources to meet your evolving needs.</li>
              <li><strong>Quick Turnaround:</strong> Multiple delivery locations allow fast and efficient service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Sleep Medicine Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for reliable, accurate, and efficient sleep medicine billing services that streamline operations and boost revenue.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to get started with a customized solution tailored to your practice.
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

export default SleepMedicineBilling;
