import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareTestingProjects: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Testing Project Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve your software application quality and reduce time to market by outsourcing software testing projects to us at prices starting at just $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to improve your software application's quality, reduce costs and lower the time to market? Are you unable to find the right resources who can help you with your software testing project service requirements? Then, the best option for you would be to outsource software testing project services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a software testing project management company that can be your one-stop-shop for all your needs. We have some of the most qualified and experienced software testing experts on board who can cater to all your requirements, leveraging the power of the latest tools to deliver superior quality solutions.
            </p>
          </div>

          {/* Software Testing Project Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Software Testing Project Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              With over two decades of experience, we provide a wide range of manual and automated software testing services, accurately customized to suit your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <ul className="space-y-4">
                <li><h4 className="text-lg font-bold text-[#006A7C]">Functional Testing</h4><p>We ensure all application functionalities run as expected.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Web Services Testing</h4><p>We handle all your web services testing requirements with the latest tools.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Compatibility Testing</h4><p>We help you understand how your software integrates with other environments.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Load Testing</h4><p>We assess the behavior of your application under increased loads.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Automation Testing</h4><p>We have all the required tools and technologies to handle your automation testing needs.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Migration Testing</h4><p>We ensure safe and secure migration with no data loss.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Usability Testing</h4><p>We ensure your application is user-friendly before release to the target market.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">QA Process Design</h4><p>We leverage the latest tools to help you with accurate and flawless QA process design services.</p></li>
              </ul>
              <ul className="space-y-4">
                <li><h4 className="text-lg font-bold text-[#006A7C]">Configuration Testing</h4><p>We provide flawless configuration testing services within a quick time.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Acceptance Testing</h4><p>Our team provides high-quality acceptance testing services.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Integration Testing</h4><p>We provide flawless integration testing services and solve all your integration issues.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Security Testing</h4><p>We ensure your software is safe from external threats with accurate security testing services.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Mobile Testing</h4><p>We provide superior quality testing for mobile applications and web projects.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Platform Testing</h4><p>We make use of the latest tools to provide accurate platform testing services.</p></li>
                <li><h4 className="text-lg font-bold text-[#006A7C]">Network Testing</h4><p>We assess the behavior of your application under different networks.</p></li>
              </ul>
            </div>
          </div>

          {/* Key Benefits of Software Testing Projects */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Software Testing Projects
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Software testing projects offer significant benefits for both developers and end-users.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps to improve customer satisfaction.</li>
              <li>It helps to improve software application quality.</li>
              <li>It helps to reduce the time to market for the software application.</li>
              <li>It ensures that the software application is completely error-free.</li>
              <li>The cost can be further reduced by leveraging automated software testing.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing your software testing projects to us gives you access to a wealth of benefits.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> Our highly affordable pricing options are designed to align with your business requirements and budget.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is kept safe at all times and handled only by authorized personnel.</li>
              <li><strong>Error-free Services:</strong> We are an ISO certified organization, guaranteeing that all our services are of superior quality and undergo a strict quality checking process.</li>
              <li><strong>Talented Software Testers:</strong> We have some of the most qualified and experienced software testing experts on board who are trained to work on the latest tools and deliver top-notch services.</li>
              <li><strong>Dedicated Project Manager:</strong> You will have a single point of contact for all your requirements, who will resolve any issues you may have.</li>
              <li><strong>Easily Scalable Services:</strong> We have the talent and expertise to scale up resources and service requirements as and when your project demands.</li>
              <li><strong>Best Infrastructure:</strong> We have access to the latest software testing tools and world-class office spaces to deliver quality services.</li>
              <li><strong>Round the Clock Support:</strong> Our teams are available 24/7 to resolve your queries via email or phone.</li>
              <li><strong>Short Turnaround Times:</strong> Our global delivery locations enable us to deliver error-free services within a short turnaround time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Improve Your Software Quality?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality automated and manual software testing services. We have some of the most skilled and experienced specialists on board who can cater to all your needs without any hassles, leveraging the latest tools and software to deliver top-notch services.
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

export default SoftwareTestingProjects;