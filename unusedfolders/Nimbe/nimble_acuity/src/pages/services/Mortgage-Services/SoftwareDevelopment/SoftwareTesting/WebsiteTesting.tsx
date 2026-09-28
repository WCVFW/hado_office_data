import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const WebsiteTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Website Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your website tested for every possible bug before it is launched from our expert team of website testers at highly affordable prices starting at $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Just developing a good-looking website for your business is not enough. It must be tested thoroughly before it is published on the web. Are you struggling to get your website tested for performance, scalability, etc. before they go live? Are you falling short of skilled and experienced website testers who can take care of your requirements? Then, the best option for you would be to outsource website testing services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a website testing service provider that can be your one-stop-shop for all your requirements. We have some of the most qualified and experienced website testing experts who can work on the latest tools and technologies to deliver top-notch services to clients.
            </p>
          </div>

          {/* Website Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Website Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been one of the leading providers of website testing services for over two decades. Our extensive experience in this domain enables us to understand each client's specific requirements and provide them with customized services. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Functionality Testing:</span> Our team has the required skills and expertise to provide clients with high-quality functionality testing. Our services ensure that all the functions of the website are running smoothly without any glitches.
              </li>
              <li>
                <span className="font-semibold">Usability Testing:</span> Our website usability testing ensures that the website is easy to use, user-friendly, and highly intuitive. Our services help clients to present their website to the viewers and increase sales and boost conversions.
              </li>
              <li>
                <span className="font-semibold">Interface Testing:</span> We provide our clients with superior quality interface testing for their websites. This ensures that all the modules and units of the website work in harmony without any kind of integration glitches and bugs.
              </li>
              <li>
                <span className="font-semibold">Compatibility Testing:</span> This ensures that the website is compatible with different browsers, devices, and operating systems, providing smooth and efficient functioning to the clients.
              </li>
              <li>
                <span className="font-semibold">Performance Testing:</span> The performance of a website under different conditions of load and website traffic must be tested before it goes live. Our team can help you test the performance of the website when it is subjected to different loads.
              </li>
              <li>
                <span className="font-semibold">Security Testing:</span> Security is one of the key aspects when testing a website. Our team has the required skills and expertise to test the security of the website and provide you with a risk-free and completely safe website for you and your customers.
              </li>
              <li>
                <span className="font-semibold">Database Testing:</span> It is important that the database is tested and the data is stored and retrieved from the right places as and when it is required. We provide clients with accurate and flawless database testing services within a quick turnaround time.
              </li>
              <li>
                <span className="font-semibold">Crowd Testing:</span> Crowd testing helps you know the effectiveness and efficiency of the website and the cloud-based platform. Our team has the required skills and resources to handle all your crowd testing requirements with ease.
              </li>
            </ul>
          </div>

          {/* Key Benefits of Website Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Website Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              An organization must develop a website that is informative, accessible, and user-friendly with no performance issues. For this purpose, the website must be tested thoroughly before it goes live. Some of the key benefits are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Consistent User Interface</li>
              <li>Tested Search Box Functionality</li>
              <li>Content Usefulness Validation</li>
              <li>Improved Navigation Usability</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Website Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing website testing services to **Nimble Acuity** provides you with a series of benefits. Some of the reasons to choose us as your website testing service provider are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing:** Our services are highly affordable and cost-effective with pricing plans that will suit your business objectives and budget.</li>
              <li>**Information Security:** We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring all your data is kept safe in secure locations.</li>
              <li>**Experienced Software Testers:** Our team comprises some of the most qualified and experienced software testing experts who can take care of all your requirements in a hassle-free manner.</li>
              <li>**Superior Quality Services:** Being an ISO certified organization, you can rest assured that the services delivered by us will be of the best quality. We ensure our services go through a multi-level quality assurance process before they reach the client.</li>
              <li>**Dedicated Project Manager:** We will assign a dedicated project manager to you who will be the single point of contact for all your needs and issues.</li>
              <li>**Easily Scalable Services:** We have the required skills and bandwidth to expand the service requirement and scale up the resources for the project as and when the client asks for it.</li>
              <li>**Short Turnaround Time:** Our team of website testers operates through several delivery centers across the globe, enabling us to deliver top-notch services within a short turnaround time.</li>
              <li>**World-class Infrastructure:** We have access to world-class office spaces and the latest website testing tools and technologies.</li>
              <li>**Round the Clock Customer Support:** Our teams are available at all times to resolve any issues that you may have during the project.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a leading company providing quality website testing services and a plethora of other software testing services to global clients. We have some of the most qualified and experienced website testing experts on board our team who can efficiently handle all your software testing requirements. We make use of the best and the latest website testing tools and software while delivering superior quality services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and reliable website testing service provider? Then, you have come to the right place. Get in touch with us today!
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

export default WebsiteTesting;