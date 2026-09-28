import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const SoakTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Soak Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Detect performance-related issues and endurance of your application by opting for our soak testing services from an experienced team of testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unable to test the endurance of your software application's performance and response time? Do you lack skilled and experienced resources who can handle your soak testing requirements? The best option for you is to outsource soak testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading soak testing service provider that can be your one-stop shop for all your needs. Soak testing is primarily used to identify and optimize potential problems like resource and memory leaks, performance degradation over time, and system errors.
            </p>
          </div>

          {/* Our Soak Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Soak Testing Services - Best Practices We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Soak testing subjects a system to a continuous load for a long period to observe its behavior under production use. **Nimble Acuity** has been a pioneer in providing quality soak testing services to global clients for over two decades. Our services guarantee an application's fitness and help detect bugs that other performance tests may miss. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Test Environment Planning:</span> Our experts plan the testing environment, including the necessary software, hardware, operating system, and database, before testing begins.
              </li>
              <li>
                <span className="font-semibold">Test Scenario Planning:</span> We help you design, review, and finalize test scenarios, as well as determine the load that will be subjected to the software system.
              </li>
              <li>
                <span className="font-semibold">Soak Test Estimation:</span> We provide accurate estimations for the duration of soak tests, which are crucial for the scope of the software system.
              </li>
              <li>
                <span className="font-semibold">Risk Analysis:</span> Our skilled testers provide accurate and effective risk analysis, identifying how the test remains consistent over time, detecting hidden bugs, and identifying external interferences that could reduce performance.
              </li>
            </ul>
          </div>

          {/* Advantages of Soak Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Advantages of Soak Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soak testing helps clients detect bugs and understand how the system will respond under higher loads. Some of the key advantages of soak testing are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It guarantees the application's fitness.</li>
              <li>It shows how sustainably the system runs over time.</li>
              <li>It detects bugs that may go undetected on other performance tests.</li>
              <li>It identifies performance deterioration due to high continuous loads, helping to make the software more robust.</li>
              <li>The results can be used to validate and improve the client's infrastructure demands.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity for Soak Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Soak Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing soak testing services to us provides a series of benefits. Some of the key reasons to choose us as your soak testing partner are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing Options:** Our services are highly affordable with flexible pricing that perfectly suits your budget.</li>
              <li>**Information Security:** As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is safe and secure.</li>
              <li>**Skilled Software Testers:** Our team comprises qualified and experienced soak testing experts who use the latest methodologies to deliver top-quality services.</li>
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
              **Nimble Acuity** is a leading provider of soak testing and other performance testing services. We have some of the most qualified and experienced soak testing experts on board who can take care of all your requirements with ease, leveraging the latest tools and technologies to deliver top-notch services quickly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective soak testing service provider? Then you have come to the right place. Get in touch with us today!
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

export default SoakTesting;