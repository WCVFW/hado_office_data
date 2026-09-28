import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const CompatibilityTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Compatibility Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your application tested on different computing environments to ensure flawless performance.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unsure if your software application will function as expected on different operating systems and environments? Are you finding it difficult to source the right set of resources who can handle your compatibility testing requirements? Then, the best step for your firm would be to outsource compatibility testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading compatibility testing service provider that can take care of all your requirements. Compatibility testing is a type of testing to check whether your software is capable of running on different hardware, operating systems, network environments, and applications. We have some of the most experienced and reliable compatibility testing experts on board who can cater to all your needs with ease.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Compatibility Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been catering to the compatibility testing needs of global clients for over two decades now. We have gained enough experience to understand each client's unique requirements and provide them with services that are customized to their needs. Some of the key software compatibility testing services we provide include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hardware & OS */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Hardware & Operating System Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We check the compatibility of your software application with different hardware configurations and various operating systems such as Windows, Mac OS, and Unix to ensure it runs accurately.
                </p>
              </div>
              
              {/* Software & Browser */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software & Browser Compatibility</h4>
                <p className="text-gray-700 leading-relaxed">
                  We check the compatibility of your application with other software and different browsers like Google Chrome, IE, Firefox, and more.
                </p>
              </div>

              {/* Network & Mobile */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Network & Mobile Compatibility</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team helps you check the software's performance on a network with different parameters and its compatibility across various mobile devices with varying screen sizes, resolutions, and capacities.
                </p>
              </div>
              
              {/* Device & Version */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Devices & Software Version Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  This type of testing is done to check the software's compatibility with devices such as printers and scanners, as well as with different versions of the software.
                </p>
              </div>
            </div>
          </div>
          
          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Compatibility Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Being one of the leading compatibility testing service providers, we believe in providing quality services to clients within quick turnaround time. This is possible by following a streamlined and systematic process. Some of the key steps involved in our process are:
            </p>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li>**Environment/Platform Identification:** In the first step, the environment or platform is identified and defined on which the software application will work.</li>
              <li>**Test Case Design:** Once the environment is identified, the test cases are designed and configured by our experienced team.</li>
              <li>**Establish the Test Cases:** Once the test cases are designed, the team will establish the test environment in which the compatibility of the software will be tested.</li>
              <li>**Result, Analysis, & Reporting:** The test cases are executed by our testing team and any discovery of a new bug or error is recorded and reported to the concerned team.</li>
              <li>**Retesting:** The issues discovered in the previous step are rectified and the software application is retested to check if they have been resolved.</li>
            </ul>
          </div>
          
          {/* Benefits of Compatibility Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Compatibility Testing Services
            </h3>
            <p className="text-700 leading-relaxed mb-4">
              Compatibility testing has a series of benefits both for the development team as well as the product's end-users. Some of the key benefits are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It helps to fix the issues on time.</li>
              <li>It helps in improving the software development procedure.</li>
              <li>It enables in meeting the user expectations and profitability.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Compatibility Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing compatibility testing services to **Nimble Acuity** can get you access to a series of benefits that you can take advantage of. Some of the major reasons for you to choose us as your compatibility testing company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> We provide highly flexible and affordable pricing options that go well with your budget.</li>
              <li><strong>Talented Testers:</strong> Our team comprises some of the most qualified and skilled compatibility testing experts.</li>
              <li><strong>Superior Quality Services:</strong> We are an ISO-certified organization, ensuring all services delivered are of the best quality.</li>
              <li><strong>Data Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, all your data is kept safe and secure.</li>
              <li><strong>Scalable Services:</strong> We have the required skills and expertise to scale up the team size as and when needed.</li>
              <li><strong>SPOC:</strong> We assign a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the latest and best compatibility testing tools and software.</li>
              <li><strong>Quicker Turnaround Times:</strong> Our global delivery centers allow us to deliver top-quality services within a quick turnaround time.</li>
              <li><strong>24/7 Support:</strong> Our teams are available around the clock to answer your queries via phone or email.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your Software's Compatibility?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been one of the leading providers of compatibility testing services and a plethora of other software testing services to global clients. We have some of the most qualified and experienced compatibility testing specialists on board who can take care of all your requirements in a hassle-free manner. We leverage the power of the best compatibility testing tools and deliver top quality services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and reliable compatibility testing service providing company? Then you have come to the right place. Get in touch with us today!
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

export default CompatibilityTestingServices;