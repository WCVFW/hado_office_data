import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const APITesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              API Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Verify and validate your application programming interface by choosing our API testing services from our experienced team of testers at prices starting at $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to test and validate your application programming interface? Is it too difficult to find the right set of skilled and experienced API testing specialists? Then, the best option for you would be to outsource API testing services to an experienced and skilled provider who can take care of all your requirements.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has been a pioneer in providing quality API testing services and can take care of all your needs in an efficient manner. We have some of the most qualified and experienced API testing experts on board who can deliver top-notch services to clients quickly. We make use of the best API testing tools to deliver top-quality services.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              API Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been one of the leading providers of quality API testing services to clients around the globe. We can understand each customer’s specific testing requirements and provide them with customized services. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Discovery Testing Services:</span> In this type of testing, the test group must execute the set of calls documented in the API. Our team of software testers can help you with accurate discovery testing services for your software application within a quick turnaround time.
              </li>
              <li>
                <span className="font-semibold">Usability Testing Services:</span> This helps verify if the API is user-friendly and completely functional. It also helps to check if the API integrates well with other platforms. Our team can help you with flawless usability testing for your APIs and deliver high-quality services.
              </li>
              <li>
                <span className="font-semibold">Security Testing Services:</span> This type of testing checks what kind of authentication is required and if critical data is encrypted. Our team of highly skilled API testers can help you with accurate security testing services for your application APIs.
              </li>
              <li>
                <span className="font-semibold">Automated Testing Services:</span> We have the required skills and expertise to provide clients with accurate automated testing services. Our team can help you with the scripts that can be used to execute the API regularly.
              </li>
              <li>
                <span className="font-semibold">Documentation:</span> We provide clients with accurate and error-free documentation for their API testing requirements. This provides the relevant information required to interact with the API and is part of the final deliverable.
              </li>
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of API Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              API testing has a series of benefits for the development team as well as the end-user of the application. Some of the major benefits are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It helps to access the application without any user interface.</li>
              <li>It helps protect from any kind of malicious code or breakage.</li>
              <li>It is a highly cost-effective testing process.</li>
              <li>It is a technology-independent process of testing.</li>
              <li>It is less time-consuming compared to functional and validation testing.</li>
            </ul>
          </div>

          {/* API Testing Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              API Testing Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Being one of the leading providers of API testing services, we believe in providing clients with high-quality services quickly. We follow a streamlined and systematic API testing process:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Scope Definition:</span> In the first step, our team will understand the functionality of the API and clearly define the scope of the program.
              </li>
              <li>
                <span className="font-semibold">Apply Testing Techniques:</span> Once the scope is defined, our team applies various testing techniques such as boundary value analysis, equivalence classes, and error guessing.
              </li>
              <li>
                <span className="font-semibold">Input Parameters Definition:</span> In this step, the input parameters are planned and defined appropriately.
              </li>
              <li>
                <span className="font-semibold">Test Execution:</span> In the final step, our team will execute the test cases and compare the results to the actual results.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for API Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing API testing services to **Nimble Acuity** gives you access to a series of benefits. Some of the major reasons to choose us as your API testing service provider are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing Options:** Our services are highly cost-effective and affordable. We provide pricing options that will suit your business requirements and budget perfectly.</li>
              <li>**Talented API Testers:** Our team comprises some of the most qualified and experienced API testing specialists who can take care of all your testing needs. We can work on the latest API testing tools and deliver error-free services.</li>
              <li>**Superior Quality Services:** We are an ISO certified organization that ensures all the services delivered by us will be of superior quality. We undertake a multi-level quality assurance process before the testing results are shared with the client.</li>
              <li>**Data Security:** We are an ISO/IEC 27001:2022 ISMS certified organization that ensures all your software data is kept safe in secure locations.</li>
              <li>**Dedicated Manager:** When you start working with us, we will assign you a dedicated project manager. This manager will be the single point of contact for all your needs and issues.</li>
              <li>**24/7 Support:** We ensure that we are always available for the client. All our teams are available at all times to answer your queries via phone or email.</li>
              <li>**Quick Turnaround Times:** Our team operates through several delivery locations spread across the globe in different time zones. This provides us with a time zone advantage and allows us to deliver top-quality services quickly.</li>
              <li>**World-class Infrastructure:** We have access to world-class workspaces and the latest and best API testing tools and software.</li>
              <li>**Scalable Testing Services:** We provide highly scalable services. We have the required resources and bandwidth to ramp up the service requirements and increase the number of resources as and when the client asks for it.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality API testing services and a series of other software testing services to clients around the globe. We have some of the most skilled and talented API testing experts on board who can take care of all your testing needs with ease. We leverage the latest and best API testing tools and technologies to deliver the best quality services to clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective API testing service provider? Then, look no further. Get in touch with us today!
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

export default APITesting;