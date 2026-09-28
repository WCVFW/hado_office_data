import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const InfectiousDiseaseEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Infectious Disease EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Efficient EMR solutions for infectious disease practices—streamlined workflows, secure data, and
              back-office support starting at just $1280/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing infectious disease records requires accuracy, speed, and compliance. Instead of spending hours
              on data entry and manual workflows, clinics can leverage expert EMR outsourcing to save time while
              improving patient outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With <strong>20+ years of experience</strong>, <strong>Nimble Acuity</strong> has been a trusted
              provider of infectious disease EMR services for over 300 global clients. Our HIPAA-compliant experts,
              advanced tools, and secure infrastructure ensure precise, efficient, and reliable solutions tailored to
              your practice.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Comprehensive EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Workflow Management:</strong> Automated antibiotic alerts, immunotherapy recalls, disease
                tracking, quality measurement reports, and streamlined charting.
              </li>
              <li>
                <strong>Inventory Management:</strong> Real-time insights on medication availability, vendor
                communication, and logistics control for improved efficiency.
              </li>
              <li>
                <strong>Custom EMR Development:</strong> Build tailored EMR solutions from scratch or enhance your
                existing system with new modules and features.
              </li>
              <li>
                <strong>Billing & Coding Support:</strong> ICD-10 recommendations, validation of diagnosis/procedure
                codes, and full-scale billing integration for timely reimbursements.
              </li>
              <li>
                <strong>Document & Image Management:</strong> Upload, organize, and retrieve diagnostic reports,
                scanned records, and images with secure multi-scan and fax integration.
              </li>
              <li>
                <strong>Tool Migration & Integration:</strong> Migrate old records, integrate patient data, customize
                workflows, and enhance decision-making with annotated insights.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EMR Implementation Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Gather practice requirements and define workflows.</li>
              <li>Plan and design the EMR solution.</li>
              <li>Develop and customize the EMR system.</li>
              <li>Test for accuracy and compliance.</li>
              <li>Deploy in real-time environments.</li>
              <li>Collect feedback and optimize.</li>
              <li>Provide 24/7 support & maintenance.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Claims Processing Software</li>
              <li>EDI Integration Services</li>
              <li>Healthcare Back-office Support</li>
              <li>Health Information Technology</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Service:</strong> Flexible pricing tailored to your needs.</li>
              <li><strong>HIPAA Compliance:</strong> Full adherence to privacy and security regulations.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with robust safeguards.</li>
              <li><strong>Infrastructure:</strong> Redundant power, VPN-protected systems, and enterprise-grade servers.</li>
              <li><strong>Certified Experts:</strong> CPT, ICD-10, NCCN, and HCPCS Level II specialists.</li>
              <li><strong>Quick Turnaround:</strong> 30–40% faster reporting without compromising quality.</li>
              <li><strong>Dedicated Manager:</strong> Single point of contact available 24/7.</li>
              <li><strong>Scalable Solutions:</strong> Easily expand as your practice grows.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Australian Radiologists:</strong> Automated transcription for 2,000+ monthly reports,
                improving efficiency and accuracy.
              </li>
              <li>
                <strong>US Billing Company:</strong> Provided end-to-end billing support, reducing backlogs and
                accelerating claims processing.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Infectious Disease EMR?
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>20+ years of expertise</strong> and <strong>300+ global clients</strong>, Nimble Acuity is
              your trusted partner for accurate, efficient, and secure EMR solutions that optimize your practice’s
              workflow.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to simplify your infectious disease EMR operations? Let’s talk.
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

export default InfectiousDiseaseEMR;
