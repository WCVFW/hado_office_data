import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EMRIntegration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EMR Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve overall patient care and enhance the user experience with <strong>nimble acuity’s EMR integration services</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you have an EMR system in place but still struggle to manage unstructured content such as faxes, images, and paper records? Or are you finding it difficult to access complete patient information across multiple systems? If so, our <strong>EMR integration services</strong> are the solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, we unify all your clinical content—including medical images—into one accessible system. As a trusted <strong>EMR integration provider</strong>, we ensure authorized users can access the right data from any EMR. This means clinicians spend less time on admin and more time focusing on patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EMR Integration Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26 years of experience, <strong>nimble acuity</strong> has deep expertise working with all major EMR systems. We add functionality, streamline workflows, and help you build a unified view of patient records. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Custom Integration:</strong> Tailored EMR integration solutions designed around your exact needs.</li>
              <li><strong>Unified Content Access:</strong> Combine clinical content, medical images, and records for quick retrieval.</li>
              <li><strong>Event Notifications:</strong> Automated alerts for lab results, radiology, admissions, discharges, transfers, and more.</li>
              <li><strong>Workflow Design:</strong> Streamlined clinical workflows for better efficiency and patient flow.</li>
              <li><strong>Integration Planning:</strong> Full solution design and phased implementation planning.</li>
              <li><strong>HL7 Integration:</strong> Standards-based HL7 EMR integration for interoperability.</li>
              <li><strong>Project Management:</strong> End-to-end management of integration projects to ensure success.</li>
              <li><strong>Technical Configuration:</strong> Complete setup and optimization of EMR integration systems.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource EMR Integration Services to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible models designed to maximize your ROI.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with strict compliance to global standards.</li>
              <li><strong>High-quality Services:</strong> ISO-certified and HIPAA-compliant for trusted results.</li>
              <li><strong>World-class Infrastructure:</strong> Robust facilities and advanced tools ensure service reliability.</li>
              <li><strong>Cutting-edge Technology:</strong> Proficiency in industry-standard EMR integration tools.</li>
              <li><strong>Experienced Team:</strong> 26+ years of expertise across diverse healthcare practices.</li>
              <li><strong>Quick Turnaround:</strong> On-time delivery with efficient processes and expert teams.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource EMR Integration Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> is a trusted partner for high-quality, scalable, and cost-effective <strong>EMR integration services</strong>. We help practices unify patient data, improve efficiency, and enhance patient care delivery.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to learn how we can optimize your EMR system and empower your clinical workflows.
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

export default EMRIntegration;
