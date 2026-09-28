import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MobileAppDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              IT Staffing for Mobile App Developers
            </h2>
            <p className="text-lg text-gray-600">
              Find and hire top-tier mobile app developers to build intuitive, highly functional, and optimized applications for your business.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With the growing popularity of smartphones and lower data costs, the mobile app development market is booming. Businesses across all industries are investing in mobile applications for greater reach and to fight growing competition.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we cater to businesses globally by creating apps that are intuitive, highly functional, and perfectly represent their brand. We provide staffing for a wide range of mobile app development needs, including Android, iOS, iPad, and Windows mobile apps.
            </p>
          </div>

          {/* Staffing Options */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Staffing Options for Mobile App Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              With over 26 years of experience, we have catered to more than 18,488 clients. Our staffing solutions for mobile app developers span a wide range of flexible options:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Part-time Mobile App Developers:</strong> Hire developers to work on your project on a part-time basis.
              </li>
              <li>
                <strong>Full-time-equivalent (FTE) Developers:</strong> Hire a developer full-time for lengthy projects without the burden of recruitment.
              </li>
              <li>
                <strong>Short-term & Long-term Developers:</strong> We offer resources for both short-term assignments with specialized skills and long-term projects requiring dedicated attention.
              </li>
              <li>
                <strong>Contracts with Option-to-hire:</strong> You can start with a contract and easily convert your assigned developers into full-time employees.
              </li>
              <li>
                <strong>Direct Recruiting:</strong> We will help you directly hire experienced mobile app developers based on your skill requirements.
              </li>
              <li>
                <strong>Consulting:</strong> Consult with one of our experienced professionals on a short or long-term basis for all project-related work.
              </li>
              <li>
                <strong>Specialty Staffing:</strong> Our specialty staffing solution is designed to meet any unique hiring requirements you may have.
              </li>
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mobile App Development Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Every professional on our team is an expert with a mandatory industry experience of at least 5 years. We ensure that our staff is creative and passionate about catering to end-users while highlighting your brand's products and services. Our IT staffing for mobile app development consists of certified specialists, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>iOS Developers:</strong> Our developers specialize in creating robust business applications for Apple and iOS users, with a proven track record of getting apps on the Apple store.
              </li>
              <li>
                <strong>Android Developers:</strong> We are at the forefront of Android app development, creating thousands of collective apps in categories like e-commerce, real estate, games, and more.
              </li>
              <li>
                <strong>Mobile App Designers:</strong> Our creative team of UI/UX experts ensures every app is well-optimized for an intuitive user experience and follows the specific OS design language.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mobile devices are taking over internet marketing. Without a responsive website and a mobile app, any business risks losing out to the competition. At **Nimble Acuity**, we have been delivering the best in mobile app development for a long time. Our experience, expertise, and passion give you these advantages:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Complete Dedication:</strong> Full-time resources are dedicated to your project when required.</li>
              <li><strong>Customized Development:</strong> We provide precisely customized mobile app development.</li>
              <li><strong>Efficient Reporting:</strong> Our features allow for frequent reporting and efficient task monitoring.</li>
              <li><strong>High-Quality Coding:</strong> We adhere to the highest standards of coding and quality.</li>
              <li><strong>Latest Technologies:</strong> We use standard development methods and the latest technologies.</li>
              <li><strong>Dedicated Project Manager:</strong> You get a single point of contact for all project status updates.</li>
              <li><strong>Affordable Rates:</strong> Our packages offer cost savings and competitive rates.</li>
              <li><strong>Timely Delivery:</strong> We ensure timely delivery and deployment of your applications.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire Mobile App Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading mobile app development and staffing service provider. We work with businesses across all industry verticals, offering a one-stop solution for all your mobile app development needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today for your mobile app development staffing needs and get access to skilled, experienced, and passionate professionals.
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

export default MobileAppDevelopers;