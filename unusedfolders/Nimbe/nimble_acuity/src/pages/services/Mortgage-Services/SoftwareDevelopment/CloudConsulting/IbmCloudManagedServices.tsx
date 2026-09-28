import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const IbmCloudManagedServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IBM Cloud Managed Services
            </h2>
            <p className="text-lg text-gray-600">
              IBM cloud managed services provide a mainframe platform to take most of the backend functions to the cloud to run a lightweight and agile business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              IBM cloud is the newest mainframe platform for small and large businesses to ensure flexibility and high availability of their services. It transforms the already efficient PaaS to improve agility, scalability, and infrastructure support via mobile and desktop to handle social and analytical loads. The IBM cloud managed services can be customized to suit business needs in specific aspects.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsourcing IBM cloud-managed services to **Nimble Acuity** is a way to fulfill your business goals and improve reach because cloud managed services remove last of all limitations, keeping your business from a more efficient workflow. Choosing an IBM cloud-managed service providing company like ours elevates your posture and capabilities at a moment's notice.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              IBM Cloud Managed Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At **Nimble Acuity**, we enable businesses to take advantage of IBM Cloud Managed Services to streamline development and deployment. Our IBM cloud consulting services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>IBM Cloud Server Management Support:</strong> We use software to manage the private cloud and create a virtualized pool of resources to handle computation.</li>
              <li><strong>IBM Cloud Storage Management Support:</strong> We use IBM cloud computing to store data so it can be managed efficiently, eliminating the need to buy and manage a dedicated data infrastructure.</li>
              <li><strong>IBM Cloud Security Support:</strong> We harness IBM cloud security services to reinforce the security of your multi-cloud and hybrid environment, providing edge-to-edge data protection.</li>
              <li><strong>IBM Cloud Data Network Support:</strong> We manage data streams effortlessly, enhancing connectivity and addressing data replication across zones to improve your network reach.</li>
              <li><strong>IBM Cloud Server Support:</strong> We provide a unified experience through virtual servers, helping in data consolidation so you have data stored and accessed on demand.</li>
              <li><strong>IBM Cloud Business Recovery Services:</strong> Our IBM cloud-managed services help you recover critical business apps to ensure continuity, even during downtime.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource IBM Cloud Managed Services to Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Being a top IBM cloud managed service company, we help you move away from dated methods and stay ahead of the curve. By partnering with us, you can achieve many advantages, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Transparent Costing:</strong> We offer ways to customize services to save you money.</li>
              <li><strong>Efficient Monitoring:</strong> We streamline data and app monitoring with IBM cloud managed services by deploying trackers and efficient analytics.</li>
              <li><strong>Accelerated Deployment:</strong> By choosing our services, your deployments can be sped up.</li>
              <li><strong>ISO Certified Company:</strong> **Nimble Acuity** is an ISO 9001:2015 certified IBM cloud managed service provider with a compliant workflow.</li>
              <li><strong>Enhanced Security:</strong> Our data security is robust, ensuring there are no lapses in how your data is managed.</li>
              <li><strong>Scalable Services:</strong> Our IBM cloud managed services can be scalable for better performance and bandwidth needs.</li>
              <li><strong>Reliable Customer Support:</strong> We provide ever-reliable customer support across channels and using all means to provide the best service levels.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize with IBM Cloud?
            </h3>
            <p className="text-gray-700 mb-6">
              Over the last two decades, our team has empowered clients via IBM cloud managed services. We have enabled our clients to handle projects under a broad range of infrastructure management services and fix performance issues in their business. From preliminary evaluation to the actual implementation, we have consistently delivered on our promises.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us to know more about our IBM cloud managed service offering, and how we can help you break new ground in business efficiency.
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

export default IbmCloudManagedServices;