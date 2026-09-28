import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ReactJSDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire ReactJS Developers
            </h2>
            <p className="text-lg text-gray-600">
              Elevate your front-end apps and transform your user interface. Hire ReactJS developers who can build high-quality web applications and execute your vision with clarity.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              ReactJS is a powerful JavaScript library that has gained immense popularity for developing responsive and scalable front-end web applications. However, the lack of expert resources can hinder efforts to maximize its benefits. That's where an expert IT staffing service provider like **Nimble Acuity** comes in.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We provide comprehensive IT staffing solutions to help enterprises hire ReactJS programmers who are the right fit for their projects. Our developers are highly skilled and have extensive experience in building complex and innovative applications for various industries. They can be hired on a full-time basis or as part-time consultants.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ReactJS IT Staffing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Companies that hire ReactJS developers from us have benefited from high-performance and interactive front-end applications. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>ReactJS Web Developer:</strong> Our developers create fast and responsive web applications using ReactJS libraries, HTML, CSS, and JavaScript.
              </li>
              <li>
                <strong>ReactJS UI/UX Developer:</strong> Our UI/UX developers have prior experience with user interface design and prototyping to ensure captivating and interactive features.
              </li>
              <li>
                <strong>ReactJS Application Developer:</strong> We develop and maintain ReactJS applications based on our extensive knowledge of the ReactJS library and front-end technologies.
              </li>
              <li>
                <strong>Material Design Integrations:</strong> Our developers can effectively integrate the Material Design system into ReactJS applications.
              </li>
              <li>
                <strong>ReactJS Developers for SPAs:</strong> Our developers are well-versed in React Router and Redux to build Single Page Applications.
              </li>
              <li>
                <strong>Custom Real-Time Apps:</strong> We leverage ReactJS and real-time technologies like WebSockets to build custom real-time web applications.
              </li>
              <li>
                <strong>Plugin Development & Integration:</strong> Our experts can create and integrate plugins into your ReactJS applications.
              </li>
              <li>
                <strong>App Migration:</strong> We can assist with migrating your legacy applications to ReactJS for improved performance.
              </li>
              <li>
                <strong>App Support & Maintenance:</strong> We ensure your ReactJS applications have high performance through timely maintenance and support services.
              </li>
              <li>
                <strong>QA Engineers for ReactJS App Testing:</strong> Our QA engineers test your critical applications to ensure they are flawless.
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Leverage the experience and expertise of our qualified personnel to propel business growth. Some other reasons to choose our services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>International Certifications:</strong> We are ISO/IEC 27001:2022 certified, ensuring compliance with international data security standards.</li>
              <li><strong>Expert Developers:</strong> Our personnel are experts at leveraging ReactJS, Redux, Node.js, and other technologies and frameworks.</li>
              <li><strong>Top-notch Infrastructure:</strong> We provide our developers with high-end training facilities and world-class technology to reach their full potential.</li>
              <li><strong>Scalable Solutions:</strong> We can address your requirements with additional resources when you have increased workloads.</li>
              <li><strong>Reliable Customer Support:</strong> We ensure 24/7 availability of our agents for any support you need.</li>
              <li><strong>Low Cost of Services:</strong> Choose from multiple pricing options, from FTEs on a contract basis to part-time consultants.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Hire ReactJS Developers?
            </h3>
            <p className="text-gray-700 mb-6">
              We understand the importance of hiring the right ReactJS developers for your project. Our expert recruiters are committed to finding the right-fit candidates to join your team. Outsource your ReactJS IT staffing requirements to us to benefit from:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Experienced ReactJS developers who can build high-quality web applications.</li>
              <li>Flexible engagement models tailored to your specific needs and budget.</li>
              <li>An efficient recruitment process that saves time and lowers overheads.</li>
              <li>Access to the latest technologies and best practices in ReactJS development.</li>
              <li>Seamless integration with your current systems.</li>
            </ul>
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

export default ReactJSDevelopers;