import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const PowerBIServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Power BI Services
            </h2>
            <p className="text-lg text-gray-600">
              Unleash the power of data with our Power BI consulting services. Drive performance, optimize planning, and boost your business intelligence with our top-tier solutions.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** recognizes the challenge CXOs, analysts, data scientists, and managers face in making data-driven decisions and maximizing the value of their unexploited data. We empower organizations to overcome these challenges by ushering in a data-driven culture through our Power BI services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have been assisting global businesses in substantiating their decisions with verifiable data, accelerating go-to-market strategies, and streamlining workflows for optimized outcomes. Partnering with **Nimble Acuity** will give you access to a wealth of knowledge and experience in advanced business analytics, data visualization, and customized dashboard development. Adopt our cost-effective, and scalable Power BI services to make data-driven decisions that help you achieve strategic objectives with confidence.
            </p>
          </div>

          {/* Power BI Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Power BI Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a Power BI Consulting Company, we provide the following tailored solutions that empower you to make informed decisions and derive valuable insights from your data:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Dashboard Design and Development</h4>
                <p>Our experts specialize in data visualization and user experience design to create visually appealing and insightful dashboards. We collaborate with you to understand your business requirements and ensure the dashboard delivers actionable insights.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Modeling and Integration</h4>
                <p>Our proficiency in data modeling and integration ensures that your raw data is transformed into a structured format suitable for analysis. We establish accurate data representations and optimize data integration for seamless reporting.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Report Development and Optimization</h4>
                <p>We have a proven track record in developing insightful Power BI reports that showcase key metrics and KPIs. Our team works closely with you to design interactive elements and optimize report performance for efficient data exploration.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Analytics and Insights</h4>
                <p>We employ a systematic approach to uncover patterns, trends, and correlations that drive informed decision-making. Whether you require predictive modeling or data mining, we help you gain actionable insights.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Power BI Governance and Security</h4>
                <p>We implement robust security measures and establish data governance policies to maintain data confidentiality, integrity, and compliance. Our team assists in defining security roles and implementing access controls.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Performance Optimization</h4>
                <p>We employ performance optimization techniques, including data model and query optimization. Our experts fine-tune your Power BI environment to ensure optimal performance and a seamless user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Power BI Embedded Services</h4>
                <p>Our services seamlessly integrate interactive Power BI dashboards and reports into your custom applications or websites. We guide you through the embedding process, ensuring a cohesive and unified experience for your users.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Power BI Migration</h4>
                <p>If you are considering migrating from a legacy BI system, we have the expertise to facilitate a smooth transition. Our capabilities ensure data compatibility, allowing you to leverage the full power of Power BI.</p>
              </div>
            </div>
          </div>

          {/* Our Power BI Methodology */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Power BI Methodology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have developed a systematic methodology that forms the foundation of our Power BI Consulting Services, focusing on a structured, step-by-step process.
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Gathering:</strong> We identify stakeholders, define business objectives, assess data sources, and establish success metrics to ensure a clear project scope.</li>
              <li><strong>Vendor Selection:</strong> We evaluate potential Power BI vendors based on their expertise, experience, and capabilities.</li>
              <li><strong>Data Integration:</strong> We collaborate to cleanse, transform, and model data, connecting multiple data sources for a unified view.</li>
              <li><strong>Report & Dashboard Development:</strong> We create data visualizations, implement business logic, and organize content for intuitive user navigation.</li>
              <li><strong>Onboarding:</strong> We set up the Power BI embedded environment and configure entities to prepare for deployment.</li>
              <li><strong>Documentation:</strong> We document key aspects such as data sources, report specifications, and user guides to ensure a smooth transition and future scalability.</li>
            </ul>
          </div>

          {/* What Differentiates Our Power BI Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What Differentiates Our Power BI Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are known for providing holistic Power BI solutions that enable organizations to maximize their data potential. Our unique capabilities set us apart from the competition:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Complete Microsoft Stack:</strong> Our expertise in the entire Microsoft technology stack enables us to deliver end-to-end solutions, seamlessly integrating Power BI with other tools like Azure, SQL Server, and Excel.</li>
              <li><strong>Customized Engagement Models:</strong> We offer flexible engagement models that include complete implementation, after-sales support, and training, ensuring an effective and tailored partnership.</li>
              <li><strong>Microsoft Certified Partner:</strong> As a certified Microsoft Partner, our competency in creating interactive dashboards and generating insightful reports is recognized and endorsed, reflecting our commitment to high-quality solutions.</li>
              <li><strong>360-degree Data Security:</strong> Our well-defined security process encompasses planning, protection, detection, and response, ensuring comprehensive security across all information touchpoints.</li>
              <li><strong>Services for Diverse Industries:</strong> With extensive experience across various sectors, our domain knowledge allows us to deliver customized, industry-focused solutions that provide tangible business benefits.</li>
              <li><strong>Round-the-Clock Support:</strong> Our dedicated team offers 24/7 support to ensure swift resolution of concerns, providing uninterrupted assistance throughout our engagement.</li>
              <li><strong>Competitive Pricing:</strong> Starting at $20 per hour, we offer both hourly and full-time equivalent (FTE) models, allowing you to choose the option that best suits your budget.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Achieve Your Data Analytics Goals?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** designs customized Power BI solutions based on our understanding of the unique big data challenges and requirements across various industries. Our comprehensive services extend beyond implementation and encompass data integration, modeling, visualization, reporting, and dashboard development. We also provide proactive support and maintenance to ensure ongoing performance and optimized implementation.
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

export default PowerBIServices;