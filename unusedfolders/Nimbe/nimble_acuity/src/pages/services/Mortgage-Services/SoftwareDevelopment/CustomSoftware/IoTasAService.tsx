import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const IoTasAService: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IoT As A Service
            </h2>
            <p className="text-lg text-gray-600">
              Interconnected devices are transforming the way companies operate. We help you leverage the power of the Internet of Things (IoT) to create better products and satisfy customers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The complex handling of IoT's fusion technologies often leaves enterprises without the in-house expertise or software to make it a profitable and worthwhile investment. IoT requires expertise in enabling smart sensors to observe, learn, and make decisions to produce limitless market opportunities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity specializes in the IoT as a Service (IoTaaS) platform. Our IoT development services are exceptionally equipped to assist your company in deploying IoT to expand insight, enhance customer satisfaction, and promote efficiency. When you partner with us, we'll show you how IoTaaS can drive growth and success for your business while saving costs and resources.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive IoTaaS Development Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Hardware Blueprint and Development:</strong>
                <p className="mt-2">We provide robust hardware design and testing services, utilizing complex event processing to interpret dispersed message-based systems and arrive at real-time deductions.</p>
              </li>
              <li>
                <strong>Firmware Blueprint & Development:</strong>
                <p className="mt-2">We develop firmware using languages like Python and C/C++, with features for power management, real-time analytics via RTOS, and support for plug-and-play protocols from libraries like MQTT and HTTP.</p>
              </li>
              <li>
                <strong>Data Transfer Blueprints & Development:</strong>
                <p className="mt-2">Our expertise covers connectivity through Bluetooth, WiFi, and GSM, as well as developing systems for device tracking, counting, and discovering appliances.</p>
              </li>
              <li>
                <strong>Back-end Development:</strong>
                <p className="mt-2">Our expert developers handle actuation and analytics through server architecture, stream processing, and automated testing, including regression, performance, and security checks.</p>
              </li>
              <li>
                <strong>Middleware Development:</strong>
                <p className="mt-2">Our middleware solutions seamlessly connect various end systems, perform data transformations, and apply business logic. We specialize in platforms like EAP, Kaa, and OpenHab to maintain a reliable platform for your enterprise.</p>
              </li>
              <li>
                <strong>Cloud Integrations:</strong>
                <p className="mt-2">We provide interaction hosts for devices, allowing for easy remote monitoring and control. Our solutions permit the efficient storage, access, and management of information in the cloud.</p>
              </li>
              <li>
                <strong>Mobile App Development:</strong>
                <p className="mt-2">We develop and integrate user interfaces for cross-platform applications (Windows, iOS, Android, Linux). Our development is rooted in frameworks like AngularJS and D3.js to create flexible apps that can sustain large loads of information.</p>
              </li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Advantages of the IoTaaS Model
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Efficiency:</strong> Tap into analytics from key devices to make every action purposeful and productive.
              </li>
              <li>
                <strong>Automation:</strong> Automate any device and free up your teams to pursue new business opportunities.
              </li>
              <li>
                <strong>Customer-centricity:</strong> Use the information gathered to craft a stronger interaction with your customers.
              </li>
              <li>
                <strong>Lower Operational Costs:</strong> You only pay for what you need and delegate software upkeep to us.
              </li>
              <li>
                <strong>Customizable Systems:</strong> The IoTaaS system can be tailored to run based on your specific objectives.
              </li>
              <li>
                <strong>Accessibility:</strong> Access your IoTaaS application anytime, anywhere.
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Industries We Serve
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The adoption of the IoTaaS model has been widespread and diverse. Nimble Acuity has experience serving a variety of industries, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Transport</li>
              <li>Utilities</li>
              <li>Healthcare</li>
              <li>Smart Homes</li>
              <li>Retail</li>
              <li>Agriculture</li>
              <li>Energy</li>
              <li>Manufacturing</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for IoTaaS?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Quality:</strong> Our team prioritizes integrating only the best IoTaaS technology to meet your unique objectives.
              </li>
              <li>
                <strong>Stability:</strong> We pay detailed attention to every aspect of our IoT framework to ensure the entire system operates effortlessly.
              </li>
              <li>
                <strong>Adaptability:</strong> We have the ability to adapt our IoT framework to your specific industry and business needs.
              </li>
              <li>
                <strong>Information Security:</strong> Our framework ensures security through data encryption, local and remote cloud storage, and strict authorization requirements to prevent unauthorized access.
              </li>
              <li>
                <strong>System Fusion:</strong> Our IoT framework is compatible with corporate IT solutions (ERP, MES, WMS, etc.).
              </li>
              <li>
                <strong>Scalable IoT Systems:</strong> Our tools and monitoring are streamlined to promote consistency and match increasing demand.
              </li>
              <li>
                <strong>Flexible Pricing:</strong> Our services are cost-effective, and we can create a custom pricing structure to meet your specific needs.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Innovate with IoT?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity's extensive experience has been foundational to our success in delivering quality IoTaaS development services to companies in various sectors. The breadth of our knowledge prepares us to assist you in all your IoTaaS development needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and outstanding IoT service provider with vast software development experience, get in touch with us to learn more about our cost-effective and quality-assured solutions!
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

export default IoTasAService;