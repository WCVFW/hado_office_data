import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AlibabaCloudServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Alibaba Cloud Computing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to high-technology support and infrastructure to implement Alibaba cloud computing for your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Alibaba Cloud Computing, a subsidiary of Alibaba Group, is a cloud solution similar to AWS with a strong focus on delivering high-quality, low-cost cloud computing services. Notable for its increasing global availability, the cloud is also known for accelerating innovation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity**'s Alibaba cloud computing solutions offer a wide range of cloud computing and related services such as cloud storage, data center management, advanced cloud computing for business and enterprise customers, and the ability to manage data customizations. Alibaba Cloud offers a wide range of services in areas such as data protection, analytics, security, cloud management, and business intelligence.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Alibaba Cloud Computing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide companies worldwide with a comprehensive range of cloud computing services. Our Alibaba Cloud Computing Solutions include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>IaaS (Infrastructure as a Service):</strong> Our IaaS services provide high-level APIs to access fundamental network infrastructure and manage resources, scaling, security, and more.</li>
              <li><strong>PaaS (Platform as a Service):</strong> Our PaaS services provide a platform for customers to develop, manage, and run applications without building any associated infrastructure.</li>
              <li><strong>SaaS (Software as a Service):</strong> We provide licensed software on a subscription basis for our customers.</li>
              <li><strong>Elastic Computing:</strong> We offer a suite of services for speed, performance, and stability in demanding environments, including Elastic Compute Service, auto-scaling, and container services.</li>
              <li><strong>Storage & CDN:</strong> Our storage solutions are scalable, reliable, and cost-effective, while our CDN provides content delivery with low latency.</li>
              <li><strong>Networking:</strong> This includes Virtual Private Cloud, Express Connect, and VPN Gateway.</li>
              <li><strong>Monitoring:</strong> We offer services like Cloud Monitor and Resource Access Management.</li>
              <li><strong>Database:</strong> Our database solutions include ApsaraDB for various data types and Data Transmission Service.</li>
              <li><strong>Big Data Analytics:</strong> This includes E-MapReduce, data visualization, and AI-based image search.</li>
              <li><strong>Security:</strong> We offer a range of Alibaba cloud-based security services to combat viruses and malware, including Anti-DDoS and Web Application Firewall.</li>
              <li><strong>Media Services:</strong> Includes ApsaraVideo Live and ApsaraVideo for Media Processing.</li>
              <li><strong>Domains & Website:</strong> We provide secure web hosting, domain registry, and DNS management.</li>
              <li><strong>Application Services:</strong> This includes message queuing, API hosting, and DirectMail.</li>
              <li><strong>eCommerce:</strong> Our solutions allow customers to manage, build, and develop cost-effective and secure e-commerce platforms.</li>
              <li><strong>Internet of Things:</strong> We offer IoT management platforms and service platforms to extend computing from the cloud.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Alibaba Cloud Computing to Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a leading Alibaba cloud computing services company, **Nimble Acuity** delivers impartial support for the best-fitting cloud solutions. Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our services are affordable and can be customized with a pay-as-you-go model.</li>
              <li><strong>Experienced Team:</strong> Our team of experienced Alibaba Cloud Computing engineers can help you build and mold your cloud applications without compromising standards.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 certified organization that protects your data from threats and vulnerabilities.</li>
              <li><strong>ISO Certified Service Provider:</strong> Our ISO 9001 certification is proof of our commitment to providing consistent, reliable, and secure services.</li>
              <li><strong>High Scalability:</strong> Our services have the structure to service and deliver at massive scales, accommodating growing businesses and usage spikes.</li>
              <li><strong>24/7 Customer Support:</strong> We provide round-the-clock technical support to ensure your business runs smoothly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Maximize Your Business with Alibaba Cloud?
            </h3>
            <p className="text-gray-700 mb-6">
              Over the past 15 years, **Nimble Acuity** has emerged as a recognized cloud services provider. We aim to help our clients maximize their business and attain their goals. With our team of experts and quality-driven infrastructure management services, we understand your business needs and aim to serve you by providing custom-made solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              As a recognized Alibaba cloud computing service provider, we offer a range of affordable and reliable services with complete technical support. Outsource to us and explore the maximum possibilities that can help your business grow.
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

export default AlibabaCloudServices;