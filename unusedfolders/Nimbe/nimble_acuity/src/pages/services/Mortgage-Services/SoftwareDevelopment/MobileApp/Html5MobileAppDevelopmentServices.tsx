import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const Html5MobileAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              HTML5 Mobile App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Deliver high-quality HTML5 mobile apps that work seamlessly across different platforms and mimic the look and feel of native applications.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With the world becoming increasingly mobile, the focus has shifted to accessing the web from our smartphones. HTML5 apps are gaining popularity among developers, with nearly 42% using a combination of HTML5, CSS, and JavaScript to build high-quality applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we help you develop HTML5 mobile apps that keep costs in check while providing a native-like experience. This means faster development times and access to a larger user base across multiple platforms for your business.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our HTML5 App Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A common misconception is that HTML5 apps are sub-standard and perform poorly compared to native apps. However, many HTML5 apps can use core features like GPS and camera APIs. Our HTML5 mobile app development strategy is simple: deliver what we promise while saving you thousands of dollars.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HTML5 UI and UX Design</h4>
                <p className="text-gray-700">We create user interfaces and experiences that are both visually appealing and highly functional, optimized for a seamless app experience.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HTML5 Prototyping</h4>
                <p className="text-gray-700">Our team builds prototypes to test and validate your app concepts early in the development process, ensuring a solid foundation.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HTML5 Game Development</h4>
                <p className="text-gray-700">We specialize in developing engaging and high-performance HTML5 games that are accessible across a wide range of devices.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HTML5 App Testing</h4>
                <p className="text-gray-700">Our rigorous testing process ensures that your HTML5 app is secure, bug-free, and performs flawlessly on multiple platforms.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Flash to HTML5 Migration</h4>
                <p className="text-gray-700">We help you seamlessly migrate your existing Flash content and applications to the more modern and secure HTML5 framework.</p>
              </div>
              {/* Solution 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">HTML5 App Maintenance and Support</h4>
                <p className="text-gray-700">We provide ongoing maintenance and support to ensure your HTML5 app remains up-to-date and performs at its best.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for HTML5 App Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We develop HTML5 apps that are easier to support and compatible across the widest range of devices. By choosing our services, you stand to gain from the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Fully Agile Processes:</strong> Our agile development processes ensure a flexible and efficient project lifecycle.</li>
              <li><strong>Cross-Platform Solutions:</strong> We provide solutions that work on a variety of different smartphone platforms, such as iOS and Android.</li>
              <li><strong>Experienced Developers:</strong> Our developers have extensive experience in HTML5 frameworks like Sencha, PhoneGap, and SproutCore.</li>
              <li><strong>Collaborative Approach:</strong> We maintain an open, client-friendly, and collaborative nature throughout the development process.</li>
              <li><strong>Rapid & Cost-Effective:</strong> Our services are both rapid and cost-effective, ensuring high performance without a hefty price tag.</li>
              <li><strong>All-in-One Solution:</strong> We are a one-stop solution for all HTML5 web and mobile development services, including UI/UX experts, QA, and business analysts.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Started with High-Quality HTML5 App Development from Nimble Acuity!
            </h3>
            <p className="text-gray-700 mb-6">
              With the decline of Flash, HTML5 has emerged as a strong contender for mobile and web development. It is not only secure but also incredibly versatile. From mobile phone apps to the ads running on them, everything can be coded in HTML5 while ensuring that the speed and reliability of the app do not take a hit.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We have some of the most talented HTML5 mobile application developers today. We promise our clients on-time delivery and create stunning applications that look and perform better than most native apps. Contact us today to create breathtaking HTML5 mobile apps that can propel your business to new heights!
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

export default Html5MobileAppDevelopmentServices;