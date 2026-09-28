import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CardiologyTranscription: React.FC = () => {
  return (
    <>
      <HealthcareHeader />
      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-6">
              Cardiology Transcription Services
            </h2>
            <p className="text-lg text-gray-700">
              Struggling with transcription errors and undertrained staff? Cardiology transcription demands accuracy and speed—mistakes can be costly. <strong>Nimble Acuity</strong> provides reliable, error-free, and cost-effective cardiology transcription services tailored to your practice’s needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-lg text-gray-600">
              From consultation notes to operative reports, our expert team ensures accurate documentation of all cardiology procedures. With deep knowledge of medical terminologies and advanced transcription tools, we help physicians focus on patients while we take care of documentation.
            </p>
            <p className="text-lg text-gray-600">
              By outsourcing to <strong>Nimble Acuity</strong>, you save time, reduce costs, and gain access to skilled transcriptionists who deliver within the shortest turnaround times.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Cardiology Transcription Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600 columns-1 sm:columns-2 md:columns-3">
              <li>Cardiac Catheterization</li>
              <li>CABG</li>
              <li>Stress Test Reports</li>
              <li>Cardioversion Reports</li>
              <li>Stress Thallium Tests</li>
              <li>Balloon Angioplasty</li>
              <li>2-D Echocardiogram</li>
              <li>Echocardiogram</li>
              <li>Stents</li>
              <li>Doppler Assessment</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Cardiology Transcription Process
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-lg text-gray-600">
              <li>
                <strong>Secure Exchange of Files:</strong> All documents are transferred via encrypted email or SFTP for maximum data protection.
              </li>
              <li>
                <strong>Accurate Transcription:</strong> Experienced transcriptionists carefully transcribe dictations and reports with precision.
              </li>
              <li>
                <strong>Quality Check:</strong> Multi-tiered review ensures compliance and near-perfect accuracy.
              </li>
              <li>
                <strong>Fast Delivery:</strong> Transcribed files are securely delivered within 12–24 hours.
              </li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose <span className="text-[#006A7C]">Nimble Acuity</span>?
            </h3>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-600">
              <li><strong>Skilled Team:</strong> Certified Medical Transcriptionists (CMTs) with 8+ years of cardiology expertise.</li>
              <li><strong>Fast Turnaround:</strong> Delivery in 12–24 hours without compromising accuracy.</li>
              <li><strong>High Accountability:</strong> Multi-level quality checks ensure 98%+ accuracy.</li>
              <li><strong>Flexible File Formats:</strong> Supports WAV, MP3, WMA, AIF, DCT, and more.</li>
              <li><strong>Cost Savings:</strong> Save 30–40% compared to in-house transcription teams.</li>
              <li><strong>Secure Practices:</strong> HIPAA-compliant processes and restricted data access.</li>
              <li><strong>Free Trial:</strong> Test our services before committing to a full project.</li>
              <li><strong>24/7 Availability:</strong> Around-the-clock support across all time zones.</li>
            </ul>
          </div>

          {/* Success Story */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Client Success Story
            </h3>
            <p className="text-lg text-gray-600">
              A leading group of radiologists in Australia partnered with <strong>Nimble Acuity</strong> to automate the transcription of STAT reports. Our team successfully streamlined their workflow with fast, accurate automation services, saving them significant time and resources.
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Testimonials</h3>
            <p className="text-lg text-gray-600 italic">
              “I am very impressed with the ease and speed of the dictation service. The team worked to my schedule and delivered high-quality reports. Bernard was always professional and responsive. I highly recommend <strong>Nimble Acuity</strong> for transcription services.”
            </p>
            <p className="text-lg text-gray-600 mt-2">
              – Dr. Alan Lim, Independent Doctor
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Outsource Cardiology Transcription to <span className="text-[#006A7C]">Nimble Acuity</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              With 26+ years of experience, <strong>Nimble Acuity</strong> is trusted by healthcare providers worldwide for accurate, secure, and cost-effective cardiology transcription services. Let us streamline your workflow while you focus on patient care.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default CardiologyTranscription;
