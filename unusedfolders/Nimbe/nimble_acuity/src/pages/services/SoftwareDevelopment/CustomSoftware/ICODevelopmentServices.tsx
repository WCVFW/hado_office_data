import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ICODevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ICO Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We tackle some of the most pressing challenges in ICO development with token creation and white paper creation based on blockchain innovation.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you a company involved in blockchain? If so, you'll know the challenges in raising funds for your venture by selling crypto tokens for cash or other cryptocurrencies. Whatever your motivation, partner with Nimble Acuity for ICO development services and get the best support to launch your ICO, manage the admin panel, track transaction history, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a top ICO Development service provider that understands your business needs and provides a scalable and powerful solution to empower your digital business with a modern touch.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ICO Development Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Creation of Whitepapers</h4>
                <p className="text-gray-700">We have professionals who can author whitepapers explaining the ICO process in a well-worded document. Our technical publication teams are responsible for creating blockchain-based content without ambiguity, covering all relevant business cases.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Development of Tokens</h4>
                <p className="text-gray-700">As part of our ICO development efforts, we design and develop sophisticated models for crypto tokens so your models are well-prepared for ICO launch. Our token development is perceived as an extension of your blockchain-based business.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">ICO Marketing</h4>
                <p className="text-gray-700">We shape an exquisite marketing strategy for your blockchain business to help you realize opportunities. Our approach helps you get the best of the ICO world.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Building Communities</h4>
                <p className="text-gray-700">We have teams that are adept at building online communities within blockchain realms, powering them with the best solutions to set a firm foundation. This helps you pick up traffic and drive relations with followers.</p>
              </div>
            </div>
          </div>
          
          {/* Implementation Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ICO Development Process We Follow
            </h3>
            <ul className="list-decimal list-inside space-y-4 text-gray-700 md:columns-2">
              <li><strong>Strategy and Proposal:</strong> We discuss business challenges and requirements with the client to bring clarity to the project.</li>
              <li><strong>Designing:</strong> A mockup of the actual development is designed to give the client an overview of our approach and the expected outcome.</li>
              <li><strong>Client Approval:</strong> We collect feedback from the client and, if necessary, make corrections before development begins.</li>
              <li><strong>Development and Integration:</strong> The project team is briefed, and development commences in full swing.</li>
              <li><strong>Quality Check:</strong> After ICO development, we test the implementation to check functionality and every other critical aspect to ensure the development is clean.</li>
              <li><strong>Go-live:</strong> We provide all the support necessary to make the project live.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for ICO Development Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our ICO development services are offered at rates that will help you save thousands during the project tenure.</li>
              <li><strong>High-quality Services:</strong> We have high-quality workflows that ensure you receive nothing short of the best.</li>
              <li><strong>Rapid TAT:</strong> We are always punctual and know how to keep our promises of speedy service.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions are scalable if you need more bandwidth to keep up with business challenges and delivery dates.</li>
              <li><strong>ISO Certified Provider:</strong> As a trusted provider, we are an ISO 9001:2015 certified company.</li>
              <li><strong>100% Data Security:</strong> We have a robust security configuration to protect your business data from external influence.</li>
              <li><strong>Round-the-clock Support:</strong> Our support channels are operational every day of the year to help you access teams that are enthusiastic about resolving your concerns.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your ICO?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity offers superb ICO development services handled by trained professionals adept at the best technology available within our facility. We capture client needs through careful assessment and carry out development as planned. With years of experience in software technologies, we are a leading ICO development service provider in the industry.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To know more about our ICO development services, get in touch with us now. We guarantee to provide a quick quote.
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

export default ICODevelopmentServices;