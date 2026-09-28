import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AndroidDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for Android App Developers
            </h2>
            <p className="text-lg text-gray-600">
              Hire some of the most qualified, skilled, and experienced Android app developers at affordable prices by partnering with us.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a dynamic Android application development firm providing top-notch services across the globe. With more than 15 years of experience, we are a leading name in the app and software development industry. We have successfully built an extremely talented pool of coders, software engineers, web architects, and other professionals, making us a top choice when it comes to hiring Android app developers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have successfully catered to over a thousand companies worldwide, developing and maintaining high-performance, responsive applications that have helped our customers drive traffic and increase lead conversion. The Android app market has become a niche for our company, and we have proven our expertise time and again over the years.
            </p>
          </div>

          {/* Staffing Options */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Staffing Options for Android App Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our service packages are flexible and open-ended to cater to the unique needs of our clients. You can hire Android application developers using the following options:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Retainer:</strong> Ideal for specific projects requiring professional handiwork, such as building an app from scratch, a complete makeover, or adding new features. We provide a quote based on the scope of the work.
              </li>
              <li>
                <strong>Full-Time:</strong> We serve as full-time developers and maintenance support for clients who require constant technical backend services. We take complete responsibility for your applications, ensuring they stay up-to-date with the latest technologies.
              </li>
              <li>
                <strong>Part-Time:</strong> For companies that need to delegate some responsibilities or require specific expertise for an element of their app, we provide part-time services to deliver our best in a flexible arrangement.
              </li>
              <li>
                <strong>Hourly:</strong> Our most affordable option, preferred by small companies, startups, and short-term ventures for a limited period of our app development services.
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Android App Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In this current era of technological amplification, Android apps take up a lion's share of digital activity. More than 50% of online users access services via applications, and Android is leading the market. It is imperative for any company to invest a significant amount of time, money, and effort into developing powerful Android applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we have made Android app development one of our strong points. We employ the best minds and the latest technologies, driven by the innovation and creativity of our expert developers. Our services are centered on our constant efforts to be better than we were yesterday. We aspire not only to be the best app programmers but also the most reliable, striving to make customer reliability and satisfaction our number one priority.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are the best collective hands you can trust with the dreams and aspirations you have for your business. From building an Android application from scratch to providing continuous maintenance and support, we bring the whole package to you. Outsourcing IT staffing for Android app developers to us will provide you with the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Rates</strong></li>
              <li><strong>High-Quality Services</strong></li>
              <li><strong>Highly Skilled Team</strong></li>
              <li><strong>High Data Security</strong></li>
              <li><strong>Single Point of Contact</strong></li>
              <li><strong>Easily Scalable Services</strong></li>
              <li><strong>Comprehensive Solutions</strong></li>
              <li><strong>Prompt Customer Service</strong></li>
              <li><strong>24/7 Support</strong></li>
              <li><strong>Specialized Expertise</strong></li>
              <li><strong>Customization Options</strong></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Android Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a leading provider of IT staffing for Android app development and a series of other IT staffing services to global clients. We have some of the most skilled, talented, and experienced Android app developers on board who can take care of any of your app development needs. We leverage the latest and best tools and technologies to deliver the best quality services within a quick turnaround time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking to hire android app developers, feel free to get in touch with us today!
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

export default AndroidDevelopers;