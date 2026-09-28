import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const IndependentTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Independent Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Access high-quality and efficient independent testing services from an experienced team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you unable to perform independent software testing for your application? Is it difficult to find experienced resources to handle your independent testing requirements? Then, your best option is to partner with a skilled independent testing service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading independent testing service provider that can be your one-stop-shop for all your software testing needs. We have some of the most talented and skilled independent testing experts who can cater to all your requirements. We use the best independent testing tools to deliver top-notch services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Independent Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              **Nimble Acuity** has been catering to the needs of clients for over two decades. We have gained enough experience to understand each customer's specific requirements and provide them with customized services that will suit their business needs. Our key independent testing services include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Verification */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Verification Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Verification ensures that the software application is built correctly. Our team helps you by ensuring the application lacks vulnerabilities, the code is well-designed, and it performs as expected.
                </p>
              </div>
              
              {/* Validation */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Validation Services</h4>
                <p className="text-gray-700 leading-relaxed">
                  Validation helps in knowing if the development team has built the right software for the user. Our team at **Nimble Acuity** ensures the software application matches the client's requirements and satisfies their business needs in the best possible manner.
                </p>
              </div>
            </div>
          </div>
          
          {/* Benefits of Independent Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of Independent Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Independent testing has a plethora of benefits for both the development team and the end-user. Some of the major advantages of our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>It helps in enhancing the quality of the software application.</li>
              <li>It helps in reducing the software development life cycle costs.</li>
              <li>It helps in reducing the application's time to market.</li>
              <li>Each defect is seen from a neutral perspective by the tester.</li>
              <li>It helps to detect more bugs and defects that may have been missed by the in-house team.</li>
              <li>It is highly flexible, making it easy to shift between manual and automation testing.</li>
              <li>It allows you to access experienced and skilled software testing experts.</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnering with **Nimble Acuity** for independent testing can provide you with a range of benefits. Some of the major factors for you to choose us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing Options:</strong> Our services are highly cost-effective and tailored to suit your business requirements and budget.</li>
              <li><strong>Skilled Testers:</strong> Our team comprises some of the most skilled and experienced independent testing experts who are trained to work on the latest technologies.</li>
              <li><strong>High-Quality Services:</strong> As an ISO-certified organization, we ensure all services delivered by our team are of the best quality and undergo a thorough quality check.</li>
              <li><strong>Information Protection:</strong> We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe and never divulged to any third party.</li>
              <li><strong>Scalable Services:</strong> We have the capability and bandwidth to scale up the team size and service requirements as and when you need it.</li>
              <li><strong>Round-the-Clock Support:</strong> Our teams are available at all times to answer your queries via email or phone.</li>
              <li><strong>Dedicated Manager:</strong> You will be assigned a dedicated project manager who will be the single point of contact for all your needs.</li>
              <li><strong>Short Turnaround Time:</strong> Our team operates through several delivery locations, giving us a time zone advantage and enabling us to deliver quality services within a short turnaround time.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your Software's Quality?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality independent testing and a series of other software testing services to global clients. Our team comprises some of the most qualified and experienced independent testing experts who can cater to all your testing needs. We leverage the power of the best independent testing tools and deliver top-notch services to clients.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient independent testing service provider, look no further. Get in touch with us today!
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

export default IndependentTestingServices;