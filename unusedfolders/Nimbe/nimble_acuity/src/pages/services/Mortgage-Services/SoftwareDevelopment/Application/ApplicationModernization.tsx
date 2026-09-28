import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ApplicationModernization: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Application Modernization Services
            </h2>
            <p className="text-lg text-gray-600">
              Give your old business apps a touch of innovation and modern capabilities by outsourcing application modernization.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As applications age, they may need newer functionalities and enhancements because older platforms may feel sluggish and expensive to maintain. So if you feel your application needs unhindered digital transformation and efficiency, outsource application modernization services to **Nimble Acuity**. To become early adopters of change and be ahead of others, your legacy application modernization roles are best left to us. Our legacy software modernization services make your old software and apps feel new and relevant without altering its underlying functions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a top application modernization service provider driven by the passion to make applications more durable and scalable to enhance their lifecycle. We not only guarantee performance, but modernized front-end functions will woo more users to adopt your app or software. Our application modernization solutions are best if you value quality and affordability.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Application Modernization Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Nimble Acuity, we offer high-quality application modernization services to fix the deficiency in your app or software performance. We use the latest methodologies to optimize functionality, robustness, and security features that are an absolute necessity today.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Application Modernization Consulting:</strong> We thoroughly analyze your legacy application to discover deficiencies and help you fix the issue without an expensive overhaul.</li>
              <li><strong>Cloud Migration:</strong> We help you with app re-platforming, re-hosting, and re-architecting as you scale legacy applications and frameworks to the cloud.</li>
              <li><strong>Re-hosting of Applications:</strong> We make your legacy applications compatible with modern infrastructure like Azure and AWS without high re-hosting costs.</li>
              <li><strong>Re-platforming of Applications:</strong> We move the back-end of your applications to the Cloud and provide code upgrades, which brings you benefits like better fault tolerance and performance.</li>
              <li><strong>Re-architecting of Applications:</strong> We re-architect your web services or microservices architecture so you can fully leverage the Cloud to boost app performance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Outsourcing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes Nimble Acuity one of the best application modernization companies? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> We offer a chance for businesses to modernize their apps without going overboard with spending.</li>
              <li><strong>High-quality Services:</strong> Quality is one of our success pillars, and we do what it takes to ensure quality in our workflow and implementation.</li>
              <li><strong>Rapid TAT:</strong> Our application modernization services are developed with speed and accuracy.</li>
              <li><strong>Scalable Solutions:</strong> The solutions we offer are scalable because we have the bandwidth to handle workloads on demand.</li>
              <li><strong>100% Data Security:</strong> The integrity of your data is uncompromised in our hands because we take great care to ensure data security.</li>
              <li><strong>Round-the-clock Support:</strong> We serve clients from all geographies to help them when they need our support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Modernize Your Applications?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we offer world-class application modernization services because our team of developers harnesses the best technology and infrastructure to create demonstrably robust results. From minor modifications to detailed redevelopments, we undertake complete application modernization roles.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Amassing over two decades of experience in software technologies, we are paving the way as a top application modernization service provider in the industry. Get in touch with us now to get a free quote.
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

export default ApplicationModernization;