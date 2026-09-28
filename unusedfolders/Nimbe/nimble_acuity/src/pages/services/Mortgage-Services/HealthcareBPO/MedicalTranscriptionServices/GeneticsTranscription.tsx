import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const GeneticsTranscription: React.FC = () => {
  return (
    <>
      <HealthcareHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-6">
              Genetics Transcription Services
            </h2>
            <p className="text-lg text-gray-700">
              Get access to accurate, secure, and error-free genetics transcription services with <strong>Nimble Acuity</strong>. Digitize your genetic data efficiently while ensuring compliance and precision.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-lg text-gray-600">
              Are you looking to digitize all your genetic data quickly and securely? Do you need highly skilled transcriptionists who can provide reliable and error-free outputs? Outsourcing your genetics transcription to <strong>Nimble Acuity</strong> ensures peace of mind and efficiency.
            </p>
            <p className="text-lg text-gray-600">
              With decades of experience, advanced transcription tools, and a skilled team, we deliver customized solutions tailored to your lab, clinic, or research facility’s requirements.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Genetics Transcription Services We Offer
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our transcription services cover a wide range of genetic tests and processes, ensuring accuracy and compliance. Some of the key services we provide include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 columns-1 sm:columns-2 md:columns-3">
              <li>Chromosomal Test Transcription</li>
              <li>Molecular Test Transcription</li>
              <li>Newborn Screening Transcription</li>
              <li>Carrier Testing Transcription</li>
              <li>Pre-implantation Transcription</li>
              <li>Diagnostic Testing Transcription</li>
              <li>Biochemical Test Transcription</li>
              <li>Prenatal Testing Transcription</li>
              <li>Protein Truncation Transcription</li>
              <li>Direct DNA Studies Transcription</li>
              <li>Indirect DNA Studies Transcription</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Other Transcription Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>Neurology Transcription</li>
              <li>Radiology Transcription</li>
              <li>Oncology Transcription</li>
              <li>Dermatology Transcription</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose <span className="text-[#006A7C]">Nimble Acuity</span> for Genetics Transcription?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li><strong>Flexible Pricing:</strong> Affordable and customizable options to fit your budget.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with strict confidentiality protocols.</li>
              <li><strong>High Quality:</strong> ISO-certified processes ensuring accurate and error-free results.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced transcription tools and global delivery centers.</li>
              <li><strong>HIPAA Compliance:</strong> Full compliance with patient data protection regulations.</li>
              <li><strong>Dedicated SPOC:</strong> A single point of contact for seamless communication.</li>
              <li><strong>24/7 Support:</strong> Always available via phone, email, or chat.</li>
              <li><strong>Experienced Team:</strong> Skilled professionals with deep expertise in genetic data transcription.</li>
              <li><strong>Scalability:</strong> Scale up or down effortlessly based on your needs.</li>
              <li><strong>Quick Turnaround:</strong> Global delivery model ensures timely services.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li>
                <strong>Indianapolis Physicians:</strong> Processed over 3000 encounters with quick and accurate transcription.
              </li>
              <li>
                <strong>US-based Healthcare Provider:</strong> Delivered robust rehabilitation transcription and seamless EMR migration.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Outsource Genetics Transcription to <span className="text-[#006A7C]">Nimble Acuity</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              With proven expertise, advanced technology, and a global team of professionals, we provide accurate, secure, and cost-effective genetics transcription services to healthcare providers worldwide.
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

export default GeneticsTranscription;
