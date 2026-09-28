import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HospitalTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Comprehensive Hospital Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity provides secure and accurate hospital transcription services, enabling physicians, nurses, and healthcare providers to focus on patient care while we handle the documentation efficiently.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In the 24/7 hospital environment, outsourcing non-core transcription tasks ensures that healthcare professionals can dedicate their time and attention to patient care. Nimble Acuity offers specialized hospital transcription services to hospitals of all sizes, nursing homes, and individual physicians, combining security, accuracy, and cost efficiency.
            </p>
          </div>

          {/* Types of Hospital Transcription Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Hospital Transcription Services We Provide
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Emergency Room Transcription</li>
              <li>Acute Care Transcription</li>
              <li>Admission Note Transcription</li>
              <li>Surgical Report Transcription</li>
              <li>H&P Transcription</li>
              <li>Discharge Summary Transcription</li>
              <li>Cardiology Transcription Services</li>
              <li>Oncology Transcription Services</li>
              <li>Orthopedics Transcription Services</li>
            </ul>
          </div>

          {/* Types of Reports */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Types of Reports Handled
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Progress Reports</li>
              <li>Physical Examination Reports</li>
              <li>Pathology Reports</li>
              <li>Radiology Reports</li>
              <li>Autopsy Reports</li>
              <li>Labor and Delivery Reports</li>
              <li>Consultation Reports</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Hospital Transcription
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Focus on Core Areas:</strong> Let healthcare professionals dedicate their time to patient care while we handle transcription.</li>
              <li><strong>Secure Service:</strong> HIPAA-compliant processes, secure FTP, and encrypted email ensure confidentiality.</li>
              <li><strong>Quality Assurance:</strong> Stringent quality control checks guarantee error-free and accurate transcripts.</li>
              <li><strong>Advanced Technology:</strong> Delivering files in multiple formats like MS Word, RTF, HTML, XML, and PDF.</li>
              <li><strong>Trained Personnel:</strong> Skilled transcriptionists with medical backgrounds understand your specific documentation needs.</li>
            </ul>
          </div>

          {/* Enabling Better Healthcare */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Enabling Better Healthcare
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Nimble Acuity, we prioritize understanding our clients’ needs and maintaining open communication at every stage. Our secure, accurate, and timely transcription services help hospitals and clinics streamline workflows and improve patient care.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By partnering with Nimble Acuity, you gain a reliable transcription partner focused on quality, efficiency, and client satisfaction.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your Hospital Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a trusted partner for hospitals, clinics, and healthcare providers seeking secure, accurate, and cost-effective transcription solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to streamline your hospital documentation? Contact us today to discuss your requirements.
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

export default HospitalTranscription;
