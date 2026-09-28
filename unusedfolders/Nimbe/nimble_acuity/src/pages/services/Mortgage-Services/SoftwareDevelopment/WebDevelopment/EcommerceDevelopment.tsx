import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const EcommerceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Open-Source E-commerce Website Development
            </h2>
            <p className="text-lg text-gray-600">
              Get robust, feature-rich open-source e-commerce solutions to boost your online presence and sales.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With 44% of the population preferring to shop online, having a powerful e-commerce presence is no longer optional—it's essential. At **Nimble Acuity**, we understand that a successful online store requires more than just a website; it needs a comprehensive strategy to increase ROI and improve customer acquisition. Our team of highly skilled developers has vast experience creating and implementing end-to-end e-commerce solutions that drive traffic and boost sales.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We know that managing an online store can be intimidating, from handling complex inventories to regularly updating content. By partnering with us, you can offload these complexities and reap the benefits of a multi-functional e-commerce website. We take a holistic approach, incorporating SEO, web marketing, PPC advertising, and social media presence to ensure your business thrives.
            </p>
          </div>

          {/* Our E-commerce Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Open-Source E-commerce Website Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Design & Development</h4>
                <p>We provide comprehensive e-commerce services, including web design, full-stack development, and front-end management, to create an intuitive and engaging shopping experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Catalog & Content Management</h4>
                <p>Our solutions feature powerful catalog and content management systems, allowing you to easily update product information and on-page content without a hassle.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">User & Payment Management</h4>
                <p>We integrate secure features like customer login, registration, and diverse online payment options. We also offer B2B solutions and multi-seller login dashboards for complex business models.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Key Features & Integrations</h4>
                <p>Our websites come with essential features like customized categories, layered navigation, responsive design, and seamless integration with Google Analytics, sitemaps, and delivery options.</p>
              </div>
            </div>
          </div>

          {/* Tools We Leverage */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Tools We Leverage for E-commerce
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our developers use a wide array of powerful open-source tools that are highly flexible and cost-effective. These platforms have a dedicated user base, ensuring continuous, performance-enhancing additions and updates.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-gray-700">
              <span className="bg-gray-100 p-2 text-center rounded">Magento</span>
              <span className="bg-gray-100 p-2 text-center rounded">OpenCart</span>
              <span className="bg-gray-100 p-2 text-center rounded">PrestaShop</span>
              <span className="bg-gray-100 p-2 text-center rounded">WooCommerce</span>
              <span className="bg-gray-100 p-2 text-center rounded">X-Cart</span>
              <span className="bg-gray-100 p-2 text-center rounded">Elcodi</span>
              <span className="bg-gray-100 p-2 text-center rounded">OsCommerce</span>
              <span className="bg-gray-100 p-2 text-center rounded">Sylius</span>
              <span className="bg-gray-100 p-2 text-center rounded">VirtueMart</span>
              <span className="bg-gray-100 p-2 text-center rounded">Zen Cart</span>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Extensive Experience:</strong> With over 26 years in the industry, we have experience with a wide range of open-source e-commerce tools and technologies.</li>
              <li><strong>Customized Solutions:</strong> We offer highly customized solutions tailored to your business needs, complete with relevant SEO and targeted marketing for a better ROI.</li>
              <li><strong>Scalability & Flexibility:</strong> Our solutions are designed to be scalable, robust, and flexible, allowing your business to grow without limitations.</li>
              <li><strong>Cost-Effective & Efficient:</strong> We offer competitive rates and reduce development time, helping you save up to 50% on development costs.</li>
              <li><strong>Transparent Project Management:</strong> You'll benefit from clear communication and transparent project execution from conceptualization to deployment.</li>
              <li><strong>Dedicated Developers:</strong> We offer the option to hire dedicated full-time or part-time developers to work exclusively on your project.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch a Powerful Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has helped over 18,488 clients achieve their business goals with our custom software development services. We'll work with you from the conceptualization stage to development, implementation, testing, and future enhancements.
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

export default EcommerceDevelopment;