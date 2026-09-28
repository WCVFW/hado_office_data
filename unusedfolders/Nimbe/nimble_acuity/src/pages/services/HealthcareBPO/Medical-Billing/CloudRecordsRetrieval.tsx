import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CloudRecordsRetrieval: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud-Based Medical Records Retrieval Services
            </h2>
            <p className="text-lg text-gray-600">
              Optimize healthcare operations and decision-making with <strong>Nimble Acuity</strong>. 
              Our cloud-based medical records retrieval solutions ensure secure, efficient, and compliant access to patient data.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We provide end-to-end medical record retrieval services for hospitals, clinics, insurance companies, and research institutions. 
              Our solutions enable seamless interoperability, secure data access, and streamlined workflow for healthcare operations, billing, and research.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cloud-Based Medical Records Retrieval Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Medical Insurance Claims Processing:</strong> Accelerate claims with AI-driven precision, adhering to ICD-10 and CPT coding standards.</li>
              <li><strong>Medical Record Abstraction:</strong> Convert complex records into concise, actionable data for efficient care delivery and informed decision-making.</li>
              <li><strong>Medical Billing Software Support:</strong> Ensure real-time updates, interoperability, and secure encryption for optimized revenue cycle management.</li>
              <li><strong>Medical Coding Analysis:</strong> Assign accurate codes with advanced algorithms to maintain compliance and maximize claim approvals.</li>
            </ul>
          </div>

          {/* Retrieval Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Records Retrieval Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Initiation of Request:</strong> Respond swiftly to start the retrieval process.</li>
              <li><strong>Verification and Authorization:</strong> Verify and authorize each request for data integrity and security.</li>
              <li><strong>Record Location and Identification:</strong> Accurately locate records using advanced tools.</li>
              <li><strong>Data Retrieval:</strong> Securely extract data while maintaining confidentiality.</li>
              <li><strong>Data Compilation and Review:</strong> Compile and review data to ensure completeness and accuracy.</li>
              <li><strong>Secure Transmission:</strong> Send data via encrypted channels to safeguard sensitive information.</li>
              <li><strong>Record Tracking and Audit:</strong> Enable transparency through comprehensive tracking and auditing.</li>
              <li><strong>Notification and Confirmation:</strong> Inform stakeholders upon successful transmission.</li>
              <li><strong>Patient Access (if applicable):</strong> Facilitate patient access to their records securely.</li>
              <li><strong>Archiving and Compliance:</strong> Maintain regulatory-compliant archival of records for long-term use.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Medical Records Retrieval?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Prompt Responsiveness:</strong> Immediate attention and action on all requests.</li>
              <li><strong>Optimized Efficiency & Reliability:</strong> Streamlined retrieval process ensures dependable results.</li>
              <li><strong>Request Tracking:</strong> Easily monitor status and progress of each record request.</li>
              <li><strong>Digital Medical Records:</strong> Convert records to digital format for interoperability and integration.</li>
              <li><strong>Guaranteed 10-Day Retrieval:</strong> Fast turnaround to meet your operational needs.</li>
              <li><strong>24/7 Access:</strong> Cloud-based infrastructure provides round-the-clock access to records.</li>
              <li><strong>Secure Archiving:</strong> Long-term storage solutions with full regulatory compliance.</li>
              <li><strong>Real-Time Dashboards:</strong> Analytics and performance insights to monitor retrieval efficiency.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Records Retrieval to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Leverage <strong>Nimble Acuity</strong>’s cloud-based medical records retrieval services to streamline your healthcare operations, improve data accessibility, and enhance patient care. Our secure, efficient, and technology-driven approach ensures seamless record management and retrieval.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default CloudRecordsRetrieval;
