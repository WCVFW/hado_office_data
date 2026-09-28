import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EMRTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMR Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure accuracy in your patient medical records and focus more on patient care with our world-class EMR transcription services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Healthcare providers today are under increasing pressure to deliver higher standards of care. 
              Alongside this, managing electronic health data and administrative paperwork can drain valuable time and attention. 
              While many physicians now record dictations digitally, these must be accurately transcribed and integrated into EMR/EHR systems for maximum usability.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is an ISO-certified provider of comprehensive EMR transcription services. 
              We convert audio and paper-based records into digital files that seamlessly integrate with all major EMR platforms. 
              Our solutions help doctors improve productivity, reduce inefficiencies, and focus more on patient care.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EMR Transcription Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Remote transcription of audio medical records directly into your EMR/EHR system.</li>
              <li>Integration of voice capture with transcription workflow.</li>
              <li>Seamless integration of transcriptions into popular EMR platforms.</li>
              <li>Compliance with ICD-10 coding standards for accuracy.</li>
              <li>Use of EMR system messaging functions to streamline workflow.</li>
              <li>Expertise with a wide range of EMR templates, including custom templates.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our End-to-End EMR Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Document Transmission:</strong> Clients send clinical documents and dictations securely.</li>
              <li><strong>Transcription:</strong> Our team accurately transcribes the medical records into text format.</li>
              <li><strong>Quality Control:</strong> Multi-level checks ensure compliance and precision.</li>
              <li><strong>System Update:</strong> Transcribed data is uploaded to the client’s EMR system.</li>
              <li><strong>Final Delivery:</strong> Completed files are securely shared via FTP or encrypted email.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for EMR Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO-Certified & HIPAA Compliant:</strong> Full adherence to regulations and patient data security.</li>
              <li><strong>High Accuracy:</strong> Up to 99% precision with robust quality checks.</li>
              <li><strong>Short Turnaround:</strong> Faster processing times for quicker patient care support.</li>
              <li><strong>Scalable Solutions:</strong> Flexible services to handle fluctuating client needs.</li>
              <li><strong>Cost-Effective:</strong> Affordable pricing tailored to diverse budgets.</li>
              <li><strong>Dedicated Support:</strong> A single point of contact for efficient communication.</li>
              <li><strong>Experienced Transcribers:</strong> Skilled in ICD-10, ICD-11, and DSM-5 coding.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced tools and secure systems for reliable results.</li>
              <li><strong>Multiple File Formats:</strong> Support for MP3, MP4, WAV, WMA, CDA, and more.</li>
              <li><strong>Secure Data Exchange:</strong> Risk-free transmission via FTP and VPN.</li>
            </ul>
          </div>

          {/* EMR Software */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Software We Leverage
            </h3>
            <p className="text-gray-700">
              Our team is proficient in a wide range of EMR software and transcription automation tools to deliver seamless, integrated solutions.
            </p>
            {/* You can add a list of specific EMR systems here */}
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Medical Transcription Services</li>
              <li>EMR Services</li>
              <li>Pharmacy Business Services</li>
              <li>Healthcare Revenue Cycle Management</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>US-Based Healthcare Firm:</strong> Delivered accurate medical transcription and translation services to support research and consulting projects.
              </p>
              <p>
                <strong>Rehabilitation Services Provider:</strong> Assisted client in moving to a new EHR software with comprehensive transcription support.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource EMR Transcription to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With 26+ years of industry experience, Nimble Acuity is a trusted partner for EMR transcription across 140+ nations. 
              We ensure accurate, secure, and fast transcription services that help healthcare providers focus on what matters most—patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to streamline your EMR documentation? Contact us today for a free consultation and quote.
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

export default EMRTranscription;
