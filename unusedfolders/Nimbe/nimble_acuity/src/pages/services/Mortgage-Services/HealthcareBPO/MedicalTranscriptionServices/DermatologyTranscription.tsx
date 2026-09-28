import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const DermatologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Specialized Dermatology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Are you looking for accurate dermatology transcription with fast turnaround times? Nimble Acuity offers HIPAA-compliant, cost-effective transcription solutions tailored to your dermatology practice. We handle everything from surgical therapies and biopsies to consultations and discharge summaries.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With expertise in template formatting, medical terminologies, and EMR/EHR systems, our team delivers precise dermatology transcription without upfront charges. Choose our flexible, pay-as-you-go model to work without contracts while streamlining your workflow.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Dermatology Transcription Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Our experienced transcriptionists handle a wide range of dermatology conditions and procedures:
            </p>

            {/* Conditions */}
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3 mb-8">
              <li>Seborrheic Dermatitis</li>
              <li>Insect Bites</li>
              <li>Drug Eruption</li>
              <li>Herpes Zoster</li>
              <li>Burns</li>
              <li>Acne</li>
              <li>Laceration</li>
              <li>Contusion</li>
              <li>Psoriasis</li>
              <li>Rosacea</li>
              <li>Actinic Keratosis</li>
              <li>Atopic Dermatitis</li>
            </ul>

            {/* Procedures */}
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>AVEA Operative Report</li>
              <li>Botox Therapeutic/Hyperhidrosis</li>
              <li>Molluscum Contagiosum Treatment Record</li>
              <li>Injections</li>
              <li>Laser Surgery</li>
              <li>Skin Care Consult</li>
              <li>Hair Transplantation</li>
              <li>Allergy Testing</li>
              <li>Sclerotherapy</li>
              <li>I & D Cyst</li>
              <li>ED & C</li>
              <li>Condyloma Treatment Record</li>
              <li>Radiation Therapy</li>
              <li>Laser Therapy</li>
              <li>Simple Excision</li>
              <li>Tumescent Liposuction</li>
              <li>Phototherapy</li>
              <li>Vitiligo Surgery</li>
              <li>Chemical Peels</li>
              <li>Actinic Keratosis Treatment Record</li>
              <li>Sterile Surgery</li>
              <li>Photodynamic Therapy</li>
              <li>Complex Excision</li>
              <li>Shave/Biopsy</li>
              <li>Hair Removal</li>
              <li>Free Skin Cancer Screening</li>
              <li>Ingrown Toenail Removal</li>
              <li>Mohs Surgery</li>
              <li>Mohs Micrographic Surgery</li>
              <li>Wart Treatment Record</li>
              <li>Laser Hair Removal</li>
              <li>Cryosurgery</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Dermatology Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Dictation Capture:</strong> High-quality recording software captures patient encounters for transcription.</li>
              <li><strong>Transmission Process:</strong> Files are securely transmitted via internet or VPN and stored on the cloud for seamless access.</li>
              <li><strong>Medical Transcription:</strong> Our transcriptionists convert audio into accurate text, accommodating dialects and accents.</li>
              <li><strong>Real-time Workflow Management:</strong> Reports are prepared with clear, organized information and shared for evaluation.</li>
              <li><strong>Delivery of Transcribed Records:</strong> Transcripts are stored in EMR/EHR for quick access, billing, and insurance processing.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Dermatology Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Company:</strong> Over 26 years of experience, ISO 9001:2015 certified, HIPAA-compliant services.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified; secure infrastructure and controlled access.</li>
              <li><strong>High Accuracy & Quality:</strong> Proofing experts verify transcriptions for error-free results.</li>
              <li><strong>Short Turnaround Time:</strong> Fast transcription ensures minimal delays in your workflow.</li>
              <li><strong>Scalability:</strong> Services can scale up or down quickly based on your needs.</li>
              <li><strong>Affordable Pricing:</strong> Flexible plans to fit your practice and budget.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated representative for support and communication.</li>
              <li><strong>Experienced Team:</strong> In-house transcriptionists and proofing experts trained in AAMT/AHDI standards.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced technology and automated tools for secure and efficient transcription.</li>
              <li><strong>Secure Data Exchange:</strong> FTP and VPN with monitoring software for vulnerability protection.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support via phone, email, or web chat.</li>
            </ul>
          </div>

          {/* Client Success */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Processed 3000+ rehabilitation care encounters for a US client, streamlining their EMR system.</li>
              <li>Provided transcription automation for 2000 STAT encounters for Australian radiologists with quick TAT.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <p className="text-gray-700 italic">
              "I'm pleased with the support. The response time and communication are fine. Knowledge about billing and claims is excellent. All the best!" - Founder, Healthcare Consulting Company, California
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Dermatology Transcription to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With 250+ clients worldwide, Nimble Acuity simplifies dermatology transcription for hospitals, clinics, and individual practices. We ensure fast, accurate, and secure transcription to accelerate billing, documentation, and claims processing.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out today for a cost-effective dermatology transcription solution.
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

export default DermatologyTranscription;
