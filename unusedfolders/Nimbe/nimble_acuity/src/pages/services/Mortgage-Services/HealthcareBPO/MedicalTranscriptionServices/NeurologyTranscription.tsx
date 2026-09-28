import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const NeurologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Neurology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Transcribing neurology reports requires precision and understanding of complex medical terminology. <strong>Nimble Acuity</strong> delivers fast, accurate, and cost-effective neurology transcription services tailored for clinics, hospitals, and individual practices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our certified medical transcriptionists (CMTs) understand neurologists' dictation styles and can transcribe clinical histories, procedures, SOAP notes, and more in multiple formats. We also provide multi-platform integration for seamless workflow.
            </p>
          </div>

          {/* Neurology Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Neurology Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Progress Reports</li>
              <li>Clinic Notes</li>
              <li>Operative Reports</li>
              <li>Radiology Reports</li>
              <li>Medical Reviews</li>
              <li>Consultation Notes</li>
              <li>Discharge Summaries</li>
              <li>EMG (Electromyography) Reports</li>
              <li>Laboratory Reports</li>
              <li>Procedure Notes</li>
              <li>History and Physical Reports</li>
            </ul>
          </div>

          {/* Neurological Conditions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Neurological Conditions Covered
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Movement Disorders</li>
              <li>Spine Disorders</li>
              <li>Stroke and Vascular Neurology Disorders</li>
              <li>ADHD and Cognitive Development Disorders</li>
              <li>Headache and Facial Pain</li>
              <li>Dural Arteriovenous Fistulae</li>
              <li>Dementia and Alzheimer's Disease</li>
              <li>Parkinson's Disease</li>
              <li>Sleep Disorders</li>
              <li>Visual-Cranial Nerve Symptoms</li>
              <li>Neuromuscular Diseases</li>
              <li>Epilepsy and Other Seizure Disorders</li>
              <li>Cranial Nerve Disorders</li>
              <li>Post-Herpetic Neuralgia</li>
              <li>Multiple Sclerosis</li>
              <li>Peripheral and Autonomic Nerve Disorders</li>
              <li>Memory Disorders and more</li>
            </ul>
          </div>

          {/* Transcription Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Neurology Transcription Process
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Securely send your data via FTP or encrypted methods.</li>
              <li><strong>Transcription Service:</strong> Our experts transcribe audio using playback devices, phone instructions, or secure email dictations.</li>
              <li><strong>Multi-step Quality Check:</strong> Inaccuracies are flagged and corrected by trained specialists before delivery.</li>
              <li><strong>Delivery of Transcribed Documents:</strong> Finished transcripts are sent securely in the requested format.</li>
              <li><strong>Post-Project Support:</strong> Continuous support after delivery ensures any issues are addressed promptly.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose <strong>Nimble Acuity</strong> for Neurology Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Transcription Provider:</strong> HIPAA-compliant and HL7-integrated services.</li>
              <li><strong>Data Security:</strong> Multi-layered protection ensures confidentiality of patient records.</li>
              <li><strong>High Accuracy:</strong> Up to 98% transcription accuracy maintained with quality checks.</li>
              <li><strong>Short Turnaround:</strong> Fast delivery within 24 hours while maintaining quality.</li>
              <li><strong>Scalability:</strong> Flexible transcription volumes without additional staffing costs.</li>
              <li><strong>Cost-Effective Pricing:</strong> Save up to 30% compared to in-house transcription.</li>
              <li><strong>Dedicated Point of Contact:</strong> A single project manager for updates and queries.</li>
              <li><strong>Experienced Team:</strong> CMTs trained in ICD-10, ICD-11, and DSM-5 coding.</li>
              <li><strong>Modern Infrastructure:</strong> Smart technologies and document management tools for accuracy.</li>
              <li><strong>Multiple File Formats:</strong> MP3, WAV, MP4, WMA, CDA, Voxware, and more.</li>
              <li><strong>Secure Data Exchange:</strong> Safe FTP transfer and encrypted delivery of transcripts.</li>
              <li><strong>Round-the-Clock Availability:</strong> 24/7 assistance for any transcription queries.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Australian Radiologists:</strong> Automated 2,000 STAT transcripts while meeting quality benchmarks across time zones.
            </p>
            <p className="text-gray-700 leading-relaxed mb-2">
              <strong>Maryland Client:</strong> AR Management and Medical Billing reduced average AR days from 34 to 23 and increased collection from 53% to 61% in six months.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Neurology Transcription to <strong>Nimble Acuity</strong>
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> for accurate, fast, and cost-effective neurology transcription. Save time and reduce costs while maintaining high-quality medical records.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to discuss your neurology transcription requirements and receive customized solutions.
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

export default NeurologyTranscription;
