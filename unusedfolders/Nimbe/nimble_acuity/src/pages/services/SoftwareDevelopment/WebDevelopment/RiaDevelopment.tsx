import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const RiaDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Rich Internet Application Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get enhanced accessibility, portability, and scalability by choosing our rich internet application development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we specialize in building **Rich Internet Applications (RIAs)** that are feature-rich, interactive, and built for complete user satisfaction. If you're looking to create robust applications that meet the rising demands of your users, our experienced team can help you build them using highly productive and standards-based programming processes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our RIAs are designed to drive enhanced revenue by reducing or eliminating process abandonment and ensuring easy-to-follow self-service. We have extensive experience using the latest web technologies, including Adobe AIR, Adobe Flex, HTML5, CSS3, AJAX, PHP, and JQuery, to create applications that function like desktop software with improved interactivity and data communication.
            </p>
          </div>

          {/* Our RIA Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our RIA Development Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Seamless Stage Transitions</h4>
                <p>Our RIAs allow for seamless and interactive stage transitions, unlike traditional HTML applications that require multiple page reloads, ensuring a distraction-free user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Targeted RIA Development</h4>
                <p>We provide a superior foundation for creating compelling and engaging user interfaces that are totally focused on your needs and those of your customers, optimizing the application to achieve its specific purpose.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Responsive & Intelligent Design</h4>
                <p>We use specific RIA technologies to simplify complex processes and enhance user engagement. Our applications dynamically adjust their behavior by capturing and using contextual information, providing your users with exactly what they want and reducing your workload.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our services are priced extremely cost-effectively, providing you with the highest return on investment.</li>
              <li><strong>High-quality Services:</strong> We are an ISO-certified service provider, ensuring we deliver the highest quality applications through multi-level quality checks.</li>
              <li><strong>Experienced Team:</strong> Our team is backed by decades of solid experience in providing a wide range of application development services to a global clientele.</li>
              <li><strong>Structured Process:</strong> We use a streamlined and efficient process to deliver all our services, ensuring your project is completed on time and to your exact specifications.</li>
              <li><strong>Superb Infrastructure:</strong> We provide our professionals with modern offices and powerful computers, enabling them to deliver world-class services.</li>
              <li><strong>Data Security:</strong> We take the security of your data very seriously. Our stringent processes ensure your information is always safe and secure.</li>
              <li><strong>Short Turnaround:</strong> We understand how critical time is and are committed to delivering our services on time, every time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build a Rich Internet Application?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of rich internet application development services. We will work closely with you to understand your requirements in detail and come up with a custom plan that perfectly meets your needs.
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

export default RiaDevelopment;