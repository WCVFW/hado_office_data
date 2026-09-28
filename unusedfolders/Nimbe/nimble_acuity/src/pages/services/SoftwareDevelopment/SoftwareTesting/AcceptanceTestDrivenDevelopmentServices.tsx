import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const AcceptanceTestDrivenDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Acceptance Test-Driven Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to error-free acceptance test-driven development from an experienced team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is Acceptance Test-Driven Development (ATDD)?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Do you find it difficult to run acceptance tests and know if a certain functionality of the software application exists? Are you unable to find the right resources to train and handle your acceptance test-driven development requirements? Then, partnering with an experienced service provider is the best option for you.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading acceptance test-driven development service provider that can cater to all your needs with ease. We have some of the best and most highly skilled ATDD specialists on board who understand the main goal of acceptance test-driven development and deliver top-notch services.
            </p>
          </div>

          {/* ATDD Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Acceptance Test-Driven Development Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We have been a leading provider of acceptance test-driven development services for over 26 years. Our experience enables us to understand each client's specific business requirements and provide them with customized services. Our process includes:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Creating Tests */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Creating Test Cases</h4>
                <p className="text-gray-700 leading-relaxed">
                  We create tests based on conditions, functional restrictions, and business cases to ensure comprehensive coverage.
                </p>
              </div>
              
              {/* Running Tests */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Running Tests to Identify Failures</h4>
                <p className="text-gray-700 leading-relaxed">
                  We run the created tests to ensure that functionalities fail, thereby proving they are non-functional before development begins.
                </p>
              </div>

              {/* Writing Code */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Writing Code to Pass Tests</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team writes the code to ensure that the tests pass, focusing on delivering the required functionality.
                </p>
              </div>
              
              {/* Refactoring Code */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Refactoring for Quality Standards</h4>
                <p className="text-gray-700 leading-relaxed">
                  We adjust and refactor the code to comply with high code quality standards, ensuring a clean and maintainable codebase.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnering with **Nimble Acuity** for ATDD services gives you access to a series of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Packages:</strong> Our services are highly cost-effective and tailored to suit your business requirements and budget.</li>
              <li><strong>Experienced ATDD Experts:</strong> We have some of the most qualified and experienced specialists on board, trained to work on the latest tools and software.</li>
              <li><strong>Error-free Services:</strong> As an ISO-certified organization, we ensure all services are of the best quality, undergoing a thorough quality assurance process before delivery.</li>
              <li><strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your information is kept safe in secure locations and handled only by authorized personnel.</li>
              <li><strong>Dedicated Project Manager:</strong> You will be assigned a dedicated project manager who will be your single point of contact for all your needs.</li>
              <li><strong>Round-the-Clock Support:</strong> Our teams are available at all times to answer your queries and resolve any project issues.</li>
              <li><strong>Easily Scalable Services:</strong> We have the skills and bandwidth to ramp up the service requirements and increase the number of resources on the project as and when you need it.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Development Process?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality acceptance test-driven development and a series of other software testing services to clients around the globe. We have some of the most skilled and experienced ATDD experts on our team who can cater to all your needs with ease. We leverage the power of the latest and best ATDD software and technologies to deliver top-quality services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient acceptance test-driven development service provider, then you have come to the right place. Get in touch with us today!
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

export default AcceptanceTestDrivenDevelopmentServices;