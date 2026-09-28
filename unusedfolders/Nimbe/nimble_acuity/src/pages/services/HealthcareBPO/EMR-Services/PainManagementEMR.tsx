import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PainManagementEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pain Management EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Our Pain Management EMR services can reduce the stress of implementing a reliable, fully compliant EMR system at best-in-class rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is it important for your healthcare practice to manage pain treatments with advanced EMR-based solutions? <strong>Nimble Acuity</strong> provides EMR solutions that help clinics and hospitals optimize compliance, claims billing, and staff productivity, while streamlining pain care to make it proactive and quality-focused.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We support pain management specialists in managing chronic pain, acute pain, cancer pain, or a combination of these conditions. Our experience includes customizing EMR solutions for evaluation, diagnosis, and treatment workflows tailored to your clinic’s needs.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pain Management EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EMR Tool Selection:</strong> We help choose the most suitable EMR tool for your practice, and customize it to meet your unique requirements.</li>
              <li><strong>EMR Platform Migration:</strong> Seamless migration from legacy systems with integration to pharmacies, imaging centers, health exchanges, and referral networks for minimal downtime.</li>
              <li><strong>EMR Templates:</strong> Specialty-specific templates for procedures like CESI, LESI, and Facet Block, including patient intake forms, appointment requests, and medication refill requests.</li>
              <li><strong>Billing Services:</strong> Automated billing codes for various pain treatments, insurance claims submission, claims management, denial follow-up, payment posting, and more.</li>
              <li><strong>Inventory Management:</strong> Optimize stock of pain medications, track multi-location inventory, issue alerts, ensure HIPAA compliance, and maintain availability during procedures.</li>
              <li><strong>EMR Application Development:</strong> Custom software solutions with advanced features such as templates, easy billing, claims management, dashboards, and integration with other systems tailored for pain management clinics.</li>
            </ul>
          </div>

          {/* EMR Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pain Management EMR Development Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li><strong>Understanding Requirements:</strong> Evaluate clinic needs to design a tailored EMR solution.</li>
              <li><strong>EMR Solution Blueprint:</strong> Prepare a roadmap considering existing challenges for smooth development.</li>
              <li><strong>Development of Customized EMR:</strong> Build the EMR application with intuitive interface and key features.</li>
              <li><strong>Testing:</strong> Test software performance and reliability in real-time conditions to ensure optimum functionality.</li>
              <li><strong>Reporting & Feedback:</strong> Gather user feedback post-implementation and address areas for improvement.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pain Management EMR Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>ISO Certified Provider:</strong> ISO 9001:2015 accredited services ensuring HIPAA-compliant, streamlined, and cost-effective EMR solutions.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified for safe handling of sensitive patient data with backup and recovery options.</li>
              <li><strong>Performance Audit:</strong> Regular audits and multi-tier quality checks to ensure service excellence.</li>
              <li><strong>Scalable & Cost-Effective Services:</strong> Flexible resource allocation and global delivery model for reduced operational costs.</li>
              <li><strong>Modern Infrastructure & Data Sharing:</strong> Latest hardware, software, security, and fast SFTP/VPN-based data transfer.</li>
              <li><strong>Guaranteed Turnaround:</strong> Quick and consistent project completion leveraging infrastructure, technology, and experienced staff.</li>
              <li><strong>Certified Team:</strong> Skilled professionals with knowledge of pain billing codes, compliance, and EMR tools, supported by ongoing training.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated manager to oversee all project requirements and ensure seamless communication.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance from our global locations for fast and reliable service.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pain Management EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Access customized, compliant, and efficient Pain Management EMR solutions to improve operational efficiency, patient care, and billing accuracy.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for high-quality, cost-effective pain management EMR services.
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

export default PainManagementEMR;
