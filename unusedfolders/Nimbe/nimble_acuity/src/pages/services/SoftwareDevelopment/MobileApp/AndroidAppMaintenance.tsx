import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AndroidAppMaintenance: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Android App Maintenance Services
            </h2>
            <p className="text-lg text-gray-600">
              We provide transparent, highly professional, and reliable Android app support to keep your applications running seamlessly.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Most eCommerce or online businesses today have customer-facing Android applications for providing simpler and enhanced user experiences. The app needs to be agile, up-to-date, and bug-free to increase the number of active users and retain them for longer.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of Android app maintenance services. We have a team of experienced and passionate application design and maintenance experts, UI/UX developers, and other specialists to provide complete Android support and maintenance for a superlative user experience.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Android Mobile App Maintenance and Support Services We Provide
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>App System Monitoring:</strong> Our team deploys the latest tools to monitor your core mobile app functions for ensuring maximum uptime.</li>
              <li><strong>Upgrading the Mobile App:</strong> We handle upgrades and app additions, performance optimization, and refactoring of deprecated code.</li>
              <li><strong>Pre-launch App Maintenance:</strong> We offer support before launch in terms of setting file permissions, safeguarding the root account, and managing error reporting.</li>
              <li><strong>Post-launch App Support:</strong> Our team offers routine support services like security updates, app repair, bug fixing, and UI performance enhancement.</li>
              <li><strong>Third-party App Maintenance Services:</strong> We offer value-added third-party integration services to improve the app's performance and value.</li>
              <li><strong>Bug Tracking and Fixing:</strong> We provide cutting-edge services, undertaking thorough testing, and source code management to fix site crashes and bugs.</li>
              <li><strong>App Security Management:</strong> Our team takes app security very seriously, ensuring regular monitoring for any security breaches and deploying best-in-class security tools.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Below are the major reasons that make us experts in the industry for Android app support:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Assured Revenue Growth:</strong> Our superlative management and maintenance enhance overall productivity and user experiences, resulting in a higher app ROI.</li>
              <li><strong>Affordable Rates:</strong> We believe in offering reliable and cost-effective solutions for all businesses.</li>
              <li><strong>Passionate & Dedicated Team:</strong> We assign the right specialists who can offer best-in-class output for your exact project requirements.</li>
              <li><strong>Faster Turnarounds:</strong> Our standardized processes and robust technological support allow us to offer quick turnaround times for all maintenance and support needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your App's Success?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has extensive experience in app development and maintenance. We have a team of experienced professionals who focus on providing highly professional and reliable Android app support. Our team continuously monitors the health of your mobile application and ensures seamless functioning by resolving day-to-day issues and ensuring complete security.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with one of our experts today to get started and ensure your app's long-term success.
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

export default AndroidAppMaintenance;