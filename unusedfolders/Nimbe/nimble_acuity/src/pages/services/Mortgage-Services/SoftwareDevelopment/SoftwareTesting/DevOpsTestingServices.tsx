import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const DevOpsTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              DevOps Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure a smooth sync between development and operations with our expert DevOps testing processes.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you not able to maintain a balance between your development and operations teams? Are you finding it challenging to find the right set of skilled and experienced resources who can take care of all your DevOps testing requirements? Then, the best option for you would be to outsource DevOps testing services to an experienced and skilled provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a DevOps testing service provider that can be your one-stop-shop for all your requirements. With our matured DevOps practices and extensive experience in software testing automation, we help organizations build the right, high-quality software within the timeline. Automation plays a key role in ensuring quick and accurate testing and deploying a continuous testing approach, which can be achieved with our highly skilled automation engineers.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              DevOps Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been catering to the DevOps testing needs of clients around the globe for over 26+ years. This vast experience enables us to deliver quality services that are customized to suit their business needs. Some of the key DevOps testing solutions we offer include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Continuous Delivery */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Continuous Delivery Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team can help you make continuous delivery a key part of your DevOps and Agile strategy, enabling you to get production-ready code to the market as soon as possible in a risk-free and efficient manner.
                </p>
              </div>
              
              {/* Continuous Integration */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Continuous Integration Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We have the required skills and expertise to help clients incorporate continuous delivery into their process, which can help them identify problems faster and deliver solutions sooner.
                </p>
              </div>

              {/* Continuous Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Continuous Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We can help put the systems, automation, and processes in place to optimize the quality of every stage of the development lifecycle.
                </p>
              </div>
              
              {/* Continuous Monitoring */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Continuous Monitoring</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team can help you with accurate continuous monitoring services, providing you with visibility across the entire DevOps lifecycle.
                </p>
              </div>

              {/* Progressive Delivery */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Progressive Delivery Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We provide accurate and flawless progressive delivery strategies, which enable the development and testing of new functionality with a select group of users before they are rolled out to a broader audience.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefits of DevOps Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of DevOps Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              DevOps testing has a series of benefits for both the development team and the end-users. Some of the key benefits are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It comprises standardized processes, guidelines, checklists, and templates.</li>
              <li>It helps with automated and continuous quality monitoring.</li>
              <li>It helps with easy integration build, deployment, end-to-end test automation, and reporting.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for DevOps Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing DevOps testing services to **Nimble Acuity** can get you access to a series of benefits. Some of the key factors for you to choose us as your DevOps testing company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> Our services are highly cost-effective and flexible to suit your business requirements and budget.</li>
              <li><strong>Skilled DevOps Testers:</strong> We have some of the most qualified and experienced DevOps testing specialists who can take care of all your needs.</li>
              <li><strong>High-quality Services:</strong> We are an ISO certified organization, ensuring we deliver top-quality services every single time.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, you can rest assured that all your data is kept safe at all times.</li>
              <li><strong>SPOC:</strong> We will assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>24/7 Customer Support:</strong> Our teams are available at all times to answer your queries.</li>
              <li><strong>Quick Turnaround:</strong> Our team operates through several delivery centers, enabling us to deliver quality services within a quick time.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> We have access to the latest and best DevOps testing tools, technologies, and workspaces.</li>
              <li><strong>Highly Scalable Services:</strong> We have the required resources and bandwidth to scale up the service requirements as and when needed.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource DevOps Testing Services to **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality DevOps testing services and a plethora of other software testing services to clients around the globe. We have some of the most qualified and experienced DevOps testing experts who can take care of all your requirements with ease. We make use of the best and the latest DevOps testing tools and software while delivering top-quality services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient DevOps testing service provider, then your search ends here. Get in touch with us today!
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

export default DevOpsTestingServices;