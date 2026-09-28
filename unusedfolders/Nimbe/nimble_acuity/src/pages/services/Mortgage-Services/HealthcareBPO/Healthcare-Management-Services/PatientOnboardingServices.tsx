import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PatientOnboardingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Patient Onboarding Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your healthcare practice with <strong>nimble acuity's</strong> patient onboarding services for hyper-personalized care delivery with maximum efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over a billion patient visits each year, healthcare facilities are highly pressurized environments. They demand innovative, efficient, and often automated tools to ensure a smooth patient onboarding process and a seamless flow of information. As a premium patient onboarding service provider, <strong>nimble acuity</strong> offers the easiest and fastest way to achieve error-free patient onboarding. Our specialists leverage state-of-the-art technology to systematically collect, record, and manage patient records—including personal details, medical history, diagnoses, and treatments—providing you with a unified view of your patients' medical history in their electronic medical record (EMR).
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Patient Onboarding Service Offerings
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer modern, quick, and intelligent digital onboarding solutions powered by AI and machine learning to provide a hassle-free experience for your patients and staff. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Collecting Patient Demographic Details:</strong> We use a variety of techniques—from electronic data capture via texts and emails to phone calls—to ensure a comprehensive and detailed collection of patient information.
              </li>
              <li>
                <strong>Compiling Patient Medical History:</strong> Our specialists aggregate, index, and scribe patients' medical records, ensuring all past and current medical details, including allergies and past treatments, are accurately captured and easily accessible.
              </li>
              <li>
                <strong>Structuring Patient Data:</strong> We structure all personal and medical data and integrate it into your EMR, giving you a 360-degree view of your patient's condition to reduce time wastage and ensure smooth, error-free care.
              </li>
              <li>
                <strong>Aggregating Detailed Insurance Information:</strong> Our specialists collect comprehensive information on a patient’s insurance plan (self-pay, co-pay, or fully covered) to ensure a smooth and hassle-free payment process for medical bills.
              </li>
              <li>
                <strong>Getting Consent Forms Signed:</strong> We help patients understand and sign all necessary documents, including consent forms and care policies, to ensure full compliance.
              </li>
            </ul>
          </div>

          {/* Process Followed */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Patient Onboarding Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We follow a systematic, step-by-step process that uses the latest technology and data analytics to make patient onboarding faster and easier. Our process includes:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                <strong>Understanding Your Healthcare Facility:</strong> We begin with a meeting to understand your services and patient demographics to tailor our solutions to your specific needs.
              </li>
              <li>
                <strong>Creating an Action Plan:</strong> We develop a powerful plan to streamline the entire patient onboarding process and their journey within your facility.
              </li>
              <li>
                <strong>Implementation:</strong> Our experts use our tools and technologies to capture, record, and streamline your patients' information, saving it in a structured format within your EMR.
              </li>
              <li>
                <strong>Quality Check:</strong> We rigorously check all captured data to eliminate redundancies and ensure that all required information has been accurately entered.
              </li>
              <li>
                <strong>Regular Upgrades:</strong> We continuously improve and upgrade our processes to incorporate the latest innovations, adapting to the evolving needs of your patients and facility.
              </li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for Patient Onboarding?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Experienced Specialists:</strong> Our skilled team has a strong background in the medical industry and deep knowledge of onboarding processes.
              </li>
              <li>
                <strong>State-of-the-Art Technology:</strong> We use the latest automated solutions to centralize patient information, ensuring complete safety and security.
              </li>
              <li>
                <strong>Customized Solutions:</strong> Our services are tailored to your specific needs, helping you reduce overhead costs.
              </li>
              <li>
                <strong>Competitive Pricing:</strong> We offer our services at highly cost-effective rates, making our solutions accessible to all practices.
              </li>
              <li>
                <strong>Complete Data Security:</strong> We handle sensitive information with the utmost care, with stringent security protocols and encrypted servers.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our team is available 24/7, 365 days a year, providing quick and hassle-free support.
              </li>
              <li>
                <strong>Complete Peace of Mind:</strong> We take the administrative burden off your practice, allowing you to focus on providing quality patient care.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Patient Onboarding Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              As your business partner, we make the patient onboarding process simple and painless for both physicians and patients. By recording, maintaining, and consolidating your patients' complete medical information, we enable you to provide the hyper-personalized care you always strive for.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us now</strong> to learn more about our premium patient onboarding process. We are just a click away!
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

export default PatientOnboardingServices;