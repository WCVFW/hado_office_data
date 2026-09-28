import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DischargeSummaryTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Discharge Summary Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure accuracy, compliance, and faster turnaround times with Nimble Acuity’s discharge summary transcription services. With over 98% accuracy, <strong>less than 24-hour TAT</strong>, and competitive pricing, we support hospitals, clinics, and healthcare practices worldwide.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> has global delivery centers across India, The Philippines, South America, and Kenya, enabling us to process high-volume transcription requirements with unmatched speed and precision. 
              Our transcriptionists are trained in medical terminology, HIPAA compliance, and accent recognition to ensure flawless results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Discharge summaries capture a patient’s complete journey — from tests conducted and diagnoses to treatments, prescriptions, and follow-ups. 
              We help you transform scattered handwritten notes, audio dictations, and reports into accurate, structured discharge summaries.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Discharge Summary Transcription Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Discharge Summary Dictation Reports</li>
              <li>Diagnostic Notes</li>
              <li>Medical History & Prescription Records</li>
              <li>Records of Medical Tests</li>
              <li>Admission/Discharge Transfer (ADT)</li>
              <li>Emergency Room Notes</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Document Submission:</strong> Upload notes and audio files via secure FTP or email.</li>
              <li><strong>Transcription:</strong> Our experts carefully transcribe dictations word-for-word using advanced tools.</li>
              <li><strong>Quality Check:</strong> Multi-level review ensures accuracy and compliance with medical standards.</li>
              <li><strong>Delivery:</strong> Final transcripts are securely delivered via FTP or encrypted email.</li>
              <li><strong>Healthcare Review:</strong> Your staff can perform a final check for seamless integration into records.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Savings:</strong> Reduce overhead and infrastructure costs associated with transcription.</li>
              <li><strong>Focus on Care:</strong> Spend more time with patients while we handle your documentation.</li>
              <li><strong>HIPAA Compliant:</strong> Full compliance with HIPAA guidelines and strict data security measures.</li>
              <li><strong>Expert Team:</strong> Transcriptionists trained in latest medical terminology and accent recognition.</li>
              <li><strong>High Accuracy:</strong> Error-free transcripts with multi-stage quality checks.</li>
              <li><strong>Comprehensive Services:</strong> Extend support to ER transcription, HL7 transcription, and more.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Discharge Summaries with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              From small clinics to large hospitals, we help healthcare providers simplify discharge documentation while maintaining accuracy and compliance.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch today to outsource your discharge summary transcription needs and experience the Nimble Acuity difference.
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

export default DischargeSummaryTranscription;
