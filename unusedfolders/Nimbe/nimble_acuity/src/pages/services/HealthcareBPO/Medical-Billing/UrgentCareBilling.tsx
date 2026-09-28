import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const UrgentCareBilling: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Urgent Care Billing Services: Maximize Reimbursements and Streamline Your Process
            </h2>
            <p className="text-lg text-gray-600">
              Looking for error-free urgent care billing and improved revenue management? 
              Partner with <strong>nimble acuity</strong> for expert billing solutions. 
              Our skilled team leverages advanced tools and software to simplify your financial processes and ensure maximum reimbursements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, <strong>nimble acuity</strong> delivers customized urgent care billing solutions tailored to each client’s needs. 
              We handle every aspect of your billing process with precision, accuracy, and speed.
            </p>
          </div>

          {/* Comprehensive Billing Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Urgent Care Billing Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Accurate Data Entry:</strong> Precise billing data entry using the latest tools and software to minimize errors.</li>
              <li><strong>Claims Filing:</strong> Efficient claims submission handling all urgent care billing complexities.</li>
              <li><strong>Appeal Management:</strong> Manage denials and payment issues with timely and effective appeals.</li>
              <li><strong>Fee Schedule Management:</strong> Update and negotiate fee schedules to maximize revenue, considering market factors.</li>
              <li><strong>Customized Reporting:</strong> Generate daily, weekly, or monthly reports to give you a clear view of your financial health.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible options that fit your practice’s needs and budget.</li>
              <li><strong>Unwavering Data Security:</strong> ISO/IEC 27001:2022 ISMS-certified to ensure all your data remains secure.</li>
              <li><strong>HIPAA Compliant:</strong> Every project is handled under strict HIPAA regulations to protect patient data.</li>
              <li><strong>Superior Quality:</strong> ISO-certified services ensuring error-free, high-quality billing solutions.</li>
              <li><strong>Dedicated Support:</strong> A dedicated manager as your single point of contact for prompt assistance.</li>
              <li><strong>24/7 Availability:</strong> Teams available around the clock for seamless support.</li>
              <li><strong>Scalable Services:</strong> Easily scale services up or down to meet your practice’s needs.</li>
              <li><strong>Quick Turnaround:</strong> Global delivery centers provide fast and efficient service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Urgent Care Billing?
            </h3>
            <p className="text-gray-700 mb-6">
              Don’t let billing challenges slow your urgent care practice. Partner with 
              <strong> nimble acuity</strong> for reliable, efficient, and accurate billing solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to start maximizing your reimbursements and improving your financial performance.
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

export default UrgentCareBilling;
