import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const EradPacs: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              eRAD PACS System for Teleradiology
            </h2>
            <p className="text-lg text-gray-600">
              Implement and host eRAD as a powerful PACS platform to detect, read, and report patient cases from anywhere. Nimble Acuity provides expert support, hosting, and customization of eRAD to help radiologists and teleradiology providers streamline their workflow and ensure efficiency.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>eRAD</strong> is a robust, web-based PACS system that offers a flexible and configurable workflow for modern teleradiology environments. With over two decades of experience in diagnostic support, telemedicine, and teleradiology services, <strong>Nimble Acuity</strong> is your trusted partner to implement, host, and support the eRAD PACS system.
            </p>
          </div>

          {/* Key Features */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What to Expect from Nimble Acuity’s eRAD PACS System
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Integrated Extended Reporting:</strong> Built-in report editing, scrolling, dictation, and speech recognition without extra tools.</li>
              <li><strong>Easy Data Sharing:</strong> Secure uploads and multi-site collaboration for seamless consistency.</li>
              <li><strong>Fast Prefetching & Pre-caching:</strong> Strategy-based caching eliminates delays and improves efficiency.</li>
              <li><strong>3D Volume Rendering:</strong> Advanced visualization tools for accurate, high-quality diagnostics.</li>
              <li><strong>Zero Web Footprint:</strong> Browser-based access for mobile-friendly, secure reporting.</li>
              <li><strong>Event-driven Workflow:</strong> Automations with notifications, assignments, and peer sharing.</li>
              <li><strong>Integrated Mammography Module:</strong> Dedicated breast imaging tools within PACS, no external software required.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for eRAD PACS?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Models:</strong> Tailored packages based on location, turnaround, and project size.</li>
              <li><strong>ISO/IEC 27001:2022 Certified:</strong> Full adherence to ISMS regulations ensures data security.</li>
              <li><strong>HIPAA Compliant:</strong> Strict compliance to protect PHI with industry-best safeguards.</li>
              <li><strong>Modern Infrastructure:</strong> Advanced servers, secure VPNs, and 200% power backup.</li>
              <li><strong>24/7 Support:</strong> Always-available technical and operational assistance.</li>
              <li><strong>Expert Team:</strong> QA professionals and sub-specialty radiologists guiding your projects.</li>
              <li><strong>Scalable Solutions:</strong> Handle any volume or turnaround demands with ease.</li>
            </ul>
          </div>

          {/* Partner With Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              For over 20 years, <strong>Nimble Acuity</strong> has supported radiologists, hospitals, and clinics worldwide with diagnostic and teleradiology solutions. Our expertise with the eRAD PACS system helps you scale your reporting capabilities, maintain compliance, and improve patient outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8 font-medium">
              Join 1000+ global clients who trust us to optimize their radiology workflow with world-class infrastructure and a vast network of radiology consultants.
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Transform Your Teleradiology Workflow with eRAD PACS
            </h3>
            <p className="text-gray-700 mb-6">
              Experience seamless detection, reporting, and collaboration with Nimble Acuity’s fully managed eRAD PACS solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to explore how eRAD PACS can strengthen your diagnostic workflow? Let’s discuss your needs today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Now
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default EradPacs;
