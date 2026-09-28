import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const GeneralSurgeryEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              General Surgery EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide high-quality general surgery EMR services to manage E&M coding, workflow, lab orders, and other key functions to simplify surgeons' calendars. Free your team from administrative burdens and let them focus on patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is manual operation of a general surgery EMR costing you productivity and revenue? At <strong>Nimble Acuity</strong>, we streamline your workflow using a template-driven EMR system, freeing surgeons from filing reports, noting drug interactions, addressing complaints, and other administrative tasks. Our EMR supports the latest <strong>ICD</strong> and <strong>CPT</strong> codes to ensure compliance and efficiency.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              General Surgery EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Automated Eligibility Checks:</strong> Automate surgical billing, claims, and statements at patient check-in to reduce downtime.</li>
              <li><strong>Interoperability:</strong> Seamlessly integrate ASC, hospital, and heterogeneous systems for efficient communication.</li>
              <li><strong>PACS Integration:</strong> Integrated picture archiving system enables smooth access to clinical data without leaving the EMR.</li>
              <li><strong>Vendor-Agnostic Mobile Solutions:</strong> Access clinical functions, log encounters, and optimize collaboration from mobile devices for agile workflow.</li>
            </ul>

            <h4 className="text-xl font-semibold text-[#006A7C] mt-6 mb-2">
              Key Features of Our General Surgery EMR
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>General Surgery Letters</li>
              <li>Preventative Medicine and Screening</li>
              <li>Patient Education</li>
              <li>Reporting</li>
              <li>General Surgery PE</li>
              <li>Medications</li>
              <li>General Surgery ROS</li>
              <li>Flow Sheets</li>
              <li>Customized Drug Interactions</li>
              <li>Radiology Order Custom Lists</li>
              <li>Histories</li>
              <li>General Surgery Custom Lists</li>
              <li>Procedure Order Custom Lists</li>
              <li>Lab Order Custom Lists</li>
              <li>General Surgery Assessment/Plan</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              General Surgery EMR Services Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Understand and gather your business requirements for a simple, manageable plan.</li>
              <li><strong>Strategy Selection:</strong> Define the optimal approach and execution plan based on your approval.</li>
              <li><strong>EMR Implementation:</strong> Deploy the template-driven EMR system tailored to your workflow.</li>
              <li><strong>Service Testing:</strong> Conduct near-real-time testing to ensure flawless performance.</li>
              <li><strong>Feedback and Reporting:</strong> Gather client feedback and optimize performance accordingly.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for General Surgery EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> ISO 9001:2015 accredited and HIPAA compliant provider.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with secure data handling and encryption.</li>
              <li><strong>High Accuracy & Quality:</strong> Rigorous quality control ensures precise results.</li>
              <li><strong>Quick Turnaround:</strong> Fast and efficient deployment without unnecessary delays.</li>
              <li><strong>Scalable Services:</strong> Flexible models to adjust as your practice grows.</li>
              <li><strong>Pocket-Friendly Pricing:</strong> Customizable pricing options for every budget.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for smooth communication.</li>
              <li><strong>Experienced Team:</strong> Skilled EMR specialists and project managers with 10+ years of domain expertise.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art software, hardware, and secure systems.</li>
              <li><strong>Secure Data Exchange:</strong> Encrypted SFTP and VPN platforms for maximum protection.</li>
              <li><strong>24/7 Availability:</strong> Support available via phone, email, or live chat anytime.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Rehabilitation Transcription:</strong> Helped a US client migrate to new EHR software with efficient rehab transcription and patient data sync.</li>
              <li><strong>STAT Reports Automation:</strong> Transcribed 200+ STAT reports for Caribbean radiologists in a short period, ensuring fast turnaround and satisfaction.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource General Surgery EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>Nimble Acuity</strong>, streamline your workflow, improve revenue cycle management, and ensure accurate, timely EMR documentation. Our experienced team helps you save time, reduce costs, and enhance patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to get a custom quote and optimize your general surgery practice.
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

export default GeneralSurgeryEMR;
