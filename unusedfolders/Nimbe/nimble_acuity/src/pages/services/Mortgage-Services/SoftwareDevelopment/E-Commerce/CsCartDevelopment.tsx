import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CsCartDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              CS Cart Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Bank on expert CS Cart Developers to develop the best e-commerce websites.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              CS-cart is a well-developed and efficient online store platform to market e-commerce products. The biggest advantage of this platform is that it offers multi-vendor functionality which enables different vendors to manage and sell their respective products from a common web store.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has over 2 decades of experience in providing CS-cart development services to businesses. Our CS Cart team has met specialized needs such as theme integration, CS Cart add-on, payment gateway integration, customization, etc. Our team which primarily consists of PHP developers focuses on developing products keeping customer satisfaction in mind. Over the years we have completed over 100+ e-commerce store platforms using this technology.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive CS Cart Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a specialized CS cart development service provider, we provide the following services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom Cart Development Services:</strong> We develop diverse custom solutions to assist businesses to upgrade their stores as per changing e-commerce requirements. Our customization services include App-End Customization, e-commerce Shipping, Customized Payment Methods, theme development, and platform connector integration.</li>
              <li><strong>CS-Cart Theme Development:</strong> We help you develop appropriate, attractive, and appealing themes to suit your business needs. We ensure the themes are highly responsive and mobile and SEO-friendly.</li>
              <li><strong>CS-Cart Marketplace Development:</strong> We assist businesses in developing their online store presence. We have experience in building scalable solutions to meet the demands of a growing marketplace.</li>
              <li><strong>CS-Cart Security Development:</strong> We build and integrate the best security mechanisms in your CS Cart system to safeguard your store from incidents like data breaches and unauthorized access. We ensure both your and your customers' data is always safe.</li>
              <li><strong>CS-Cart Consultation Services:</strong> Our CS Cart experts have wide experience in design and development, which we leverage to offer consultation services on different aspects of development, upgradation, and maintenance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for CS Cart Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes **Nimble Acuity** one of the best CS Cart development companies? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Rates:</strong> We offer our clients services at very competitive pricing.</li>
              <li><strong>Expert CS Cart Developers:</strong> Our development services are driven by CS cart experts who have hands-on experience in delivering diverse marketplace solutions.</li>
              <li><strong>24/7 Service:</strong> After delivering the CS Cart solution, our developers are available to assist you with any sudden requirements.</li>
              <li><strong>100% Quality Work:</strong> We carry out complete quality checks to ensure the final output meets the accepted standards.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your CS Cart E-commerce Store?
            </h3>
            <p className="text-gray-700 mb-6">
              As an expert CS Cart development company, we have vast experience in using this platform to develop several e-commerce websites. Our developers have a perfect understanding of all the add-ons and modules of this platform and will leverage this knowledge to develop a highly functional marketplace store for your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for the best CS Cart development services, get in touch with our experts now to get a free quote.
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

export default CsCartDevelopment;