import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const PatientEngagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Patient Engagement Services
            </h2>
            <p className="text-lg text-gray-600">
              Our patient engagement services improve patient experiences while lessening your backend workloads, such as contacting patients, ensuring follow-up, and much more, at rates starting at $1440/ FTE per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Tomorrow's healthcare is all about integrated patient engagement where patients control their care plan. At <strong>Nimble Acuity</strong>, we support this initiative by offering a continuum of patient engagement services with a personalized approach, including a patient portal solution, virtual consultation, and online appointment scheduling. This helps cut down the clutter and delays that are typical in standard patient services. Our approach involves using automation to establish contact with patients, so they are aware of their balances, scheduled appointments, and referral paperwork.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a top patient engagement services provider with over 26 years of experience. Our well-planned approach is known to save you time, effort, and money in a big way.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Patient Engagement Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              Being a top patient engagement services provider, we vastly improve patient experiences by reducing waiting times for consultations and delays in intervention. As part of our digital patient engagement, we offer the following services:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Professional Clinical Care:</strong> We offer intuitive solutions such as demography health surveys, EHR management, patient consultation, and mobile assistance so your clinical staff can continue offering better care with an optimized workflow.</li>
              <li><strong>Revenue Management:</strong> If your practice is suffering from financial challenges, we have you covered. Our team streamlines financial management by providing clearinghouse support and financial connectivity to ensure your revenue stream is consistent.</li>
              <li><strong>Patient Engagement:</strong> Staying in touch with patients greatly improves relations and increases their satisfaction with consultations and prescribed plans, which serves as a positive testimonial for future patients.</li>
              <li><strong>Demographic Health Analysis:</strong> If you want meaningful insights into your financial, clinical, and administrative data, our analytics teams can deliver top-notch data fetched from connected healthcare networks through surveys.</li>
              <li><strong>Healthcare Networking:</strong> Through connected health networks, we make information flow smoother between care providers and the clinical setup. Our cross-platform assistance helps achieve greater success by improving financial, clinical, and patient outcomes.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Patient Engagement Process We Follow
            </h3>
            <p className="text-gray-700 mb-6">
              By outsourcing patient engagement services, you are counting on one of the best patient engagement service providers to create a friendly path for customers. Our process is as follows:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-gray-700 font-medium">
              <li>We discuss the project scope and requirements with the client.</li>
              <li>We plan the patient engagement workflow and propose the plan along with resource requirements.</li>
              <li>After seeking approval, the project will begin in full swing.</li>
              <li>We identify the project team and assign responsibilities.</li>
              <li>The patient engagement team will begin contacting patients to commence services.</li>
              <li>Weekly/monthly reports will be submitted to the client.</li>
            </ol>
          </div>

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Healthcare Consulting Services</li>
              <li>Healthcare Analytics Services</li>
              <li>Medical Animation Services</li>
              <li>Outsource Clinical Services</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Patient Engagement Services from Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing patient engagement services to <strong>Nimble Acuity</strong> brings you benefits that other patient engagement companies can't match. Here are the rewards of working with us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Certified Patient Management Company:</strong> Nimble Acuity is a HIPAA and ISO 9001:2015 certified company that adheres to global standards of patient engagement.</li>
              <li><strong>Data Security:</strong> We are a cloud-based company, so all your data is managed securely to avoid the risk of loss or destruction.</li>
              <li><strong>High Accuracy and Quality Service:</strong> We always go the extra mile to gauge the satisfaction of your patients through surveys and questionnaires.</li>
              <li><strong>Pocket-friendly Pricing Options:</strong> Our affordable rates make our services more accessible. Simply tell us what you expect with your preferred budget, and we'll make it happen.</li>
              <li><strong>Modern Infrastructure:</strong> We have a durable infrastructure that our team relies on to fulfill service promises and quality.</li>
              <li><strong>Short Turnaround:</strong> We are consistent and agile in our work and have faced challenging situations to help our clients see the best results.</li>
              <li><strong>Scalability:</strong> Our patient engagement services can be easily scaled because we have the bandwidth to do so.</li>
              <li><strong>Experienced Team:</strong> We have expert teams of patient engagement agents, project managers, and IT personnel who are adept at automation and other latest adoptions in the patient engagement model.</li>
              <li><strong>Round-the-clock Availability:</strong> We can be contacted anytime, anywhere, as we have teams who work 24/7 to ensure high availability to resolve challenges.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Provided Pharmacy Insurance & Medical Insurance Eligibility Services to a Telemedicine Provider:</strong> We provided insurance eligibility verification to a Californian client, ensuring that the claims they received fulfilled the mandatory criteria.</li>
              <li><strong>Provided Charge and Patient Demographics Entry to a Georgian Client:</strong> We processed nearly 1200 claims in a month for a Georgian client, delivering solutions that were 98% accurate.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I wanted to inform you of what a great job Nimble Acuity is doing for our firm. Vinoth Kumar and his team have done amazing work and are extremely reliable. We consider Nimble Acuity a part of our strategic plans moving forward."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Managing Director, Medical Billing Company, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Patient Engagement Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              If you are looking for options to outsource patient engagement to a highly capable healthcare BPO, then <strong>Nimble Acuity</strong> makes a perfect choice. We have over 26 years of experience in patient engagement services combined with better quality control performance to help us achieve better results for you. We collaborate to capture your business requirements and deliver exceptional results whenever and wherever possible.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us now if you require patient engagement services, and get a fair estimate of the project within 24 hours.
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

export default PatientEngagementServices;