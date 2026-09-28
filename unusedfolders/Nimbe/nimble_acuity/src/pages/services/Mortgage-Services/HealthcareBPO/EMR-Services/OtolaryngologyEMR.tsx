import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OtolaryngologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Otolaryngology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce the cost of maintaining health records by outsourcing <strong>Otolaryngology EMR services</strong> to <strong>nimble acuity</strong> and save on hiring full-time resources while improving efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Otolaryngology demands continuous patient analysis, tracking, and management—making systematic practice management and specialized EMR tools essential. At <strong>nimble acuity</strong>, we provide customized otolaryngology EMR solutions for departments, hospitals, ENT clinics, and independent practitioners to streamline workflows and reduce back-office burdens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services enable ENT physicians to access accurate, timely, and complete information to diagnose and treat patients more effectively. Even on a limited budget, we help you optimize operations while ensuring compliance and superior patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Otolaryngology EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Otolaryngology EMR Consulting:</strong> End-to-end consulting including workflow design, hardware setup, network security, database management, updates, and staff training for smooth EMR adoption.
              </li>
              <li>
                <strong>Tool Migration & Integration:</strong> Seamless migration to advanced EMR tools with minimal disruption, ensuring integration with hospitals, labs, pharmacies, insurance, and third parties.
              </li>
              <li>
                <strong>Forms & Templates Customization:</strong> Specialized templates for ENT fields—such as allergy, otology, pediatrics, head and neck, and sleep apnea—covering symptoms, treatment plans, patient education, and more.
              </li>
              <li>
                <strong>Medical Billing:</strong> Integrated billing solutions with ICD-9/ICD-10 and CPT coding, insurance checks, discrepancy alerts, and faster claim settlements.
              </li>
              <li>
                <strong>Custom Software Development:</strong> Tailor-made otolaryngology EMR software built with 26+ years of development expertise to meet unique practice needs.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Otolaryngology EMR Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Understand your practice workflow and EMR needs.</li>
              <li><strong>Workflow Optimization:</strong> Redesign EMR processes for enhanced efficiency.</li>
              <li><strong>Implementation:</strong> Deploy the EMR system with all required features.</li>
              <li><strong>Testing:</strong> Validate system performance under real-world scenarios.</li>
              <li><strong>Deployment & Feedback:</strong> Migrate existing data, collect feedback, and fine-tune for precision.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Otolaryngology EMR?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> HIPAA-compliant and ISO 9001:2015 certified services.</li>
              <li><strong>Secure Data Management:</strong> ISO/IEC 27001:2022 accredited with strong data protection protocols.</li>
              <li><strong>Quality Assurance:</strong> Dedicated QA team ensuring compliance with medical standards.</li>
              <li><strong>Scalable Solutions:</strong> Share data easily across clinics, labs, insurance, and providers.</li>
              <li><strong>Quick Turnaround:</strong> Agile processes for on-time project delivery.</li>
              <li><strong>Cost Savings:</strong> Clients reduce operational costs by 40–50%.</li>
              <li><strong>Dedicated Project Manager:</strong> Single point of contact for transparent project management.</li>
              <li><strong>Trained & Certified Team:</strong> Licensed professionals trained in EMR tools, HIPAA, and Medicare Part D.</li>
              <li><strong>Managed Services:</strong> Full-service practice management including IT, reporting, transcription, analytics, and more.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance across global time zones.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Urgent Care Billing:</strong> Using AdvancedMD, we performed AR follow-up with insurers, helping a US urgent care practice secure outstanding dues quickly.
              </li>
              <li>
                <strong>Medisoft Billing:</strong> Processed 1000+ claims and resolved BCBS challenges for a US client, completing the project in 3 weeks.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Otolaryngology EMR Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> provides ISO-certified, HIPAA-compliant, and highly customizable otolaryngology EMR solutions trusted by thousands of medical professionals for 26+ years. Our services reduce operational overheads, improve compliance, and enhance patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to see how our tailored EMR services can optimize your otolaryngology practice.
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

export default OtolaryngologyEMR;
