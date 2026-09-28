import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ManagedQualityAssurance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Managed Quality Assurance Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Focus on your core business and get access to high-quality managed quality assurance from an experienced team of software testers at prices starting at just $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unable to handle your organization's managed quality assurance testing service requirements and focus on your core activities at the same time? Are you unable to find the right resources who are experienced to handle your managed quality assurance testing needs? Then, the best option for you would be to outsource managed quality assurance testing services to an experienced managed quality assurance testing service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a managed quality assurance testing service providing company that can be your one-stop-shop for all your needs. We have some of the most skilled and experienced MQAS experts on board who can take care of all your requirements. We make use of the latest tools and technologies to deliver top-notch services.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Managed Quality Assurance Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been one of the leading providers of managed QA testing services to clients around the globe. We have gained enough experience in this domain which enables us to deliver customized services to clients that will suit their business requirements perfectly. Some of the key managed quality assurance testing services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Regression Testing Services</h4>
                <p>
                  Regression testing is done to check if recent code changes have affected existing features or not. Our team at Nimble Acuity can help you with flawless regression testing services within a quick time.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Automation Testing Services</h4>
                <p>
                  Our team of software testers has the required skills and expertise to handle all your automation testing requirements. We leverage the power of the latest automation testing tools and technologies and deliver top-notch services to global clients.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">User Acceptance Testing Services</h4>
                <p>
                  User acceptance testing is done in the final stage of development after the functional, system, and integration testing is completed. Our team of highly experienced software testers can provide clients with customized user acceptance testing services.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Managed QA Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are several benefits of managed quality assurance testing services for both the development team as well as the end-user of the product. Some of the key benefits are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Continuous Improvement:</strong> It provides a provision for continuous and measured improvement of your software.</li>
              <li><strong>Long-term Partnership:</strong> It enables a long-term partnership with a dedicated and experienced team.</li>
              <li><strong>Reduced Responsibility:</strong> The client is relieved of the burden of managing testing responsibilities.</li>
              <li><strong>Customized Methodology:</strong> The testing methodology will be tailored to meet your specific requirements.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing managed quality assurance testing services to **Nimble Acuity** provides a series of benefits that you can take advantage of. Some of the major reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> We provide clients with affordable and flexible pricing options that suit their business requirements and budget.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe and secure.</li>
              <li><strong>High-quality Services:</strong> Being an ISO certified organization, our services undergo a multi-level quality assurance process to ensure they are completely error-free.</li>
              <li><strong>Experienced Testers:</strong> Our team comprises highly qualified and experienced testers who can handle all your software testing requirements.</li>
              <li><strong>Dedicated Manager:</strong> We assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>Highly Scalable:</strong> We have the skills and bandwidth to scale up service requirements and resources as needed.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the latest tools, software, and state-of-the-art office spaces.</li>
              <li><strong>Round-the-Clock Support:</strong> Our teams are available at all times via phone or email to answer your queries.</li>
              <li><strong>Short Turnaround Times:</strong> Our global delivery locations enable us to provide services within quick turnaround times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Looking for a Reliable Managed QA Testing Partner?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality managed quality assurance testing and a plethora of other software testing services to clients around the globe. We have some of the most talented and skilled MQAS testers on board who can take care of all your requirements with ease.
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

export default ManagedQualityAssurance;