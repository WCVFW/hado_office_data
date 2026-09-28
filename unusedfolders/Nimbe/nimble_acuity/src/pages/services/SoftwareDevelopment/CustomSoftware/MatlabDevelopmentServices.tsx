import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MatlabDevelopmentServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Matlab Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We develop highly responsive Matlab applications, visualizations, and offer code enhancements to optimize componentization.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a Matlab development services provider who can build responsive applications with powerful visualizations? Do you need your applications designed and structured for swift development and scalability?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a top Matlab development service provider with extensive experience. We have expert developers and remote partners adept at solving the most perplexing challenges with bespoke Matlab solutions. We are an ISO-certified company dedicated to increasing code performance and reusability.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Matlab Development Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {/* Service Card 1 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Rapid Application Development</h4>
                <p className="text-gray-700">We code reusable software components, port legacy tools, and prepare applications to be deployed as Matlab apps, executables, and toolboxes. Our consultants also provide training and strategic advice.</p>
              </div>
              {/* Service Card 2 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Application Design and Architecture</h4>
                <p className="text-gray-700">We perform design and code reviews to help you develop a scalable and maintainable software strategy with options for code reuse.</p>
              </div>
              {/* Service Card 3 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Code Performance and Reliability</h4>
                <p className="text-gray-700">As Matlab applications evolve, we help you spot potential bottlenecks in code performance and incorporate smart programming strategies to limit unpredictable behavior.</p>
              </div>
              {/* Service Card 4 */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Data Visualization and User Interfaces</h4>
                <p className="text-gray-700">Our consultants create high-quality, dimensional animations and visualizations. We can embed time-varying data into your UI so end-users can perform deep-dive analysis and gain fresh insights.</p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Matlab Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Strategy and Proposal:</strong> We obtain business requirements from the client and devise a proven strategy.</li>
              <li><strong>Designing:</strong> We modify or create a new Matlab development strategy to address your specific challenge.</li>
              <li><strong>Client Approval:</strong> Our project design is proposed to the client for approval before moving to full-scale development.</li>
              <li><strong>Development and Integration:</strong> Our team develops all requested features and integrates them into the Matlab apps.</li>
              <li><strong>Quality Check:</strong> Our testing teams thoroughly check code blocks for reliability, scalability, and maintenance.</li>
              <li><strong>Go-live:</strong> The project is made live, and the client is provided with post-launch support.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Pricing:</strong> Our services are priced affordably, with options to customize your order and save more.</li>
              <li><strong>Rapid Turnaround Time:</strong> Our efficient workflow and expert developers ensure the fastest turnaround times in the industry.</li>
              <li><strong>Scalable Solutions:</strong> Our solutions are designed to be scalable, with the bandwidth to handle complications and changing requirements.</li>
              <li><strong>ISO Certified Provider:</strong> As a trusted provider, we are ISO 9001:2015 certified for quality and reliability.</li>
              <li><strong>100% Data Security:</strong> We prioritize your data security and do not share your information with any third-party sources.</li>
              <li><strong>Round-the-clock Support:</strong> Our support channels are open 24/7, allowing you to contact us for problem resolution from your preferred time zone.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Optimize Your Matlab Applications?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has extensive experience in software technologies, having acquired immense knowledge of solving challenges for businesses of all sizes. We are a leading Matlab development services provider, delivering exceptional results that comply with every service level agreement.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              To know more about outsourcing Matlab development services, get in touch with us now. We guarantee to provide a free quote.
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

export default MatlabDevelopmentServices;