import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const OpenCartDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              OpenCart Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get high-quality online shopping cart solutions with our OpenCart web development services, delivered by an experienced team of software developers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the importance of a powerful e-commerce platform for conquering the digital space. OpenCart, an open-source platform based on PHP and the MVC framework, is an ideal choice for your online store. With its extensive features, including over 30 payment gateways, 8 shipping methods, and more than 13,000 modules, it provides a comprehensive solution for a superlative shopping experience.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We help you leverage OpenCart's powerful store management capabilities and vast library of modules and themes to build a unique and scalable e-commerce site. Our goal is to ensure your online store stands out from the competition and helps you reach a global audience.
            </p>
          </div>

          {/* Our OpenCart Web Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our OpenCart Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">OpenCart Web Store Development</h4>
                <p>Our developers build highly robust, functional, and customer-focused OpenCart web stores that give your business a competitive edge.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Module Development & Customization</h4>
                <p>We develop custom modules to expand your store's functionality and offer bespoke customization services that allow you to create the unique shopping site you've always dreamed of.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">API Integration & Theme Design</h4>
                <p>We seamlessly integrate third-party APIs like payment gateways and design custom themes to enhance the look, feel, and functionality of your online store.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">OpenCart SEO Services</h4>
                <p>We perform comprehensive keyword research and page optimization to ensure your online store is search engine friendly and effectively reaches your target audience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migration & Maintenance</h4>
                <p>Our developers provide quick and secure migration services to help you seamlessly move to the OpenCart platform, along with ongoing maintenance and support to ensure your site functions flawlessly.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our services are highly cost-effective and flexible to suit a wide variety of budgets, providing you with significant value for your investment.</li>
              <li><strong>High-quality Services:</strong> We are an ISO-certified company, committed to providing the highest-quality OpenCart web development services using top-tier software developers.</li>
              <li><strong>Experienced Team:</strong> Our team consists of highly-experienced and talented developers who have successfully delivered outstanding value on numerous past projects.</li>
              <li><strong>Data Security:</strong> Your data is protected by our robust security measures. Our ISO/IEC 27001:2022 ISMS certification demonstrates our commitment to data security.</li>
              <li><strong>Single Point of Contact:</strong> We assign a dedicated project manager to your project, providing a single point of contact for all your queries and ensuring streamlined communication.</li>
              <li><strong>Easily Scalable:</strong> Our services are designed to be scalable, allowing us to increase or decrease the team size based on your evolving needs.</li>
              <li><strong>Short Turnaround Time:</strong> We understand the value of time and work diligently to shorten the time required to launch your online store.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing customized OpenCart web development solutions. Our cost-effective and flexible pricing, combined with our willingness to go the extra mile, guarantees value for your money.
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

export default OpenCartDevelopment;