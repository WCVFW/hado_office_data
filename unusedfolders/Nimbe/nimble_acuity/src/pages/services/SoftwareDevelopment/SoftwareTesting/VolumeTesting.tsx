import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const VolumeTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Volume Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Check how your application performs when subjected to huge amounts of data with our expert volume testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you find it challenging to test your software application when it is subjected to huge amounts of data simultaneously? Is it too difficult to find and hire an in-house volume testing team who can cater to your needs? The best option for you is to outsource volume testing services to an experienced and talented service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading volume testing service company that can handle all your requirements with ease. We have a team of qualified and certified volume testing specialists who leverage the power of the latest tools and technologies to deliver top-notch services every time.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Volume Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Having served global clients for years, we've gained the experience to understand each customer's specific requirements and provide customized services. Key volume testing services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Stopping all servers and checking all logs.</li>
              <li>Checking the data being handled by the databases.</li>
              <li>Checking the app’s performance when subjected to huge loads.</li>
              <li>Executing the application scenario before the manual load test.</li>
              <li>Analyzing the user case for improvement once a baseline has been established.</li>
              <li>Balancing think time to overcome license constraints.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Volume Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Volume testing for a software application offers a variety of benefits for both the developer and the end-user. Key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Verifying if there is any data loss.</li>
              <li>Checking if the data is stored incorrectly.</li>
              <li>Testing the software system's response time.</li>
              <li>Checking if data is overwritten without notification.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Volume Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your volume testing services to us provides you with a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing:** Our flexible pricing options are designed to suit your business requirements and budget perfectly.</li>
              <li>**Experienced Testers:** We have a team of highly skilled and certified volume testing experts who leverage the latest tools to deliver error-free services.</li>
              <li>**Superior Quality:** As an ISO-certified organization, we ensure all our services are of superior quality and undergo a thorough quality assurance process.</li>
              <li>**Data Security:** We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all your data is kept safe and secure at all times.</li>
              <li>**Dedicated SPOC:** You will have a single point of contact to handle all your queries and resolve any issues.</li>
              <li>**24/7 Support:** Our teams are available around the clock to assist you via email or phone.</li>
              <li>**Quick Turnaround Time:** Our global delivery centers provide a time zone advantage, allowing us to deliver high-quality services quickly.</li>
              <li>**Easily Scalable:** We have the resources and bandwidth to scale up service requirements and expand the team size on a project as needed.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of volume testing and a range of other software testing services. Our team of experienced and highly skilled specialists can handle all your requirements with ease. We leverage the latest and best testing software and tools to deliver top-quality services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and effective volume testing service provider, you have come to the right place. Get in touch with us today!
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

export default VolumeTesting;