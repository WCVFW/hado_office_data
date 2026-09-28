import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const NuxtJSDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Nuxt.js Developers
            </h2>
            <p className="text-lg text-gray-600">
              Boost performance and user experience with the intuitive and feature-rich Nuxt.js framework. Hire us for simple yet powerful web development.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Nuxt.js development environment is one of the best ways to go about app development. It caters well to client-side and server-side development, helping to deliver SEO-friendly websites with zero configuration. For performant and data-driven outcomes, hire Nuxt.js developers from us today!
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading Nuxt.js development company with over 26 years of experience. Our developers work from multiple global delivery centers, are well-versed with the latest technology, and follow a stringent process to produce the most effective web applications. They are available 24/7 to address your business needs, and by partnering with us, our clients benefit from the time-zone advantage.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              IT Staffing for Nuxt.js Developers
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With us, you can hire Nuxt.js developers at flexible rates. You may choose to work with part-time or full-time developers for your project. Our Nuxt.js development services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Web App Development:</strong> We meticulously design and develop both static and dynamic web applications that load faster and respond quickly to user interactions.
              </li>
              <li>
                <strong>Customized Nuxt.js Development:</strong> We develop customized Nuxt.js solutions to meet the unique requirements of each client's target audience and niche.
              </li>
              <li>
                <strong>SSR Development Services:</strong> Our experts develop SEO-optimized websites and apps that garner satisfying user engagement and conversion.
              </li>
              <li>
                <strong>App Upgrade Services:</strong> We help clients upgrade their apps to the latest Nuxt.js updates to provide a better user experience.
              </li>
              <li>
                <strong>Planning and Strategy:</strong> We assess customer requirements and deploy an effective strategy to develop the best Nuxt.js app to deliver desired results.
              </li>
              <li>
                <strong>Maintenance and Support:</strong> We offer 24/7 customer support and provide constant maintenance to ensure that your applications run without any hassle.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a leading Nuxt.js development company with a sterling global presence. Outsourcing Nuxt.js developers from us assures 100% productive web applications. The benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>ISO Certification:</strong> We are an ISO-certified company that follows international standard processes and has a world-class infrastructure.</li>
              <li><strong>Data Security:</strong> We sign a Non-Disclosure Agreement to ensure all your data is safe from breach.</li>
              <li><strong>Professional Expertise:</strong> Our developers create apps that adapt well to all devices, load pages quickly, and offer an enhanced customer experience.</li>
              <li><strong>Short Turnaround:</strong> We provide seamless services at quicker turnarounds and are highly committed to meeting all our deadlines.</li>
              <li><strong>Dedicated Project Managers:</strong> We allot dedicated resources to lead your project and resolve your queries 24/7.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Nuxt.js Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              Hire Nuxt.js developers who are highly experienced and capable of creating exceptional mobile applications. Our experts provide the best-in-class Nuxt.js development services to cater to your most complex ideas.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Reach out to us now for reliable, trustworthy, and cost-effective Nuxt.js development services.
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

export default NuxtJSDevelopers;