import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ArabicAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Arabic App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              With over 500 million daily internet users in the Arab and Gulf region, Nimble Acuity offers original and compelling Arabic apps for this fast-growing market.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At Nimble Acuity, we believe that making a great Arabic app doesn't just require stellar code and beautiful aesthetics; it also demands an in-depth understanding of the language and regional culture. We have considerable experience in developing native, multilingual Arabic apps for iOS and Android that target the Middle East and North African Arabic speakers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We have worked with numerous companies in the UAE and developed government-licensed apps based out of Saudi Arabia, UAE, and Qatar. Our Arabic mobile application development capabilities span a wide range of categories, from business and education to entertainment and e-commerce. Share your app idea with us, and we'll develop a bilingual or multilingual app in a language of your choice.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Arabic App Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our expertise covers the entire spectrum of Arabic app development, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Arabic Educational Apps</h4>
                <p className="text-gray-700">We create engaging educational apps with culturally relevant content and seamless RTL functionality.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Arabic B2B Apps</h4>
                <p className="text-gray-700">Our B2B applications are built to streamline business processes, ensuring a robust and secure platform for your enterprise.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Arabic Apps for Governments</h4>
                <p className="text-gray-700">We develop government-licensed apps that adhere to all local laws and regulations, with a focus on security and public service.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Arabic e-commerce Apps</h4>
                <p className="text-gray-700">Our e-commerce apps are designed to provide a seamless shopping experience for the Arab market, with secure payment gateways and intuitive navigation.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Arabic Game Apps</h4>
                <p className="text-gray-700">We develop captivating games tailored to the preferences of Arabic-speaking users, complete with culturally appropriate themes and design.</p>
              </div>
              {/* Solution 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">e-Learning Apps in Arabic</h4>
                <p className="text-gray-700">We create comprehensive e-learning solutions with high-quality content and an interface optimized for Arabic readers.</p>
              </div>
            </div>
          </div>

          {/* Development Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              How We Take Care of the Details
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Decades of experience have taught us that no two apps are the same, and that language and culture are critical to success. Our expertise extends to the following:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>RTL Navigation:</strong> We ensure that right-to-left navigation is properly incorporated throughout the app for a comfortable user experience.</li>
              <li><strong>Font Usage and Arabic Typesetting:</strong> Arabic characters require a different approach to layout. We make judicious use of white spaces and ensure the typesetting is comfortable for Arabic readers.</li>
              <li><strong>Bilingual/Multilingual Apps:</strong> We ensure that the transition between languages is seamless and conflict-free, even for complex multilingual apps.</li>
              <li><strong>Image Selection:</strong> We carefully select and position images for the Arabic version, avoiding simple horizontal flips that can create UI/UX issues.</li>
              <li><strong>Cultural Influence:</strong> Our development process respects the unique cultural aspects of all Arabic-speaking nations, ensuring strict compliance with local laws and regulations.</li>
              <li><strong>Strict Quality Checks:</strong> All our apps undergo thorough in-house and client-side checks to ensure all requirements are met before launch.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              High-quality Arabic app development requires the right mix of talent, knowledge, and design. Our key differentiators include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Expert Team:</strong> Our team is comprised of highly-qualified Arabic app developers with years of relevant experience.</li>
              <li><strong>Expertise in Diverse Platforms:</strong> We develop innovative and robust mobile apps for iOS and Android to meet diverse business needs.</li>
              <li><strong>Agile Development Process:</strong> Our Agile approach ensures a flexible and collaborative development process.</li>
              <li><strong>Cost-Effective Pricing:</strong> We offer flexible pricing models that provide excellent value for your investment.</li>
              <li><strong>On-Time Delivery:</strong> We are committed to delivering your project on time, every time, without compromising on quality.</li>
              <li><strong>Seamless Communication:</strong> We establish unique communication channels to ensure you are involved and informed throughout the development process.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity for Exceptional Arabic App Development Services
            </h3>
            <p className="text-gray-700 mb-6">
              Our mobile app development expertise covers the entire gamut of enterprise, entertainment, gaming, and service industries. Our proficiency in Arabic app development ensures a significant return on investment for our clients. Whether you need a native app or a bilingual one, we can develop it all according to your requirements and within a tight schedule.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us for high-quality Arabic app development services that are culturally relevant and expertly engineered.
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

export default ArabicAppDevelopmentServices;