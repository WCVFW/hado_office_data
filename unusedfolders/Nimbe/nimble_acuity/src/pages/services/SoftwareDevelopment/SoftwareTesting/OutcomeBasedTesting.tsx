import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const OutcomeBasedTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Outcome-based Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your software application tested for perfect outcomes by choosing our outcome-based testing services from an experienced team of testers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to test your software application by measuring its performance based on a specific outcome? Are you unable to find the right experienced resources to handle your outcome-based testing requirements? The best step for your firm is to outsource these services to an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading outcome-based testing service company that can be your one-stop shop for all your software testing needs. We have some of the most experienced and skilled outcome-based testing specialists who can take care of your needs with ease, using the latest tools and technologies to deliver top-notch services.
            </p>
          </div>

          {/* Outcome-based Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Outcome-based Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Nimble Acuity has been a leading provider of outcome-based testing services to global clients for over 26 years. We have the experience to handle any situation and provide customized services that suit your business requirements. Some of our key services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Pay-on-Performance:</span> In this method, clients pay based on the performance of business outcomes, such as test effectiveness, schedule adherence, and defect rejection ratio.
              </li>
              <li>
                <span className="font-semibold">Pay-per-Use:</span> Payment is based on the testing intellectual properties (IPs) and tools used. This helps clients save money by not having to invest in buying tool licenses.
              </li>
              <li>
                <span className="font-semibold">Pay-on-Results:</span> Here, payment is based on the results achieved, such as the number of releases delivered, test cases executed, or applications tested.
              </li>
            </ul>
          </div>

          {/* Key Benefits of Outcome-based Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Outcome-based Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outcome-based testing has many advantages for both the development team and the end-user. Some of the key benefits are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Clients pay only for the deliverables and are assured of predefined quality and service levels.</li>
              <li>The testing process is independent of automation ROI, tester skills, or the testing schedule.</li>
              <li>Once the KPIs are set, clients know exactly what they will receive for the cost.</li>
              <li>It fosters a sense of partnership between the service provider and the client.</li>
              <li>It helps align interests and enhances a collaborative culture of continuous quality improvement.</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity for Outcome-based Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Outcome-based Testing Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing outcome-based testing services to us gives you access to a series of benefits. Some of the major reasons to choose us as your service provider are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Affordable Pricing Packages:** Our flexible and affordable pricing options align perfectly with your budget and business objectives.</li>
              <li>**Data Protection:** We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring all your data is kept safe and secure.</li>
              <li>**Superior Quality Services:** As an ISO-certified firm, all our testing services are of superior quality and undergo a multi-level quality check process.</li>
              <li>**Skilled Testers:** Our team consists of highly experienced and skilled testers who are trained to work with the latest technologies.</li>
              <li>**Dedicated Project Manager:** We assign a dedicated project manager who serves as your single point of contact for all your needs and issues.</li>
              <li>**Easily Scalable Services:** We have the skills and bandwidth to easily scale up service requirements and increase the number of resources as needed.</li>
              <li>**Best Infrastructure:** We have access to the best and latest outcome-based testing tools and international-standard office spaces.</li>
              <li>**24/7 Support:** Our teams are available around the clock via phone or email to answer your queries.</li>
              <li>**Quicker Turnaround Times:** Our teams operate from multiple global delivery centers, allowing us to deliver services quickly.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a pioneer in providing quality outcome-based testing and other software testing services to global clients. Our team of skilled specialists can handle all your requirements effortlessly, leveraging the best and latest tools and software to deliver error-free services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and efficient outcome-based testing service provider? You have come to the right place. Get in touch with us today!
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

export default OutcomeBasedTesting;