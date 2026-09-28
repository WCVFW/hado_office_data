import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const FirmwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Firmware Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your electronic components programmed and operational with our reliable firmware development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your firm looking to program electronic components to perform specific tasks? At **Nimble Acuity**, we have a team of skilled and experienced firmware development experts ready to handle all your requirements with ease. We leverage the latest firmware development software and tools to deliver top-notch services that bring your hardware to life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              For over two decades, we have been a leading provider of firmware development services to clients around the globe. We understand each client's unique needs and provide customized solutions that are perfectly suited for their business requirements.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Firmware Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom Firmware Services</h4>
                <p>Our team has the expertise to provide high-quality custom firmware development services. We understand your unique requirements to deliver tailored solutions that fit your business needs perfectly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Firmware Programming Services</h4>
                <p>We have a team of experienced and talented firmware programming experts who use the latest tools and technologies to deliver the best quality services within a quick turnaround time.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Embedded Firmware Development</h4>
                <p>We leverage powerful development software like Visual Studio, Eclipse, and MATLAB to provide high-quality embedded firmware solutions, ensuring a short turnaround time for project delivery.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing Options:</strong> We offer highly flexible and cost-effective pricing plans that are tailored to your business requirements and budget.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified firm, we ensure all data shared with us is completely secure and confidential.</li>
              <li><strong>Superior Quality Services:</strong> Our ISO certification guarantees that all firmware development services we deliver are of the highest quality and completely error-free.</li>
              <li><strong>State-of-the-art Infrastructure:</strong> We have access to the latest firmware development software, tools, and world-class office spaces to support our projects.</li>
              <li><strong>Short Turnaround Time:</strong> With multiple delivery centers across the globe, we are able to deliver services efficiently and within a quick timeframe.</li>
              <li><strong>Dedicated Manager:</strong> When you partner with us, you'll be assigned a dedicated manager who will be your single point of contact for all your project needs.</li>
              <li><strong>Round-the-Clock Support:</strong> Our support teams are available 24/7 to answer your queries and provide prompt assistance.</li>
              <li><strong>Easily Scalable Services:</strong> We have the capacity to easily scale our services and ramp up project team size as your needs and demands grow.</li>
              <li><strong>Skilled Firmware Developers:</strong> Our team consists of some of the most experienced and talented firmware development specialists who can handle all your needs with ease.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Program Your Electronic Components?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing top-quality firmware development services and other custom software solutions. We leverage the latest software and technologies to deliver a service that is both efficient and reliable.
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

export default FirmwareDevelopment;