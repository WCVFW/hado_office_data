import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const RheumatologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Rheumatology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Stay focused on patient interactions while we handle <strong>Rheumatology EMR development and maintenance</strong>. 
              Streamline collections, databases, and backend processes with <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are your Rheumatology professionals stretched between managing patients and maintaining records? 
              Do inefficiencies in setting up payers, physicians, or databases slow you down? 
              <strong> Nimble Acuity’s Rheumatology EMR services</strong> help healthcare centers overcome these challenges 
              and eliminate paper-heavy processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 26 years of experience, we assist Rheumatology practices with specialized EMR services, 
              from implementing key features to training doctors on usage. 
              Our solutions enhance documentation, patient care planning, and clinical awareness, all while improving precision.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Rheumatology EMR Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              We provide tailored EMR solutions to meet the unique needs of Rheumatology practices, whether small or large. 
              Our offerings include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EMR Tool Selection:</strong> Guidance to choose the most suitable tool from a crowded market of options.</li>
              <li><strong>Tool Migration:</strong> Seamless migration from outdated EMR systems to modern platforms without workflow disruption.</li>
              <li><strong>EMR Integration:</strong> Unified interfaces for lab results, prescriptions, patient education, and care recommendations.</li>
              <li><strong>Custom Templates:</strong> Rheumatology-specific templates for consultations, procedures, and referrals.</li>
              <li><strong>Billing Services:</strong> End-to-end Rheumatology billing, collections, denial management, and payer relations.</li>
              <li><strong>Inventory Management:</strong> Centralized inventory tracking, logistics, barcoding, and usage monitoring.</li>
              <li><strong>Software Development:</strong> Custom EMR solutions with features like chart summaries, e-prescribing, and patient education tools.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Rheumatology EMR Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Assess current systems and identify practice-specific needs.</li>
              <li><strong>Wireframe Design:</strong> Share visual blueprints for feedback and refinements.</li>
              <li><strong>Development:</strong> Stage-wise execution of EMR features under expert supervision.</li>
              <li><strong>Testing:</strong> Continuous validation at every stage to ensure quality and reliability.</li>
              <li><strong>Deployment:</strong> Final product rollout after comprehensive testing.</li>
              <li><strong>Training & Feedback:</strong> Educating staff and offering ongoing support for smooth adoption.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Rheumatology EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified EMR Provider:</strong> ISO 9001:2015 accredited with proven regulatory compliance.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, HIPAA-compliant safeguards for sensitive data.</li>
              <li><strong>Quality Assurance:</strong> Rigorous controls to ensure accuracy, compliance, and optimized workflows.</li>
              <li><strong>Cost-Effective Models:</strong> Flexible pricing that suits practices of all sizes.</li>
              <li><strong>Advanced Infrastructure:</strong> Modern hardware, software, and security systems.</li>
              <li><strong>Fast Turnaround:</strong> Agile processes to deliver on time, even with scaling requirements.</li>
              <li><strong>Scalable Solutions:</strong> Flexible to adapt as patient volume or practice needs change.</li>
              <li><strong>Dedicated Team:</strong> Licensed professionals with single-point-of-contact project management.</li>
              <li><strong>24/7 Global Support:</strong> Continuous coverage through multiple delivery centers worldwide.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Rheumatology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> has over 20 years of experience supporting Rheumatology practices with tailored EMR solutions. 
              Our services reduce errors, improve communication, and enhance patient outcomes while keeping costs under control.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to streamline your Rheumatology EMR processes and improve practice efficiency.
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

export default RheumatologyEMR;
