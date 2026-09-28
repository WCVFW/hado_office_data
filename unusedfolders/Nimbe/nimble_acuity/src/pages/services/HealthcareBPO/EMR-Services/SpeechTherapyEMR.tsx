import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const SpeechTherapyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Speech Therapy EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Save time and focus on patient care by outsourcing EMR operations to <strong>nimble acuity</strong>. Our expert <strong>Speech Therapy EMR services</strong> handle workflow management, clinical documentation, billing, and more.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Mundane administrative tasks can impact patient care. Outsource <strong>Speech Therapy EMR services</strong> to <strong>nimble acuity</strong> and let our professionals manage workflow, scheduling, documentation, and billing efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our experience with thousands of clients ensures that your EMR management is seamless, cost-effective, and compliant, allowing therapists to dedicate more time to their patients.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Speech Therapy EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Speech Therapy Management Solution:</strong> Manage smart ordering, workflow, clinical documentation, task alerts, and compliance with guidelines to improve care and productivity.</li>
              <li><strong>Speech Therapy Workflow Management:</strong> Optimize patient scheduling and information processing to avoid bottlenecks and enhance patient care.</li>
              <li><strong>Speech Therapy EMR Billing:</strong> Comprehensive billing services including fee schedules, charge capturing, claim management, denial handling, reporting, and analytics.</li>
              <li><strong>Speech Therapy EMR Tool Selection:</strong> Expert guidance on selecting the right EMR/EHR tools tailored to your practice requirements.</li>
              <li><strong>Speech Therapy EMR Software Development:</strong> Customized EMR solutions developed to meet your specific needs for efficient administrative operations.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Speech Therapy EMR Development Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Requirement Gathering: Collaborate with your team to understand your EMR needs and usage.</li>
              <li>Data Collection & Security: Transfer all information securely with protection against malware and theft.</li>
              <li>Planning and Design: Create solutions based on requirement analysis for optimal fit and efficiency.</li>
              <li>EMR Development: Implement the solution according to approved plans, ensuring compliance and functionality.</li>
              <li>Feedback and Reporting: Gather operational feedback and provide quality reports for continuous improvement.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Speech Therapy EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Highest Quality & Accuracy:</strong> QA team ensures strict quality checks on all deliverables.</li>
              <li><strong>Flexible Pricing:</strong> Pay only for the services you need, tailored to your requirements.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified for secure handling of all client data.</li>
              <li><strong>World Class Infrastructure:</strong> Latest technology and software for efficient and reliable service delivery.</li>
              <li><strong>Single Point of Contact:</strong> Maintain clear communication and avoid miscommunication throughout the project.</li>
              <li><strong>Dedicated Team:</strong> Specialized teams assigned to individual projects to ensure focus and accuracy.</li>
              <li><strong>Quick Turnaround Time:</strong> Timely delivery without compromising on quality.</li>
              <li><strong>24/7 Customer Support:</strong> Global support for clients across time zones.</li>
              <li><strong>Scalability:</strong> Expand services efficiently as your practice grows with expert support and technology.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Speech Therapy EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for expert, efficient, and compliant <strong>Speech Therapy EMR services</strong> to streamline operations and improve patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch</strong> today for customized, cost-effective, and reliable speech therapy EMR solutions.
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

export default SpeechTherapyEMR;
