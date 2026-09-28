import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PatientAdherenceServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Patient Adherence Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your patients adhere to physician orders and stay on their medication journey for successful healthcare outcomes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for support to help patients overcome adherence barriers, identify the best communication channels, and reduce the social, physical, and emotional burden of treatment? If so, you can benefit significantly from <strong>nimble acuity's</strong> patient adherence services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a leading patient adherence company, we ensure patients overcome barriers standing in the way of treatment success. Our patient adherence programs are built with a holistic approach. Our carefully trained agents build personalized relationships and support patients on their unique journey to ensure they follow physician instructions and achieve the best possible outcomes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Patient Adherence Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Compliance Services:</strong> Our qualified and trained personnel, including nurses, deliver highly personalized and high-quality services to improve patient adherence. We make customized calls, conduct compliance evaluations, and verify prescription reception. Our team also serves as a knowledgeable resource to ease patient concerns and answer queries.</li>
              <li><strong>Training Services:</strong> We understand that home injections and infusions can be complex for patients and caregivers. Our registered and qualified personnel provide training via phone or video conferencing to build confidence in infusion and injection best practices, improving adherence.</li>
              <li><strong>Psychosocial Support Services:</strong> Our team works individually with patients to identify issues such as care coordination, psychosocial factors, caregiver support, and transportation that could be hindering treatment efficacy. We then work with appropriate health organizations and partners to address each of these barriers.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Patient Adherence Services to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Strategic Pricing:</strong> We offer highly competitive pricing packages that provide significant cost savings.</li>
              <li><strong>High Data Security:</strong> As an ISO/IEC 27001:2022-certified provider, we handle all patient data with the utmost adherence to international data security policies and protocols.</li>
              <li><strong>HIPAA Compliant:</strong> We are a fully HIPAA-compliant company, taking all necessary steps to ensure protected patient data is handled only by authorized personnel.</li>
              <li><strong>Dedicated Project Manager:</strong> We assign a dedicated project manager to keep you informed of all progress.</li>
              <li><strong>Experienced Professionals:</strong> Our team of patient adherence professionals is highly trained and interacts with patients in a courteous and professional manner, upholding your brand's reputation.</li>
              <li><strong>24/7 Customer Support:</strong> We provide timely, round-the-clock support to resolve any issues.</li>
              <li><strong>Short Turnaround:</strong> With delivery centers located strategically, we ensure a fast turnaround for our services.</li>
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
              Outsource Patient Adherence Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading provider of patient adherence services to healthcare providers worldwide. We meticulously source and hire professionals with a strong medical background and provide industry-leading training on the latest practices and technologies. This ensures our agents, including registered nurses, deliver the best services available.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Get in touch with us</strong> if you're looking for professional and trustworthy patient adherence services.
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

export default PatientAdherenceServices;