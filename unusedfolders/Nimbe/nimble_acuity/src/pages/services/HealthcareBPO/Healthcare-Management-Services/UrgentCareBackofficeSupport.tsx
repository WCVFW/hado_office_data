import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const UrgentCareBackofficeSupport: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Healthcare Back-office Support Services for Urgent Care Centers
            </h2>
            <p className="text-lg text-gray-600">
              Is the administrative operation at your urgent care facility in disorder? We can streamline your entire administrative functions by improving revenue cycle management, billing & coding, and other operations.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is one of the leading providers of healthcare back-office support services for urgent care centers. We have more than 300 AAPC-certified medical billing and coding experts with extensive experience in providing these services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Healthcare Back-office Support Services
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Revenue Cycle Management (RCM):</strong> A streamlined RCM process is crucial for a positive cash flow. We can help you organize your back-office functions to improve payoffs.</li>
              <li><strong>Medical Billing:</strong> Our experts abide by all urgent care billing rules to cut your costs by up to 40% and pursue payers for pending claims and denials.</li>
              <li><strong>Medical Coding:</strong> We have a team of medical coders who are experts in using standard codes (ICD-9-CM, ICD-10-CM, HCPCS, CPT) for medical services and procedures.</li>
              <li><strong>Medical Claims Processing:</strong> We provide a plethora of services, including patient demographic entry, claim adjudication, and follow-up, to reduce rejected/denied claims.</li>
              <li><strong>Account Receivables Management & Follow-up:</strong> Our AAPC-certified AR specialists are experts in collections, AR calling, and denial analysis to improve your clean/claim rate.</li>
              <li><strong>Denial Management:</strong> We re-submit denied claims and use the latest tools to manage workflows and maximize cash flow.</li>
              <li><strong>Insurance Verification:</strong> Our staff is updated on all industry developments to verify benefits, deductibles, co-pays, and more.</li>
              <li><strong>Medical Transcription:</strong> We have an excellent team of transcriptionists who accurately transcribe and share final reports for various medical documents.</li>
              <li><strong>Medical Records Indexing:</strong> Our specialists index, scan, and archive all types of medical records to help you unclutter your center.</li>
              <li><strong>Healthcare Analytics:</strong> We provide solutions like predictive analytics and business intelligence to give you real-time insights into your facility's operations.</li>
              <li><strong>Health Information Management (HIM):</strong> We can establish HIM systems at your facility, allowing doctors to access real-time and accurate data on any device.</li>
              <li><strong>Healthcare Consulting:</strong> Our consultants assist in setting up better operation systems, providing expert advice on transcription, data security, and claim processing.</li>
              <li><strong>Healthcare IT:</strong> We provide scalable IT solutions, helping you set up the best systems and tools, or update and migrate your existing data.</li>
              <li><strong>Healthcare Data Entry Services:</strong> We offer a perfect combination of executives and technology to provide data entry services for your medical data.</li>
            </ul>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Healthcare Support Services You May Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Medical Billing & Coding</li>
              <li>Medical Transcription</li>
              <li>Claims Adjudication</li>
              <li>Back-office Support for Physicians</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Urgent Care Back-office Support?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>HIPAA Compliance:</strong> Our ISO 9001:2000 certification ensures we adhere to HIPAA guidelines, securing your data with robust systems and protocols.</li>
              <li><strong>100% Information Security:</strong> As an ISO/IEC 27001:2022 certified company, we have the necessary infrastructure to protect your medical records.</li>
              <li><strong>Vast Experience:</strong> We have over two decades of experience in the sector, with a team of over 300 experts and 100+ man-years of management experience.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> Our offices are equipped with sophisticated tools, firewalls, and 200% power backup to provide exceptional services.</li>
              <li><strong>Multiple Global Delivery Centers:</strong> Our 10+ global centers allow us to provide quick deliverables at highly affordable prices.</li>
              <li><strong>24/7 Availability:</strong> Our team is available 24/7 to resolve your queries at any time.</li>
              <li><strong>Scalability:</strong> We possess the resources to scale up services at any time, giving you a competitive edge.</li>
              <li><strong>One-point Contact:</strong> We assign a dedicated resource to each client to provide consistent updates and support.</li>
              <li><strong>Quick Turnaround:</strong> Our experience and abundant resources allow us to provide the best turnaround time.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Full Service Billing for an Urgent Care Practice:</strong> We helped a client reduce their AR days from 34 to 23 and bolstered collections from 53% to 61%.</li>
              <li><strong>Full Service Billing using Medisoft Software:</strong> We provided a leading medical practice organization with high-quality, quick, and reliable services.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to inform you of what a great job Nimble Acuity is doing for our firm. Vinoth Kumar and his team have done amazing work and are extremely reliable. We definitely consider Nimble Acuity a part of our strategic plans moving forward."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Healthcare Back-office Support to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> is a leading provider of healthcare back-office support for urgent care centers, with extensive expertise in Medical Billing, RCM, Denial Management, and more. Our team can improve your facility's cash flow by organizing your back-office functions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Partner with us to boost your urgent care center's productivity, ROI, and staff utilization through streamlined administrative operations.
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

export default UrgentCareBackofficeSupport;