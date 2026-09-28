import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ContinuousIntegrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Continuous Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Simplify Your Development Workflow with Seamless CI Solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is Continuous Integration?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              **Continuous Integration (CI)** is a development practice where isolated codes are tested and immediately reported when they are introduced into a shared repository. The continuous testing team checks the codes and verifies them using automated builds and tests. This makes it a preferred choice for IT companies to quickly detect, locate, and rectify any inconsistencies or defects in the code database.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a pioneer continuous integration testing company with over 26 years of experience. Our professional software testers understand the objectives and significance of continuous software integration. Outsourcing CI testing to us enables you to set up and perform continuous integration for your source repository.
            </p>
          </div>

          {/* CI Process and Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Continuous Integration Services Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              In traditional development, integration is often done at the end, which can take weeks or months. Continuous integration, however, allows for simultaneous building, testing, and integration. Our CI team leverages a CI server to perform builds and software integration. Each change to the source code triggers code metrics and an automated build, followed by test environment deployment and automated test execution. This process requires expertise, discipline, and a thorough understanding of the development cycle.
            </p>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">01.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Code Check and Rectification</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Our software testers check the codes and immediately rectify any issues they find.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">02.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">CI Server Integration and Monitoring</h4>
                  <p className="text-gray-700 leading-relaxed">
                    They leverage the Continuous Integration (CI) server to monitor the repository and release the deployable codes.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-start md:space-x-8">
                <span className="text-4xl font-bold text-[#006A7C] mb-2 md:mb-0">03.</span>
                <div>
                  <h4 className="text-xl font-semibold text-[#006A7C] mb-1">Developer Feedback and Bug Fixes</h4>
                  <p className="text-gray-700 leading-relaxed">
                    After obtaining the labeled build, they inform the software developer, who then fixes any discrepancies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The main advantage of continuous integration testing is that it makes your code dependable after automated testing. Here are just a few of the many benefits of partnering with **Nimble Acuity**:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Solutions:</strong> Our CI testing approach assesses risks and provides services at the best market rates. You can choose the scope, time, and resources you want.</li>
              <li><strong>Modern Infrastructure:</strong> Our continuous integration testing team has access to state-of-the-art infrastructure, including world-class offices, modern tools, and uninterrupted network equipment.</li>
              <li><strong>Information Security and Quality:</strong> We optimize your software development cycle cost by integrating and testing each code immediately. Our workstations and networks are secured with robust anti-virus, anti-malware, and other standard protections.</li>
              <li><strong>Global Expertise:</strong> We have a team of over 30 experts with more than 100+ man-years of combined management experience. When you partner with us, you get access to a highly talented and dynamic team.</li>
              <li><strong>24/7 Accessibility:</strong> Our executives work day in and day out across all time zones to cater to your requirements and inquiries, ensuring we are always available regardless of time zone differences.</li>
              <li><strong>Easily Scalable Services:</strong> We have the necessary resources and expertise to ramp up our services when required, allowing you to handle any spike in your continuous testing needs.</li>
              <li><strong>ISO/IEC 27001:2022 ISMS Certified:</strong> Your data will be completely secure with us. We follow strict data security policies and biometric entry/exit systems to ensure only authorized personnel have access to data.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Development?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing continuous integration testing services and a gamut of other software testing services to global clients. We have an extended suite of continuous integration experts who can provide you with a high level of scalable and flexible testing solutions customized to your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Approach us now to integrate and drive your software code towards yielding a better application for a sustained impact on the IT market.
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

export default ContinuousIntegrationServices;