import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ComplianceTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Compliance Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your software fulfills all standards and regulations by choosing our compliance testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways that will help you determine if your software system is compliant with all the regulatory standards and specifications? Are you finding it challenging to find experienced and skilled compliance testing experts who can handle all your requirements? Then, the best step for your organization would be to outsource compliance testing services to a skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such compliance testing service provider which ensures that all your requirements are met. We have some of the most qualified and experienced compliance testing experts on board who can cater to all your requirements. We leverage the latest tools and technologies while delivering top-notch services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Compliance Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality compliance software testing services to clients around the globe for a long time now. This experience has enabled us to understand each client's unique requirements and provide them with customized services that will suit their business requirements. Some of the key compliance testing services we offer include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Load & Stress */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Load & Stress Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We have the required skills and expertise to provide accurate load and stress testing services. We ensure that the software application functions as expected when subjected to heavy loads and that no app crashes occur when varying stresses are applied to it.
                </p>
              </div>
              
              {/* Operations & Documentation */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Operations & Documentation Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team has the required skills and expertise to handle all your operations and documentation testing requirements. We make sure that all documentation is in place and error-free before it is delivered to the client.
                </p>
              </div>

              {/* Volume Testing */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Volume Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Volume testing is done to test how the software application reacts to huge volumes of data it is subjected to. We have the required bandwidth to handle all your volume testing requirements in the best possible manner.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefits of Compliance Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Compliance Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Compliance testing provides clients and their end-users with a series of benefits. Some of the key benefits of compliance testing services are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It ensures that the applications are properly implemented.</li>
              <li>It ensures that the required standards are adhered to.</li>
              <li>It helps validate the interoperability and portability of the system.</li>
              <li>It validates that the functions and interfaces are functioning as expected.</li>
              <li>It can easily help you identify the areas which are to be confirmed.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Compliance Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing compliance testing services to **Nimble Acuity** can give you access to a plethora of benefits. Some of the key reasons for you to choose us as your compliance testing service provider are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Packages:</strong> Working with us can be highly cost-effective, with pricing options that suit your budget.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe in secure locations.</li>
              <li><strong>Talented Testers:</strong> We have some of the most qualified and skilled compliance testing experts on board.</li>
              <li><strong>Superior Quality Services:</strong> As an ISO certified organization, all the services delivered by us are of the best quality.</li>
              <li><strong>SPOC:</strong> We will assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>Scalable Services:</strong> We have the required skills and bandwidth to scale up the number of resources as and when needed.</li>
              <li><strong>Quick Turnaround Time:</strong> We operate through several delivery centers, enabling us to deliver quality services within a quick turnaround time.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to world-class office spaces and the latest compliance testing tools and technologies.</li>
              <li><strong>24/7 Customer Support:</strong> All our teams are always available to sort out your queries and resolve any issues.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Compliance Testing Services to **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality compliance testing services and a plethora of other software testing services to global clients. We leverage the best and the latest compliance testing tools and software and deliver the best to the client. We have some of the most talented and experienced compliance testing experts on board who can cater to all your requirements with ease.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient compliance testing company, then look no further. Get in touch with us today!
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

export default ComplianceTestingServices;