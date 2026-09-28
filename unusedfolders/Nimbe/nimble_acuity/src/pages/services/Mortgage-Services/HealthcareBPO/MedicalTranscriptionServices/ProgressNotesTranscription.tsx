import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ProgressNotesTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Progress Notes Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Free up your calendar and reduce administrative burden with high-quality progress notes transcription services starting at $1280 per FTE per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Accurate recording of patient progress is crucial for optimal care. <strong>Nimble Acuity</strong> takes on the task of transcribing progress notes so physicians can focus on patient care. With 26+ years of experience, we deliver precise transcripts that instill trust and improve hospital workflow.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Progress Notes Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Short Progress Notes:</strong> Mini-history and physical formats transcribed quickly with medical shorthand expertise to increase physician efficiency.</li>
              <li><strong>Single Paragraph Progress Notes:</strong> Concise transcription of follow-up visits for faster review and patient throughput.</li>
              <li><strong>SOAP Note Format:</strong> Detailed transcription using Subjective, Objective, Assessment, and Plan, ensuring high-quality and professional documentation.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Progress Notes Transcription Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Engage clients to understand needs and capture data securely via FTP.</li>
              <li>Prepare project briefs and submit for approval.</li>
              <li>Map transcription tasks to qualified staff.</li>
              <li>Commence live transcription via app whenever the consultant logs in.</li>
              <li>Evaluate captured speech for accuracy.</li>
              <li>QA experts check abbreviations and codes for correctness.</li>
              <li>Deliver transcripts to physician in preferred format.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ophthalmology Transcription Services</li>
              <li>Medical Billing & Coding</li>
              <li>Revenue Cycle Management</li>
              <li>Radiology Transcription Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Progress Notes Transcription Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Services:</strong> HIPAA and ISO 9001:2015 certified provider.</li>
              <li><strong>Data Security:</strong> Strict protection and no third-party sharing of client data.</li>
              <li><strong>High Accuracy & Quality:</strong> Multi-level checks ensure precise transcripts.</li>
              <li><strong>Customizable Pricing:</strong> Flexible and cost-effective solutions.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art technology for accurate transcription.</li>
              <li><strong>Short Turnaround:</strong> Fast delivery to keep your practice efficient.</li>
              <li><strong>Scalable Solutions:</strong> Easily scale services based on demand.</li>
              <li><strong>Experienced Team:</strong> Highly trained transcriptionists, project managers, and IT personnel.</li>
              <li><strong>24/7 Availability:</strong> Support available via phone, email, or chat for immediate assistance.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Healthcare Services Provider:</strong> Transcribed and translated audio content in English and Spanish for a US-based provider.</li>
              <li><strong>Doctor in Australia:</strong> Transcribed 100+ audio files at short notice, enabling smooth patient documentation.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Progress Notes Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides reliable, accurate, and timely progress notes transcription services, allowing healthcare professionals to focus on patient care.
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

export default ProgressNotesTranscription;
