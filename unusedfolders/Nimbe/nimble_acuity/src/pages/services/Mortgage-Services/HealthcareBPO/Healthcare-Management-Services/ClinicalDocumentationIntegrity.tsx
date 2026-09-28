import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const ClinicalDocumentationIntegrity: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Clinical Documentation Integrity Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve revenue collections by tracking all due payments and checking the accuracy of reports and claims with <strong>nimble acuity</strong>. Our services start at rates as low as $4 per read.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Clinical documentation integrity is essential for small practices, hospitals, and care facilities to capture a complete and accurate picture of patient care. At <strong>nimble acuity</strong>, we specialize in improving coding accuracy and enhancing your revenue cycle. With 26+ years of experience, our clinical documentation integrity specialists have the expert knowledge to adapt to your business and deliver exceptional outcomes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Clinical Documentation Integrity Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Improving Documentation:</strong> We introduce best practices to eliminate incomplete documents and ensure the presence of specific, necessary details.</li>
              <li><strong>Lowering Denials:</strong> We verify the completeness of clinical documentation before filing claims to ensure reports and diagnoses justify the care provided.</li>
              <li><strong>Physician Education:</strong> We compile insights on trends and present well-segmented records to support focused physician education.</li>
              <li><strong>Analyzing and Stabilizing CMI:</strong> We validate query responses and provide timely physician education to boost quality scores and improve overall credibility.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Clinical Documentation Integrity Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Project Scoping:</strong> We discuss the project scope and requirements with you.</li>
              <li><strong>Workflow Planning:</strong> We plan the workflow and submit a detailed proposal.</li>
              <li><strong>Team Assignment:</strong> Upon client approval, a dedicated clinical documentation integrity expert is assigned to your project.</li>
              <li><strong>Team Briefing:</strong> The project team is selected and briefed on the project details.</li>
              <li><strong>Service Commencement:</strong> The clinical documentation integrity team begins the work.</li>
              <li><strong>Reporting:</strong> We provide you with weekly and monthly reports on service highlights and progress.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for CDI Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Company:</strong> We are an ISO 9001:2015 certified company that adheres to all quality standards.</li>
              <li><strong>Data Security:</strong> Your data is kept completely safe and confidential with our robust infrastructure.</li>
              <li><strong>High Accuracy:</strong> We deliver results with the highest accuracy and quality.</li>
              <li><strong>Cost-effective:</strong> Our services are affordably priced to suit all budgets.</li>
              <li><strong>Modern Infrastructure:</strong> We have a comprehensive, modern infrastructure capable of handling projects of any complexity.</li>
              <li><strong>Scalability:</strong> Our services can be easily scaled to meet your business needs without disrupting your workflow.</li>
              <li><strong>Experienced Team:</strong> Our dynamic team has rich experience in a wide range of clinical documentation integrity services.</li>
              <li><strong>24/7 Availability:</strong> We are available around the clock to assist you via phone, email, and web chat.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Insurance Eligibility Services:</strong> We provided accurate pharmacy and medical insurance eligibility services to a Californian telemedicine provider.</li>
              <li><strong>Charge & Patient Demographics Entry:</strong> We processed nearly 1,200 claims a month for a Georgian client with 98% accuracy.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to inform you of what a great job nimble acuity is doing for our firm. Vinoth Kumar and his team have done amazing work and are extremely reliable. We consider nimble acuity a part of our strategic plans moving forward. Initially, we needed to get a feel of your services and expertise to move forward on other enterprise accounts, and now we have the confidence in doing so. Thank you for all the help over the year!"
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Clinical Documentation Integrity Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              With over 26+ years of experience, we provide exceptional clinical documentation integrity services with superb quality control. We'll collaborate to interpret your business needs and deliver outstanding results.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us now</strong> to get a fair estimate for your project within 24 hours.
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

export default ClinicalDocumentationIntegrity;