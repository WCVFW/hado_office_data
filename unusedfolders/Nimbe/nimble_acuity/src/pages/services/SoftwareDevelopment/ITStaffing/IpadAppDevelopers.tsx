import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const IpadAppDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire iPad App Developers
            </h2>
            <p className="text-lg text-gray-600">
              Get customized iPad applications that combine quality, economy, and speed.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The iPad is a game-changer—a mobile device that's smaller than a laptop but bigger and more functional than a mobile phone. Its popularity has only surged, and with the flawless UI and customization of iOS, ignoring this market would be a huge mistake. As a business, you need apps specifically built for the iPad's unique specs and ecosystem.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of IT staffing for iPad app developers, at the forefront of delivering bespoke mobile applications to a range of industries. When you hire iPad application developers from us, you get exceptional apps that deliver amazing customer experiences and streamline your business processes.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our iPad App Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can hire iPad developers and programmers at highly cost-effective rates. Our developers are carefully chosen based on their experience and qualifications, so they are ready to deliver from day one. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Customized iPad App Development:</strong> Our dedicated developers build amazing, custom iOS applications for iPads with outstanding features.
              </li>
              <li>
                <strong>iPad Apps for Specific Business Purposes:</strong> We build high-octane apps for e-commerce, m-commerce, or enterprise solutions that get the results you need.
              </li>
              <li>
                <strong>Industry-specific iPad App Development:</strong> We provide experts who can craft apps specifically for industries like healthcare, finance, hospitality, logistics, and more.
              </li>
              <li>
                <strong>Full-stack iOS Developers:</strong> Our full-stack iPad app developers have in-depth expertise to build both the front end and back end of apps for the iPad.
              </li>
              <li>
                <strong>iPad App UI/UX Design:</strong> We have a team of accomplished designers who can create user-friendly, engaging designs for your iPad apps.
              </li>
              <li>
                <strong>iPad App Consultation:</strong> Our experts will happily provide consultancy services, recommending the best tech stacks and guiding you through the development cycle.
              </li>
              <li>
                <strong>Upgrading iPad Apps:</strong> We provide top-notch iPad app upgrading services to maintain relevance, fix bugs, and ensure scalability.
              </li>
              <li>
                <strong>iPad QA & Testing:</strong> Our awesome testers will thoroughly test your iPad applications to ensure they are flawless and offer a seamless experience.
              </li>
              <li>
                <strong>iPad App Support & Maintenance:</strong> We provide comprehensive support and maintenance to ensure app availability, bug fixing, and troubleshooting.
              </li>
              <li>
                <strong>iPad Game Development:</strong> Our innovative and highly skilled developers can create games for entertainment or to leverage gamification for various sectors.
              </li>
              <li>
                <strong>Bilingual & AR/VR App Development:</strong> We can create bilingual apps and leverage augmented and virtual reality to create mind-blowing applications that will wow your customers.
              </li>
              <li>
                <strong>Native and Hybrid App Development:</strong> We develop both native (iOS) apps and hybrid apps that can also run on other tablets or smartphones.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you choose **Nimble Acuity** for your IT staffing needs, you get a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Expert Team:</strong> We have a team of expert developers with in-depth experience in iPad app development.</li>
              <li><strong>Top Quality:</strong> As an ISO-certified company, we guarantee top-quality products and services.</li>
              <li><strong>Affordable Rates:</strong> Our services are priced highly affordably, helping you save around 40% compared to hiring a full-fledged IT team.</li>
              <li><strong>Scalability:</strong> We offer numerous options for hiring and rapid team scaling.</li>
              <li><strong>24/7 Support:</strong> You get round-the-clock access to our services via multiple communication channels.</li>
              <li><strong>Global Delivery Centers:</strong> We can deliver our services from any of our global delivery centers.</li>
              <li><strong>Superb Infrastructure:</strong> We have a world-class infrastructure and access to the latest tools and technologies.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire iPad App Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              Tap into new markets and stay ahead of the competition with high-octane iPad apps that streamline your business and delight your customers. Hire dedicated and expert coders, engineers, and developers from **Nimble Acuity** for your entire project, specific modules, or on an hourly basis.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              We can provide a full-time offshore team—you make the decision. Contact us for a quote now.
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

export default IpadAppDevelopers;