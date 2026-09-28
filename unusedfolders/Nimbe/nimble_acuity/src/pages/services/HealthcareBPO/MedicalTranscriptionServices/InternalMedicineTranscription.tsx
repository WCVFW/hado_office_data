import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const InternalMedicineTranscription: React.FC = () => {
  return (
    <>
      <HealthcareHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-6">
              Internal Medicine Transcription Services
            </h2>
            <p className="text-lg text-gray-700">
              Outsource your internal medicine transcription to our highly trained professionals and focus on delivering quality patient care while we handle the documentation with accuracy and speed.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-lg text-gray-600">
              Are you looking for ways to reduce administrative workload and spend more time with your patients? Do you want to improve revenue while ensuring accurate records and enhanced patient care? <strong>Nimble Acuity</strong> is your trusted partner for internal medicine transcription services. 
            </p>
            <p className="text-lg text-gray-600">
              With years of experience serving clients across the globe, our transcriptionists ensure high-quality, HIPAA-compliant transcripts that help streamline your workflow, minimize manual entry, and accelerate clinical efficiency. 
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Internal Medicine Transcription Services We Offer
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team of expert transcriptionists, editors, and proofreaders have in-depth knowledge of internal medicine terminology and bring unmatched transcription expertise. We deliver reliable, accurate, and timely transcription services, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Medical Report Dictation Transcription</li>
              <li>Consultation & Patient History Reports</li>
              <li>Laboratory & Diagnosis Reports</li>
              <li>Operative & Medication Reports</li>
              <li>Discharge Summaries & Referral Letters</li>
              <li>Physical Examination & Imaging Reports (X-Ray/MRI/Scans)</li>
              <li>Medical Conference, Symposium, and Presentation Transcriptions</li>
              <li>Clinic Notes, Office Notes, and Patient Documentation</li>
              <li>Training/Educational Videos and Podcasts</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Other Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Radiology Transcription</li>
              <li>Oncology Transcription</li>
              <li>Neurology Transcription</li>
              <li>Dermatology Transcription</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose <span className="text-[#006A7C]">Nimble Acuity</span> for Internal Medicine Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li><strong>Affordable Pricing:</strong> Flexible options including hourly and FTE-based pricing.</li>
              <li><strong>High-quality Services:</strong> ISO-certified processes with rigorous QA checks.</li>
              <li><strong>Robust Infrastructure:</strong> Modern office spaces and advanced technology for accurate delivery.</li>
              <li><strong>Structured Process:</strong> Proven workflows to ensure precision and consistency.</li>
              <li><strong>Latest Tools:</strong> State-of-the-art transcription software and methodologies.</li>
              <li><strong>Data Security:</strong> Strict confidentiality with HIPAA compliance.</li>
              <li><strong>Quick Turnaround:</strong> On-time delivery without compromising quality.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Client Success Stories
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Nimble Acuity</strong> has partnered with hospitals, clinics, and physicians worldwide to deliver accurate and timely transcription solutions.
            </p>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li>
                <strong>Processed Over 3000 Encounters:</strong> Provided accurate and dependable transcription for physicians in Indianapolis within a quick turnaround.
              </li>
              <li>
                <strong>Rehabilitation Transcription for US Client:</strong> Delivered error-free reports and migrated data seamlessly to a new EMR system.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Outsource Internal Medicine Transcription to <span className="text-[#006A7C]">Nimble Acuity</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              With a global clientele and a dedicated team of experts, we deliver accurate, secure, and cost-effective transcription services that empower healthcare professionals to focus on patient care. 
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

export default InternalMedicineTranscription;
