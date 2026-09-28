import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const TypesOfSoftwareTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Types of Software Testing
            </h2>
            <p className="text-lg text-gray-600">
              Ensure software quality, reliability, and security with our comprehensive and cost-competitive software testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Software testing is a crucial part of the development lifecycle that ensures the quality and success of a product. At **Nimble Acuity**, we offer a wide range of software testing services designed to ensure quality assurance, verification, validation, and reliability. We also provide tools for tracking generic metrics to give you complete insight into your application's performance.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Software Tests We Perform
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our expert testers can perform a variety of tests tailored to your specific needs. Key tests we perform include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Compatibility Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Compatibility Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We quickly and inexpensively test your application on a wide range of operating systems, browsers, databases, and hardware to ensure a seamless experience for your users.
                </p>
              </div>

              {/* Usability Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Usability Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our cost-effective usability testing determines whether your software system meets its intended purpose by identifying its strengths and weaknesses, thus increasing its overall usability.
                </p>
              </div>

              {/* Accessibility Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Accessibility Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We perform all-inclusive accessibility tests to ensure your software can be used by the widest possible audience, providing precise results with standard, point-by-point testing techniques.
                </p>
              </div>

              {/* Performance Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Performance Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We carry out meticulous testing procedures to determine the responsiveness and reliability of your software application and assess its readiness for deployment.
                </p>
              </div>
              
              {/* Scalability Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Scalability Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  As an extension of performance testing, we conduct rigorous scalability tests to identify any problems that could impede your application's ability to grow.
                </p>
              </div>

              {/* Application Security Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application Security Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  This essential test evaluates your application's security against threats like viruses and worms. We perform full vulnerability testing on cloud, mobile, and web platforms.
                </p>
              </div>
              
              {/* Functionality Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Functionality / Feature-Level Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We validate the proper functionality of your application, including the mathematical and algorithmic accuracy of scientific and financial software, as well as GUI functionality.
                </p>
              </div>
              
              {/* Regulatory-Compliance Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Regulatory-Compliance Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our proven methodologies facilitate the resolution of compliance issues and the submission of necessary documentation to meet regulatory guidelines and mandates.
                </p>
              </div>

              {/* QA Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">QA Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We perform software QA testing during the integration and final test phases, combining requirements-based, regression, and feature-level tests to ensure the success of your product.
                </p>
              </div>
            </div>
          </div>
          
          {/* Test Automation */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Test Automation Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our test automation frameworks are customized to your specific requirements, with the ultimate goal of increasing testing speed and reducing your time to market. We verify and validate your software to ensure the integrity of your system. Our framework includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Designing of test case GUI components</li>
              <li>Development of tool feasibility evaluation automation</li>
              <li>Preparing test data frameworks</li>
              <li>Implementation of test execution (record, playback, scripting, etc.)</li>
              <li>Automation framework solutions for the entire software testing lifecycle</li>
              <li>Managing automation of unit, functional, load, and performance testing</li>
              <li>Providing runtime debugging for issues like memory leaks</li>
              <li>Executing requirements analysis and standards compliance consulting</li>
              <li>Program performance portals to monitor distributed resources</li>
            </ul>
          </div>

          {/* Why Outsource */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Software Testing to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our wide range of software testing methods ensures the success of your software system. By choosing us, you benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Accurate Verification and Validation** to ensure the software meets client specifications.</li>
              <li>**Enhanced System Integrity** through the detection of error-prone areas.</li>
              <li>**Added Value** to your software through precise testing methodologies.</li>
              <li>**Reduced Communication Gaps** between your team and our testers.</li>
              <li>**Decreased Security Risks** from cloud, mobile, and web attacks.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-8 font-medium">
              We offer a comprehensive suite of software testing services at affordable prices to ensure the success and security of your software.
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

export default TypesOfSoftwareTesting;