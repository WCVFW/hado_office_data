import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PhysicalMedicineEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Physical Medicine EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Elevate your Physical Medicine practice with end-to-end EMR management, practice management, billing, claims, and consent management from <strong>nimble acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Struggling with skilled resources for <strong>Physical Medicine EMR</strong>? Outsource your EMR services to <strong>nimble acuity</strong> and leverage our expertise in managing documentation, billing, and workflow processes efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide customized solutions aligned to your practice requirements, ensuring smooth implementation of <strong>Physical Medicine EMR</strong> with minimal disruption.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Physical Medicine EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Documentation Management:</strong> Align with rehab therapy workflows and create custom evaluation profiles with auto-scored outcome measures.</li>
              <li><strong>Instant Alerts:</strong> Track pending tasks and compliance requirements such as HIPAA with real-time notifications.</li>
              <li><strong>Real-time Data Access:</strong> Securely access and update patient data anytime, anywhere, from any web-enabled device.</li>
              <li><strong>Digital Conversion:</strong> Upload scanned patient records and diagnostic images securely using tools like eDoc.</li>
              <li><strong>Custom Solutions:</strong> Specialty-specific EMR support including speech-language pathology, occupational therapy, pediatrics, vestibular, and pelvic health.</li>
              <li><strong>High Data Security:</strong> Store and manage patient data in HIPAA-compliant data centers with secure logins and strict password policies.</li>
              <li><strong>Compliance Made Easy:</strong> Ensure adherence to HIPAA, therapy caps, functional limitation reporting, and accurate billing.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Physical Medicine EMR Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Packages:</strong> Affordable, custom pricing based on your practice needs.</li>
              <li><strong>High-quality Infrastructure:</strong> Best-in-class offices, tools, and network connectivity for consistent service delivery.</li>
              <li><strong>High-quality Services:</strong> ISO-certified delivery ensuring global standards for EMR services.</li>
              <li><strong>Standards & Coding Compliance:</strong> HIPAA, CPT, HL7, and ICD-10 compliance guaranteed.</li>
              <li><strong>Multiple Language Support:</strong> Expand globally with multilingual service capabilities.</li>
              <li><strong>Experienced Team:</strong> Skilled workforce trained for all aspects of Physical Medicine EMR.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager to coordinate all your queries and updates.</li>
              <li><strong>Scalable Services:</strong> Ramp up resources quickly to meet higher workload demands.</li>
              <li><strong>Information Security:</strong> ISO/IEC 27001:2022 certified to ensure complete data safety.</li>
              <li><strong>Fast Turnaround:</strong> Short delivery times leveraging global time-zone advantages.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance via phone or email for seamless operations.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Physical Medicine EMR Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for cost-effective, high-quality, and compliant <strong>Physical Medicine EMR services</strong> tailored to your practice needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch</strong> today to optimize your Physical Medicine practice with our expert EMR solutions.
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

export default PhysicalMedicineEMR;
