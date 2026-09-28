import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const RecoveryTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Recovery Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Find out how fast your software can recover from a crash or hardware failure by partnering with **Nimble Acuity**.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is it challenging to determine how fast your software system can recover from a hardware failure or system crash? Are you unable to find the right resources who are experienced enough to handle your recovery testing requirements? Then, the best option for you would be to outsource recovery testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading recovery testing service provider that can be your one-stop-shop for all your requirements. We have some of the most qualified and experienced software testers on board who can take care of all your recovery testing needs. We make use of the latest recovery testing tools while delivering top-notch services.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Recovery Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a pioneer in providing quality recovery software testing services to clients around the globe for a long time. Our vast experience in this field enables us to understand our customer's business requirements and provide them with customized services. Some of the key recovery testing services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <span className="font-semibold">Functional Testing Services:</span> We provide high-quality functional testing using the latest tools to deliver top-notch services quickly.
              </li>
              <li>
                <span className="font-semibold">Network Testing Services:</span> We provide accurate network testing to ensure your software applications are up and running at all times.
              </li>
              <li>
                <span className="font-semibold">Security Testing Services:</span> We perform accurate security testing of your software application during its recovery stage after a crash.
              </li>
              <li>
                <span className="font-semibold">Performance Testing Services:</span> We handle all your performance testing requirements with ease, helping you understand your application's behavior during recovery.
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Recovery Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Recovery testing helps determine how quickly a software system can recover from a hardware crash or a system failure. It is usually conducted by performing a forced failure to know if the system can recover. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps detect potential risks and flaws which can lead to system crashes.</li>
              <li>It helps improve the quality of the software system by detecting and correcting flaws.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Recovery Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing recovery testing services to **Nimble Acuity** provides a series of benefits you can take advantage of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing:** Our cost-effective pricing packages are designed to suit your budget perfectly.</li>
              <li>**Data Security:** We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your data is kept completely safe.</li>
              <li>**Experienced Testers:** Our qualified and experienced recovery testing experts can take care of all your requirements with ease.</li>
              <li>**Superior Quality:** We are an ISO certified firm, and our testing process goes through multi-level quality checks.</li>
              <li>**Single Point of Contact (SPOC):** A dedicated project manager will be assigned to be the single point of contact for all your needs.</li>
              <li>**Highly Scalable:** We can easily scale up or down our services and team size based on your project requirements.</li>
              <li>**Quick Turnaround Time:** Our global presence allows us to deliver quality services within a quick turnaround time.</li>
              <li>**Best Infrastructure:** We have access to the latest recovery testing tools and international-standard workspaces.</li>
              <li>**24/7 Customer Support:** Our teams are available around the clock to resolve any issues and answer your queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality recovery testing services and a plethora of other software testing services to clients around the globe. We have some of the most talented and experienced recovery testing experts who can take care of all your requirements with ease. We make use of the latest recovery testing tools and technologies and deliver quality services to global clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and cost-effective recovery testing company? Then, your search ends here. Get in touch with us today!
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

export default RecoveryTesting;