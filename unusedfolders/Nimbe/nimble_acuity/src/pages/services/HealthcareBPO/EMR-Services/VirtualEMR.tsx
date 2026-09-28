import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const VirtualEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Virtual EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Get all your critical healthcare information in one place with our 
              <strong> professional virtual EMR services</strong>, starting at <strong>$1280 per FTE per month</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Electronic Medical Records (EMRs) have transformed healthcare by replacing traditional 
              paperwork with secure, accessible digital systems. With <strong>virtual EMR solutions</strong>, 
              you can store everything — from medical history and test results to diagnoses, coding, 
              and procedures — in a single system.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Virtual EMR services eliminate the risks of lost or damaged records and provide healthcare 
              professionals with real-time access to patient information. 
              <strong> Nimble Acuity</strong>, with 26+ years of expertise, ensures accuracy, security, 
              and seamless record-keeping for healthcare organizations worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Virtual EMR Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              Our services are designed to simplify healthcare workflows and improve patient care by 
              consolidating records into one efficient system. Key offerings include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>EMR Data Entry & Migration:</strong> Entering data from recordings, scanned files, or migrating records from legacy platforms.</li>
              <li><strong>Support, Maintenance & Upgrades:</strong> 24/7 support with timely updates to keep your EMR reliable and accurate.</li>
              <li><strong>Virtual EMR Software Development:</strong> Custom-built EMR solutions designed to streamline unique practice workflows.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Virtual EMR Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Analysis:</strong> Assess client needs, define scope, budget, and timelines.</li>
              <li><strong>Tool Design:</strong> Create tailored EMR blueprints based on requirements.</li>
              <li><strong>System Development:</strong> Implement features, migrate data securely, and integrate workflows.</li>
              <li><strong>Testing:</strong> Rigorously validate performance, security, and adaptability.</li>
              <li><strong>Reporting & Feedback:</strong> Deliver reports, incorporate client feedback, and finalize deployment.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Virtual EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Custom-Priced Solutions:</strong> Flexible pricing tailored to project size and client needs.</li>
              <li><strong>High-Quality Services:</strong> Strict quality controls ensure accuracy and compliance.</li>
              <li><strong>Data Security:</strong> Fully HIPAA-compliant with ISMS-certified safeguards.</li>
              <li><strong>ISO Certified Provider:</strong> Recognized for consistent quality and reliability.</li>
              <li><strong>Quick Turnaround:</strong> Experienced teams deliver on time without compromising quality.</li>
              <li><strong>Robust Infrastructure:</strong> Secure, modern systems with firewalls, VPN, and intrusion detection.</li>
              <li><strong>Dedicated Contact Point:</strong> Single project manager for streamlined communication.</li>
              <li><strong>24/7 Support:</strong> Global support team available across time zones via phone, email, or chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Virtual EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> has over 26 years of experience in delivering top-tier virtual EMR solutions 
              to healthcare practices worldwide. Our services improve efficiency, accuracy, and patient care while reducing costs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to simplify your EMR processes with expert support at affordable rates.
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

export default VirtualEMR;
