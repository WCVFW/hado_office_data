import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const HrServiceNow: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow HR Service Delivery
            </h2>
            <p className="text-lg text-gray-600">
              Boost employee satisfaction and productivity with intelligent HR solutions and streamlined service delivery.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you’re looking to provide your employees with ultimate satisfaction through intelligent HR solutions, it's time to partner with **Nimble Acuity**. We are a leading provider of **ServiceNow HR service delivery**, offering a one-stop shop for all your needs. Our team of experienced and skilled specialists can cater to all your requirements, leveraging the latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over two decades, we've helped clients worldwide with their ServiceNow HR service management. Our team understands that each business has unique needs, and we're committed to providing tailored solutions that eliminate employee worries and enhance their overall experience.
            </p>
          </div>

          {/* Our HR Service Delivery Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow HR Service Delivery Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Case and Knowledge Management</h4>
                <p>Our team has the expertise to provide high-quality case and knowledge management services, leveraging the latest tools and technologies to ensure accuracy and efficiency.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Employee Service Center</h4>
                <p>We deliver the best quality employee service center solutions, using cutting-edge technologies to create a seamless and user-friendly experience for your staff.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Employee Document Management</h4>
                <p>With access to world-class infrastructure and tools, we provide accurate and error-free employee document management services that streamline your HR processes.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Performance Analytics</h4>
                <p>Our skilled specialists can handle all your performance analytics requirements, utilizing the latest tools and technologies to provide actionable insights for your business.</p>
              </div>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible & Cost-Effective Pricing:</strong> Our pricing plans are flexible and affordable, designed to fit your business needs and budget.</li>
              <li><strong>Superior Quality Services:</strong> As an **ISO-certified firm**, we guarantee that all our services are of the highest quality and completely error-free.</li>
              <li><strong>Information Security:</strong> We are an **ISO/IEC 27001:2022 ISMS certified firm**, so you can rest assured that your data is completely secure and confidential.</li>
              <li><strong>Skilled Team:</strong> Our specialists are some of the most experienced and skilled in the industry, capable of handling all your ServiceNow HR service delivery needs with ease.</li>
              <li><strong>Short Turnaround Time:</strong> With several delivery locations across the globe, we can provide services quickly and efficiently.</li>
              <li><strong>Dedicated Manager:</strong> We assign a dedicated manager to your project, serving as your single point of contact for all your needs.</li>
              <li><strong>Scalable Services:</strong> Our team has the bandwidth to scale up services and ramp up the project team size as and when you need it.</li>
              <li><strong>24/7 Support:</strong> Our support teams are available around the clock to answer your queries and ensure a smooth project journey.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your HR Services?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing top-quality ServiceNow HR service delivery and other enterprise solutions to clients worldwide. Our experienced experts leverage the latest software and tools to meet your needs in a hassle-free manner.
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

export default HrServiceNow;