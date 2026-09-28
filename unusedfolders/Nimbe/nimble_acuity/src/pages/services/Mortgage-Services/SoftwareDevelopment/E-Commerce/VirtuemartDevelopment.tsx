import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const VirtuemartDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              VirtueMart Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide business-specific VirtueMart design and development services for all your e-commerce requirements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a powerful and customized e-commerce platform? VirtueMart is a remarkable open-source solution, and at **Nimble Acuity**, our prime intention is to leverage its exclusive features to create a remarkable e-commerce platform tailored to your specific needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** offers a plethora of services under one roof, from brand-specific template design to module development, payment gateway integration, and SEO optimization. When you partner with us for VirtueMart design and development, you get a turnkey solution for your e-commerce needs, enabling you to progress in your online venture.
            </p>
          </div>

          {/* Virtuemart Development Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              VirtueMart Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our wide range of VirtueMart development and customization services are designed to meet diverse needs and help you build a robust online store. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Customization and Development</h4>
                <p>We focus on your business genre and brand features, ensuring the uniqueness of our VirtueMart solutions helps you create the right brand image in the competitive market.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CMS Solution</h4>
                <p>As an extension of the Joomla Content Management System, VirtueMart has remarkable features. Our expertise will assist you in managing and maintaining your e-commerce content efficiently.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance and Migration</h4>
                <p>If you have an existing e-commerce platform, we can help you with maintenance, upgrades, and migration services, ensuring your portal is always up-to-date and performing optimally.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Payment Gateway Integration</h4>
                <p>As a leading VirtueMart development service provider, we integrate the most suitable and secure payment gateways to ensure a seamless and safe transaction process for your customers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Application Development</h4>
                <p>We also cover the development of customized cross-platform applications for your online venture, reducing your expenses and helping you maintain your business portal efficiently.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Plugin Development</h4>
                <p>Our team customizes and develops plugins to manage content and add new functionalities, enhancing your e-commerce store's features and overall website architecture.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choosing **Nimble Acuity** as your VirtueMart partner offers a multitude of advantages that will help you achieve your business goals faster and easier.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>One-Stop Solution:</strong> We cover all the domains of VirtueMart e-commerce development under a single roof, providing a complete and hassle-free solution.</li>
              <li><strong>Global Reach:</strong> Our services are designed to remove language barriers and understand the specific traits of a foreign audience, helping you reach a global market.</li>
              <li><strong>Understanding Business Needs:</strong> Our expertise allows us to deeply understand the unique necessities of businesses from various industrial genres, providing truly customized solutions.</li>
              <li><strong>Faster Turnaround Time:</strong> As a premier provider of VirtueMart development services, we help you prepare and launch your platform in a timely and efficient manner.</li>
              <li><strong>Cost-Effective:</strong> Our professional VirtueMart development services are offered at a competitive rate without compromising on quality.</li>
              <li><strong>ISO Certified Excellence:</strong> We are an ISO certified company, ensuring our services are held to the highest standards of quality and security.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is ready to give you the best VirtueMart platform in the digital world to showcase your products and services. With our variety of services, we can cover your diverse needs and pave the way to success for your business.
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

export default VirtuemartDevelopment;