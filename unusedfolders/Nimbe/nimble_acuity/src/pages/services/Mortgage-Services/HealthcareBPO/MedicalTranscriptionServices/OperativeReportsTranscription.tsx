import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OperativeReportsTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Operative Reports Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Get cost-effective, scalable, and high-quality operative reports transcription services, so you can focus on patient care rather than time-consuming in-house transcription.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you searching for quality operative reports transcription services to save time and focus on core tasks? <strong>Nimble Acuity</strong> has a team of expert transcriptionists trained in medical terminology and compliance regulations. With over 26 years of experience, we provide accurate operative reports transcription services for hospitals, clinics, and individual practitioners, maintaining a baseline accuracy of over 99%.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Operative Reports Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Diseases & Disorders:</strong> Inflammatory Bowel, Biliary, Diverticulitis, Gallbladder, Pancreatitis, Gastro-esophageal disorder, Gallstones, Appendicitis, etc.</li>
              <li><strong>Surgical Processes:</strong> Hernia Reparation, Appendectomy, Orthotopic liver transplant, Bilateral pelvic lymph-node dissection, Laparoscopic bile duct exploration, Laparoscopic cholecystectomy, Adenotonsillectomy, Cadaveric renal transplant, etc.</li>
              <li><strong>Medical Specialties:</strong> Cardiology, Oncology, Gynecology, Gastroenterology, Radiology, Dermatology, Anesthesiology, Pathology, Urology, etc.</li>
              <li><strong>Other Transcription Services:</strong> Progress/Clinic notes, Discharge reports, Autopsy reports, Referral notes, Consultation reports, Operating theatre reports, Laboratory reports, Diagnostic imaging reports, History & physical examination, etc.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Dictation:</strong> Doctor records the dictation via analog or digital devices.</li>
              <li><strong>File Transfer:</strong> Files are transferred securely to our transcriptionists.</li>
              <li><strong>Transcription:</strong> Using modern tools, our experts transcribe recordings accurately.</li>
              <li><strong>Quality Control:</strong> Final evaluation ensures error-free operative reports.</li>
            </ul>
          </div>

          {/* Tools & Formats */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Tools & Formats We Leverage
            </h3>
            <p className="text-gray-700 mb-4">
              We use the latest transcription software and support multiple formats:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Mp3, Mp4</li>
              <li>WAV</li>
              <li>CDA</li>
              <li>ACELP.net</li>
              <li>Microsoft ADPCM</li>
              <li>SRI format files</li>
              <li>DSS File</li>
              <li>Windows Media Audio</li>
              <li>Voxware formats</li>
              <li>Non-Wave & proprietary formats</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> Tailored plans based on volume, resources, and geography.</li>
              <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 certified, ensuring data protection.</li>
              <li><strong>HIPAA Compliance:</strong> Protects privacy, security, and confidentiality of PHI.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Modern systems enable timely and accurate transcription.</li>
              <li><strong>High-Quality Services:</strong> Accurate and efficient transcription, minimizing errors.</li>
              <li><strong>24/7 Availability:</strong> Support team available anytime for immediate assistance.</li>
              <li><strong>Experienced Team:</strong> Over 100 transcriptionists and 500 support staff with extensive expertise.</li>
              <li><strong>Accuracy:</strong> Maintains 99% accuracy across all transcription services.</li>
              <li><strong>Scalable Solutions:</strong> Easily scale services to meet increasing demand.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Indianapolis Doctor:</strong> Processed 3,000+ encounters efficiently.</li>
              <li><strong>Rehabilitation Transcription:</strong> Assisted healthcare foundation to migrate data to new EHR seamlessly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Operative Reports Transcription Services
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity delivers correct, timely, and reasonably priced operative reports transcription services, helping you save time and focus on patient care.
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

export default OperativeReportsTranscription;
