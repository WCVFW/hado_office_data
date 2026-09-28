import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const CardiologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cardiology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Achieve operational efficiency in your cardiology practice with world-class EMR management, workflow optimization, and practice management solutions from <strong>nimble acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are EMR systems a vital part of your medical processes? <strong>nimble acuity</strong> offers specialized <strong>Cardiology EMR services</strong> to streamline data entry, transcription, reporting, billing, and practice management—allowing cardiologists to focus more on patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services include end-to-end EMR activities such as OHIP & RAMQ billing, workflow configuration, device management, and seamless integration with your existing EMR tools.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Offshore Cardiology EMR Services We Provide
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Cardiology EMR Tool Selection:</strong> Expert guidance on selecting tools that simplify workflows and deliver high ROI.</li>
              <li><strong>Cardiology EMR Tool Migration:</strong> Seamless transition from legacy or paper-based systems with minimal disruption.</li>
              <li><strong>Cardiology EMR Integration:</strong> Integrate EMR with lab reports, ECHO, ECG, MRI, CT scanners, and HL7/HRM systems.</li>
              <li><strong>Forms and Templates Customization:</strong> Custom forms for cardiology-specific procedures like hypertension, pacemaker, cardiac exams, and SOAP notes.</li>
              <li><strong>Cardiology EMR Billing:</strong> Accurate OHIP billing, fee multipliers, and customized group codes for efficient revenue management.</li>
              <li><strong>Cardiology EMR Inventory Management:</strong> Track medications, vaccines, and DME across locations with real-time alerts and reporting.</li>
              <li><strong>Cardiology EMR Software Development:</strong> Build fully customized EMR solutions tailored to your practice and integrate old systems smoothly.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cardiology EMR Solutions Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Requirement Discovery: Gather your immediate and long-term practice needs.</li>
              <li>EMR Planning and Design: Plan cost-effective, efficient workflows.</li>
              <li>Development of EHR/EMR: Implement the approved technology solution.</li>
              <li>Testing: Ensure performance, reliability, and accuracy of all modules.</li>
              <li>Reporting and Feedback: Share reports and incorporate feedback for continuous improvement.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Cardiology EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Cardiology EMR Company:</strong> ISO 9001:2015 accredited services for seamless record sharing across clinics and hospitals.</li>
              <li><strong>Secure Data Management:</strong> ISO/IEC 27001:2022 compliant handling of confidential medical data.</li>
              <li><strong>Quality Assurance:</strong> Continuous monitoring to ensure compliance with medical standards.</li>
              <li><strong>Fast Turnaround Time:</strong> Systematic processes ensure timely and reliable EMR delivery.</li>
              <li><strong>Scalable Service:</strong> Customizable EMR services to meet variable practice requirements.</li>
              <li><strong>Cost Reduction:</strong> Reduce EMR management costs by 40–50% through outsourcing.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated manager overseeing all EMR activities.</li>
              <li><strong>Experienced and Certified Team:</strong> Licensed professionals trained on HIPAA, Medicare Part D, and EMR tools.</li>
              <li><strong>Latest Infrastructure:</strong> Advanced software, hardware, and secure delivery systems.</li>
              <li><strong>Secure Data Sharing:</strong> Encrypted transfers via VPN/SFTP under NDA.</li>
              <li><strong>24/7 Availability:</strong> Global support centers ensure round-the-clock service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Cardiology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for compliant, efficient, and customized <strong>Cardiology EMR services</strong> designed to improve patient care and operational efficiency.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch</strong> today for tailored, cost-effective, and reliable cardiology EMR solutions.
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

export default CardiologyEMR;
