import React from "react";
import { FaFileAlt, FaCogs, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import CSmainmenu from "../CSmainmenu";

const TechnicalWritingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Nimble Technical Writing Services</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Expert technical documentation services by Nimble Auity. Delivering clear, accurate, and professional technical content for software, hardware, and IT services.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>

      {/* Services Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Writing Services We Offer</h2>
        <p className="text-gray-700 text-lg mb-6">
          Nimble provides comprehensive technical writing services to meet diverse documentation needs. Some of the services include:
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>User manuals, provisioning guides, installation manuals</li>
          <li>Training guides, reference guides, release notes</li>
          <li>Configuration, system technician, and hardware documentation</li>
          <li>Policies & procedures, e-Learning modules, alarm guides</li>
          <li>Translation guides, maintenance manuals, quick reference guides</li>
          <li>API guides, online help, desktop publishing, CBT modules</li>
        </ul>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Writing Process</h2>
        <ol className="list-decimal list-inside text-gray-700 max-w-4xl mx-auto text-lg space-y-4">
          <li>Create content based on your style guides and templates</li>
          <li>Send content to your technical publication team for review</li>
          <li>Incorporate changes as requested and send final content</li>
          <li>Deliver polished and ready-to-use technical documentation</li>
        </ol>
      </div>

      {/* Areas Covered */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Areas Covered by Our Technical Writing Services</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg">
          <li>Interactive Manuals</li>
          <li>Product/Application Demos</li>
          <li>Technical Illustrations</li>
          <li>Training Modules</li>
          <li>Editorial, English Editing, and Proofreading</li>
          <li>Business, Academic, Personal Documentation</li>
          <li>Technical Documentation, Tech Writing, Editing & Publishing</li>
          <li>Content Migration, XML, Object Oriented Writing, Chunking</li>
          <li>Information Maps, Vasont, Documentum, SharePoint Portal</li>
        </ul>
      </div>

      {/* Industries Served */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700 text-lg">
          <li>Computers & Peripherals</li>
          <li>Security & Network Products</li>
          <li>Telecom & Embedded Products (DSP)</li>
          <li>Supply Chain Management</li>
          <li>Software Development / IT Services</li>
          <li>Engineering & Telecom Services</li>
          <li>Banking, Finance & Accounting</li>
          <li>e-Learning, Healthcare, Medical Devices</li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Technical Writing Team</h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Nimble Auity’s technical writers are experienced in authoring, editing, and producing high-quality technical documents for end-users, software developers, and project managers. We deliver fast, accurate, and high-quality content using industry-leading tools like FrameMaker, RoboHelp, MadCap Flare, Dreamweaver, ViewletBuilder, LaTeX, and more.
        </p>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Partner with Nimble for Technical Writing Excellence</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Access cost-effective, reliable, and high-quality technical writing services that meet your deadlines and exceed expectations.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default TechnicalWritingServices;
