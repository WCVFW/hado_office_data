import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const Hl7Transcription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              HL7 Transcription Services & Integration
            </h2>
            <p className="text-lg text-gray-600">
              <strong>Nimble Acuity</strong> provides HL7 transcription services, taking over backend work and saving you time, money, and resources. We seamlessly integrate with PACS, scheduling, and billing systems to ensure smooth operations for your medical facility.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> has been providing HL7 transcription outsourcing services to top hospitals, clinics, and healthcare providers worldwide. Our HL7 interface connects your systems with industry-standard compliant EMR, PACS, and billing platforms, enabling accurate and efficient medical transcription and coding.
            </p>
          </div>

          {/* HL7 Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our HL7 Transcription & Integration Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>HL7 EMR Integration:</strong> Manage the flow of HL7 ADT/Order messages from your HIS or EMR systems along with voice files for transcription. Configurations are handled by our experienced healthcare software team to meet site-specific needs.
              </li>
              <li>
                <strong>HL7 Billing & Scheduling:</strong> Seamless integration with PACS, billing, and scheduling systems. Our HL7 interface ensures industry-standard connectivity, allowing practices to choose the best components for optimal functionality.
              </li>
              <li>
                <strong>Practice Management System Integration:</strong> Exchange information between EMR and practice management systems via HL7-based technologies, eliminating duplicate work and improving accuracy and consistency of patient records.
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Our HL7 Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Access to a highly qualified and trained team of medical transcriptionists</li>
              <li>Stringent systems and process quality measures for high accuracy</li>
              <li>Turnaround times as low as 12 hours per assignment</li>
              <li>Customized service offerings based on your business goals</li>
              <li>Regular project progress reports</li>
              <li>HIPAA-compliant medical transcription services</li>
              <li>Complete confidentiality and security of sensitive medical data</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your HL7 Transcription
            </h3>
            <p className="text-gray-700 mb-6">
              Let <strong>Nimble Acuity</strong> handle the complexities of HL7 transcription and integration so your medical staff can focus on patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to outsource your HL7 transcription? Contact us today to discuss your needs.
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

export default Hl7Transcription;
