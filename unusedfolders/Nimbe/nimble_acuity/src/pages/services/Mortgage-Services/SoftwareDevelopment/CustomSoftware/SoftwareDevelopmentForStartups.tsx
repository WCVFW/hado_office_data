import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SoftwareDevelopmentForStartups: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Development for Startups
            </h2>
            <p className="text-lg text-gray-600">
              Get access to world-class software development expertise to create sophisticated software for all your requirements.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you are on the lookout for effective and efficient software development for your startup, you've come to the right place. We provide a full range of software services for startups, including programming, designing, testing, and planning. We can help you elevate the productivity of your startup with our professional and reliable services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides professional and reliable services for custom software development for SMEs. Our professionals offer a complete range of services for startups, from conceptualizing to coding. We have extensive expertise and experience in handling software development projects and have worked with a variety of clients over time.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Software Development Services For Startups We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Nimble Acuity is known for providing various custom software development services for startups. No matter what kind of startup you have, we can help you with our services, which include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Software Development</h4>
                <p className="text-gray-700">We offer custom software development services for a range of startups, from multimedia to travel and e-commerce. Our professionals have the experience to provide the best benefits to our clients.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile Application Development</h4>
                <p className="text-gray-700">One of our main services for startups is mobile application development. We have the expertise and experience in the design and deployment of hybrid mobile applications.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Consulting Services</h4>
                <p className="text-gray-700">We offer strategic consulting services to help our clients complete their app development process on time and without hassle.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">IT Staffing</h4>
                <p className="text-gray-700">For newly constructed startups, we offer professional IT staffing and staff augmentation services. We have expertise in providing skilled individuals with ample experience in software development.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Training Services</h4>
                <p className="text-gray-700">Apart from staffing, we also provide training services for IT professionals across different startups to help them improve their skills in software development.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Software Upgradation and Maintenance</h4>
                <p className="text-gray-700">We have a professional team of software development specialists who are adept at helping with proper software maintenance and upgradation.</p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity for Startup Software Development?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The reasons for choosing our services are clear:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Rates:</strong> We understand that startups have different budgets, so our prices are flexible and decided according to your specific requirements.</li>
              <li><strong>High Quality:</strong> We always offer superior quality services that are on par with international standards.</li>
              <li><strong>Free Trial Options:</strong> A 3-day free trial is available for clients who want to evaluate the software and apps we offer.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Startup's Software?
            </h3>
            <p className="text-gray-700 mb-6">
              This is your chance to work with the best professionals from Nimble Acuity for software development for startups. We have an experienced team of developers who will take care of every single requirement you have to create the perfect software for your business.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Simply get in touch with us, and we will provide you with a custom quote.
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

export default SoftwareDevelopmentForStartups;