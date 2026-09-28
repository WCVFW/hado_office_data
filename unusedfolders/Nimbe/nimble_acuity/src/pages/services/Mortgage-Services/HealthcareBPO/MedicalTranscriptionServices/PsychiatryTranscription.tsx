import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PsychiatryTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Specialized Psychiatry & Psychology Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              With a team skilled in medical terminologies and experience across psychiatry and psychology, Nimble Acuity provides seamless and cost-effective transcription services. We understand the nuances of each field and tailor our services to meet your specific needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our experts handle handwritten and typed notes, audio recordings, clinical test reports, and multiple diagnoses. We compile all these into organized documents, freeing healthcare providers from time-consuming backend work.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Psychiatry & Psychology Transcription at Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Initial Diagnostic Notes</li>
              <li>Independent Medical Evaluations</li>
              <li>Emergency Room Reports</li>
              <li>Physical Examination Reports</li>
              <li>Psychotherapy Evaluations</li>
              <li>Radiology Reports</li>
              <li>Psychological Reports</li>
              <li>Peer Reviews</li>
              <li>Research Notes</li>
              <li>Lab Notes</li>
              <li>Progress Notes</li>
              <li>SOAP Notes</li>
              <li>Discharge Summaries</li>
              <li>Insurance Records</li>
              <li>Medical Billing Records</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How Our Psychiatry Transcription Specialists Work
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Dictation:</strong> Doctors record their dictation using analog or digital devices to ensure clear audio.
              </li>
              <li>
                <strong>Transfer:</strong> Audio files are securely transferred to our servers, allowing constant access for a fast turnaround.
              </li>
              <li>
                <strong>Transcription:</strong> Transcriptionists use specialized tools to capture every word accurately, without modifying the original dictation.
              </li>
              <li>
                <strong>Quality Check:</strong> Stringent reviews and re-editing ensure a 99% accuracy rate before submission.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Psychiatry Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Reduction:</strong> Up to 50% savings on labor, infrastructure, and administrative overheads.</li>
              <li><strong>Expert Team:</strong> Access a highly qualified team trained in psychiatry and psychology transcription.</li>
              <li><strong>Focus on Patient Care:</strong> Your staff can dedicate more time to patients.</li>
              <li><strong>High Accuracy:</strong> Strict quality measures ensure 98% accuracy.</li>
              <li><strong>Specialized Knowledge:</strong> Professionals skilled in psychiatry-specific terminologies and languages.</li>
              <li><strong>Fast Turnaround:</strong> Assignments can start from 12 hours.</li>
              <li><strong>Customized Services:</strong> Tailored solutions based on your project and goals.</li>
              <li><strong>Regular Reporting:</strong> Periodical progress updates on all projects.</li>
              <li><strong>Easy Communication:</strong> Single point of contact for seamless interaction.</li>
              <li><strong>HIPAA Compliance:</strong> Full adherence to HIPAA regulations.</li>
              <li><strong>Data Security:</strong> 100% secure handling of sensitive medical data.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Streamline Your Psychiatry Transcription
            </h3>
            <p className="text-gray-700 mb-6">
              With years of experience and a proven track record in psychiatry and psychology transcription, Nimble Acuity ensures accurate, secure, and timely services for your healthcare organization.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to optimize your transcription process? Reach out to us today.
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

export default PsychiatryTranscription;
