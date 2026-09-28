import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const MedicalReportsTranscription: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Reports Transcription Services
            </h2>
            <p className="text-lg text-gray-600">
              Are you struggling to find skilled professionals for accurate medical reports transcription? 
              Or do high service costs keep you from outsourcing? 
              <strong> Nimble Acuity </strong> provides a one-stop, cost-effective solution that allows your staff 
              to focus on quality patient care while we handle your transcription needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With nearly two decades of experience, <strong>Nimble Acuity</strong> has been a trusted partner for 
              medical report transcription worldwide. Our HIPAA-compliant, customizable solutions ensure accurate 
              and usable reports that support patient care, claims filing, and record-keeping — in the format and 
              language of your choice.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medical Reports Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Operative Notes Transcription:</strong> Accurate transcription of physician operative notes 
                to ensure reliable records for patient care.
              </li>
              <li>
                <strong>Discharge Summary Transcription:</strong> Detailed summaries including treatments, tests, and 
                follow-up advice to support post-discharge patient care.
              </li>
              <li>
                <strong>SOAP Note Transcription:</strong> Efficient transcription of SOAP notes for streamlined 
                assessment and treatment planning.
              </li>
              <li>
                <strong>Consultation Report Transcription:</strong> Clean, accurate consultation reports digitized 
                for billing, insurance, and record-keeping.
              </li>
            </ul>
          </div>

          {/* Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Dictation Capture:</strong> Receive audio files via secure devices or uploads.</li>
              <li><strong>Transmission:</strong> Transfer files safely using VPN or FTP.</li>
              <li><strong>Transcription:</strong> HIPAA-compliant transcription with proofing for accuracy.</li>
              <li><strong>Workflow Management:</strong> Reports formatted for easy record-keeping.</li>
              <li><strong>Delivery:</strong> Transcribed reports uploaded to EMR/EHR in chosen format and language.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Experts:</strong> ISO 9001:2015 certified, HIPAA-compliant transcriptionists with decades of experience.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, with strict NDAs and secure FTP/VPN transfers.</li>
              <li><strong>High Accuracy:</strong> Multi-level quality checks ensure error-free reports.</li>
              <li><strong>Quick Turnaround:</strong> Fast processing so billing and claims aren’t delayed.</li>
              <li><strong>Scalable Services:</strong> Easily ramp services up or down based on demand.</li>
              <li><strong>Affordable Pricing:</strong> Flexible packages tailored to your budget.</li>
              <li><strong>Dedicated Support:</strong> Single point of contact with 24/7 availability.</li>
              <li><strong>Experienced Team:</strong> 200+ trained transcriptionists and proofing experts with AHDI/AAMT standards expertise.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced technology, secure facilities, and reliable systems.</li>
              <li><strong>Global Availability:</strong> Round-the-clock support via email, phone, and chat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Processed Over 3000 Encounters for Rehabilitation Care:</strong> 
                Helped a group of Indianapolis physicians streamline EMR records in client-specified formats.
              </p>
              <p>
                <strong>Transcription Automation for Australian Radiologists:</strong> 
                Delivered 2000 STAT transcription tasks with quick turnaround using specialized software.
              </p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">Testimonials</h3>
            <blockquote className="italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "Hi, I am pleased with the support. The response time and communication are fine. 
              Knowledge about billing and claims is excellent. All the best!"
            </blockquote>
            <p className="mt-2 text-gray-600 font-medium">
              — Founder, Healthcare Consulting Company, California
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Reports Transcription to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Trusted by over 250 healthcare facilities worldwide, <strong>Nimble Acuity</strong> delivers accurate, 
              secure, and cost-effective transcription services across specialties. From radiology to neurology 
              and beyond, we are equipped to handle diverse transcription needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for a reliable partner to streamline your transcription workflow? Let’s talk today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default MedicalReportsTranscription;
