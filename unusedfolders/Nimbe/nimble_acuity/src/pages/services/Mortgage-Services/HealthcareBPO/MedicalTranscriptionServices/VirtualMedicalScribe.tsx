import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const VirtualMedicalScribe: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Virtual Medical Scribe Services
            </h2>
            <p className="text-lg text-gray-600">
              Document patient encounters in real-time, manage healthcare surges, and prioritize patient needs with our secure and HIPAA-compliant virtual medical scribing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Accurate documentation of remote and in-person patient visits is critical for effective care. Nimble Acuity provides virtual medical scribing services that reduce staff workload, prevent errors, and ensure timely chart completion.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our certified virtual scribes are experienced with medical terminologies and EHR systems, providing real-time documentation support while maintaining data privacy and compliance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Virtual Medical Scribing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>On-site Scribe:</strong> Immediate documentation support integrated into your EHR for faster and accurate charting.
              </li>
              <li>
                <strong>SoGo Virtual Scribe:</strong> Connect securely via telehealth applications for remote scribing anywhere, anytime.
              </li>
              <li>
                <strong>Same-Day Chart Completion:</strong> Ensure treatment continuity and reduce duplicative tests with same-day charting.
              </li>
              <li>
                <strong>Global Virtual Scribes:</strong> Certified scribes familiar with international healthcare standards for worldwide clients.
              </li>
              <li>
                <strong>Template-driven Transcription:</strong> Document medical history, assessments, referrals, and critical events using predefined EHR templates.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Virtual Medical Scribing?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA-Compliant Services:</strong> We follow global healthcare standards for secure and compliant scribing.</li>
              <li><strong>Data Security:</strong> ISO 9001:2015 certified, with NDA agreements and robust ISMS for maximum protection.</li>
              <li><strong>High Accuracy & Quality:</strong> 100% accurate scribing with 24/7 support and time zone advantages.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced communication platforms for remote collaboration and scalable support.</li>
              <li><strong>Customized Pricing:</strong> Flexible billing options per scribe or pre-agreed terms with no surprises.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Physician Assistant Virtual Scribing Services</li>
              <li>Medical Transcription Services</li>
              <li>Medical Billing Services</li>
              <li>Revenue Cycle Management Services</li>
              <li>Pharmacy Business Services</li>
              <li>Healthcare Claims Adjudication Services</li>
            </ul>
          </div>

          {/* Customer Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customer Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Healthcare Services Provider (USA):</strong> Transcribed and translated audio files in English and Spanish for a US-based healthcare provider.</li>
              <li><strong>Doctor in Australia:</strong> Completed transcription of 100+ audio files efficiently, enabling more projects and timely documentation.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <p className="text-gray-700 mb-4">
              "I am very impressed at the ease and speed of the dictation service. Bernard (Sales Manager) was always prompt and professional. I highly recommend Nimble Acuity for virtual scribing services." – Dr. Alan Lim, Independent Doctor
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your Virtual Medical Scribe Services
            </h3>
            <p className="text-gray-700 mb-6">
              Cut clinician burnout, improve document quality, and increase patient satisfaction with our EHR-integrated remote medical scribe solutions. Nimble Acuity provides secure, HIPAA-compliant scribing services to healthcare practices worldwide.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to leverage virtual medical scribe services? Contact us today to get started.
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

export default VirtualMedicalScribe;
