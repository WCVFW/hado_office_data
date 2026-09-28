import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const IntelligentBillingSoftware: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Intelligent Medical Software for Billing Services: Automate and Accelerate Your Revenue
            </h2>
            <p className="text-lg text-gray-600">
              Spending too much time chasing unpaid bills? <strong>nimble acuity</strong> leverages intelligent medical billing software to automate collections, streamline processes, and ensure consistent revenue. Our HIPAA-compliant services reduce manual intervention, giving your staff more time to focus on patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience, <strong>nimble acuity</strong> provides efficient, reliable, and fully managed billing services powered by intelligent software. We reduce your dependence on separate billing tools and handle everything from claims processing to reporting.
            </p>
          </div>

          {/* Comprehensive Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Intelligent Medical Software Billing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Practice Requirement Compliance:</strong> Ensure all claims meet compliance requirements to avoid denials.</li>
              <li><strong>Template-driven Claim Support:</strong> Stay ahead of billing template changes to reduce rejections and meet latest standards.</li>
              <li><strong>e-Prescriptions Generation:</strong> Generate electronic prescriptions to streamline virtual consultations and maintain accurate patient records.</li>
              <li><strong>Unified Database Deployment:</strong> Centralize and standardize EHR data to eliminate errors and conflicts.</li>
              <li><strong>Consolidated Document Management:</strong> Centralize paperwork, images, and referrals for easy access and efficient patient care.</li>
            </ul>
          </div>

          {/* Streamlined Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Collect specific billing requirements for your intelligent medical software.</li>
              <li>Identify persistent billing challenges and develop specialized solutions.</li>
              <li>Conduct an in-depth evaluation and provide a free estimate.</li>
              <li>Sign SLA and NDA; map billers to their respective roles.</li>
              <li>Verify all service-level agreements using a detailed checklist.</li>
              <li>Deliver comprehensive progress reports for full transparency.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions that reduce billing errors and overall expenses.</li>
              <li><strong>High Data Security:</strong> ISO/IEC 27001:2022 certified, ensuring integrity and confidentiality of your data.</li>
              <li><strong>Error-Free Services:</strong> Professional processes to eliminate mistakes and ensure accurate billing.</li>
              <li><strong>World-Class Infrastructure:</strong> Intelligent software reduces manual tasks and accelerates results.</li>
              <li><strong>Highly Scalable:</strong> Easily add resources and bandwidth to meet growing demands.</li>
              <li><strong>Quick Turnaround:</strong> Efficient workflows to deliver results on time.</li>
              <li><strong>24/7/365 Customer Support:</strong> Assistance available via phone, email, and webchat anytime you need it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Automate Your Billing and Maximize Revenue?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for intelligent medical billing services that reduce manual work, ensure accuracy, and accelerate collections.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to implement a smart, efficient, and secure billing solution for your practice.
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

export default IntelligentBillingSoftware;
