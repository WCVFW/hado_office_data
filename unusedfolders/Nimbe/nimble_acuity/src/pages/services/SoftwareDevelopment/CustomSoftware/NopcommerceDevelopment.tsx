import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const NopcommerceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              NopCommerce Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Create feature-rich and appealing digital storefronts that are secure, flexible, scalable, and robust.
            </p>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              Prices start at $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to leverage the power of NopCommerce, a fully customizable e-commerce solution built using ASP.NET and SQL Server? This platform offers complete flexibility for businesses of all sizes, with an administrative backend and a catalog frontend to provide a holistic and pleasurable shopping experience for your visitors.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading NopCommerce development service provider. Our expert developers know how to fully leverage the platform's flexible MVC-based theme system. With our certified developers, who have significant experience in building complex e-commerce sites from the ground up, we can help you achieve your vision for your digital storefront. Our solutions result in fully responsive, web and mobile-friendly e-commerce stores.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our NopCommerce Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity offers a comprehensive range of solutions optimized for streamlined performance and hassle-free functioning. We can provide the goods, whether you need a simple website or a complex, feature-rich digital store.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Custom NopCommerce Store Development:</strong> Our experts provide robust services to help you develop your NopCommerce website in innovative ways that attract visitors and convert them into loyal customers.
              </li>
              <li>
                <strong>NopCommerce Extensions and Plugin Development:</strong> We build custom extensions and plugins from scratch to meet your exact needs and enhance your digital store's functionality.
              </li>
              <li>
                <strong>NopCommerce Customization of Themes and Modules:</strong> We can fully customize your website according to your specifications, providing template design, theme customization, and module development and integration services.
              </li>
              <li>
                <strong>NopCommerce Migration Services:</strong> If you already have an e-commerce store, we can seamlessly migrate it to the NopCommerce platform, allowing you to benefit from its many advantages.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nimble Acuity has over 26 years of rich experience in providing customer-focused services. Our team leverages the best tools and technologies to help you step up your online selling efforts for superlative results.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Experienced Team:</strong> Our highly skilled team uses their deep expertise to provide comprehensive NopCommerce development services.
              </li>
              <li>
                <strong>Affordable & Customized Solutions:</strong> Our efficient workflows allow us to provide top-quality, tailored solutions that fit your specific requirements and budget.
              </li>
              <li>
                <strong>Fast Turnaround:</strong> With multiple delivery centers worldwide, we deliver our services within a quick turnaround time.
              </li>
              <li>
                <strong>Data Security:</strong> Our robust data security policies ensure your business data is always protected.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our customer service representatives are available around the clock to provide immediate support and address all your queries.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build a Future-Ready Store?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing NopCommerce development services to clients around the world. We combine the latest technological advances with highly experienced experts to cater to all your NopCommerce development requirements with professionalism and precision.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us to discuss your business requirements, and we'll create a future-ready NopCommerce development plan to meet all your online selling goals.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NopcommerceDevelopment;