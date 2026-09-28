import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; 

const CustomSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Custom Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get superior software with advanced functionality to power your business processes. Nimble Acuity offers robust and scalable custom software solutions tailored to your unique needs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we believe that business challenges are unique and require equally unique solutions. With extensive experience in custom software design and development, our team creates bespoke software to meet your specific user requirements. Whether you need a system to handle heavy web traffic, ensure 100% cybersecurity, or streamline a complex workflow, our solutions will unearth automation possibilities and optimize your business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our enterprise solutions provide centralized data storage and efficient management for cross-departmental collaboration. We begin every project with a thorough feasibility analysis to lay out the pros and cons, ensuring a clear path forward. Partner with us to leverage personalized software solutions for your organization.
            </p>
          </div>

          {/* Our Custom Software Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Custom Software Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom Designed Websites</h4>
                <p>We build tailored websites that go beyond simple templates, focusing on graphic design, creative conceptualization, and technical production to promote your business effectively.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Software Migration & Modernization</h4>
                <p>Ensure your business stays efficient with our migration services, including data migration, legacy system migration, cloud migration, and comprehensive planning and assessment.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom App Development</h4>
                <p>Our custom app development services provide a simple, accessible way to manage your online inventory and accounts from anywhere in the world with a web browser.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Content Management Systems (CMS)</h4>
                <p>Leveraging our extensive experience, we develop high-performance, easy-to-use, web-based CMS solutions that are tailor-made to your needs and won't slow down your site.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Software Integrations</h4>
                <p>We provide third-party software integration services, including planning, assessment, and implementation, to ensure your business remains up and running seamlessly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Implementation and Deployment</h4>
                <p>Struggling with deploying your customized applications? We devise comprehensive strategies to ensure seamless implementation and deployment tailored to your enterprise.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>100% Data Security:</strong> We guarantee security and confidentiality with ISO/IEC 27001:2022 certified processes.</li>
              <li><strong>Certified Professionals:</strong> Our team consists of highly skilled and certified developers with in-depth industry expertise.</li>
              <li><strong>Quick Turnaround Time (TAT):</strong> Our global delivery centers ensure we provide our services with the quickest possible turnaround times.</li>
              <li><strong>Scalable Solutions:</strong> Our services are highly scalable to adapt to your changing business needs and requirements.</li>
              <li><strong>Affordable & High-Quality Services:</strong> We deliver world-class, customized solutions that fit your budget without compromising on quality.</li>
              <li><strong>Round-the-clock Support:</strong> Our 24/7 support staff is available via phone, email, and web chat to help you overcome any challenge.</li>
            </ul>
          </div>

          {/* Our Software Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Software Development Process
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 text-center text-gray-700">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">01</span>
                <p className="mt-2">Information Gathering</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">02</span>
                <p className="mt-2">Requirement Analysis</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">03</span>
                <p className="mt-2">Architecture Design</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">04</span>
                <p className="mt-2">Development</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">05</span>
                <p className="mt-2">Integration</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">06</span>
                <p className="mt-2">Testing</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">07</span>
                <p className="mt-2">Deployment</p>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#006A7C]">08</span>
                <p className="mt-2">Maintenance</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Power Your Business with Custom Software?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has a track record of delivering superior custom software solutions that enhance productivity, increase profitability, and support long-term growth. Let us help you transform your business with a tailored strategy designed to meet your specific goals.
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

export default CustomSoftwareDevelopment;