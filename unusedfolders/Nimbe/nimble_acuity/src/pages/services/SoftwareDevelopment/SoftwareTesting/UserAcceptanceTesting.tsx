import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const UserAcceptanceTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              User Acceptance Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Outsource software testing to check user acceptance at affordable rates. Efficiently reduce your time to market with our services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              How is that new software working out for you? Perhaps it meets all your business criteria, but will it hold under real-life scenarios? Will your latest software updates unnecessarily interfere with existing functionalities? You can now find the answers to such gnawing queries with our high-quality user testing services, conducted carefully in a dynamic UAT environment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we cater to a global clientele. Owing to our expertise and experience, we create the most hospitable software testing grounds for our clients. We take the time to learn more about your requirements and develop a functional strategy to help test your products and software systems for proper user acceptance.
            </p>
          </div>

          {/* Services We Provide */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our UAT Testing Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** is a leading user acceptance testing company with a sterling global presence. We apply the best methods and leverage the latest tools to produce outstanding results. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Alpha & Beta Testing</h4>
                <p>
                  We perform Alpha and Beta Testing procedures to ensure a proper development environment before releasing the software to the customers. Field testing or Beta testing is one of the most crucial parts of our software testing solutions.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Regulation Acceptance Testing</h4>
                <p>
                  We verify the software products for numerous industries, governance, and legislative standards to ensure that they meet the regulation standards. With our regulation acceptance testing solutions, one can ensure that their software is ethically and legally fit for release in the market.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Contract Acceptance Testing</h4>
                <p>
                  We offer contract acceptance testing services, where we check whether the developed software meets the criteria and specifications defined in the agreement or the contract.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Operational Acceptance Testing</h4>
                <p>
                  In terms of software testing, we offer the best operational acceptance testing solutions to ensure that proper workflows are always available for better use of the software.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Black Box Testing</h4>
                <p>
                  With Black Box Testing, we offer the best functions of the UAT User Acceptance Test. Black Box Testing is also known as Functional Testing and is used to increase the UAT efforts.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** is a user acceptance testing company with clients in over 160 countries. Outsource UAT services to us and leverage several benefits. Here are some reasons why you should partner with us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Testing Services:</strong> We deliver world-class services at affordable rates and offer customized solutions according to your budget.</li>
              <li><strong>100% Data Security:</strong> We ensure guaranteed security and confidentiality. We do not share your enterprise data with any third party without your permission.</li>
              <li><strong>Certified Professionals:</strong> Our team comprises certified software developers with in-depth expertise and talent from around the world.</li>
              <li><strong>Quick Turnaround Time:</strong> We promise the timely delivery of testing results, ensuring you meet your project deadlines.</li>
              <li><strong>Superb Infrastructure:</strong> We have superior quality, extensive infrastructure to design functional and non-functional test cases.</li>
              <li><strong>Round-the-Clock Support:</strong> Our 24/7 support staff helps you overcome challenges or address emergencies via phone, email, and webchat.</li>
              <li><strong>Scalability:</strong> We offer highly scalable UAT testing solutions that cater to your growing needs and requirements.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure User Acceptance?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading user acceptance testing service provider. By outsourcing UAT services to us, you get a team of experts to ensure that your software products and services will work efficiently. You can also augment your team's capabilities and fill talent gaps cost-effectively with our help.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserAcceptanceTesting;