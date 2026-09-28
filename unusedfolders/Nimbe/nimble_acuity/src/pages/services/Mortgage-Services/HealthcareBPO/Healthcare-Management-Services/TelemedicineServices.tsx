import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const TelemedicineServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Telemedicine Services
            </h2>
            <p className="text-lg text-gray-600">
              We offer a new way to connect patients and doctors virtually by phone or computer, providing fast, easy, reliable, and secure healthcare solutions. Our services start at rates as low as $1440 per FTE per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Telemedicine delivers health-related services through digital communication technologies, including medical care, patient education, and informational services. As a leading telemedicine service provider, <strong>nimble acuity</strong> partners with numerous medical facilities and health professionals to ensure patients receive the medical expertise they need, wherever and whenever they need it.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Telemedicine Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Teleconsultation:</strong> Our specialists provide diagnoses and prescriptions via audio or video calls, helping patients in even the most remote areas avoid unnecessary travel.</li>
              <li><strong>Online Prescriptions:</strong> We provide access to certified providers who can recommend online prescriptions globally.</li>
              <li><strong>Nutrition Counselling:</strong> Our specialized nutritionists offer personalized advice and structured diet plans based on your health goals.</li>
              <li><strong>Second Opinions:</strong> Consult with our experts online for a second opinion on various diagnoses.</li>
              <li><strong>Direct-to-Patient Care:</strong> We support a wide variety of cases, including urgent, chronic, and follow-up care, saving time and increasing patient satisfaction.</li>
              <li><strong>Provider-to-Provider Collaboration:</strong> Our module provides increased access to specialists and supports remote collaboration between providers.</li>
              <li><strong>Medical Education Programs:</strong> We offer platforms for continuous medical education to help professionals stay updated, especially in remote locations.</li>
            </ul>
          </div>

          {/* Specializations */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Telemedicine Specializations
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Telecardiology</h4>
                <p className="text-gray-700">Patients have quick access to cardiologists for opinions and consultations, and we assist medical care providers remotely.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Teleradiology</h4>
                <p className="text-gray-700">Patients can have their MRIs, CT scans, and X-rays transmitted to a specialist for consultation and interpretation.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Teledermatology</h4>
                <p className="text-gray-700">We provide a conduit for patients to interact with dermatologists regarding all kinds of skin-related issues.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Teleophthalmology</h4>
                <p className="text-gray-700">Our services provide state-of-the-art eye screening facilities and automated equipment for a comprehensive eye check-up.</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Teleneurology</h4>
                <p className="text-gray-700">For neurological problems like dementia, headaches, and strokes, our specialists offer remote diagnoses and consultations.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Telemedicine?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Money-Saving:</strong> Our services help you avoid unnecessary travel and associated costs for accommodation and food.</li>
              <li><strong>High Data Security:</strong> We use top-level data encryption and comply with the highest security standards to safeguard confidential patient health data.</li>
              <li><strong>One-Stop-Shop:</strong> Patients can consult specialists, share medical reports, and receive prescriptions all from the comfort of their home.</li>
              <li><strong>Convenience and Easy Access:</strong> Simply log in to our platform to access our team of certified care providers.</li>
              <li><strong>ISO Certified:</strong> We are certified with ISO 13131 for delivering consistent, quality telemedicine services.</li>
              <li><strong>Skilled Experts:</strong> Our team of skilled and experienced medical professionals can manage patients in the most remote parts of the world.</li>
              <li><strong>24/7 Customer Support:</strong> Our team is available 24/7/365 to resolve your issues via a direct call without the need for an appointment.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Quick Teleradiology Services:</strong> We helped a leading medical imaging firm with quick teleradiology services, providing required services in no time.</li>
              <li><strong>Insurance Eligibility Services:</strong> We provided eligibility services to a reputed US-based telemedicine provider.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "Hello, I wanted to reach out to you directly and express my gratitude for the hard work that the Data team, as well as the AR team, has done with EJ practice. I have pushed both teams extremely hard over the past month and their efforts, as well as ours, have paid off."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Telemedicine Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              As a dedicated telemedicine service provider, we increase access to specialty care for patients and doctors in a wide range of medical settings. Our platform enables doctors to evaluate, diagnose, and treat patients without any boundary limitations.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us now</strong> for all your medical needs and we will provide you with the best care.
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

export default TelemedicineServices;