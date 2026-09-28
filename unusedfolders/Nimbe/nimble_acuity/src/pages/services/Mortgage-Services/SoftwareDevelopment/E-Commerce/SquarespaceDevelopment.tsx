import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SquarespaceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Squarespace Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your website designed and managed efficiently by outsourcing Squarespace development.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              To improve your online business's bottom line, you'll need a good-looking website that is designed for seamless navigation, user-friendliness, and user safety. Building a website from scratch can be challenging. If so, outsource Squarespace development services to **Nimble Acuity** and give yourself peace of mind. Our expert Squarespace developers will work with your inputs to create designs that are most optimal for your business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a top Squarespace development company with a dedicated infrastructure and qualified resources. We deliver projects on time and honor our commitment to the client. Reach out to us to get a quote and we'll help you with custom Squarespace development services.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Squarespace Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At **Nimble Acuity**, we design a presentable website by handling Squarespace theme development as part of our comprehensive services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Squarespace Design and Development:</strong> We use the freshest concepts from the Squarespace development stylebook to design your website to be approachable to visitors, increasing traffic and your site's authority.</li>
              <li><strong>Digital Marketing in Squarespace:</strong> We offer digital marketing support to equip your site with tools that enable it to rank better on search engines and have enhanced visibility.</li>
              <li><strong>Product Optimization:</strong> Using Squarespace's drag-and-drop features, we make your site navigation simple and efficient, allowing users to find what they want in fewer steps.</li>
              <li><strong>Data Migration:</strong> We ensure that your existing authority or content is undamaged while migrating your data from another hosting platform to Squarespace.</li>
              <li><strong>Maintenance and Support:</strong> We offer exhaustive maintenance and support solutions to keep your site in good order without downtime, constantly measuring site vitals to keep it optimized and free from disruptions.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Squarespace Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes us the top Squarespace development service provider in the market? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our Squarespace development services are within the reach of your budget.</li>
              <li><strong>High-quality Services:</strong> Quality is an important underpinning for our services; we never compromise on quality before delivering the site.</li>
              <li><strong>Rapid Turnaround Time (TAT):</strong> Our Squarespace development services are swift because our developers use the latest technology to accelerate the project.</li>
              <li><strong>Scalable Solutions:</strong> We offer highly scalable Squarespace Development solutions to meet the complex and evolving needs of your business.</li>
              <li><strong>100% Data Security:</strong> Your data is never vulnerable to a breach because we use a robust security system to keep your digital assets secure.</li>
              <li><strong>Round-the-clock Support:</strong> We support our clients from a wide range of geographies and provide unparalleled support via phone, email, and webchat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Get Started with Squarespace?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we have professional teams, a powerful infrastructure, and advanced website-building technologies to offer world-class Squarespace development services. From simple modifications to complex development, we can undertake complete Squarespace development roles.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With over two decades of experience in software technologies, we are a leading Squarespace development service provider. We have successfully tech-enabled clients from all over the world who need the best Squarespace solutions. Get in touch with us now for a free quote.
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

export default SquarespaceDevelopment;