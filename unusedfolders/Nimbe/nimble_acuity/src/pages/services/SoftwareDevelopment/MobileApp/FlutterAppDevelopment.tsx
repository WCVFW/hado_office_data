import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const FlutterAppDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Flutter App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Create robust, feature-rich, and cross-platform apps. Achieve quicker time to market, and save time and costs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to create cutting-edge applications for desktop, mobile, and web platforms? Do you have an app idea and want to design and develop it as soon as possible to gain a competitive edge in your market? If so, it would be a terrific idea to use the Flutter SDK's features.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Developers can now create feature-rich applications from a single codebase using Google's free and open-source **Flutter** app development framework. **Nimble Acuity** is a leading Flutter app development company and can assist you in utilizing all of Flutter's features and functionalities to develop apps that work flawlessly across platforms.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Flutter App Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a leading Flutter app development company, we provide a comprehensive range of Flutter design and development services.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flutter Consulting Services:</strong> We provide comprehensive Flutter app consulting services, from strategy to deployment.</li>
              <li><strong>Cross-Platform App Development:</strong> Our Flutter cross-platform development solutions are feature-packed and provide high performance across both iOS and Android platforms.</li>
              <li><strong>Flutter App Design Services:</strong> Our seasoned UI/UX experts provide the most compelling and engaging app design services using Flutter.</li>
              <li><strong>Flutter App Upgrade:</strong> We can help you seamlessly upgrade your app to the latest version or migrate your existing app to the Flutter framework.</li>
              <li><strong>Custom Flutter App Development:</strong> We build feature-rich and custom Flutter apps that perform seamlessly and efficiently across all supported devices and operating systems.</li>
              <li><strong>API Development & Integration:</strong> Our skilled Flutter developers have a wealth of knowledge and proficiency in integrating a broad range of APIs into Flutter projects.</li>
              <li><strong>Flutter App Migration:</strong> Our Flutter developers will easily migrate any existing app to the Flutter framework.</li>
              <li><strong>Flutter Development for iOS:</strong> We have years of expertise building a range of apps that work without a hitch on iOS devices.</li>
              <li><strong>Flutter Development for Android:</strong> You can rely on our skilled Flutter developers to turn your app concepts into sturdy, high-performance Flutter apps for Android.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Flutter App Development Process We Follow
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We provide world-class app design and development services because we follow a tried and tested process. Our process includes the following key steps:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>We begin by understanding your business, goals, products, and more.</li>
              <li>We create a blueprint and finalize the technology stack at this stage.</li>
              <li>While we develop the app, we keep our customers in the loop, asking for feedback and incorporating their suggestions.</li>
              <li>We then perform stringent testing of the app and further fine-tune it for performance.</li>
              <li>We then deploy the app.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Are We The Preferred Flutter Development Company?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are many reasons for you to choose us as your Flutter app development company. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Experienced Team:</strong> Our Flutter team has decades of industry experience that allows them to provide superior services.</li>
              <li><strong>High-quality Services:</strong> Our ISO certification assures you that we have the necessary processes in place to consistently deliver high-quality services.</li>
              <li><strong>World-class Infrastructure:</strong> We make use of modern and world-class infrastructure facilities, including powerful and modern workstations.</li>
              <li><strong>Data Security:</strong> We consider data security to be a top priority. Our ISO/IEC 27001:2022 ISMS certification ensures that your data will be handled in a highly secure fashion.</li>
              <li><strong>Single Point of Contact:</strong> A dedicated project manager shall always be at hand to answer any of your queries.</li>
              <li><strong>Easily Scalable:</strong> We can scale our services up or down to help you more effectively deal with changing conditions.</li>
              <li><strong>Short Turnaround:</strong> Our Flutter app development team always works to shorten the time needed to deploy your Flutter apps.</li>
              <li><strong>Affordable Pricing Options:</strong> Our Flutter development services are extremely reasonably priced and transparent, providing top-quality services at highly cost-effective rates.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your App Development?
            </h3>
            <p className="text-gray-700 mb-6">
              As a leading Flutter app development company, we offer a rapid, adaptable, and efficient approach that allows us to release high-caliber apps within quick turnaround times. Our committed team will apply their knowledge to create high-performance apps that offer the greatest user experience.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To design a Flutter app for your company and hasten its growth and success, get in touch with us right away.
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

export default FlutterAppDevelopment;