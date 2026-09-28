import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const NephrologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Nephrology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Optimize dialysis workflows, patient management, and clinical operations with our specialized <strong>Nephrology EMR services</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling with managing mid, peritoneal, or hemodialysis patient records? <strong>Nimble Acuity</strong> provides expert <strong>Nephrology EMR services</strong> to streamline order processing, report generation, resource allocation, and patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We can offer support solutions, custom EMR software development, and expert consultation for nephrology practices to optimize workflow and clinical outcomes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nephrology EMR Services We Provide
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Dialysis EHR Workflow Management:</strong> Optimize billing, diagnostics, reminders, voice-to-text, and patient data for mid, peritoneal, and hemodialysis.</li>
              <li><strong>Inventory Management:</strong> Track medication quantities, order details, and expiration dates efficiently.</li>
              <li><strong>Billing & Coding Assistance:</strong> Streamline ICD-10 recommendations, disease analysis, and accurate claim submission.</li>
              <li><strong>Image & Document Management:</strong> Manage endoscope images, scanned records, X-rays, and integrate fax management for quick recall.</li>
              <li><strong>Tool Migration & Integration:</strong> Customize patient files, migrate old data, and integrate EMR with lab results and insights.</li>
              <li><strong>Nephrology EMR Software Development:</strong> Build pre-built or fully customized EMR solutions tailored to your nephrology practice.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nephrology EMR Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Collect requirements and establish strategic workflows.</li>
              <li>Plan development, design, and integration of EMR.</li>
              <li>Start EMR development and customization.</li>
              <li>Test EHR software rigorously.</li>
              <li>Deploy the solution in real-time clinical settings.</li>
              <li>Collect feedback and optimize functionality.</li>
              <li>Provide ongoing support and maintenance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Nephrology EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA Compliant:</strong> Ensures all nephrology patient records remain secure and compliant.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified with robust security protocols.</li>
              <li><strong>Cost-effective:</strong> Reduce administrative costs by 30–40% with scalable EMR services.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced software, tools, and secure delivery centers.</li>
              <li><strong>Secure Data Sharing:</strong> Encrypted VPN/FTP transfers to maintain confidentiality.</li>
              <li><strong>Certified Team:</strong> Experienced healthcare professionals familiar with ICD-10, NCCN, ASCO, HIPAA, Medicare D, etc.</li>
              <li><strong>Quality Assurance:</strong> Systematic approach ensuring reliable and compliant EMR services.</li>
              <li><strong>End-to-end Support:</strong> Comprehensive solutions including revenue cycle management, billing, coding, and transcription.</li>
              <li><strong>Short Turnaround Time:</strong> Streamlined workflow reduces project time by 30–40%.</li>
              <li><strong>Scalable Solutions:</strong> Adjust service scope according to your practice needs.</li>
              <li><strong>Dedicated Project Manager:</strong> Single point of contact for all nephrology EMR services.</li>
              <li><strong>24/7 Availability:</strong> Global delivery centers ensure round-the-clock support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Nephrology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for compliant, efficient, and customized <strong>Nephrology EMR services</strong> designed to improve patient care and operational efficiency.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch</strong> today for tailored, cost-effective, and reliable nephrology EMR solutions.
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

export default NephrologyEMR;

