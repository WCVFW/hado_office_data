import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PracticeManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Practice Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Forgo the hassle of managing administrative tasks and focus on elevating your healthcare initiatives with <strong>nimble acuity's</strong> professional services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing non-clinical business administration can be extremely challenging for healthcare organizations and private practices. Many struggle to cope with their revenues despite having the best medical facilities because efforts are often diverted toward critical paperwork and other documentation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsource practice management services to <strong>nimble acuity</strong> and free up your valuable time to care for your patients. As a professional practice management company, we have highly experienced and skilled resources specifically trained to manage your medical billing and administrative tasks.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Practice Management Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Operations Management:</strong> We provide and maintain suitable automation solutions to manage your healthcare-related operations.
              </li>
              <li>
                <strong>Credentialing:</strong> We handle patient credentialing, ensuring all patient details are cross-verified before a visit.
              </li>
              <li>
                <strong>Compliance and Liability Management:</strong> By adhering to healthcare revenue cycle management guidelines, we ensure all our administrative, credentialing, and billing practices are compliant and reliable.
              </li>
              <li>
                <strong>Administrative Assistance:</strong> We track and manage your patient care operations and help you create plans to refine them.
              </li>
              <li>
                <strong>Start-up Support:</strong> If you are a new physician or a group starting a private practice, we are equipped to assist you with all your administrative and operational requirements.
              </li>
              <li>
                <strong>Relocation & Expansion:</strong> Our skilled and experienced teams help you relocate your healthcare facility and pursue expansions without any hassle.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Round-the-clock Process Support:</strong> We offer 24/7 support to ensure your operations run smoothly, understanding the time-critical nature of medical practice management.
              </li>
              <li>
                <strong>Scalability:</strong> We can increase or decrease the scalability of our processes based on your specific and often seasonal requirements.
              </li>
              <li>
                <strong>Shortest Turnaround Times (TAT):</strong> By completing even the smallest administrative and operational tasks on a regular basis, we ensure you enjoy the shortest possible TATs.
              </li>
              <li>
                <strong>Reasonable Pricing:</strong> Our pricing is based on your specific project needs, so you only pay for what you require.
              </li>
              <li>
                <strong>Compliant Services:</strong> As a HIPAA and CPC compliant firm, we are a trusted partner for both small and large healthcare facilities.
              </li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Patient Onboarding Services:</strong> We provided high-quality patient onboarding services to a leading women's reproductive healthcare company.
              </li>
              <li>
                <strong>Eligibility Verification Process:</strong> We helped a client streamline their patient coverage verification process for Home and lab Sleep tests.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to let you know that I appreciate your efforts getting my clients coding current and working with me during my company's extreme changes starting at the beginning of this year."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Assistant Manager, Medical Billing, Coding & Consulting Company, NY, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Elevate Your Healthcare Offerings with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Specializing in proficient healthcare revenue cycle management services for over two decades, we provide reliable and accurate solutions to manage your medical practice efficiently. By letting us handle your administrative and operational responsibilities, you will have more valuable time to elevate your healthcare offerings.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for a free quote, and we will get back to you within 24 hours.
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

export default PracticeManagementServices;