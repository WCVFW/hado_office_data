import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const InfrastructureAsAService: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Infrastructure as a Service (IaaS)
            </h2>
            <p className="text-lg text-gray-600">
              Our Infrastructure as a Service helps you leverage our cloud infrastructure to host a website, test, develop apps, run backups, and more.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Most businesses are increasingly moving to Cloud Infrastructure as a Service (IaaS) as it allows for better ways to manage apps, websites, and networked assets without affecting performance. This drives modern businesses to their goals while saving operating costs in a whole new manner. Outsourcing IaaS to **Nimble Acuity** gets you access to network, storage, and computation capabilities at an unprecedented scale, keeping you aligned with well-defined use cases and delivering the value that cloud services promise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you outsource IaaS, you're guaranteed pro-developer features at a lower operating cost. Being a top IaaS provider, we have rich experience in IBM Cloud, Google Cloud Platform (GCP), Amazon Web Services, Alibaba Cloud, and Microsoft Azure. Our solutions focus on improving development without getting entangled in the routine issues seen across scaling failover and automation. **Nimble Acuity**, a reputed provider of IaaS, helps your business take advantage of the latest security features offered by top platforms on the path to true digital transformation.
            </p>
          </div>

          {/* Infrastructure as a Service We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Infrastructure as a Service We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** has consistently enabled businesses to leverage IaaS to control the cost of owning and operating IT with better efficiency. Our IaaS includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Testing and Development:</strong> We can set up a test environment to simulate your projects and measure the response, helping you get products off the shelves faster.
              </li>
              <li>
                <strong>Website Hosting:</strong> Using IaaS for website hosting can vastly cut down costs. We have the infrastructure to make it reliable for your website to be deployed at a moment's notice.
              </li>
              <li>
                <strong>Backup and Recovery:</strong> We make it possible to effectively plan and manage backup and recovery without the burden of high expenses and complex infrastructure.
              </li>
              <li>
                <strong>Web App Management:</strong> IaaS from **Nimble Acuity** empowers your web apps, including storage and maintenance, allowing organizations to swiftly launch apps and scale on demand.
              </li>
              <li>
                <strong>High-performance Computing:</strong> We offer groundbreaking resources and support for running complex calculations and financial models.
              </li>
              <li>
                <strong>Big Data Analysis:</strong> Our Cloud Infrastructure as a Service helps you run calculations on massive datasets to arrive at invaluable patterns and spot trends.
              </li>
            </ul>
          </div>

          {/* Infrastructure as a Service Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Infrastructure as a Service Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a part of outsourcing IaaS, we meet customer requirements through a carefully planned strategy. Our process for the best outcome includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Discussion:</strong> We discuss with the client to identify service facets that should be moved to the cloud.</li>
              <li><strong>Evaluation:</strong> We evaluate the gaps in infrastructure to assess existing capabilities and plan a migration model.</li>
              <li><strong>Preparation:</strong> We prepare the client for adopting the IaaS.</li>
              <li><strong>Simulation:</strong> We simulate migration strategies to observe if there are lapses.</li>
              <li><strong>Implementation:</strong> We will implement the IaaS that would empower the client and realign their workflow for better productivity.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>IT Risk & Security Management</li>
              <li>Managed IT Services</li>
              <li>Network Management Services</li>
              <li>Data Center Services</li>
            </ul>
          </div>

          {/* Why Outsource to Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Infrastructure as a Service to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Being a top IaaS company, we help you move away from legacy methods and stay ahead of the curve. By partnering with us, you can have many advantages, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Transparent Costing:</strong> We offer a cost advantage with flexible pricing, so you only pay for the services you need.</li>
              <li><strong>Efficient Monitoring:</strong> Monitoring your IT performance is made easier on the cloud with better technology adoption.</li>
              <li><strong>Accelerated Deployment:</strong> We greatly reduce the time to deploy your software or project in a finished state.</li>
              <li><strong>ISO Certified Company:</strong> **Nimble Acuity** is an ISO 9001:2015 certified company that complies with the latest standards of cloud adoption.</li>
              <li><strong>Enhanced Security:</strong> We strongly believe no services are complete without data security and we honor this by restricting how your data can be used.</li>
              <li><strong>Scalable Services:</strong> Our IaaS can be scaled should you prefer an upgrade amidst a live project.</li>
              <li><strong>Best-in-class Infrastructure:</strong> We have a robust IMS backend that is routinely audited for consistent performance.</li>
              <li><strong>Reliable Customer Support:</strong> Our team is empathetic and punctual in responding to your queries, offering instant responses via phone, email, or web chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Infrastructure?
            </h3>
            <p className="text-gray-700 mb-6">
              Over 26+ years, our team has handled countless cloud projects and infrastructure management services, delivering performance to clients who've preferred IaaS. From preliminary assessment to actual implementation, you can count on us to deliver up to your expectations each time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us to know more about our Infrastructure as a Service offering and how we can help you break new ground in operational efficiency.
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

export default InfrastructureAsAService;