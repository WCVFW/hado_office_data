import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const OracleCloudServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Oracle Cloud Services
            </h2>
            <p className="text-lg text-gray-600">
              **Nimble Acuity** is well known for ensuring world-class support for Oracle cloud services including computing, infrastructure, storage, applications, and databases at competitive prices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Oracle has developed its cloud services to provide customers with cost-effective options for a range of information technology capabilities. It has deployed several Oracle cloud applications to organize solutions in a variety of industries including healthcare, financial services, education, manufacturing, retail, finance, telecommunications, and more. To cater to these businesses, Oracle offers fully managed regions of Oracle's cloud infrastructure in its data centers. This new fully managed service brings Oracle's public cloud services, including Oracle Autonomous Database and SaaS applications, directly into the customer's data center. Oracle Dedicated Region Cloud Customer gives businesses access to a second-generation cloud service that includes an autonomous database.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Designed for the next generation of IaaS Cloud Services, Oracle cloud services provides a world-class cloud support experience that can be used by enterprise-scale organizations. Managed services for Oracle cloud provide Oracle's entire infrastructure platform and cloud services under a single contract.
            </p>
          </div>

          {/* Oracle Cloud Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Oracle Cloud Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a trusted Oracle cloud service provider and helps to shift workloads to Oracle Cloud Infrastructure and other cloud services. We also offer Oracle's world-class partner program, which includes Oracle Managed Cloud, Oracle Enterprise Cloud, and Oracle Global Cloud Services. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>SaaS:</strong> We provide complete Oracle Cloud SaaS solutions to help drive and maintain our clients' business growth.
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>HCM Cloud:</strong> Global Human Resources, Talent Management, Workforce Rewards, Workforce Management, HCM Analysis</li>
                  <li><strong>ERP Cloud:</strong> Project Finance, Revenue Management, Accounting Hub, Procurement, Project Management, ERP Analytics</li>
                  <li><strong>SCM Cloud:</strong> Order Management, Manufacturing, Procurement, Supply Chain Planning, Product Lifecycle Management, Maintenance Management (Asset Management)</li>
                  <li><strong>EPM Cloud:</strong> Account Reconciliation, Enterprise Planning, Cost Management, Profitability, and Planning and Budgeting</li>
                </ul>
              </li>
              <li>
                <strong>PaaS:</strong> We offer solutions and services to companies looking to build, organize, and integrate applications to the Oracle Cloud Platform as a Service.
                <ul className="list-disc list-inside ml-4 mt-2">
                  <li><strong>Application Development:</strong> Java, Digital assistant, Mobile Hub, Visual builder, AI Platform, Developer, Blockchain, Container Pipelines, Messaging, API Catalog</li>
                  <li><strong>Integrations:</strong> OIC - Integration, Process Automation, Visual Builder, Integration Analytics. SOACS - Oracle BPEL, WebLogic, Oracle Service Bus, Mediator/ESB, etc.</li>
                  <li><strong>Systems Management:</strong> We provide Systems Monitoring and IT Analytics Via Oracle Management Cloud.</li>
                  <li><strong>Data Management:</strong> Oracle Autonomous Data Warehouse/Transaction Processing Cloud Service, Oracle Database Cloud Service.</li>
                  <li><strong>Data Analytics & Integration:</strong> Big Data SQL Cloud Service, Big Data Cloud Service, Golden Gate Cloud Service, Oracle Data Integrator Cloud Service.</li>
                </ul>
              </li>
              <li>
                <strong>IaaS:</strong> With IaaS, businesses can scale up their operations. We offer solutions like Current Infrastructure Assessments, Cloud Strategy, Lift and Shift, Security and Identity Management, and Operational Support.
              </li>
              <li>
                <strong>TaaS:</strong> With our Oracle Cloud TaaS services, businesses can get the best cloud-based testing, thereby saving money on investing in operating systems, tools, and hardware. We offer Automated, Performance, On-demand, Security, and ERP Software Testing.
              </li>
            </ul>
          </div>

          {/* Oracle Cloud Services Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Oracle Cloud Services Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With our approach, your business is benefited quickly and easily. The Oracle cloud service process we follow covers all areas in one simple method:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Assess:</strong> We assess your business by putting it through a pre-configured environment and gauge the level of change and plan the kind of adoption required.</li>
              <li><strong>Prepare and Plan:</strong> After assessing your business, we establish and prepare a detailed plan needed to support the adoption.</li>
              <li><strong>Solution Design:</strong> We work with your team to configure the systems, walk through the processes, and identify in detail the areas of change required.</li>
              <li><strong>Configure:</strong> With the help of your team, we create a new solution, performing configuration in phases.</li>
              <li><strong>Validate:</strong> Once we configure and migrate your data, we test the business processes end-to-end.</li>
              <li><strong>Transition:</strong> After successfully testing the processes, we work with your team to begin the transition of the new configured cloud solution.</li>
              <li><strong>Realization:</strong> Lastly, we transition the entire business to the oracle cloud platform and continue to provide on-going support.</li>
            </ul>
          </div>

          {/* Why Outsource to Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Oracle Cloud Services to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our Oracle cloud services help you with manageability, performance, and consistent execution with high-end tools and technologies. Benefits of working with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our flexible and customizable pricing supports your budget, with options like fixed-price contracts or pay-as-you-go.</li>
              <li><strong>End-to-End Expertise:</strong> We provide you with end-to-end expertise in Oracle cloud solutions from changing your business to managing your information.</li>
              <li><strong>Trained and Certified Consultants:</strong> Our consultants are Oracle trained and certified with a strong understanding of the technical and functional capabilities of Oracle cloud services.</li>
              <li><strong>ISO Certified:</strong> We are ISO/IEC 27001 certified, providing consistent service and proving our reliability, trust, and security.</li>
              <li><strong>Dedicated Project Manager:</strong> You are provided with a dedicated project manager that keeps you updated about your Oracle Cloud account.</li>
              <li><strong>Modern Technology & Infrastructure:</strong> We have the technology and world-class infrastructure to enhance and augment your Oracle applications.</li>
              <li><strong>High Scalability:</strong> Our managed services can accommodate any size and type of business.</li>
              <li><strong>24/7 Customer Support:</strong> We have an experienced team of cloud engineers and Oracle support consultants who can provide round-the-clock support.</li>
              <li><strong>High Data Security:</strong> Our expert security policies ensure your Oracle cloud platform is secure, resilient, and compliant.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Business with Oracle Cloud?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity**'s Oracle cloud solutions team has a proven track record in helping clients across industries make their cloud transition. We can help you with moving your business to the Oracle cloud in a cost-effective manner and provide you with on-going support.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact our certified Oracle cloud service experts today and evaluate the benefits, services, and offerings.
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

export default OracleCloudServices;