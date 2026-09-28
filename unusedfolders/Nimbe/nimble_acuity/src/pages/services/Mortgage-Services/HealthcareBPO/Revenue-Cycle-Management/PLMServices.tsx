import React from "react";
import HealthcareHeader from "@/pages/services/HealthcareBPO/HealthcareHeader";
import { Link } from "react-router-dom";

const PLMServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Provider Lifecycle Management (PLM) Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance provider experience, automate credentialing, and optimize provider data with <strong>Nimble Acuity</strong>'s end-to-end PLM services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Streamline your provider operations, improve satisfaction, and reduce administrative burden with our comprehensive Provider Lifecycle Management services. Starting at just $1280-1440/FTE/month, <strong>Nimble Acuity</strong> offers expert support for onboarding, contract management, and workflow automation.
            </p>
            <p>
              Partnering with a trusted PLM provider ensures transparency, data accuracy, and adherence to industry standards while accelerating provider processes and improving network efficiency.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Provider Lifecycle Management Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Document Management:</strong> Generate, store, and manage provider documents and guidelines efficiently for easy stakeholder access.
              </li>
              <li>
                <strong>Contract Management:</strong> Automate and organize various contract processes including value-based contracts.
              </li>
              <li>
                <strong>Provider Network Management Automation:</strong> Analyze and monitor provider performance against benchmarks, and communicate updates effectively.
              </li>
              <li>
                <strong>Workflow Management:</strong> Customize medical network management for payer compliance, case routing, and documentation checklists.
              </li>
              <li>
                <strong>Provider Data Management:</strong> Leverage blockchain-based designs to improve data quality, integrate databases, and create smart contracts.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Revenue Cycle Management</li>
              <li>Medical Billing & Coding</li>
              <li>Medical Transcription Services</li>
              <li>Claims Adjudication Services</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Why Choose Nimble Acuity for Provider Lifecycle Management
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Cost-Effective Rates:</strong> High-quality PLM services at affordable prices.</li>
              <li><strong>Data Security:</strong> Compliance with the latest international data security and privacy laws.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified processes ensuring accurate, reliable PLM support.</li>
              <li><strong>Advanced Tools and Technologies:</strong> Latest software and solutions to streamline PLM workflows.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-6">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li>
                <strong>Patient Demographic Entry Services:</strong> Delivered accurate and timely demographic entry services to a leading client.
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
              <li>
                <strong>Eligibility Verification Process:</strong> Assisted a client in streamlining claims verification workflows efficiently.
                <Link to="/case-studies" className="text-[#006A7C] hover:underline"> Read more »</Link>
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16 text-center">
            <blockquote className="text-gray-700 italic mb-4">
              "I wanted to let you know that I appreciate your efforts getting my clients coding current and working with me during my company's extreme changes."
            </blockquote>
            <p className="font-semibold text-gray-600">
              – Assistant Manager, Medical Billing, Coding & Consulting Company, NY, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16 text-center">
            <h3 className="text-3xl font-bold text-[#006A7C] mb-4">
              Outsource Provider Lifecycle Management Services to Enhance Provider Experience
            </h3>
            <p className="text-gray-600 mb-6">
              Automate provider credentialing, accelerate onboarding, and improve network management with <strong>Nimble Acuity</strong>'s trusted PLM services.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Your Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PLMServices;
