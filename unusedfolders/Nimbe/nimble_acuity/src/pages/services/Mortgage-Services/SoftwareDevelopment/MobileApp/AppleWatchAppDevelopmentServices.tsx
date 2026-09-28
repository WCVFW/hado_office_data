import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AppleWatchAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Apple Watch App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Deliver innovative and functional apps for the Apple Watch, a device that's outselling the entire Swiss watch industry.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Apple Watch has revolutionized wearable technology with features like interactive notifications, health tracking, and Apple Pay. With Apple's announcement of native app development for WatchOS, the scope for businesses has expanded dramatically.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a pioneer in Apple Watch app development. We provide comprehensive services that allow you to drive your enterprise's innovation, improve time-to-market, and gain better control over your project's output. We focus on creating apps that are passive and less intrusive, perfectly suited for the small screen and unique user experience.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Apple Watch App Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our experienced team understands the intricacies of wearable technology. Some of the services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Apple Watch App Design</h4>
                <p className="text-gray-700">We conduct a feasibility analysis of your app concept, research your target audience, and create innovative designs with a lean approach for the best aesthetic and structural appeal.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Back-end Systems & API Development</h4>
                <p className="text-gray-700">Our developers specialize in creating user-friendly and practical back-end systems and APIs for your app, ensuring seamless functionality and a strong ROI.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">App Development Consultation</h4>
                <p className="text-gray-700">Our expert consultations help your app gain strong visibility. We can provide additional expertise and support to guide your project to success.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Support and Maintenance</h4>
                <p className="text-gray-700">We provide holistic after-sales support and maintenance. Whether you need to tweak the UI or need guidance on its workability, we're here to help.</p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Apple Watch Development Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity follows a validated development process to ensure we accommodate all your envisioned concepts and deliver a robust, high-quality app. Our process includes:
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700 md:columns-2">
              <li><strong>Feasibility Analysis:</strong> We begin by analyzing your app concept to determine its feasibility on the Apple Watch.</li>
              <li><strong>User-Interface Design:</strong> Our team designs the UI elements after thorough research of your goals and target audience.</li>
              <li><strong>App Development:</strong> This is the phase where your idea comes to life. Our developers build a robust app that meets your specifications.</li>
              <li><strong>Testing:</strong> We conduct a thorough testing of the app to verify its workability and utility.</li>
              <li><strong>Release:</strong> Once everything is verified and sorted, we release your Apple Watch app.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              What makes Nimble Acuity stand out in a maturing marketplace? Here are a few reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>State-of-the-Art Infrastructure:</strong> Our team has access to world-class office spaces, uninterrupted network equipment, and modern communication tools.</li>
              <li><strong>Flexible Pricing:</strong> We offer tailored solutions with flexible pricing options that fit your specific needs and budget.</li>
              <li><strong>Expertise:</strong> We have worked with a wide range of industries, including retail, e-commerce, and healthcare, ensuring we have the experience to deliver a high-performing app.</li>
              <li><strong>24/7 Availability:</strong> Our customer support executives are available around the clock to cater to your inquiries, regardless of time zone differences.</li>
              <li><strong>Economy of Scale:</strong> We have the necessary resources and expertise to handle any spike in your business demands, providing significant cost advantages.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Apple Watch App Development Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing iOS, iPhone, and Apple Watch application development services. We offer a robust service suite with high levels of scalability and flexibility, customized to your software development needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We have an in-depth understanding of wearable technology and continuously streamline our development process to deliver immeasurable value to our clients. Get in touch with us today for reliable, efficient, and cost-effective Apple Watch app development services.
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

export default AppleWatchAppDevelopmentServices;