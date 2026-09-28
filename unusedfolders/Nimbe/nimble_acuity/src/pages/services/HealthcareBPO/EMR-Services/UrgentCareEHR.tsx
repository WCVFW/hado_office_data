import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const UrgentCareEHR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Urgent Care EHR Services
            </h2>
            <p className="text-lg text-gray-600">
              Manage your high-volume workflow across urgent care facilities with <strong>state-of-the-art EHR software</strong>. Our services simplify documentation, streamline workflow, and free your specialists from time-consuming administrative tasks.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>Nimble Acuity</strong>, we understand urgent care specialists are critical during emergencies like trauma, accidents, or respiratory conditions. Handling paperwork only slows them down. That’s why we provide urgent care EHR solutions that optimize workflow, boost communication, and enhance both staff productivity and patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Urgent Care EHR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Preliminary Evaluation / Triage:</strong> Prioritizes patients and allocates examination room appointments in emergency care settings.</li>
              <li><strong>Swift Data Aggregation:</strong> Enables fast collection of administrative and clinical data with template-driven models.</li>
              <li><strong>KPI Dashboards:</strong> Provides real-time visibility into performance metrics to reduce administrative bottlenecks.</li>
              <li><strong>Lab Authorizations & Reports:</strong> Streamlines lab order approvals and integrates reports directly into the EHR.</li>
              <li><strong>Consultation Appointments:</strong> Simplifies referrals and electronic appointment scheduling.</li>
              <li><strong>Device Compatibility:</strong> Integrates seamlessly with medical devices to automate data collection accurately.</li>
              <li><strong>Template-Driven Model:</strong> Ensures faster patient documentation from initial visit through follow-ups and referrals.</li>
              <li><strong>Management of ECG:</strong> Enables digital storage and retrieval of ECG results within the urgent care EHR.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our EHR Process for Urgent Care
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collect requirements through detailed discussions to plan the right approach.</li>
              <li><strong>Strategy Selection:</strong> Define execution phases, strategies, and delivery timelines.</li>
              <li><strong>Implementation:</strong> Deploy a template-driven urgent care EHR system tailored to your workflow.</li>
              <li><strong>Service Testing:</strong> Test the system using realistic inputs to ensure reliable performance.</li>
              <li><strong>Feedback & Reporting:</strong> Gather client feedback and continuously optimize performance.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Urgent Care EHR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified & Compliant:</strong> ISO 9001:2015 accredited and HIPAA compliant, ensuring highest quality standards.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with strict access control and secure data handling.</li>
              <li><strong>High Accuracy & Quality:</strong> Rigorous quality checks guarantee precise and reliable outcomes.</li>
              <li><strong>Quick Turnaround:</strong> Fast deployment with minimal administrative hurdles.</li>
              <li><strong>Scalability:</strong> Flexible models to scale services up or down based on your evolving needs.</li>
              <li><strong>Pocket-Friendly Pricing:</strong> Affordable and customizable pricing models.</li>
              <li><strong>Dedicated Project Manager:</strong> A single point of contact to ensure smooth project execution.</li>
              <li><strong>Experienced Team:</strong> 500+ professionals with 10+ years of domain expertise.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced tools, hardware, and secure data systems updated regularly.</li>
              <li><strong>Secure Data Exchange:</strong> Encrypted platforms (SFTP, VPN) with added layers of protection.</li>
              <li><strong>24/7 Availability:</strong> Always accessible through phone, email, or live chat across time zones.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Rehabilitation Transcription:</strong> Helped a US-based client move to new EHR software with efficient rehab transcription and seamless patient data sync.</li>
              <li><strong>STAT Reports Automation:</strong> Assisted Caribbean radiologists by transcribing over 200 STAT reports within 30 days, ensuring fast turnaround and satisfaction.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Urgent Care EHR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Stay ahead of industry changes and reforms by partnering with <strong>Nimble Acuity</strong>. Our dependable, affordable urgent care EHR services will help you streamline revenue cycle management and enhance patient care.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to see how our tailored EHR services can optimize your urgent care practice.
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

export default UrgentCareEHR;
