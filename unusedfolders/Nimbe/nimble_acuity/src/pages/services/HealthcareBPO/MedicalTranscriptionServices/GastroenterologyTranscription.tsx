import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const GastroenterologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Expert Gastroenterology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Free up your time and focus on patient care with professional, accurate, and timely gastroenterology transcription services from Nimble Acuity. Our HIPAA-compliant solutions are designed for hospitals, clinics, and individual gastroenterologists worldwide.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing patient reports and documentation can be time-consuming. <strong>Nimble Acuity</strong> delivers quality-driven gastroenterology transcription services, integrated into your EHR if needed, to reduce manual data entry and let you focus on your patients. Our team ensures reliable, accurate, and cost-effective solutions customized to your practice.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Gastroenterology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Anoscopy Transcription</li>
              <li>Appendectomy Transcription</li>
              <li>Colonoscopy Transcription</li>
              <li>Endoscopy Transcription</li>
              <li>Laparoscopic Procedures Transcription</li>
              <li>Nasogastric Intubation Transcription</li>
              <li>Thoracotomy & Esophageal Exploration Transcription</li>
              <li>Umbilical Hernia Repair Transcription</li>
              <li>Biopsy Transcription</li>
              <li>Sigmoidoscopy Transcription</li>
              <li>Diagnostic & Therapeutic Paracentesis Transcription</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Gastroenterology Transcription Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>01. Receiving the Report:</strong> Send reports securely via FTP.</li>
              <li><strong>02. Transcription Performed:</strong> Our professional team meticulously transcribes all reports into electronic format.</li>
              <li><strong>03. Quality Check:</strong> Multi-level checks ensure every report is accurate and compliant.</li>
              <li><strong>04. Delivery:</strong> Final reports delivered via secure FTP or encrypted email.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Neurology Transcription Services</li>
              <li>Psychiatry Transcription Services</li>
              <li>Ophthalmology Transcription Services</li>
              <li>Discharge Summary Transcription</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Gastroenterology Transcription Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Save up to 40% with our cost-effective services.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified with multi-level quality checks for accurate transcription.</li>
              <li><strong>Superb Infrastructure:</strong> Modern offices and equipment ensure high-quality transcription.</li>
              <li><strong>Structured Process:</strong> Time-tested workflow ensures accuracy and efficiency.</li>
              <li><strong>Data Security:</strong> Fully GDPR-compliant and secure handling of patient data.</li>
              <li><strong>Experienced Team:</strong> 26+ years of experience and expert knowledge of gastroenterology terminology.</li>
              <li><strong>Short Turnaround:</strong> Receive transcripts well within deadlines.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Indianapolis Physicians:</strong> Processed over 3000 physician encounters efficiently.</li>
              <li><strong>Rehabilitation Transcription Services:</strong> Delivered high-quality rehab transcription for a US-based client.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Gastroenterology Transcription Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With 26+ years of experience and a team of professional transcriptionists, Nimble Acuity delivers accurate, timely, and cost-effective gastroenterology transcription services that help you focus on patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for reliable gastroenterology transcription services? <strong>Get in touch with us today.</strong>
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

export default GastroenterologyTranscription;
