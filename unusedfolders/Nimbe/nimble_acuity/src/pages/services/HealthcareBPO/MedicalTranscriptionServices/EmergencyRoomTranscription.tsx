import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EmergencyRoomTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accurate Emergency Room Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Nimble Acuity delivers reliable, secure, and precise emergency room transcription services to hospitals, clinics, trauma centers, and healthcare facilities worldwide.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Emergency room notes are critical for effective patient care but are often illegible or rushed. Our transcription services convert these handwritten or recorded notes into accurate, organized text-based records, ensuring seamless documentation and better patient outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Combining advanced technology with experienced medical transcriptionists, Nimble Acuity manages dictation capture, conversion, and document distribution, relieving your staff from time-consuming transcription tasks.
            </p>
          </div>

          {/* Emergency Room Recording Details */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Needs to Be Recorded in Emergency Rooms
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Time and date of the visit</li>
              <li>Time of illness onset</li>
              <li>Symptoms of the illness</li>
              <li>Incident details</li>
              <li>Description of accidents, if any</li>
              <li>Patient requirements and immediate help needed</li>
              <li>Medication instructions (oral, injection, etc.)</li>
              <li>Referrals to specialists</li>
              <li>Details of physical injuries</li>
              <li>Other relevant medical details</li>
            </ul>
          </div>

          {/* Supported Medical Practices */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Emergency Room Transcription Across Medical Specialties
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Cardiology</li>
              <li>Genetics</li>
              <li>Trichology</li>
              <li>Cytopathology</li>
              <li>Radiology</li>
              <li>Geriatrics</li>
              <li>Orthopedics</li>
              <li>ENT</li>
              <li>Oncology</li>
              <li>Otolaryngology</li>
              <li>Gynecology</li>
              <li>Hepatology</li>
              <li>Anesthesiology</li>
            </ul>
          </div>

          {/* Benefits of Outsourcing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Emergency Room Transcription
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Skilled, trained medical transcriptionists familiar with the latest medical terminologies.</li>
              <li>Accuracy rate greater than 98% across all projects.</li>
              <li>Strict quality checks for error-free transcripts.</li>
              <li>Quick turnaround time, starting at 24 hours depending on assignment scope.</li>
              <li>Customized transcription solutions to meet your unique requirements.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Medical Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Dermatology Transcription</li>
              <li>Medical Report Transcription</li>
              <li>Neurology Transcription</li>
              <li>Radiology Transcription</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Emergency Room Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Accurate emergency room transcripts form a crucial part of efficient patient records. Nimble Acuity provides secure, timely, and precise transcription services to hospitals and clinics globally, freeing your staff to focus on patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to improve your ER documentation? Contact us today for your transcription needs.
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

export default EmergencyRoomTranscription;
