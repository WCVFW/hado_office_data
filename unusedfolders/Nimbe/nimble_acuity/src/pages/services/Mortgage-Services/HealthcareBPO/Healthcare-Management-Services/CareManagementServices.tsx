import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const CareManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Care Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Ease the workload of hospitals and practice management providers by engaging with their patients and managing treatment plans with <strong>nimble acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In a complex healthcare ecosystem, staff time is a critical resource. When resources are spent on time-consuming administrative tasks, it can hinder patient outcomes. Our care management services provide timely and preemptive intervention, working within communities to prevent health risks and suppress healthcare costs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>nimble acuity</strong> is a top care management service provider with over 26 years of experience. Our proactive and exclusive methods ensure that patients take control of their well-being through a well-planned approach. We collaborate with partners to free up your staff so they can focus on what matters most—patient care.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Care Management Services We Offer
            </h3>
            <p className="text-gray-700 mb-4">
              Our services have greatly benefited clinics, hospitals, and practice management organizations, as well as their patients. We offer:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Care Coordination:</strong> We work with your patients to help them follow their prescribed treatment plans, leading to faster recovery and a minimal risk of readmission due to non-compliance.
              </li>
              <li>
                <strong>30-day Readmission Reduction:</strong> We offer month-long follow-up support to identify and mitigate socio-economic and other hindrances that could lead to readmission.
              </li>
              <li>
                <strong>Pregnancy Care Coordination:</strong> We provide educational, medical, and social support to pregnant women from the first trimester until six weeks after delivery to ensure a healthy and smooth process.
              </li>
              <li>
                <strong>Patient Visit Compliance:</strong> We educate patients on the importance of adhering to their treatment plans and follow up to ensure they are keeping their scheduled appointments with primary care or specialists.
              </li>
              <li>
                <strong>"No Call, No Show" Reduction:</strong> We follow up with patients who have scheduled appointments to ensure they stick to the schedule, helping to reduce staff frustration and damaged patient relationships.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Care Management Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>We discuss the project scope and requirements with the client.</li>
              <li>We plan the workflow and resources, then submit a proposal.</li>
              <li>After client approval, the project is green-lit and the team is briefed.</li>
              <li>The care management team commences its service.</li>
              <li>Weekly and monthly reports are provided to the client, highlighting achievements.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Company:</strong> We are a HIPAA and ISO 9001:2015 certified company that adheres to all global standards.
              </li>
              <li>
                <strong>Data Security:</strong> We take great care to protect your business data from external access.
              </li>
              <li>
                <strong>High Accuracy and Quality:</strong> We go the extra mile to gauge patient satisfaction through surveys and questionnaires.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> Our services are accessible to small and mid-sized organizations with a small budget.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> Our modern infrastructure is designed to handle high workloads and supports multiple teams simultaneously.
              </li>
              <li>
                <strong>Short Turnaround:</strong> We always ensure service delivery within the promised turnaround time.
              </li>
              <li>
                <strong>Scalability:</strong> Our services can be swiftly scaled to fit more resources, acting as an extension of your team.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our dynamic agents are well-acquainted with automation tools and communication methods to ensure the best patient experience.
              </li>
              <li>
                <strong>Round-the-clock Availability:</strong> We are available 24/7 to help patients from any geography get help in their language of choice.
              </li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Insurance Eligibility Services:</strong> We provided insurance eligibility verification to a Californian client, ensuring their claims fulfilled the mandatory criteria.
              </li>
              <li>
                <strong>Charge & Patient Demographics Entry:</strong> We processed nearly 1200 claims in a month for a Georgian client, delivering solutions that were 98% accurate.
              </li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to inform you of what a great job [nimble acuity] is doing for our firm. [The team has] done amazing work and are extremely reliable. We consider [nimble acuity] a part of our strategic plans moving forward. Initially, we needed to get a feel of your services and expertise to move forward on other enterprise accounts, and now we have the confidence in doing so. Thank you for all the help over the year!"
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Care Management Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              If you are looking for a highly capable healthcare BPO to outsource your care management, your search ends with <strong>nimble acuity</strong>. With over 26 years of experience and a commitment to quality control, we collaborate to capture your business requirements and deliver exceptional results.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              <strong>Contact us now</strong> to get a fair estimate of your project within 24 hours.
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

export default CareManagementServices;