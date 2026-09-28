import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const HireKonyAppDevelopers: React.FC = () => {
  return (
    <>
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Kony App Developers
            </h1>
            <p className="text-lg text-gray-600">
              We are a leader in providing Kony developers for cross-platform mobile app development and support for open source frameworks.
            </p>
          </div>

          <hr className="my-16" />

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to build reliable mobile solutions and multi-platform apps for your company? Are you looking to hire Kony app developers to oversee your project? **Nimble Acuity** is a top-tier Kony app development services provider to companies looking for highly scalable and functional cross-platform applications. We help with consultation, testing, installation, and deployment of software, making the application development process easy.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The low-code application development platform is a good option for companies who wish to tackle the increasing demand for home-grown mobile apps. The biggest benefit of the Kony App is that developers can easily drag and drop features that they want from the Kony Marketplace or its associated API libraries.
            </p>
          </div>

          <hr className="my-16" />

          {/* Kony App Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Kony App Development Services We Offer
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Kony App Mobility Strategy:</strong> We help you to map out a strategy for meeting mobility needs and to devise a suitable solution.
              </li>
              <li>
                <strong>Kony App Operating System Selection:</strong> We help our clients to select the best OS based on their needs. Our experts also help our clients in making app enhancements.
              </li>
              <li>
                <strong>Kony App UI Development:</strong> We have a special team of experts for developing the user interface and user experience for your customers, making your app user-friendly and engaging.
              </li>
              <li>
                <strong>Kony App Testing:</strong> We have dedicated test teams for unit testing of developed Kony apps to detect bugs and for performance, loading, and more.
              </li>
              <li>
                <strong>Kony App Security Analysis:</strong> We put a particular focus on app security, ensuring your app is equipped with best-in-class security features that protect you from any security threats.
              </li>
              <li>
                <strong>Kony App Maintenance Services:</strong> Our Kony app development services also include comprehensive maintenance services that ensure your Kony app runs smoothly.
              </li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit from
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Custom Software Development</li>
              <li>Enterprise Solutions</li>
              <li>ServiceNow Services</li>
              <li>Infrastructure Management Services</li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Why Choose Nimble Acuity for IT Staffing? */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for IT Staffing for Kony App Developers?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is the leading provider of Kony app development services, having more than 2 decades of experience in various types of mobile application development.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Affordable Pricing:</strong> Outsourcing Kony app developers' requirements to us means you get the best rates possible in the industry.
              </li>
              <li>
                <strong>ISO Certification:</strong> **Nimble Acuity** is an ISO-certified company, so our quality is guaranteed.
              </li>
              <li>
                <strong>World Class Infrastructure:</strong> We have all the resources and infrastructure needed to fulfill your design and development needs.
              </li>
              <li>
                <strong>Data Security:</strong> We are fully committed to the Global Data Security Practices and can ensure that no data about you is shared with any 3rd parties.
              </li>
              <li>
                <strong>Quick Turnaround Times:</strong> Be it business apps or gaming apps, we develop reliable apps in the shortest time.
              </li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Outsource Kony Mobile App Developers to Nimble Acuity */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Kony Mobile App Developers to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is the top Kony development services provider for companies.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>We provide developers that can design and develop both scalable and functional cross-platform apps.</li>
              <li>With efficient development processes and a flexible pricing model, we are a leader in providing efficient solutions.</li>
              <li>With us, you can properly develop mobile applications using the Kony App Platform.</li>
            </ul>
            <p className="text-gray-700 mb-8 font-medium">
              So, if you are looking for the best Kony app development company, contact us today.
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

export default HireKonyAppDevelopers;