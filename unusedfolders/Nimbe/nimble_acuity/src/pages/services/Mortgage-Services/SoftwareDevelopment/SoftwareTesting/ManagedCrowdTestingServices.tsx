import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ManagedCrowdTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Managed Crowd Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Make your software testing quicker, more efficient, and more accurate with our managed crowd testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managed crowd testing is a type of software testing where the testing tasks are assigned to different software testers through an online platform. It is a rapidly growing trend in the field of software testing which makes use of the inherent efficiency of crowdsourcing and the cloud platform to provide developers with many benefits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The crowd testers at **Nimble Acuity** have delivered projects to leading companies across the globe. Our team of expert software testers works with you to thoroughly understand your requirements, designs a test plan, and then guides the crowd testers to test your software application in a manner that suits your detailed requirements.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Managed Crowdsourced Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Managed crowd testing is very efficient and improves the coverage with respect to device localization, fragmentation, and UX. It also helps the testing activity to remain ahead of schedule. By integrating managed crowd testing into our test processes, we have developed cost-effective methods to provide top-quality software testing. Some of the key services we offer include:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Service Items */}
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Functional Testing</li>
                <li>Compatibility Testing</li>
                <li>Ad-Hoc Testing</li>
                <li>Usability Testing</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>User Acceptance Testing</li>
                <li>Automation Testing</li>
                <li>Localized Testing</li>
                <li>Performance Testing</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Regression Testing</li>
                <li>Load Testing</li>
                <li>Beta Testing</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Crowdsourced Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Crowdsourced testing services are one of the fastest-emerging trends in software testing. The major factor driving this massive growth is the number of benefits it offers. Outsource crowdsourced testing services and leverage the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Access to Expert Resources</li>
              <li>Cost Reduction</li>
              <li>Unbiased Approach</li>
              <li>Localized Testing</li>
              <li>Lesser Time to Market</li>
              <li>Instantaneous Results</li>
              <li>Flexible Engagement</li>
              <li>Multi-platform Testing</li>
              <li>Diversity in Testers</li>
              <li>Improved Testing Platforms</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Managed Crowd Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is one of the leading crowdsourced testing service providers and serves a global clientele. Outsourcing managed crowd testing services to us makes sense for a host of reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li><strong>Cost-Effective Prices:</strong> We provide high-quality managed crowd testing services at cost-effective prices.</li>
              <li><strong>Expert Team:</strong> We operate with a large managed crowd testing team consisting of talent from across the globe.</li>
              <li><strong>Strict Quality Control:</strong> We follow a stringent two-level validation process where defects are logged and reports are generated for our client's perusal.</li>
              <li><strong>Choice of Testers:</strong> Clients are given the liberty to pick their own crowd of beta testers based on age, domain, region, gender, etc.</li>
              <li><strong>Data Security:</strong> Our services are completely secure and confidential as each individual beta tester signs an NDA before testing.</li>
              <li><strong>Latest Infrastructure:</strong> We have access to dedicated testing labs equipped with the latest devices, browsers, and operating systems.</li>
              <li><strong>Turnaround Time:</strong> You will always receive your managed crowd testing services on time, every time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Hire the Best Crowdsourced Testers in the Industry
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity**'s managed crowd testing service is one of the most popular among the host of other software testing services we provide. With 26+ years of experience in this domain, we have the expertise to understand different kinds of business models and their requirements to enable us to provide our services accordingly. We offer crowd testing and execute short-duration projects which primarily target the application beta releases.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To outsource crowd testing services to us, feel free to write to us or talk to one of our representatives and we will guide you through the entire testing process.
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

export default ManagedCrowdTestingServices;