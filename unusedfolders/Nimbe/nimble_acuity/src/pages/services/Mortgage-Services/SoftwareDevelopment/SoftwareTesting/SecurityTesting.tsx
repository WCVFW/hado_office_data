import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SecurityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Security Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to highly secure and risk-free software applications by choosing our security testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unable to unearth risks, vulnerabilities, and threats in your software application from malicious attacks? Are you finding it challenging to find the right experienced resources to cater to your security testing needs? Then, the best step is to outsource security testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier security testing service provider that can cater to all your software testing requirements. We have some of the most qualified and experienced security testing experts on board who leverage the best security testing tools and software to deliver top-notch services to clients.
            </p>
          </div>

          {/* Security Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Security Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a leading provider of security testing services for over two decades. Our experience enables us to understand each customer's unique project requirements and provide customized services. Some of the key services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Application Security Testing</h4>
                <p>We detect all possible vulnerabilities in your application before it is released into the market. We can help you with Static Application Security Testing (SAST) and Dynamic Application Security Testing (DAST).</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Security Risk Assessment</h4>
                <p>Our team can help you with accurate and flawless security risk assessments to help you understand your application's compliance levels against industry best practices.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Code Security</h4>
                <p>We help detect possible flaws and poor coding practices in your application's code. Our assessments cover session handling, input validation, and parameter checking, among other critical areas.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Penetration Testing Services</h4>
                <p>We stage ethical hacking to detect vulnerabilities in your network. Our services include network penetration tests, security vulnerability assessments, and web application penetration tests.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits of Security Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Security Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Security testing provides a series of benefits for the software development team and the end-users. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It ensures the final product is protected and safe from malicious attacks.</li>
              <li>When vulnerabilities are fixed early, it results in considerable financial savings.</li>
              <li>Starting testing early gives your team enough time to thoroughly check the application.</li>
              <li>It is easier to halt the build when critical defects are found, and the build can be easily restarted.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing security testing services to us can provide you with a series of benefits. Some of the key reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Packages:</strong> Our services are highly cost-effective, with affordable and flexible pricing options that suit your business requirements.</li>
              <li><strong>Skilled Security Testers:</strong> Our team includes some of the most experienced and talented security testing specialists who are trained to work on the latest tools.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO-certified organization that ensures all services are of the best quality and go through a thorough quality check.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is kept safe in secure locations at all times.</li>
              <li><strong>Dedicated Project Manager:</strong> We assign a dedicated manager who will be your single point of contact for all your needs and issues.</li>
              <li><strong>Highly Scalable Services:</strong> We have the resources and bandwidth to scale up services and increase the number of resources on a project as needed.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Software?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality security testing services and a range of other software testing services to clients globally. We have some of the most qualified and experienced security testing experts on board who leverage the latest tools and technologies to deliver top-notch, error-free services.
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

export default SecurityTesting;