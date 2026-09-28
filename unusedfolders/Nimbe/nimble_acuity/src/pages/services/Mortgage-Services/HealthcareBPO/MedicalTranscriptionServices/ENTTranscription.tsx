import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ENTTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Professional ENT Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your ENT documentation with accurate, reliable, and cost-effective transcription services from Nimble Acuity. With 26+ years of expertise, we deliver HIPAA-compliant reports quickly to help your practice focus on patient care.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Repetitive transcription tasks and misinterpretation of medical jargon can slow down your practice. <strong>Nimble Acuity</strong> combines intelligent speech recognition tools with skilled human transcriptionists to provide precise ENT reports. We also offer Otolaryngology transcription services to cover a wider range of patient documentation needs.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ENT Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Swallowing Disorders</li>
              <li>Facial Nerve Disorders</li>
              <li>Head and Neck Cancer</li>
              <li>Facial Trauma</li>
              <li>Obstructive Sleep Apnea</li>
              <li>Voice Disorders</li>
              <li>Sinus Disease</li>
              <li>Hearing (Tinnitus)</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ENT Transcription Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>01. Recording Audio:</strong> ENT practitioners record patient encounters via call-in dictation or Dictaphone.</li>
              <li><strong>02. Transcription Contracting:</strong> SLA finalized before the transcription process begins.</li>
              <li><strong>03. Document Upload:</strong> Secure upload of documents via FTP or VPN for safe handling.</li>
              <li><strong>04. Voice Transcription:</strong> Transcriptionists convert audio into accurate text for medical billing and documentation.</li>
              <li><strong>05. Quality Assurance:</strong> Proofing ensures reports are precise and ready for reimbursement without errors.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource ENT Transcription Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified ENT Transcription Company:</strong> ISO 9001:2013 certified and HIPAA-compliant, providing quality ENT transcription.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2015 certified, secure handling of confidential clinical data with NDA protection.</li>
              <li><strong>High Accuracy and Quality:</strong> Expert transcriptionists ensure accurate reports and faster claims processing.</li>
              <li><strong>Short Turnaround:</strong> Quick TAT to support timely reimbursements and minimize claim denials.</li>
              <li><strong>Scalability:</strong> Handle any volume of transcription needs efficiently as your practice grows.</li>
              <li><strong>Affordable Pricing:</strong> Pay-as-you-go options to suit your needs without unnecessary upfront costs.</li>
              <li><strong>Single-Point Contact:</strong> Dedicated account manager for personalized support and guidance.</li>
              <li><strong>Experienced Team:</strong> 200+ trained ENT transcriptionists using modern tools for error-free results.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art technology, security, and workflow for superior service delivery.</li>
              <li><strong>Secure Data Exchange:</strong> FTP and VPN secure transmission of sensitive data.</li>
              <li><strong>Round-the-Clock Availability:</strong> 24/7 support via phone, email, and web chat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Rehabilitation Care in Indianapolis:</strong> Streamlined 3000+ encounters, optimizing EMR organization and storage.</li>
              <li><strong>Australian Radiologists:</strong> Transcribed 2000 STAT reports efficiently with customized software for fast TAT.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource ENT Transcription Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers reliable, accurate, and cost-effective ENT transcription services with 26+ years of expertise. Our secure and HIPAA-compliant workflow ensures high-quality reports delivered quickly to help your practice run smoothly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for expert ENT transcription services? <strong>Get in touch with us today.</strong>
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

export default ENTTranscription;
