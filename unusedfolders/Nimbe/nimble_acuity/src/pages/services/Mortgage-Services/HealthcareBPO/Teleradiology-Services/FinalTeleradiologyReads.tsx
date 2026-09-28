import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const FinalTeleradiologyReads: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Final Teleradiology Reads and Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              High-quality final teleradiology reads and reporting services starting at just{" "}
              <strong>$4.5/read</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for quick and reliable remote radiology interpretation services? 
              Do you need efficient, accurate reads of diagnostic studies and medical images via teleradiology? 
              You’re in the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a leading provider of final teleradiology reads and reporting 
              services worldwide. Our certified radiology specialists deliver accurate and timely reports 
              that help practices boost productivity, cut costs, and ensure superior patient care.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Final Teleradiology Reads and Reporting Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              We interpret diagnostic images across multiple modalities including MRI, X-ray, CT, PET, MSK, 
              mammograms, ultrasound, and other subspecialties.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>After Hours Reads</li>
              <li>Backup Reads</li>
              <li>Overreads</li>
              <li>Preliminary Reads</li>
              <li>Final Reads</li>
              <li>Second Opinion Reads</li>
              <li>Subspecialty Reads</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Reporting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Diagnostic test performed at hospital/diagnostic center.</li>
              <li>Images securely uploaded to PACS system.</li>
              <li>Radiologists access and review the images.</li>
              <li>Tier-1: Junior Radiologist interprets the image.</li>
              <li>Tier-2: Senior Radiologist verifies interpretation.</li>
              <li>Tier-3: Board-certified Radiologist finalizes and signs off.</li>
              <li>Final report submitted to PACS.</li>
              <li>Report delivered to physician/hospital.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>eRAD PACS System for Teleradiology</li>
              <li>Radiology Information System</li>
              <li>Nighthawk Teleradiology Services</li>
              <li>3D Image Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Final Reads & Reporting to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, strict compliance with HIPAA.</li>
              <li><strong>Excellent Infrastructure:</strong> World-class offices with 200% power backup and reliable connectivity.</li>
              <li><strong>Affordable Services:</strong> Cost-effective while maintaining high quality.</li>
              <li><strong>Compliance & Quality:</strong> HIPAA-compliant and ISO 9001:2015 certified.</li>
              <li><strong>Experienced Team:</strong> Skilled radiologists with global project experience.</li>
              <li><strong>Scalable Solutions:</strong> Flexible to match your reporting volume needs.</li>
              <li><strong>Quick Turnaround:</strong> Multiple global delivery centers ensure fast reporting.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Quick Teleradiology Support:</strong> Delivered urgent reads for a leading medical 
                imaging company with rapid turnaround.
              </li>
              <li>
                <strong>Research & DME Billing Services:</strong> Helped a client streamline DME billing and 
                research services, supporting insurance negotiations for EndoPAT coverage.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Final Reads & Reporting to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With certified radiologists and years of experience,{" "}
              <strong>Nimble Acuity</strong> is trusted by healthcare providers worldwide 
              for final teleradiology reads and reporting services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for accurate, cost-effective, and professional reporting services? 
              Let’s connect today.
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
export default FinalTeleradiologyReads;
