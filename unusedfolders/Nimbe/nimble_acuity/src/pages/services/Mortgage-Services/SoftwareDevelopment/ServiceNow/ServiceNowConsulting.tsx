import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ServiceNowConsulting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Boost employee productivity, streamline workflows, and drive business growth with our expert ServiceNow consulting.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In today's fast-paced environment, the ability to streamline and scale IT and customer service operations is critical. Implementing the ServiceNow suite is a proven way to achieve this, leading to significant gains in employee productivity, resilience, and business growth. As a premier provider of **ServiceNow consulting services**, **Nimble Acuity** helps you take full advantage of this innovative cloud computing solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team of certified ServiceNow professionals offers a comprehensive range of consulting services to a global clientele. We help you create the IT, employee, and client workflows that drive growth and enhance every step of your digital transformation journey. If you want to create exceptional experiences and unlock significant productivity, we have the expertise to make it happen.
            </p>
          </div>

          {/* Our Consulting Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow Consulting Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Implementation Services</h4>
                <p>Using the **ServiceNow Implementation Methodology (SIM)**, our certified specialists quickly and efficiently deploy your solution to get you up and running faster.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Development & Customization</h4>
                <p>Our skilled experts offer seamless development and customization services, helping you to maximize your ServiceNow deployment with tailored features and workflows.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Migration</h4>
                <p>We are highly skilled at adapting existing ITSM solutions to the ServiceNow platform and can help you update your current solution to the latest release for optimal performance.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Managed Services</h4>
                <p>Our offerings include comprehensive services for configuration, deployment, data migration, administration, and performance optimization for the entire platform.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Support Services</h4>
                <p>We provide comprehensive support for all your ServiceNow needs, including implementation, development, migration, management, and maintenance issues.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Customer Service Management</h4>
                <p>We leverage the ServiceNow CSM module to coordinate work between your customers, service teams, and other departments to address requests and problems quickly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Security Operations</h4>
                <p>Our professionals combine your existing security solutions with ServiceNow's capabilities to quickly prioritize and address security incidents and vulnerabilities.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow IT Operations Management</h4>
                <p>We help you gain full visibility into your IT infrastructure and applications, allowing you to maximize your cloud delivery spend and optimize service health.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow HR Service Delivery</h4>
                <p>Our consultants integrate ServiceNow HR Service Delivery to improve employee satisfaction, streamline HR operations, and increase overall efficiency.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Custom Application Development</h4>
                <p>Our team can support your business by developing, implementing, and managing custom applications and integrations tailored to your specific needs.</p>
              </div>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Are We the Preferred ServiceNow Partner?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Structured Process:</strong> We use a highly robust and streamlined process to deliver all our solutions, ensuring every project is completed with precision.</li>
              <li><strong>Experienced Team:</strong> Our team consists of in-house certified ServiceNow engineers with years of experience, providing the highest quality consulting services.</li>
              <li><strong>High-Quality Services:</strong> We are an **ISO-certified** service provider with robust QA processes to ensure we always deliver top-tier solutions.</li>
              <li><strong>Data Security:</strong> The safety of your data is paramount. We comply with all international data security and privacy laws to keep your information secure.</li>
              <li><strong>Short Turnaround:</strong> We take deadlines seriously and are committed to delivering our consulting solutions on time, every time.</li>
              <li><strong>Affordable Pricing:</strong> Our solutions are offered at highly competitive rates, helping you make the most out of your investment with us.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Workflows?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of ServiceNow advisory services. Our qualified and experienced developers have the necessary background to efficiently address any of your ServiceNow requirements, helping you streamline business and IT workflows and boost productivity.
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

export default ServiceNowConsulting;