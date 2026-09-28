import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const BrowserCompatibilityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Browser Compatibility Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your product works across all versions of web browsers with our high-quality compatibility services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you have a web application that you want to work across multiple web browsers? Are you looking to check the compatibility of your application to ensure it works correctly across all different browsers? If so, we can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a top browser compatibility testing company with extensive experience in providing comprehensive solutions to clients worldwide. We have on board highly experienced testers who have worked on numerous projects to ensure our clients’ apps work exceptionally well across all the most-used and even lesser-known browsers. We make sure your users are not restricted to using only a specific browser to access your application.
            </p>
          </div>

          {/* Why Test Browser Compatibility? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Browser Compatibility Testing Matters
            </h3>
            <p className="text-gray-700 leading-relaxed">
              With countless browsers, versions, and platforms available, it can be difficult to narrow down which ones to test. The entire project team—including business analysts, marketing, and QA—must invest significant time, money, and infrastructure. This can become costly, which is why many companies prefer to outsource this work to an experienced provider like **Nimble Acuity**. We deliver high-quality results at cost-effective rates, so your design and development teams can make the required changes efficiently.
            </p>
          </div>

          {/* Browser Compatibility Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Browser Compatibility Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As a leading provider of browser compatibility testing services, our solutions include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Manual Browser Compatibility Testing</h4>
                <p>With manual testing, our testers run test cases on different browsers to observe your application’s behavior and report any bugs. While this method can be time-consuming and expensive for a large number of browsers, it ensures meticulous, human-led verification of your app’s functionality on the most critical browsers you need to support.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Automated Browser Compatibility Testing</h4>
                <p>This method automates the repetitive task of running the same test cases across many different browsers. We use the latest tools to make the process quicker and more cost-effective. Some of the tools we use for automated testing include: **LAMBDATEST**, **CrossBrowser Testing**, **experitest**, **Selenium**, **BrowserStack**, and **browserling**.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Choosing us as your browser compatibility testing partner offers numerous advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> We provide extremely cost-effective services, ensuring you get the most value for your money.</li>
              <li><strong>High-quality Services:</strong> Our ISO 9001:2015 certification is a testament to our commitment to providing high-quality services.</li>
              <li><strong>Experienced Team:</strong> Our team is highly experienced and has successfully delivered numerous browser compatibility testing projects.</li>
              <li><strong>Superb Infrastructure:</strong> We operate from world-class office spaces equipped with biometric access and 200% power backup.</li>
              <li><strong>Tools and Technologies:</strong> We provide access to expert testers who use the latest and best testing tools and technologies.</li>
              <li><strong>Structured Process:</strong> We use a structured and streamlined process for the delivery of all our services.</li>
              <li><strong>Data Security:</strong> We take the security of our clients’ data very seriously and will never divulge it to any third party.</li>
              <li><strong>Short Turnaround:</strong> Our services are always provided within very quick turnaround times.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your Web Application Works for Everyone?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of browser compatibility testing services to a global clientele. Our team of expert testers has substantial experience and expertise in performing high-quality testing for a variety of needs. We always deliver superior-quality services at cost-effective rates and within quick turnaround times.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default BrowserCompatibilityTesting;