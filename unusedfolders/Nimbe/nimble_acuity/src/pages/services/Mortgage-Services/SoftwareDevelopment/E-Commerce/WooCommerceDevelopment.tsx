import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WooCommerceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              WooCommerce Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Revamp your online retail business and convert website traffic into high-paying leads.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your existing e-commerce website not generating the required traffic and potential leads? Are you looking for ways to revamp your online retail business? Then, the best step is to outsource WooCommerce development services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading WooCommerce development company that can cater to all your e-commerce website development needs with ease. We have some of the most skilled and experienced WooCommerce developers on board who leverage the latest tools and plugins while delivering top-notch services.
            </p>
          </div>

          {/* WooCommerce Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              WooCommerce Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a leading provider of WooCommerce development services to global clients for a long time. We understand each client's unique requirements and provide services that align perfectly with their business needs. Our key services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">WooCommerce Customization</h4>
                <p>We have the required skills and expertise to provide clients with all types of customizations for their e-commerce website using the WooCommerce plugin, from simple to multiple catalogs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Theme/Template Development</h4>
                <p>Developing themes or templates for your website can be a time-consuming process. Our team of developers can help you with customized and trending themes that will perfectly suit your customer's demands.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Store Optimization</h4>
                <p>As your product count increases, so can your page load times. We can help you with the right kind of store optimization to ensure faster server response and page load speeds, providing a better customer experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                <p>We continue to support and maintain the WooCommerce website even after deployment. We conduct regular quality checks and resolve any issues that may arise, ensuring a smooth experience for your customers.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us for WooCommerce Development Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing WooCommerce development to **Nimble Acuity** gives you access to a series of benefits. Some of the major factors for choosing us are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Packages:</strong> We offer the most cost-effective and flexible pricing options that will align with your business requirements and budget.</li>
              <li><strong>Data Security:</strong> Being an ISO/IEC 27001:2022 ISMS certified firm, you can rest assured that all your business data is kept safe and confidential.</li>
              <li><strong>Error-free Services:</strong> As an ISO certified firm, we ensure that all the WooCommerce development services we deliver are of the best quality and are free of errors.</li>
              <li><strong>Skilled WooCommerce Experts:</strong> We have some of the most qualified and certified experts on board who can deliver high-quality services in a hassle-free manner.</li>
              <li><strong>Single Point of Contact:</strong> We will assign a dedicated manager to you who will be the SPOC for all your requirements.</li>
              <li><strong>Easily Scalable Services:</strong> Our team has the required skills and bandwidth to scale up the team size and service requirements as and when you need it.</li>
              <li><strong>Best Infrastructure:</strong> We have access to the latest WooCommerce versions and world-class office spaces to support your projects.</li>
              <li><strong>24/7 Support:</strong> Our teams are always available via email or phone to address your issues and provide timely assistance.</li>
              <li><strong>Quick Turnaround Time:</strong> Our team operates through delivery locations in different time zones, allowing us to deliver the best quality services within a quick time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Boost Your Online Retail Business?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality WooCommerce development services and a plethora of other software development services to global clients. We have some of the most experienced and skilled WooCommerce developers on board who can take care of all your requirements in a hassle-free manner. We leverage the power of the latest tools and software while delivering top-notch services.
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

export default WooCommerceDevelopment;