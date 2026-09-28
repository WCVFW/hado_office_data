import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ECommerceTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              eCommerce Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              We help clients develop and implement robust and complex eCommerce apps by providing industry-leading eCommerce testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity's** eCommerce testing practice brings together the expertise of commerce product developers, testers, and business process experts to provide a comprehensive view of the various aspects of eCommerce. As a Quality Assurance and Quality Engineer Services company, we provide a wide range of services from eCommerce application validation to Business as Usual (BAU). Our testing solutions help customers achieve better results and lower costs through a combination of hybrid testing approaches.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has years of experience in helping clients with their eCommerce testing services. As a global eCommerce testing service provider, we have been the go-to partner for several major eCommerce businesses, and yours could be next. If you want to partner with a company that offers nothing short of the ultimate efficiency and cost savings, try our eCommerce automation testing services today.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              eCommerce Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              When you outsource testing services to us, you can count on our team to manage your app portfolio with care. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <span className="font-semibold">Validation Support for eCommerce Implementation:</span> We provide end-to-end testing of functionalities, security, and performance. This includes:
                <ul className="list-circle list-inside ml-4 mt-2">
                  <li>Testing of main pages/links and integration testing.</li>
                  <li>Tests based on order management and payments validation.</li>
                  <li>Testing for globalization, user profile testing, and social media integration.</li>
                  <li>Compatibility testing for browsers and devices.</li>
                  <li>Promotional/deal testing and SEO testing.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Performance Tests:</span> We conduct performance testing on a custom-built schedule to provide the best possible results.
              </li>
              <li>
                <span className="font-semibold">QA Process Assessment and Test Planning:</span> We build the basic foundation of high-quality eCommerce deployments based on our custom technical stack.
              </li>
              <li>
                <span className="font-semibold">Evaluation, Integration, and Tool Selection:</span> Our expertise covers test automation, test management, and environment management.
              </li>
              <li>
                <span className="font-semibold">Testing for Site Security:</span> We offer a wide range of security assessments and consulting services, including penetration testing.
              </li>
              <li>
                <span className="font-semibold">Application-specific Tool Assessment:</span> We help developers and operations teams get started with an assessment of their various tools to accelerate the assurance process.
              </li>
              <li>
                <span className="font-semibold">Mobility Tests:</span> We offer extensive testing services to assure the compatibility and performance of applications across various mobile platforms.
              </li>
              <li>
                <span className="font-semibold">Test Automation:</span> We design scripts, automate executions, and develop a custom framework to maintain test suites.
              </li>
              <li>
                <span className="font-semibold">Planning and Test Strategy:</span> We develop a strategy that fits your specific business goals and development model.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              The eCommerce Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our process is straightforward and transparent, ensuring a smooth partnership:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">01</span>
                <p className="mt-2 text-gray-700">Receive and examine your business requirements to recommend accurate solutions.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">02</span>
                <p className="mt-2 text-gray-700">Select and implement the most suitable testing tools for your project.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">03</span>
                <p className="mt-2 text-gray-700">Our quality control experts conduct multi-level inspections to analyze the process.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">04</span>
                <p className="mt-2 text-gray-700">The results are verified and scaled up to accelerate future procedures.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <span className="text-3xl font-bold text-[#006A7C]">05</span>
                <p className="mt-2 text-gray-700">Reports are consolidated and data are made readily available to you.</p>
              </div>
            </div>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for eCommerce Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a visionary testing services provider that captures customer's particular needs. We are the foundation for our clients' success for the following reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Support:** Our customizable pricing allows you to start testing without contracts or channel fees.</li>
              <li>**Use of Latest Tools:** We use advanced testing tools as part of our solution customization, which speeds up the process.</li>
              <li>**ISO Compliant:** We follow the strictest standards of quality to provide the finest services.</li>
              <li>**Secure Data Management:** Our commitment is to provide 24/7/365 data protection and security.</li>
              <li>**High-Quality Services:** We are dedicated to offering our customers the best possible service.</li>
              <li>**Quick Turnaround:** We go above and beyond to provide the greatest results possible for our customers.</li>
              <li>**Scalable Solutions:** Our professionals can help you increase the efficiency of your organization with sturdy and high-quality solutions.</li>
              <li>**Experienced Consultants:** Our team has deep expertise in testing and can help you meet your business needs.</li>
              <li>**24/7 Support:** We provide continuous services through phone, email, and web chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity's** testing services have deep expertise in the eCommerce domain and a team of experienced testers with extensive knowledge of test automation, test frameworks, and non-functional validation. Our testers can help minimize the test lifecycle and provide better quality assurance. We offer a wide range of testing services for all types of clients and their complex needs. As a leading provider of testing services, we stand out with faster turnaround, quality, and high CSAT scores.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for prompt, reliable, efficient, and affordable testing services, then look no further. Get in touch with us now.
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

export default ECommerceTesting;