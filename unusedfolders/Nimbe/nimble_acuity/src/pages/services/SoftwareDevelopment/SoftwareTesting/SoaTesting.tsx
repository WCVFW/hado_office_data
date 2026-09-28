import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const SoaTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Service-Oriented Architecture Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure flawless performance and security for your integrated business applications with our expert SOA testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to get the different business application modules of your software system tested before it is released to the market? Are you unable to find the right resources to handle your service-oriented architecture (SOA) testing requirements? The best step for your firm is to outsource SOA testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of SOA testing services that can cater to all your needs. Our team of qualified and experienced SOA testers leverages the latest tools and software to deliver top-notch services every single time, ensuring your applications are ready for deployment.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Service-Oriented Architecture Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Having served clients globally for years, we've gained the experience to understand each client's unique requirements and provide customized services. Some of the key SOA testing services we offer include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Functional Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Functional Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We have the skills to identify flaws in your software application's functionalities. Our services ensure that errors are quickly identified and corrected, helping you maintain a seamless user experience.
                </p>
              </div>

              {/* Security Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Security Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Security testing is one of the most crucial aspects of SOA testing. We have the expertise to handle all your security testing requirements with ease, ensuring your software application is free from external threats.
                </p>
              </div>
              
              {/* Performance Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Performance Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team has the talent and experience to handle your performance testing needs. We ensure your application maintains its efficiency and responsiveness even when subjected to different loads and environments.
                </p>
              </div>
              
              {/* Regression Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Regression Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Regression testing checks that no new bugs are introduced while fixing old ones. We have the skills and experience to handle all your regression testing requirements in a completely hassle-free manner.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of SOA Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Service-Oriented Architecture testing offers numerous benefits for both the development team and the end-user. Some of the major advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Reusable services</li>
              <li>A highly reliable testing method</li>
              <li>Easily scalable processes</li>
              <li>Simplified service maintenance</li>
              <li>Platform-independent testing</li>
              <li>Increased productivity</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for SOA Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your SOA testing to us provides you with a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable and Flexible Pricing:** Our cost-effective pricing options are tailored to fit your business requirements and budget perfectly.</li>
              <li>**Data Security:** We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your data is kept completely safe and handled only by authorized personnel.</li>
              <li>**Skilled SOA Testers:** Our team of qualified and experienced testers is trained to work with the latest tools and technologies to deliver superior quality services.</li>
              <li>**Dedicated Project Manager:** You will be assigned a single point of contact to handle all your needs and resolve any issues you may have.</li>
              <li>**Easily Scalable Services:** We have the skills and bandwidth to quickly scale up service requirements and increase resources as your needs change.</li>
              <li>**Best Infrastructure:** We have access to the latest SOA testing tools and international-standard office spaces.</li>
              <li>**24/7 Support:** Our teams are available around the clock to answer your queries via phone or email.</li>
              <li>**Quick Turnaround Times:** Operating from delivery locations in different time zones, we leverage a time zone advantage to deliver services within a short turnaround time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leader in providing quality SOA testing and a wide range of other software testing services to global clients. Our team of talented and experienced SOA testing experts can handle all your requirements with ease. By leveraging the latest tools and software, we deliver top-notch services every time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and cost-effective SOA testing service provider? Your search ends here. Get in touch with us today!
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

export default SoaTesting;