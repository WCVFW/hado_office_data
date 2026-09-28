import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudSecurityServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Security Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource Cloud application security solutions to us at affordable rates to ensure optimized and safe migration to the cloud platform.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Want your business to move to the cloud but find it hard to navigate through the cloud security risks? Want to migrate business processes to the cloud but are unsure about the risk involved? Have you considered outsourcing cloud security services to an experienced service provider? Partner with the best vendor to save up to 50% on costs.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier solution provider with decades of industry experience. We offer cloud security as a service along with optimization benefits. By leveraging cloud based security services, our clients have achieved cost efficiency, peace of mind, and overall application security. It has enabled our clients to focus on tasks like optimizing the cloud infrastructure.
            </p>
          </div>

          {/* Our Cloud Security Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Cloud Security Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is one of the front runners in providing the best managed cloud security services and can help you move your business to the cloud platform without any hindrance or risks. Our cloud security managed services offer the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Foundation Building:</strong> We ensure a proper foundation that requires the security options and templates to utilize security policies as codes.</li>
              <li><strong>Consulting Services:</strong> Our services include maturity assessment, cloud migration advisory, security assurance, and security design.</li>
              <li><strong>Migration Services:</strong> Our specialists ensure the secure migration of applications and data to the cloud platform with extended security controls.</li>
              <li><strong>Cloud Security Modernization:</strong> We support multi-cloud safety, deployment, next-gen security solutions, workload protections, and operationalization.</li>
              <li><strong>Cloud Security Operations:</strong> We ascertain an instrumented governance across different multi-cloud platforms to provide advanced cloud-based operations.</li>
            </ul>
          </div>

          {/* Why Nimble Acuity? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why is Nimble Acuity the Preferred Cloud Security Service Provider?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a cloud security company that ensures a lot of benefits for our clients. Outsource cloud security services to us and safeguard your cloud resources from unprecedented threats. The reasons to partner with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Prices and Plans:</strong> Our services are cost-effective, with prices starting from just $20/hour.</li>
              <li><strong>Modern Infrastructure:</strong> **Nimble Acuity** has access to all the latest and recent technologies and software to assist our customers.</li>
              <li><strong>Qualified Professionals:</strong> Our experts have first-hand knowledge of the tools and methods required to offer top-notch security services.</li>
              <li><strong>Customized Services:</strong> Our professionals assess your needs and create tailored solutions that fit your goals.</li>
              <li><strong>Short Turnaround:</strong> Our teams work around the clock to provide exceptional outcomes within the quickest timelines.</li>
              <li><strong>24/7 Customer Support:</strong> We are available round-the-clock so that you may contact us whenever you need assistance.</li>
            </ul>
          </div>
          
          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Custom Software Development</li>
              <li>Mobile App Development</li>
              <li>Infrastructure Management Services</li>
              <li>Software Testing Services</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Secure Your Cloud with Nimble Acuity Today
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is an ISO-certified software development service provider to global clients across industries. By outsourcing cloud security as a service to us, you get a business-specific security strategy to maximize protection against DDoS attacks, and we ensure effective threat prevention, detection, and mitigation.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us now for professional solutions at affordable rates.
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

export default CloudSecurityServices;