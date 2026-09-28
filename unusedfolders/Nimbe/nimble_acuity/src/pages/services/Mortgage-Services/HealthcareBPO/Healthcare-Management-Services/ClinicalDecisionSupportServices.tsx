import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ClinicalDecisionSupportServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Clinical Decision Support Services
            </h2>
            <p className="text-lg text-gray-600">
              Make clinical decisions that affect patient health and avoid legal ramifications through reliable clinical decision solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The most important essence in integrated morbidity care is fast decision-making and shared care management that is well-coordinated by caregivers and patients. This is easier on paper but tough to achieve without sound clinical decision support services (CDS). Multimorbidity affects patient medication, overlapping guidelines, and the evidencing process in healthcare.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The best way to streamline the process is to outsource clinical decision support services to <strong>nimble acuity</strong> so experts can take over clinical decision support roles to provide backend support to face challenges such as alerting conflicting guidelines and reconciliation of the correct care plan. We implement CDS digitally so that caregivers can ensure compliance at all times and practice the correct guidelines to keep up-to-date with evolving clinical rules. The biggest benefit is the ability to collaboratively manage personal care programs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Being a top clinical decision service provider, the onus is on us to ensure that clients receive the best of our services while having their data protected from unauthorized elements. Our special service tenets enable us to remain distinct compared to other service providers.
            </p>
          </div>

          {/* Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Clinical Decision Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Tele-Consultation:</strong> Our certified clinical decision support consultants will help with comprehensive order screening, misstep notifications, and accurate administration instructions.</li>
              <li><strong>For Nurses:</strong> We provide alerts to review patient vitals, assign priorities to medical warnings, and interpret adverse effects.</li>
              <li><strong>For Pharmacists:</strong> We help manage drug doses, assess patients using drug and disease parameters, and perform medical reconciliation and order fulfillment.</li>
              <li><strong>For Physicians:</strong> We assist with clinical decision-making by capturing patient data, issuing real-time alerts on adverse reactions, and maintaining up-to-date records.</li>
            </ul>
          </div>

          {/* Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Clinical Decision Process We Follow
            </h3>
            <p className="text-gray-700 mb-6">
              Our clinical decision support services are efficient and, most importantly, transparent. Clients can get a detailed glimpse of what we do as part of our commitment.
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>1. Business Needs Capture:</strong> We get in touch with the client to capture their business needs and clinical data.</li>
              <li><strong>2. Data Assessment:</strong> We assess the data to ensure clinical decision support is backed by real-time information.</li>
              <li><strong>3. Close-Knit Support:</strong> We offer dedicated support so decisions can be made quickly without delay.</li>
              <li><strong>4. Post-Decision Evaluation:</strong> We evaluate the process to understand how decisions impact patient health and how to deal with conflicting regulations.</li>
              <li><strong>5. Project Summary:</strong> We will report to clients and create a detailed project summary highlighting the process.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Clinical Decision Support to nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective:</strong> Our services are an affordable way to implement large-scale CDS without a huge budget.</li>
              <li><strong>High Data Security:</strong> Patient data is sensitive, and we ensure it is protected with robust security measures.</li>
              <li><strong>One-Stop-Shop:</strong> We offer a range of healthcare services, so you won't need to choose a different partner.</li>
              <li><strong>Convenience and Easy Access:</strong> We provide clear insights into the process so you can make clinical and project decisions quickly.</li>
              <li><strong>ISO Certification:</strong> We are an ISO 9001:2015 certified partner and comply with a range of other mandatory compliances.</li>
              <li><strong>Skilled Medical Experts:</strong> Our staff includes leading medical experts, doctors, nurses, and certified professionals.</li>
              <li><strong>World-Class Infrastructure:</strong> Our services are carried out from a secure infrastructure that ensures maximum data security and quality compliance.</li>
              <li><strong>Time-Saving:</strong> Our agile approach saves you a great deal of effort and ensures projects are completed on time.</li>
              <li><strong>24/7 Customer Support:</strong> We offer close-knit support via phone, email, or webchat for a human touch.</li>
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
              Outsource Clinical Decision Support Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> is a clinical decision support service provider offering a range of specialty care services for patients, nurses, and doctors across the healthcare domain. We serve patients and healthcare professionals directly, enabling them to consult with a professional clinical decision support specialist through our online platform and network of certified professionals.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We are a trusted provider that enables you to provide better patient care and avoid risks due to poor care or administration of wrong meds. <strong>Contact us today</strong> for a free quote and let us help you with your medical needs.
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

export default ClinicalDecisionSupportServices;