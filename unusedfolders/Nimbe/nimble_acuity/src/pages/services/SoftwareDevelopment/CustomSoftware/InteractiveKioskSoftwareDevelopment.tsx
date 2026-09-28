import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const InteractiveKioskSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Interactive Kiosk Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Leverage industry best practices to build flexible and easy-to-use kiosk software solutions that empower your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Interactive kiosks provide a cost-effective way for businesses to seamlessly service customers. The benefits of these solutions extend across nearly every sector, from retail and hospitality to healthcare and public services. At **Nimble Acuity**, we offer comprehensive hardware and software solutions for a wide range of applications, including wayfinding, self-service, feedback, and interactive experiences.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our interactive kiosk software development services are designed to enhance your customer service, increase efficiency, and drive sales. We build intuitive and feature-rich software that makes it easier for you to connect with your customers and optimize your operations.
            </p>
          </div>

          {/* Our Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Interactive Kiosk Software Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kiosk Software Development</h4>
                <p>We create software with intuitive UI/UX, remote administration, visitor management, and automated reporting to streamline your operations and improve user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kiosk Application Development</h4>
                <p>We develop sophisticated kiosk applications for desktop, mobile, and Point-of-Sale (POS) systems, enabling seamless connectivity between your business and customers.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Self-Service Software</h4>
                <p>We facilitate a wide range of self-service functions, including billing, digital signage, ticketing, and retail applications, all through a user-friendly kiosk interface.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kiosk System Solutions</h4>
                <p>We offer versatile software solutions for various operating systems and browsers, including secure wireless implementations to ensure safe browsing and data security.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Kiosk Data & Analytics</h4>
                <p>We integrate Business Intelligence and reporting modules into the kiosks to monitor utilization data, gather critical analytics, and provide precise insights for your business.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Hardware Integration</h4>
                <p>We seamlessly integrate kiosk software with a variety of hardware, including fingerprint and retina scanners, card readers, cameras, and ticketing systems.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Interactive Features</h4>
                <p>We create engaging interactive services, including touchscreen features, virtual keyboards, animations, digital signatures, and customized camera applications.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Tailored User Experience</h4>
                <p>We build an end-user experience specifically for the kiosk environment, designed with consistent branding and breathtaking aesthetics that leave a lasting impression.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Cashless Payments</h4>
                <p>We implement secure, EMV/PCI-compliant cashless payment systems, allowing for seamless digital transactions and increased convenience for your customers.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> We help you minimize costs by automating administrative and repetitive tasks, reducing the need for manual operations.</li>
              <li><strong>Increased Profitability:</strong> Our solutions reduce operational costs and drive efficiency, directly contributing to the profitability of your business.</li>
              <li><strong>Advanced Software Team:</strong> Our expert software engineering team offers comprehensive API integration and will work with you from the initial concept to the final implementation.</li>
              <li><strong>Absolute Customization:</strong> We empower you to create a completely customized kiosk experience by integrating various modules with embedded scanners, payment devices, cameras, and more.</li>
              <li><strong>24/7 Support:</strong> Our dedicated customer service team provides instant responses to queries and concerns, ensuring you always have the support you need.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Customer Experience?
            </h3>
            <p className="text-gray-700 mb-6">
              The Nimble Acuity team offers software development services to clients across industries and time zones. By partnering with us, you gain access to best-in-class kiosk applications that deliver a rich, interactive experience while ensuring stringent security protocols for absolute data safety.
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

export default InteractiveKioskSoftwareDevelopment;