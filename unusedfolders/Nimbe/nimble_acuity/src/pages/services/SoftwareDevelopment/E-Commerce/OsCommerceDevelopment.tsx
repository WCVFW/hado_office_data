import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const OsCommerceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              OsCommerce Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage the features of OsCommerce to set up and manage your online business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              When developing, setting up, and managing your online retail business, it's wise to choose software that's a complete package with features to handle various functions. **OsCommerce** is one of the most popular platforms for online business setup and management. For expert solutions, partnering with a professional OsCommerce development company like **Nimble Acuity** can be immensely useful.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading OsCommerce design and development firm with proven experience collaborating with clients worldwide. No matter the size and complexity of your business, we can help set up a website that allows you to manage all your online business operations seamlessly.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              OsCommerce Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a range of result-oriented and highly customized OsCommerce development solutions, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom Modules Development:</strong> We create customized modules that align with your online store requirements, whether you're building a new store from scratch or upgrading an existing one.</li>
              <li><strong>Extension or Plugin Development:</strong> We can help you create customized plugins and extensions to enhance your website's functionality based on your unique needs.</li>
              <li><strong>Website Integration:</strong> Our team of OsCommerce developers can help integrate your applications with your existing OsCommerce website to make your day-to-day business operations more effortless.</li>
              <li><strong>Application Development:</strong> With a complete team of coders, developers, and other experts, we can create simple or complex OsCommerce applications tailored to your specific business requirements.</li>
              <li><strong>Upgradation and Migration:</strong> We can help you make a seamless migration to OsCommerce or upgrade your website to the latest, feature-rich version.</li>
              <li><strong>Theme Development:</strong> You can count on us to develop customized OsCommerce themes or modify existing ones to improve the user experience and make your website easy to navigate.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for OsCommerce Design and Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing OsCommerce development services to us provides you with many advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Rates:</strong> We deliver premium quality services at highly affordable and flexible rates.</li>
              <li><strong>Data Security:</strong> We are an ISO-certified company and guarantee complete data security.</li>
              <li><strong>Quick Turnaround Time (TAT):</strong> Our OsCommerce services are scalable and have quick turnaround times to meet your deadlines.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Online Business?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been offering OsCommerce development services to its global clientele for over a decade. When you work with us, we guarantee complete transparency, data security, and result-oriented solutions. Our team of experts has years of experience and takes your unique requirements into consideration to develop customized OsCommerce websites.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With this degree of expertise, we can assure you that our OsCommerce services will be a game-changer for your online business. Get in touch with us now for cutting-edge solutions at affordable rates.
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

export default OsCommerceDevelopment;