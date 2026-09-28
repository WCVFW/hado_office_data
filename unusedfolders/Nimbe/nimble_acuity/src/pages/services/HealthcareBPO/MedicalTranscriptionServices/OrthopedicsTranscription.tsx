import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OrthopedicsTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Orthopedics Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurate orthopedic transcription is critical for ensuring proper patient care. <strong>Nimble Acuity</strong> delivers precise coding and transcription, handling complex terminologies of bones, joints, and musculoskeletal care with expertise.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our specialized orthopedic transcription teams focus exclusively on orthopedics, providing unmatched accuracy in medical documentation, timely delivery, and seamless integration with EMR systems.
            </p>
          </div>

          {/* Orthopedic Specialty Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Orthopedic Specialty Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Knee Replacement</li>
              <li>Ligament and Tendon Recovery Care</li>
              <li>Shoulder and Elbow Surgery</li>
              <li>Foot and Ankle Surgery</li>
              <li>Musculoskeletal Oncology</li>
              <li>Multiple Fracture Recuperation</li>
              <li>Accident (Orthopedic) Trauma</li>
              <li>Joint Reconstruction</li>
              <li>Sport-Induced Injuries</li>
              <li>Hip Disorders</li>
            </ul>
          </div>

          {/* Specialized Transcriptionists */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Specialized and Exclusive Transcriptionists
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our exclusive orthopedic transcription team is highly trained in orthopedic coding and documentation. This enables faster, accurate, and high-quality transcriptions for all orthopedic specialties, ensuring your practice receives reliable medical records.
            </p>
          </div>

          {/* Periodic Training */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Periodic Internal Training
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our orthopedic transcriptionists receive regular training from physicians and internal experts. This keeps them updated on latest developments, ensuring precise understanding and transcription of dictations, reports, and automated transcriptions.
            </p>
          </div>

          {/* Quality and Compliance */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Quality and HIPAA Compliance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All orthopedic transcription services from <strong>Nimble Acuity</strong> adhere to the latest CPT codes and HIPAA regulations, guaranteeing error-free and fully compliant documentation.
            </p>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Nimble Acuity's Orthopedics Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Easy dictation methods and integration of multiple dictation sources</li>
              <li>Real-time transcription status reporting</li>
              <li>Flexible transcription editing options</li>
              <li>Specialized proofreading and quality audit teams</li>
              <li>Secure 256-bit AES encrypted file transfer</li>
              <li>Quick turnaround with automated EMR transcription services</li>
              <li>Best-in-class resources, software, and infrastructure</li>
              <li>Competitive pricing for cost benefits</li>
              <li>Vast experience, quality assurance, and trust</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Orthopedics Transcription to <strong>Nimble Acuity</strong>
            </h3>
            <p className="text-gray-700 mb-6">
              Simplify your orthopedic transcription needs with our specialized services. Upload your point-of-care dictations, patient notes, or automated transcriptions, and receive high-quality, error-free documents.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to ensure accurate and reliable orthopedic transcription.
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

export default OrthopedicsTranscription;
