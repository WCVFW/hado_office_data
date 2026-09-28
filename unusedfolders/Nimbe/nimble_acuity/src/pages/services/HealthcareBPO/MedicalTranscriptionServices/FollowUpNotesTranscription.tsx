import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const FollowUpNotesTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Follow-up Notes Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure accurate and reliable patient records with <strong>Nimble Acuity</strong>’s follow-up notes transcription services. We help healthcare professionals focus on patient care while maintaining precise documentation of follow-up plans and patient progress.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Healthcare practices deal with large amounts of data daily, from patient demographics to treatment plans. Outsourcing follow-up notes transcription to <strong>Nimble Acuity</strong> reduces the burden on doctors and nurses, ensuring records are accurate, consistent, and easily accessible.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Follow-up Notes Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Transcriptions from Audio Files:</strong> Convert audio recordings from voice recorders or digital files into highly accurate transcripts.
              </li>
              <li>
                <strong>Transcript Formatting:</strong> Customized formatting ensures uniformity across all follow-up notes transcription.
              </li>
              <li>
                <strong>Time-Coded Transcriptions:</strong> Optional time-stamped transcripts allow easy reference to specific portions of audio files.
              </li>
              <li>
                <strong>HIPAA Compliant Operations:</strong> Secure file transfer via encrypted email, phone, or HIPAA-compliant apps ensures confidentiality.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-4">
              <li>Ophthalmology Transcription Services</li>
              <li>HL7 Transcription Services</li>
              <li>Neurology Transcription Services</li>
              <li>Radiology Transcription Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose <strong>Nimble Acuity</strong>?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Solutions:</strong> Pay only for the number of transcriptions you require, reducing costs compared to hiring full-time staff.</li>
              <li><strong>High Accuracy:</strong> Skilled transcriptionists and quality checks ensure precise follow-up notes transcription.</li>
              <li><strong>Data Security:</strong> HIPAA-compliant operations protect confidential patient information.</li>
              <li><strong>Well-Established Infrastructure:</strong> World-class tools, networks, and uninterrupted power ensure reliability.</li>
              <li><strong>On-Time Delivery:</strong> Quick turnaround times with strict adherence to deadlines.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact keeps you updated on progress and handles queries.</li>
              <li><strong>Scalability:</strong> Easily scale up services when your practice needs increase.</li>
              <li><strong>Round-the-Clock Support:</strong> 24/7 assistance via call, email, or live chat ensures timely support.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Healthcare Services Provider (US):</strong> Transcribed and translated audio content in English and Spanish for a reputed US-based provider.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Physician in Australia:</strong> Delivered precise audio transcription for nearly 100 files, helping the client achieve accurate documentation quickly.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              "I am very impressed at the ease and the speed of the dictation service. They worked to my schedule and delivered well." – Dr. Alan Lim, Independent Doctor
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Follow-up Notes Transcription
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for reliable, accurate, and affordable follow-up notes transcription. Maintain complete patient records without overburdening your healthcare staff.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to streamline your transcription process and improve access to accurate patient records.
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

export default FollowUpNotesTranscription;
