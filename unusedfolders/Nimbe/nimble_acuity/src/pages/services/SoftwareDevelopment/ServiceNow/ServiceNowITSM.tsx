import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowITSM: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow ITSM Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Future-proof your business with our ServiceNow ITSM solutions. Experience cost savings, streamline operations, and achieve exceptional organizational functionality.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Implementing and integrating ServiceNow ITSM software often gets overwhelming for organizations already stretched thin. This leads to bottlenecks, compliance risks, and significant threats to business operations. This is where our specialized knowledge and experience make all the difference.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we offer comprehensive ITSM implementation solutions powered by the advanced ServiceNow platform. Our primary objective is to help businesses overcome these challenges and achieve operational excellence. With our expertise, we streamline and simplify complex IT processes, ensuring seamless workflows and eliminating inefficiencies.
            </p>
          </div>

          {/* Our ITSM Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ServiceNow IT Service Management Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Workforce Optimization</h4>
                <p>
                  Our advanced solutions will help you proactively align resources, optimize work allocation, and drive productivity, ensuring your workforce operates at its full potential.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Configuration Management Database (CMDB)</h4>
                <p>
                  Take the assistance of our comprehensive CMDB solutions to accurately track and manage your IT services, ensuring you have complete visibility into your infrastructure.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Virtual Agent</h4>
                <p>
                  We provide instant and personalized self-service support solutions, enabling you to resolve issues faster and improving customer satisfaction.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Performance Analytics</h4>
                <p>
                  By harnessing our performance analytics solutions, you can continuously enhance service quality, exceed customer expectations, and achieve operational excellence.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Incident Management</h4>
                <p>
                  Rapidly restore service availability and minimize the impact of incidents on your business operations with our expertise, ensuring timely resolution and efficient communication.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Agent</h4>
                <p>
                  By leveraging our mobile agent solutions, your agents can triage, respond to, and resolve service requests while on the move.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Problem Management</h4>
                <p>
                  Our solutions enable you to analyze trends, implement permanent fixes, and establish proactive measures to enhance service stability and increase customer satisfaction.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Change Management</h4>
                <p>
                  We help you automate change processes, enforce standardized approvals, and foster collaboration between IT operations and development teams.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Predictive Intelligence</h4>
                <p>
                  Using predictive intelligence, we help you deliver a seamless and unified service experience, enhancing employee productivity, satisfaction, and engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Process for ServiceNow ITSM Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">1. Requirement Analysis</h4>
                <p>
                  We provide deep insights into your unique IT service management needs through comprehensive requirement analysis.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">2. Customized Design</h4>
                <p>
                  We craft a personalized design for your ITSM solution, aligning it precisely with your requirements.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">3. Agile Development</h4>
                <p>
                  We leverage our agile methodology to build and customize modules, applications, and integrations, ensuring a robust ITSM solution.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">4. Testing & Deployment</h4>
                <p>
                  We conduct rigorous testing and seamlessly deploy the ITSM solution, guaranteeing optimal performance and usability.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for ITSM Implementation?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Structured Process:</strong> We use a robust and streamlined process to ensure efficient and effective delivery of all our ServiceNow solutions.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our highly skilled team brings extensive software development and IT consulting expertise to deliver exceptional services tailored to your needs.
              </li>
              <li>
                <strong>High-Quality Services:</strong> As an ISO-certified service provider, we prioritize delivering top-notch implementation services, employing rigorous QA processes.
              </li>
              <li>
                <strong>Data Security:</strong> We prioritize protecting sensitive data and strictly adhere to international data security and privacy regulations.
              </li>
              <li>
                <strong>Short Turnaround:</strong> With a solid commitment to meeting deadlines, we guarantee timely delivery of our solutions.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> You gain access to cost-effective and tailored services that optimize your service delivery without straining your budget.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your IT Infrastructure?
            </h3>
            <p className="text-gray-700 mb-6">
              Drawing on our extensive expertise in ITSM and a wealth of experience in ServiceNow consulting, we are dedicated to helping organizations revitalize their IT infrastructure, optimize operations, and create remarkable customer experiences. Our seasoned professionals will guide you through implementing and optimizing ServiceNow ITSM.
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

export default ServiceNowITSM;