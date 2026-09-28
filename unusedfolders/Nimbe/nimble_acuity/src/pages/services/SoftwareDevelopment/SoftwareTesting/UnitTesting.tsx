import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const UnitTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Unit Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get each unit or component of your software tested and validated in a hassle-free manner.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is unit testing of your software system proving to be a time-consuming task for your organization? Are you finding it challenging to find the right and experienced unit testing experts who can handle your testing requirements? The best option is to outsource unit testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading unit testing service provider that can easily take care of all your needs. We carry out unit testing during the development phase by isolating a section of the code and verifying its correctness. We use the latest tools and technologies to test each unit, whether it's a function, method, module, or procedure.
            </p>
          </div>

          {/* Unit Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Unit Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a pioneer in providing quality software unit testing services to clients around the globe for over two decades. Our experience helps us provide customized services that fit your business needs. Some of the key unit testing services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Statement Coverage</h4>
                <p>A white box testing technique where we test all statements in the source code at once. We help you with accurate statement coverage testing within a quick turnaround time.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Branch Coverage</h4>
                <p>In this method, we test each possible branch at a decision-making point, ensuring that the entire code is validated and no branch is left untested.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Decision Coverage</h4>
                <p>We test each outcome, whether true or false, in a Boolean expression. Our team has the skills and resources to provide accurate and efficient decision coverage testing services.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Condition Coverage</h4>
                <p>Also known as expression coverage, this helps to evaluate each conditional statement in the source code. We perform conditional coverage testing to ensure all possible bugs are detected and corrected.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Finite State Machine Coverage</h4>
                <p>This is a complex type of coverage testing that depends on the software's design behavior. We help you understand how many specific states are reached and transited.</p>
              </div>
            </div>
          </div>

          {/* Key Advantages of Unit Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Advantages of Unit Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Unit testing is carried out on single components of a larger software system, ensuring that all functionalities run smoothly. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps developers understand the code base and enables them to quickly make changes.</li>
              <li>It saves costs by helping fix bugs early in the development stage.</li>
              <li>Unit tests serve as accurate documentation for the testing process.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing unit testing services to us gives you access to a plethora of benefits. Some of the key reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Packages:</strong> We provide highly flexible pricing options that will suit your business requirements and budget perfectly.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, we ensure your data is kept safe in secure locations at all times.</li>
              <li><strong>Talented Software Testers:</strong> We have some of the most skilled and experienced unit testing experts who work with the latest tools and technologies to deliver top-notch services.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO-certified organization, and our testing goes through a multi-level quality assurance process before it is delivered.</li>
              <li><strong>Dedicated Manager:</strong> We assign a dedicated project manager who will be the single point of contact for all your needs and issues.</li>
              <li><strong>Easily Scalable Services:</strong> Our team has the required skills and bandwidth to handle any volume of unit testing requirements and scale up as the project demands.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Flawless Code?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been one of the premier providers of unit testing services and a plethora of other software testing services to global clients. We have some of the most qualified and skilled experts on board who can take care of all your testing requirements with ease, leveraging the best and latest tools and technologies.
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

export default UnitTesting;