import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const SoftwareArchitectureDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Architecture Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Improve the quality and speed of your platform while reducing development time and risks with customized software architecture designs.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Is your software firm struggling to get the right software architecture designs for your projects? Are you falling short of skilled and experienced software architecture designers? Then, the best option for you is to partner with an experienced and skilled service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a one-stop-shop for all your software architecture design needs. We have some of the most skilled and experienced software architecture design experts on board who leverage the power of the latest design tools to deliver high-quality services to clients around the globe.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Software Architecture Design Services
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Architecture Strategy & Assessment:</strong>
                <p className="mt-2">Our team has the expertise to provide the best architecture strategy and assessment. We can help you with defining the vision, principles, standards, and roadmap, as well as managing technologies and operations.</p>
              </li>
              <li>
                <strong>Scenario Analysis:</strong>
                <p className="mt-2">We have the skills to analyze product and system scenarios for software architecture design. We can help you determine costs and timelines, industry practices, and the appropriate tools and technologies to use.</p>
              </li>
              <li>
                <strong>Parameter Identification:</strong>
                <p className="mt-2">We can help our clients with accurate and error-free parameter identification for architecture design. We identify applicable architectural principles, the need for integration, service quality, and more.</p>
              </li>
              <li>
                <strong>Architecture Analysis:</strong>
                <p className="mt-2">This is the process of understanding a system and the environment in which it will work. Our designers can help you with accurate analysis to create an efficient architecture that suits your business needs.</p>
              </li>
              <li>
                <strong>Architecture Synthesis & Evaluation:</strong>
                <p className="mt-2">Our team can help you create the best software architectures and evaluate them to ensure the design is working as expected and satisfies all client requirements.</p>
              </li>
              <li>
                <strong>Architecture Evolution:</strong>
                <p className="mt-2">We help maintain and upgrade existing architectural designs. Our services can help you adapt to changing application requirements when a new feature or version is introduced.</p>
              </li>
              <li>
                <strong>Supporting Activities:</strong>
                <p className="mt-2">Our team can help you with other supporting activities, such as evaluating design decisions, managing the information needed for software architecture design, and creating the required documentation.</p>
              </li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Flexible Pricing Options:</strong> We offer highly affordable and cost-effective pricing plans that fit your budget and business requirements.
              </li>
              <li>
                <strong>Information Security:</strong> We are an ISO/IEC 27001:2022 ISMS-certified company, so you can be confident that all data you share with us is completely safe.
              </li>
              <li>
                <strong>High-quality Services:</strong> As an ISO-certified company, we ensure that all the services we provide are of the highest quality and are completely error-free.
              </li>
              <li>
                <strong>Experienced Designers:</strong> Our team is composed of skilled and experienced software architecture designers who can cater to all your needs with ease.
              </li>
              <li>
                <strong>Dedicated Manager:</strong> We assign a dedicated manager to each project, providing you with a single point of contact for all your requirements.
              </li>
              <li>
                <strong>Highly Scalable Services:</strong> We have the skills and bandwidth to scale up service requirements and increase resources as and when you need it.
              </li>
              <li>
                <strong>Round-the-Clock Support:</strong> Our teams, including sales, customer support, and project management, are available at all times to answer your queries.
              </li>
              <li>
                <strong>Short Turnaround Time:</strong> Our team operates through different delivery centers, giving us a time zone advantage and allowing us to deliver services within a short turnaround time.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Design Your Software Architecture?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a pioneer in providing quality software architecture design services. We have some of the most experienced designers on board who leverage the latest tools and technologies to deliver top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and cost-effective software architecture services provider, get in touch with us today.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoftwareArchitectureDesign;