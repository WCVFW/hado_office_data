import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const RemotePatientMonitoring: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Remote Patient Monitoring Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage our well-structured process and software to provide quality care to your patients anytime, anywhere, with our remote patient monitoring services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Despite the tireless efforts of your healthcare professionals, it's humanly overwhelming to detect every underlying complication. However, remote patient monitoring (RPM) is a telehealth solution that allows you to optimize medical care and save lives. Our telehealth remote patient monitoring services will assist your healthcare experts in collecting, storing, and analyzing patient data remotely via online portals or wearable devices. This enables them to detect unstable vitals and patterns, allowing for proactive adjustments to care regimens.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 26 years of experience, we understand what it takes to create effective RPM solutions. Our state-of-the-art process and infrastructure will help you tailor personalized patient monitoring plans to deliver quality care across multiple settings.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Remote Patient Monitoring Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Device-based Patient Monitoring:</strong> We simplify the real-time understanding of your patient's health status, allowing you to make proactive clinical decisions.</li>
              <li><strong>Cloud RPM Servers:</strong> Store your patient's health data securely in the cloud to compare with EHR and other lifestyle logs for better insights.</li>
              <li><strong>RPM Analytics and Reporting:</strong> Our solutions offer in-depth insights into your patient's health and treatment, accelerating disease identification.</li>
              <li><strong>Digital Communication:</strong> Leverage our virtual consultation features to discuss symptoms and adjust care plans for proactive support.</li>
              <li><strong>Intelligent Admin Panels:</strong> Our curated admin panels process virtual appointment requests, handle user settings, and update staff schedules.</li>
              <li><strong>Cardiology RPM:</strong> Ensure accurate detection of blood pressure and prediction of conditions like arrhythmia, enabling faster interventions.</li>
              <li><strong>Pulmonology RPM:</strong> Utilize our easy-to-use devices for the remote diagnosis of respiratory conditions like COPD and asthma.</li>
              <li><strong>Endocrinology RPM:</strong> Equip your healthcare providers with the ability to make proactive adjustments to patient medications via telehealth.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Remote Patient Monitoring Workflow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Determine Your Goals:</strong> Our experts will identify your target patient population and understand your specific goals.</li>
              <li><strong>Integrate RPM with Your EHR:</strong> We incorporate quality RPM software, develop a device provisioning plan, and build a communication strategy.</li>
              <li><strong>Set Up Health IT Solutions:</strong> Our team will help you set up a seamless RPM system so vital information flows directly into your clinical workflow.</li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-4">
              Once the process is in place, our RPM software empowers your healthcare professionals to quickly assess patient health status and ensure quality care.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for RPM Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Data Security:</strong> Our HIPAA-compliant policies and multi-factor user authentication protect your confidential patient health information.</li>
              <li><strong>Expertise:</strong> Our team of highly qualified and experienced remote monitoring specialists delivers quality services tailored to unique patient needs.</li>
              <li><strong>World-Class Infrastructure:</strong> Our global delivery centers and accurate software ensure quick and efficient service.</li>
              <li><strong>Flexible Pricing:</strong> We offer customizable pricing solutions to meet your budget and requirements.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Teleradiology Services:</strong> We helped a leading medical imaging company with quick teleradiology services, delivering without delay.</li>
              <li><strong>Insurance Eligibility Services:</strong> We provided comprehensive eligibility services to a US-based Remote Patient Monitoring provider.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to reach out to you directly and express my gratitude for the hard work that the Data team, as well as the AR team, has done with EJ practice. I have pushed both teams extremely hard over the past month and their efforts, as well as ours, have paid off. We consider nimble acuity a part of our strategic plans moving forward."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Remote Patient Monitoring Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over two decades of experience, we understand the importance of timely, quality care. Our holistic approach to remote patient care, from eligibility verification to preparing superbills, ensures a seamless transition to a telehealth system.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to improve patient care, reduce costs, and enhance productivity? Connect with us now for an obligation-free quote.
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

export default RemotePatientMonitoring;