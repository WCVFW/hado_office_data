import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SoftwareMaintenanceServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Maintenance Services
            </h2>
            <p className="text-lg text-gray-600">
              Discard bug issues, compatibility misalignments, and scaling impediments by trusting our expert services to maximize the functionality and lifespan of your software.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Managing your software doesn't end post-deployment—it's an ongoing journey. A well-maintained software boosts operational efficiency, improves user experience, and aids scalability. That's where our specialized software maintenance services come into play.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our services cover all essential areas of software maintenance, including **corrective**, **adaptive**, **perfective**, and **preventive** measures. Our experienced software engineers use state-of-the-art tools and methodologies to ensure your software is free from bugs, glitches, and vulnerabilities, while our 24/7 support team is dedicated to addressing your concerns.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Software Maintenance and Support Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Corrective Maintenance</h4>
                <p className="text-gray-700">Experience swift issue resolution designed to minimize downtime. Our expert team promptly rectifies software faults, ensuring a seamless user experience. Services include debugging, error correction, and software patching.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Adaptive Maintenance</h4>
                <p className="text-gray-700">We modify software to accommodate evolving requirements, ensuring your systems remain flexible and aligned with your dynamic business goals. This includes software integration, data format conversion, and security updates.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Perfective Maintenance</h4>
                <p className="text-gray-700">Enhance functionality and improve user satisfaction with our proactive approach. We refine your software to address inefficiencies and optimize performance through ongoing enhancements and new feature additions.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Preventive Maintenance</h4>
                <p className="text-gray-700">We safeguard your software against potential issues, minimizing the risk of disruptions. Our team employs continuous monitoring, timely updates, and robust measures like backups and database maintenance.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Emergency Maintenance</h4>
                <p className="text-gray-700">Our 24/7 support is geared towards rapidly addressing critical software issues. You can trust our expert team to minimize the impact on your business, ensuring uninterrupted operations.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Routine Maintenance</h4>
                <p className="text-gray-700">We prioritize the reliability and efficiency of your software by implementing regular updates, conducting thorough security checks, and optimizing performance to keep your systems in peak condition.</p>
              </div>
            </div>
          </div>
          
          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Software Maintenance Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Requirement Collection:</strong> We begin by understanding your specific software needs and goals.</li>
              <li><strong>Program Analysis:</strong> Our experts comprehensively analyze your software's architecture and codebase.</li>
              <li><strong>Maintenance Proposal:</strong> We present a customized proposal outlining actions, scope, timelines, and costs.</li>
              <li><strong>Stability Evaluation:</strong> We assess your software's underlying infrastructure to guarantee ongoing stability and scalability.</li>
              <li><strong>Software Testing:</strong> Rigorous testing is conducted to detect and resolve bugs, glitches, and security vulnerabilities.</li>
              <li><strong>Release and Reporting:</strong> We release the optimized software and provide detailed reports on all work done.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexibility:</strong> Our solutions are adaptable and can be tailored to meet your evolving requirements.</li>
              <li><strong>Timely Service:</strong> We pride ourselves on being responsive, addressing your queries and resolving issues swiftly.</li>
              <li><strong>End-to-End Support:</strong> We offer comprehensive, all-inclusive support, covering every facet of software maintenance.</li>
              <li><strong>Customized Options:</strong> Our solutions are highly customizable to fit the needs of businesses of all sizes, from startups to enterprises.</li>
              <li><strong>Quality Assurance:</strong> We implement rigorous QA processes to ensure your software operates at its best.</li>
              <li><strong>Cutting-edge Tools:</strong> We leverage the latest tools and technologies to proactively address issues and streamline processes.</li>
              <li><strong>Expertise:</strong> Our seasoned team has extensive experience and a deep understanding of industry best practices.</li>
              <li><strong>Cost-Effective Pricing:</strong> Our solutions deliver exceptional value without compromising on quality, allowing you to allocate resources wisely.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Software Performance?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, we specialize in providing top-tier software maintenance services that propel your business forward. By choosing us, you gain access to a dedicated team solely focused on ensuring the seamless performance, security, and longevity of your software assets.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We're ready to deliver beyond your expectations. Partner with us to leverage our technical expertise and let us contribute to the longevity and robustness of your software.
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

export default SoftwareMaintenanceServices;