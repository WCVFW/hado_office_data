import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const EDITesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              EDI Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Validate and verify your EDI records in a hassle-free manner by outsourcing EDI testing to our experts.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding EDI testing for your software application too cumbersome and time-consuming? Are you struggling to find the right set of experienced and skilled EDI testing experts who can take care of your requirements? Then, the best option for you would be to outsource EDI testing services to an experienced and talented service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading EDI testing service provider that can be your one-stop-shop for all your testing requirements. We have some of the most qualified and experienced EDI testing specialists on board who can take care of your needs with ease. We leverage the latest EDI testing tools while delivering top-notch services to clients.
            </p>
          </div>

          {/* What is EDI Testing? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is EDI Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              EDI testing is a type of software application testing which verifies that all electronic records have been transmitted and stored as expected. Tests are executed to compare elements, segments, and sub-elements between the latest generated file and the baseline file of the software system.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              EDI Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality electronic data interchange testing services to global clients for over two decades. Our extensive experience enables us to understand each client's unique needs and provide them with customized services as per their business requirements. Some of the key EDI testing processes we help you with include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Leveraging parsing algorithms for required file comparisons.</li>
              <li>Analyzing EDI records to identify differences in the file.</li>
              <li>Designing for scalability in EDI tests.</li>
              <li>Eliminating application dependencies and managing large batches of claim data.</li>
              <li>Utilizing parameterization of input variables to make tests more flexible and adaptable.</li>
              <li>Developing a reporting mechanism to highlight EDI data comparisons.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of EDI Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              EDI specifications are usually complex and extensive, which makes manual testing highly labor-intensive and cumbersome. Our automated EDI testing services provide a series of benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Providing major business value.</li>
              <li>Lowering costs.</li>
              <li>Improving system speed.</li>
              <li>Boosting accuracy and business efficiency.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for EDI Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing EDI testing services to **Nimble Acuity** can give you access to a series of benefits. Some of the key reasons to choose us are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing:** We provide highly cost-effective and affordable pricing packages that will suit your business requirements and budget.</li>
              <li>**Data Security:** We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all your data is kept safe and confidential.</li>
              <li>**Experienced Testers:** Our team comprises some of the most qualified, certified, and experienced EDI testers who work with the latest tools and technologies.</li>
              <li>**Superior Quality:** As an ISO certified organization, we ensure that all services delivered are of the best quality and are completely flawless.</li>
              <li>**Single Point of Contact (SPOC):** A dedicated project manager will be assigned to be the single point of contact for all your needs.</li>
              <li>**Highly Scalable:** We have the required expertise and bandwidth to scale up services and expand the number of resources as and when needed.</li>
              <li>**Quick Turnaround Time:** Our team operates from several global delivery locations, providing us with a time zone advantage that ensures quick delivery.</li>
              <li>**World-class Infrastructure:** We have access to the best and latest EDI testing tools, software, and world-class office spaces.</li>
              <li>**24/7 Support:** All our teams, including sales, marketing, and project management, are available around the clock to resolve any issues you may have.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing top-quality EDI testing and other software testing services to global clients. We have some of the most renowned, certified, and experienced EDI testing experts who can take care of all your requirements with ease. We leverage the latest and best EDI testing tools and technologies while delivering top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient EDI testing service provider, then your search ends here. Get in touch with us today!
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

export default EDITesting;