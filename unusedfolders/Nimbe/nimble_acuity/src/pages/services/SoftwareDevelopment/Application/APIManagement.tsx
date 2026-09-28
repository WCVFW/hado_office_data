import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const APIManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              API Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose our API management services and enable the creation of integration tools to drive adoption, integrate with partners, and scale internal operations.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With the growing API economy comes the challenge of creating robust business services. Companies are striving to expand their activities to digital platforms to create new channels, find new customers, and deepen cooperation with existing ones. APIs are not new but with the explosion of apps and experiences needed in the digital world and new customer-centric IT organizations, companies across all industries need better solutions to manage their API-driven businesses.
            </p>
            <p className="text-gray-700 leading-relaxed">
              API management is a way to create a consistent and modern API gateway for existing backend services. It helps organizations to publish APIs to external partners and internal developers to unlock the potential of their data and services. If you lack in-house experts or have low budgets to get high-quality work, then outsource API management services to an expert partner like **Nimble Acuity**. Nimble Acuity's API management provides an interface to your backend services and APIs to ensure that they are secure, monitored, maintained, documented, and published in the cloud.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              API Management Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              API management is how organizations manage users, monitor and analyze traffic, promote secure APIs, and more. A strong API strategy enables the creation of integration tools to drive adoption, integrate with partners, and scale internal operations.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom API Development:</strong> We specialize in developing APIs that are easy, well-documented, and reliable.</li>
              <li><strong>Seamless API Integration:</strong> We have developed API-driven integration platforms that are topped with our full-stack integration services to reduce integration costs and increase agility.</li>
              <li><strong>API Development Platforms:</strong> Nimble Acuity develops specialized APIs for old and new system applications.</li>
              <li><strong>API Testing Automation:</strong> Our services include the designing and configuration of API integration testing platforms to automatically validate UI, load, runtime, security, and more.</li>
              <li><strong>API Advisory Services:</strong> Our team of experts assesses, integrates, strategizes, designs, develops, implements, deploys, and operates your API vision.</li>
              <li><strong>Third-party API Integrations:</strong> We provide integration services and full support for third parties, ensuring proper performance and security for all connections.</li>
              <li><strong>Payment API Integration:</strong> We make the payment process more secure and reliable with our payment API management services.</li>
              <li><strong>API Library Development:</strong> We offer third-party integration services for social media network libraries and other platforms.</li>
              <li><strong>API Life Cycle Management:</strong> Our services cover all aspects of integrations and APIs to ensure a business-driven, agile, methodical, and organized approach.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsourcing the structure and implementation of APIs enables organizations to develop their software efficiently. If you don't have the staff to achieve these goals, it is best to outsource to an external API integration service like **Nimble Acuity**.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              As an API management services providing company, we provide you with a range of benefits including cost reduction, available expertise, data-driven solutions, improved customer service, end-to-end solutions, and increased speed.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default APIManagement;