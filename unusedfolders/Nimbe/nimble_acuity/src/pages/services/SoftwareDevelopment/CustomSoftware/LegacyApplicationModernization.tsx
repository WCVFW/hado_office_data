import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const LegacyApplicationModernization: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Legacy Application Modernization Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your old business apps to run with a touch of innovation and modern capabilities by outsourcing legacy application modernization.
            </p>
            <p className="text-lg text-gray-600 mt-2 font-medium">
              Rates as low as $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Change is a difficult decision, especially for legacy applications that have run successfully for years. However, a failure to innovate and align with modern values can throw business performance out of whack. To get a head start, outsource legacy application modernization services to **Nimble Acuity**. Our developers can incorporate modern values like AI, ML, Big Data, and cloud into your legacy applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a top legacy application modernization service provider driven by innovation. We constantly tap into new trends and technologies to make innovation a part of our clients' business lifecycle. This has not only earned us a reputation as a premier provider but also the attention of those who need expert solutions for their legacy applications.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Legacy Application Modernization Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Nimble Acuity, we model our services to address the deficiencies in your legacy apps. Our cutting-edge innovation and use of the latest methodologies improve reliability, security, UX, and more. Our solutions include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Mining Business Cases:</strong> Our team will decode the business requirements from your legacy application to streamline analysis and forward engineering. We'll extract crucial business intelligence from legacy codes without contamination.
              </li>
              <li>
                <strong>Application Migration:</strong> We'll help your apps migrate to newer platforms without causing service disruptions, improving their ability to scale and stay relevant.
              </li>
              <li>
                <strong>Application Evaluation:</strong> We deconstruct legacy applications to understand their code anatomy and design approach. The insights derived help us develop custom business cases relevant to the current market.
              </li>
              <li>
                <strong>Re-platforming Solutions:</strong> As older platforms become inefficient, we check the compatibility of your legacy applications with newer, more robust technology platforms. Our team coordinates re-platforming cost-effectively and without impacting performance.
              </li>
              <li>
                <strong>Incorporation of Scalability:</strong> We design and incorporate scalable functionality into your legacy applications, making them easier to maintain and evolve on demand.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Legacy Application Modernization Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We follow a highly streamlined process to ensure all deliverables are achieved within stipulated time frames.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Strategy and Proposal:</strong> We talk to you to capture your needs and business challenges.
              </li>
              <li>
                <strong>Designing:</strong> We conceptualize a cost-effective modernization strategy.
              </li>
              <li>
                <strong>Client Approval:</strong> The concept is shared with you for feedback and approval.
              </li>
              <li>
                <strong>Development and Integration:</strong> Our teams decode the legacy apps and develop modern features or scale them to modern platforms.
              </li>
              <li>
                <strong>Quality Check:</strong> Our QA team assesses the code modules against business cases.
              </li>
              <li>
                <strong>Go-live:</strong> After clearing QA tests, the project is delivered, and we provide support to bring the apps into operational condition.
              </li>
              <li>
                <strong>Support and Maintenance:</strong> After deployment, we continue supervision to ensure a smooth and glitch-free experience.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes Nimble Acuity a top legacy application modernization service provider? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Cost-effective Pricing:</strong> Our customized solutions are priced to be accessible for businesses of all sizes.
              </li>
              <li>
                <strong>High-quality & Seamless Integration:</strong> We double-verify the quality of our implementation to ensure the modernization process is a success and all integrations are seamless.
              </li>
              <li>
                <strong>Rapid Turnaround Time (TAT):</strong> Our services are implemented with speed to ensure your schedules aren't disrupted.
              </li>
              <li>
                <strong>Scalable Solutions:</strong> We'll help your apps scale with precision.
              </li>
              <li>
                <strong>ISO Certified:</strong> We are an ISO 9001:2015 certified service provider, assuring quality, timeliness, and security.
              </li>
              <li>
                <strong>100% Data Security:</strong> Your business data is in safe hands with our secure infrastructure.
              </li>
              <li>
                <strong>Round-the-clock Support:</strong> We provide support via phone, email, and webchat to clients from around the globe.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Modernize Your Applications?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, our development teams, infrastructure, and advanced application-building technologies align to offer world-class legacy application modernization services. From simple modifications to complex revamps, we take on complete modernization roles.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With over 26 years of experience in software technologies, we are a leading provider in the industry. Get in touch with us now to learn more and receive a free quote.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegacyApplicationModernization;