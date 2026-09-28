import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AzureIntegration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Azure Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              Enable seamless consolidation between systems, applications, multiple APIs, data sources, and interfaces with our Azure Integration Services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Have Azure integration roadblocks led to reduced productivity within your enterprise? Building enterprise-grade integrations can be a complex task since you'll be working with multiple systems and applications. The prevalence of legacy systems can make it difficult to design, implement, and manage integrations—especially when you want to consolidate your existing systems with new cloud-based infrastructures. In this scenario, your enterprise can benefit from the knowledge and expertise of an expert Azure Integration services company, like **Nimble Acuity**.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We offer unified Azure integration solutions as a part of our Microsoft integration services. Our comprehensive services can help streamline cloud integration, workflows, and critical business processes. By leveraging our experience and expertise, we can ensure seamless integration of new and existing platforms.
            </p>
          </div>

          {/* Azure Integration Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Azure Integration Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Azure integration services can help you build, deploy, and manage systems or web service integrations. Our end-to-end solutions, which can help you automate processes and generate business value, include the following:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure API Management</h4>
                <p>Our Azure API integration services can help you publish, secure, and effectively manage APIs and API gateways for efficient processes and better integration. We streamline integration management for your back-end services and provide tools to ensure that your API-based interactions are secure and well-documented. Our services also include analytics, monitoring, and API life-cycle management.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Logic Apps</h4>
                <p>We use Logic Apps as a part of our application integration process to help you automate business processes and integration scenarios. We can help you build workflows that can trigger specific events or data, execute tasks, send notifications, and also help with:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Data Integration:</strong> We can help you consolidate data from on-premises systems and cloud platforms.</li>
                  <li><strong>App Integration:</strong> We can address any challenges with multi-device integrations.</li>
                  <li><strong>System Integration:</strong> We can ensure seamless migration and integration from your enterprise systems to the cloud platform.</li>
                  <li><strong>Business-To-Business (B2B) Communication:</strong> With comprehensive B2B integration functionalities, we can help you connect your applications with that of your business partners.</li>
                  <li><strong>Enterprise Application Integration (EAI):</strong> We can help with multi-platform EAI for your enterprise, to ensure seamless work processes.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Service Bus</h4>
                <p>We offer a fully-managed messaging service for enterprises that enables prompt and reliable communication between applications and services. We can help you build enterprise-ready integrations that can send and receive messages and support a variety of messaging patterns.</p>
                <p><strong>Cloud Integration Services:</strong> We offer comprehensive cloud integration services that consolidate the functionality of Service Bus and Logic Apps.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Event Grid</h4>
                <p>With our unified event routing service, you can scale up your enterprise-wide communications by connecting event publishers with event subscribers. Our Event Grid services can help you build event-driven architectures that can scale to 10 million events per second and trigger actions or workflows in response.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure SQL Server Integration Services</h4>
                <p>Our Azure SQL Server Integration Services can help you with cloud-based data integration and allow you to build and run data integration solutions. With our services, you can access data integration workflows that extract, consolidate, and load data between multiple data sources and destinations.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us As Your Azure Integration Service Provider */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Azure integration solutions ensure seamless integration of multiple APIs or interfaces. When you partner with us, you also benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Top-notch Infrastructure:</strong> We create customized solutions to meet our client's requirements with cutting-edge tools and technologies, world-class offices, and expert resources.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS-certified company, we ensure strict compliance with international data security and confidentiality standards.</li>
              <li><strong>Short Turnaround Times:</strong> Our streamlined and efficient processes ensure the delivery of high-quality integration solutions with short turn-around times.</li>
              <li><strong>Consolidated Support:</strong> We provide round-the-clock support for our clients, where they can reach out to us with questions and queries. We also provide regular updates on the status of the project.</li>
              <li><strong>Flexible Pricing:</strong> We offer flexible pricing structures, where you have the option to choose hourly or monthly pricing options, based on your unique requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Integration Process?
            </h3>
            <p className="text-gray-700 mb-6">
              Our top-notch application integration services include customized integration solutions that can address your unique requirements and help you overcome your integration challenges. When you partner with us, you benefit from improved productivity, efficient operational processes, effective use of enterprise resources, and highly secure workflows.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default AzureIntegration;