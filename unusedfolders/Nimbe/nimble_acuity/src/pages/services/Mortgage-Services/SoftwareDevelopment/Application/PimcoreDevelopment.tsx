import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const PimcoreDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Pimcore Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Pimcore is widely used to develop effective data management solutions. We have great expertise in using this technology to develop robust data and mobile applications.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Pimcore is an open-source digital framework that collects and manages business data. It enables businesses to create and provide a single window of information view. This helps to improve operational efficiency and customer experience on the one hand and reduce costs and eliminate silos on the other.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading Pimcore development agency with over two decades of experience in assisting businesses to optimize and manage data. We have developed a wide range of digital solutions leveraging the Pimcore platform. Our clients come from diverse business models and across different industry verticals. Banking on our solutions, they have been able to deliver a seamless user experience across devices and platforms.
            </p>
          </div>

          {/* Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Pimcore Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide Pimcore services to assist large and small businesses in developing advanced digital solutions for managing data. Our customized solutions include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Product Information Management:</strong> This solution helps you to centralize all business information in one place, making it easy to manage across different channels.</li>
              <li><strong>Master Data Management:</strong> This solution is tailored to increase the quality and consistency of a business's data assets, including product, customer, and location data.</li>
              <li><strong>Digital Asset Management:</strong> Our solution is designed to help you manage data assets across diverse systems from a single source.</li>
              <li><strong>Customer Data Platform:</strong> We have leveraged the Pimcore technology to build platforms for customer data management, creating a unified and consistent customer database.</li>
              <li><strong>Digital Experience Platform:</strong> Pimcore can be used to build a comprehensive digital experience platform that integrates a set of technologies onto a common platform to eliminate operational silos.</li>
              <li><strong>Digital Commerce Platform:</strong> We have built several digital commerce platforms with Pimcore that have assisted retailers in interacting with shoppers digitally.</li>
              <li><strong>Mobile Application Development:</strong> We also leverage Pimcore for mobile app development, creating highly optimized mobile apps with a responsive, lean, and unique design.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A third-party Pimcore development company like ours can help you make the most of all your Pimcore needs. When you partner with us, you can look forward to the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Optimum Use of the Pimcore Platform:</strong> We are committed to helping our clients use the Pimcore open-source framework to the hilt, bringing you the best professionals.</li>
              <li><strong>Robust Solutions:</strong> We bank on our expertise and experience to build solutions that continuously deliver a seamless experience across all marketing channels.</li>
              <li><strong>Lower Costs:</strong> Our Pimcore development services come at a cost-effective price, with various budgetary options from part-time hires to a full team.</li>
              <li><strong>Quick Delivery:</strong> Our experts are stationed around the globe, which helps us work across time zones and deliver projects on time.</li>
              <li><strong>Maintenance and Support:</strong> We provide complete on-demand support for Pimcore maintenance, offering round-the-clock assistance for bug fixing and feature enhancement.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Data Management?
            </h3>
            <p className="text-gray-700 mb-6">
              There are many reasons to choose our services. **Nimble Acuity** has extensive experience in developing data management solutions using Pimcore ever since the emergence of this platform. As an early adopter, we have developed a diverse set of solutions to make data management easy and effective.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Over the years, we have delivered 70+ Pimcore-based solutions to businesses to make their front-end and back-end operations robust and easy to manage. Get in touch with our experts now to get started!
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

export default PimcoreDevelopment;