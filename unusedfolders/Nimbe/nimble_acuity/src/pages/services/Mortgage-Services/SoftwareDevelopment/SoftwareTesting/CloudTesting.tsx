import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CloudTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Overcome issues related to data privacy and performance for your cloud-based applications.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you concerned about the data security, application integration, and performance of your cloud-based software? Is your organization short on skilled and experienced resources to handle your cloud testing requirements? Then, the right option for you is to outsource cloud testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier cloud testing service provider that can handle all your testing requirements. We have some of the most qualified and experienced software testers on board who can take care of your needs with ease, leveraging the latest cloud testing tools to deliver top-notch services.
            </p>
          </div>

          {/* Cloud Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cloud Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cloud testing simulates web traffic to test cloud-based applications, validating their performance, scalability, and redundancy. **Nimble Acuity** has been a pioneer in providing high-quality cloud testing services, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Functional Cloud Testing</h4>
                <p>We provide accurate and flawless data migration and functionality testing. We ensure your application's features run smoothly under different loads and environments.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Non-Functional Cloud Testing</h4>
                <p>Our services include security testing to protect your data and performance testing to ensure your application doesn't suffer a breakdown under different loads and networks.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Specific Testing</h4>
                <p>We perform compatibility testing to ensure your application runs smoothly across different hardware, network environments, and operating systems. We also offer multi-tenancy testing to focus on the application's different components.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits of Cloud Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Cloud Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Cloud testing helps find various issues with cloud-based software applications. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps testers to scale up or scale down resource requirements as a client's needs change.</li>
              <li>Cloud-based applications don't need expensive infrastructure, allowing you to pay only for the resources or features being used.</li>
              <li>Cloud testing enables better collaboration between development and testing teams.</li>
              <li>The application can run on different systems simultaneously, giving the testing team more time to fix defects.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing cloud testing services to us provides a plethora of benefits. Here are some key reasons to choose us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Packages:</strong> Our highly flexible and affordable pricing options will perfectly suit your business requirements and budget.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, you can be sure that all your data is kept safe in secure locations.</li>
              <li><strong>Skilled Software Testers:</strong> We have some of the most skilled and experienced cloud testing experts on board who work with the latest tools to deliver top-notch services.</li>
              <li><strong>Superior Quality Services:</strong> As an ISO certified organization, we ensure all services are delivered with the best quality and go through a multi-level quality check process.</li>
              <li><strong>Dedicated Manager:</strong> When you work with us, we assign a dedicated project manager who will be your single point of contact for all your needs.</li>
              <li><strong>Easily Scalable Services:</strong> We have the required bandwidth and resources to scale up services and increase the number of resources on a project as and when you need it.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Cloud Application?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a pioneer in providing superior quality cloud testing services and a series of other software testing services to clients globally. We leverage the latest cloud testing tools and software to deliver top-notch services. Our qualified and experienced experts can take care of all your requirements with ease.
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

export default CloudTesting;