import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const FileMakerDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              FileMaker Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Avail expert and specialized FileMaker development services for multiple platforms, including Windows, Mac, iPad, iPhone, and the web.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to harness the power of FileMaker, the cross-platform relational database application from Claris International? Do you need a flexible rapid application development tool to create effective business solutions tailored to your unique needs?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading FileMaker development company that can provide you with custom solutions perfectly suited to your requirements. With over 26 years of expertise in database and web and mobile application development, we offer a full range of services, including FileMaker development, programming, consulting, maintenance, migration, plugin development, and more.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our FileMaker Development Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Mobile Application Development:</strong>
                <p className="mt-2">We provide custom mobile app development services using FileMaker, allowing your team to use the app in the field. Our solutions can be accessed via a web browser or mobile device, enabling your team to be more efficient.</p>
              </li>
              <li>
                <strong>FileMaker Integration Services:</strong>
                <p className="mt-2">If you want to extend your application's functionality, we can help with our integration services. We can connect your application to a wide variety of systems and software, including Office 365, MailChimp, Quickbooks, Exchange, and many more.</p>
              </li>
              <li>
                <strong>Web Application Development:</strong>
                <p className="mt-2">We can provide advisory and development services for web applications, enabling you to add web portals to your website for external users to enter information. We are also proficient in adding shopping cart functionality and other advanced features with robust security.</p>
              </li>
              <li>
                <strong>Web Design Services:</strong>
                <p className="mt-2">We have years of experience creating beautiful and custom websites with a stunning user experience driven by FileMaker. Our developers can deliver exactly what you need using technologies like PHP, CSS, JSON, HTML5, and others to create aesthetic and functional websites.</p>
              </li>
              <li>
                <strong>Other Services:</strong>
                <p className="mt-2">We provide a wide range of additional services, including FileMaker programming and consulting, application maintenance and support, porting and migration, plugin development, server administration, database design, data integration and exchange, server-side scripting, and quality assurance and testing.</p>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Affordable Pricing:</strong> Our FileMaker development solutions are extremely affordable, helping you cost-effectively develop business-specific applications.
              </li>
              <li>
                <strong>High-quality Services:</strong> We are an ISO-certified company and leverage our extensive experience to provide consistently high-quality services.
              </li>
              <li>
                <strong>Superb Infrastructure:</strong> We have the necessary infrastructure and technology to enable our FileMaker specialists to deliver top-notch services.
              </li>
              <li>
                <strong>Structured Process:</strong> We use a streamlined and systematic process for the delivery of all our FileMaker development services.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team has over 26 years of experience providing a wide range of software development solutions to a diverse clientele.
              </li>
              <li>
                <strong>Data Security:</strong> We follow international data security protocols to safeguard all your data.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> You can always expect to receive our services well within the stipulated deadline.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop with FileMaker?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing high-quality FileMaker development services. Our team uses the latest best practices and lessons learned over our 26+ years of operation to provide exceptional services that meet the exacting specifications of our clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for professional, reliable, and cost-effective FileMaker development services, get in touch with us today!
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

export default FileMakerDevelopment;