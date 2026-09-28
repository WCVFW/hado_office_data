import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareProductDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Product Development Services
            </h2>
            <p className="text-lg text-gray-600">
              No matter which industry you belong to—finance, retail, healthcare, software, or hardware—innovative software product development is required to engage with customers, stay abreast of the competition, and achieve business growth.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The business environment is so competitive today that every organization must keep innovating to stay relevant. With the digitization of business becoming the norm, there is a constant pressure to innovate, think out-of-the-box, and stand out from the competition. For an organization to successfully develop innovative and useful products, it needs to first study the market and plan ahead. The action plan must be properly designed to reflect the development and execution phase in an unambiguous manner, along with an accurate estimate of the required delivery time.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For most organizations, it's not feasible to handle this internally; they may have to divert critical resources or simply lack the know-how. By partnering with a reliable software development company like **Nimble Acuity**, you can refocus your attention on core business activities. We have decades of experience in providing superior quality, cost-effective, and technology-driven product development services to organizations worldwide.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Product Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Nimble Acuity, our developers, designers, analysts, and project managers collaborate using the latest tools and technologies to build software products in these key categories:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Products specific to industries</li>
              <li>Products specific to a business process</li>
              <li>Products that offer users access to your services</li>
            </ul>
          </div>

          {/* Enterprise Software Development */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Enterprise and Business Software Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We have expertise in popular software development platforms like .NET, Java, PHP, Python, and Ruby to build custom enterprise and business software for:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Business Process Solutions:</strong> We create tailored solutions for CRM, ERP, HRM, payroll, accounting, and billing.
              </li>
              <li>
                <strong>Industry-Specific Solutions:</strong> We develop solutions like internet/mobile banking, patient portals, insurance underwriting, POS management, inventory management, and online trading platforms.
              </li>
              <li>
                <strong>Consumer Apps:</strong> We build mobile, IoT, and web applications that provide a seamless experience to customers across channels, making tasks like purchasing and feedback easy and intuitive.
              </li>
            </ul>
          </div>

          {/* Systems, Embedded, and Control Software */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Specialized Software Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our developers build steady, high-performing, and robust systems software, embedded software, and control systems.
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Systems Software:</strong> Using languages like C, C++, and Python, we develop solutions for security, file management, and systems management.
              </li>
              <li>
                <strong>Embedded Software:</strong> We create robust and fault-resistant embedded software for industrial and home automation, medical devices, and test and measurement systems.
              </li>
              <li>
                <strong>Control Systems Software:</strong> Our programmers develop, program, and deploy software for automation and control projects, including HMI & GUI development, PLC programming, and 3rd party software integrations.
              </li>
            </ul>
          </div>

          {/* Media & Integration */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Media Software and Cross-Enterprise Integration
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Media Software:</strong> We create rich, robust, and high-performing software for processing images, audio, and video, ideal for multi-media systems and gaming engines.
              </li>
              <li>
                <strong>Cross-Enterprise Integration:</strong> We ensure seamless and secure data transfer between different departments by integrating solutions with your existing enterprise systems, guaranteeing no interruption or downtime.
              </li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Product Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Strategy & Discovery:</strong> We begin by collaborating with you to understand your vision, requirements, and market needs.
              </li>
              <li>
                <strong>Definition & Prototyping:</strong> We define the product's scope and features, then create prototypes to visualize the solution.
              </li>
              <li>
                <strong>Design & Engineering:</strong> Our team designs and engineers the product, ensuring a user-centric approach and robust architecture.
              </li>
              <li>
                <strong>Implementation & Execution:</strong> We move into the development phase, building the product with a focus on quality and efficiency.
              </li>
              <li>
                <strong>Quality Assurance:</strong> We conduct thorough testing to ensure the product is bug-free and meets all business requirements.
              </li>
              <li>
                <strong>Go-Live & Support:</strong> After deployment, we provide ongoing support and maintenance to ensure your product performs optimally.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Launch Your Next Product?
            </h3>
            <p className="text-gray-700 mb-6">
              Partner with **Nimble Acuity** to transform your product ideas into reality. Our team is committed to delivering innovative, functional, and effective software products that drive business growth. We combine modern technologies with an agile approach to ensure high-quality results.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We can meet any unique product development requirement you may have, whether it's a vertical, horizontal, or system-type product. Let’s work together to create a product that stands out in the market. Contact us today to get started.
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

export default SoftwareProductDevelopment;