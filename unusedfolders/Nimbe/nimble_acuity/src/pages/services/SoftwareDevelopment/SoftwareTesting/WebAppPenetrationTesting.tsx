import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebAppPenetrationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Web Application Penetration Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Maintain and improve the security of your web and mobile apps as well as APIs, at prices starting at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you heavily rely on web apps, mobile apps, and APIs to conduct daily business operations? It is imperative to arm your enterprise against cyber-attack at all costs. You need robust and comprehensive penetration testing to ensure that all your web and mobile apps and APIs are secure and hack-proof.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading web application penetration testing service provider. We have over two decades of experience in performing a wide range of software testing to address the diverse requirements of a global clientele. At Nimble Acuity, we offer web app penetration testing solutions via experienced ethical hackers who mimic cyber attackers to expose glitches in your existing security system.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Web Application Penetration Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our range of web application penetration testing services includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Web App Penetration Testing</h4>
                <p>
                  We employ both automated and manual testing techniques to expose the vulnerabilities in your web or mobile applications. Our expert software testers will perform a deep dive into the security posture of your web apps and ensure that you gain the insights needed to make your applications hack-proof.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Web App Penetration Testing as a Service</h4>
                <p>
                  Once you provide us with details of your applications, our security experts will dive right into ethically hacking your applications. Every threat, vulnerability, or flaw will be exposed so you can make your applications bullet-proof.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Penetration Testing Reporting</h4>
                <p>
                  Our security experts provide you with a detailed report on all threats, flaws, and vulnerabilities, and measures that can be taken to improve your security posture.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Network Penetration Testing</h4>
                <p>
                  We provide penetration testing that covers your entire IT environment. So whether it is a mobile app, a web app, or your external or internal IT network, we will perform stringent ethical hacking to expose any flaws, threats, or vulnerabilities.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** is a leading web application penetration testing service provider. The benefits of outsourcing web application testing services to us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Experienced Team:</strong> We have highly motivated, qualified, and skilled IT and security experts who provide cutting-edge web application testing services.</li>
              <li><strong>Affordable Services:</strong> Our hourly rates are some of the lowest in the industry. We also offer flexible pricing options.</li>
              <li><strong>Fast Turnaround:</strong> We provide our penetration testing services quickly, giving you access to expertise and insights at the fastest timelines in the industry.</li>
              <li><strong>Multi-domain Experience:</strong> Our team is highly capable and experienced in performing a comprehensive range of software testing across multiple domains.</li>
              <li><strong>Security:</strong> We are an ISO-certified firm and take data privacy extremely seriously. We sign NDA agreements for a legal obligation to handle your data responsibly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Web Apps?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has catered to the requirements of a diverse clientele from across the world. Our security experts work meticulously to expose any flaw, threat, or vulnerability in your web application, mobile application, or network. We provide world-class services at the most competitive prices in the industry.
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

export default WebAppPenetrationTesting;