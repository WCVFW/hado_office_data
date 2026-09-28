import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const TelemedicineAppointmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Telemedicine Appointment Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve your patient care and cash flow with an advanced blend of cutting-edge telemedicine appointment services provided by an experienced workforce.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for professional telemedicine appointment services to connect your patients with the right healthcare provider? Do you want to enable your providers to remotely evaluate patients and allow patients to schedule appointments seamlessly? If so, you can benefit significantly from our telemedicine appointment services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **nimble acuity** is a leading telemedicine appointment service provider that has helped numerous healthcare providers create a seamless interface for their patients to schedule appointments at any time. Our professional and reliable support for telephone-based and video-conferencing-based telemedicine appointments ensures timely care. Our well-trained call handlers direct patients to the most suitable healthcare facility, making the care process more streamlined and efficient.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Telemedicine Appointment Services
            </h3>
            <p className="text-gray-700 mb-4">
              Our services include urgent care, tele medical, telehealth virtual, and online telehealth appointments. These services are instantly accessible, convenient, and have been shown to be very satisfactory for patients. They are designed to help healthcare providers with busy schedules.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>**Appointments for Current Patients:** For all your current patients, we can handle calls via telephone or video conferencing to gauge if a telemedicine appointment is appropriate. If so, we will schedule it with the right healthcare provider or physician.</li>
              <li>**Appointments for Urgent Virtual Care:** When we receive calls to schedule appointments, our trained handlers will gauge the urgency of the required care. If the situation is urgent and can be resolved quickly, our team will schedule immediate appointments with the concerned provider.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Telemedicine Appointment Services to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>**Strategic Pricing:** We provide affordable pricing options for our comprehensive services, which are highly cost-effective for you.</li>
              <li>**High Data Security:** As an ISO/IEC 27001:2022 ISMS-certified provider, you can be sure that all your patient data is completely safe and secured using stringent protocols.</li>
              <li>**HIPAA Compliant:** We are fully HIPAA-compliant and take all necessary steps to ensure that the data and clinical records of all your patients are stored safely.</li>
              <li>**Dedicated Project Manager:** We assign a dedicated project manager who keeps you updated at each stage of the project.</li>
              <li>**Experienced Professionals:** Our team consists of highly trained and courteous agents who ensure your patients have a good impression of your practice.</li>
              <li>**24/7 Customer Support:** We provide adequate support around the clock, with our project managers and other team members always available to resolve any issues.</li>
              <li>**Short Turnaround:** With our numerous global delivery centers, we provide quality services with a quick turnaround time.</li>
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
              Outsource Telemedicine Appointment Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **nimble acuity** is a leading provider of telemedicine appointment services for diverse clients and healthcare providers worldwide. We carefully select professionals with a strong medical background and use time-tested processes and quality assurance workflows to deliver services that make a significant positive impact on your operations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              **Get in touch with us** if you are looking for a professional and trustworthy telemedicine appointment company.
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

export default TelemedicineAppointmentServices;