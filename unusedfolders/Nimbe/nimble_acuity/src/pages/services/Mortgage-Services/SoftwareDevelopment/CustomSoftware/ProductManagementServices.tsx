import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ProductManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Product Management Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose our product management services and receive hands-on consulting support for your most critical projects.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for enhanced, quick, and secure delivery of your critical software products? Do you want to implement an integrated and process-driven approach to your product management that provides a clear actionable road map to deploy your product or service to the market? Are you struggling to find the right post-deployment product management support? If so, you have come to the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading product management service provider and has helped companies from across the world with their product management needs. We provide support for upgrades and constant optimization to ensure that your products do not become redundant. We have a thorough understanding of a variety of business verticals and the technologies related to these verticals and we also have significant experience and expertise in deploying and maintaining very complex products.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Product Management Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Concept Management Services</h4>
                <p className="text-gray-700">We comprehensively discuss all the concepts for the product, including its features, target customers, and market, to gain a clearer understanding. We provide a complete picture of the product to help with planning the design and development.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Task Prioritization Services</h4>
                <p className="text-gray-700">In this stage, we identify and prioritize all the tasks required to design, develop, and deploy a minimum viable product. This is a highly important activity that significantly affects the successful deployment.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Roadmap Creation Services</h4>
                <p className="text-gray-700">We create a step-wise implementation strategy with clear and actionable time-based goals. We document the plan while considering all the product's features, specifications, technical challenges, and other related variables.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Product Deployment Services</h4>
                <p className="text-gray-700">In this step, the designed and developed software product is beta deployed. We perform a comprehensive analysis to ensure the product meets all specifications and appropriate guidelines. We also perform thorough testing.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Documentation Services</h4>
                <p className="text-gray-700">We provide comprehensive and detailed specification documentation that covers all the product's features. This helps in understanding the objectives of each feature and the effort needed to implement it.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Feedback Incorporation Services</h4>
                <p className="text-gray-700">Here, the product is deployed in the live environment and further developed by listening to customer feedback. We meticulously perform this process and rectify new, unanticipated issues to make the product more viable and effective.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> Our solutions are priced very competitively, providing you with the highest value for money.</li>
              <li><strong>High-quality Services:</strong> We are an ISO-certified company and use robust QA processes to ensure we always provide the best product management services.</li>
              <li><strong>Tools and Technologies:</strong> Our team is abreast of all the latest product management tools and best practices.</li>
              <li><strong>Structured Process:</strong> We use a streamlined and structured process to deliver all our services efficiently.</li>
              <li><strong>Experienced Team:</strong> Our team has extensive experience in providing a full spectrum of product management services to clients worldwide.</li>
              <li><strong>Superb Infrastructure:</strong> All our experts work out of modern offices with powerful computers, enabling them to provide the best quality services.</li>
              <li><strong>Data Security:</strong> Your data is of primary importance to us. We are ISO/IEC 27001:2022-certified and comply with international data security and privacy laws.</li>
              <li><strong>Short Turnaround:</strong> We will always provide our services well within the agreed-upon deadline.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Product's Success?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing highly robust product management services. From creating product vision statements and blueprints to implementing requirements management and conducting comprehensive market analysis, we do it all for you. Our experience and expertise ensure that you develop your product quicker and boost efficiency and throughput.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for high-quality and highly robust product management services, get in touch with us today!
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

export default ProductManagementServices;