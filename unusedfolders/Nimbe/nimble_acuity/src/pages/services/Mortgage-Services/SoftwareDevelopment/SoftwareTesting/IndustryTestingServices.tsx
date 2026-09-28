import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const IndustryTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Testing Services for Industries
            </h2>
            <p className="text-lg text-gray-600">
              In an age where we rely on computers and software programs for all kinds of tasks, whether big or small, the importance of software testing cannot be ignored.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As the wave of digital transformation has taken center stage across all industries and the need to speed up the time to market is severely felt by different businesses today, software testing is gaining tremendous importance like never before.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Testing software is getting more complex than ever. With different software teams working on different modules across different parts of the world, integrating all test case scenarios and testing them in real time can prove to be cumbersome for the testers. It is important to obtain high-quality results in all the stages of the software development life cycle to ensure a project's success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the practical problems being faced by companies belonging to various industry verticals and specialize in providing software testing for specific industries.
            </p>
          </div>

          {/* Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Testing Services for Different Industries
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our team of highly experienced software application testers is trained to work on different types of testing tools and advanced technologies. Some of the key software testing services we provide for diverse industries include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 lg:columns-3">
              <li>
                <span className="font-semibold">Acceptance Testing</span> - We check if the software application meets customer requirements.
              </li>
              <li>
                <span className="font-semibold">Compatibility Testing</span> - We ensure software is compatible with different hardware, operating systems, and browsers.
              </li>
              <li>
                <span className="font-semibold">Functional Testing</span> - We validate that all applications perform their functions correctly.
              </li>
              <li>
                <span className="font-semibold">Load Testing</span> - We check how the software behaves under normal and peak load conditions.
              </li>
              <li>
                <span className="font-semibold">Regression Testing</span> - We perform repeatable and consistent testing for each new release.
              </li>
              <li>
                <span className="font-semibold">Stress Testing</span> - We evaluate the extent to which the software can bear the load before failure.
              </li>
              <li>
                <span className="font-semibold">Unit Testing</span> - We test individual components to ensure proper function before system integration.
              </li>
              <li>
                <span className="font-semibold">System Testing</span> - We conduct tests on a fully-integrated system to check compliance with specified requirements.
              </li>
              <li>
                <span className="font-semibold">White Box Testing</span> - We test based on the analysis of the internal structures and functions of the software.
              </li>
              <li>
                <span className="font-semibold">Performance Testing</span> - We assess the scalability and benchmark the performance of the software.
              </li>
              <li>
                <span className="font-semibold">Integration Testing</span> - We test modules that are clubbed together as a combination or a group.
              </li>
              <li>
                <span className="font-semibold">Conformance Testing</span> - We check if the software application conforms to industry standards.
              </li>
              <li>
                <span className="font-semibold">Smoke Testing</span> - We perform a quick test to check most major functions.
              </li>
            </ul>
          </div>

          {/* Industries We Cater To */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Industries We Cater To
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been providing software testing services for years and has served customers across various verticals and domains. Some of the key industries we serve include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 lg:columns-3">
              <li>
                <span className="font-semibold">Automobile:</span> We help clients stay updated with the latest technologies by implementing the right testing solutions.
              </li>
              <li>
                <span className="font-semibold">Consumer:</span> We assist consumer goods companies in meeting increasing demands with our software testing expertise.
              </li>
              <li>
                <span className="font-semibold">Energy & Utilities:</span> We provide testing solutions for new IT software and tools in this domain.
              </li>
              <li>
                <span className="font-semibold">Insurance:</span> We provide top-quality testing services to ensure insurance software is flawless and reliable.
              </li>
              <li>
                <span className="font-semibold">Banking and Financial Services:</span> Our experience helps us provide the best testing services to this critical sector.
              </li>
              <li>
                <span className="font-semibold">E-Learning:</span> We ensure e-learning software and tools are well-tested before they are launched.
              </li>
              <li>
                <span className="font-semibold">Healthcare:</span> We provide systematic medical application testing to ensure new technologies are bug-free.
              </li>
              <li>
                <span className="font-semibold">Travel & Logistics:</span> We help these industries stay updated with technological advances through our testing tools.
              </li>
              <li>
                <span className="font-semibold">Manufacturing:</span> We help manufacturers develop high-quality products using the latest technologies and tested software.
              </li>
              <li>
                <span className="font-semibold">Retail:</span> Our well-tested software and tools help reduce delivery time for the retail industry.
              </li>
              <li>
                <span className="font-semibold">Telecom:</span> We provide the best testing services for telecom software to meet the growing demand for innovation.
              </li>
              <li>
                <span className="font-semibold">Pharmaceuticals and Life Sciences:</span> Our top-quality testing services ensure various products are managed perfectly.
              </li>
              <li>
                <span className="font-semibold">Media, Entertainment & Publishing:</span> We provide testing services for companies focused on digital media content.
              </li>
              <li>
                <span className="font-semibold">Hi-Tech:</span> We specialize in providing testing services to clients in the hi-tech domain.
              </li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Industrial Software Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your software testing requirements to us comes with its own benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Precise Methodologies:** We provide testing services that add value to your software specific to your industry.</li>
              <li>**Accurate Services:** We provide highly accurate testing services that conform to various industry standards.</li>
              <li>**Scalability:** You can easily scale up or down the number of resources required at short notice.</li>
              <li>**Quick Turnaround:** We provide software testing services within a quick turnaround time.</li>
              <li>**Skilled Resources:** Our combination of skilled resources, latest tools, and state-of-the-art infrastructure ensures excellent services.</li>
              <li>**Cost-Effective:** We offer reliable testing services at affordable prices.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been providing high-quality industry-standard software testing services to global clients for years. We provide an end-to-end service that ensures the software application being tested is free of errors, functions smoothly, and is high on performance. Our software testers are highly trained in using the latest tools and technologies and provide the best services within a quick turnaround time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you have any kind of software testing service requirement, feel free to get in touch with us and we will get back to you within 24 hours.
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

export default IndustryTestingServices;