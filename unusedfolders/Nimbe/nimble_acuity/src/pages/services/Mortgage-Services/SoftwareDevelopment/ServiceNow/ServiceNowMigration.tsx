import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowMigration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Migration Services
            </h2>
            <p className="text-lg text-gray-600">
              Unlock all the benefits of the ServiceNow solution by choosing our comprehensive migration services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              In order to boost productivity and efficiency, organizations must automate their operations, streamline their workflows, and improve collaboration. If you find yourself grappling with these challenges, moving your old ITSM system to ServiceNow or upgrading your current ServiceNow solution may be the answer. If you lack the expertise to handle this, our end-to-end ServiceNow migration services can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a top provider of **ServiceNow data migration services** with over two decades of experience catering to a diverse, global clientele. To maximize your ServiceNow investment, we help you upgrade to the most recent platform release with our expert solutions. We'll assist you in using your ServiceNow solution to streamline and automate processes, boosting productivity and efficiency.
            </p>
          </div>

          {/* Migration Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ServiceNow Platform Migration Solutions We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migrating From Your Old Solution to ServiceNow</h4>
                <p>
                  We handle data migration and integrations between ServiceNow and other technologies in your IT ecosystem, including cloud services, IT infrastructure management software, email, and CRM programs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migrating From an Older ServiceNow Release to a Newer One</h4>
                <p>
                  Our experts update your ServiceNow solution to the most recent platform release (together with all relevant integrations, customizations, and custom apps). We also perform quality assurance and provide user training.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migrating From a BMC To ServiceNow</h4>
                <p>
                  To fully utilize all the features and capabilities of ServiceNow, our professionals can convert your BMC solution to the most recent ServiceNow platform release.
                </p>
              </div>
            </div>
          </div>

          {/* Our Migration Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ServiceNow Migration Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">In-depth Analytics and Business Intelligence</h4>
                <p>
                  We use thorough analytics on your current IT system to comprehend the problems facing your company that can be addressed through ServiceNow.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Strategic Planning and Roadmap</h4>
                <p>
                  We provide a rollout roadmap for ServiceNow while minimizing IT disruption based on the analytics and business data.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Risk Analysis</h4>
                <p>
                  We do a thorough risk analysis and pinpoint elements that could potentially affect your business processes during the migration.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Full Migration Support</h4>
                <p>
                  We offer complete migration help, ensuring that your company receives a ServiceNow solution that perfectly meets your unique requirements.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">End-to-End Training</h4>
                <p>
                  We provide training to your senior management, staff, and stakeholders on how to use ServiceNow to its full potential.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom Integration</h4>
                <p>
                  If necessary, we incorporate bespoke apps into your ServiceNow implementation to increase its capabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Are We the Preferred ServiceNow Migration Provider?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>High-Quality Services:</strong> We are an ISO-certified ServiceNow company and leave no stone unturned in our pursuit of perfection.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team has several years of experience in designing, developing, and implementing a wide variety of IT infrastructure and software projects.
              </li>
              <li>
                <strong>Short Turnaround:</strong> We are committed to meeting deadlines and will always provide our services within very quick turnaround times.
              </li>
              <li>
                <strong>Affordable Pricing:</strong> Our ServiceNow integration services are priced extremely cost-effectively, and our pricing is fully transparent.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Upgrade Your Platform?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of ServiceNow migration services to clients across the world. Our team of highly experienced and certified ServiceNow engineers is at hand to tackle any project, irrespective of its complexity.
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

export default ServiceNowMigration;