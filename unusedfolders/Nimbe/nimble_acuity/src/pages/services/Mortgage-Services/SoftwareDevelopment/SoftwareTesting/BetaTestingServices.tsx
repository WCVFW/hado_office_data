import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const BetaTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Beta Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your software application tested and validated by end-users with our comprehensive beta testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to test your software application and get it validated by your actual end-users? Are you looking for the right service provider who can help you handle your beta testing requirements? Then, the best option for you would be to outsource beta testing services to an experienced and skilled provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading beta testing service provider that can cater to all your testing needs in a hassle-free manner. We have some of the most qualified and experienced resources on board who can take care of your beta testing needs. We leverage the latest beta testing tools and deliver top-notch services to clients.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Beta Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been catering to the beta testing needs of clients around the globe for over two decades now, and have gained enough experience to handle any of the client's customizations. We deliver services that are tailored to suit the client's needs within a quick time. Some of the key beta testing services we offer include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Beta */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Traditional Beta Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  In this method, the product is distributed into the market and the relevant data is gathered from the users. The gathered data can be used further to improve the software product in the future.
                </p>
              </div>
              
              {/* Public Beta */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Public Beta Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  The software product is released to the end-users in the market through various online channels and the data is gathered from all the users. Based on the feedback received, the product is sent for further refinement.
                </p>
              </div>

              {/* Technical Beta */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Technical Beta Acceptance Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  The product is initially released to an internal team of the organization and made to use the software. The data is collected from the internal team and this data is used further to improve the software application.
                </p>
              </div>
              
              {/* Focused Beta */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Focused Beta Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  The software application is released to the market to test certain specific features of the software application. The relevant data about that particular feature is collected and used for the improvement of the application.
                </p>
              </div>

              {/* Post-release Beta */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Post-release Beta Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  The software application is released into the market and data/feedback is collected from the end-users. This data is used to improve the software application for the next release into the market.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefits of Beta Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Beta Testing Services
            </h3>
            <p className="text-700 leading-relaxed mb-4">
              There are several benefits of beta testing services, both for end-users as well as the software development team. Some of the key advantages are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It provides a complete overview of the real experiences of the end-user.</li>
              <li>It provides key insight into how the product will be used and why the users need it.</li>
              <li>It helps identify the hidden bugs and gaps in the software application.</li>
              <li>It helps to analyze the effect of known issues on the end-user.</li>
              <li>It provides real-world compatibility to a greater extent.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Beta Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing beta testing services to **Nimble Acuity** can give you access to a plethora of benefits that you can take advantage of. Some of the key reasons for you to choose us as your beta testing service provider are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Packages:</strong> Outsourcing beta testing services to us can be highly cost-effective and suit your budget.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is safe from external threats.</li>
              <li><strong>Skilled Beta Testers:</strong> We have a team of highly experienced and skilled beta testers on board who can deliver quality user acceptance testing services.</li>
              <li><strong>Superior Quality Services:</strong> As an ISO certified organization, you can be assured that all the services delivered by our team will be of superior quality.</li>
              <li><strong>SPOC:</strong> We will assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>Scalable Testing Services:</strong> We can provide clients with highly scalable automated acceptance testing services as and when the client demands it.</li>
              <li><strong>Best Infrastructure:</strong> We have access to international-standard workspaces and the latest beta testing tools and technologies.</li>
              <li><strong>24/7 Support:</strong> Our teams are available around the clock via phone or email to answer your queries.</li>
              <li><strong>Quick Turnaround Times:</strong> We operate through several delivery locations, enabling us to deliver quality services within a quick turnaround time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Get Your Software Vetted by Users?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality beta testing services and a range of other software testing services to global clients. We have some of the most talented and experienced beta testers on board who can cater to all your requirements with ease. We leverage the power of the best and latest beta testing tools and software and ensure to deliver superior quality services every single time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and cost-effective beta testing company, then you have come to the right place. Get in touch with us today!
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

export default BetaTestingServices;