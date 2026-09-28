import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PreliminaryTeleradiology: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Preliminary Teleradiology Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get high-quality, accurate preliminary teleradiology reports in under 20 minutes from expert radiologists. With competitive pricing and global coverage, <strong>Nimble Acuity</strong> is a trusted partner for hospitals and diagnostic centers seeking reliable reporting solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The growing demand for qualified radiologists and the rising cost of advanced technology have accelerated the need to outsource <strong>preliminary teleradiology reporting services</strong>. <strong>Nimble Acuity</strong> has pioneered this transition, offering fast, accurate, and secure solutions — including specialized <strong>nighthawk reporting</strong> — to ensure our clients receive timely and high-quality reports.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Preliminary Teleradiology Reporting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Interpretation & reporting for MRI, CT, X-ray, USG, mammography</li>
              <li>Nighthawk & 24/7 emergency coverage</li>
              <li>Report auditing & discrepancy checks</li>
              <li>Virtual locum support for vacation/holiday coverage</li>
              <li>Subspecialty radiologists for complex cases</li>
              <li>Free report quality check & second opinions</li>
              <li>PACS/RIS software & IT support</li>
              <li>Emergency on-phone consultation</li>
            </ul>
          </div>

          {/* Reporting Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Preliminary Teleradiology Reporting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Acquiring Images:</strong> Using DICOM-compliant equipment & PACS for fast transfers.</li>
              <li><strong>Analysis & Interpretation:</strong> Advanced software with 3D reconstruction & measurements.</li>
              <li><strong>Senior Review:</strong> Quality control by experienced radiologists.</li>
              <li><strong>Secure Transfer:</strong> Reports delivered safely in your preferred format.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Radiology Information System</li>
              <li>Medical Imaging Services</li>
              <li>Nighthawk Teleradiology Services</li>
              <li>3D Image Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Preliminary Teleradiology?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Save on hiring in-house radiologists.</li>
              <li><strong>Fast Turnaround:</strong> Preliminary reports delivered in 20 minutes or less.</li>
              <li><strong>Expert Radiologists:</strong> Subspecialty experts with global experience.</li>
              <li><strong>Accuracy Guaranteed:</strong> Reports reviewed and quality-checked.</li>
              <li><strong>Round-the-Clock Services:</strong> 24/7 availability across time zones.</li>
              <li><strong>On-Demand Coverage:</strong> Vacation, emergency, and overflow support.</li>
              <li><strong>Secure & Compliant:</strong> HIPAA-compliant processes with robust IT infrastructure.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Backlog Cleared in 24 Hours:</strong> Helped a medical imaging firm resolve report delays using PACS-enabled workflow.</li>
              <li><strong>Improved Billing Performance:</strong> Provided full-service billing support with Medisoft software, reducing AR days significantly.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="italic text-gray-700 border-l-4 border-[#006A7C] pl-4">
              "We are very pleased with the work and attention to detail provided under our services agreement with Nimble Acuity. We continue to look for ways to enhance this relationship. Thank you again for all that you do."
            </blockquote>
            <p className="mt-2 text-gray-600 text-sm">
              – MD, Billing Service Company for Surgical Providers, Georgia, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Preliminary Teleradiology Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>26+ years of experience</strong>, <strong>Nimble Acuity</strong> is an ISO 9001:2015 certified company delivering fast, accurate, and patient-focused teleradiology services worldwide. Our expert radiologists ensure quicker, error-free reports backed by 24/7/365 global support.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to experience faster, more accurate teleradiology reporting? Contact us today to discuss your needs.
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

export default PreliminaryTeleradiology;
