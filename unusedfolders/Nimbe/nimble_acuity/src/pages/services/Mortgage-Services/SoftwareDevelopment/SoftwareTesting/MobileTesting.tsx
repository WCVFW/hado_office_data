import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const MobileTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mobile Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your mobile application tested for usability, functionality, and consistent performance by choosing our mobile testing services starting at just $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your organization unable to test your mobile application for consistency, usability, performance, and functionality? Are you finding it difficult to find the right resources who are experienced to handle your mobile testing requirements? Then, the best option for you would be to outsource mobile testing services to a skilled and experienced mobile testing service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a mobile testing service provider that can be your single stop shop for all your mobile application testing needs. We have some of the most qualified and experienced mobile app testers on board who can leverage the latest mobile testing tools and take care of all your needs in a hassle-free manner.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Mobile Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality mobile testing services to clients around the globe for over two decades. Our vast experience in this field has enabled us to understand each customer’s specific requirements with ease and provide them with services that are customized to their business needs. Some of the key mobile testing services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Performance Testing:</span> We can help you with accurate performance testing services for your mobile application. We help you determine the speed, stability, and responsiveness of the mobile app when it is subjected to different loads and correct them if necessary.
              </li>
              <li>
                <span className="font-semibold">Manual Testing:</span> Sometimes real human experience can provide you with expected results which cannot be simply automated. Our team can help you with accurate manual testing in the form of complex tests, physical interface tests, and exploratory tests within a quick turnaround time.
              </li>
              <li>
                <span className="font-semibold">Automated Testing:</span> Some of the mobile testing processes are too complex for human testers. In such cases, automated testing is required. Our team can help you with automated testing services which will help you reach the market faster with better and high-quality products.
              </li>
              <li>
                <span className="font-semibold">Mobile Device Testing:</span> Mobile device testing is equally important as compared to testing mobile software. We have the required skills and expertise to provide clients with a series of mobile device testing services for interruptions, biometric, NFC payments, location-based services, etc.
              </li>
              <li>
                <span className="font-semibold">Functionality Testing:</span> We can help clients with flawless functionality testing services for their mobile applications. This ensures that all the functionalities of the mobile app are working smoothly without any kind of glitches.
              </li>
              <li>
                <span className="font-semibold">Memory Leakage Testing:</span> When the system is unable to de-allocate memory when it is not in use, memory leakage may occur. We can help clients with memory leakage testing services which will ensure that there are no leakages during the development of the application.
              </li>
              <li>
                <span className="font-semibold">Usability Testing:</span> Our team can help you with accurate usability testing services for your mobile application. Our services determine how easy-to-use the mobile app is for the end-users and how it can be made better in the future.
              </li>
              <li>
                <span className="font-semibold">Installation Testing:</span> Installation testing determines if the mobile app is being installed correctly along with all its features and modules and the app is working as per the expectations. We can help you with accurate installation testing services for your mobile application.
              </li>
              <li>
                <span className="font-semibold">Security Testing:</span> The security of your information is of the highest importance for us. Our security testing ensures that all your data is safe from any kind of external intruders. We provide our clients with flawless security testing services.
              </li>
              <li>
                <span className="font-semibold">Location Testing:</span> We have the required skills and expertise to provide clients with accurate location testing services for their mobile applications.
              </li>
              <li>
                <span className="font-semibold">Backward Compatibility Testing:</span> A mobile application developed on a particular platform should continue to work on the newer version. Similarly, a newer version of the app must work with the older version of the platform. We can help you with this backward compatibility testing within a quick turnaround time.
              </li>
              <li>
                <span className="font-semibold">Blackbox Testing:</span> In Blackbox testing, the functionality of the application is tested without looking into the internal code. Our team can provide clients with accurate Blackbox testing services in a completely efficient manner.
              </li>
              <li>
                <span className="font-semibold">Load Testing:</span> Load testing is done to determine and monitor the behavior of the mobile application when it is subjected to the expected load. Our team has the required skills to provide clients with accurate load testing services within a quick turnaround time.
              </li>
            </ul>
          </div>

          {/* Key Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Mobile Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mobile application testing is a process of software testing which tests the usability, functionality, performance, and consistency of a mobile application. They are done using both manual and automated types of testing. Mobile application testing enables businesses to build applications that are scalable and accessible across different platforms and devices. Some of the key benefits are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Build apps that are scalable across multiple platforms.</li>
              <li>Build applications that are accessible on multiple devices.</li>
              <li>The easy portability of mobile applications.</li>
              <li>Build easily compatible applications with other platforms, operating systems, etc.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Mobile Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing mobile testing services to **Nimble Acuity** can give you access to a series of benefits. Some of the key reasons to choose us as your mobile testing service provider are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing Options:** Working with us for mobile testing services is highly cost-effective and affordable. We provide highly flexible pricing options which will suit your business objectives and budget perfectly.</li>
              <li>**Information Security:** We are an ISO/IEC 27001:2022 ISMS certified organization that ensures all your data is kept safe in secure locations.</li>
              <li>**High-quality Services:** We are an ISO certified organization that ensures all the services delivered by us will be of superior quality at all times.</li>
              <li>**Skilled Mobile Testers:** We have some of the most skilled and experienced mobile app testing experts who can take care of all your requirements with ease. We leverage the latest mobile testing tools and software to deliver top-quality services.</li>
              <li>**Dedicated Manager:** We will assign a dedicated project manager to you. This manager will be the single point of contact for all your needs and resolve any kind of query that you may have.</li>
              <li>**Scalable Testing Services:** We provide highly scalable services. We have the required bandwidth and resources to scale up the service requirements and increase the number of resources on the project as and when the client asks for it.</li>
              <li>**Short Turnaround Time:** Our team of mobile app testers operates through several delivery centers across the globe, which enables us to deliver quality services within a quick turnaround time.</li>
              <li>**Best Infrastructure:** We have access to the right tools and technologies along with world-class workspaces from where we operate.</li>
              <li>**Round the Clock Support:** Our teams are available at all times to resolve your issues and answer your queries via email or phone.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been one of the leading providers of mobile testing services and a plethora of other software testing services to global clients. Our team comprises some of the most qualified, certified, and talented mobile testing experts on board who can take care of your mobile app testing requirements without any hassles. We make use of the latest mobile application testing tools and software and deliver quality services to global clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an experienced and reliable mobile testing service provider? Then, look no further. Get in touch with us today!
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

export default MobileTesting;