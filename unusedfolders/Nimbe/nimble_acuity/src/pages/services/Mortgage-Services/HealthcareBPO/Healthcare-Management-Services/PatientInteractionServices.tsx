import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PatientInteractionServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Patient Interaction Services
            </h2>
            <p className="text-lg text-gray-600">
              Make patients feel valued and cared for with <strong>nimble acuity's</strong> professional patient interaction services, focusing on phone follow-ups and seamless communication.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Running a patient interaction team is essential for creating a great patient experience, but it can strain your ability to manage your practice. It's crucial to have professionals handling phone calls and surveys. That's why you should outsource patient interaction services to <strong>nimble acuity</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With 26+ years of experience, we provide a world-class digital experience with extra politeness and empathy. We have the infrastructure and skilled agents ready to take over your operations to call and gauge patient satisfaction and more.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Patient Interaction Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li>
                <strong>Post-Discharge Follow-up:</strong> We conduct post-discharge calls to ensure patient compliance and proactively identify complications before they become medical emergencies.
              </li>
              <li>
                <strong>Contacting Patients:</strong> We contact patients in the post-care stages to gauge their satisfaction and make them feel cared for, often leading to a high opinion of your practice.
              </li>
              <li>
                <strong>Promotion of Hospital Programs:</strong> We cross-sell relevant services to patients who are most likely to benefit, such as recommending pediatric programs to new mothers or self-monitoring programs to diabetics.
              </li>
              <li>
                <strong>Follow-up for Events:</strong> We contact attendees of your events to encourage participation in future activities, helping to improve attendance rates and showcase your capabilities.
              </li>
              <li>
                <strong>Measuring Customer Satisfaction:</strong> We conduct well-scripted calls to collect feedback on customer experience, helping you measure and improve service levels across your organization.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Patient Interaction Process We Follow
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>We discuss project challenges and scope with clients to understand their requirements.</li>
              <li>We create a custom plan with the best strategy to address existing challenges.</li>
              <li>We propose the solution and await client feedback and approval.</li>
              <li>After project approval, we assemble and brief a dedicated team.</li>
              <li>Patient interaction services are carried out as per the SLA, and results are delivered without delay.</li>
              <li>Our QA teams monitor the entire process to ensure adherence to the SLA.</li>
              <li>Reports are created outlining the work and sent to the client for review.</li>
            </ol>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Certified Company:</strong> We are a HIPAA and ISO 9001:2015 certified company with strict adherence to international quality standards.
              </li>
              <li>
                <strong>Data Security:</strong> Your data is safe with us, as we use a secure Cloud infrastructure for all processes.
              </li>
              <li>
                <strong>High Quality:</strong> Ensuring 100% quality is our priority, and we take all necessary steps to bring satisfaction to your patients.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> Our service catalog is flexibly priced, allowing you to customize services to fit your budget.
              </li>
              <li>
                <strong>Modern Infrastructure:</strong> We have a powerful and modern infrastructure that maximizes efficiency and reduces overhead costs.
              </li>
              <li>
                <strong>Fast Turnaround:</strong> Our highly trained staff and automated tools ensure faster turnaround times.
              </li>
              <li>
                <strong>Scalability:</strong> Our services can be scaled to accommodate priority requests and greater challenges without a lapse in quality or speed.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team consists of experienced professionals at all levels, ensuring maximum service efficiency.
              </li>
              <li>
                <strong>Round-the-clock Availability:</strong> We are highly available, and you can contact us through any preferred channel to get an agent instantly.
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
                <strong>Insurance Eligibility Services:</strong> We provided insurance eligibility verification for a Californian client, ensuring their claims met the mandatory criteria.
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
              Outsource Patient Interaction Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              If you are looking to outsource patient interaction to a highly capable healthcare BPO, your search ends with <strong>nimble acuity</strong>. With over 26 years of experience and exceptional quality control, we collaborate with you to understand your requirements and deliver outstanding results.
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

export default PatientInteractionServices;