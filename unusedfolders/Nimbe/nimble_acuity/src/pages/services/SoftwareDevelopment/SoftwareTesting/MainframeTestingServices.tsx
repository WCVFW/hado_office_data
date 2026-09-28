import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const MainframeTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mainframe Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Reduce your application development time and costs with **Nimble Acuity**'s expert mainframe testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In the present world of cut-throat competition, businesses are forced to deliver applications and services to the market within the fastest possible time. What might appear as a simple application to the customer is actually built using a complex network of interdependent systems, with most of the critical data coming from the company's mainframe.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity**'s mainframe application testing services help global clients reduce their software application development time and costs. We specialize in providing mainframe testing services to clients across industries and verticals. Our software testing engineers are trained to work on the latest tools and technologies and provide the best mainframe testing services in the industry.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mainframe Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Our team of software testers is well-trained to work on some of the latest as well as legacy mainframe application testing tools and technologies. Some of the key mainframe testing services we offer include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quality Assurance */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mainframe Quality Assurance</h4>
                <p className="text-gray-700 leading-relaxed">
                  We provide complete mainframe application testing services and systems based on AS400. We ensure that all your applications and mainframes run smoothly without errors and without sacrificing performance.
                </p>
              </div>
              
              {/* Application & UAT */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application & User Acceptance Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team ensures that all your app functionalities are working as expected while also checking if the functions can execute in batch mode. We test developed applications in your own host environments to ensure correct functionality.
                </p>
              </div>

              {/* Integration & System Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Integration & System Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Each individual software module is tested and integrated using an automation tool, typically written in REXX. The applications are then tested to evaluate if the system is compliant to run those applications in parallel TSO sessions.
                </p>
              </div>
              
              {/* Data Migration & Performance */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Data Migration & Performance Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team ensures the batch application infrastructure is common in the older and newly migrated environment. We also conduct storage optimization and performance testing to support the reduction of MIPS for all mainframe applications.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mainframe Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We at **Nimble Acuity** believe in providing the best services to clients at cost-effective prices. To make our service more efficient and cost-effective, we follow a systematic and streamlined process:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>**Analysis:** We start with a thorough analysis of your requirements.</li>
              <li>**Test Planning:** A detailed test plan is created to define the scope and strategy.</li>
              <li>**Test Design:** Our team designs and configures the necessary test cases.</li>
              <li>**Test Execution:** We execute the test cases in the defined environment.</li>
              <li>**Test Reporting:** We provide comprehensive reports on test results and findings.</li>
              <li>**Defect Management:** Any discovered defects are managed and tracked until they are resolved.</li>
              <li>**Test Support:** We offer continuous support throughout the testing lifecycle.</li>
            </ol>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Mainframe Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** has been providing high-quality mainframe app testing services to clients around the globe for more than 26+ years now. Outsourcing your mainframe app testing requirements to us comes with its own set of advantages, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Skilled Testers:</strong> A well-trained team of software testers capable of working on the latest mainframe testing tools and technologies.</li>
              <li><strong>Quality Adherence:</strong> Our team assures adherence to all quality standards and helps increase your testing coverage.</li>
              <li><strong>Modern Tools:</strong> We provide access to the latest testing tools for streamlined mainframe testing services.</li>
              <li><strong>Integration Expertise:</strong> We have expertise in integrating QA for MQ and EDI series.</li>
              <li><strong>Comprehensive Checks:</strong> We check your mainframe's integrity by performing tests such as volume tests, regression tests, and stress tests.</li>
              <li><strong>Proficiency in Technologies:</strong> We are proficient in working with different technologies such as COBOL, DB2, CICS, etc.</li>
              <li><strong>Cost-Effective Rates:</strong> We offer mainframe testing services at highly cost-effective rates.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Access the Best Mainframe Testing Services at **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              Having served global clients with our top-quality mainframe testing services for over 26+ years now, we have the relevant experience which helps us to understand the various business models and specific requirements of clients and hence provide the service accordingly. We provide a host of other software testing services as well at cost-effective prices and within a quick turnaround time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you have any kind of mainframe testing service requirement, feel free to talk to one of our representatives.
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

export default MainframeTestingServices;