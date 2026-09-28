import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PainManagementTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pain Management Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to accurate and affordable pain management transcription services from Nimble Acuity. With 26+ years of expertise, we help you save time, reduce administrative burden, and focus more on patient care.
            </p>
          </div>

          {/* Introduction */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Administrative tasks can overwhelm pain management providers, taking away valuable time from patients. <strong>Nimble Acuity</strong> provides precise, secure, and fast transcription services tailored for the pain management specialty. Our expert team understands the specific medical terminology and jargon used in this field, ensuring reliable and accurate reports every time.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pain Management Transcription Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              We cover a wide range of pain management transcription needs, delivered at cost-effective prices with unmatched accuracy.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Dictation of Patient Letters</li>
              <li>Medical Reports</li>
              <li>Medical Referral Letters</li>
              <li>Summaries of Medical Assessments</li>
              <li>Medical Conference Speeches</li>
              <li>Training & Educational Videos</li>
              <li>Symposium and Conference Transcription</li>
              <li>Consultation Notes</li>
              <li>Physical Examination Reports</li>
              <li>Patient History</li>
              <li>Office Notes</li>
              <li>Discharge Summaries</li>
              <li>Clinic Notes</li>
              <li>Lab Reports (MRI, X-Ray, etc.)</li>
              <li>Operative Reports</li>
              <li>Medication Reports</li>
              <li>Diagnosis and Therapy Reports</li>
              <li>Patient Documentation & Meeting Notes</li>
              <li>Point of Care Interactions</li>
              <li>Podcasts & Infomercials</li>
            </ul>
          </div>

          {/* Other Related Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Neurology Transcription Services</li>
              <li>Radiology Transcription Services</li>
              <li>Oncology Transcription Services</li>
              <li>Dermatology Transcription Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Pain Management Transcription to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions that deliver the best value for money.</li>
              <li><strong>High-Quality Services:</strong> ISO-certified processes with robust QA checks for accuracy.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art offices and technology for seamless transcription.</li>
              <li><strong>Structured Processes:</strong> Time-tested workflows for consistent and reliable outcomes.</li>
              <li><strong>Advanced Tools:</strong> Use of the latest transcription technologies to deliver excellence.</li>
              <li><strong>Experienced Team:</strong> 26+ years of expertise in handling pain management transcription projects.</li>
              <li><strong>Data Security:</strong> HIPAA and GDPR-compliant systems to protect sensitive information.</li>
              <li><strong>Quick Turnaround:</strong> Timely delivery to meet even the tightest deadlines.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Indianapolis Physicians:</strong> Processed 3000+ physician encounters with quick and accurate transcription support.</li>
              <li><strong>US-based Client:</strong> Delivered accurate rehabilitation transcription services and assisted with EMR migration.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pain Management Transcription to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers specialized, secure, and accurate pain management transcription services for physicians, clinics, and hospitals worldwide. With expert teams and decades of experience, we help reduce your administrative burden while maintaining precise medical documentation.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to streamline your pain management documentation? <strong>Contact us today.</strong>
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PainManagementTranscription;
