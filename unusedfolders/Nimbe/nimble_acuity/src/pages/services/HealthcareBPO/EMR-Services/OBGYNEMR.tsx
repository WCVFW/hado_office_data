import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const OBGYNEMR: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              OB/GYN EMR Services
            </h2>
            <p className="text-lg text-gray-600">
              Enrich patient experience and care with top-notch <strong>OB/GYN EMR management services</strong>. 
              Get a multi-faceted solution for prenatal analysis, lab results/imaging integration, and patient management.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your team of nursing staff and obstetricians efficiently tracking patient cases with the right <strong>OB/GYN EMR services</strong>? 
              OB/GYN requires accurate electronic health record management to make informed decisions with ease. 
              <strong> Nimble Acuity</strong> has been providing end-to-end practice management solutions for over a decade to private practitioners, clinics, and hospitals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We help obstetricians and gynecologists achieve seamless efficiency by delivering <strong>OB/GYN EHR services</strong> 
              that are cost-effective, compliant, and customizable. From building custom software to tailoring existing EMR tools, 
              we design solutions that align with your practice requirements.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our OB/GYN EMR Services
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> has served hundreds of hospitals and healthcare institutions with expert EMR solutions. 
              Our certified professionals provide specialized OB/GYN services including:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Dashboard Development:</strong> Unified prenatal analysis, patient history, lab results, prescriptions, and imaging in one place.</li>
              <li><strong>Template Customization:</strong> Tailored EMR templates for OB/GYN functions like pregnancy tests, ACOG forms, exams, and procedures.</li>
              <li><strong>Prenatal Detail Management:</strong> Capture vitals such as blood pressure, fetal heart rate, and glucose levels during pregnancy.</li>
              <li><strong>Imaging Integration:</strong> Connect ultrasound and imaging devices for seamless storage, retrieval, and abnormality tracking.</li>
              <li><strong>Practice Management:</strong> Streamline billing, insurance, lab, pharmacy, compliance, reporting, and staff utilization.</li>
              <li><strong>Patient Portal Development:</strong> Enable online booking, refill requests, test results, educational material, and insurance details.</li>
              <li><strong>Tool Selection & Implementation:</strong> Guidance on EMR tool selection, transition, and integration with hospitals, labs, and insurers.</li>
              <li><strong>Custom EMR Software Development:</strong> End-to-end OB/GYN-specific EMR solutions built with 20+ years of software expertise.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our OB/GYN EMR Solutions Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Discovery:</strong> Collaborative assessment of your challenges and goals.</li>
              <li><strong>Planning & Design:</strong> Tailored strategies to maximize ROI and patient efficiency.</li>
              <li><strong>Development:</strong> Execution of OB/GYN EMR solutions using proven technologies.</li>
              <li><strong>Testing:</strong> Rigorous validation with multiple test suites and quality checks.</li>
              <li><strong>Reporting & Feedback:</strong> Analytics-driven reporting with continuous improvements.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for OB/GYN EMR Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Provider:</strong> ISO 9001:2015 accredited, offering a wide range of OB/GYN EMR services.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified, HIPAA-compliant, ensuring 100% confidentiality.</li>
              <li><strong>Quality & Compliance:</strong> Strict adherence to OB/GYN E&M codes, ICD-10, HIPAA, and global healthcare standards.</li>
              <li><strong>Fast Turnaround:</strong> Efficient delivery timelines backed by expert teams and technology.</li>
              <li><strong>Scalability:</strong> Flexible solutions designed to adapt to patient volume fluctuations.</li>
              <li><strong>Cost Savings:</strong> Reduce EMR and practice management costs by up to 40%.</li>
              <li><strong>Dedicated Team:</strong> Experienced, certified professionals with project managers overseeing execution.</li>
              <li><strong>Advanced Infrastructure:</strong> Up-to-date hardware, software, and secure data sharing (SFTP, VPN).</li>
              <li><strong>24/7 Availability:</strong> Round-the-clock global delivery support with continuous coverage.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource OB/GYN EMR Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> is a trusted partner with 26+ years of experience in delivering customized, compliant, 
              and cost-effective <strong>OB/GYN EMR services</strong>. We empower practices with advanced workflow and electronic health record management.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> to discuss your OB/GYN EMR requirements and learn how we can help optimize your practice.
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

export default OBGYNEMR;
