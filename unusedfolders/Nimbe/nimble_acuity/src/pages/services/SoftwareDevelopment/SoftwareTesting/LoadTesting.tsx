import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const LoadTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Load Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Determine how your software behaves under high user loads by choosing our expert load testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you finding it challenging to determine the behavior of your software application when it's being used by multiple users simultaneously? Finding highly experienced and skilled load testing experts who can handle your specific requirements can be difficult. The best option for you is to outsource your load testing needs to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading load testing service provider that delivers quality results within a quick timeframe. We have a team of qualified and experienced load testing specialists who leverage the best and latest tools to provide top-notch, reliable services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Load Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Having served global clients for years, we have the experience to understand each client's unique software testing requirements and provide customized services. Some of the key services we offer include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Capacity Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Capacity Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  We help you identify the maximum number of users your software can support at a single time. Our accurate capacity testing ensures the system operates according to your expectations.
                </p>
              </div>

              {/* Soak Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Soak Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Soak testing helps us detect performance irregularities in your application over a long duration. We'll help you understand and correct any performance degradation quickly.
                </p>
              </div>

              {/* Stress Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Stress Testing Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our experienced load testing experts provide accurate stress testing to determine how your application behaves under extreme loads, helping to identify and fix flaws immediately.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Load Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Load testing is crucial for ensuring your application operates smoothly under real-life conditions. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Identifies the capacity of your software application.</li>
              <li>Determines sustainability under peak loads.</li>
              <li>Helps verify if your current infrastructure is sufficient.</li>
              <li>Determines the maximum number of users your application can support.</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Load Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your load testing services to us provides you with a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing:** Our highly flexible and affordable pricing options are designed to fit your business requirements and budget.</li>
              <li>**Data Security:** As an ISO/IEC 27001:2022 ISMS certified organization, we take data security very seriously, ensuring your information is always safe.</li>
              <li>**Skilled Load Testers:** Our team of experienced and skilled experts is trained to use the latest tools and technologies to deliver top-quality services.</li>
              <li>**High-Quality Services:** Our services undergo a multi-level quality check process, guaranteeing they are of the highest standard.</li>
              <li>**Dedicated Project Manager:** You'll have a single point of contact to handle all your needs and resolve any issues.</li>
              <li>**Scalable Services:** We have the bandwidth to quickly scale up service requirements and expand the team size as needed.</li>
              <li>**Short Turnaround Time:** Our global delivery locations give us a time zone advantage, allowing us to deliver quality services quickly.</li>
              <li>**24/7 Support:** Our teams are available around the clock to answer your queries and resolve issues via phone or email.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of load testing services. Our team of skilled and certified experts can handle all your software testing requirements with ease. We use the best and latest tools to ensure we deliver quality services every single time.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and reliable load testing company? Your search ends here. Get in touch with us today!
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

export default LoadTesting;