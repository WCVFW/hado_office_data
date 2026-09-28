import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const FlaskDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Flask Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get intuitive websites and web applications developed in the Flask framework by our expert Flask web developers, with prices as low as $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Flask is a powerful and popular Python-based micro-framework renowned for its simplicity, flexibility, and robust security features. It's an excellent choice for building lightweight yet powerful web applications and websites. Instead of hiring new teams, which can be economically demanding, outsourcing your Flask development needs is a cost-effective and efficient solution.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** has extensive experience as a leading Flask web development service provider. Our professionals use the latest methodologies to create secure and reliable applications, ensuring your business is protected from risks while accelerating your project's pace.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Flask Web Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We offer a full suite of Flask web development services designed to enhance your website's reliability, security, and user experience. Our cutting-edge solutions include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flask Application Development:</strong> We build secure and reliable applications for e-commerce, entertainment, m-commerce, and more, accelerating your project from start to finish.</li>
              <li><strong>eCommerce & mCommerce Solutions:</strong> We create websites and webpages that simplify the user experience and improve product searchability.</li>
              <li><strong>Flask Template Development:</strong> We design scalable Flask templates for web, mobile, and desktop applications to keep your project organized and efficient.</li>
              <li><strong>Website Development:</strong> Our experts harness the Flask framework to build high-end websites with rich design elements and powerful front-end functionality.</li>
              <li><strong>Mobile App Development:</strong> We develop high-performance mobile applications for iOS, Android, and Windows with powerful UI and security features.</li>
              <li><strong>Feature Enhancement:</strong> We can add new features to your existing applications to increase user satisfaction and drive downloads.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a premier Flask web development service provider for a number of reasons. We offer a high-quality, streamlined process designed to meet your specific needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Pricing:</strong> Our Flask web development services can be customized to fit your budget, offering exceptional value.</li>
              <li><strong>ISO Certified Quality:</strong> We adhere to ISO 9001:2015 standards, ensuring quality, timeliness, and security in all our projects.</li>
              <li><strong>Seamless Integration:</strong> Our solutions can be seamlessly integrated into your existing framework, if necessary.</li>
              <li><strong>Rapid Turnaround Time (TAT):</strong> Our efficient processes and experienced team ensure timely project delivery.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions can be easily scaled up or down based on your evolving business needs.</li>
              <li><strong>Data Security:</strong> We prioritize the safety of your business data with robust security and data protection policies.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Flask?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, we combine skilled development teams, advanced infrastructure, and modern technologies to provide world-class Flask web development services. From simple modifications to advanced revamping tasks, we handle it all with expertise.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To learn more about how we can help your business succeed, get in touch with us today for a free quote.
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

export default FlaskDevelopment;