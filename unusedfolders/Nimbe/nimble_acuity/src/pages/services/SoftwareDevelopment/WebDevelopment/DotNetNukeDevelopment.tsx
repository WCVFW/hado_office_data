import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DotNetNukeDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              DotNetNuke Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build powerful, scalable, and interactive web applications with DotNetNuke. Our expert team at **Nimble Acuity** leverages this versatile framework to create customized solutions that drive results.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              DotNetNuke (DNN) is an open-source web application framework ideal for developing interactive enterprise web applications, intranets, and extranets. Based on the Microsoft ASP.NET platform, DNN is widely used for its powerful, easy-to-manage, and customizable features. When used correctly, DotNetNuke can save a tremendous amount of website management time, cost, and resources.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Building robust DotNetNuke-based applications requires expertise in ASP.NET, VB.NET, SQL Server, and Visual Studio. **Nimble Acuity** has a team of experts with extensive experience in these technologies to deliver a full range of DNN development solutions. We help you unlock the full potential of this powerful platform.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our DotNetNuke Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team has deep expertise in building websites, portals, forums, intranets, and blogs using DotNetNuke. We also specialize in developing custom modules and skins for B2B, B2C, and B2E needs. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>DNN Portal Development:</strong> We provide end-to-end development, from conceptualization and planning to design, implementation, and ongoing management.</li>
              <li><strong>Custom Module Development:</strong> We create new modules or modify existing ones for e-commerce, forums, blogs, data integration, and more.</li>
              <li><strong>Custom Skin Development:</strong> We design and develop unique, multi-layout skins to give your website a fresh and modern look.</li>
              <li><strong>Portal Management & Upgrades:</strong> We offer continuous management, security maintenance, and feature enhancements to keep your portal secure and up-to-date.</li>
            </ul>
          </div>

          {/* Why Choose DNN */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Advantages of Choosing DotNetNuke
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              DotNetNuke offers a host of benefits that make it an excellent choice for a variety of web projects. Here’s why we recommend it:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Efficient Content Management:</strong> Easily create, edit, publish, and manage web content with a user-friendly interface.</li>
              <li><strong>Cost-Effective:</strong> Drastically reduces the total cost of application development and content management.</li>
              <li><strong>Role-Based Security:</strong> Create different user roles with specific privileges to manage content securely.</li>
              <li><strong>Global Community Support:</strong> A strong global community ensures continuous feature enhancements and updates.</li>
              <li><strong>Simple Customization:</strong> Easily change the look of your website with new skins and templates.</li>
              <li><strong>Seamless Integration:</strong> Integrates with your existing infrastructure without any licensing issues.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with DotNetNuke?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is your trusted partner for DotNetNuke development and customization. We provide cost-effective and efficient solutions tailored to your unique business needs, ensuring a smooth and successful project from start to finish.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you’re looking for a skilled and experienced team to help with your DNN project, get in touch with us today.
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

export default DotNetNukeDevelopment;