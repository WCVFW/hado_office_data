import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SpreeCommerceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Spree Commerce Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We use best-in-class tools to customize Spree Commerce development to suit your business needs and deliver an enriched customer experience.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to open an e-commerce store using the tried and tested Spree Commerce technology that powers more than 45,000 e-commerce stores around the world? Are you looking to leverage the full power of Spree Commerce's innumerable features that are fully customizable to fit any business need? If so, you have come to the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading Spree Commerce development company and can deliver exactly the type of e-commerce store you desire. We also provide custom Spree Commerce extensions that allow your developers to extend the platform with additional features. We have significant experience and expertise in helping early-stage and established firms set up, maintain, and scale their online stores across various platforms, including the Spree Commerce platform.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Spree Commerce Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nimble Acuity is a fully-fledged Spree Commerce development service provider and can deliver exceptional e-commerce stores built with the Spree Commerce platform. Since Spree Commerce is built using the Ruby on Rails programming language, we can also leverage the Spree Ruby on Rails e-commerce features developed by other third-party developers.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Store Development and Customization:</strong> We build your Spree Commerce e-commerce store from scratch, complete with powerful features. We are passionate about building scalable and secure stores and will also help you customize them based on your unique requirements.</li>
              <li><strong>Maintenance and Support Services:</strong> We provide affordable maintenance packages to ensure that your Spree Commerce store runs smoothly 24/7, preventing any downtime that can cause frustration and lost revenue.</li>
              <li><strong>Theme Development Services:</strong> We develop and integrate custom, stand-alone, and cross-browser themes that are responsive and suit your brand perfectly.</li>
              <li><strong>Store Scalability Services:</strong> Our solutions are highly scalable and can perform efficiently even during massive surges and drops in traffic volumes.</li>
              <li><strong>Migration Services:</strong> We can migrate your existing e-commerce store to the Spree Commerce platform at affordable rates and within quick turnaround times, ensuring a smooth and successful transition.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Spree Commerce Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a leading provider of Spree Commerce development services, we offer a range of benefits to our clients:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> Our services are priced very reasonably, providing you with the highest return on investment.</li>
              <li><strong>High-quality Services:</strong> We are an ISO-certified company and use multi-level quality checks and other QA processes to ensure the highest quality services.</li>
              <li><strong>Experienced Team:</strong> Our Spree Commerce development team has over two decades of experience in providing a full spectrum of e-commerce development services.</li>
              <li><strong>Data Security:</strong> Your data is of utmost importance to us, and we comply with all international data security and privacy laws.</li>
              <li><strong>Short Turnaround:</strong> You will always receive our Spree Commerce development services on time, every time, because we take deadlines extremely seriously.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Spree Commerce Store?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of Spree Commerce development services. Our software developers have extensive experience in providing a wide range of e-commerce solutions and have built substantial capability in using Spree Commerce. When you choose our services, you will receive cost-effective and timely solutions that help your brand succeed in the crowded marketplace.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for high-quality and feature-rich Spree Commerce development services, get in touch with us today for a free quote.
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

export default SpreeCommerceDevelopment;