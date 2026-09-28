import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CISasService: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Customer Information Systems as a Service (CISaaS)
            </h2>
            <p className="text-lg text-gray-600">
              Meet the needs of today's digital customers with a fully integrated and automated solution that helps you engage, serve, and retain your customers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Digital technology has changed how utility customers want to engage with products and services. This has created a need for highly efficient solutions that can address business-critical utility meter-to-cash (M2C) processes and support multiple client interaction channels, including call centers and interactive voice responses (IVRs).
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we provide comprehensive Customer Information System (CIS) services to help businesses effectively meet the needs of their utility customers. With advanced knowledge of utility frameworks and processes, we can carry out CIS transformation initiatives, helping electric, water, and other utility providers deliver metered commodities for improved customer service and increased revenue.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Customer Information System Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>CIS Data Integration Services:</strong>
                <p className="mt-2">We help utility providers clean their customer and business data to remove discrepancies that may jeopardize customer service. By identifying and removing data errors from accounts, ledgers, and billing, we help you migrate only critical and accurate information to your new CIS system.</p>
              </li>
              <li>
                <strong>CIS Process Optimization Services:</strong>
                <p className="mt-2">To help utility providers offer real-time information to their customers, our CIS experts optimize and streamline your business processes across all departments. We help you meet new regulatory compliances and mitigate the risk of interrupting mission-critical processes.</p>
              </li>
              <li>
                <strong>CIS Reporting Services:</strong>
                <p className="mt-2">Our holistic and smart reporting tools help consolidate all your customer and business data to provide data-driven insights into your bills and processes. This helps you better manage and analyze your data and gain superior operational visibility.</p>
              </li>
              <li>
                <strong>Automated Self-Service Utility Portal:</strong>
                <p className="mt-2">Our experts can create a comprehensive and fully functional customer service portal to improve your customer experience. This portal provides real-time information regarding bills, service outages, and more. It makes it easy for your customers to view and control their usage, view historic data, and raise service requests for quick and efficient delivery.</p>
              </li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Advantages of Our CIS Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Automated services and solutions</li>
              <li>Accurate and streamlined processes</li>
              <li>Complete system integration</li>
              <li>Improved customer data quality</li>
              <li>Enhanced bill generation, collection, and cash flow</li>
              <li>Comprehensive insights into customer behavior</li>
              <li>Complete billing clarity and accuracy</li>
              <li>Reduced inbound customer complaints</li>
              <li>The ability to meet regulatory requirements</li>
              <li>Enhanced customer satisfaction</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Customer Information System Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a leading CIS service provider, we have 26+ years of experience and deep process knowledge. We provide a holistic, step-by-step process that helps you efficiently manage your workload, capture customer information, and track interactions.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Team Meet:</strong> We meet with you and your team to understand your business and specific CIS requirements.
              </li>
              <li>
                <strong>Data Compilation:</strong> Our experts compile and aggregate your business data, customer information, and billing processes to create a comprehensive database that streamlines all information, making it easy to process.
              </li>
              <li>
                <strong>Process Development:</strong> We create a templated solution that is easy to understand and quick to deploy. Our experts create a futuristic CIS system with automated tools to help you engage customers and improve your bottom line.
              </li>
              <li>
                <strong>Product Deployment:</strong> After the product has been developed and thoroughly tested, it is deployed onto your servers to support your business needs.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Experienced Team:</strong> Our highly experienced and skilled team uses deep industry knowledge to provide you with comprehensive CIS services and the desired results.
              </li>
              <li>
                <strong>Affordable Services:</strong> Our efficient processes allow us to save operational overheads and provide quality services well within your budget.
              </li>
              <li>
                <strong>Customized Solutions:</strong> We are a premier CIS service provider and tailor our services to your specific needs, effectively meeting your requirements without burdening your budget.
              </li>
              <li>
                <strong>Fast Turnaround:</strong> Our multiple delivery centers across the globe help us deliver our services within a quick turnaround time.
              </li>
              <li>
                <strong>Multi-domain Experience:</strong> Our team has extensive experience working with various utility clients globally, giving us the valuable expertise to meet your business needs effectively.
              </li>
              <li>
                <strong>Security:</strong> We understand the importance of protecting data and have robust security policies in place to ensure your business data is always handled securely.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our customer service executives are available around the clock to provide you with immediate support and timely resolution of all your queries.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Implement a Modern CIS Solution?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing customer information system services to clients worldwide. With the latest technology and skilled experts, we can cater to all your CIS needs with absolute ease. From streamlining your billing practices to optimizing your process workflow, our experts can do it all to help you strengthen your bottom line.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and cost-effective CIS provider, we are just a call away. Get in touch with us today!
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CISasService;