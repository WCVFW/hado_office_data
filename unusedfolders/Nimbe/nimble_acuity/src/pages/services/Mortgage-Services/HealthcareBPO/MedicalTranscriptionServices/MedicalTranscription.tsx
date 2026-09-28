import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance your EHR with certified medical transcription—seamless data flow, impeccable
              accuracy, and elevated healthcare interoperability with <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our transcription services align with <strong>HL7 interoperability standards</strong>, ensuring
              accurate data exchange and smooth EMR integration. By adhering to CDA, FHIR, ADT, and
              ORM messaging frameworks, we reduce data silos, eliminate manual errors, and improve
              clinical efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With expertise in HL7 transactions and Continuity of Care Documents (CCD), we help
              healthcare providers achieve <strong>Meaningful Use compliance</strong>, optimize
              workflows, and enhance patient care quality.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Specialized Medical Transcription Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Radiology Transcription:</strong> Seamless PACS and RIS integration for accurate reports.</li>
              <li><strong>Pathology Transcription:</strong> NLP-driven reports ensuring precision in complex terminology.</li>
              <li><strong>Ophthalmology Transcription:</strong> Detailed capture of visual analyses and surgical notes.</li>
              <li><strong>EMR Transcription:</strong> Customized processes supporting all EMR platforms.</li>
              <li><strong>Cardiology Transcription:</strong> Covering full-spectrum cardiac evaluations and interventional procedures.</li>
              <li><strong>Neurology Transcription:</strong> Precise documentation of EEG, EMG, and sleep studies.</li>
              <li><strong>Deaf Transcription:</strong> Inclusive services with visual recognition and sign language transcription.</li>
              <li><strong>Psychiatry Transcription:</strong> Confidential notes supporting mental healthcare and therapy.</li>
              <li><strong>Physical Therapy Transcription:</strong> From initial evaluations to discharge plans for continuity of care.</li>
              <li><strong>Chiropractic Transcription:</strong> Accurate representation of adjustments and care plans.</li>
              <li><strong>Gastroenterology Transcription:</strong> Detailed endoscopy and digestive health documentation.</li>
            </ul>
          </div>

          {/* Clinical Specialties */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Specialty-Focused Online Transcription
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              <li>Progress Notes</li>
              <li>Anaesthesiology</li>
              <li>Internal Medicine</li>
              <li>Surgery</li>
              <li>Dermatology</li>
              <li>Emergency Room</li>
              <li>Oncology</li>
              <li>Genetics</li>
              <li>Pain Management</li>
              <li>Rehabilitation</li>
              <li>ENT</li>
              <li>Urology</li>
              <li>Operative Reports</li>
              <li>History & Physical Notes</li>
              <li>Follow-up Notes</li>
              <li>Virtual Medical Scribing</li>
              <li>Physician Assistant Scribing</li>
              <li>BSL Interpreting</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Workflow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Dictation Options:</strong> Choose phone, app, dictation device, or secure recording.</li>
              <li><strong>Audio Submission:</strong> Secure upload via FTP, Dropbox, or direct EMR integration.</li>
              <li><strong>Expert Transcription:</strong> Skilled professionals convert dictations into structured documents.</li>
              <li><strong>Quality Assurance:</strong> Three-level review for maximum accuracy and compliance.</li>
              <li><strong>Secure Delivery:</strong> Documents integrated into EMR or delivered via secure channels.</li>
            </ol>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Our Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Improved Accuracy:</strong> Advanced NLP ensures precise clinical documentation.</li>
              <li><strong>Faster Claims:</strong> Detailed records accelerate reimbursement cycles.</li>
              <li><strong>Easy Documentation:</strong> Seamless EMR integration reduces administrative effort.</li>
              <li><strong>Cost Efficiency:</strong> Outsourcing lowers overhead without quality compromise.</li>
              <li><strong>Time-Saving:</strong> Clinicians focus more on patient care, less on documentation.</li>
            </ul>
          </div>

          {/* Reports */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Medical Dictation Reports
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Follow-up Notes:</strong> Detailed updates supporting ongoing care.</li>
              <li><strong>Patient Charting:</strong> Accurate data for analytics and population health.</li>
              <li><strong>Medical Reports:</strong> Precise documentation of diagnostics and pathology.</li>
              <li><strong>Operative Reports:</strong> Comprehensive surgical details for post-op care.</li>
              <li><strong>Discharge Summaries:</strong> Clear care plans ensuring continuity across providers.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>API & SFTP Integration:</strong> Secure, real-time EMR updates.</li>
              <li><strong>Compliance:</strong> HIPAA, GDPR, and CCPA-compliant with strict data protocols.</li>
              <li><strong>Geofencing Security:</strong> Enforce access policies based on user location.</li>
              <li><strong>24/7 Support:</strong> Dedicated technical and client support across time zones.</li>
              <li><strong>Team Accounts:</strong> Role-based access and workflow management for large organizations.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
              <li>Medical Billing</li>
              <li>Revenue Cycle Management</li>
              <li>Pharmacy Business Services</li>
              <li>Claims Adjudication</li>
              <li>EMR Services</li>
              <li>Telehealth Support</li>
              <li>Medical Coding</li>
              <li>Medical Animation</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li><strong>US Healthcare Firm:</strong> Assembled a large expert team, delivering transcription services at scale.</li>
              <li><strong>Rehabilitation Client:</strong> Provided rehab transcription aligned with EHR migration, boosting revenue by 40% and cutting costs by 35%.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <p className="text-gray-700 italic">
              “As ever my very sincere thanks for your ongoing support of this practice, your excellent
              transcription services are greatly appreciated and valued.”
            </p>
            <p className="text-gray-700 font-medium mt-2">
              – Chief Physiotherapist, Physiotherapy Centre, Dublin
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Clinical Documentation
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource medical transcription to <strong>Nimble Acuity</strong> for operational
              efficiency, faster TAT, and unmatched accuracy. Let us optimize your workflows and
              compliance while you focus on patient care.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get Started Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MedicalTranscription;
