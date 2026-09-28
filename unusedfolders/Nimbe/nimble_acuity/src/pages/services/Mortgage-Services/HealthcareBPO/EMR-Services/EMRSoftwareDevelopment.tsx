import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EMRSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMR Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve doctor-patient communication, optimize clinical productivity, and streamline workflows with <strong>Nimble Acuity</strong> EMR software, starting at $1280 per FTE per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Electronic Medical Record (EMR) software automates healthcare operations, enabling better patient care with specialty-specific templates, consistent procedures, and streamlined workflows. 
              <strong>Nimble Acuity</strong> provides custom EMR software development services, fully integrated with practice management and billing software for a complete healthcare solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 20 years of experience, we help healthcare providers worldwide implement secure, compliant, and scalable EMR software tailored to their unique needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EMR Software Development Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EMR/EHR Development:</strong> Build secure EMR systems with patient portals, integrated features, medication tracking, and robust databases.</li>
              <li><strong>Integration Services:</strong> Connect EMR/EHR systems with billing, reporting, insurance, and other third-party applications.</li>
              <li><strong>Compliant EMR/EHR Systems:</strong> Develop HIPAA-compliant, HL7-certified systems with secure data transmission using SSL/TLS encryption.</li>
              <li><strong>E-Prescribing System:</strong> Integrate robust e-prescribing platforms to streamline prescription workflows.</li>
              <li><strong>Mobile App Development:</strong> Enable seamless exchange of healthcare data between patients and providers via scalable EMR apps.</li>
              <li><strong>Healthcare Data Analytics:</strong> Leverage AI/ML technologies to analyze large datasets and generate actionable insights.</li>
            </ul>
          </div>

          {/* Features */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Features of Nimble Acuity EMR Software
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Office Workflow Management:</strong> Manage patient flow from check-in to check-out efficiently.</li>
              <li><strong>Coding Assistance:</strong> Suggest accurate E&M codes based on CMS guidelines.</li>
              <li><strong>Chart Notes:</strong> Specialty-specific templates for examination, evaluation, and documentation.</li>
              <li><strong>Prescription Assistant:</strong> Accurate medication prescribing using templates, cross-checks, and pharmaceutical databases.</li>
              <li><strong>Document Management & Imaging:</strong> Scan, index, archive, distribute, email, or fax patient documents securely.</li>
              <li><strong>HL7 Interfaces:</strong> Comply with industry standards for secure health data exchange.</li>
            </ul>
          </div>

          {/* Productivity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How EMR Software Enhances Productivity
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>Customizable workflows for office staff and clinicians.</li>
              <li>Preventive healthcare recommendations and automated alerts.</li>
              <li>Comprehensive electronic charts with demographic and scheduling data.</li>
              <li>Pre-defined treatment plans, drug dosage recommendations, and allergy alerts.</li>
              <li>Electronic lab orders, results transmission, and e-prescriptions.</li>
              <li>Improved check-in procedures and accurate patient data capture.</li>
              <li>Clinical best practice enforcement and consistent physician task management.</li>
              <li>Centralized knowledge base with updates based on national guidelines.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Revenue Cycle Management</li>
              <li>Medical Billing & Coding</li>
              <li>Outsource Teleradiology Services</li>
              <li>Medical Transcription Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource EMR Software Development to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Flexible hourly, FTE, and bulk pricing models.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified, up-to-date, and industry-compliant EMR software solutions.</li>
              <li><strong>Superb Infrastructure:</strong> Skilled engineers with state-of-the-art tools and technologies.</li>
              <li><strong>Structured Process:</strong> Streamlined development process ensuring predictable outcomes.</li>
              <li><strong>Experienced Team:</strong> 20+ years of healthcare software development experience.</li>
              <li><strong>Data Security:</strong> Secure handling of all healthcare data with best practices.</li>
              <li><strong>Short Turnaround:</strong> Fast delivery without compromising quality.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Rehabilitation Transcription Services:</strong> Synced client data to a new EMR system with accurate transcription.</li>
              <li><strong>Teleradiology Services:</strong> Delivered timely, cost-effective radiology solutions to a leading medical imaging provider.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource EMR Software Development to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Empower your physicians with customizable templates, treatment plans, and integrated workflows to enhance patient care and streamline operations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for a tailored EMR software solution designed to optimize your healthcare services.
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

export default EMRSoftwareDevelopment;
