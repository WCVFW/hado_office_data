import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const GastroenterologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Gastroenterology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline clinical processes, manage outpatient appointments, and consolidate patient data efficiently. Outsource your gastroenterology EMR services to <strong>Nimble Acuity</strong> for compliant, cost-effective, and reliable support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for customized gastroenterology EMR solutions to maintain electronic medical records, practice management files, and other healthcare-related data securely? At <strong>Nimble Acuity</strong>, we optimize your current EMR, integrate systems, or develop custom gastroenterology EMR software to improve efficiency and patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Gastroenterology EMR Services We Provide
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Workflow Management:</strong> Automated ICD-10/CPT code generation, track diagnostic orders, reuse data, and integrate voice-to-text for faster record keeping.
              </li>
              <li>
                <strong>Inventory Management:</strong> Efficiently monitor medication stock, order details, expiration dates, and vendor logistics.
              </li>
              <li>
                <strong>EMR Software Development:</strong> Build custom gastroenterology EMR systems from scratch with our dedicated development and testing team.
              </li>
              <li>
                <strong>Tool Migration, Integration & Customization:</strong> Migrate legacy data, integrate patient information, customize notes, and optimize the physical exam and findings templates.
              </li>
              <li>
                <strong>Billing Optimization:</strong> Validate codes and diagnoses, automate ICD-10 and other billing recommendations for accuracy.
              </li>
              <li>
                <strong>Tool Selection Support:</strong> Choose the best EMR tools and systems tailored for your gastroenterology practice.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Gastroenterology EMR Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Gather requirements and define your gastroenterology EMR needs.</li>
              <li>Plan the development, integration, or customization process.</li>
              <li>Develop or configure the EMR software.</li>
              <li>Test the EMR system for accuracy and performance.</li>
              <li>Deploy the EMR solution to live environment.</li>
              <li>Collect client feedback for continuous improvement.</li>
              <li>Provide ongoing support and maintenance.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Gastroenterology EMR Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 certified with robust security protocols.</li>
              <li><strong>HIPAA Compliant:</strong> Protects patient health information according to regulations.</li>
              <li><strong>Data Confidentiality:</strong> Secure handling of all sensitive data with strict access control.</li>
              <li><strong>Cost-Effective:</strong> Reduce administrative costs by outsourcing EMR tasks.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced systems and tools to deliver EMR services at international standards.</li>
              <li><strong>End-to-End Support:</strong> ISO 9001:2015 certified processes to optimize gastroenterology workflows.</li>
              <li><strong>Quality & Compliance Assurance:</strong> Maintain high standards while freeing clinicians to focus on patient care.</li>
              <li><strong>Secure Data Sharing:</strong> Encrypted VPN and FTP platforms for safe data transfer.</li>
              <li><strong>Certified Team:</strong> Experienced specialists well-versed in ICD-10, HIPAA, Medicare Part D, ASCO, P4P, NCCN, and more.</li>
              <li><strong>Scalable Services:</strong> Quickly adjust resources based on your practice requirements.</li>
              <li><strong>24/7 Availability:</strong> Global delivery centers for continuous support and service.</li>
              <li><strong>Short Turnaround:</strong> Rapid deployment using modern tools and certified professionals.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Rehabilitation Encounters:</strong> Processed 3,000 physician encounters for a group of doctors in Indianapolis with full accuracy and compliance.</li>
              <li><strong>Automated Transcriptions:</strong> Delivered 2,000 STAT transcripts for Australian radiologists with fast turnaround and high-quality benchmarks.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Gastroenterology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>Nimble Acuity</strong>, streamline your gastroenterology practice, improve compliance, and enhance patient care with our expert EMR solutions. We deliver fast, reliable, and high-quality gastroenterology EMR services tailored to your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get a custom quote and optimize your gastroenterology practice workflow.
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

export default GastroenterologyEMR;
