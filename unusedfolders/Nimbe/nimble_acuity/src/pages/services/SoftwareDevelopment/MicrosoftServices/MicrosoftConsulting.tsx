import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MicrosoftConsulting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Microsoft Consulting Services
            </h2>
            <p className="text-lg text-gray-600">
              Transition legacy systems to cloud-optimized maturity models with our Microsoft consulting services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              As a trusted Microsoft consulting partner, **Nimble Acuity** empowers businesses and helps them drive innovation into their IT infrastructure. Our services enable top companies and global enterprises to implement Microsoft products and services seamlessly. Our expertise extends to the Power platform, Dynamic 365, MS Teams, M365, Viva, Azure Security, and more.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We spearhead your digital transformation to extend your future possibilities. Our consultants help plan, strategize, migrate, and adopt Microsoft solutions to solve real-time business problems. Our solutions are deployed securely over the cloud to help businesses realize greater values within shorter time spans. Reach out to us to save costs and optimize the value of your Microsoft investments.
            </p>
          </div>

          {/* Our Microsoft Consulting Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Microsoft Consulting Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Leverage the latest innovations by Microsoft to optimize operations, improve collaboration and productivity, and drive sustainable business growth. Here are a few ways in which we can help you:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Digital Transformation Services</h4>
                <p>We help businesses leverage Microsoft's suite of technologies and solutions to transform operations and embrace digital technologies. We help you maximize your ROI on Microsoft investment and undergo a comprehensive digital transformation.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Analytics and Business Intelligence</h4>
                <p>Our Microsoft consultants work closely with you to help develop a data analytics and business intelligence strategy that meets your business goals. We design and implement data architectures, create effective data models and visualizations, and provide ongoing training and support.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Management & Analytics</h4>
                <p>Our Microsoft-based data management and analytics consulting services help businesses to structure, cleanse, and interpret data more effectively. Our services encompass data architecture, modeling, quality assurance, and advanced analytics.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Integration Services</h4>
                <p>Integrate your business systems and streamline your workflows with our Microsoft integration services. Our experts ensure that your applications, databases, and processes work together harmoniously, enabling seamless data exchange, collaboration, and increased productivity.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Solutions</h4>
                <p>Let us help you harness the power of the cloud to transform your business with cutting-edge solutions by Microsoft. Our solutions enable businesses to streamline operations and automate workflows to enhance productivity and accelerate digital transformation.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile App Development</h4>
                <p>Our expertise in Azure Mobile Apps allows us to build scalable backends. We also utilize Power Apps for low-code development and Azure DevOps for collaborative software development, enabling us to deliver high-quality mobile apps efficiently.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Migration Services</h4>
                <p>Whether it's transitioning on-premises infrastructure to Microsoft Azure, migrating applications to modern platforms, or moving data from databases, our services ensure a smooth and secure transition.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Enterprise Resource Planning</h4>
                <p>We offer services such as business process analysis, data migration, and system integration, ensuring a seamless ERP implementation. With our Microsoft ERP Services, organizations can enhance efficiency and gain real-time visibility into operations.</p>
              </div>
            </div>
          </div>

          {/* Our Microsoft Consulting Services Processes */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Microsoft Consulting Services Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To power your digital transformation with Microsoft, we follow a meticulous approach that includes the following steps:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Assessing Your Current State:</strong> Our proactive monitoring services assess your current state to pinpoint risks and inefficiencies in your Microsoft environment.</li>
              <li><strong>Provide Expert Inputs:</strong> We provide guidance on infrastructure design, development, and deployment of appropriate applications to mitigate risks and lower costs.</li>
              <li><strong>Recommending Operational Best Practices:</strong> After a thorough analysis, we suggest the best practices for transforming your IT investments into strategic and agile business assets.</li>
              <li><strong>Refresher Training and Digital Advisory:</strong> We provide exclusive IT staff training and ongoing support to help you maximize your capabilities and accelerate innovation.</li>
            </ul>
          </div>

          {/* Why Choose Us as Your Microsoft Consulting Company? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our Microsoft consultants employ best practices and robust methodologies to ensure a seamless transition, minimizing disruptions and maximizing the value of your legacy investments. The key indicators of our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Microsoft Partners since 2004:</strong> Our enduring partnership with Microsoft demonstrates our deep expertise in their technologies and solutions. We stay at the forefront of Microsoft's advancements, ensuring we deliver cutting-edge services to our clients.</li>
              <li><strong>Industry-Specific Consulting:</strong> Our consultants possess industry-specific knowledge, allowing us to provide tailored solutions that address the specific needs and regulations of your industry, resulting in more effective and relevant outcomes.</li>
              <li><strong>Transforming Work Cultures:</strong> We recognize that successful technology adoption requires a cultural shift. Our consultants work diligently to transform work cultures within your organization, guiding and empowering your teams to embrace new technologies and practices.</li>
              <li><strong>100% Data Security:</strong> We prioritize the security of your data. Our consultants follow industry best practices and employ robust security measures to protect your sensitive information, implementing encryption, access controls, and monitoring systems.</li>
              <li><strong>Scalable Solutions:</strong> We understand that your business needs may evolve over time, and our consultants ensure that the Microsoft solutions we implement can accommodate growth and changing requirements.</li>
              <li><strong>Faster Turnarounds:</strong> Our global delivery centers and a dusk-to-dawn approach enable us to provide faster turnarounds without compromising quality. We maintain transparency throughout the project, ensuring we meet your deadlines effectively.</li>
              <li><strong>Round-the-clock Services:</strong> Our commitment to your success goes beyond normal business hours. We provide continuous support and maintenance services to address any issues that may arise, thus ensuring the smooth operation of your Microsoft solutions.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Digital Transformation?
            </h3>
            <p className="text-gray-700 mb-6">
              As an ISO-certified service provider with clients in over 160 countries, **Nimble Acuity** takes pride in enabling enterprises to adopt Microsoft offerings seamlessly. Our expertise lies in providing strategy, planning, migration, implementation, and adoption of Microsoft solutions to help clients derive maximum ROI on their investments. Trust us as your outsourcing partner for Microsoft solutions and experience the transformative impact of optimized and innovative migration processes with minimal disruptions.
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

export default MicrosoftConsulting;