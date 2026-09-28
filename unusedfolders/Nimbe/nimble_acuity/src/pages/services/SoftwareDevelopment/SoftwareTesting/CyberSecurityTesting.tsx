import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const CyberSecurityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cyber Security Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get an in-depth security assessment of your application's vulnerabilities.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to get your software application tested for security issues and vulnerabilities? Are you looking for the right resources to handle your cyber security testing requirements? Then, the best option for you is to outsource cyber security testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier cybersecurity testing service provider, your one-stop-shop for all your needs. We have some of the most qualified and experienced cyber security testing experts on board who can take care of all your requirements. We leverage the power of the best cyber security testing tools and deliver top-notch services.
            </p>
          </div>

          {/* Cyber Security Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cyber Security Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** has been a pioneer in providing quality cyber security testing services to clients around the globe. Our experience enables us to deliver customized services that suit your business requirements. Some of the major services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Vulnerability Assessment Services</h4>
                <p>We provide accurate vulnerability assessments to help clients identify weaknesses across their infrastructure, including: Network Infrastructure, Mobile Apps, Web Applications, Phishing Defenses, Network Devices, and System Builds.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Cyber Security Penetration Testing</h4>
                <p>We emulate threats to evaluate your cybersecurity system. Our services help you evaluate various attack vectors, including: Network Infrastructure, Mobile Applications, Employee Cyber Security Awareness, Web Applications, and Wireless Connectivity.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Build Reviews</h4>
                <p>Our highly experienced and skilled cybersecurity experts conduct these audits to easily identify weaknesses within your digital environment. We can help you cover components of your cybersecurity strategy like Servers, Firewalls, Workstations, Database Servers, Switches, Routers, and Active Directory.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits of Cyber Security Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Cyber Security Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are several benefits of cyber security testing for both the software development team and the end-user. Some of the major advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It provides key insight into curing risk in a structured and optimal manner.</li>
              <li>It helps in business continuity as the system will be less prone to security attacks.</li>
              <li>It helps to protect your assets along with those of your clients and partners.</li>
              <li>It helps to evaluate security investment.</li>
              <li>It helps in protecting the company's reputation.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing cyber security testing services to us gives you access to a series of benefits. Some of the major reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Our services are highly cost-effective, with pricing options that suit your business requirements and budget.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO certified organization, ensuring all services delivered are of the best quality and go through a strict quality assurance process.</li>
              <li><strong>Experienced Cyber Security Testers:</strong> We have some of the most qualified, skilled, and talented experts on board who use the latest tools and technologies to deliver top-quality services.</li>
              <li><strong>Data Protection:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, you can rest assured that your data is kept safe and not divulged to any third party.</li>
              <li><strong>Easily Scalable Services:</strong> We have the required bandwidth and skills to scale up service requirements and ramp up resources as and when you need them.</li>
              <li><strong>24/7 Customer Support:</strong> Our teams, including marketing, project management, and sales, are always available to answer your queries via phone or email.</li>
              <li><strong>Dedicated Manager:</strong> We will assign you a dedicated project manager who will be the single point of contact for all your needs and issues.</li>
              <li><strong>Quick Turnaround Time:</strong> Our team operates through several delivery locations across the globe, allowing us to deliver top-quality services within a quick turnaround time.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> We have access to the best cyber security testing software and tools, and international-standard office spaces.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Secure Your Software?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality cyber security testing and a plethora of other software testing services to clients globally. We have some of the most qualified and experienced specialists on board who can cater to all your needs, using the latest tools and technologies to deliver top-notch services.
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

export default CyberSecurityTesting;