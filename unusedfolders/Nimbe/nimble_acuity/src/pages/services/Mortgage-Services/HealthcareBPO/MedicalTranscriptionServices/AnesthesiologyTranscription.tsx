import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const AnesthesiologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Anesthesiology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Access HIPAA-compliant and accurate anesthesiology transcription services starting at $1280/month, helping you focus on patient care instead of documentation.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Anesthesiologists play a critical role in pain management and patient safety during surgeries. <strong>Nimble Acuity</strong> provides highly experienced transcriptionists who convert audio dictations into error-free written reports, fully compliant with HIPAA regulations. With over 26 years of experience, we help anesthesiologists maintain accurate records for EHRs and other documentation purposes.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Anesthesiology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Local Anesthesia</li>
              <li>Cardiac Anesthesia</li>
              <li>Cardiothoracic Anesthesia</li>
              <li>Obstetrical Anesthesia</li>
              <li>Neurosurgical Anesthesia</li>
              <li>Regional Anesthesia</li>
              <li>General Anesthesia</li>
              <li>Pediatric Anesthesia</li>
              <li>Pain Medicine</li>
              <li>Spinal Anesthesia</li>
              <li>Preoperative Medicine</li>
              <li>Epidural Anesthesia</li>
              <li>Possible Health Complications</li>
              <li>Side Effects</li>
              <li>Critical Care Anesthesia</li>
              <li>Orthopedic Anesthesia</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Receiving the Files:</strong> Securely send anesthesiology reports via FTP.</li>
              <li><strong>Transcription:</strong> Our experts study and meticulously transcribe the files.</li>
              <li><strong>Quality Check:</strong> Multi-level quality checks ensure accuracy.</li>
              <li><strong>Delivery:</strong> Final reports delivered securely via encrypted email or FTP.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ophthalmology Transcription Services</li>
              <li>Neurology Transcription Services</li>
              <li>Psychiatry Transcription Services</li>
              <li>Discharge Summary Transcription</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Anesthesiology Transcription Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Cost-effective transcription with up to 40% savings.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified company with multi-level quality checks.</li>
              <li><strong>Superb Infrastructure:</strong> Modern offices and equipment for accurate transcription.</li>
              <li><strong>Structured Process:</strong> Robust workflow ensures consistent and timely results.</li>
              <li><strong>Data Security:</strong> Your information is handled with utmost security.</li>
              <li><strong>HIPAA Compliance:</strong> Fully compliant with HIPAA standards.</li>
              <li><strong>Experienced Team:</strong> Over 26 years of expertise in anesthesiology transcription.</li>
              <li><strong>Short Turnaround:</strong> Delivery within the agreed timelines.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Indianapolis Physicians:</strong> Processed 3,000+ encounters efficiently.</li>
              <li><strong>Rehabilitation Transcription:</strong> Delivered error-free rehab transcription services to a US client.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Anesthesiology Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides accurate, HIPAA-compliant, and cost-effective anesthesiology transcription services to help you focus on patient care.
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

export default AnesthesiologyTranscription;
