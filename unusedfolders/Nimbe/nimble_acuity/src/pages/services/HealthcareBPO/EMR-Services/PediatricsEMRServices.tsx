import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const PediatricsEMRServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pediatrics EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to best-in-class patient care and end-to-end pediatrics EMR services 
              by partnering with <strong>Nimble Acuity</strong> — at highly affordable prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Pediatrics is a specialized field with unique requirements that general EMR tools 
              often fail to meet. Pediatricians rely on automated templates like growth charts, 
              immunization status, family history, prescriptions, and birth records.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> partners with pediatric departments, 
              super-specialty hospitals, independent practitioners, and clinics to customize 
              and automate their pediatrics EHR management. Through cutting-edge technologies 
              and offshore back-office support, we enhance clinical efficiency and patient care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a trusted pediatrics EMR services provider, we act as an extended team — 
              optimizing processes and supporting all your EMR-related needs cost-effectively.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Pediatrics EMR Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Pediatricians need technology that adapts to their practice style. 
              Our tailored services include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Pediatrics EMR Consulting:</strong> End-to-end consulting on tool selection, 
                customization, hardware, security, database, and staff training.
              </li>
              <li>
                <strong>Tool Migration & Integration:</strong> Seamless migration from legacy systems 
                with integration across hospitals, labs, pharmacies, insurance providers, and registries.
              </li>
              <li>
                <strong>Forms & Templates Customization:</strong> Growth charts, immunization records, 
                behavioral assessments, ADHD/autism screening, family history, and more.
              </li>
              <li>
                <strong>Pediatrics EMR Billing:</strong> Automated billing workflows, ICD-9/ICD-10 codes, 
                eligibility checks, E&M coding optimization, and error-free claims processing.
              </li>
              <li>
                <strong>Custom EMR Software Development:</strong> Full-stack development of EMR tools 
                or supporting modules tailored to pediatric practice needs.
              </li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Cardiology EMR Services</li>
              <li>EMR Software Development</li>
              <li>Oncology EMR Services</li>
              <li>Dermatology EMR Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Pediatrics EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost Reduction:</strong> Achieve 40-50% savings through our global model.</li>
              <li><strong>Quality Assurance:</strong> Dedicated QA experts ensure compliance and error-free processes.</li>
              <li><strong>Secure Data Management:</strong> ISO/IEC 27001:2022 certified, HIPAA-compliant data handling.</li>
              <li><strong>Certified Team:</strong> Licensed medical professionals trained on leading EMR tools.</li>
              <li><strong>End-to-End Practice Management:</strong> From customization to billing, transcription, analytics, and more.</li>
              <li><strong>Streamlined Solutions:</strong> Seamless data sharing across hospitals, labs, insurers, and registries.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for transparent communication.</li>
              <li><strong>Global Delivery Model:</strong> 24/7 support and operational reliability across time zones.</li>
            </ul>
          </div>

          {/* Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Full-service Billing for Urgent Care:</strong> Reduced costs, improved efficiency, and increased cash flow.</li>
              <li><strong>Medical Billing for Maryland Client:</strong> Cleared coding and billing backlog in just 12 hours.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Pediatrics EMR & EHR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With <strong>20+ years of experience</strong> and ISO-certified processes, 
              we deliver compliant, flexible, and cost-effective pediatrics EMR solutions 
              for hospitals, clinics, and independent practitioners.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to streamline your pediatrics practice and reduce operational overhead? Let’s talk.
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
export default PediatricsEMRServices;
