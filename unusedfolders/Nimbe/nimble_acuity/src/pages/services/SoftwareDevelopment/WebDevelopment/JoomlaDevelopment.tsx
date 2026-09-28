import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const JoomlaDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Joomla Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build appealing websites and powerful online applications with our Joomla development services, with prices starting at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Joomla is a user-friendly and mobile-ready open-source CMS used by thousands of businesses to build robust online applications and websites. Since its first release, a strong developer community has made it a stable, easy-to-use, and secure platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of **Joomla development services**, offering a complete range of solutions to create powerful online applications and websites. We utilize thousands of free templates and extensions to help you customize your site or app to meet your specific requirements.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Joomla Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our team has extensive expertise in developing Joomla-based websites for a wide variety of clients, including corporations, publishing houses, and online communities. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Joomla Template Customization:</strong> We help you customize the look, feel, navigation, and other design-related features of any Joomla template.</li>
              <li><strong>Complete Joomla Website Creation:</strong> We can build full Joomla websites from scratch, including setup, configuration, and feature enhancement.</li>
              <li><strong>Joomla Component Development:</strong> We can add new components to your existing Joomla or HTML website, such as a blog, forum, or e-commerce cart.</li>
              <li><strong>Joomla & E-commerce Integration:</strong> We can help you build a powerful e-commerce site by integrating your e-commerce application with the Joomla CMS.</li>
              <li><strong>SEO & W3C Validation:</strong> We help you make your Joomla website SEO-friendly and compliant with W3C XHTML standards.</li>
              <li><strong>HTML to Joomla Conversion:</strong> We can convert your old HTML website to a new Joomla CMS-based website, allowing you to easily manage and update content.</li>
              <li><strong>Website Maintenance:</strong> We offer ongoing maintenance, enhancement, and update services to ensure your website always has the latest features and security.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your Joomla development needs to us makes a lot of sense for a host of reasons, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Services:</strong> We provide high-quality Joomla development services at extremely affordable rates due to our years of experience.</li>
              <li><strong>Dedicated Team:</strong> We have a dedicated team of highly proficient and skilled Joomla developers with a proven track record.</li>
              <li><strong>High-Quality Services:</strong> We are committed to providing only high-quality services, backed by our technical expertise and active participation in the Joomla community.</li>
              <li><strong>Quick Turnaround:</strong> Our efficient processes allow us to provide services much faster than our competitors.</li>
              <li><strong>Customized Solutions:</strong> We work with each client to develop a custom Joomla solution that perfectly meets their unique requirements.</li>
              <li><strong>Scalability:</strong> We provide a scalable service, allowing you to quickly adjust resources to meet changes in your business environment.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Joomla?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of **Joomla development services** and can help you easily build and deploy great websites and web apps. We have tried and tested systems in place that help us provide cost-effective Joomla solutions quickly and efficiently.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a stable and experienced provider of Joomla development services, get in touch with us today.
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

export default JoomlaDevelopment;