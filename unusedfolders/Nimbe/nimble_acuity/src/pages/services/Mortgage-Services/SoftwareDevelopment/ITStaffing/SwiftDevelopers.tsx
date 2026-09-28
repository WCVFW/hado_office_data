import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SwiftDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Swift Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire pre-vetted, dedicated Swift developers who work on flexible engagement models to build powerful applications for Apple devices.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Swift is a robust object-oriented programming language used exclusively for developing apps for iPhones, iPads, Macs, WatchOS, and tvOS. Leveraging the speed and power of Swift is crucial for building modern iOS apps. As the iOS market is vast and promising, tapping into it requires a reliable partner. Professional IT staffing service providers like **Nimble Acuity** help you find the right fit for your Swift projects without the grind.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are an experienced firm providing global clients instant access to Swift developers who work remotely from global workspaces. Our developers use a tech stack of advanced tools and software to build high-performing apps. We thrive with complex hiring needs and help you lockstep in the digital landscape with a process that goes beyond traditional resumes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Swift Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you need resources to begin projects from scratch or to support ongoing projects, we have you covered. We help clients with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Swift App Designing:</strong> Build apps with exceptional UI/UX to deliver an engaging user experience.
              </li>
              <li>
                <strong>Custom iOS Swift Development:</strong> Craft feature-rich, flexible, and scalable apps tailored to your business needs.
              </li>
              <li>
                <strong>Swift Apps Testing:</strong> Perform comprehensive tests on Swift apps to ensure performance and functional design.
              </li>
              <li>
                <strong>Swift Support and Maintenance:</strong> Get regular support and maintenance services to ensure your app's availability and reliability.
              </li>
              <li>
                <strong>AR/VR Swift App Development:</strong> Create immersive AR/VR apps that enhance user experience in various industries.
              </li>
              <li>
                <strong>Swift Apps Porting:</strong> Quickly and seamlessly port your existing iOS apps from other languages to Swift.
              </li>
              <li>
                <strong>Industry-specific App Development:</strong> Leverage our deep knowledge of various industries to create tailored solutions.
              </li>
              <li>
                <strong>Blockchain Apps Development:</strong> Create powerful and secure blockchain apps for your business using Swift.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For over 26 years, we've helped global organizations hire top IT talent. Here are some of the reasons that set us apart:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Quality Hiring Process:</strong> We evaluate code quality, delivery timelines, and communication from previous engagements.
              </li>
              <li>
                <strong>Project Confidentiality and Security:</strong> We sign NDAs and MoUs to ensure all your project data remains safe and secure as an ISO-certified company.
              </li>
              <li>
                <strong>Swift Hiring and Project Delivery:</strong> Our multi-step approach accelerates the hiring process and helps you hire senior developers who work according to your time zones and deadlines.
              </li>
              <li>
                <strong>Post-implementation Support:</strong> We offer post-implementation support, including bug fixes, continuous monitoring, and framework upgrades.
              </li>
              <li>
                <strong>Flexible Hiring Model:</strong> We provide multiple engagement options, so you can hire a single developer or a full team based on your project requirements.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Swift Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              Our Swift developers have deep expertise in building apps for the iOS ecosystem. We analyze your requirements and help you employ the right fit, ensuring you get the necessary support to build evolving Swift apps without the burden of operational overhead. Get highly skilled Swift developers, programmers, and engineers with our hiring solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We leverage modern development approaches like Agile and DevOps to ensure a smooth and efficient development process.
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

export default SwiftDevelopers;