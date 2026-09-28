import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import React from 'react';
import { Link } from "react-router-dom";

const StatReporting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              STAT Reporting and Critical Results Reporting
            </h2>
            <p className="text-lg text-gray-600">
              Quick, accurate, and reliable reporting for urgent medical emergencies — starting at just <strong>$4.5/read</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              When every second matters, <strong>Nimble Acuity</strong> is your trusted partner. Our team of board-certified radiologists provides STAT and critical results reporting services for life-threatening emergencies and urgent medical cases. 
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over two decades of expertise, we have supported hospitals, diagnostic centers, private practices, and individuals worldwide by delivering real-time, precise, and secure imaging interpretations across modalities.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our STAT & Critical Results Reporting Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>3D Image Generation:</strong> High-quality 3D reconstructions and anatomical models for accurate analysis.</li>
              <li><strong>STAT Reporting:</strong> Prioritized reads delivered within hours — or sooner in dire cases.</li>
              <li><strong>Critical Results Reporting:</strong> Immediate interpretations for trauma, accidents, and intensive injuries.</li>
              <li><strong>HIPAA Compliance:</strong> Full adherence to HIPAA for patient data protection and privacy.</li>
              <li><strong>eRAD PACS Integration:</strong> Fast data sharing and smooth workflow with built-in reporting and peer review.</li>
              <li><strong>Data Retention:</strong> Secure archiving via RIS for quick access to patient history and reports.</li>
              <li><strong>24/7 Emergency Support:</strong> Always available for physicians and individuals, across all time zones.</li>
              <li><strong>Quick Second Opinions:</strong> Rapid and clear resolutions when additional expert reviews are needed.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Reporting Process
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Scrutiny:</strong> We assess your emergency and reporting needs.</li>
              <li><strong>Reads & Interpretations:</strong> Expert radiologists interpret imaging scans with precision.</li>
              <li><strong>Deliberation:</strong> Our team discusses and defines the best course of action.</li>
              <li><strong>Verification:</strong> Reports undergo final review by senior radiologists.</li>
              <li><strong>Delivery:</strong> Confidential reports are securely delivered on time.</li>
              <li><strong>Follow-up:</strong> Feedback is collected to continuously refine our service.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Advanced Infrastructure:</strong> Cutting-edge systems deliver flawless scan quality.</li>
              <li><strong>Data Security:</strong> ISO/IEC 27001:2022 certified with strict privacy protocols.</li>
              <li><strong>Quality Assurance:</strong> Every report reviewed for accuracy and compliance with global standards.</li>
              <li><strong>Flexible Pricing:</strong> Cost-effective, pay-per-exam models tailored to your budget.</li>
              <li><strong>Expert Team:</strong> Highly skilled radiologists and technicians with decades of experience.</li>
              <li><strong>Customizable Solutions:</strong> Services adapted to your exact needs — large or small.</li>
              <li><strong>Rapid Turnaround:</strong> Timely delivery even in the most urgent situations.</li>
              <li><strong>Scalable Services:</strong> Ability to scale with your facility’s workload and case volume.</li>
              <li><strong>24/7 Global Support:</strong> Always accessible via phone, email, or chat — anytime, anywhere.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity for STAT Reporting
            </h3>
            <p className="text-gray-700 mb-6">
              Our STAT and critical results reporting services provide accurate, life-saving insights when you need them most. From emergency trauma cases to urgent second opinions, Nimble Acuity ensures timely and reliable radiology support.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today and receive a <strong>free quote within 24 hours</strong>.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default StatReporting;
