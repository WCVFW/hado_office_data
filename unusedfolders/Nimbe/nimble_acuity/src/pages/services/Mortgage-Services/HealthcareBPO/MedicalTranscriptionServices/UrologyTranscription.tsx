import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const UrologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Urology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Get accurate, timely, and cost-effective urology transcription services starting at $1280/month, delivered by experienced transcriptionists with 26+ years of expertise.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> provides precise urology transcription services for medical dictations, research, discharge summaries, surgery notes, and more. Our team of highly trained transcriptionists, IT professionals, and English specialists ensure flawless transcripts with quick turnaround times, enabling healthcare providers to focus on patient care.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Urology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Endourology</li>
              <li>Benign Prostatic Hyperplasia</li>
              <li>Laparoscopy</li>
              <li>Prostate Cancer</li>
              <li>Bladder Tumors and Biopsies</li>
              <li>Andrology</li>
              <li>Bladder Instillation</li>
              <li>Fulguration</li>
              <li>Female Urology</li>
              <li>Kidney Stone</li>
              <li>Robotic Prostate Surgery</li>
              <li>Surgical Procedures (e.g., Vasectomies)</li>
              <li>Bilateral Vasovasostomy</li>
              <li>Robotic Kidney and Reconstructive Surgery</li>
              <li>Neurourology</li>
              <li>Hydrocele</li>
              <li>Minimally Invasive Surgery</li>
              <li>Urologic Oncology</li>
              <li>Nephrectomy</li>
              <li>Focal Therapy and Interventional Urology</li>
              <li>BioArc Midurethral Sling</li>
              <li>Integrative Urology and Wellness</li>
              <li>Reconstructive Urology</li>
              <li>Urinary Incontinence</li>
              <li>Transient Urinary Incontinence</li>
              <li>Pediatric Urology</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Urology Transcription Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Receipt of Report:</strong> Send reports securely via FTP.</li>
              <li><strong>Transcription Performed:</strong> Team studies and transcribes reports into electronic format.</li>
              <li><strong>Quality Check:</strong> Two-layered review ensures accuracy.</li>
              <li><strong>Delivery:</strong> Final documents delivered via secure FTP or encrypted email.</li>
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
              Why Outsource Urology Transcription Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Hourly, FTE, and bulk discounts available.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified with multi-level quality checks.</li>
              <li><strong>Superb Infrastructure:</strong> Skilled resources using world-class offices and modern technology.</li>
              <li><strong>Structured Process:</strong> Time-tested workflow for accurate delivery.</li>
              <li><strong>Data Security:</strong> Secure FTP/VPN transfers and GDPR compliance.</li>
              <li><strong>Experienced Team:</strong> 26+ years of transcription expertise.</li>
              <li><strong>Short Turnaround:</strong> Deliveries always within deadlines.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Rehabilitation Transcription Services:</strong> Delivered high-quality rehab transcription services to a client.</li>
              <li><strong>Indianapolis Physicians:</strong> Processed 3,000 physician encounters successfully for a medical group.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Urology Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for reliable, accurate, and timely urology transcription services and focus on delivering exceptional patient care.
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

export default UrologyTranscription;
