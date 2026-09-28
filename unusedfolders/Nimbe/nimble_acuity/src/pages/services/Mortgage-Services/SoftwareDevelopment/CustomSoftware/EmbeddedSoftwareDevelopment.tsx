import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; 

const EmbeddedSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Embedded Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get high-quality software for your medical devices, mobile phones, consumer electronics, and more from an experienced team of embedded software developers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand that embedded software forms the foundation of many larger hardware systems and software operations. Our team creates precision and stability in your operations by controlling and maneuvering a wide range of electronic systems, including device drivers, microprocessors, microcontrollers, Human Interface Devices (HID), and IoT devices. We also specialize in the transformation of data from embedded devices to external systems.
            </p>
          </div>

          {/* Embedded Software Development Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Embedded Software Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Firmware Programming</h4>
                <p>We provide expert firmware programming to ensure the foundational software of your hardware devices is robust, efficient, and reliable.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">IoT Solutions</h4>
                <p>Our team develops seamless IoT solutions that connect your embedded devices to the cloud, enabling data collection, remote management, and smart automation.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Application Development</h4>
                <p>We build custom mobile applications that interface directly with your embedded devices, providing a user-friendly and accessible control interface.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Middleware</h4>
                <p>We develop high-performance middleware to facilitate smooth communication and data exchange between different software components and hardware systems.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">POS & Payment Systems</h4>
                <p>Our solutions include secure and reliable embedded programming for Point of Sale (POS) and other payment processing systems.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">GIS Solutions</h4>
                <p>We offer specialized embedded software for Geographic Information Systems (GIS), enabling location tracking, mapping, and data analysis on custom hardware.</p>
              </div>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Industries We Serve
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-700 text-center">
              <div className="p-4 bg-gray-100 rounded-lg">Aerospace</div>
              <div className="p-4 bg-gray-100 rounded-lg">Automotive</div>
              <div className="p-4 bg-gray-100 rounded-lg">Healthcare & Medicine</div>
              <div className="p-4 bg-gray-100 rounded-lg">Financial Institutions</div>
              <div className="p-4 bg-gray-100 rounded-lg">Defense</div>
              <div className="p-4 bg-gray-100 rounded-lg">Real Estate</div>
              <div className="p-4 bg-gray-100 rounded-lg">Transportation</div>
              <div className="p-4 bg-gray-100 rounded-lg">Agriculture</div>
              <div className="p-4 bg-gray-100 rounded-lg">Industrial Control</div>
              <div className="p-4 bg-gray-100 rounded-lg">Networking</div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Flexible Pricing:</strong> We offer flexible pricing models that align with your project requirements and budget, providing a transparent and cost-effective solution.</li>
              <li><strong>High-quality Services:</strong> Our commitment to quality is upheld by our ISO-certified processes, ensuring every solution we deliver is reliable and robust.</li>
              <li><strong>Experienced Developers:</strong> Our team consists of highly skilled and experienced software developers with deep expertise in various embedded systems.</li>
              <li><strong>Quick Turnaround Time:</strong> We are dedicated to providing fast and efficient service delivery, ensuring your project is completed on time without compromising quality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Embedded Solution?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has a proven track record of delivering superior embedded software solutions that are secure, efficient, and scalable. Let us help you create a tailored strategy to meet your specific hardware and software integration goals.
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

export default EmbeddedSoftwareDevelopment;