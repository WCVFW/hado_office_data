import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PhysicalTherapyTranscription: React.FC = () => {
  return (
    <>
      <HealthcareHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-6">
              Physical Therapy Transcription Services
            </h2>
            <p className="text-lg text-gray-700">
              Ensure accurate documentation, faster claims submission, and better care continuity with <strong>Nimble Acuity’s</strong> HIPAA-compliant physical therapy transcription services. From consultation notes to discharge summaries, we deliver precise transcripts on time, every time.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-lg text-gray-600">
              Serving therapists, rehab clinics, hospitals, and independent practices worldwide, our expert transcriptionists provide fast, error-free physical therapy documentation. By outsourcing to <strong>Nimble Acuity</strong>, you save costs, reduce administrative burden, and focus on patient care while we handle your transcription needs.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Physical Therapy Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 columns-1 sm:columns-2 md:columns-3">
              <li>Consultation Notes</li>
              <li>Patient History</li>
              <li>Physical Examination Reports</li>
              <li>Clinic Notes</li>
              <li>Office Notes</li>
              <li>Discharge Summaries</li>
              <li>Laboratory Reports</li>
              <li>Patient Documentation</li>
              <li>Point of Care Interactions</li>
              <li>X-Ray/MRI/Scan Reports</li>
              <li>Physical Test Reports</li>
              <li>Diagnosis Reports</li>
              <li>Operative Reports</li>
              <li>Medication Reports</li>
              <li>Therapy Reports</li>
              <li>Patient’s Physical Response Details</li>
              <li>Patient–Doctor Meeting Transcripts</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Neurology Transcription</li>
              <li>Radiology Transcription</li>
              <li>Oncology Transcription</li>
              <li>Dermatology Transcription</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Outsource to <span className="text-[#006A7C]">Nimble Acuity</span>?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li><strong>Affordable Pricing:</strong> Flexible hourly or FTE models with bulk discounts.</li>
              <li><strong>High Accuracy:</strong> ISO-certified QA processes ensure reliable transcripts.</li>
              <li><strong>Strong Infrastructure:</strong> World-class offices, advanced tools, and skilled staff.</li>
              <li><strong>Streamlined Process:</strong> Structured workflows for consistent quality.</li>
              <li><strong>Advanced Tools:</strong> Use of latest transcription technologies and medical dictionaries.</li>
              <li><strong>Experienced Team:</strong> 26+ years in transcription with domain-specialized experts.</li>
              <li><strong>Data Security:</strong> Fully HIPAA and GDPR compliant.</li>
              <li><strong>Fast Turnaround:</strong> Delivery within client-stipulated deadlines, every time.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Client Success Stories</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Accurate Medical Transcription for Indianapolis Physicians:</strong> Processed over 3000 physician encounters with quick, error-free turnaround.
            </p>
            <p className="text-lg text-gray-600">
              <strong>Rehabilitation Transcription for US-based Client:</strong> Delivered accurate rehab transcription services and migrated data seamlessly to a new EMR system.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Testimonials</h3>
            <p className="text-lg text-gray-600 italic">
              “Nimble Acuity has been a tremendous resource for our transcription needs. They are precise, efficient, and very attentive to detail. I’m impressed with their professionalism and service quality.”
            </p>
            <p className="text-lg text-gray-600 mt-2">
              – MD, Medical Practice, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Outsource Physical Therapy Transcription to <span className="text-[#006A7C]">Nimble Acuity</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              With 26+ years of expertise, <strong>Nimble Acuity</strong> is trusted by healthcare providers worldwide for accurate, secure, and cost-effective physical therapy transcription. Let us streamline your documentation while you focus on patient care.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PhysicalTherapyTranscription;
