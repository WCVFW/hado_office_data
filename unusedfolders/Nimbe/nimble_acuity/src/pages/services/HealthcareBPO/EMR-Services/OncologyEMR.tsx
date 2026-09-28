import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OncologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Oncology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              All-inclusive solutions for chemotherapy management, adverse event tracking, dosage calculation, and oncology workflow optimization.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Does your oncology practice need customized EMR solutions? <strong>Nimble Acuity</strong> provides expert <strong>Oncology EMR services</strong> that enhance efficiency, compliance, and patient care while reducing administrative burden.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We optimize existing EMR tools or build custom oncology EMR solutions tailored to your practice, delivering accurate, fast, and compliant services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Oncology EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li>Chemotherapy Management Solution</li>
              <li>Oncology Workflow Management</li>
              <li>Oncology Billing</li>
              <li>Oncology Inventory Management</li>
              <li>Oncology EMR Tool Selection</li>
              <li>EMR Tool Migration, Integration, and Customization</li>
              <li>Oncology EMR Software Development</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Oncology EMR Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collaborate with your team to gather detailed EMR requirements.</li>
              <li><strong>EMR Planning and Design:</strong> Customize EMR templates and workflows to match your oncology practice.</li>
              <li><strong>Development of EMR:</strong> Implement the system according to compliance and clinical standards.</li>
              <li><strong>Testing:</strong> Simulate real-time inputs to ensure the system is reliable and efficient.</li>
              <li><strong>Reporting and Feedback:</strong> Provide quality reports and collect feedback for optimization.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Oncology EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>End-to-end Practice Management:</strong> Optimize your oncology practice with compliant workflows, forecasting, and decision support.</li>
              <li><strong>Data Confidentiality:</strong> ISO/IEC 27001:2022 certified to protect patient data with strict security protocols.</li>
              <li><strong>Quality and Compliance Guarantee:</strong> Adherence to international guidelines such as NCCN and ASCO.</li>
              <li><strong>Short Turnaround:</strong> Fast delivery using dedicated resources and proven workflows.</li>
              <li><strong>Scalability:</strong> Easily scale services up or down to meet your practice needs.</li>
              <li><strong>Lower Cost:</strong> Reduce EMR and practice management costs with our offshore delivery model.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager to manage all EMR-related services efficiently.</li>
              <li><strong>Certified and Skilled Team:</strong> Experienced professionals trained on oncology billing, clinical codes, and EMR tools.</li>
              <li><strong>Modern Infrastructure:</strong> Secure, up-to-date software and technology systems.</li>
              <li><strong>Secure Data Sharing:</strong> Fast and secure data transfer via VPN and SFTP.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support through our global delivery network.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Oncology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for reliable, compliant, and customized oncology EMR solutions tailored to your clinic or hospital.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to get a quote and discover how we can optimize your oncology practice.
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

export default OncologyEMR;
