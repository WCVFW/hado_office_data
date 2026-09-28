import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const AzureMigration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Azure Migration Services
            </h2>
            <p className="text-lg text-gray-600">
              Get customized workload migration support, scale quickly to accommodate an evolving workforce, and enhance security with our Azure Migration Services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Skeptical about migrating to Azure, despite the growing demand for secure and scalable platforms? Struggling to create a failsafe strategy that ensures successful Azure migration? Are you grappling with post-migration staffing and reorganizing technology teams? Outsource Azure migration services to **Nimble Acuity** to confidently leap into this technology paradigm.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is an experienced Azure migration services company with over 26 years of industry experience assisting businesses worldwide with quick and efficient Azure migration. Microsoft Azure is a business-centric platform that is highly flexible, agile, and secure. Building an innovative migration strategy enables you to tackle technical glitches, troubleshoot challenges, and ensure a smooth transition. Increase agility, improve collaboration, boost productivity, and enhance safety with our services.
            </p>
          </div>

          {/* Azure Migration Solutions We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Azure Migration Solutions We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Migration needs vary from one business to another. We create custom migration strategies based on the nature of your workloads, infrastructure needs, and security protocols. Our Azure migration solutions include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Cloud Migration Services</h4>
                <p>Assess the performance of your on-premises workload and boost your enterprise agility by migrating to Azure with our quick, efficient, and custom migration strategies.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Database Migration Service</h4>
                <p>Migrate large and complex databases to Azure to organize and store them remotely, make them easily accessible, and ensure business continuity.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Data Migration Services</h4>
                <p>Manage and monitor your on-premises data sets from a single screen using central management tools with our Azure data migration solutions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Modernization</h4>
                <p>Process and store your organizational data efficiently to improve decision-making, stabilize growth, and use data at scale with our data modernization solutions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure SQL Migration</h4>
                <p>Move your data to or from the SQL server with our Azure SQL migration services. Our experienced migration experts cater to your unique needs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure DevOps Migration Services</h4>
                <p>Migrate data between team projects, make bulk edits, and move work items to improve collaboration and boost productivity with our comprehensive solutions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure App Service Migration</h4>
                <p>Leverage app service migration assistant to move all your stand-alone, on-premises web applications to Azure with our Azure migration consulting services.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Azure Application Migration</h4>
                <p>Migrate your enterprise software applications from any environment to Azure with our quick, efficient, and secure migration strategies.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Application Modernization</h4>
                <p>Upgrade old software to prepare it for new computing approaches and extend its lifespan with our application modernization solutions.</p>
              </div>
            </div>
          </div>

          {/* Azure Migration Process Flow We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Azure Migration Process Flow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Azure migration specialists strive to ensure you make a seamless migration to Azure by following a multi-step approach, which involves:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Planning Migration Strategy: We analyze your enterprise requirements and compare them with your current condition to design a suitable migration strategy.</li>
              <li>Creating Roadmap and Allocating Resources: We develop migration project outlines, allocate resources, identify complexities, and devise risk mitigation strategies to ensure a smooth migration.</li>
              <li>Devising Migration Strategy: Our consultants develop a suitable cloud solution architecture that is secure and compliant to ensure seamless migration to Azure.</li>
              <li>Mapping Resources: We identify and map your enterprise resources, applications, and more, before and after migration to ensure smooth functioning.</li>
              <li>Migration and Implementation: We use Azure-native tools to move your data, applications, and workloads to Azure. This step also includes training and handover, after successful migration.</li>
            </ul>
          </div>

          {/* What Makes Us the Preferred Azure Migration Service Provider? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We strive to empower our clients with powerful migration strategies to move their enterprises to Azure successfully. However, some of the unique benefits of choosing us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Project Quality:</strong> We have strict project evaluation standards and follow multi-level quality assessments to deliver high-quality services that precisely cater to your needs.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS-certified company, we have stringent data security measures in place to prevent data breaches.</li>
              <li><strong>World-class Infrastructure:</strong> All our delivery centers are equipped with the latest and advanced tools, uninterrupted network connections, and more to serve you better.</li>
              <li><strong>Easy Scalability:</strong> Scale quickly with our advanced tools and a pool of skilled and certified Azure consultants to manage fluctuating migration needs.</li>
              <li><strong>Swift Implementation:</strong> As we plan innovative migration strategies, leveraging our expertise assures swift implementation without any scope for downtime.</li>
              <li><strong>Competitive Pricing:</strong> We understand that migration needs vary from one client to another. So, we offer a flexible pricing system where you will be billed based on your project requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Cloud Adoption Journey?
            </h3>
            <p className="text-gray-700 mb-6">
              As digital disruptions continue to make waves, the time is right for you to embrace more flexible and secure cloud computing platforms. Whether you already have a Microsoft environment or are new to Azure, our team of Azure-certified cloud experts will assist you with leveraging Azure's intelligent systems, moving legacy systems, and building efficient migration roadmaps.
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

export default AzureMigration;