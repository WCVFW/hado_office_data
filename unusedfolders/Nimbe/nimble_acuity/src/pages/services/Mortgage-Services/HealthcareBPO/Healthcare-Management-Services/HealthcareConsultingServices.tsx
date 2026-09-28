import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareConsultingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Is your healthcare company facing dramatic changes in terms of market dynamics, customer behavior, or regulatory demands, and struggling to cope? Partner with <strong>nimble acuity</strong> for expert healthcare management and consulting to empower innovation, minimize cost, and enhance operational efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At <strong>nimble acuity</strong>, we bring 26+ years of deep and extensive experience in healthcare IT consulting. Our services are diverse and wide-ranging, from small one-day engagements to complex, multi-year undertakings. Our skilled healthcare consultants are equipped to handle any healthcare consulting requirement, regardless of its size or complexity.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Healthcare Consulting Service Offerings
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Health Information Management System:</strong> We can set up a perfect healthcare information management system for your hospital to improve profitability and agility by properly collecting, managing, and evaluating patient data, medical history, and more.</li>
              <li><strong>Electronic Medical Records Software:</strong> We assist with the setup and integration of up-to-date EMR software to create a well-managed user information system, ensuring your physicians have quick access to accurate digital records.</li>
              <li><strong>Healthcare Consulting & Software Development:</strong> Our top-notch software developers can devise specialized enterprise software, electronic health records, or other solutions to bring in operational effectiveness, minimize cost, and maximize profit.</li>
              <li><strong>Streamlined & Seamless Clinical Processes:</strong> Our skilled consultants can develop fast, easy, and well-implemented clinical workflows that increase your capacity levels and enhance patient satisfaction.</li>
              <li><strong>Back-office Healthcare Consulting Services:</strong> Our services extend to back-office requirements such as data security, medical transcription, claims processing, healthcare analytics, and more, helping you save on cost, time, and effort.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Healthcare IT Consulting?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Maximize Operational Efficiency:</strong> We help you establish innovative processes, install the best healthcare software, and improve overall coordination through in-depth analytics, maximizing your overall efficiency and capacity.</li>
              <li><strong>Readiness for Demand Fluctuations:</strong> By providing access to the latest healthcare trends and up-to-date developments, your hospital will always be ready to meet sudden surges in demand.</li>
              <li><strong>Reduced Operational Cost:</strong> We help you achieve optimal use of your resources, staff, and technology to significantly minimize operational costs.</li>
              <li><strong>New Business Ventures:</strong> Our consulting services can help your clinic identify new areas for expansion and growth through the implementation of top-notch information management systems and processes.</li>
            </ul>
          </div>

          {/* Testimonials */}
          {/* Note: The original content didn't have a testimonial section. This is for structure. */}
          {/* <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              [Insert Testimonial Here]
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — [Client Name], [Company/Location]
            </p>
          </div> */}

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Consulting to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26+ years of experience, we have assisted a global clientele across the U.S., UK, and Europe, from private practitioners to large hospitals. Our expertise in strategic planning, operational evaluation, and financial management, combined with our use of the latest tools and methodologies, provides your healthcare center with a significant business advantage.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to give your hospital or clinic the maximum business advantage.
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

export default HealthcareConsultingServices;