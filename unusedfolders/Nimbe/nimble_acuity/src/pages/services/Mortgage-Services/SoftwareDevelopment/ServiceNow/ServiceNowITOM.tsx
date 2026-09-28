import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowITOM: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow IT Operations Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Say no to tedious task overloads with our swift and hassle-free ServiceNow ITOM implementation.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ServiceNow ITOM services are trusted by businesses around the globe to predict imminent IT issues, minimize user impact, and automate resolutions. But not all businesses that leverage ServiceNow ITOM have the capabilities to explore the technical complexities of the platform to the fullest. They struggle with limited in-house IT expertise, service disruptions, operational costs, and the latest advancements in ITOM tools, technologies, and best practices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A managed ServiceNow partner like **Nimble Acuity** can help address these challenges effectively. We enable organizations to focus on their core business objectives while ensuring that their IT operations are efficient, reliable, and aligned with industry best practices. Our high-quality services improve service visibility, automate workflows, reduce errors, and enhance overall IT operations. Leverage our services to automate monotonous tasks and lower business costs with certified experts.
            </p>
          </div>

          {/* Our ITOM Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow IT Operations Management Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Discovery</h4>
                <p>
                  By partnering with us, your enterprise can leverage specialized professionals to scan and map IT environments. Our nuanced modules allow you to save time and resources, focus on core business functions, and benefit from accurate and up-to-date visibility.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Service Mapping</h4>
                <p>
                  Our services enable you to accurately map and analyze your service dependencies. We help streamline operations, improve service availability, and enhance IT service management using this ServiceNow ITOM feature.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Certificate Management</h4>
                <p>
                  As your managed service provider, we help you maintain secure and compliant digital certificates while minimizing risks. By leveraging our expertise, you can strengthen your security posture and achieve compliance while freeing up your internal resources.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Firewall Audits and Reporting</h4>
                <p>
                  Our experts conduct comprehensive audits, track rule changes, and generate reports to ensure that your firewall policies are aligned with industry standards. We help you enhance your security posture and effectively manage firewalls.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Service Graph Connectors</h4>
                <p>
                  Our solutions help you seamlessly consolidate data from CMDBs, cloud providers, and other systems while providing a unified view of your IT environment. Outsource this integration to enhance decision-making and improve collaboration across teams.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Configuration Management Database</h4>
                <p>
                  Our certified experts help maintain and update CMDBs efficiently; they ensure data accuracy, handle change management processes, and provide accurate impact analysis. Leverage our services to improve IT service management efficiency and save on operational costs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Agent Client Collector</h4>
                <p>
                  We proactively monitor system performance, identify issues, and deliver superior user experiences. Our specialists deploy and manage operational data from endpoints and devices, helping you optimize IT service visibility and improve resource utilization.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Expertise and Experience:</strong> Established in 2002, we have 22+ years of experience in ServiceNow services. Our certified professionals have a deep understanding of IT operations.
              </li>
              <li>
                <strong>Custom Solutions:</strong> We have delivered over 1000 projects to clients in 60+ countries. We provide end-to-end solutions tailored to your business needs, ensuring seamless integration.
              </li>
              <li>
                <strong>Improved Operational Efficiency:</strong> By implementing ServiceNow ITOM, we help organizations automate manual tasks, reduce complexities, and improve overall efficiency.
              </li>
              <li>
                <strong>Real-time Insights and Analytics:</strong> Our solutions provide actionable data and visualizations, allowing you to make informed decisions, optimize performance, and identify areas for improvement.
              </li>
              <li>
                <strong>Seamless Integration:</strong> We help you leverage the power of ServiceNow ITOM while maintaining a unified IT environment with your existing tools and systems.
              </li>
              <li>
                <strong>Maintenance and Support:</strong> Our dedicated team provides ongoing support and assistance, ensuring a smooth implementation and post-implementation experience.
              </li>
              <li>
                <strong>Dedicated Project Managers:</strong> We assign dedicated project managers to each client who serve as a single point of contact. They resolve your queries and keep you updated.
              </li>
              <li>
                <strong>Cost-effective Pricing:</strong> Our pricing modules are customized to your project and can help you cut costs by up to 60%.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your IT Operations?
            </h3>
            <p className="text-gray-700 mb-6">
              Join the league of our 600+ customers. With our deep knowledge and extensive experience, we deliver tailored implementation strategies that optimize your IT operations, streamline processes, and enhance overall efficiency.
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

export default ServiceNowITOM;