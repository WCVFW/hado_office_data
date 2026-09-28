import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const AfterTeleradiologyServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Afterhours Teleradiology Services
            </h2>
            <p className="text-lg text-gray-600">
              Integrate our afterhours teleradiology and provide seamless radiology services around the clock. 
              Contact us now and optimize patient outcomes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Healthcare providers often struggle to maintain consistent radiology services during afterhours, 
              leading to increased patient wait times, overburdened emergency rooms, and inconsistent report quality. 
              These challenges can make services unreliable and costly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our afterhours teleradiology services connect you to professional radiologists who deliver 
              accurate interpretations around the clock. With faster turnaround times, subspecialty access, 
              and efficient resource management, we ensure uninterrupted patient care, improved diagnostic 
              accuracy, and enhanced patient satisfaction.
            </p>
          </div>

          {/* Customer Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Customer Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Caribbean Radiologists Got STAT Reports Automation:</strong> 
                We helped a group of leading radiologists automate STAT reporting, enabling them to process 200+ 
                STAT reports a month efficiently.
              </li>
              <li>
                <strong>ICD-10 Implementation in Florida:</strong> 
                A mid-sized medical billing company with over 40 specialties lacked medical coding expertise. 
                We successfully implemented ICD-10 standards, ensuring compliance and operational efficiency.
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Range of Afterhours Teleradiology Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Preliminary Afterhours Services:</strong> Rapid turnaround times, board-certified radiologists, certified reporting, compliance, and robust tools.
              </li>
              <li>
                <strong>Clinical Trials Afterhours Services:</strong> Imaging support, data integrity, auditing, quality assurance, and second opinions.
              </li>
              <li>
                <strong>Backlog & Overflow Reporting:</strong> Efficient backlog management and flexible overflow handling.
              </li>
            </ul>
          </div>

          {/* Other Specialty-Specific Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Specialty-Specific Services We Offer
            </h3>
            <ul className="list-disc list-inside text-gray-700 columns-1 sm:columns-2 space-y-2">
              <li>Dermatology</li>
              <li>Pathology</li>
              <li>Oncology</li>
              <li>Radiology</li>
              <li>Neurology</li>
              <li>Cardiology</li>
              <li>EMR</li>
              <li>ENT</li>
              <li>Ophthalmology</li>
              <li>Chiropractic</li>
              <li>Genetics</li>
              <li>Gastroenterology</li>
              <li>Urology</li>
              <li>Anesthesiology</li>
              <li>Internal Medicine</li>
              <li>Surgery Services</li>
            </ul>
          </div>

          {/* Image Modalities */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Afterhours Image Modalities We Offer
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li><strong>CT:</strong> Advanced multiplanar reconstructions for precise anatomical evaluations.</li>
              <li><strong>X-ray:</strong> High-resolution digital imaging for rapid diagnosis during critical hours.</li>
              <li><strong>MRI:</strong> High-field MRI for detailed soft tissue visualization.</li>
              <li><strong>PET:</strong> Oncological and neurological evaluations using advanced radiotracers.</li>
              <li><strong>Ultrasound:</strong> Real-time imaging for immediate diagnostic insights.</li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Afterhours Teleradiology Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Secure case intake and HIPAA-compliant DICOM upload.</li>
              <li>HL7 integration for automated order management.</li>
              <li>Radiologist allocation and priority-based triage.</li>
              <li>AI-powered pre-analysis for anomaly detection.</li>
              <li>Expert interpretation and peer review.</li>
              <li>Final report generation integrated with PACS.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Our 24/7 Teleradiology Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Subspecialty Access:</strong> Neuroradiology, musculoskeletal, and more.</li>
              <li><strong>Optimized TAT:</strong> Efficient workflows for rapid turnaround.</li>
              <li><strong>Load Balancing:</strong> Smart distribution of cases to reduce fatigue.</li>
              <li><strong>Multi-Time Zone Coverage:</strong> Global service delivery without interruptions.</li>
              <li><strong>Discrepancy Reporting:</strong> Peer-reviewed protocols for accuracy.</li>
              <li><strong>AI-Enhanced Prioritization:</strong> Clinical urgency-based case prioritization.</li>
            </ul>
          </div>

          {/* Additional Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Additional Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Teleradiology Services</li>
              <li>Revenue Cycle Management</li>
              <li>Medical Animation Services</li>
              <li>Telehealth Services</li>
              <li>Healthcare Claim Adjudication</li>
              <li>Medical Billing Services</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Offshore Afterhours Teleradiology with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              By outsourcing afterhours teleradiology services to <strong>Nimble Acuity</strong>, healthcare organizations 
              gain access to expert radiologists, advanced modalities, and round-the-clock reporting that 
              improves efficiency and patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to enhance your radiology operations and ensure uninterrupted services? Connect with us today.
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
export default AfterTeleradiologyServices;
