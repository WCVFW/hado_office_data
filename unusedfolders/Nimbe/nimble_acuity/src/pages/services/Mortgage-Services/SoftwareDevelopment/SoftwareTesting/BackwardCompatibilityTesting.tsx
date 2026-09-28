import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const BackwardCompatibilityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Backward Compatibility Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure that new versions of your product work with older hardware/software configurations at prices starting from only $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for testing services for your product to ensure that new versions continue to work with older versions of hardware/software? Are you looking for a reliable and experienced provider of backward compatibility testing services that can help you ensure the compatibility of your product with older hardware/software versions? If so, you are in luck, because we are just such a provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading backward compatibility testing company and can help you with a comprehensive range of solutions. We have a team of highly experienced testers that can provide you with extremely high-quality backward testing services at cost-effective prices and within quick turnaround times. As a top backward compatibility testing service provider, we have worked with numerous clients and successfully tested a large number of software products to ensure that they are backward compatible.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Backward Compatibility Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              An application or product that has been developed for one version of a platform should, ideally, work in older versions of the platform. The testing that is done to ensure that the new product continues to work with older hardware/software is called backward testing. **Nimble Acuity** is a top provider of backward compatibility testing services and can help you with in-depth backward compatibility testing. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Compatibility Testing Services:</span> We check and verify that the old and new hardware/software versions are compatible with respect to their APIs.
              </li>
              <li>
                <span className="font-semibold">Security Verification Services:</span> We perform thorough checks to validate all the security characteristics of the hardware/software.
              </li>
              <li>
                <span className="font-semibold">Performance Verification Services:</span> We check to see whether the newer version of the hardware/software is working correctly with older components such as the battery, network configurations, hardware, etc.
              </li>
              <li>
                <span className="font-semibold">User Data Verification Services:</span> We check whether the newer version of the hardware/software affects user data or any other user information.
              </li>
              <li>
                <span className="font-semibold">Graphics Verification Services:</span> We ensure that all graphics are both appealing and provide an interactive interface, especially for mobile devices.
              </li>
            </ul>
          </div>

          {/* Benefits of Compatibility Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Compatibility Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are many reasons to perform backward compatibility testing. These include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Help Desk Cost Reduction:** Reduces future help desk costs related to providing customer support for compatibility issues.</li>
              <li>**Useful Feedback:** Provides useful feedback that enhances your software development process.</li>
              <li>**Valuable Information:** Glean useful information during the testing process regarding the stability, usability, and scalability.</li>
              <li>**Application Optimization:** Helps optimize your application for quality and ensures it meets all the requirements.</li>
              <li>**Increase in Customer Satisfaction:** With backward compatibility testing, you can improve customer satisfaction.</li>
              <li>**Standard Experience:** A well-tested product ensures that users enjoy a similar experience irrespective of the computing environment.</li>
              <li>**Positive Business Results:** A well-tested product leads to improved business results through recommendations and referrals.</li>
              <li>**Improved Reputation:** Provides you with quality products that increase your reputation.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Outsource Backward Compatibility Testing Services to **Nimble Acuity**?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing backward compatibility services to us provides you with a host of benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing Options:** Our services are extremely cost-effective and we have a solution for every budget and requirement.</li>
              <li>**High-quality Services:** We are ISO-certified and use all the latest best practices and techniques to always provide up-to-date backward compatibility testing services.</li>
              <li>**Experienced Team:** Our backward compatibility testing team has over two decades of experience in providing high-quality testing services.</li>
              <li>**Superb Infrastructure:** We provide our services from world-class office spaces equipped with biometric access and 200% power backup.</li>
              <li>**Latest Tools and Technologies:** Our team uses the latest and best tools, techniques, and technologies to provide cutting-edge services.</li>
              <li>**Structured Process:** We make use of a structured and time-tested process for the delivery of all our services.</li>
              <li>**Data Security:** Your data will always be handled with the utmost care and confidentiality.</li>
              <li>**Short Turnaround:** Our services will always be provided in a timely manner.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a pioneer in providing high-quality backward compatibility testing services to clients in India and across the world. Our team comprises highly-qualified and skilled personnel that can provide you with comprehensive backward compatibility testing services at a fraction of the price it would cost you to perform in-house. We leverage the best and latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a professional, reliable, efficient, and cost-effective provider of backward compatibility testing services, get in touch with us today!
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

export default BackwardCompatibilityTesting;