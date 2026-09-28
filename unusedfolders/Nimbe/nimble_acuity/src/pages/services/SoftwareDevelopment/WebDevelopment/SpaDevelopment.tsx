import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SpaDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Single-Page Application (SPA) Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get creative single-page application development expertise to make your app ideas a reality.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we specialize in building **Single-Page Applications (SPAs)** that are fast, efficient, and provide a seamless user experience. With 90% of users leaving a site that takes more than 5 seconds to load, the transition to SPAs is crucial for businesses aiming to retain customers and enhance engagement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our expert team has extensive knowledge of modern technologies including **React.js, Node.js, and Angular**, to build robust SPAs from the ground up. We don't just develop; we also help you integrate essential features like caching, SEO, and social sharing to ensure your application is a complete success.
            </p>
          </div>

          {/* Our SPA Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our SPA Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">E-commerce Solutions</h4>
                <p>We build a full suite of e-commerce applications, including web portals, shopping carts, and progressive web apps (PWAs), with seamless payment gateway integrations.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Applications</h4>
                <p>Our solutions include custom SPAs for warehouse, order, and document management, as well as robust HR, BPM, and KPI management systems designed for enterprise-level needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Document Management & Resource Management</h4>
                <p>We develop secure document management and resource management solutions, including blockchain-based systems and recruitment platforms, that streamline workflows and improve efficiency.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Project Management Systems</h4>
                <p>Leverage our expertise to build comprehensive project management systems, including supply chain management and facility management solutions that bring clarity and control to your operations.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Analytical Platform Systems</h4>
                <p>We create SPAs for data visualization and report sharing, helping you transform raw business data into actionable insights with powerful and interactive dashboards.</p>
              </div>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Our services are priced affordably, providing you with a high return on investment without compromising on quality.</li>
              <li><strong>Experienced & Qualified Team:</strong> We have a team of highly skilled software engineers with extensive experience in developing diverse SPAs for various industries.</li>
              <li><strong>Guaranteed Scalability:</strong> Our single-page application development services are designed to be scalable, allowing your project to grow seamlessly with your business.</li>
              <li><strong>Quick Turnaround Time:</strong> We are committed to delivering our services on time, every time, helping you get your application to market faster.</li>
              <li><strong>Quality & Data Security:</strong> We are an ISO-certified service provider, ensuring the highest quality applications and the strictest data security measures.</li>
              <li><strong>End-to-End Support:</strong> We provide comprehensive, value-added services and end-to-end support, managing the entire development process for you.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build a Fast & Responsive SPA?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of single-page application development services. We'll work closely with you to understand your requirements and craft a custom plan that perfectly meets your business needs.
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

export default SpaDevelopment;