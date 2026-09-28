import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const FirewallPenetrationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Firewall Penetration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Assess your firm's cyber vulnerabilities and secure your data from external threats.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your firm looking to assess different cyber vulnerabilities and secure data from external threats? Are you on the lookout for skilled and experienced penetration testing specialists who can improve your business's overall security posture? Then, the best option for you would be to outsource firewall penetration testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such firewall penetration testing service providing company that ensures your network's first line of defense is robust. We have some of the most talented and skilled firewall penetration testing specialists who use only the most up-to-date tools and software to provide top-notch services with a quick turnaround time.
            </p>
          </div>

          {/* Firewall Penetration Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Firewall Penetration Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a leading service provider of functional and infrastructure testing to businesses globally. Our experience means that we can provide tailored, secure solutions that offer the best protection for your business. Some of the key firewall penetration testing services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Network Penetration Testing</h4>
                <p>We protect your organization's critical information assets and systems through technological, physical, and procedural means, ensuring your operations run smoothly and efficiently without any interruptions.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Cloud Security Testing</h4>
                <p>We help our customers develop a cloud security strategy using a consultative approach and the most efficient tools and services to solve their security challenges.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Infrastructure Penetration Testing</h4>
                <p>We offer a comprehensive security audit to ensure your business is running securely. We examine your hardware, software, and systems to ensure the robustness and confidentiality of the information you store.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Application Security Testing</h4>
                <p>We make your web and mobile applications less susceptible to security flaws by removing common vulnerabilities such as broken authentication and session management protocols.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">IoT Security Testing</h4>
                <p>With our QA testing, we ensure that IoT devices are protected from being hacked, misused, or from leaking sensitive information.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing firewall penetration testing services to us allows you to take a multidisciplinary approach to security. Here are some of the major reasons to choose us as your service provider:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Information Security:</strong> Our ISO/IEC 27001:2022 ISMS certified services are secure enough to provide comprehensive data protection.</li>
              <li><strong>Flexible Pricing Packages:</strong> We offer highly affordable and cost-effective services with flexible pricing to accommodate your budget.</li>
              <li><strong>Error-free Services:</strong> As an ISO-certified firm, we ensure all our products and services are of the highest quality and undergo a multi-level quality check.</li>
              <li><strong>Skilled Testers:</strong> Our team comprises some of the most qualified and experienced specialists who can work with cutting-edge technology to deliver comprehensive firewall testing systems.</li>
              <li><strong>Easily Scalable Services:</strong> We have the bandwidth and know-how to scale up our services and resources to meet the demands of your project.</li>
              <li><strong>Dedicated Manager:</strong> We will assign a dedicated project manager who will be your single point of contact for all your needs and issues.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> We have access to the latest workspaces and tools to carry out our job and deliver world-class services.</li>
              <li><strong>Round-the-clock Support:</strong> We ensure all our teams—including sales, customer support, and project management—are available 24/7 to resolve any issues.</li>
              <li><strong>Short Turnaround Time:</strong> Our penetration testing team operates across different time zones, enabling us to deliver quality services quickly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Firm's Network?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality firewall penetration testing and a range of other software testing services to clients globally. We leverage the latest and best testing tools and software, and our skilled experts possess extensive knowledge in this area to deliver quality services effortlessly.
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

export default FirewallPenetrationTesting;