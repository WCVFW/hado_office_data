import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const DigitalHealthServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Digital Health Services
            </h2>
            <p className="text-lg text-gray-600">
              Partner with <strong>nimble acuity</strong> to seamlessly integrate digital solutions, enhance patient care, and expand your reach—all while reducing costs and improving efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it challenging to adopt digital healthcare solutions while managing your core responsibilities? Digital health services offer a powerful way for healthcare providers to connect with patients, reduce the burden on facilities, and improve care delivery. However, the initial setup can be time-consuming and costly, especially for small to medium-sized organizations. At <strong>nimble acuity</strong>, we simplify this transition. With over 26 years of experience, we help you implement and manage flawless digital health solutions that save you time, improve patient satisfaction, and ensure you stay on top of your game.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Digital Health Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Video Visits:</strong> Schedule and manage video-based consultations, enabling patients to connect with board-certified physicians from their phones or laptops for first-time visits and follow-up appointments.</li>
              <li><strong>On-demand Second Opinion:</strong> Facilitate on-demand second opinions so patients can make informed medical decisions from the comfort of their homes.</li>
              <li><strong>Virtual Urgent Care:</strong> Provide patients with platforms to book priority-based appointments based on their urgent needs and available slots.</li>
              <li><strong>Digital Health Platform Development:</strong> We can optimize your existing digital health platform or build a new one from scratch to integrate digital solutions with your clinical routines, making your services more flexible and scalable.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Digital Healthcare Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Conduct Needs Assessment:</strong> We analyze your current workflow and challenges to identify areas for improvement and increased productivity.</li>
              <li><strong>Implementation of Technology:</strong> Our team recommends and implements the right technology to eliminate redundancies and improve your capacity for critical care.</li>
              <li><strong>Execution of Services:</strong> Once approved, we begin implementing the digital health services, ensuring they adapt seamlessly to your existing processes.</li>
              <li><strong>Provide Ongoing Support:</strong> We offer continuous support to ensure your digital healthcare services run smoothly, including direct assistance for your patients.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Digital Health Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Our services are affordably priced to help healthcare organizations of all sizes upgrade their operations without breaking the bank.</li>
              <li><strong>Improved Patient Care:</strong> We help you provide easier access to care for all patients, including those with disabilities or in geographically isolated communities.</li>
              <li><strong>HIPAA-Compliance:</strong> We are a HIPAA-compliant company, ensuring all patient data and information you share with us is completely secure and protected.</li>
              <li><strong>Scalability:</strong> Our solutions help you reach a wider audience and grow professionally by making your services accessible to a larger population.</li>
              <li><strong>Cutting-edge Technology:</strong> We use the latest and most agile tools and technology to provide flawless digital health services.</li>
              <li><strong>24/7 Support:</strong> Our team is available around the clock via phone, email, and live chat to answer your questions and provide support.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>ICD-10 Implementation:</strong> Helped a medical billing firm optimize its performance and successfully migrate from ICD-9 to the ICD-10 system.</li>
              <li><strong>Accounts Receivable Services:</strong> Assisted a healthcare company by getting all denied claims cleared, significantly improving its accounts receivable.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to express my gratitude for the hard work the Data and AR teams have done. I've pushed them extremely hard over the past month, and their efforts have paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Digital Health Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Streamline your patient care, expand your reach, and grow professionally with <strong>nimble acuity</strong>. Our proven expertise and dedicated team help you provide easy access to your services and achieve the best possible outcomes.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us now</strong> for a free quote and let us help you build and manage digital healthcare platforms that work for you.
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

export default DigitalHealthServices;