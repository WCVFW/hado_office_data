import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const DeviceDriversDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Device Drivers Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get customized drivers for your hardware, networking devices, wearables, and gadgets from our expert team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to develop customized device drivers for your hardware, networking devices, or wearables? At **Nimble Acuity**, we have a highly skilled team of developers who work closely with our clients to ensure your project is completed in record time. With over two decades of experience, we have a deep understanding of the latest software and tools for both Linux and Windows driver development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are a leading provider of development services to clients around the globe, offering tailored solutions that fit your unique requirements. Our team is dedicated to helping you achieve stable connectivity and flawless functionality for all your hardware.
            </p>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Device Drivers Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Networking Hardware Drivers</h4>
                <p>We ensure your device can communicate effectively with all connected hardware, providing stable connectivity and interoperability with gateways, WAPs, and other network devices.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Computer Hardware Drivers</h4>
                <p>We develop microcontrollers that connect the digital world to the physical world, allowing computers to seamlessly communicate with I/O and storage devices like keyboards, speakers, and graphic cards.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Multimedia Drivers</h4>
                <p>Our in-house experts provide driver writing services for a wide range of devices, including matrix sensors, printers, and CCTV systems, ensuring they function flawlessly.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Wearable Drivers</h4>
                <p>We design custom driver solutions for wearables such as vital sign monitors, smartwatches, AR/VR headsets, and connected jewelry, enabling accurate tracking and functionality.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Virtual Drivers</h4>
                <p>To ensure your software works on different devices, we create virtual device drivers that provide a seamless integration between your gadget's internal components and the software.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable & Flexible Pricing:</strong> We offer cost-effective and flexible pricing plans that are tailored to your business requirements and budget.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 certified company, we guarantee that all data shared with us is completely secure and confidential.</li>
              <li><strong>High-Quality Services:</strong> Our ISO certification and dedicated team of professionals ensure our development services are always of high quality and free of bugs.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the best device drivers development tools and world-class office spaces to support our projects.</li>
              <li><strong>Quick Turnaround Time:</strong> With multiple global delivery centers, we are able to deliver projects efficiently and within a quick timeframe.</li>
              <li><strong>Dedicated Point of Contact:</strong> We assign a dedicated partner manager to your project, serving as a single point of contact for all your needs.</li>
              <li><strong>24/7 Customer Support:</strong> Our support teams are available around the clock to answer any questions you may have.</li>
              <li><strong>Highly Scalable Services:</strong> Our project teams are equipped to handle a wide range of services and can easily scale up to meet increased demands.</li>
              <li><strong>Experienced Developers:</strong> Our team consists of highly skilled and experienced development experts who can take care of all your needs on time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Custom Drivers?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing top-quality drivers development services and other custom software solutions. We use the latest technology and pay close attention to the smallest details to ensure the final product is perfect.
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

export default DeviceDriversDevelopment;