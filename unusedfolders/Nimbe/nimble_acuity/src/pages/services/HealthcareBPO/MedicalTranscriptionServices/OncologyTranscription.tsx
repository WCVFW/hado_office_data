import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OncologyTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Oncology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Oncology treatment requires precise attention and care. <strong>Nimble Acuity</strong> provides accurate oncology transcription services, ensuring that medical reports, patient documentation, and diagnostic details are available at every point of care. This allows physicians to focus solely on patient treatment.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over a decade of experience, <strong>Nimble Acuity</strong> is a trusted provider of oncology transcription services. We deliver accurate, reliable, and timely medical documentation so oncology specialists can concentrate fully on patient care without worrying about charts or reports.
            </p>
          </div>

          {/* Complete Oncology Care Transcription */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Complete Oncology Care Transcription
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Patient Documentation</li>
              <li>Point of Care Interactions</li>
              <li>X-Ray, MRI, and Scan Reports</li>
              <li>Physical Test Reports</li>
              <li>Diagnosis Reports</li>
              <li>Operative Reports</li>
              <li>Medication Records</li>
              <li>Other Therapy Reports</li>
              <li>Patient’s Physical Response Details</li>
              <li>Discharge Summaries</li>
              <li>Patient-Doctor Meetings</li>
            </ul>
          </div>

          {/* Exclusive Oncology Resources */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Exclusive Oncology Transcription Resources
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> maintains a dedicated team of oncology transcriptionists focused solely on oncology cases. This specialization ensures higher accuracy, fewer errors, faster turnaround times, and expert handling of complex coding and transcription requirements. Our software and support staff further enhance service efficiency.
            </p>
          </div>

          {/* Oncology Study */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Continuous Oncology Study
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our oncology transcription team keeps up-to-date with the latest cancer studies and medical developments. This continuous learning ensures accurate understanding of complex medical terminology, physician notes, and dictations related to oncology.
            </p>
          </div>

          {/* Quality & HIPAA Compliance */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Quality Assurance & HIPAA Compliance
            </h3>
            <p className="text-gray-700 leading-relaxed">
              All services are delivered with <strong>Nimble Acuity</strong>’s highest quality standards, fully compliant with CTC codes and HIPAA regulations. Our oncology transcription ensures precise codes and error-free documentation for reliable medical reporting.
            </p>
          </div>

          {/* EMR Ready */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Ready Services
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> offers instant and accurate EMR transcription services. With customized dictation styles and documentation formats, your records are available quickly, enabling seamless access to vital patient information.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Oncology Transcription
            </h3>
            <p className="text-gray-700 mb-6">
              Whether you manage an oncology clinic, hospital, or are a solo practitioner, outsourcing oncology transcription to <strong>Nimble Acuity</strong> ensures high-quality, error-free transcriptions. Focus entirely on patient care while we handle your documentation.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Upload your dictations, patient notes, or other medical records and let us deliver precise, timely, and reliable oncology transcription services.
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

export default OncologyTranscription;
