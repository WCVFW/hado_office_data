import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ThreeDCartDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              3dcart Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage the power of the latest e-commerce marketing tools and build an effective online store.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to build a high-quality and well-ranked e-commerce website for your business? Are you on the lookout for skilled and experienced 3dcart experts who can cater to all your needs? Then, the best option for you would be to outsource 3dcart development services to an experienced and skilled 3dcart development service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such 3dcart development service providing company that can take care of all your e-commerce store needs. We have some of the most experienced and skilled 3dcart developers who can cater to all your needs. We leverage the latest e-commerce marketing tools and technologies while delivering top-notch services to clients.
            </p>
          </div>

          {/* 3dcart Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              3dcart Development Services We Offer
            </h3>
            <p className="text-700 leading-relaxed mb-6">
              **Nimble Acuity** is one of the leading providers of 3dcart development services to clients around the world. We understand each client's unique business requirements and provide them with customized solutions within a quick time. Some of the key services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom 3dcart Development</h4>
                <p>We have the required skills and expertise to provide clients with high quality and customized 3dcart development services tailored to their unique business needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">3dcart UI/UX Design</h4>
                <p>We leverage the latest tools and technologies to provide clients with error-free and high-quality 3dcart design services. Our team of skilled UI/UX designers can cater to all your business needs with ease.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Theme Design & Integration</h4>
                <p>Our skilled 3dcart developers are experienced in providing the best quality 3dcart theme design and integration services. We leverage the latest tools and technologies to deliver the best quality services.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">3dcart Plugin Development</h4>
                <p>Our team has the expertise and skills to provide clients with the best quality 3dcart plugin development services. Our services can help you develop flexible and SEO-friendly websites that rank higher in search engines.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">3dcart Payment Gateway Integration</h4>
                <p>Our team at **Nimble Acuity** can help you with accurate and error-free payment gateway integration services within a quick time without any hassles, ensuring a smooth checkout process for your customers.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us for 3dcart Development Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing 3dcart development services to us gives you access to a series of benefits. Some of the key factors for you to choose us as your 3dcart development company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> We provide our clients with highly flexible and affordable pricing plans which will suit their business requirements and budget.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm. This ensures that all the data you share with us will be completely safe and secure.</li>
              <li><strong>Superior Quality Services:</strong> Being an ISO certified firm, you can be assured that all the 3dcart development services delivered by our team are of the best quality and error-free.</li>
              <li><strong>Talented 3dcart Developers:</strong> We have some of the most experienced and skilled 3dcart development experts on board who can take care of all your needs with ease.</li>
              <li><strong>Dedicated Manager:</strong> We will assign you a dedicated manager who will be the single point of contact for all your needs.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> We have access to the best and latest 3dcart development tools along with world-class office spaces.</li>
              <li><strong>Short Turnaround Time:</strong> We operate through several delivery locations spread across the globe, empowering us to deliver services within a quick time.</li>
              <li><strong>Easily Scalable Services:</strong> Our team has the bandwidth to scale up the service requirements and ramp up the project team size as and when the client demands it.</li>
              <li><strong>24/7 Customer Support:</strong> Our teams, including customer support, marketing, sales, and project management, are available at all times to answer your queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing the best quality 3dcart development services and a series of other custom software development services. We have some of the most experienced and skilled 3dcart experts on board who can take care of all your requirements in a hassle-free manner. We leverage the latest tools and technologies while delivering the best quality services within a quick time.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default ThreeDCartDevelopment;