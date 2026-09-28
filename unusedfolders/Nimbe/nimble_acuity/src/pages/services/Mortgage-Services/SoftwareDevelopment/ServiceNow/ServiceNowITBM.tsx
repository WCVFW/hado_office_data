import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowITBM: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow IT Business Management
            </h2>
            <p className="text-lg text-gray-600">
              Simplify and transform your business's IT processes to automate workflows, reduce costs, and optimize overall performance.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In this fast-paced business environment, ensuring IT infrastructure's smooth and hassle-free functioning is critical to driving a successful business. However, aligning IT processes with your business's objectives can be challenging. This is where ServiceNow IT Business Management Services comes into play!
            </p>
            <p className="text-gray-700 leading-relaxed">
              With over two decades of experience, our team of qualified experts at **Nimble Acuity** has the technical know-how to offer a sustainable competitive advantage to our clients. We assist with real-time visibility into IT operations, enhanced collaboration, and data-driven decision-making to upgrade efficiency and productivity at reduced costs.
            </p>
          </div>

          {/* ITBM Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ServiceNow IT Business Management Solutions We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Demand Management</h4>
                <p>
                  Streamline your IT and business requests to ensure accurate forecasting of the demand for your products and services with our expert services.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Project Portfolio Management</h4>
                <p>
                  Optimize IT investment, prioritize initiatives, and deliver beyond-satisfaction outcomes to clients with our comprehensive solutions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Contract Management</h4>
                <p>
                  Take our assistance to improve visibility into contract data, eliminate risks, reduce contract lifecycle times, and improve compliance.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow IT Financial Management</h4>
                <p>
                  Employ our professional expertise to automate your business's workflows and achieve operational efficiency in processes.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Application Portfolio</h4>
                <p>
                  Get access to the latest tools and professional expertise to boost the efficiency and productivity of your business's workflows.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">ServiceNow Resource Management</h4>
                <p>
                  Obtain flexibility to boost your business's scalability with our comprehensive ServiceNow Resource Management services.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Process for ServiceNow ITBM
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">1. Gathering Client Requirements</h4>
                <p>
                  Our experts focus on understanding your workflow and getting a detailed understanding of goals and expectations from the project.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">2. Creating Customized Workflows</h4>
                <p>
                  Our team determines the ideal roadmap for redesigning and customizing IT processes through data migration and integration.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">3. Delivery and Support</h4>
                <p>
                  Our team launches the solutions and offers training and support to help you enjoy the hassle-free benefits of the platform.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Structured Process:</strong> Our highly-qualified professionals have the technical know-how to implement streamlined IT processes for clients, leading to quick and efficient solutions.
              </li>
              <li>
                <strong>Years of Expertise:</strong> Our team has over two decades of experience providing quality-rich ITBM consultation and implementation services to big-ticket clients.
              </li>
              <li>
                <strong>High-Quality Services:</strong> As an ISO-certified service provider, our team focuses on offering quality-rich operational efficiencies and solutions.
              </li>
              <li>
                <strong>Data Security:</strong> As an ISO/IEC 27001:2022-certified provider, we undertake rigorous security measures to ensure the utmost data confidentiality and compliance.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> We are committed to meeting deadlines and providing rapid implementation of the ServiceNow platform.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> We offer our ServiceNow IT Business Management solutions at competitive prices, helping you gain enhanced value.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Align Your IT with Business Goals?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** offers a wide range of cutting-edge enterprise solutions to businesses. Powered with the latest tools, technologies, and years of expertise, our highly qualified professionals assist clients in transforming their business ecosystems into digitally optimized, efficient operational strategies.
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

export default ServiceNowITBM;