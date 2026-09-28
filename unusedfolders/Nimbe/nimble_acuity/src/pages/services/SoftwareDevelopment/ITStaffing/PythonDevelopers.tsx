import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const PythonDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Python Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire our Python Developers for robust and scalable applications to fast-track business growth starting from only $2200/month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Offering convenience and exciting buyer experiences is critical for every business today. Python is a powerful technology that supports multi-programming models with rich functionality. With automated memory management and fewer lines of code, Python apps can be built and deployed quickly.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading Python App Development Company with a full-fledged Python team with exemplary skills and in-depth expertise. Our Python application developers for hire have developed simple and complex software, from dynamic websites to portals and custom software, for businesses of all sizes across various industries.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our End-to-End Python Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you hire Python developers from **Nimble Acuity**, you get a range of services designed to meet your business needs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Quick Development of Unique Solutions:</strong> Get 100% customized, secure, and scalable solutions with rich functionality, built and deployed quickly.</li>
              <li><strong>eCommerce Development:</strong> We'll craft amazing and smoothly running eCommerce stores with user-friendly interfaces and tight security, including B2B sites, auction sites, or marketplaces.</li>
              <li><strong>ERP Development:</strong> We create user-friendly, customizable, secure, and scalable ERP solutions to help your business get an all-round view of its operations.</li>
              <li><strong>Data Integration and Support:</strong> Hire our Python developers and programmers for all-inclusive data integration and support.</li>
              <li><strong>Custom Software Development:</strong> Our full-stack Python developers can create software products to resolve a specific business pain point or fulfill a unique requirement.</li>
              <li><strong>Migration to Python:</strong> Our expert developers will help you move your existing web applications to Python quickly, painlessly, and cost-effectively.</li>
              <li><strong>Support and Maintenance:</strong> We offer services for maintaining your Python apps, ensuring they are regularly updated and experience no downtime.</li>
              <li><strong>API Development Services:</strong> We can power your mobile apps with secure and stable APIs and web services.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you hire Python developers from **Nimble Acuity**, you get numerous benefits that help you achieve your goals:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Team:</strong> Choose from a vast team of Python developers who are highly experienced and have the specific skills you require.</li>
              <li><strong>Significant Savings:</strong> Save money, time, and human resources compared to hiring a full-time Python developer in-house.</li>
              <li><strong>No Infrastructure Investment:</strong> Eliminate the need to invest in space, equipment, and employee benefits.</li>
              <li><strong>Transparency and Security:</strong> Enjoy strict adherence to NDAs and SLAs and greater project transparency.</li>
              <li><strong>Timely Delivery:</strong> Expect timely delivery of projects within pre-determined deadlines and budgets.</li>
              <li><strong>Cutting-Edge Technology:</strong> Get eCommerce sites and apps driven by the latest technologies.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for Your Python Staffing Needs
            </h3>
            <p className="text-gray-700 mb-6">
              Our Python developers are adept at building unique web and mobile solutions that help boost your ROI and build your brand. If you are looking to hire a reliable and dedicated Python application developer, look no further than **Nimble Acuity**.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today with your requirements, and we'll help you find the perfect professionals for your project.
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

export default PythonDevelopers;