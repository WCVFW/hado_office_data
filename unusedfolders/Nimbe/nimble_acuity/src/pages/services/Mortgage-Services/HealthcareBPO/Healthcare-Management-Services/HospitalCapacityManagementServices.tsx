import React from 'react';
import { Link } from "react-router-dom";
import HealthcareHeader from '@/pages/services/HealthcareBPO/HealthcareHeader';

const HospitalCapacityManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <HealthcareHeader />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hospital Capacity Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Empower your hospital staff and administrators with real-time asset tracking and hospital capacity planning resources.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you planning to empower your hospital administrators and staff with real-time asset tracking and capacity planning resources? Are you on the lookout for skilled resources who can cater to all your needs? Then, the best option for you would be to outsource hospital capacity management services to an experienced provider like <strong>nimble acuity</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are a leading hospital capacity management company that can cater to all your requirements with ease. We have some of the most talented resources on board who can deliver customized services. We leverage the latest hospital capacity management tools while delivering superior quality services to global clients.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Hospital Capacity Management Services We Offer
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> is one of the leading providers of hospital capacity management solutions with over two decades of experience. We have the skills to understand each customer's unique business requirements and provide them with services that are suited to their needs. Our key services include:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>Asset Management Services:</strong> We use the latest tools and technologies to provide top-notch asset management, helping you track and optimize resources.</li>
              <li><strong>Bed Management Services:</strong> We provide accurate and error-free bed management to help you manage patient flow and resource allocation efficiently.</li>
              <li><strong>Patient Care Solutions:</strong> Our team of skilled professionals can cater to all your patient care needs, offering tailor-made solutions to manage patient demand.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose nimble acuity for Hospital Capacity Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> We provide highly flexible and cost-effective pricing plans that fit your budget and business requirements.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified company, we ensure that all the data you share with us will be completely safe.</li>
              <li><strong>HIPAA Compliant Processes:</strong> We sign a HIPAA agreement with every client to ensure all patient-related data is secure.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> We have access to the latest tools, technologies, and infrastructure to deliver top-tier services.</li>
              <li><strong>High-Quality Services:</strong> Being an ISO-certified firm, you can rest assured that all our solutions are of the best quality and completely error-free.</li>
              <li><strong>Single Point of Contact (SPOC):</strong> We will assign a dedicated manager who will be your single point of contact for all your project requirements.</li>
              <li><strong>Skilled Team:</strong> Our team is comprised of highly skilled and experienced hospital capacity management experts.</li>
              <li><strong>Round-the-Clock Support:</strong> Our teams are available at all times to resolve any issues you may have during the project.</li>
              <li><strong>Easily Scalable Services:</strong> We have the bandwidth and resources to scale up services and team size as your needs evolve.</li>
              <li><strong>Quick Turnaround Time:</strong> With multiple delivery locations, we can provide the best quality services within a short timeframe.</li>
            </ul>
          </div>

          {/* Testimonials */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testimonials
            </h3>
            <blockquote className="border-l-4 border-[#006A7C] pl-4 italic text-gray-700">
              "I am very proud to announce that there was a 1% rejection rate, as well as a 1% denial rate for this practice as well as the highest collections this practice has ever had. Please extend my thanks to everyone involved."
            </blockquote>
            <p className="mt-2 font-medium text-gray-600">
              — RCM Account Manager, EMR System Provider, FL, USA
            </p>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Hospital Capacity Management Services to nimble acuity
            </h3>
            <p className="text-gray-700 mb-6">
              <strong>nimble acuity</strong> is a leading provider of hospital capacity management and other healthcare BPO services. We have some of the most experienced and skilled experts on board who can cater to all your requirements with ease, leveraging the latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and cost-effective hospital capacity management service provider, you have come to the right place. Get in touch with us today!
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

export default HospitalCapacityManagementServices;