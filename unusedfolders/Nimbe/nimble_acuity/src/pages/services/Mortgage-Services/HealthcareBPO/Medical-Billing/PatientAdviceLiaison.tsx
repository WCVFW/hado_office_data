import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const PatientAdviceLiaison: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Patient Advice and Liaison Services: Your Advocate in Healthcare
            </h2>
            <p className="text-lg text-gray-600">
              When a concern isn't resolved at the first point of contact, where do you turn? 
              With <strong>nimble acuity</strong>, you gain access to dedicated patient advice 
              and liaison services (PALS). Our experts act as your advocate—helping you 
              navigate issues, raise concerns, and ensure your voice is always heard.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, we step in when care teams cannot resolve 
              issues promptly. From complaints to compliments, we provide patients with a 
              direct channel to improve healthcare services while ensuring quick, effective resolutions.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Patient Advice and Liaison Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Patient Liaison:</strong> Skilled nursing staff review prescription 
                requests, verify with doctors, and clarify with pharmacies to ensure safe approvals.
              </li>
              <li>
                <strong>Patient Care Coordination:</strong> We collaborate with multiple 
                departments to deliver seamless care, including:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li><strong>Patient Scheduling:</strong> Appointment reminders, rescheduling, and cancellations.</li>
                  <li><strong>Referral Processing:</strong> Insurance portal submissions with follow-up notifications.</li>
                  <li><strong>Addressing Lapses in Care:</strong> Tracking charts, annual reminders, and adherence monitoring.</li>
                  <li><strong>Medication Refills & Billing:</strong> Support with billing clarifications, DME requests, and refill coordination.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Patient Advocacy Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Strategy Development:</strong> Build a clear pathway for patients to access help.</li>
              <li><strong>Concern Negotiation:</strong> Analyze issues, assess impact, and reassure patients.</li>
              <li><strong>Problem Resolution:</strong> Provide direct liaison support until issues are resolved.</li>
              <li><strong>Reporting:</strong> Deliver comprehensive reports for transparency and improvement.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable & Flexible:</strong> Budget-friendly solutions tailored to your needs.</li>
              <li><strong>Patient Data Security:</strong> ISO/IEC 27001:2022 certified and HIPAA-compliant processes.</li>
              <li><strong>Qualified Staff:</strong> Experienced professionals delivering patient-first outcomes.</li>
              <li><strong>Scalable Services:</strong> Expand or streamline services based on demand.</li>
              <li><strong>Quick Turnaround:</strong> Advanced tools ensure faster resolutions.</li>
              <li><strong>Reliable Support:</strong> Friendly, dedicated teams providing 24/7 assistance.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Patient Care and Build Trust?
            </h3>
            <p className="text-gray-700 mb-6">
              Don’t let patient concerns go unresolved. Partner with 
              <strong> nimble acuity</strong> to become a trusted advocate, strengthen 
              your reputation, and improve patient satisfaction.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to explore how our patient advice and liaison services can 
              transform your healthcare delivery.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default PatientAdviceLiaison;
