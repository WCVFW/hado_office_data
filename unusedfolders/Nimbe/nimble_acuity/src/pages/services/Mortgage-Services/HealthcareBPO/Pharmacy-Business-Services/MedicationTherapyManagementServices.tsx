import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const MedicationTherapyManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Medication Therapy Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline your medication management process and overcome related problems by choosing our high-quality services from <strong>Nimble Acuity</strong>.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your firm looking to streamline your medication therapy processes and overcome the challenges? Are you on the lookout for skilled resources who can cater to all your requirements? The best option is to outsource to an experienced and skilled medication therapy management service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Nimble Acuity</strong> is a medication therapy management company that can cater to all your needs with ease. We have some of the most experienced and skilled medication therapy management experts on board who utilize the latest tools and technologies to deliver top-notch services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Medication Therapy Management Services We Offer
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Pharmacotherapy Consultation:</strong> We provide clients with high-quality pharmacotherapy consultation services using the latest tools and methodologies.</li>
              <li><strong>Disease Management Services:</strong> Our team helps with high-quality and error-free disease management services, leveraging the latest software and tools.</li>
              <li><strong>Anticoagulation Management:</strong> We provide superior-quality and accurate anticoagulation management services that are tailor-made to suit your business requirements.</li>
              <li><strong>Medication Safety Surveillance Services:</strong> Our experts have the skills and expertise to provide accurate medication safety surveillance services tailored to each customer's unique business needs.</li>
            </ul>
          </div>
          
          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Pharmacy Management Services:</strong> Get end-to-end pharmacy management solutions to streamline your operations.</li>
              <li><strong>Pharmacy Billing Services:</strong> Ensure accurate and timely pharmacy billing and claims processing.</li>
              <li><strong>Mail Order Pharmacy Services:</strong> Optimize your mail order operations for efficiency and speed.</li>
              <li><strong>Pharmacy Document Management Services:</strong> Securely manage all your pharmacy-related documents online.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Medication Therapy Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our flexible and cost-effective pricing plans fit your budget and business requirements perfectly.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified company, we ensure your data is completely safe.</li>
              <li><strong>HIPAA-Compliant Services:</strong> We sign a HIPAA agreement for every project to ensure all patient-related data is secure.</li>
              <li><strong>Superior Quality:</strong> As an ISO-certified firm, we deliver top-notch and error-free services.</li>
              <li><strong>Dedicated Manager:</strong> You'll have a single point of contact to manage all your needs.</li>
              <li><strong>Experienced Team:</strong> Our team consists of highly skilled and experienced medication therapy management specialists.</li>
              <li><strong>24/7 Customer Support:</strong> Our teams are available around the clock to resolve any issues you may have.</li>
              <li><strong>Highly Scalable Services:</strong> We have the bandwidth and resources to scale up services as needed.</li>
              <li><strong>Short Turnaround Time:</strong> Our multiple delivery locations allow us to deliver services quickly.</li>
            </ul>
          </div>

          {/* Client Success Stories */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Client Success Stories
            </h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Charge and Demographics Entry:</strong> We provided a reliable and cost-effective demographics entry service to a leading ambulance billing company.</li>
              <li><strong>Research and DME Billing Services:</strong> We helped a Tustin-based client with cost-effective DME billing services.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "So happy with the personalized service we receive from you and the team. Such a unique thing these days in Radiology, definitely something to treasure!!! Makes my job so, so much easier. Always grateful!"
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — Radiologist, Leading Radiology Centre
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Medication Therapy Management Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>Nimble Acuity</strong> is a leading provider of medication therapy management and other pharmacy business services. We have experienced and skilled experts on board who utilize the latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you're looking for an efficient and reliable medication therapy management service provider, you have come to the right place. Get in touch with us today!
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

export default MedicationTherapyManagementServices;