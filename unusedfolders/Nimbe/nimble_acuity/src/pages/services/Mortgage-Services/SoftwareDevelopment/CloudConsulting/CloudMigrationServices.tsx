import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudMigrationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Migration Services
            </h2>
            <p className="text-lg text-gray-600">
              Move your applications and infrastructure to the cloud to boost productivity and trim IT costs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you having trouble with your existing IT capacity as your business scales? Migrating applications to the cloud can help accommodate new infrastructure and services while mitigating risks, maximizing performance, and promoting business growth. It is also essential for enterprises to decide the cloud migration approach, and whether a public, private, or hybrid approach suits their needs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, our cloud migration services help in moving your applications, infrastructure, and other relevant business processes to the cloud, thus freeing up your valuable infrastructure. With extensive expertise in delivering an exceptional experience, our cloud migration and development services ensure application speeds are constantly maintained. We also use third-party tools and pre-defined templates designed for your unique workload. Join us and discover how we streamline cloud migrations in a hassle-free manner.
            </p>
          </div>

          {/* Cloud Migration Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cloud Migration Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Over the years, **Nimble Acuity** has helped thousands of organizations migrate swiftly to the cloud while freeing up resources, bringing down IT costs, improving productivity, and promoting better operational and business agility. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Application Data Cloud Migration:</strong> Our approach towards application migration ensures complete satisfaction, whether it is migrating files in small batches or entire virtual machines.</li>
              <li><strong>Workload Cloud Migration:</strong> We have worked with clients having multiple requirements such as workload optimization and migration from on-premises to multiple hosted platforms. Our services deliver truly seamless cloud migration results.</li>
              <li><strong>Data Center Cloud Migration:</strong> As your cloud migration expert, we leverage our proven framework and processes to complete the task without any associated downtime.</li>
              <li><strong>Cloud Migration Performance Testing:</strong> We help you test cloud-based applications for stability, performance, speed, and efficiency. Our testing strategy is built on years of experience.</li>
              <li><strong>Post-migration Cloud Monitoring:</strong> Our services allow you to reduce IT maintenance costs while ensuring there is no performance reduction. Our team can easily assist you from both on-site and off-site locations.</li>
            </ul>
          </div>

          {/* O2I's Cloud Migration Process We Follow */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              **Nimble Acuity**'s Cloud Migration Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a part of outsourcing cloud migration services, we ensure every requirement is met and every solution is customized to suit your needs. We rely on multiple levels of planning and projections to ensure a complete, fool-proof cloud migration for our clients. Our process involves the following steps:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cloud Readiness Validation:</strong> We validate whether cloud migration is justified or not, while also notifying the client about the cost of ownership and the performance metrics that can be achieved.</li>
              <li><strong>Infrastructure Validation:</strong> We ensure your infrastructure can withstand the process of cloud migration without too many issues by looking at multiple dependencies and available servers.</li>
              <li><strong>Migration Setup:</strong> We ensure all items for migration follow our checklist, which considers factors such as downtime, migration order, and transition deadlines.</li>
              <li><strong>Migration Testing:</strong> A load test is performed, and an application is migrated and then checked for performance and stability issues. We also perform penetration testing and regulatory compliance checks.</li>
              <li><strong>Migration Go-live:</strong> We begin migrating your entire application or infrastructure to the cloud while simultaneously checking for issues. This is followed by in-depth testing of all variables to ensure the migration has been successfully completed.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>IT Risk & Security Management</li>
              <li>Managed IT Services</li>
              <li>Network Management Services</li>
              <li>Data Center Services</li>
            </ul>
          </div>

          {/* Why Outsource Cloud Migration Services to O2I? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Cloud Migration Services to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We help move any workload away from our clients—whether it is an application, database, website, or even a complete data center. By partnering with us, you can benefit from the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Efficient Monitoring:</strong> We centralize the monitoring process to ensure your IT team becomes more efficient when addressing any issues.</li>
              <li><strong>Transparent Costing:</strong> We follow a transparent pricing plan with dedicated breakdowns for each stage.</li>
              <li><strong>Accelerated Deployment:</strong> Our deployment scenarios are time-tested and leverage the best possible ways for you to move swiftly to the cloud.</li>
              <li><strong>Enhanced Security:</strong> We ensure all your cloud migration remains secure and that your applications and infrastructure are autonomously updated.</li>
              <li><strong>Investment-optimized Services:</strong> Our cloud deployment provisions are auto-scalable, helping business owners save more money in the long run.</li>
              <li><strong>Scalable Services:</strong> Our services are infinitely scalable as we can keep optimizing performance for all your applications and workloads simultaneously.</li>
              <li><strong>Rapid Turnaround Time:</strong> We pride ourselves in our time to go-live by simplifying key aspects of the entire process.</li>
              <li><strong>Dedicated PoC:</strong> Each project comes with a project manager who serves as your sole point of contact for any and all issues.</li>
              <li><strong>Best-in-class Infrastructure:</strong> We ensure you can always receive the benefits of our superb team of cloud engineers and proprietary programs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Cloud Migration?
            </h3>
            <p className="text-gray-700 mb-6">
              Over the years, our team has worked on countless cloud migration projects, delivering critical workloads to public, private, or hybrid cloud environments successfully. You can rely on our experts to manage your expectations and deliver stellar results every single time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us to know more about our cloud migration offerings, and how we can help you break new ground in operational efficiency.
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

export default CloudMigrationServices;