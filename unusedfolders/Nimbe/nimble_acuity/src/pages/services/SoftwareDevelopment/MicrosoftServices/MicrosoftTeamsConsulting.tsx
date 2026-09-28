import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MicrosoftTeamsConsulting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Microsoft Teams Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Our Microsoft Teams services are designed for rapid, seamless deployment, successful user adoption, and maximum benefits.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Microsoft Teams deployment doesn't end with user adoption. For peak performance, your Microsoft Teams support services need to be fully optimized for low latency and CPU usage. This requires careful attention to connectivity, hardware requirements, and network traffic. Addressing each of these aspects will enable you to optimize Microsoft Teams' performance and solve issues quickly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has extensive experience in Microsoft Teams consultancy, assisting organizations to build a connected workplace. Our services have helped clients with complete integration with Microsoft 365, implementation of data security and compliance requirements, and integration of business apps and custom bots to generate reports.
            </p>
          </div>

          {/* Our Microsoft Teams Consulting Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Microsoft Teams Consulting Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our consulting solutions for Microsoft Teams enablement include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Teams Roadmap & Planning</h4>
                <p>We assist you in developing the blueprint for Microsoft Teams integration. Our methodical approach ensures the deployment handles your organization's near-, mid-, and long-term business requirements.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Teams Deployments</h4>
                <p>Our deployment consulting service provides all the business knowledge and technical expertise necessary to carry out a smooth deployment of MS Teams.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Teams Adoption Consultation</h4>
                <p>We assist with implementing a change management plan, handling critical aspects such as customizing communication, encouraging employee adoption, and providing all the necessary training for a seamless transition.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Security & Compliance</h4>
                <p>Ensuring the security of Microsoft Teams is paramount. We provide you with all the technical knowledge needed to keep your data safe and secure, enabling employees to share information across diverse devices and locations.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Productivity Consultation</h4>
                <p>We provide the necessary tactical and strategic advice to increase teamwork and collaboration, helping you leverage features like instant meetings, file collaboration, and custom tools to boost productivity.</p>
              </div>
            </div>
          </div>

          {/* Why Outsource to Us? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a specialized Microsoft Teams consulting service provider, we offer a range of benefits to our clients, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Team of Experts:</strong> We are driven by a team of consultants with 360-degree knowledge of Microsoft Teams deployment and management.</li>
              <li><strong>Complete Optimization:</strong> We facilitate user experience by taking care of aspects such as personal customization, message and video interoperability, and best practices on Teams notifications.</li>
              <li><strong>Industry-Sector Competency:</strong> Our experts have experience providing Teams consulting services to several industries.</li>
              <li><strong>Compliance and Governance:</strong> Our consultation services are tailored to provide Teams deployment that is in full adherence to organizational policies and compliance regulations.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Team's Collaboration?
            </h3>
            <p className="text-gray-700 mb-6">
              We have helped companies of all sizes deploy and manage Microsoft Teams, and thus, we understand what it takes to plan and implement a seamless upgrade from other platforms. With us, you do not have to worry about a host of factors such as determining objectives for your Teams' deployment, identifying the correct requirements, and establishing a governance plan.
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

export default MicrosoftTeamsConsulting;