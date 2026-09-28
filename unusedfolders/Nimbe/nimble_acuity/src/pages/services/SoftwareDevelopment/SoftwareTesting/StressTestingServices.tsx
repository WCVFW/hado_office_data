import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const StressTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Stress Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure your software can sustain high loads and stress by outsourcing stress testing to our expert team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to check the performance of your software application when it is subjected to higher loads and how it sustains it? Are you finding it difficult to find the right set of resources who can handle your stress testing requirements? Then, the best option for you would be to outsource stress testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such stress testing service provider that can cater to all your software testing needs. We have some of the most experienced and skilled stress testing experts on our team who can help you with accurate stress testing services. We make use of the latest stress testing tools and deliver top-notch services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Stress Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been one of the leading providers of stress testing services to clients around the world for over 26+ years now. Our experience enables us to understand each client's specific testing requirements and provide them with services that are customized to their needs. Some of the key stress testing services we offer include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Distributed */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Distributed Stress Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  In cases of distributed client-server systems, the testing must be conducted across all the clients from the server. Our team can help you with accurate and flawless distributed stress testing services within a quick turnaround time.
                </p>
              </div>
              
              {/* Application */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application Stress Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  This type of testing focuses on finding bugs related to network issues, performance issues, data locking, and blocking. Our team of expert stress testers can help you with accurate application stress testing services in a hassle-free manner.
                </p>
              </div>

              {/* Exploratory */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Exploratory Stress Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  In this type of stress testing, unusual scenarios are tested which may not occur in real situations. Our team can help you with all the possible exploratory tests for all kinds of unexpected scenarios within a short turnaround time.
                </p>
              </div>
              
              {/* Transactional & Systemic */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Transactional & Systemic Stress Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  This type of testing is done on one or more transactions between one or more applications, as well as on different systems connected via the same server. It helps in detecting the bugs when one application blocks data from another.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefits of Stress Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Stress Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Stress testing provides a series of benefits to the end-users as well as the product development team. Some of the key benefits are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It helps analyze the behavior of the system after failure.</li>
              <li>It helps to check if the system works under abnormal load conditions.</li>
              <li>It ensures that the system recovers after the failure.</li>
              <li>It ensures that unexpected crashes do not cause any data security issues.</li>
              <li>It verifies if the system has saved the necessary data before crashing.</li>
              <li>It ensures that it displays the necessary error message when subjected to high loads.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Stress Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing stress testing services to us can give you access to a series of benefits that you can take advantage of. Some of the key factors for you to choose us as your stress testing service provider are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Packages:</strong> Working with us for software stress testing services can be highly cost-effective and affordable.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe and not divulged.</li>
              <li><strong>Experienced Stress Testers:</strong> Our team comprises some of the most talented and experienced stress testing experts.</li>
              <li><strong>Superior Quality Services:</strong> As an ISO certified firm, you can rest assured that all the services delivered by us will be of the best quality.</li>
              <li><strong>Single Point of Contact:</strong> We will assign a dedicated project manager to you who will be the lone point of contact for all your requirements.</li>
              <li><strong>24/7 Customer Support:</strong> Our teams are available at all times via phone or email to answer your queries.</li>
              <li><strong>Quicker Turnaround Times:</strong> We operate through different delivery centers, enabling us to provide services within a quick turnaround time.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the latest stress testing tools and software and international-standard office spaces.</li>
              <li><strong>Easily Scalable Services:</strong> We have the bandwidth and expertise to scale up the resources and service requirements as and when needed.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Stress Testing Services to **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been one of the leading providers of stress testing and a plethora of other software testing services to global clients. We have some of the most talented and skilled stress testing specialists on our team who can take care of all your needs in a hassle-free manner. We leverage the power of the best and the latest testing tools and software in the industry to deliver top quality services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and cost-effective stress testing service providing company, then you have come to the right place. Get in touch with our team today!
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

export default StressTestingServices;