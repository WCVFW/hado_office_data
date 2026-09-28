import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const NeurologyEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Neurology EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your neurology practice, optimize clinical workflows, and enhance patient satisfaction with <strong>Nimble Acuity's</strong> comprehensive neurology EMR services at an affordable rate.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Neurology demands accurate, complete, and fast information management. At <strong>Nimble Acuity</strong>, we provide end-to-end neurology EMR solutions for hospitals, clinics, and independent neurologists—reducing administrative burden, lowering costs, and improving patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Neurology EMR Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Neurology EMR Consulting:</strong> End-to-end consulting including EMR tool selection, installation, network setup, security, database management, backups, updates, maintenance, and staff training.
              </li>
              <li>
                <strong>EMR Tool Migration & Integration:</strong> Seamless migration of legacy data and integration with labs, hospitals, pharmacies, imaging tools (CT, MRI, EEG), and other diagnostic systems.
              </li>
              <li>
                <strong>Forms & Templates Customization:</strong> Create neurology-specific templates for cognitive disorders, epilepsy, cranial/peripheral nerve disorders, spinal issues, drug interactions, flow sheets, and lab orders.
              </li>
              <li>
                <strong>Neurology EMR Billing:</strong> Streamline billing with ICD-9/ICD-10 code implementation, insurance verification, automated alerts, and payment tracking integrated with EMR.
              </li>
              <li>
                <strong>Neurology EMR Software Development:</strong> Build custom, feature-rich EMR software tailored to your practice and workflow requirements.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Neurology EMR Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collaborate with your team to identify neurology-specific EMR needs.</li>
              <li><strong>Evaluation of Data:</strong> Assess clinical data for accuracy, completeness, and readiness for migration or integration.</li>
              <li><strong>EMR Services Using Custom Tools:</strong> Implement customized EMR solutions including data migration, forms, and billing automation.</li>
              <li><strong>Outcome Evaluation:</strong> Monitor results and provide detailed reports for continuous improvement.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Dermatology EMR Services</li>
              <li>EMR Software Development</li>
              <li>Cardiology EMR Services</li>
              <li>Oncology EMR Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Neurology EMR Services to Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Providers:</strong> ISO 9001:2015 certified solutions and expert team for reliable practice management.</li>
              <li><strong>Secure Data Management:</strong> ISO/IEC 27001:2022 accreditation ensures patient data confidentiality and compliance.</li>
              <li><strong>Quality Assurance:</strong> Dedicated QA team monitors accuracy, compliance, and process optimization.</li>
              <li><strong>Scalable Solutions:</strong> Flexible service scaling to meet evolving practice needs.</li>
              <li><strong>Cost Reduction:</strong> Outsourcing reduces administrative costs by 40-50% while maintaining quality.</li>
              <li><strong>Integrated Solution:</strong> Seamless sharing of patient records across clinics, labs, hospitals, and insurance providers.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager ensures timely updates and transparent communication.</li>
              <li><strong>Modern Infrastructure:</strong> Full IT support, EMR management, reporting, and analytics using best-in-class infrastructure.</li>
              <li><strong>Trained & Certified Team:</strong> HIPAA-compliant staff familiar with Medicare Part D and neurology billing codes.</li>
              <li><strong>Safe Data Sharing:</strong> Secure FTP and VPN protocols for safe transfer of sensitive data.</li>
              <li><strong>24/7 Global Delivery:</strong> Round-the-clock EMR support from offshore delivery centers.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Caribbean Radiologists:</strong> Automated over 200 STAT reports per month, improving workflow efficiency.
              </li>
              <li>
                <strong>Home & Lab Sleep Tests:</strong> Streamlined eligibility verification process for faster, cost-effective patient management.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Neurology EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Enhance your neurology practice efficiency and patient care with <strong>Nimble Acuity</strong>. Our certified, ISO-compliant, and fully customizable neurology EMR services support hospitals, clinics, and independent neurologists worldwide.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to take your neurology EMR services to the next level.
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

export default NeurologyEMR;
