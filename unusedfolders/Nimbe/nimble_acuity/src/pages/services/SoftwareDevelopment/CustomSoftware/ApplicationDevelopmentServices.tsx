import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const ApplicationDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Application Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build smart, secure, and scalable apps that are future-ready with our application development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Agile, cross-functional teams are crucial to developing high-quality applications that simplify business complexities and accelerate growth. However, it often leads to heavy investment in an in-house team, increasing operational overhead and decreasing efficiency. This is where businesses like yours should consider outsourcing.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a professional application development service provider with extensive experience serving clients across the globe. Our developers incorporate product usage into application design and put user needs at the center of app development to build intelligent, secure, and future-ready applications.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Get augmented support to ensure a faster go-to-market and improve business scalability with our turnkey application development services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Application Development Solutions We Offer
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>Mobile Application Development</li>
              <li>Web Application Development</li>
              <li>Cloud Application Development</li>
              <li>IoT Application Development</li>
              <li>Cross-platform App Development</li>
              <li>Progressive Web App Development</li>
              <li>Desktop Application Development</li>
              <li>AI Application Development</li>
              <li>Client-facing Application Solutions</li>
              <li>Quantum Application Development</li>
            </ul>
          </div>

          {/* Consulting Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Application Development Consulting Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Are your unique development needs not listed above? Our application development consulting services have got you. We understand that every client is unique, so we offer specialized consulting support to assess your specific requirements and deliver customized services. Our consulting includes technical assistance, complete or partial development support, testing, and maintenance.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You can also get a feasibility study for code reuse, evaluate your existing applications, and improvise the old ones. Software project management is also a part of our consulting services. Our consultants analyze your application development requirements and help you accomplish your goals.
            </p>
          </div>

          {/* Ongoing Support and Maintenance */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Ongoing App Support and Maintenance
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Efficient planning before application design and development, successful deployment, and post-development maintenance ensure your application is up and running. So, we offer the following support and maintenance services:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-3">
              <li>App Planning</li>
              <li>App Architecture Design</li>
              <li>Self-paced learning tutorials</li>
              <li>Business Case Creation</li>
              <li>Project Planning</li>
              <li>App UX/UI Design</li>
              <li>App QA and Testing</li>
              <li>Deployment, Maintenance, and Support</li>
              <li>Deployment and Release</li>
              <li>Integration with External Systems</li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Project-specific Approach:</strong> We follow a customized approach and have a multi-step quality assurance system to deliver high-quality applications that function optimally.</li>
              <li><strong>Timely Project Delivery:</strong> Dedicated project managers are assigned to every project. We plan based on your requirements to ensure timely completion.</li>
              <li><strong>Tools and Technologies:</strong> Gain access to expert development teams that build applications using the latest tool stacks and industry-validated practices.</li>
              <li><strong>Pre-vetted and Certified Team:</strong> All our developers and project managers are pre-vetted to ensure they have the right skills to serve you.</li>
              <li><strong>Global Delivery Centers:</strong> We have strategically located delivery centers across the globe to deliver exceptional services.</li>
              <li><strong>Individualized Estimates:</strong> Our custom pricing is guided by individual estimates, where each client is billed based on the technical and operational challenges involved.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Develop Your Custom Application?
            </h3>
            <p className="text-gray-700 mb-6">
              Quick and responsive apps get a higher user satisfaction score, which is crucial for success. This is precisely where we can help you. Our developers build high-quality applications using advanced technology stacks. When you choose us, we help you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Swiftly build custom applications from the ground up</li>
                <li>Retrieve and improve underperforming applications</li>
                <li>Mitigate risks and minimize operational overhead</li>
                <li>Execute multi-platform applications through agile techniques</li>
            </ul>
            <p className="text-gray-700 mb-8 font-medium">
              Build, manage, modernize, and migrate custom applications using the latest tech stacks with our comprehensive application development services. Reach out to us today to get an unparalleled solution at industry-best turnaround time.
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

export default ApplicationDevelopmentServices;