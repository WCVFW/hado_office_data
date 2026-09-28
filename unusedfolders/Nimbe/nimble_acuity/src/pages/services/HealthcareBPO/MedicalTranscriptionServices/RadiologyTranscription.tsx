import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const RadiologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Expert Radiology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce delays in patient care and optimize workflow with high-quality, HIPAA-compliant radiology transcription services from Nimble Acuity. We ensure rapid, accurate, and cost-effective transcription for hospitals, clinics, and radiologists worldwide.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              STAT reporting is critical in radiology, and delays can impact patient care and revenue. <strong>Nimble Acuity</strong> offers specialized radiology transcription services with backup resources and cutting-edge software, ensuring reports in 15+ formats within 12-24 hours. Focus on patient care while we handle precise transcription.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Radiology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Mammograms</li>
              <li>X-Rays</li>
              <li>Bone Scans</li>
              <li>Nuclear Medicine</li>
              <li>Magnetic Resonance Imaging (MRI)</li>
              <li>Ultrasounds</li>
              <li>Positron Emission Tomography (PET)</li>
              <li>Consultations and Progress Notes</li>
              <li>Computer Tomography (CT)</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Radiology Transcription Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> We review your requirements to design a secure, scalable, and cost-effective workflow.</li>
              <li><strong>Transcription:</strong> Audio recordings are transcribed using advanced digital dictation tools and transcription software.</li>
              <li><strong>Multi-step Quality Check:</strong> Transcribed reports are carefully reviewed to ensure high accuracy.</li>
              <li><strong>Delivery:</strong> Final reports are delivered securely via encrypted email or secure network.</li>
              <li><strong>Post-Project Support:</strong> Ongoing support and training for your team to utilize transcribed files effectively.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Radiology Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & HIPAA-Compliant:</strong> ISO-certified radiology transcription with HL7 integration.</li>
              <li><strong>Data Security:</strong> Physical and digital security measures ensure confidentiality.</li>
              <li><strong>High Accuracy:</strong> Precision up to 98% with advanced transcription technology.</li>
              <li><strong>Short Turnaround:</strong> Fast TAT to reduce delays in patient care.</li>
              <li><strong>Scalable Solutions:</strong> Pay only for the services you need.</li>
              <li><strong>Cost-Effective:</strong> Save up to 30% on manpower and infrastructure costs.</li>
              <li><strong>Dedicated Point of Contact:</strong> Single expert contact for project updates and guidance.</li>
              <li><strong>Experienced Team:</strong> 100+ CMT-certified transcriptionists skilled in ICD-10, ICD-11, and DSM-5.</li>
              <li><strong>Modern Infrastructure:</strong> Secure, state-of-the-art transcription facility with advanced software.</li>
              <li><strong>Multiple File Formats:</strong> Supports MP3, ACELP.net, MP4, WMA, WAV, CDA, SRI, Microsoft ADPCM™, Voxware, and Non-wave formats.</li>
              <li><strong>Secure Data Exchange:</strong> Encrypted FTP and VPN ensure safe file transfer.</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock support for your convenience.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Australian Radiologists:</strong> Automated 2000 STAT transcripts per client quality benchmarks.</li>
              <li><strong>Maryland Client:</strong> Reduced AR days from 34 to 23 and increased collection percentage from 53% to 61% within 6 months.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Radiology Transcription Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of experience and a team of 100+ certified transcriptionists, Nimble Acuity delivers customized radiology transcription services that save you time, reduce errors, and improve patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for accurate, timely, and cost-effective radiology transcription services? Get in touch with us today.
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

export default RadiologyTranscription;
