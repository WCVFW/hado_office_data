import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DeafTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional Deaf Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              At Nimble Acuity, we provide accurate and descriptive transcription services to ensure the hearing-impaired community has full access to spoken content, from podcasts and lectures to conferences and voicemails.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Communication is a fundamental part of daily life, yet hearing-impaired individuals often face challenges in staying connected. Whether it’s work-related audio, classroom sessions, or sermons, providing accessible transcripts ensures full understanding and participation. Nimble Acuity’s deaf transcription services bridge these gaps and make spoken content universally accessible.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Deaf Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Podcasts</li>
              <li>Classroom Sessions</li>
              <li>Conferences</li>
              <li>Seminars</li>
              <li>Lectures</li>
            </ul>
          </div>

          {/* Real-Time Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Real-Time Speech Transcription
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond standard transcriptions, we offer real-time closed-captioning services for interactive environments like classrooms and conferences. Our advanced speech-to-text solutions allow hearing-impaired participants to type questions or comments in real-time, which are then communicated vocally to others. This ensures active engagement and inclusion in discussions and learning sessions.
            </p>
          </div>

          {/* Accuracy & Human Touch */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Over 98% Accuracy with Human Transcriptions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              While automatic transcription software exists, human transcribers provide unmatched accuracy, capturing nuances such as accents, tone, and non-verbal cues like laughter or sighs. Our verbatim transcripts help the hearing-impaired fully grasp both content and context, improving communication and learning outcomes.
            </p>
          </div>

          {/* Outsourcing Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Improve Efficiency by Outsourcing
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Competitive and affordable pricing</li>
              <li>Fast turnaround in 12-24 hours</li>
              <li>24/7/365 availability due to time zone advantages</li>
              <li>Complete confidentiality</li>
              <li>Free trial offer</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Make Communication Inclusive
            </h3>
            <p className="text-gray-700 mb-6">
              Help create a more inclusive environment for the deaf and hearing-impaired community by partnering with Nimble Acuity for your transcription needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to ensure everyone has access to spoken content? Contact us today to discuss your requirements.
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

export default DeafTranscription;
