import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const OnDemandServicesAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              On-Demand Services App Development
            </h2>
            <p className="text-lg text-gray-600">
              Empower your business with our cutting-edge on-demand apps. Increase your reach and profitability with our top-notch development solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              On-demand apps like Uber and Zomato are creating a new trend in the market, making everyday life easier for millions of people. If you are looking for a company that can develop a sustainable and efficient on-demand application to meet your business needs, you've come to the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity offers skilled and professional developers who are ready to assist you in the process of on-demand app development. Our flexible services and affordable pricing models are just some of the reasons why we are a popular choice for an on-demand app development company.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our On-Demand App Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our comprehensive on-demand app development solutions include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom App Development</h4>
                <p className="text-gray-700">Our professionals will help you plan, design, and develop custom, futuristic applications that expand your business potential.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Transport Applications</h4>
                <p className="text-gray-700">We have the tools and techniques to build top-notch transport applications with intuitive UI/UX interfaces, perfect for ride-sharing or logistics.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Delivery Applications</h4>
                <p className="text-gray-700">Our skilled professionals create functional applications to ensure quick delivery of products, from food and groceries to anything else you need to deliver.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Booking Applications</h4>
                <p className="text-gray-700">We are equipped to build highly functional and easy-to-navigate booking applications to handle all queries effectively and without any trouble.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Online Coupon Applications</h4>
                <p className="text-gray-700">We have the infrastructure and resources to build the best online coupon applications that will add value to your customers and boost your sales.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource On-Demand App Development to Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity is a leading on-demand app development company with clients in over 160 countries. The benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Rates:</strong> We offer flexible and customized pricing options, with app development prices starting at just $20/hour.</li>
              <li><strong>Data Security:</strong> As an ISO-certified company, Nimble Acuity guarantees the security of your business's information and data.</li>
              <li><strong>Expert Professionals:</strong> Our software and app development experts are versed in the latest techniques and tools to create business apps that drive growth and increase revenue.</li>
              <li><strong>On-Time Delivery:</strong> With a global presence and experts working in multiple shifts, we offer some of the quickest turnaround times in the industry.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource On-Demand App Development Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is one of the best companies providing top-tier software development services globally. Outsourcing your requirements to us will surely benefit your company and ensure the growth of your application.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us for the best enterprise software solutions at the best prices!
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

export default OnDemandServicesAppDevelopment;