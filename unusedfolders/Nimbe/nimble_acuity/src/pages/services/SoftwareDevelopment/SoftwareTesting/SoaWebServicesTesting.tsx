import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const SoaWebServicesTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              SOA and Web Services Testing
            </h2>
            <p className="text-lg text-gray-600">
              Enhance business flexibility and ensure a robust software architecture with our expert testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Service-Oriented Architecture (SOA) is an architectural style that transforms your business into a set of linked services accessible from anywhere on the internet. This approach increases business flexibility, enhances reusability, supports an extensible architecture, and provides a longer lifespan for your software applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we provide comprehensive SOA and web services testing solutions. Our goal is to help your company overcome the critical challenges associated with SOA governance, integration, and security. Our team has the expertise to deliver a wide range of testing services, ensuring seamless communication between different applications in your organization.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our SOA and Web Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Having worked with global multinational companies, our testing engineers have the experience to provide the highest quality SOA and web testing services. Key services we offer include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Functional Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Functional Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We test your software application to ensure all functions operate as intended and conform to client specifications. This is done on a feature-by-feature basis, playing a vital role in our end-to-end testing process.
                </p>
              </div>

              {/* Regression Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Regression Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our regression testing allows for consistent validation with each new release of your application. We develop detailed test scenarios to quickly and efficiently check web services and prevent regressions.
                </p>
              </div>

              {/* Performance Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Performance Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Endurance and performance testing are crucial steps in our process. Our engineers test the consistency and scalability of your application, and our quality analysts verify performance parameters before generating a final report.
                </p>
              </div>
              
              {/* Interoperability Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Interoperability Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We test both design-time and run-time web service interoperability. This process facilitates the easy integration of operating systems and languages with other components, ensuring smooth operation.
                </p>
              </div>

              {/* Vulnerability Assessment */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Vulnerability Assessment</h4>
                <p className="text-gray-700 leading-relaxed">
                  Using specialized tests, our team runs active web-series vulnerability assessments. We thoroughly check for issues like schema poisoning and buffer overflows to ensure a stable and secure final application.
                </p>
              </div>

              {/* Portal and Content Management Testing */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Portal and Content Management Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We also provide portal and content management testing services, which include archiving, managing, and reproducing content while reducing costs, risks, and inefficiencies.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of SOA and Scope for Business Improvement
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many industries use service-oriented architecture to enhance their businesses. SOATest applications significantly reduce development and integration costs. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Better return on investment with a robust service layer.</li>
              <li>Easy code mobility and service relocation due to location transparency.</li>
              <li>Multi-layered architecture allows developers to focus on specific roles.</li>
              <li>The extra service layer provides enhanced security.</li>
              <li>Reduced development time through easy unit testing.</li>
              <li>Ability to use multiple client types to access a single service.</li>
              <li>Services can be reused, growing into a series of scalable services.</li>
              <li>Multiple developers can work simultaneously, improving parallelism.</li>
              <li>Better scalability through dynamic binding of services at run time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose **Nimble Acuity** for Your Testing Needs
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been providing SOA and middleware testing for years. Our experience allows us to understand diverse business requirements and deliver tailored services. When you partner with us, you benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Access to trained resources while you focus on your core competencies.</li>
                <li>Automated SOA testing protocols that reduce maintenance costs.</li>
                <li>A centralized quality control team that standardizes the process and reduces duplicate efforts.</li>
                <li>Thorough security testing for the highest level of protection.</li>
                <li>High-quality services at cost-effective prices with a quick turnaround time.</li>
            </ul>
            <p className="text-gray-700 mb-8 font-medium">
              We provide complete end-to-end services that ensure your application runs smoothly, efficiently, and without errors. If you have any service-oriented architecture testing requirements, get in touch with us today.
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

export default SoaWebServicesTesting;