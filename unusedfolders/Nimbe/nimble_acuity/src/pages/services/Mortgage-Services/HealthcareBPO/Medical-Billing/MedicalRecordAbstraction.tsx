import React from 'react';
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';
import { Link } from "react-router-dom";

const MedicalRecordAbstraction: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medical Record Abstraction Services: Accurate and Detailed Documentation
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with disorganized or inaccessible medical records? <strong>nimble acuity</strong> helps healthcare organizations digitize and manage records efficiently, providing accurate and compliant documentation while freeing up your staff to focus on patient care.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With over 6 years of experience, we provide world-class medical record abstraction services that optimize reporting, improve compliance, and support better patient outcomes. Our experts ensure your records are complete, accurate, and easily accessible.
            </p>
          </div>

          {/* Abstraction Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Abstraction Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Medical Document Indexing:</strong> Organize documents in your EMR system by patient, type, and date for efficient record-keeping.</li>
              <li><strong>Medical Record Abstracting:</strong> Extract vital patient information to enable providers to deliver accurate care.</li>
              <li><strong>Referral Reviewing:</strong> Review and close referrals issued by providers, ensuring all orders are completed on time.</li>
            </ul>
          </div>

          {/* Streamlined Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Engage:</strong> Analyze requirements and create a scalable abstraction workflow based on patient volume.</li>
              <li><strong>Analyze:</strong> Consolidate data from multiple systems to prioritize work efficiently.</li>
              <li><strong>Plan:</strong> Develop a strategy to organize and integrate data into your EMR system.</li>
              <li><strong>Train:</strong> Ensure our team is fully trained to meet your standards for accuracy and compliance.</li>
              <li><strong>Report:</strong> Deliver detailed progress and abstraction reports to keep you informed.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>High Data Security:</strong> Strict protocols and NDAs ensure your information remains safe and confidential.</li>
              <li><strong>Affordable Pricing:</strong> Cost-effective services that reduce operational costs while improving data quality.</li>
              <li><strong>Quality Assurance:</strong> ISO 9001:2015 certified with rigorous quality checks at every stage.</li>
              <li><strong>High Accuracy:</strong> Trained staff ensures precise, consistent abstraction results.</li>
              <li><strong>Transparency & Communication:</strong> Regular progress, quality, and status reports with quick query resolution.</li>
              <li><strong>Experienced & Dedicated Staff:</strong> Registered healthcare practitioners and certified coders work efficiently on your records.</li>
              <li><strong>Scalable Services:</strong> Easily handle increases in record volume with our advanced infrastructure.</li>
              <li><strong>Latest Technology:</strong> State-of-the-art tools enable fast, accurate abstraction with minimal errors.</li>
              <li><strong>24/7 Customer Support:</strong> Dedicated project team available round-the-clock to assist you.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Medical Records?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with <strong>nimble acuity</strong> to transform your paper documents into accurate, electronic records that enhance patient care and compliance.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for a free consultation and see how our medical record abstraction services can optimize your operations.
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

export default MedicalRecordAbstraction;
