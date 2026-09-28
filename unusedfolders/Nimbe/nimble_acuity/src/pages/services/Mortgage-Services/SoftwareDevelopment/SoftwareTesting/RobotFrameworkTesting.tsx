import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const RobotFrameworkTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Robot Framework Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get an open-source automation framework from our experienced team for your acceptance testing and robotic process automation needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a service provider to help with automation testing for acceptance testing, ATDD, and robotic process automation? Are you unable to find the right resources with the experience to handle your Robot Framework testing requirements? The best step for you is to outsource your needs to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a pioneer in providing high-quality Robot Framework testing services. We can be your one-stop shop for all your software testing needs. The Robot Framework is a keyword-driven test automation framework written in Python. Our experienced and skilled experts can take care of all your needs with ease, leveraging the best tools to deliver top-notch services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Robot Framework Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We have been catering to the software testing needs of clients globally for years. We understand each customer's unique project requirements and provide services designed to suit their business needs. Our key Robot Framework testing processes include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Installing Python to set up the Robot Framework.</li>
              <li>Creating your Robot Framework project for the testing process.</li>
              <li>Developing tests within the Robot Framework.</li>
              <li>Implementing keywords in the software test.</li>
              <li>Creating keywords from methods or functions.</li>
              <li>Initializing files for test execution.</li>
              <li>Executing the tests in the Robot Framework.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Robot Framework Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Robot Framework testing offers several benefits for both the end-users and the software development team. Some of the major advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It is an open-source framework.</li>
              <li>Easy to install and use.</li>
              <li>No programming language knowledge is required for test cases.</li>
              <li>Keywords are easy to understand, write, and maintain.</li>
              <li>Test cases are programming language-agnostic.</li>
              <li>Automatically generates reports and HTML logs.</li>
              <li>Provides libraries for testing various applications.</li>
              <li>Makes it easier for test engineers to write and maintain tests.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Robot Framework Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your Robot Framework testing services to us provides you with a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing:** We provide affordable and flexible pricing options that suit your business requirements and budget.</li>
              <li>**Information Security:** We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all your confidential data is completely safe.</li>
              <li>**Experienced Testers:** Our team of skilled specialists is trained to work with the latest automation frameworks and provide high-quality services.</li>
              <li>**Superior Quality:** Our testing processes undergo several levels of quality checks to ensure all services delivered are of superior quality.</li>
              <li>**Single Point of Contact:** You will be assigned a dedicated project manager to handle all your needs and resolve any issues.</li>
              <li>**Round-the-Clock Support:** Our teams are available 24/7 to answer your queries via email or phone.</li>
              <li>**Shorter Turnaround Times:** Our global presence allows us to provide top-quality services within a quick turnaround time.</li>
              <li>**Easily Scalable:** We have the required bandwidth and expertise to scale up service requirements and team size as needed.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality Robot Framework testing services. Our team of skilled and talented experts can handle all your needs in a hassle-free manner. We use the best tools in the industry to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective Robot Framework testing service provider? Your search ends here. Get in touch with us today!
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

export default RobotFrameworkTesting;