import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PETCTReporting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              PET/CT Reporting Services
            </h2>
            <p className="text-lg text-gray-600">
              Get high-quality PET/CT reports with fast turnaround—without the need for a full-time team. 
              Outsource to <strong>Nimble Acuity</strong> and access accurate reporting services starting at just $4.5/read.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              PET/CT combines the strengths of PET and CT imaging to provide unmatched accuracy in diagnosing, localizing, and monitoring severe health conditions such as cancer, heart disease, and neurological disorders. 
              For healthcare providers facing challenges in budget, staffing, or infrastructure, outsourcing to <strong>Nimble Acuity</strong> ensures expert-level PET/CT reporting without compromise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over a decade of experience, <strong>Nimble Acuity</strong> delivers cost-efficient, reliable, and professional PET/CT reporting services to clients worldwide.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              PET/CT Reporting Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Oncology PET/CT:</strong> Detailed cancer status reports for accurate treatment planning and improved patient outcomes.
              </li>
              <li>
                <strong>Cardiac PET/CT:</strong> Interpretations by nuclear cardiology experts covering viability, revascularization evaluation, and vessel localization.
              </li>
              <li>
                <strong>Neuro PET/CT:</strong> Advanced dementia and cognitive impairment analysis, including Amyvid and FDG neuro studies with 90%+ accuracy.
              </li>
              <li>
                <strong>MRI and CT Reporting:</strong> Expertise in body imaging, neuroradiology, and musculoskeletal studies by trained radiologists.
              </li>
              <li>
                <strong>Ultrasound/X-Ray Reporting:</strong> Reliable ancillary imaging reports covering ultrasound and X-ray modalities.
              </li>
              <li>
                <strong>Support Services:</strong> Administrative, IT, RIS/PACS, and client support to ensure end-to-end service efficiency.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our PET/CT Reporting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Diagnosis performed at client’s healthcare facility.</li>
              <li>Secure collection of PET/CT images from the client.</li>
              <li>Expert radiologists assess and interpret the scans.</li>
              <li>Three-tier expert review: junior, senior, and board-certified radiologists.</li>
              <li>Multi-level quality assurance for accuracy and reliability.</li>
              <li>Final report delivered via secure FTP or encrypted email.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Radiology Information System</li>
              <li>Medical Imaging Services</li>
              <li>Nighthawk Teleradiology Services</li>
              <li>3D Image Processing Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource PET/CT Reporting to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>High Data Security:</strong> ISO-certified systems safeguard sensitive data.</li>
              <li><strong>Board-Certified Radiologists:</strong> Access to experienced, certified professionals worldwide.</li>
              <li><strong>Flexible Pricing:</strong> Cost-efficient, customizable options for all provider sizes.</li>
              <li><strong>Performance Reviews:</strong> Transparent evaluations of radiologists with client feedback.</li>
              <li><strong>HIPAA Compliant:</strong> Full adherence to patient privacy and compliance standards.</li>
              <li><strong>Accredited Provider:</strong> ISO 9001:2015 certified for international quality assurance.</li>
              <li><strong>Scalable Solutions:</strong> Easily adaptable to fluctuating reporting volumes.</li>
              <li><strong>Robust Infrastructure:</strong> World-class IT, security, and reporting tools.</li>
              <li><strong>Fast Turnaround:</strong> Multiple global delivery centers for quick report delivery.</li>
              <li><strong>Dedicated Support:</strong> One-to-one client manager for smooth communication.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Teleradiology Backlog Cleared:</strong> Nimble Acuity resolved a client’s backlog using PACS software within 24 hours.
              </li>
              <li>
                <strong>Full-Service Billing Support:</strong> Helped a client streamline AR performance and reduce AR days with Medisoft integration.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource PET/CT Reporting to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With one of the largest teams of board-certified radiologists and more than 20 years of experience, <strong>Nimble Acuity</strong> is a trusted partner for hospitals, clinics, and imaging centers worldwide. 
              Our PET/CT reporting services reduce costs by up to 40% while ensuring timely, accurate results.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Looking for high-standard PET/CT reporting with quick turnaround? Connect with us today.
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
export default PETCTReporting;
