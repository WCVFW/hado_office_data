import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ExpressJSDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Express.js Developers
            </h2>
            <p className="text-lg text-gray-600">
              Build scalable web applications quickly at just $2200/160 hours using our expert Express.js development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Express.js is a powerful framework for mobile and web app development, built especially for hosting applications that are built with Node.js. It leverages Node.js's rich features to create hybrid and multi-platform applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Express.js is a fairly lightweight framework that provides developers with additional built-in features and an Express API, enhancing the functionality of existing Node.js applications with minimal changes. At **Nimble Acuity**, our team of programmers and Express.js developers provides superior app development services using the powerful features of Express.js and Node.js.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Express.js Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              From bespoke web apps and live chat programs to scalable networking systems and APIs, our Express.js developers can build it for you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Express.js Consultation:</strong> We provide expert guidance from strategizing to final implementation, helping you overcome challenges and seize new opportunities.</li>
              <li><strong>Express.js Web Apps:</strong> We deliver a range of fast, high-performance, and flexible solutions using the Express.js framework.</li>
              <li><strong>Express.js API Development:</strong> Our team provides API development services that utilize wide-ranging HTTP solutions to enhance web application functionality.</li>
              <li><strong>Express.js Maintenance:</strong> We offer a complete suite of maintenance services, including debugging, optimization, performance monitoring, and upgrades.</li>
              <li><strong>Express.js Migration:</strong> If you are looking to migrate to Express.js, our team will simplify the process using best practices and ensuring security.</li>
              <li><strong>Express.js Integration:</strong> Our team will help eliminate complexities and redundancies to increase the performance and scalability of your entire system.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for Express.js Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With **Nimble Acuity**, you get an opportunity to hire an all-in-one team composed of full-stack, backend, and frontend developers, quality assurance professionals, and a dedicated project manager.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing:</strong> We provide customized and affordable pricing to match your budget and requirements.</li>
              <li><strong>Superior Quality:</strong> As an ISO-certified company, we adhere to the highest standards and follow proper protocols to deliver quality services.</li>
              <li><strong>Experienced Team:</strong> Our highly skilled pool of Express.js web developers leverages the latest technologies to provide you with applications that drive higher user engagement and revenue.</li>
              <li><strong>Data Security:</strong> **Nimble Acuity** is an ISO-certified Express.js development company, and we adhere to the highest standards of data security.</li>
              <li><strong>Quick Turnaround Times:</strong> We ensure that every project is delivered on schedule with quick speed and quality checks.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Express.js Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              Our team has delivered interactive applications using Express.js, a functional development platform with a solid set of specifications. Our highly-skilled pool of Express web developers leverages the latest resources and technologies to provide you with mixed applications that drive a higher number of users and revenues for your company.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us to learn how outsourcing Express.js developers can help you execute your business operations effectively and at a lower cost.
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

export default ExpressJSDevelopers;