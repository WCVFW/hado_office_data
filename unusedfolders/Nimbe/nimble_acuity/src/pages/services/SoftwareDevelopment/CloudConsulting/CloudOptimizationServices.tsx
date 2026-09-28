import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudOptimizationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Optimization Services
            </h2>
            <p className="text-lg text-gray-600">
              Enhance availability, optimize your cloud architecture, and achieve 100% uptime by outsourcing to us.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Has your business moved to the cloud, but you are finding it difficult to navigate the complexities and challenges? Do you want to improve and accelerate your firm's cloud transformation journey to maximize the benefits from your cloud investment and minimize risks and costs? Do you want to be able to operate successfully in the cloud with ease and confidence without having to deal with the burden of dedicating resources to help with support or maintenance? If so, you can benefit significantly from our cloud optimization services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier cloud optimization service provider and can help you achieve both cloud cost optimization and cloud resource optimization. We have significant experience in helping numerous clients create and manage scalable and robust cloud infrastructure and then fully supporting, managing, and monitoring the infrastructure on their behalf. With our services, our clients have achieved peace of mind, cost efficiency, and security, enabling them to focus on what they do best while we take care of the tedious processes associated with their cloud deployments.
            </p>
          </div>

          {/* Our Cloud Optimization Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cloud Optimization Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading cloud optimization company and helps you completely transform your cloud infrastructure so that you reap the highest ROI from your cloud investment. Our range of cloud optimization services includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cloud Assessment Services:</strong> Our engineers will thoroughly analyze your cloud deployment to identify areas for improvement. We will recommend best practices to optimize your cloud architecture and proactively identify compliance and security gaps.</li>
              <li><strong>Cloud Optimization Services:</strong> We have significant experience in helping numerous clients unlock large opportunities to increase their ROI by improving efficiencies and reducing costs. We perform a lean assessment of your cloud architecture to identify, manage, and eliminate waste.</li>
              <li><strong>Cloud Compliance Evaluation Services:</strong> Our expert engineers will assist you in achieving cloud compliance requirements, irrespective of your cloud provider. We will thoroughly scrutinize your entire cloud environment and provide a comprehensive, detailed actionable report of recommendations.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Digital Marketing Services</li>
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Software Development Technologies</li>
            </ul>
          </div>

          {/* Why Outsource Cloud Optimization Services to Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Cloud Optimization Services to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading cloud optimization service provider and can provide you with expert and customized solutions to suit your exact requirements. Some of the reasons for choosing us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Team:</strong> We have highly qualified, motivated, and experienced IT engineers who use their deep expertise to deliver industry-leading solutions.</li>
              <li><strong>Affordable Services:</strong> We make use of efficient workflows and processes to identify and eliminate wastage, ensuring our world-class services are available at highly cost-effective rates.</li>
              <li><strong>Customized Solutions:</strong> Our cloud optimization engineers will work closely with you to understand your cloud infrastructure and provide highly customized services according to your unique business requirements.</li>
              <li><strong>Fast Turnaround:</strong> We will always provide our services within the stipulated deadlines, as this is something we take very seriously.</li>
              <li><strong>Multi-domain Experience:</strong> Our team is highly capable and experienced in working across departments, allowing us to provide a multitude of solutions.</li>
              <li><strong>Security:</strong> As a premier cloud optimization firm, we know the importance of handling data with the utmost regard for safety and security.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Cloud Deployment?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of cloud optimization services to a diverse clientele from across industries and the world. With us, you get access to a wide range of certified software and cloud engineers with significant experience. We will ensure that your cloud deployments fully comply with all legal and regulatory requirements by leveraging our expertise gained from successfully handling numerous cloud projects.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us, and we will be happy to understand your requirements and provide you with a custom quote.
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

export default CloudOptimizationServices;