import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicalDevicePrototypingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Device Prototyping Services
            </h2>
            <p className="text-lg text-gray-600">
              Transform your healthcare enterprise with <strong>Nimble Acuity</strong>’s 3D modeling and rapid prototyping solutions. Partner with us for reliable, high-quality results that accelerate device development.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Looking for a trusted partner to meet your medical device prototyping needs? <strong>Nimble Acuity</strong> offers world-class 3D modeling and prototyping solutions to help healthcare organizations improve standards, accelerate innovation, and achieve precise results.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 23 years of experience, we deliver rapid prototyping, 3D modeling, and full device development solutions for global healthcare providers and enterprises.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medical Device Prototyping Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Prototype Planning:</strong> Expert guidance to plan the initial prototype and define project requirements effectively.</li>
              <li><strong>Design:</strong> Accurate and error-free designs including model creation, simulation, and visualization.</li>
              <li><strong>Model Creation:</strong> High-quality 3D printing and digital prototyping using advanced software for realistic models.</li>
              <li><strong>Full Development:</strong> End-to-end support from planning, design, modeling, and assembly to ensure complete project delivery.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Medical Device Prototyping?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Flexible rates tailored to your budget, ensuring value for money.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 ISMS-certified company protecting your confidential information.</li>
              <li><strong>High-Quality Services:</strong> Accurate, reliable, and error-free prototyping solutions.</li>
              <li><strong>Modern Infrastructure:</strong> State-of-the-art tools and technology for efficient project execution.</li>
              <li><strong>Skilled Professionals:</strong> Experienced team capable of handling complex projects with precision.</li>
              <li><strong>Quick Turnaround Times:</strong> Fast delivery without compromising on quality.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry for a Georgian Client:</strong> Processed 1,200 claims/month for four medical practices efficiently.</li>
              <li><strong>Claims Processing Using Kareo Software for a US-based Client:</strong> Handled over 17,000 claims/month, delivering accurate charge and demographic entry services.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medical Device Prototyping Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>Nimble Acuity</strong> to leverage decades of experience in medical device prototyping and rapid 3D modeling solutions. Deliver accurate, innovative, and high-quality prototypes for your healthcare enterprise.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for reliable support and solutions tailored to your prototyping needs.
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

export default MedicalDevicePrototypingServices;
