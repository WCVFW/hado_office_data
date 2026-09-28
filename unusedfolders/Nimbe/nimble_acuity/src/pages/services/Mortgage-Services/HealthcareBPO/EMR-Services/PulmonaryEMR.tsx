import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PulmonaryEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pulmonary EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your pulmonary practice with customized EMR solutions from <strong>Nimble Acuity</strong>, 
              designed to enhance efficiency, accuracy, and patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing patient consultations, EMR creation, and claim processing can be time-consuming. By outsourcing 
              pulmonary EMR services to <strong>Nimble Acuity</strong>, your clinic gains access to expert-designed 
              EMR tools ready with ICD-0 and CPT codes to capture charges and process claims efficiently.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over 20 years of experience, we help pulmonary clinics streamline administrative processes, from patient 
              registration to payment posting, while ensuring accuracy, reliability, and HIPAA compliance.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pulmonary EMR Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Selecting the Right Pulmonary EMR Tool:</strong> We guide you in choosing the best EMR tool for your practice, balancing simplicity and advanced features.</li>
              <li><strong>EMR Tool Migration:</strong> Seamlessly migrate data and templates from legacy systems to new EMR software with minimal disruption.</li>
              <li><strong>Image & Template Customization:</strong> Organize and index pulmonary images and templates electronically for all stages of treatment.</li>
              <li><strong>Pulmonary Billing:</strong> End-to-end billing management, including insurance verification, CPT/ICD code entry, claims submission, and payment posting.</li>
              <li><strong>Inventory Management:</strong> Track and manage personnel, equipment, and consumables to ensure 99% order fulfillment.</li>
              <li><strong>EMR Software Development:</strong> Build custom EMR solutions tailored to your pulmonary clinic’s workflow, including templates, dashboards, lab management, and digital documentation.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pulmonary EMR Development Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Understanding Requirements:</strong> Comprehend your practice needs to create a tailored EMR blueprint.</li>
              <li><strong>EMR Planning:</strong> Collaborate with your team to finalize a customized implementation plan.</li>
              <li><strong>EMR Development:</strong> Build an intuitive interface and all necessary features for seamless pulmonary workflow.</li>
              <li><strong>Pre & Post-Implementation Testing:</strong> Test for functionality, performance, and bug resolution.</li>
              <li><strong>Deployment & Maintenance:</strong> Launch the EMR in real-time, monitor performance, and provide ongoing support.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Endocrinology EMR Services</li>
              <li>Cardiology EMR Services</li>
              <li>Oncology EMR Services</li>
              <li>Dermatology EMR Services</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pulmonary EMR?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> ISO 9001:2015 accredited, HIPAA-compliant services.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, with SFTP and VPN-secured transfers.</li>
              <li><strong>High-Quality Services:</strong> Tested, reliable EMR solutions ensuring compliance and accuracy.</li>
              <li><strong>Scalable & Cost-Effective:</strong> Flexible solutions that reduce costs by 40–50% without compromising quality.</li>
              <li><strong>Modern Infrastructure:</strong> Best-in-class systems, medical billing software, and advanced security layouts.</li>
              <li><strong>Dedicated Team:</strong> Single point of contact with experienced EMR specialists and project managers.</li>
              <li><strong>24/7 Support:</strong> Round-the-clock assistance from global delivery centers.</li>
              <li><strong>Fast Turnaround:</strong> Optimized process and infrastructure to meet deadlines efficiently.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Rehabilitation Transcription:</strong> Upgraded EHR software for a client, processing 3000+ rehab cases efficiently.</li>
              <li><strong>Medical Transcription for Indianapolis Physicians:</strong> Transcribed 3000+ medical encounters with high accuracy and fast turnaround.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pulmonary EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 20 years of expertise in pulmonary EMR services, <strong>Nimble Acuity</strong> offers 
              comprehensive, scalable, and HIPAA-compliant solutions to enhance patient care and clinic efficiency.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to optimize your pulmonary practice workflow? Get in touch today.
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

export default PulmonaryEMR;
