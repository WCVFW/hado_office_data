import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PhysicianCredentialing: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Physician Credentialing Services
            </h2>
            <p className="text-lg text-gray-600">
              Navigate bureaucratic hurdles and accelerate provider enrollment with Nimble Acuity’s
              expert physician credentialing services. We help your practice stay compliant, save
              time, and focus on patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Physician credentialing is complex and time-consuming, from verifying qualifications
              to tracking renewals and maintaining compliance. Nimble Acuity alleviates this burden
              with two decades of experience in managing credentialing processes efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our dedicated team handles data collection, verification, privileging, re-credentialing,
              and continuous monitoring, helping you mitigate risk, save resources, and ensure
              smooth provider enrollment.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Credentialing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Initial Credentialing:</strong> Verify each physician's qualifications, certifications, and licenses for compliance with your institution's requirements.</li>
              <li><strong>Re-credentialing:</strong> Ensure staff continually meets standards using advanced tracking technology and attention to detail.</li>
              <li><strong>Privileging:</strong> Authorize the specific scope of a healthcare practitioner's practice and patient care expertise.</li>
              <li><strong>Payer Enrollment:</strong> Seamlessly integrate physicians into insurance networks, improving reimbursement and revenue cycle.</li>
              <li><strong>Credentialing Verification:</strong> Cross-reference credentials against recognized sources for accuracy and compliance.</li>
              <li><strong>Maintenance of Provider Files:</strong> Keep records current, organized, and easily accessible using cloud-based technology.</li>
              <li><strong>Continuous Monitoring:</strong> Track credentials in real-time to promptly identify and resolve any potential issues.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Credentialing Process?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity delivers reliable physician credentialing solutions with advanced
              technology, experienced teams, and compliant processes to ensure smooth provider
              enrollment and uninterrupted patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to reduce administrative burden and accelerate your credentialing workflow.
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

export default PhysicianCredentialing;
