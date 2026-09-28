import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const HederaDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hedera Hashgraph Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to decentralized apps that provide high throughput by choosing our services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for decentralized applications that provide the highest throughput and efficiency? Are you on the lookout for skilled and experienced Hedera Hashgraph development experts? Then, the best option for you would be to partner with an experienced and skilled **Hedera Hashgraph** development service provider.
            </p>
            <p className="text-700 leading-relaxed">
              **Nimble Acuity** is one such service providing company that can be your one-stop-shop for all your needs. Our team comprises some of the most experienced and skilled **Hedera Hashgraph** development experts who can cater to all your needs. We leverage the latest tools and technologies while delivering top-notch services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Hedera Hashgraph Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading provider of **Hedera Hashgraph** development services. We have the expertise to understand each customer's unique business needs and provide them with services that will suit their needs. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Hedera Hashgraph App Development:</strong> We have the required skills and infrastructure to provide clients with high-quality and accurate app development services.</li>
              <li><strong>Hedera Hashgraph Platform Integration:</strong> We make use of the latest tools and technologies while providing accurate and superior quality platform integration services.</li>
              <li><strong>Smart Contract Development:</strong> We have the required expertise to run smart contracts on the Hedera Hashgraph public and private networks.</li>
              <li><strong>Hedera Hashgraph App Consulting:</strong> We have some of the most talented and skilled consultants on board who can cater to all your app consulting needs with ease.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnering with us can give you access to a gamut of benefits. Some of the key reasons for you to choose us as your **Hedera Hashgraph** development company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Options:</strong> We provide highly flexible and cost-effective pricing plans that will suit your business requirements and budget well.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, you can rest assured that all data shared with us is completely secure.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO certified organization, which ensures that all services delivered by our team are of the best quality and error-free.</li>
              <li><strong>Single Point of Contact:</strong> When you partner with us, we will assign you a dedicated manager who will be your single point of contact for all your needs.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the best and latest development software and tools, along with world-class office spaces.</li>
              <li><strong>Talented Team:</strong> We have some of the most experienced and skilled experts on board who can take care of all your needs with ease.</li>
              <li><strong>24/7 Support:</strong> Our teams, including customer support, marketing, sales, and project management, are available at all times to answer your queries.</li>
              <li><strong>Easily Scalable Services:</strong> Our team has the bandwidth to scale up the service requirements and ramp up the project team size as and when the client demands it.</li>
              <li><strong>Quick Turnaround Time:</strong> We operate through several delivery locations, empowering us to deliver the best services within a quick time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Innovate with Hedera Hashgraph?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is one of the leading providers of **Hedera Hashgraph** development services and a plethora of other software technologies to clients around the world. We have some of the most skilled and talented experts on board who can cater to all your needs with ease. We leverage the latest development tools and technologies while delivering top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective **Hedera Hashgraph** development service provider? Then, you have come to the right place. Get in touch with us today!
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

export default HederaDevelopment;