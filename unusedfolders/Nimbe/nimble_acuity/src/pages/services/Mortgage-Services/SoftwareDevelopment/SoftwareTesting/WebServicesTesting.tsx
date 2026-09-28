import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebServicesTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Web Services Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to high-quality web services testing provided by highly experienced and qualified software testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for reliable, accurate, and cost-effective web services testing services? Do you want to partner with a web services testing company that provides comprehensive, in-depth, and high-quality solutions? If so, you are at the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading web services testing provider and can help you with any of your needs. We have on board expert software testers that have substantial experience and expertise in performing web services testing for a wide variety of clients. Our web services software testing ensures that your web application runs smoothly and without glitches.
            </p>
          </div>

          {/* Web Services Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Web Services Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A web service is any software that is available over the internet and uses a standard XML messaging system. The most popular methods are SOAP, REST, and WSDL. **Nimble Acuity** has extensive experience in testing web services and their protocols. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Manual Testing</h4>
                <p>We manually test web services and their protocols. We are familiar with using a number of programming languages to send XML requests over HTTP and then validating the XML response against the anticipated result.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Testing Through Automation Code</h4>
                <p>We create an automation code to perform testing of web services and their protocols. For instance, we can create a simple Java program to invoke the request method, which is then converted to an XML format and sent to the web service for processing.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Testing via Automation Tools</h4>
                <p>We have substantial experience and expertise in performing web services automation testing. We use off-the-shelf web services testing automation tools like SoapUI to help us test web services efficiently and quickly.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing your web services testing to us gives you access to a series of benefits. Some of the key reasons to choose us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Our services are highly cost-effective, with pricing options that suit your business requirements and budget.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO certified organization, ensuring all services delivered are of the best quality and go through a strict quality assurance process.</li>
              <li><strong>Experienced Team:</strong> Our team has extensive experience in providing a comprehensive range of web services testing solutions.</li>
              <li><strong>Data Protection:</strong> We take data security extremely seriously, and all our team members have signed strict NDAs to protect your confidential information.</li>
              <li><strong>Structured Process:</strong> We make use of streamlined and time-tested processes for the delivery of all our web services testing solutions.</li>
              <li><strong>Quick Turnaround Time:</strong> Our web services testing experts will always provide their services within a quick turnaround time, as we understand how critical time is for our clients.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Test Your Web Services?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a pioneer in providing high-quality web services testing and a plethora of other software testing services to clients globally. Our team comprises a set of highly-qualified and skilled testers that can address any of your needs with the utmost attention to detail and professionalism.
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

export default WebServicesTesting;