import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const JQueryAppDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              jQuery App Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to world-class app development expertise using jQuery for your various business needs. Prices start at just $20/hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              jQuery is one of the most powerful multi-browser and cross-browser JavaScript libraries. Its immense popularity has led to its increased use in creating amazing and scalable applications across different industries.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity has been providing essential jQuery development services for years, creating interactive and efficient web and mobile applications. Our dedicated team of professional developers is well-versed in jQuery and will provide you with the best services.
            </p>
          </div>

          {/* Solutions Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              jQuery App Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our services include a range of solutions to meet your specific needs:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Solution 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Custom Mobile Applications</h4>
                <p className="text-gray-700">Leverage our expert developers to use the jQuery framework to create highly functional applications for mobile devices.</p>
              </div>
              {/* Solution 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Business Applications</h4>
                <p className="text-gray-700">Our professionals design and develop business applications that cater to the specific needs and requirements of various industries.</p>
              </div>
              {/* Solution 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile Web Applications</h4>
                <p className="text-gray-700">With our help, you can create web applications that are functional and provide a great user experience across all mobile platforms.</p>
              </div>
              {/* Solution 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Consumer Applications</h4>
                <p className="text-gray-700">We create scalable applications that cater to the needs and requirements of your target consumers in the best possible way.</p>
              </div>
              {/* Solution 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Mobile Websites</h4>
                <p className="text-gray-700">We help our clients design and create the best mobile websites for their requirements, which is why we are a top provider of jQuery development solutions.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You will be working with our professionals to develop classic mobile applications using the jQuery framework in the best way. Some other benefits of hiring us to outsource jQuery app development services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Flexible Pricing:</strong> You will be provided with a custom pricing model based on your budget and specific requirements.</li>
              <li><strong>Excellent Infrastructure:</strong> We have a great framework and environment to work with, using the latest URLs, VPNs, and other tools to make the development process easier.</li>
              <li><strong>High Quality:</strong> We provide all-inclusive jQuery mobile app development solutions to help your business take advantage of the open-source framework.</li>
              <li><strong>Experienced Partners:</strong> With a team of over 200 developers, we have the experience and qualifications to handle all the complexities of your project.</li>
              <li><strong>Total Support:</strong> Our support team is always available to resolve any issues or queries you may have.</li>
              <li><strong>Scalability:</strong> Our talented professionals ensure that the project is delivered on time with highly scalable results.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource jQuery Development Services to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of amazing jQuery mobile app development services. Our dedicated team of professionals will help in the creation of flawless mobile applications that use the jQuery format and framework in the best way. We have support solutions and quality checks in place to ensure you are completely satisfied with our services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now to learn more about how we can help your business.
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

export default JQueryAppDevelopmentServices;