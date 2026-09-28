import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowCSM: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Customer Service Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Streamline customer operations, break down silos, automate processes, and personalize customer engagement with our ServiceNow CSM services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Customer service management includes the orchestration of tasks between IT groups, back-office departments, operation teams, customer support staff, and end users. The effectiveness of your customer service depends on how well you streamline and automate these processes to cut costs and reduce resolution time. Need help with automated workflows and multi-channel support?
            </p>
            <p className="text-gray-700 leading-relaxed">
              A certified ServiceNow partner like **Nimble Acuity** can help you make the most of CSM features like case management, knowledge management, customer feedback, and surveys. Our experts rely on tools like predictive intelligence and performance analytics to ensure quality outcomes. Reach out to our experts today to deliver a friction-free customer experience.
            </p>
          </div>

          {/* Our CSM Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow CSM Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CSM Consulting Services</h4>
                <p>
                  We help our clients make the most of their CSM implementation and provide workflows and solutions that help them succeed, from automating product monitoring to addressing customer issues across multiple channels.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CSM Customization Services</h4>
                <p>
                  Are you looking for ways to personalize your ServiceNow CSM implementation? Our experts can help you achieve optimal visual workflows with no-code, rule-based processes that align with your corporate identity.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CSM Integration with Other Systems</h4>
                <p>
                  We can help you harness the full power of your CSM platform by integrating it with systems like SAP, SolarWinds, and NetSuite to manage cases effectively and on the go.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CSM Development Services</h4>
                <p>
                  Leverage our best-in-class CSM development services to reduce response time, increase first-contact resolution rates, and improve interdepartmental collaboration.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CSM Support and Maintenance</h4>
                <p>
                  Our seasoned CSM module experts are always on hand to support you through your ongoing use of the ServiceNow Customer Service Management solution, leveraging the latest tools and technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity as Your CSM Partner?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Flexible Pricing:</strong> We provide cost-effective and customized pricing plans based on project duration, complexity, and resources.
              </li>
              <li>
                <strong>Top-notch Services:</strong> We offer CSM mobile app services, effective customer data management, and major issue management to boost your team's productivity.
              </li>
              <li>
                <strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS-certified firm, we assure you that all data shared with us is secure and not divulged to any third party.
              </li>
              <li>
                <strong>24/7 Support:</strong> Our customer support, marketing, sales, and project management teams are available around-the-clock to answer your queries.
              </li>
              <li>
                <strong>Skilled Team:</strong> We have some of the most experienced and skilled ServiceNow experts on board who can take care of all your needs.
              </li>
              <li>
                <strong>Scalable Services:</strong> We can scale up our service requirements and ramp up the project team size as and when you need it.
              </li>
              <li>
                <strong>Dedicated Manager:</strong> We assign a dedicated manager to be the single point of contact for all your needs.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Customer Service?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a premier-level ServiceNow partner with rich industry experience in consultation, implementation, and integration. Our support services help clients cut customer support response time and increase first-contact resolution rates.
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

export default ServiceNowCSM;