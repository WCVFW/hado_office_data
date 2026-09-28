import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const HistoryPhysicalNotes: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              History and Physical Notes Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure accurate and reliable documentation of patient history and physical notes. <strong>Nimble Acuity</strong> offers precise transcription services to streamline treatment planning and patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our professional medical transcriptionists capture essential patient information from audio or digital files, ensuring healthcare specialists have precise records for diagnosis, treatment, and follow-ups.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              History and Physical Notes Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li><strong>Audio Transcriptions:</strong> Convert audio recordings of patient history, medication, physical exams, and surgical history into accurate digital transcripts.</li>
              <li><strong>Formatting:</strong> Flexible transcription formatting according to client requirements, ensuring uniformity and readability.</li>
              <li><strong>Quality Services:</strong> Multi-level quality checks for error-free and consistent transcripts.</li>
              <li><strong>HIPAA Compliant Operations:</strong> Secure file exchange via HIPAA-compliant platforms for complete confidentiality.</li>
            </ul>
          </div>

          {/* Transcription Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Understand client needs, format preferences, and project scope.</li>
              <li><strong>Receiving Files:</strong> Receive H&P files securely via HIPAA-compliant FTP or Dropbox.</li>
              <li><strong>Transcription:</strong> Convert audio or digital files into accurate transcripts using latest tools and client-specific formats.</li>
              <li><strong>Quality Check:</strong> Multi-step review to ensure error-free and consistent documentation.</li>
              <li><strong>Delivery:</strong> Deliver final, secure transcripts to clients in requested formats.</li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li><strong>Affordable Services:</strong> Customizable plans to fit small, medium, and large healthcare setups.</li>
              <li><strong>Data Security:</strong> HIPAA-compliant operations ensuring patient confidentiality.</li>
              <li><strong>Well-established Infrastructure:</strong> State-of-the-art facilities with latest transcription tools and uninterrupted networks.</li>
              <li><strong>Quick Turnaround:</strong> Efficient team ensures timely delivery of transcripts.</li>
              <li><strong>Scalable Solutions:</strong> Easily scale transcription volume as needed.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock customer care via phone, email, or live chat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>US-based Healthcare Services Provider:</strong> Transcribed and translated audio content in English and Spanish for improved record management.
              </li>
              <li>
                <strong>Australian Physician:</strong> Delivered 100+ audio file transcriptions accurately and promptly, enabling expansion of medical transcription services.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource History and Physical Notes Transcription to <strong>Nimble Acuity</strong>
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with us for accurate, reliable, and affordable history and physical notes transcription. Our seasoned professionals ensure top-quality documentation that supports optimal patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to streamline your H&P transcription needs.
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

export default HistoryPhysicalNotes;
