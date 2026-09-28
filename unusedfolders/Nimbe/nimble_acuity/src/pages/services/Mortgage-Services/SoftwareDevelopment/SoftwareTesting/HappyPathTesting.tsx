import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const HappyPathTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Happy Path Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your software functionalities tested by choosing our happy path testing services from an experienced team of testers at prices starting at $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is it too time-consuming and cumbersome to test every functionality of your software application? Are you finding it challenging to find the right resources who can handle your happy path testing requirements? Then, the best option for you would be to outsource happy path testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a happy path testing service provider that can cater to all your requirements in a hassle-free manner. Happy path testing is a software testing process that uses a known input, executes without any kind of exception, and generates an expected output. We make use of the best software testing tools and deliver high-quality services.
            </p>
          </div>

          {/* Our Happy Path Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Happy Path Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality happy path testing services to global clients for over two decades. This vast experience enables us to deliver customized happy path testing services to clients by understanding their exact requirements. Some of the key happy path testing services we provide include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Functional Testing Services:</span> We have the required skills and expertise to provide clients with accurate functional testing services. We use the best tools and technologies and deliver top-quality services to help you test all the functionalities of your software application.
              </li>
              <li>
                <span className="font-semibold">Smoke Testing Services:</span> Our team at **Nimble Acuity** has the required expertise to provide clients with flawless smoke testing services. Our services ensure that the build is stable and the most important functions of the software operate as they are expected to.
              </li>
              <li>
                <span className="font-semibold">Sanity Testing Services:</span> Sanity testing ensures that code changes are functioning correctly. We provide our clients with accurate and error-free sanity testing services which ensure that the software application is free of any kind of bugs.
              </li>
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Happy Path Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Happy path testing services have a series of benefits for both the end-user and the software development team. Some of the key benefits of happy path testing are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It makes use of ANSI C as the default programming language along with Java and VB.</li>
              <li>It supports most of the protocols.</li>
              <li>It emphasizes familiarity with the UI.</li>
              <li>It emphasizes the domain and functionality of the software application.</li>
              <li>It aids in correlation in a much better manner.</li>
              <li>This testing is helpful when there are time constraints.</li>
              <li>It helps understand the prompts and responses given by the software application.</li>
              <li>It provides a nice GUI-generated script through a one-click recording.</li>
              <li>It has a great monitoring and analysis interface.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Happy Path Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing happy path testing services to us can provide you with a series of benefits. Some of the key reasons to choose us as your happy path testing partner are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing Options:** Our services are highly affordable with flexible pricing that perfectly suits your budget.</li>
              <li>**Information Security:** As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is safe and secure.</li>
              <li>**Skilled Happy Path Testers:** Our team comprises qualified and experienced happy path testing experts who use the latest methodologies to deliver top-quality services.</li>
              <li>**Superior Quality Services:** We are an ISO-certified organization, and all services undergo meticulous quality checks before delivery.</li>
              <li>**Dedicated Manager:** We assign a dedicated project manager to be your single point of contact for all your needs and issues.</li>
              <li>**Highly Scalable Services:** We have the required skills and bandwidth to easily scale up the service requirements and resources as needed.</li>
              <li>**Short Turnaround Time:** Our teams operate from global delivery centers, enabling us to provide services with a quick turnaround time.</li>
              <li>**World-class Infrastructure:** We have access to the latest tools, technologies, and state-of-the-art workspaces.</li>
              <li>**Round-the-Clock Availability:** Our teams are available 24/7 to resolve any queries you may have via phone or email.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of happy path testing and other software testing services. We have some of the most qualified and experienced happy path testing experts on board who can take care of all your requirements with ease, leveraging the latest tools and technologies to deliver top-notch services quickly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective happy path testing service provider? Then you have come to the right place. Get in touch with us today!
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

export default HappyPathTesting;