import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudIntegrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Derive effective value from your data and applications faster by choosing our cloud integration services from our experienced team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to integrate cloud-to-cloud and hybrid applications for your business? Are you on the lookout for experienced and skilled cloud integration experts who can cater to your needs? Then, the best step for you would be to outsource cloud integration services to an experienced and skilled cloud integration service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such cloud integration service providing company that can take care of all your hybrid and cloud-to-cloud integration requirements. We have some of the most experienced and skilled cloud integration specialists who can help you with end-to-end integration. We leverage the latest tools and technologies while delivering the best services to clients.
            </p>
          </div>

          {/* Cloud Integration Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cloud Integration Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** has been a pioneer in providing quality cloud integration services to clients around the world. We understand each client's unique requirements and provide them with services that are customized to their business needs. Some of the key business cloud integration services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cloud Data Integration Services:</strong> We have the required skills and expertise to provide clients with accurate and flawless data integration services, leveraging the latest tools and technologies.</li>
              <li><strong>Application Integration:</strong> We can help clients to easily implement APIs and data-as-a-service as part of the event-driven architecture.</li>
              <li><strong>API Services:</strong> We have the expertise and bandwidth to help clients with simplifying data access with an API delivery platform.</li>
              <li><strong>Cloud Integration & Deployment:</strong> Our team can help you with all the necessary support during the integration and deployment phase, including public, private, and hybrid integrations.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>IT Risk & Security Management</li>
              <li>Remote Monitoring Services</li>
              <li>Digital Forensics Services</li>
              <li>Data Center Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity for Cloud Integration Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Cloud Integration Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing cloud integration services to **Nimble Acuity** can give you access to a gamut of benefits. Some of the major factors for you to choose us as your cloud integration service providing company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Options:</strong> We provide highly flexible and cost-effective pricing plans which will suit your business requirements and budget well.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, you can rest assured that all the data shared with us is completely secure.</li>
              <li><strong>High-quality Services:</strong> We are an ISO certified firm, which ensures all the cloud integration services delivered are of the best quality and error-free.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the best and latest cloud integration tools along with a world-class work environment.</li>
              <li><strong>Short Turnaround Time:</strong> We operate through several delivery locations spread across the globe, which empowers us to deliver services within a quick time.</li>
              <li><strong>Dedicated Manager:</strong> We will assign you a dedicated manager who will be the single point of contact for all your needs.</li>
              <li><strong>Round the Clock Support:</strong> Our teams are available at all times to answer your queries.</li>
              <li><strong>Scalable Services:</strong> Our team has the bandwidth to scale up the service requirements and ramp up the project team size as and when you demand it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Integrate Your Cloud?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been one of the leading providers of cloud integration services and a series of other infrastructure management services to global clients. We have some of the most experienced and skilled cloud integration experts on board who can take care of your requirements in a hassle-free manner. We leverage the latest tools and technologies while delivering the best quality services to clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective cloud integration service company? Then, you have come to the right place. Get in touch with us today!
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

export default CloudIntegrationServices;