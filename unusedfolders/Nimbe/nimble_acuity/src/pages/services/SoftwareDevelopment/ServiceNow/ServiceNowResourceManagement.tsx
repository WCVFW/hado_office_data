import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowResourceManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Resource Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Gain access to accurate and real-time information on resource availability with our high-quality services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for accurate and real-time data on resource availability? Are you on the lookout for skilled and experienced ServiceNow resource management experts who can cater to all your needs? Then, the best step for you would be to partner with a skilled and talented ServiceNow resource management service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading ServiceNow resource management service provider that can cater to all your needs. We have some of the most experienced and skilled ServiceNow resource management experts on board who can help with ease. We leverage the latest tools and technologies while delivering top-notch services.
            </p>
          </div>

          {/* Our Resource Management Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow Resource Management Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Resource Scheduling Services</h4>
                <p>
                  Our team comprises some of the most experienced and skilled ServiceNow resource management experts who can help clients with accurate and error-free resource scheduling.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Resource Workflow Services</h4>
                <p>
                  We have the required skills and expertise to provide clients with the best quality resource workflow services. We make use of the latest tools and technologies while delivering error-free services.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Resource Workbench Services</h4>
                <p>
                  We have a team of highly skilled and experienced ServiceNow resource management experts who can cater to all your workbench service requirements.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Resource Management Reporting Services</h4>
                <p>
                  Our team of experts has the required skills and talent to understand each client's unique requirements and provide them with customized resource management reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for ServiceNow Resource Management?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Flexible Pricing:</strong> We provide our customers with highly flexible and cost-effective pricing plans which will suit their business needs and budget well.
              </li>
              <li>
                <strong>High-Quality Services:</strong> We are an ISO-certified firm, ensuring that all services provided are of the best quality and error-free.
              </li>
              <li>
                <strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, you can rest assured that all the data shared with us is completely secure and not divulged.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our customer support, marketing, sales, and project management teams are available at all times to answer your queries.
              </li>
              <li>
                <strong>Quick Turnaround Time:</strong> We operate through several delivery locations, empowering us to deliver services within a quick time.
              </li>
              <li>
                <strong>Experienced Team:</strong> We have some of the most experienced and skilled ServiceNow resource management experts on board who can take care of all your needs with ease.
              </li>
              <li>
                <strong>Easily Scalable Services:</strong> Our team has the bandwidth to scale up service requirements and ramp up the project team size as needed.
              </li>
              <li>
                <strong>Dedicated SPOC:</strong> When you partner with us, we will assign a dedicated manager to be the single point of contact for all your needs.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Resource Management?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing top-quality ServiceNow resource management services. We have some of the most experienced and skilled experts on board who can cater to all your requirements with ease.
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

export default ServiceNowResourceManagement;