import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AzureManagedServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Azure Managed Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to comprehensive management of your Microsoft Azure infrastructure by leveraging our industry-leading Microsoft Azure managed services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to achieve a seamless transformation of your digital assets, automation, data intelligence capabilities, and security and compliance requirements by leveraging the dominant force in the cloud computing industry? Is a lack of Azure cloud managed expertise causing you to lower your return on investment? Is a lack of expertise in Azure management services leading to sub-optimal resource usage, low performance, and expensive bills? If so, **Nimble Acuity** is here to help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading data-driven provider of Microsoft Azure managed services to clients from across industries and the world. We deliver comprehensive Azure services and can take total ownership of your entire Azure infrastructure. We will always work closely with you to understand your requirements in depth and roll out a solution and strategy to make the most out of your cloud investment.
            </p>
          </div>

          {/* Azure Management Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Azure Management Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide a complete range of Azure management services to cater to every requirement that our clients may have. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Migration Services</h4>
                <p>We can help you seamlessly migrate your existing resources to the cloud. We will develop a personalized migration strategy and select the most relevant Azure components.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Cloud Consulting Services</h4>
                <p>If you are looking for world-class Azure consulting services, you are in the right place. We will provide you with visibility into the entire Azure implementation lifecycle.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Cloud Managed Services</h4>
                <p>We have worked extensively with numerous clients, including many Fortune 1000 companies, to effectively manage their Azure cloud implementation and can do the same for you.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Automation Services</h4>
                <p>We help clients to streamline their workflows and reduce or eliminate errors by automating many processes in the Azure environment.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure API Management Services</h4>
                <p>Our experts leverage the Azure API management to provide a central repository to create and manage APIs for cloud and web apps and services. Our team will monitor the health of APIs, rate limits, identify errors, configure throttling, and do much more.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Managed Security Services</h4>
                <p>We will design a meticulous security strategy and employ the best security tools to improve your security posture. Our team will configure and manage access to all the resources, and perform regular penetration testing, vulnerability scans, and security monitoring.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Support Services</h4>
                <p>Our expert team provides a full range of support services related to all Azure deployment types. Our services include configuring Azure resources for efficient data flows and backing up of the data in the Azure compute resources.</p>
              </div>
            </div>
          </div>

          {/* What Makes Us the Ideal Azure Managed Service Provider? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** is a professional Azure managed service provider with extensive experience leveraging the full potential of Microsoft Azure. Some additional reasons to work with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Our pricing structure is fully transparent. We first analyze your exact requirements and then provide the best services according to your needs.</li>
              <li><strong>High-Quality Solutions:</strong> Being an ISO-certified provider of Azure management services, we provide high-quality solutions that follow international best practices and workflows.</li>
              <li><strong>World-Class Infrastructure:</strong> All our services are provided by seasoned experts that operate out of world-class infrastructure facilities.</li>
              <li><strong>100% Information Security:</strong> We are committed to providing our services while adhering to the most stringent data security regulations.</li>
              <li><strong>Quick Turnaround Time:</strong> We will always provide our Azure services well within the stipulated timeline as we place great emphasis on quick turnaround times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Reap the Benefits of Azure Managed Services?
            </h3>
            <p className="text-gray-700 mb-6">
              Our Azure solutions enable businesses to exploit all the practical and adaptable features of the platform to build, deploy, and manage apps more efficiently. By partnering with us, you can migrate to the cloud at reduced expenses and within remarkable timelines.
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

export default AzureManagedServices;