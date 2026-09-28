import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ShopifyDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Shopify Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We build digital bridges that connect your business to a world of opportunity with our advanced Shopify development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As a prominent Shopify service provider, **Nimble Acuity** leverages extensive expertise in a variety of technologies and tools, including Node.js, React, NextJs, GraphQL, and Liquid, to build robust and feature-rich Shopify apps and websites. We utilize a range of testing tools to ensure flawless functionality and use Shopify UI Kit for a beautiful, user-friendly front-end.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We excel in architecting personalized Shopify platforms, leveraging advanced technologies such as plugin integration and performance optimization. Our strategic methodology ensures your e-commerce solution is robust and aligns with your brand, driving visibility and revenue.
            </p>
          </div>

          {/* Shopify Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Shopify Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our comprehensive suite of Shopify services is designed to manage your project from concept to completion, covering every aspect of building and optimizing your online store. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom Store & Theme Development</h4>
                <p>We create intuitive, custom-built themes that are not only visually consistent with your brand but also optimized for performance and SEO compliance, ensuring an engaging storefront.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">App & API Development</h4>
                <p>We specialize in crafting intuitive Shopify apps and APIs to streamline operations and enhance your store's functionality, from custom apps that enrich the user interface to APIs that enable seamless data exchange.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migration & SEO Services</h4>
                <p>We provide secure migration services to ensure a seamless transition to Shopify without data loss or downtime. Our advanced SEO strategies drive organic traffic and improve search engine rankings, boosting conversions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Payment Gateway Integration</h4>
                <p>We expertly integrate secure payment gateways like PayPal, Stripe, and others to ensure safe and efficient transactions, providing a seamless checkout experience for your customers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                <p>Our comprehensive services include rigorous testing, timely upgrades, and proactive maintenance to ensure your Shopify store operates flawlessly and remains up-to-date and competitive.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Chatbot Development</h4>
                <p>We build intelligent, AI-powered chatbots that enhance customer service, answer queries, and provide personalized product recommendations, elevating the overall shopping experience.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you choose **Nimble Acuity**, you gain access to a pool of seasoned professionals who provide a strategic and technical edge to your e-commerce business.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Team:</strong> Our certified Shopify developers are experts in creating scalable, secure, and performance-oriented online stores.</li>
              <li><strong>Mobile Optimization:</strong> We ensure your Shopify store is optimized for mobile devices, providing a seamless shopping experience for customers on the go.</li>
              <li><strong>Scalability & Flexibility:</strong> Our development approach allows your store to easily expand to meet increased demand and adapt to your evolving business needs.</li>
              <li><strong>Flexible Pricing:</strong> We offer flexible pricing models—hourly, fixed-price, or hybrid—to best suit your project scope and budget.</li>
              <li><strong>Proven Process:</strong> We follow a systematic, step-by-step approach to ensure your store is robust, user-friendly, and high-performing, with a swift turnaround time.</li>
              <li><strong>Dedicated Project Managers:</strong> You'll have a single point of contact who ensures smooth coordination, timely delivery, and prompt communication throughout the development process.</li>
              <li><strong>Superior Security:</strong> We prioritize secure payment integrations and employ version control tools like Git to ensure the continuous and safe operation of your store.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              From initial development stages to continuous monitoring and updates, we provide comprehensive Shopify e-commerce development services to help your business thrive. Schedule a meeting with us today to orchestrate your e-commerce success.
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

export default ShopifyDevelopment;