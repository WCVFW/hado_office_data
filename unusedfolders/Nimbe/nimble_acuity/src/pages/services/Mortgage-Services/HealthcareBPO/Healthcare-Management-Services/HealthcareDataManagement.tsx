import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HealthcareDataManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Data Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Simplify your complex data management by improving accuracy and focusing on expanding your patient network. Partner with <strong>nimble acuity</strong> to turn raw data into actionable insights, with prices starting at $1280 per FTE per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Leveraging healthcare data for operational and clinical assistance is a vital strategy. Data governance is also imperative to meet regulatory requirements. At <strong>nimble acuity</strong>, we provide data management services that ensure the frictionless movement of your entire healthcare database. We leverage the latest data management tools and technologies to deliver the highest quality services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Healthcare Data Management Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Database Maintenance and Updates:</strong> We provide regular maintenance and updates for your healthcare database.</li>
              <li><strong>Data Cleansing and Verification:</strong> We ensure you have accurate and updated data from various disparate systems to make better decisions.</li>
              <li><strong>Vendor Neutral Archive (VNA):</strong> Our VNA model offers a single interface for multiple healthcare data platforms, consolidating different data types into a centralized repository.</li>
              <li><strong>Data Aggregation:</strong> We source, analyze, and summarize the latest updates from the healthcare industry to create a centralized data source.</li>
              <li><strong>EHR Integration:</strong> We integrate all patient online and offline reports, including Electronic Medical Records (EMR) and Electronic Health Records (EHR).</li>
              <li><strong>Survey Reports:</strong> We extract medical data from various survey outreach programs to generate customized reports on data compliance.</li>
              <li><strong>Cloud Flexibility:</strong> We offer flexible deployments from a small three-node configuration to thousands of nodes.</li>
              <li><strong>Rich Metadata Integrations:</strong> Our built-in metadata tagging features allow you to discover new insights and patterns in your health data.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Data Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-effective Pricing:</strong> Our services are affordable with flexible pricing plans for businesses of all sizes.</li>
              <li><strong>High Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified company, ensuring all your data is kept confidential.</li>
              <li><strong>HIPAA Compliance:</strong> Our data storage facilities fully comply with HIPAA rules and corporate regulatory laws.</li>
              <li><strong>Experienced Team:</strong> Our skilled data management experts can handle all your requirements with precision.</li>
              <li><strong>Robust Infrastructure:</strong> We have access to the latest data management tools and technologies to meet your needs on time.</li>
              <li><strong>Quick Turnaround Time:</strong> We operate through multiple delivery locations to ensure a rapid turnaround for your projects.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Patient Demographics Entry:</strong> We provided accurate and reliable patient demographics entry services for a Georgia-based healthcare provider, processing over 1,200 claims a month.</li>
              <li><strong>Medical Claims Processing:</strong> Our team processed over 17,000 medical claims a month for a Texas-based client, utilizing Kareo software to key in charge and demographic details.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I want to thank you for the professional way in which you are managing the project and meeting our deadlines."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — CEO, Medical Company, UK
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Data Management to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26+ years of experience, we provide reliable and trustworthy healthcare data management solutions with a unique approach. Our proven methodology and experienced team help you save resources and improve the accuracy of your healthcare data.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us today</strong> for a free quote and let us handle your data management with accuracy and efficiency.
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

export default HealthcareDataManagement;