import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const ChiropracticTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Accurate Chiropractic Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce your administrative burden and spend more time on patient care with Nimble Acuity’s world-class chiropractic transcription solutions. We deliver precise transcripts tailored for chiropractic practitioners, ensuring compliance, accuracy, and efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> partners with individual chiropractors, clinics, and hospitals to provide reliable transcription solutions. Our expert transcriptionists, proofreaders, and editors ensure accuracy rates of up to 99.9%, so you can focus on delivering better care without worrying about documentation errors.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Chiropractic Transcription Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Consultation Notes Transcription</li>
              <li>Patient Letters</li>
              <li>Medical Referral Letters</li>
              <li>Patient History Records</li>
              <li>Physical Examination Reports</li>
              <li>Medical Assessment Summaries</li>
              <li>Office & Clinic Notes</li>
              <li>Patient–Doctor Meeting Transcriptions</li>
              <li>Discharge Summaries</li>
              <li>Laboratory Reports</li>
              <li>X-Ray & MRI Scan Reports</li>
              <li>Operative & Diagnosis Reports</li>
              <li>Medication & Therapy Reports</li>
              <li>Patient’s Physical Response Details</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Cost-effective solutions designed to maximize value.</li>
              <li><strong>High Accuracy:</strong> ISO-certified with multi-level quality checks ensuring 99.9% accuracy.</li>
              <li><strong>Superb Infrastructure:</strong> Powered by advanced tools and world-class workspaces.</li>
              <li><strong>Streamlined Process:</strong> Robust workflows that guarantee timely deliveries.</li>
              <li><strong>Advanced Technology:</strong> Proficient in the latest transcription software and tools.</li>
              <li><strong>Experienced Team:</strong> 26+ years of transcription expertise across specialties.</li>
              <li><strong>Data Security:</strong> HIPAA & GDPR-compliant with strict confidentiality standards.</li>
              <li><strong>Fast Turnaround:</strong> On-time delivery without compromising quality.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <p className="text-gray-700 mb-4">
              We have supported global healthcare clients with timely and accurate chiropractic transcription services. 
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Indianapolis Physicians:</strong> Processed 3,000+ physician encounters with quick and accurate transcription.</li>
              <li><strong>US-based Rehabilitation Provider:</strong> Delivered error-free transcription and migration to a new EMR system.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="text-gray-700 italic border-l-4 border-[#006A7C] pl-4">
              “Nimble Acuity has been a tremendous resource for our transcription needs. They are precise, efficient, and always attentive to our requirements. Highly recommended!”
              <br /> <span className="font-semibold">— MD, Medical Practice, USA</span>
            </blockquote>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Your Chiropractic Transcription to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With decades of experience and a reputation for accuracy and reliability, Nimble Acuity is your trusted partner for chiropractic transcription services. 
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to discuss your requirements and receive a tailored solution.
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

export default ChiropracticTranscription;
