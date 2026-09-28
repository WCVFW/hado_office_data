import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ManagedTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Managed Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive and fully customizable service where **Nimble Acuity** takes complete responsibility for all your testing activities.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managed Testing Service (MTS) is a complete and fully customizable service where we at **Nimble Acuity** take complete responsibility for all the testing activities at every stage of the software development cycle. Our expert team of software testers is trained to work on different technologies and can be easily scaled up or down as per the client's needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With customer expectations from businesses on the rise to obtain personalized content to generate a great user experience, the focus is now shifting towards testing and quality assurance. **Nimble Acuity**'s managed test services provide a customized approach with a systematic procedure and processes suited for your business.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Managed Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** is a global organization that has several test centers across the globe and can provide round-the-clock managed testing services through our multiple delivery centers. Our service model ensures that we first thoroughly understand your requirements, leverage the most advanced tools and technologies to provide the service, use the best available resources, and create a strategic plan to implement the project.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Service Items */}
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Defect Management</li>
                <li>Knowledge Management Framework</li>
                <li>MTS Dashboards</li>
                <li>Test Data Management</li>
                <li>Shared Services</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Automated Regression Testing</li>
                <li>Performance/Load Testing</li>
                <li>Big Data, Data Warehouse and Interface Testing</li>
                <li>Application Security Testing</li>
                <li>Automated BI Report Testing</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Test Case Documentation</li>
              </ul>
            </div>
          </div>
          
          {/* Service Models */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Managed Testing Service Model
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** provides an end-to-end testing service, right from test strategy to planning, execution, reporting, and delivery. Our services not only help you run your business but also transform the way you work. We follow a unique testing service model to cater to various requirements from our clients:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Build, Operate and Transfer */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Build, Operate and Transfer</h4>
                <p className="text-gray-700 leading-relaxed">
                  The complete requirements are sent to **Nimble Acuity**'s software testing centers. A dedicated manager is assigned for every project who ensures that the software testing procedure is executed smoothly and delivered on time.
                </p>
              </div>
              
              {/* Build, Transfer, and Fill */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Build, Transfer, and Fill</h4>
                <p className="text-gray-700 leading-relaxed">
                  Mainly designed for medium and long-term engagements, in this model we hire a team of specialized software testers and train them on tools specific to the client's requirements and then send them to the customers. A filler team is built to ensure that the gaps in the clients' project requirements are filled.
                </p>
              </div>

              {/* Onsite Implementation */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Onsite Implementation</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our software testing engineers help out the customer's team at the client location, and the in-house dedicated project manager handles the entire project. This model is mainly beneficial for clients to scale up resources, tools, and technologies, and products.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits of MTS */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Outsourcing Managed Testing Services
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Reduced Risk</li>
              <li>Complexity Reduction</li>
              <li>Competitive Pricing</li>
              <li>Transaction-based Compensation Model</li>
              <li>High Quality of Service</li>
              <li>Improved Innovation Potential</li>
              <li>Increased Range of Service-oriented Approach</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Managed Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As part of **Nimble Acuity**'s managed QA services, we take full responsibility for your software testing through various service level agreements and result-based testing procedures. Some of the reasons why you need to choose us for managed testing services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Certified & Experienced Testers:</strong> We have a team of certified and highly experienced software testers who deliver high-quality testing services.</li>
              <li><strong>Access to Latest Technologies:</strong> We have access to some of the latest and cutting-edge technologies which help us deliver the best results.</li>
              <li><strong>Scalable Resources:</strong> Easily scale up or down the number of testing resources based on your business requirements.</li>
              <li><strong>Accurate Validation:</strong> We provide accurate validation and verification of your test cases to ensure that it conforms to your needs.</li>
              <li><strong>Transparent Processes:</strong> Our processes are completely transparent, and clients are kept updated at every stage of the testing procedure.</li>
              <li><strong>Cost-Effective Rates:</strong> We offer high-quality managed testing services at cost-effective rates.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Hire the Best Software Testers at Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been providing high-quality managed testing services to clients around the globe for over 26+ years now. Our proactive approach in the software testing domain has helped some of the leading companies to continuously improve their products. We use standardized testing methodologies and integrate the latest testing tools and technologies to provide a complete software environment, provide full traceability, and share assets.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Outsource managed testing services to us and be assured that your software products are in safe hands. Feel free to get in touch with us and we will be more than happy to assist you.
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

export default ManagedTestingServices;