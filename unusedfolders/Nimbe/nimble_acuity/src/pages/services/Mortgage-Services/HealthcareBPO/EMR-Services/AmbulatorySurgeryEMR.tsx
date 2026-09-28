import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const AmbulatorySurgeryEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Ambulatory Surgery EMR
            </h2>
            <p className="text-lg text-gray-600">
              Streamline ASC back-office tasks such as clinical workflows, billing, and document management with <strong>Ambulatory Surgery EMR</strong> solutions from <strong>nimble acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Outsource <strong>Ambulatory Surgery EMR services</strong> to <strong>nimble acuity</strong> and cut time spent on documentation while focusing on patient care. Our solutions enable phased implementation, customization, and feature integration across your centers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With 26+ years of experience, we have supported day surgery centers and independent practitioners with efficient EMR solutions to manage clinical operations seamlessly.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Ambulatory Surgery EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Document Management:</strong> Integrate operative and clinical data into the EMR, allowing physicians real-time access to patient and financial records.</li>
              <li><strong>Patient Tracking:</strong> Automate pre- and post-operative tracking, notifications, PACU bed reservations, and communication with patients.</li>
              <li><strong>Payroll Processing:</strong> Streamline admin staff payroll and reimbursement processes through smart EMR systems.</li>
              <li><strong>Medical Billing & Coding:</strong> Automated recommendations for procedures and diagnoses to ensure accurate billing.</li>
              <li><strong>Appointment Management:</strong> Efficiently schedule outpatient surgeries and reduce patient wait times.</li>
              <li><strong>Reports Generation:</strong> Consolidate and customize reports for analysis, insights, and performance tracking.</li>
              <li><strong>Charge Approval Management:</strong> Streamline validation and billing of charges with accurate care summaries.</li>
              <li><strong>Custom EMR Development:</strong> Build tailored ambulatory surgery EMR solutions with smart interfaces to meet all administrative needs.</li>
              <li><strong>Migration & Integration:</strong> Transition legacy systems or integrate new EHR tools with 24/7 support and minimal disruption.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Ambulatory Surgery EMR Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Gather and analyze client requirements.</li>
              <li>Plan development or migration of EMR systems.</li>
              <li>Initiate EMR development.</li>
              <li>Test EMR thoroughly.</li>
              <li>Deploy to live environment.</li>
              <li>Collect feedback.</li>
              <li>Provide ongoing support and maintenance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Ambulatory Surgery EMR Services to Nimble Acuity
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Service:</strong> Custom EMR solutions tailored to your requirements and budget.</li>
              <li><strong>HIPAA Compliance:</strong> Secure handling of protected health information with trained staff.</li>
              <li><strong>100% Information Security:</strong> ISO/IEC 27001:2022 certified to safeguard healthcare records.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Advanced tools, VPNs, power backups, and secure servers.</li>
              <li><strong>Secure Data Sharing:</strong> Encrypted VPN/FTP transfer with access control.</li>
              <li><strong>Certified Experts:</strong> Skilled team including CPT, ICD-10 CM, NCCN, and EMR professionals.</li>
              <li><strong>Quick Turnaround:</strong> Reduce average delivery time by 30–40% without compromising quality.</li>
              <li><strong>Dedicated Project Manager:</strong> Single point of contact available 24/7 for updates and queries.</li>
              <li><strong>Scalable Solutions:</strong> Easily expand EMR capabilities as your practice grows.</li>
              <li><strong>Round-the-Clock Availability:</strong> 24/7 support via phone, email, or online chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Ambulatory Surgery EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> for efficient, compliant, and customized <strong>Ambulatory Surgery EMR services</strong> to improve workflows and patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch</strong> today to implement a smart and reliable ambulatory surgery EMR solution.
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

export default AmbulatorySurgeryEMR;
