import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const PatientFinancialClearance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Patient Financial Clearance Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamlined, accurate, and reliable financial clearance solutions for hospitals and healthcare providers, powered by <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Our patient financial clearance services provide a holistic approach, ensuring a seamless and transparent experience. With expertise in determining patient coverage and eligibility for local, state, and federal health funding, <strong>Nimble Acuity</strong> helps reduce unpaid care while improving patient satisfaction.
            </p>
            <p>
              Hospitals and healthcare providers can optimize reimbursements, guide patients through funding options, and ensure timely payment for medical services—all while maintaining compliance and efficiency.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Patient Financial Clearance Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Registration and Eligibility Services:</strong> We evaluate patient eligibility, identify funding sources, and assist enrollment in programs to reduce unpaid care.
              </li>
              <li>
                <strong>Financial Advisory Services:</strong> Our experts provide on-site and remote advisory services, helping patients understand payment options and optimizing revenue for healthcare providers.
              </li>
              <li>
                <strong>Third-Party Insurance Services:</strong> Comprehensive claims management for Workers' Compensation, Motor Vehicle Accident claims, and other third-party reimbursements, ensuring timely and accurate compensation.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Revenue Cycle Management</li>
              <li>Medical Billing & Coding</li>
              <li>Claims Adjudication Services</li>
              <li>Outsource Teleradiology Services</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Outsource Financial Clearance Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Affordable Prices:</strong> Cost-effective solutions to improve cash flow without compromising quality.</li>
              <li><strong>High Data Security:</strong> ISO/IEC 27001:2022 certified to ensure complete patient data safety.</li>
              <li><strong>High-Quality Services:</strong> ISO 9001:2015 certified with strict quality control for accurate financial settlements.</li>
              <li><strong>World-Class Infrastructure:</strong> Experts operate in modern, fully equipped offices for maximum efficiency.</li>
              <li><strong>Fast Turnaround Time:</strong> Services delivered ahead of schedule, maintaining strict adherence to deadlines.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Patient Demographics Entry for a Georgian Client:</strong> Processed ~1200 claims per month across 4 medical practices. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Processed 17,000+ Claims Using Kareo for a US-based Client:</strong> Charge and demographic entry completed efficiently for a Houston client. 
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 ">
            <blockquote className="text-gray-700 italic mb-4">
              "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 ">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Financial Clearance Services to Nimble Acuity
            </h3>
            <p className="text-gray-600 mb-6">
              Our experts provide customized, accurate, and affordable patient financial clearance solutions with fast turnaround times. Ensure compliance, reduce unpaid care, and enhance patient satisfaction by partnering with us.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PatientFinancialClearance;
