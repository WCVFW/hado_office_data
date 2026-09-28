import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const TestingKnowledgeManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Testing Knowledge Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Record, share, and distribute knowledge to create a competitive edge with our experienced team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Improve Your Software Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Are you looking for ways to improve your software testing process and influence testing models and methods? Do you need the right resources to manage your testing knowledge management requirements? Then, the best option is to partner with us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a premier testing knowledge management service provider that can be your one-stop-shop for all your needs. We help you utilize previous testing project experience to accelerate the process and significantly reduce costs. We leverage the power of the latest KM tools to deliver top-notch services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Testing Knowledge Management Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a leading provider of testing knowledge management services to clients around the globe for over two decades. We understand each client's unique requirements and provide customized solutions. Some of the key processes we can help you with include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mapping and Organizing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mapping and Organizing Knowledge</h4>
                <p className="text-gray-700 leading-relaxed">
                  We help you map and organize all your existing and relevant knowledge to make it easily accessible and useful.
                </p>
              </div>
              
              {/* Creating Training Platform */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Creating a Training Platform</h4>
                <p className="text-gray-700 leading-relaxed">
                  We create a detailed training platform where your software testers can learn at their own pace.
                </p>
              </div>

              {/* Knowledge Overview */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Knowledge Overview of Your Team</h4>
                <p className="text-gray-700 leading-relaxed">
                  We create a detailed knowledge overview of your testing team, helping you identify strengths and areas for improvement.
                </p>
              </div>
              
              {/* Developing Training Module */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Developing Training Modules</h4>
                <p className="text-gray-700 leading-relaxed">
                  We develop training modules that cover various testing methodologies and the different systems under test.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnering with **Nimble Acuity** for your testing knowledge management needs provides you with a series of key benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> Our services are highly cost-effective and tailored to suit your business requirements and budget.</li>
              <li><strong>Experienced Testing Team:</strong> Our team comprises some of the most qualified testing knowledge management specialists who can handle all your needs with ease.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your data is always kept safe and handled only by authorized personnel.</li>
              <li><strong>Quicker Turnaround Times:</strong> Our global team operates through several delivery locations, enabling us to deliver top-quality services within a shorter period.</li>
              <li><strong>Single Point of Contact (SPOC):</strong> When you choose us, we will assign a dedicated manager to you, serving as your single point of contact for all your needs.</li>
              <li><strong>24/7 Support:</strong> Our teams, including customer support, are available around the clock to resolve any of your queries.</li>
              <li><strong>Easily Scalable Services:</strong> We have the required skills and expertise to ramp up the number of resources on the project as and when you need it.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Testing Knowledge?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing top-quality testing knowledge management and a series of other software testing services to global clients. We have some of the most talented and skilled software testers on board who can handle all your testing knowledge management needs. We leverage the latest tools and software to deliver top-notch services to clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and cost-effective testing knowledge management service provider, your search ends here. Get in touch with us today!
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

export default TestingKnowledgeManagementServices;