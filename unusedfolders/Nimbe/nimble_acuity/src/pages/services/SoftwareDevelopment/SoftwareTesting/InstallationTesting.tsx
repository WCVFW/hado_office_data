import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const InstallationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Installation Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Verify and validate if your software has been installed with all the necessary components by outsourcing installation testing to experienced QAs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is it too cumbersome to verify and validate if your software has been installed correctly as expected? Is your organization finding it difficult to get the right set of experienced and skilled installation testing experts to handle your requirements? Then, the best option for you would be to outsource installation testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading installation testing service provider that can take care of all your requirements with ease. We have some of the most talented and skilled installation testing specialists who can work on the latest and best tools and software to deliver top-notch services to clients within a quick turnaround time.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Installation Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been one of the leading providers of installation testing services to global clients for over two decades. Our vast experience allows us to understand each customer’s unique requirements and provide them with customized services that will suit their business needs. Some of the key installation testing services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <span className="font-semibold">Silent Installation Testing:</span> We help you with silent installation testing where messages are saved in a log file instead of being displayed.
              </li>
              <li>
                <span className="font-semibold">Attended Installation Testing:</span> We provide accurate testing for installations that require user input, such as selecting a directory or accepting a license agreement.
              </li>
              <li>
                <span className="font-semibold">Unattended Installation Testing:</span> Our team can help you with accurate unattended installation testing services, which involve no user involvement.
              </li>
              <li>
                <span className="font-semibold">Headless/Network Installation Testing:</span> We provide accurate testing for installations that don't require a console and are carried out on networked systems.
              </li>
              <li>
                <span className="font-semibold">Clean Installation Testing:</span> Our team can help you with flawless clean installation testing for first-time installations.
              </li>
              <li>
                <span className="font-semibold">Automated Installation Testing:</span> We have the required skills to help clients with accurate automated installation testing within a quick turnaround time.
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Installation Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Installation testing is one of the most important types of software testing. It ensures that the software application and all its modules have been successfully installed and are functioning as expected. Some of the key benefits are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It ensures that no module or unit of the software is left untouched during the testing process.</li>
              <li>It is a crucial part of the software testing life cycle, as it follows industry and client-set standards.</li>
              <li>It helps to check if all versions of the software are updated and prompts for the latest version if needed.</li>
              <li>The outputs of the installation testing process are key indicators of the software system's performance.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Installation Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing installation testing services to **Nimble Acuity** gives you access to a plethora of benefits. Some of the major reasons for you to choose us are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing:** Our highly affordable and cost-effective pricing options will suit your business requirements and budget.</li>
              <li>**Stringent Information Security:** We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe in secure locations.</li>
              <li>**Experienced Testers and QAs:** Our team comprises highly qualified and experienced specialists who can deliver error-free services.</li>
              <li>**Superior Quality:** Being an ISO-certified organization, we ensure that all services delivered are of the best quality through multi-level quality checks.</li>
              <li>**Single Point of Contact:** A dedicated project manager will be assigned to be the single point of contact for all your needs.</li>
              <li>**Highly Scalable:** We have the bandwidth and skills to scale up service requirements and expand the team size as needed.</li>
              <li>**Quick Turnaround Time:** Our team operates from several delivery centers across the globe, enabling us to deliver quality services quickly.</li>
              <li>**World-class Infrastructure:** We have access to the best workplaces and the latest installation testing tools and software.</li>
              <li>**24/7 Customer Support:** Our teams are available around the clock to resolve any issues you may have during the project.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality installation testing and a series of other software testing services to clients around the globe. We leverage the latest and best installation testing tools and software while delivering top-quality services. Our skilled and experienced experts can take care of all your needs in a hassle-free manner.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and efficient installation testing service provider? Then, your search ends here. Get in touch with us today!
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

export default InstallationTesting;