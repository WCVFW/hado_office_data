import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const WordPressTheme: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              WordPress Theme Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to custom WordPress themes that perfectly match your business's requirements and goals at prices starting at $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to give your WordPress website or blog a unique look and feel? Are you looking for **WordPress theme development services** that can incorporate graphics and designs of your choice into a custom theme? If so, you can benefit greatly from our custom WordPress theme development services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one of the foremost providers of **WordPress custom theme development services**. Our solutions are designed to provide 100% satisfaction, and we work closely with our clients to ascertain their exact requirements before coming up with a highly customized solution that meets or exceeds all expectations.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our WordPress Custom Theme Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team of experts can deliver exceptional and custom WordPress themes that leave a lasting positive impression. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>HTML5 to Custom WordPress Theme Conversion:</strong> We efficiently convert your existing HTML coding into a visually appealing WordPress theme.</li>
              <li><strong>Sketch to Custom WordPress Theme Conversion:</strong> Our team can provide exceptional Sketch to WordPress custom theme development solutions for any project size.</li>
              <li><strong>Squarespace to Custom WordPress Theme Conversion:</strong> We have significant experience in converting Squarespace sites into highly appealing and functional WordPress websites.</li>
              <li><strong>UI Prototype to Custom WordPress Theme Conversion:</strong> Our expert developers adhere to the latest modern UI components to deliver the best user experience.</li>
              <li><strong>Responsive Theme Development:</strong> We help you create highly responsive and SEO-friendly WordPress themes that gain better visibility online.</li>
              <li><strong>Wix to Custom WordPress Theme Conversion:</strong> If you are looking to migrate your Wix website, our creative experts can handle the entire process efficiently and effectively.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a leading provider of WordPress theme development services, we offer several key benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing:</strong> Our WordPress theme development services are priced very reasonably, providing you with a high return on investment.</li>
              <li><strong>Structured Process:</strong> We use a streamlined and structured process to ensure consistent, high-quality delivery.</li>
              <li><strong>Experienced Team:</strong> Our team has over 26 years of experience in providing a full spectrum of WordPress development services.</li>
              <li><strong>High-Quality Services:</strong> We are an ISO-certified company and use multi-level quality checks to ensure the highest quality services.</li>
              <li><strong>Superb Infrastructure:</strong> Our developers work out of modern offices with powerful computers, enabling us to provide top-tier services.</li>
              <li><strong>Data Security:</strong> Your data is of paramount importance to us, and we comply with all international data security and privacy laws.</li>
              <li><strong>Short Turnaround:</strong> We take deadlines extremely seriously, and you will always receive our services on time, every time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for a Custom WordPress Theme?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading **WordPress theme development company** that can help you find the right solution for your theme requirements. Our software developers have built up substantial capability in using the WordPress platform to create cost-effective and timely solutions.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for high-quality and appealing WordPress theme development services, get in touch with us today.
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

export default WordPressTheme;