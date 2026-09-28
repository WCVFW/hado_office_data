import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WebApplication: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Web Application Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build future-proof web applications with longer life cycles, better usability, and advanced compatibility to engage your audience and drive business growth.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Nearly 38% of users stop using a web application if the design isn't engaging! That’s why enterprises with a goal to offer a superior user experience choose web apps over native or hybrid apps. However, unoptimized performance can be a significant obstacle. This is where specialists like us can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a world-renowned web application development company, providing comprehensive solutions to enterprises of every size. We believe in working with organizations on custom solutions—selecting the best platform for development and providing best-in-class services with a fast turnaround.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Extensive Range of Web App Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer consolidated web application solutions that meet the specific requirements of your enterprise. Our comprehensive services include the development of future-proof web apps with a focus on cross-platform compatibility:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>CMS Web Development:</strong> We create CMS-based web applications that simplify web page modification and streamline web content for the end-user.</li>
              <li><strong>Custom Portal Development:</strong> Our experts create intranets and custom web portals to facilitate improved collaboration and optimized business processes.</li>
              <li><strong>e-Commerce Portal Development:</strong> We build user-friendly e-commerce portals that guide your customers through the sales funnel and persuade them to make a purchase.</li>
              <li><strong>Web App Re-engineering:</strong> We modernize legacy and outdated web apps that have limited functionality, recalibrating them to better suit your current needs.</li>
              <li><strong>Node.js Development:</strong> We create highly customized and feature-rich applications using Node.js for enterprises looking for robust performance.</li>
              <li><strong>.Net Development:</strong> Our team develops custom web applications for multiple platforms and devices using the extensive range of programming languages and libraries in the .Net framework.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We understand our clients' business models and requirements, delivering results that meet and exceed their needs. Here are some key reasons to partner with us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>High-Quality Services:</strong> We deliver feature-rich, optimized web applications that fulfill all client requirements.</li>
              <li><strong>Expert Developers:</strong> Our team of expert web app developers has the capability to create responsive and highly optimized web apps.</li>
              <li><strong>Transparent Process:</strong> We follow a transparent development methodology, keeping you in the loop at every stage of the process.</li>
              <li><strong>Reasonable Prices:</strong> We provide web application development services at highly cost-effective prices, which can significantly reduce your development costs.</li>
              <li><strong>24/7 Support:</strong> Our support continues even after the web app is developed, including regular maintenance and updates to ensure optimal performance.</li>
              <li><strong>Enhanced Scalability:</strong> Our solutions are designed to be scalable, growing with your business and accommodating future needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build a Web App?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a premier web application development company, providing high-quality solutions for over two decades. Our team begins by analyzing your unique requirements and business model, then follows the best practices in the industry to deliver a final product with a quick turnaround.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Partner with us to benefit from our expert resources, streamlined processes, and applications with better upgradability and availability.
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

export default WebApplication;