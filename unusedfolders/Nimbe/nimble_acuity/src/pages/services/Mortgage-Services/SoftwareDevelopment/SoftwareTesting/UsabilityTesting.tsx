import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const UsabilityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Usability Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Know how easily your system can be used by end-users by outsourcing usability testing to our expert team of software testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unsure if your software application will be easy for your end-users to use? Are you struggling to find the right set of experienced and skilled usability testing experts who can cater to your needs? Then, the best option for you would be to outsource usability testing services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading usability testing service provider that can take care of your usability testing services for mobile and web applications. We have some of the most qualified and experienced usability testing specialists who leverage the power of the latest usability testing tools and software to deliver top-notch services.
            </p>
          </div>

          {/* Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Usability Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been a leading provider of moderated usability testing services to clients around the world for over 26 years now. Our vast experience allows us to understand each client’s unique testing requirements and provide them with services that suit their business needs. Some of the key usability testing services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Remote Usability Testing:</span> Testers remotely access the software system under test, and their activities, screen activity, and expressions are recorded. Observers then analyze this data and report their findings. Our team can help you with quality remote usability testing services with a quick turnaround time.
              </li>
              <li>
                <span className="font-semibold">Laboratory Usability Testing:</span> This testing is conducted in a dedicated laboratory in the presence of observers. Testers are assigned specific tasks, and the observers analyze their behavior to report the results of the usability testing exercise. Our team can provide you with the required laboratory usability testing services.
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Usability Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Usability testing provides clients with a series of benefits for both the software development company and the end-users. Some of the key benefits are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>It provides the software with a better user experience.</li>
              <li>It helps save time for both the users and the developers.</li>
              <li>It provides key insight into customer satisfaction after using the software.</li>
              <li>It helps determine an unbiased examination of the software system.</li>
              <li>It identifies defects in the system that would not have been obvious otherwise.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Usability Testing?
            </h3>
            <p className="text-700 leading-relaxed mb-4">
              Outsourcing usability testing services to us can give you access to a series of benefits. Some of the key reasons to choose us as your usability testing company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing:** Our pricing options are affordable and will suit your business requirements and budget perfectly.</li>
              <li>**Information Security:** We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your information is safe with us at all times.</li>
              <li>**Skilled Testers:** Our team comprises some of the most qualified and experienced usability testing experts who leverage the latest tools to deliver high-quality services.</li>
              <li>**High-Quality Services:** As an ISO-certified organization, all services delivered by us are of the best quality and undergo a thorough quality assurance process.</li>
              <li>**Dedicated Manager:** We will assign a dedicated manager who will be your single point of contact and can resolve any issues you may have.</li>
              <li>**Easily Scalable:** We have the bandwidth and resources to easily scale up the service requirements and expand the number of resources as needed.</li>
              <li>**Short Turnaround Time:** Our team works from different delivery centers across the globe, allowing us to deliver quality services with a quick turnaround time.</li>
              <li>**State-of-the-art Infrastructure:** We have access to the latest usability testing tools and world-class office spaces.</li>
              <li>**Round-the-Clock Support:** Our teams are always available to resolve any issue you may have via phone or email.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality usability testing and other software testing services to global clients. We have some of the most qualified and experienced usability testing experts on board who can take care of your requirements with ease. We leverage the latest usability testing tools and technologies and deliver quality services with a quick turnaround time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and cost-effective usability testing service provider? Then your search ends here. Get in touch with us today!
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

export default UsabilityTesting;