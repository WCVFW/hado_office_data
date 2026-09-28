import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SvelteJSDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Svelte.js Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire skilled Svelte.js developers who build innovative web applications with our reliable IT staffing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              A relatively new JavaScript framework, Svelte.js has gained massive popularity due to its simple format and minimum requirements. However, like other front-end frameworks, using Svelte needs extensive expertise and experience. As it is a relatively new framework, the skill is rare, and finding the best Svelte specialists can be difficult.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide reliable IT staffing services for Svelte.js developers to global clients and will put you in touch with the best talent in the world to build your dream team. Our team sources developers with extensive knowledge and significant experience in Svelte.js development who will precisely cater to your business needs and help you build highly responsive and interactive web applications.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Services of IT Staffing for Svelte.js Developers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading Svelte.js development company helping global brands hire Svelte.js developers to fulfill their application development needs. Our Svelte.js developers have extensive knowledge and use the latest tools to deliver clean, effective, and bug-free applications.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Svelte.js App Development:</strong> Our developers build exceptional web applications that are loaded with features and are geared for performance.</li>
              <li><strong>Svelte.js UI/UX Development:</strong> Our UI/UX developers have extensive expertise in creating powerful applications with intelligent and responsive user interfaces.</li>
              <li><strong>Svelte.js Quality Assurance and Testing:</strong> With deep domain knowledge and extensive experience, our developers ensure bug-free application development and consistent performance.</li>
              <li><strong>Support and Maintenance:</strong> We not only help in creating ground-breaking applications but also provide ceaseless support for timely upgrades and error-free performance.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We help you hire Svelte.js developers who are skilled and trained. Outsourcing Svelte.js developer hiring services to us entitles you to the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Prices and Plans:</strong> We offer cost-effective rates so you can get the best staffing services without a significant rise in your overhead costs.</li>
              <li><strong>Access to Certified Specialists:</strong> Our in-house Svelte specialists have rigorous experience and proven capabilities in creating world-class Svelte.js applications.</li>
              <li><strong>World-Class Infrastructure:</strong> Our powerful infrastructure and seamless access to the latest technologies make us a preferred outsourcing partner.</li>
              <li><strong>Scalability:</strong> We let you scale our Svelte.js development services as per your business requirements.</li>
              <li><strong>24/7 Support:</strong> Our service executives are available round-the-clock to provide you with an exceptional customer service experience.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Svelte.js Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a reputed IT staffing firm with extensive industry experience in serving global clients. Hire Svelte.js application developers from us to build your dream application using an intuitive, adaptable, open-source, and well-designed framework.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We help you quickly bridge your organization's talent gaps and boost your team's capabilities to enjoy the best business performance.
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

export default SvelteJSDevelopers;