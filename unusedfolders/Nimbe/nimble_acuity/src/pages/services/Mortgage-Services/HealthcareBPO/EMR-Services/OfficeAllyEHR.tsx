import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OfficeAllyEHR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Office Ally EHR Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve your efficiency and streamline workflows with our expert <strong>Office Ally EHR services</strong> designed to optimize your practice.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a simple and effective electronic health record (EHR) solution? <strong>Nimble Acuity</strong> provides professional support for Office Ally EHR, enabling seamless access to patient records and ensuring secure, compliant management of your practice data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our <strong>Office Ally EHR support services</strong> improve productivity, reduce paperwork, and allow healthcare providers to focus on delivering quality care anytime, anywhere.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Office Ally EHR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li>Quick and Easy Implementation</li>
              <li>Customizable Solutions and Interface</li>
              <li>Up-to-Date Report Creation Services</li>
              <li>Flexible and Customizable Superbills</li>
              <li>Integrated Workflow Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Office Ally EHR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Cost-effective solutions that maximize value for your practice.</li>
              <li><strong>Data Security:</strong> Fully HIPAA and ICD-10 compliant to ensure secure handling of patient data.</li>
              <li><strong>High-quality Services:</strong> ISO-certified processes guarantee reliable and professional delivery.</li>
              <li><strong>Superb Infrastructure:</strong> State-of-the-art facilities for exceptional service quality.</li>
              <li><strong>Tools and Technologies:</strong> Latest Office Ally EHR software for cutting-edge solutions.</li>
              <li><strong>Structured Process:</strong> Streamlined workflows for efficient service delivery.</li>
              <li><strong>Experienced Team:</strong> 26+ years of experience providing high-quality EHR support services.</li>
              <li><strong>Short Turnaround:</strong> Timely delivery of all Office Ally EHR services, every time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Office Ally EHR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for professional, secure, and cost-effective Office Ally EHR solutions customized to your practice.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch today to leverage expert Office Ally EHR support services.
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

export default OfficeAllyEHR;
