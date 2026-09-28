import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PathologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pathology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity provides accurate and timely pathology transcription services, including basic diagnostic reports and specialized forensic pathology transcription, ensuring HIPAA compliance and better patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The medical transcription team at <strong>Nimble Acuity</strong> leverages the latest software and technology to deliver error-free pathology transcripts within 24 hours. We securely deliver files via FTP or encrypted email, helping healthcare providers maintain precise patient records while saving time and resources.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pathology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Transcription of basic diagnostic/clinical patient reports and doctor's notes</li>
              <li>Specialized transcription of forensic pathology reports</li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Pathology Transcription Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Save time and increase productivity by outsourcing transcription work.</li>
              <li>Reduce costs and avoid hiring in-house transcriptionists.</li>
              <li>Ensure high-quality and accurate pathology reports from experienced professionals.</li>
              <li>Receive prompt delivery of transcribed pathology files hassle-free.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pathology Transcription
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Capability:</strong> Latest software, technology, and infrastructure to handle your entire pathology volume efficiently.</li>
              <li><strong>Process:</strong> Transcription followed by thorough proofreading to ensure accuracy.</li>
              <li><strong>Expert Transcriptionists:</strong> 6 months of training for each team member with deep knowledge of medical terminology.</li>
              <li><strong>Quality:</strong> Three-tier workflow ensures every file is checked for accuracy before submission.</li>
              <li><strong>Turnaround Time:</strong> Transcribed files delivered within 24 hours via secure FTP or encrypted email.</li>
              <li><strong>HIPAA Compliance:</strong> 100% compliant with HIPAA training for all team members.</li>
              <li><strong>Free Trial:</strong> Sample pathology transcripts can be tested before signing up.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pathology Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for accurate, HIPAA-compliant, and timely pathology transcription services, helping you focus on delivering exceptional patient care.
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

export default PathologyTranscription;
