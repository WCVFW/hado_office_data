import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We take your ServiceNow experience to new heights by building and integrating custom applications.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to accelerate your internal business processes with ServiceNow solutions? What if your unique business process requires custom-built applications? Perhaps you are wondering where to find the in-house resources to handle this requirement. We can help you with your specific business needs. Save time and costs by outsourcing ServiceNow app development services to us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have extensive experience servicing clients across industries and verticals. Our experts can transform and digitize your core business processes by building apps onto the ServiceNow platform with App Engine. Our powerful digital workflow apps leverage the platform to connect people and processes. Reach out to us to boost your business and get a better ROI.
            </p>
          </div>

          {/* Our App Development Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow App Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Studio IDE</h4>
                <p>
                  We leverage this web-based development environment to build, integrate, and manage custom-built ServiceNow applications for your business.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">App Engine Studio</h4>
                <p>
                  Want a low-code visual app environment to fuel your business growth? Our experts use App Engine Studio to build critical workflow apps from scratch.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Development</h4>
                <p>
                  We offer more than just ServiceNow mobile app development. We also perform functional testing and simplify platform upgrades.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Continuous Integration & Delivery</h4>
                <p>
                  We fast-track the custom application development process by using continuous integration and delivery toolsets on the platform. We use Git repo integration to manage code changes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">APIs and Integrations</h4>
                <p>
                  Using our technical expertise, we integrate and automate the Now platform with any system using low-code solutions, leveraging the platform’s APIs to manipulate data and initiate actions.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for App Development Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> We offer flexible and cost-effective pricing packages that suit a range of business needs and budgets.
              </li>
              <li>
                <strong>High-Quality Services:</strong> As a trusted ServiceNow partner, we provide high-quality and error-free services to clients across time zones.
              </li>
              <li>
                <strong>Data Security:</strong> Being an ISO/IEC 27001:2022-certified company, we prioritize data security with a robust ISMS system to prevent any unauthorized access.
              </li>
              <li>
                <strong>Experienced Team:</strong> We have a highly qualified team of designers, developers, and software engineers with extensive experience in ServiceNow app development.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our experts provide seamless services with quick turnarounds and are highly committed to meeting all deadlines.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Custom App?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** offers best-in-class custom apps for the Now platform. We work with you to understand your requirements and build applications that match your business needs, leveraging our extensive knowledge of the platform's tools and APIs.
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

export default ServiceNowAppDevelopment;