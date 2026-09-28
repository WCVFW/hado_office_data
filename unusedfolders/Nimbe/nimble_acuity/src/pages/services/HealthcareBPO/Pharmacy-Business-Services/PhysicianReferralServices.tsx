import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PhysicianReferralServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Physician Referral Services
            </h2>
            <p className="text-lg text-gray-600">
              Bridge the gap between doctors and patients, reach a wider audience, and maximize service deliveries with our expert physician referral services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Physician Referral Services, offered through medical call centers, help patients connect with the right doctor at the right time, 24/7. Callers can use this service to find a doctor based on their specialty, proximity, insurance, and gender.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At <strong>Nimble Acuity</strong>, we provide expert physician referral services to help doctors and healthcare centers get accurate patient data, while helping patients get in touch with the right specialist. Our custom services are the best way to promote your practice and get maximum returns on your marketing efforts.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Physician Referral Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              We offer streamlined communication solutions to both patients and healthcare organizations, backed by a team of highly trained medical callers.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Appointment Scheduling:</strong> Acting as your virtual receptionist, we help the right patients reach you, scheduling new, follow-up, and urgent after-hours appointments.</li>
              <li><strong>Nurse Triage Services:</strong> We provide 24/7 nurse triage support. Our expert callers quickly understand patient needs and connect them to a nurse or physician for professional medical advice.</li>
              <li><strong>Physician Referral Reporting:</strong> We provide comprehensive reporting to help you capture and analyze accurate patient footfall data, including referrals by specialty, provider, geographic location, and caller demographics.</li>
            </ul>
          </div>
          
          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Physician Referral Process
            </h3>
            <p className="text-gray-700 mb-4">
              We follow a streamlined process to help patients easily reach the desired hospitals and get the required medical facility without wasting precious time.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Understand Patient's Requirements:</strong> Our representatives understand patient needs and preferences, including proximity, specialty, insurance, and gender.</li>
              <li><strong>Effectively Meeting the Patient's Needs:</strong> We scan our database to find a doctor or healthcare system that perfectly matches the patient's requirements.</li>
              <li><strong>Information Exchange:</strong> We pass on the matching physician information to the patient and perform a warm transfer to the healthcare system.</li>
              <li><strong>Follow-up Reminder:</strong> We send follow-up information to the caller to remind them of their appointment schedule.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Physician Referral Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Customized Plans and Prices:</strong> We offer customized, pocket-friendly plans and solutions to meet your unique needs without increasing overhead costs.</li>
              <li><strong>Accurate Solutions:</strong> We provide accurate, need-based solutions by quickly understanding patient requirements.</li>
              <li><strong>Complete Data Privacy:</strong> Our HIPAA-compliant process and strict data protection norms keep all patient information completely secure.</li>
              <li><strong>Instant Access to Certified Executives:</strong> We have a team of expert customer care executives with immense experience in the healthcare industry.</li>
              <li><strong>Large Database:</strong> We have a huge pool of patient and provider databases that can help increase your process efficiencies.</li>
              <li><strong>24/7 Support:</strong> Our representatives are available round-the-clock, 365 days a year, to provide uninterrupted support.</li>
              <li><strong>Complete Peace of Mind:</strong> Our services help patients make informed choices and assist healthcare providers in streamlining operations for hassle-free support.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Quick Teleradiology Services:</strong> We ensured delivery of services within the requested TAT of 12-24 hours for a medical imaging firm.</li>
              <li><strong>Insurance Eligibility Services:</strong> We provided high-quality insurance information-sourcing, assisting a clinical decision provider with valuable insights.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to reach out to you directly and express my gratitude for the hard work that the Data team, as well as the AR team, has done with EJ practice. I have pushed both teams extremely hard over the past month and their efforts, as well as ours, have paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Physician Referral Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> is a leading physician referral service provider. We offer expert telephone answering services to help your patients effectively reach you. Our representatives are adept at handling patient queries, scheduling appointments, and sending reminders.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you want to increase your reach and patient database, contact us, and we'll help you streamline your business, perfect your healthcare deliveries, and improve your bottom line.
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

export default PhysicianReferralServices;