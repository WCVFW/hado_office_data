import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ChromecastAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Chromecast App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to scalable, visually stunning, and responsive apps to make your Chromecast TV experience seamless.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Today, improvements in internet and streaming technology have created a space for new content platforms. Among them, Google Chromecast is a key disruptor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading Chromecast app development service provider. We help companies redesign their consumers' TV experience with high-quality Chromecast development services, creating scalable, visually stunning, and extremely responsive Android and native apps.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Chromecast App Development Solutions
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Chromecast Sender Application Development:</strong>
                <p className="mt-2">We leverage official Cast APIs to develop sender apps for specific platforms, including Android APIs for multiple Android devices, iOS APIs for iOS devices, and Google Chrome API for in-browser casting.</p>
              </li>
              <li>
                <strong>Chromecast Receiver Application Development:</strong>
                <p className="mt-2">As your development partner, we create receiver applications to handle communication between multiple sender apps and the Cast device, with options including:</p>
                <ul className="list-circle list-inside ml-6 space-y-2 text-gray-600 mt-2">
                  <li><strong>Default Media Receiver Development:</strong> Provides a no-frills Chromecast casting experience.</li>
                  <li><strong>Styled Media Receiver Development:</strong> An enhanced, customizable experience for your users.</li>
                  <li><strong>Custom Receiver Development:</strong> Can be implemented using the Web Receiver SDK with HTML5/JavaScript to handle custom messages from your sender app.</li>
                  <li><strong>Web Receiver Development:</strong> Features a custom interface to display your app's content on the TV and handles messages from the sender.</li>
                  <li><strong>Android TV Receiver:</strong> We build high-quality Android TV Receiver apps that leverage the Cast Connect library to function as a receiver.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Expertise */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Chromecast Development Expertise
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Android Studio</li>
              <li>Google Cast</li>
              <li>Kotlin</li>
              <li>Objective-C</li>
              <li>Swift</li>
              <li>Xcode</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective:</strong> Our unique pricing structure with slabbed rates and customizable strategies benefits both small businesses and major players.</li>
              <li><strong>Innovative Solutions:</strong> We are a leading provider of Chromecast app development, delivering innovative solutions.</li>
              <li><strong>Professional Expertise:</strong> We have completed thousands of app development projects, making us a key service provider in the industry.</li>
              <li><strong>On-Time Delivery:</strong> We implement Agile development methodologies to ensure your project is delivered on time.</li>
              <li><strong>Exceptional Support:</strong> Our world-class support team provides personalized attention to each project, helping you with any issues after development.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Chromecast App?
            </h3>
            <p className="text-gray-700 mb-6">
              If you are looking for high-quality Chromecast development, reach out to us. We provide in-depth, actionable insights to help you create the best apps for your users.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Interested? Get in touch with us now!
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

export default ChromecastAppDevelopment;