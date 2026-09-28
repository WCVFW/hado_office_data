import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const RehabilitativeEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Rehabilitative Medicine EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline workflows and improve patient outcomes with our comprehensive <strong>Rehabilitative Medicine EMR services</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you spending too much time implementing <strong>rehabilitative medicine EMR</strong> instead of focusing on patient care? <strong>Nimble Acuity</strong> provides specialized EMR solutions for inpatient surgical rehab and outpatient physiatrists, ensuring efficient practice management and enhanced patient experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, we help practices select the right EMR tools, manage inventory, develop software, customize templates, migrate data, and more to streamline operations.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Rehabilitative Medicine EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li>Rehab Medicine Tool Selection</li>
              <li>Rehab Medicine EMR Integration</li>
              <li>Rehab Medicine EMR Migration</li>
              <li>Customized EMR Templates</li>
              <li>Rehab Medicine Billing</li>
              <li>Rehab Medicine Inventory Management</li>
              <li>Rehab Medicine EMR Software Development</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Rehabilitation Medicine EMR Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Understanding Requirements:</strong> Analyze practice needs to avoid ambiguities and feasibility issues.</li>
              <li><strong>Wireframe Development:</strong> Design architecture and solution specifications.</li>
              <li><strong>EMR Development:</strong> Implement the system in phases with dedicated developers and project leads.</li>
              <li><strong>EMR Testing:</strong> Perform thorough testing to identify and fix bugs and glitches.</li>
              <li><strong>Deployment:</strong> Deploy the software and provide training for efficient use.</li>
              <li><strong>Reporting & Feedback:</strong> Collect feedback and enhance user-friendliness and functionality.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Rehabilitative Medicine EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> ISO 9001:2015 certified for quality and regulatory compliance.</li>
              <li><strong>Data Confidentiality:</strong> ISO/IEC 27001:2022 certified and HIPAA compliant for secure patient data.</li>
              <li><strong>Quality Guarantee:</strong> Metrics-driven approach to improve therapy effectiveness and patient satisfaction.</li>
              <li><strong>Cost-effective Services:</strong> Flexible pricing to meet diverse practice budgets.</li>
              <li><strong>Advanced Infrastructure:</strong> Up-to-date software and tools for optimal EMR performance.</li>
              <li><strong>Fast Turnaround:</strong> Efficient execution leveraging right resources and processes.</li>
              <li><strong>Scalable Services:</strong> Scale up or down to meet peak or off-season demands.</li>
              <li><strong>Certified Team & Single Point of Contact:</strong> Experienced medical professionals with a dedicated project manager.</li>
              <li><strong>High-quality Reporting:</strong> Automate reports, integrate devices, and track patient progress efficiently.</li>
              <li><strong>Round-the-clock Availability:</strong> 24/7 support across global delivery centers.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Rehabilitative Medicine EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> to enhance efficiency, accuracy, and patient outcomes with customized <strong>rehabilitative medicine EMR solutions</strong>.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to make your <strong>Rehab Medicine EMR Services</strong> highly productive and error-free.
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

export default RehabilitativeEMR;
