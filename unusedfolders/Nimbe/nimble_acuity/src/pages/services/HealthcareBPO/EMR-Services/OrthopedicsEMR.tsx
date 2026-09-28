import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OrthopedicsEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Orthopedics EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Completely managed <strong>orthopedics EMR services</strong> to remove your business 
              challenges and back-office load with expert support from Nimble Acuity.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Orthopedics is an advanced field of healthcare that requires 
              personalized patient care and timely access to medical information. 
              From lab reports and X-rays to MRIs and CT scans, orthopedic specialists 
              need a systematic EMR solution for accurate diagnosis and treatment. 
              <strong> Nimble Acuity</strong> provides tailored EMR solutions that make 
              this possible.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We currently support hundreds of hospitals, clinics, and independent 
              practitioners worldwide, helping them automate workflows, reduce costs, 
              and improve efficiency. If you want to streamline your EMR process, 
              outsourcing to us is the right choice.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Orthopedics EMR Services
            </h3>
            <p className="text-gray-700 mb-6">
              We understand the unique demands of orthopedic practices. Our key offerings include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Orthopedics EMR Consulting:</strong> End-to-end consulting for EMR tool selection, 
                migration, hardware setup, database management, updates, and staff training.
              </li>
              <li>
                <strong>Tool Migration & Integration:</strong> Smooth transition to optimized EMR systems with 
                integrations across hospitals, labs, pharmacies, insurance providers, and diagnostic centers.
              </li>
              <li>
                <strong>Forms & Templates Customization:</strong> Specialty-focused templates for musculoskeletal 
                trauma, sports injuries, spine disorders, infections, and more — aligned to your practice needs.
              </li>
              <li>
                <strong>Orthopedics EMR Billing:</strong> Streamlined billing with ICD-9/ICD-10 codes, eligibility 
                checks, integration with EMR, error alerts, and complete back-office support.
              </li>
              <li>
                <strong>EMR Software Development:</strong> Custom-built solutions tailored to orthopedic 
                workflows, filling gaps left by generic tools with advanced features and flexibility.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The Orthopedics EMR Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Analyze your needs, challenges, and project scope.</li>
              <li><strong>EMR Planning & Prototyping:</strong> Design schemas and workflows customized to your practice.</li>
              <li><strong>Development:</strong> Build EMR systems that align with your SLA requirements and clinical goals.</li>
              <li><strong>Testing:</strong> Run performance and accuracy checks with real-time feedback loops.</li>
              <li><strong>Reporting & Feedback:</strong> Deliver performance reports and incorporate client feedback for refinement.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Orthopedics EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> ISO 9001:2015 accredited with expertise in IT services, EMR tool management, and reporting.</li>
              <li><strong>Secure Data Management:</strong> ISO/IEC 27001:2022 certified with HIPAA-compliant data protocols.</li>
              <li><strong>Quality Guarantee:</strong> Dedicated QA teams ensure compliance with global medical standards and coding norms.</li>
              <li><strong>Scalable Services:</strong> Flexible solutions that adjust to your practice’s workload and growth.</li>
              <li><strong>Seamless Integration:</strong> Single-point access across hospitals, insurance, labs, pharmacies, and departments.</li>
              <li><strong>Cost-Effective:</strong> Outsourcing reduces EMR management costs by up to 50%.</li>
              <li><strong>Single Point of Contact:</strong> Dedicated project manager for smooth communication and delivery.</li>
              <li><strong>Experienced Team:</strong> Certified professionals with expertise across all major EMR platforms.</li>
              <li><strong>Robust Infrastructure:</strong> Advanced software and hardware resources to manage simple to complex EMR needs.</li>
              <li><strong>Global Delivery:</strong> 24/7 support with quick turnaround and reliable service worldwide.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Orthopedics EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              For over <strong>26+ years</strong>, Nimble Acuity has been helping orthopedic practitioners, 
              clinics, and hospitals with customized EMR solutions that improve care, reduce overheads, 
              and ensure compliance.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to streamline your orthopedics EMR operations with expert support.
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

export default OrthopedicsEMR;
