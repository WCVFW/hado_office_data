import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ApplicationLifecycleManagementServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Application Lifecycle Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure that your critical business applications are supported and managed properly over the long-term.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for application lifecycle management (ALM) support across the entire lifecycle of your application(s)? Do you want to partner with an experienced and reliable provider that helps you boost your application development process while maintaining high-quality levels and speed throughout your product's lifecycle? If so, you have come to the right place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading provider of application lifecycle management services and can help you with a comprehensive range of ALM support. Our expertise and experience enable us to use the right tools and technologies to provide superior support for your critical business applications. With our services, we improve collaboration and ensure that your applications are created according to industry standards and undergo rigorous testing before being deployed.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Application Lifecycle Management Services We Offer
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">ALM Design Services</h4>
                <p className="text-gray-700">We pay great attention to detail to ensure that software is designed with the most appropriate design patterns that best address the technical challenges at hand, leading to a well-designed and easy-to-maintain product.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Project Management Services</h4>
                <p className="text-gray-700">Our team of technical project managers can deliver enhanced value to any ALM project. They build your application just the way you and your users would like it and can work seamlessly with any team, irrespective of challenges.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Requirements Management Services</h4>
                <p className="text-gray-700">We pay extra careful attention to understanding a project's requirements to ascertain the factors driving business value. We ensure that goals are accurately captured, functionality is prioritized, and end-user expectations are met.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Release Management Services</h4>
                <p className="text-gray-700">We consider the production deployment process early in the project's lifecycle. Our goal is to provide as much automation as possible to make the application development process easy and efficient.</p>
              </div>
              {/* Service Card 5 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Source Code Control Services</h4>
                <p className="text-gray-700">We properly manage source code so that your design, development, and QA teams can collaborate efficiently. This enhances productivity and provides both co-located and remote teams with seamless access to the source code.</p>
              </div>
              {/* Service Card 6 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Continuous Integration Services</h4>
                <p className="text-gray-700">We help enterprises increase their ALM maturity by getting them to invest in Continuous Integration (CI). This makes the deployment process repeatable and traceable and increases automation during testing.</p>
              </div>
              {/* Service Card 7 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Quality Assurance Services</h4>
                <p className="text-gray-700">Project and product quality practices are built into the entire development lifecycle. We use a range of quality assurance processes, including unit testing, integration testing, and manual exploratory testing, to ensure optimal outcomes.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> Our ALM support services are priced very cost-effectively, providing you with the highest return on investment.</li>
              <li><strong>High-quality Services:</strong> We are an ISO-certified company and implement the latest best practices to ensure we always provide the highest quality services.</li>
              <li><strong>Tools and Technologies:</strong> Our team is abreast of all the latest tools and best practices and will implement them to provide the highest quality services.</li>
              <li><strong>Structured Process:</strong> We make use of a streamlined and structured Agile ALM process to deliver all our services.</li>
              <li><strong>Experienced Team:</strong> Our team has extensive experience in providing a full array of ALM services to clients from across the world.</li>
              <li><strong>Superb Infrastructure:</strong> All our experts work out of modern offices equipped with powerful and modern computers, enabling them to provide the highest quality services.</li>
              <li><strong>Data Security:</strong> The security of your data is of utmost importance to us. We comply with all the latest and most stringent international data security and privacy laws.</li>
              <li><strong>Short Turnaround:</strong> We will always provide our services well within the agreed-upon deadline.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Application Lifecycle?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of application lifecycle management services to clients of all shapes and sizes from across the world. We have helped many businesses by supporting their critical business applications throughout their lifecycles. Our services have allowed enterprises to achieve increased productivity and enabled them to focus more on their core business.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for high-quality, reliable, and robust application lifecycle management services, get in touch with us today!
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

export default ApplicationLifecycleManagementServices;