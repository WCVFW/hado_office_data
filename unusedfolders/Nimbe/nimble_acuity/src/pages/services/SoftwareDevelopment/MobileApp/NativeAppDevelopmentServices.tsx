import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const NativeAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Native App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Deliver an unparalleled user experience with native apps built specifically for a device's operating system.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Native apps provide a familiar and seamless experience for users because they are built to leverage the distinct look, feel, and features of a specific operating system. Sacrificing this familiarity with a cross-platform framework can be off-putting to users, and since apps are developed for the users, their opinion is paramount.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has been providing high-quality native mobile app development services to clients worldwide. We follow a standardized process to create functional and innovative native apps at affordable rates, and within a pre-determined budget and time frame.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Nimble Acuity's Native App Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your requirements and time-to-market predictions, we follow various app development models to ensure the project completes on time. Our key services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">iOS App Development</h4>
                <p className="text-gray-700">Our iOS developers provide highly functional and feature-rich native iOS app development services, creating distinct apps for both iPhone and iPad to ensure the best user experience.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Android App Development</h4>
                <p className="text-gray-700">With vast experience in the field, we develop high-quality native apps for the Android platform, which accounts for over 85% of the smartphone market.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Developing a Native App
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As an experienced native app development company, Nimble Acuity understands the various benefits of building a native app. Some of these advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>High Performance:</strong> Native apps perform much better as they are compiled into machine code and have direct access to device features.</li>
              <li><strong>Responsiveness:</strong> They provide a reliable, responsive, and extremely fast experience, tapping into a device's wider functionality like the camera, accelerometer, and notifications.</li>
              <li><strong>Usability:</strong> Native APIs make it easy to access expected user functions and design patterns, such as multi-touch and zoom.</li>
              <li><strong>Aspect Ratios:</strong> Developers have more control over the app's resolution, size, and orientation, ensuring it looks and works perfectly on different devices.</li>
              <li><strong>Powerful IDE Tools:</strong> Native development IDEs provide specialized tools for everything from designing to testing, and access to hardware features.</li>
              <li><strong>Standard Guidelines:</strong> Native apps are built according to standard guidelines, making the UI familiar and easy for users to navigate.</li>
              <li><strong>Native Look and Feel:</strong> These apps feel and look like default phone apps, providing a friendly and comfortable user experience.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for Native App Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our resources have access to cutting-edge technologies and state-of-the-art infrastructure to deliver high-quality, industry-standard apps. Some of the reasons to choose us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Highly Experienced Team:</strong> Our team consists of technical experts, SDK specialists, and creative designers.</li>
              <li><strong>Client-Centric Processes:</strong> We follow a completely client-centric approach to ensure your specific business needs are met.</li>
              <li><strong>Unlimited Support:</strong> We offer unlimited support and regular updates to ensure enhanced customer satisfaction.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions are highly scalable and can grow seamlessly with your business requirements.</li>
              <li><strong>Cost-Effective & High-Quality:</strong> We deliver high-quality results at cost-effective prices within the specified turnaround time.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Get Your Native App Developed by Us Today!
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has the required expertise, infrastructure, and highly qualified resources to create innovative mobile apps across various platforms such as Android, iOS, and Windows. With over a decade in the mobile app development domain, we have successfully completed numerous client projects around the globe.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you have any native mobile app development requirements, feel free to get in touch with us. We will help you navigate the process and bring your vision to life.
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

export default NativeAppDevelopmentServices;