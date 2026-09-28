import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const SurgeryTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Surgery Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Accurate, reliable, and cost-effective surgery transcription services starting at $1280/month, designed to improve workflow and patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> offers expert surgery transcription services for hospitals, medical centers, and individual practitioners. Our team follows AAMT standards, ensuring clinical precision, high-quality QA, and timely document delivery. Outsourcing your surgery transcription needs allows your staff to focus on patient care while we handle transcription with unmatched accuracy.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Surgery Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Transcription of Surgical Reports:</strong> Includes consultation reports, lab reports, imaging, OR reports, clinical notes, charts, and discharge summaries, following industry standards.
              </li>
              <li>
                <strong>Transcription of Simple & Complex Surgical Processes:</strong> Accurate transcription of procedures like hernia repair, laparoscopic cholecystectomy, appendectomy, orthotropic liver transplant, adenotonsillectomy, bilateral pelvic lymph node dissection, cadaveric renal transplant, and more.
              </li>
              <li>
                <strong>Transcription of Surgical Fields:</strong> Specialized transcription for surgical teams across radiology, pathology, urology, cardiology, gynecology, anesthesiology, oncology, gastroenterology, and more.
              </li>
              <li>
                <strong>Transcription of Disorders & Illnesses:</strong> Expertise in pancreatitis, biliary diseases, appendicitis, diverticulitis, gallstones, GERD, inflammatory bowel disease, and more.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Surgery Transcription Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Plan project scope and collect data from the client.</li>
              <li>Provide project briefing to the client.</li>
              <li>Assemble specialized team of surgery transcriptionists.</li>
              <li>Assign transcription roles to experts.</li>
              <li>Perform multi-level quality assessment.</li>
              <li>Sign-off the project after meeting all quality goals.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>EMR Transcription Services</li>
              <li>Medical Billing & Coding</li>
              <li>Revenue Cycle Management</li>
              <li>Radiology Transcription Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Surgery Transcription Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Services:</strong> HIPAA and ISO 9001:2015 certified for quality and compliance.</li>
              <li><strong>Data Security:</strong> Secure access, tracking, and no third-party sharing.</li>
              <li><strong>High Accuracy:</strong> Multi-level QA ensures error-free transcriptions.</li>
              <li><strong>Flexible Pricing:</strong> Customized and cost-effective packages.</li>
              <li><strong>Modern Infrastructure:</strong> World-class office setup and transcription tools.</li>
              <li><strong>Short Turnaround:</strong> Deliveries within committed timelines.</li>
              <li><strong>Scalable Team:</strong> Easily scale resources to meet project needs.</li>
              <li><strong>Experienced Staff:</strong> Skilled transcriptionists, project managers, and IT personnel.</li>
              <li><strong>24/7 Availability:</strong> Support available via phone, email, and webchat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Healthcare Services Provider:</strong> Transcribed and translated audio files in English and Spanish for a US-based provider.</li>
              <li><strong>Doctor in Australia:</strong> Transcribed ~100 audio files of varying lengths with successful delivery and follow-up projects.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Surgery Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for professional, accurate, and timely surgery transcription services and free up your team to focus on patient care.
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

export default SurgeryTranscription;
