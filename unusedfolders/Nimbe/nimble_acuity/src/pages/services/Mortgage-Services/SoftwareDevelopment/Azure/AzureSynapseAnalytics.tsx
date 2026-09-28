import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AzureSynapseAnalytics: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Azure Synapse Analytics Services
            </h2>
            <p className="text-lg text-gray-600">
              Integrate Azure Synapse Analytics to boost enterprise scalability and reduce time to insight.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you striving to derive powerful business insights using your organizational data with no luck? Are you struggling to build an integrated architecture that reduces the burden of relying on multiple systems? Put an end to your misery with our Azure Synapse Analytics services. Configuring it for your business empowers you with unlimited scalability options, provides valuable insights, and helps you build a unified system that enhances process efficiency.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Analyze your business processes and define the criteria to query data with our Azure Synapse serverless option. At **Nimble Acuity**, we are equipped to assist you in implementing and leveraging Azure Synapse for your enterprise. Being an advanced analytics service provider, we combine Cloud SQL Data Warehouse and Big Data technologies to provide end-to-end Data Analytics solutions for your organization.
            </p>
          </div>

          {/* Azure Synapse Analytics Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Azure Synapse Analytics Solutions We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              This technology brings together Microsoft SQL Data Warehouse basics and machine learning techniques to elevate the intelligence capabilities of your business. Our Azure Synapse services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Workflow Management</h4>
                <p>Set up immaculate workflows that eliminate redundancy and provide quicker visuals, such as updated, interpretable dashboards and organized reports.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Reporting Dashboard Development</h4>
                <p>Large volumes of insightful data lurk beneath enterprise-wide reports. Transform this potent but disorganized information into actionable insights with our innovative and interactive reporting dashboards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Infrastructure Provisioning</h4>
                <p>Set up and maintain a sustainable infrastructure that minimizes risk and reduces costs while improving the efficiency of your enterprise at scale with our infrastructure provisioning support.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Database Management</h4>
                <p>Collect, manage, process, and analyze your organizational data efficiently with our Azure SQL Data Warehouse, which is a highly secure database management system, compliant with all the data security regulations.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Modeling</h4>
                <p>Our modern modeling techniques and defined metrics are designed to create data models in the cloud that integrate your data from multiple sources. This is an efficient way to visualize enormous amounts of data, making it easy to interpret.</p>
              </div>
            </div>
          </div>

          {/* Why is Nimble Acuity the Preferred Provider of Azure Synapse Analytics Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide the best-in-class process optimization and analytics technologies to help you accomplish the desired business outcomes. Some of the major benefits of choosing our services are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Model:</strong> We have a flexible pricing structure with multiple package options, making us the preferred provider for small, medium, and large enterprises.</li>
              <li><strong>Skilled and Certified Team:</strong> Our team of skilled and certified data engineers, developers, designers, analysts, and DevOps managers have proven expertise and relevant industry experience.</li>
              <li><strong>Impeccable Service Quality:</strong> We follow proven methods of software project evaluation and adhere to project management best practices to provide you with robust and powerful software solutions.</li>
              <li><strong>Complete Data Security:</strong> Our stringent data security measures are designed to ensure that all your confidential business information remains safe with us.</li>
              <li><strong>Dedicated Project Manager:</strong> You can review all your internal software projects, suggest changes, and get all your queries addressed by a project manager dedicated to you.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Business with Azure Synapse?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a reputed Azure Synapse Analytics company with over 26 years of industry experience, helping global clients streamline their operations, manage huge databases, and develop customized software solutions. Outsourcing Azure Synapse Analytics services to us enables you to build a robust Azure infrastructure, create streamlined workflows, and develop organized data models in the cloud.
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

export default AzureSynapseAnalytics;