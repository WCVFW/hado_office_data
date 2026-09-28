import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ReliabilityTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Reliability Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Check if your software is reliable and can prevent failure when subjected to extreme environments.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is Reliability Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Are you unable to find out if your software application will function without any errors in a particular environment? Are you looking for in-house reliability testing specialists to handle your needs? Then, the best option for you would be to outsource reliability testing to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading reliability testing service provider that can take care of all your requirements with ease. Reliability testing helps in identifying if the system can perform without any failures for a certain period in a given environment, ensuring that your software application is flawless and reliable for its intended purpose.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Reliability Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a leading provider of reliability testing services for over two decades. Our vast experience enables us to understand each customer's specific requirements and provide them with customized services that align with their business objectives. Our key reliability testing services include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Feature Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Feature Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Feature testing ensures each operation is executed and functions properly, while minimizing interaction between operations. We have the skills to provide accurate feature testing services.
                </p>
              </div>
              
              {/* Load Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Load Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Load testing helps identify performance issues of an application when subjected to maximum load. Our team can help you with quick and effective load testing services.
                </p>
              </div>

              {/* Regression Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Regression Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Regression testing checks if new bugs have been introduced while fixing old ones. Our team has the expertise to handle all your regression testing needs at every stage of the development cycle.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-700 leading-relaxed mb-4">
              Partnering with **Nimble Acuity** for reliability testing gives you access to a plethora of benefits. Some of the major factors for choosing us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing:</strong> Our cost-effective and flexible pricing options are tailored to fit your budget and business requirements.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is kept safe in secure locations and is never divulged to unauthorized parties.</li>
              <li><strong>High-Quality Services:</strong> We are an ISO-certified organization, and all our services go through a multi-level quality assurance process to ensure the best results.</li>
              <li><strong>Experienced Testers:</strong> We have a team of highly experienced and skilled specialists who can take care of all your needs with ease.</li>
              <li><strong>Dedicated Project Manager:</strong> You will be assigned a dedicated project manager who will be your single point of contact throughout the project.</li>
              <li><strong>Scalable Services:</strong> We have the bandwidth to scale up service requirements and team size as and when you need it.</li>
              <li><strong>24/7 Support:</strong> Our teams are available around the clock via email or phone to answer your queries.</li>
              <li><strong>Shorter Turnaround Times:</strong> Our global presence enables us to deliver superior quality services within a quick turnaround time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your Software's Reliability?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality reliability testing and a plethora of other software testing services to clients around the globe. We leverage the best reliability testing tools and software to deliver top-notch services every single time. Our team comprises some of the most qualified and experienced specialists who can take care of all your needs in a hassle-free manner.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for an efficient and cost-effective reliability testing service provider, then your search ends here. Get in touch with us today!
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

export default ReliabilityTestingServices;