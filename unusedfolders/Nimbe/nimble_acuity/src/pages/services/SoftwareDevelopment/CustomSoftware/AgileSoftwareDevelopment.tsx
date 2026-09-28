import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AgileSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Agile Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We help you build high-quality software quickly and efficiently using agile methodologies, ensuring flexibility and continuous improvement.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The IT industry is evolving at a very rapid pace. In order to capitalize upon the opportunities presented by this rapidly growing sector, organizations need to adapt to the changes, as well as win over clients with minimal resources, while presenting a compelling product.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity provides custom Agile development services using advanced tools and methodologies. Whether you need to create an average-sized project or a whole new enterprise system, our services provide continuous attention to design and excellence.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Agile Development Service Offerings
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Agile Assessment and Planning:</strong> Our services help global organizations assess their readiness for Agile adoption and provide a roadmap for continuous improvement.</li>
              <li><strong>Agile Application and Software Development:</strong> We coordinate requirements with solutions among self-organizing and cross-functional teams, promoting evolutionary development and adaptive planning.</li>
            </ul>
          </div>

          {/* Methodology */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Agile Development Methodology
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nimble Acuity has worked with global businesses to deliver valuable advice related to the platforms, metrics, and tools that encourage Agile implementation, while diminishing unnecessary organizational overheads. Our process offers opportunities to assess the direction throughout the development lifecycle, considerably reducing development time and marketing costs.
            </p>
            <h4 className="text-xl font-medium text-[#006A7C] mb-2">Key Features:</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Continuous and integrated collaboration techniques</li>
              <li>Scrum framework that offers smooth project management</li>
              <li>High transparency and customized Agile tools</li>
              <li>Iterative design and unique architecture</li>
              <li>Flexible team development environment accommodating people working from multiple locations</li>
              <li>Ability to access tools related to agile management to support stakeholders</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are a mixed blend of Agile, Scrum, and Lean practices that foster a top-quality, iterative, and sprint-based approach. Some of the benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Quick Returns:</strong> Agile project development ensures immediate returns by focusing on future iterations.</li>
              <li><strong>Early and Frequent Delivery:</strong> Short development sprints lead to better stakeholder engagement.</li>
              <li><strong>Flexibility:</strong> Ability to change capabilities in the face of shifting priorities and requirements.</li>
              <li><strong>Enhanced Team Collaboration:</strong> Improved productivity and trusted delivery patterns.</li>
              <li><strong>Enhanced Business Value:</strong> Improved quality and business value achieved by higher business involvement.</li>
              <li><strong>Predictable Delivery Schedule:</strong> Our methodology breaks down complex projects into manageable units, ensuring a reliable delivery schedule.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Software Development?
            </h3>
            <p className="text-gray-700 mb-6">
              At Nimble Acuity, our expertise lies in helping companies understand the technicalities of Agile and transitioning them towards a swift, timely, and well-planned implementation. We have integrated Agile and Scrum as an integral part of all our internal operations to provide our clients with a robust solution.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with one of our service representatives to outsource your Agile development services at highly cost-effective rates. We will be happy to know more about your requirements.
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

export default AgileSoftwareDevelopment;