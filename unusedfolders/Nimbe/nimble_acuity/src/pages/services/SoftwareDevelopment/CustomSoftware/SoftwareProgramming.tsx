import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SoftwareProgramming: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Software Programming & Coding Services
            </h2>
            <p className="text-lg text-gray-600">
              Choosing our programming and coding services can give your business the edge it deserves. We offer vast technical expertise, organized workflow, good communication, and cost-effective rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              We have the expertise, infrastructure, and specialized software programmers and developers in-house to create software customized to your needs. Our programming professionals are skilled at developing high-end desktop and web applications, as well as customizing existing ones. We are also competent in database and system architecture for a variety of environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a leading software coding company, our technical expertise extends to efficiently maintaining small, medium, and large websites, ensuring they are constantly updated and free of bugs.
            </p>
            <p className="text-gray-700 leading-relaxed font-medium">
              Contact our client engagement executives to learn more about our coding capabilities.
            </p>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Custom Software Programming Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Nimble Acuity, we follow a stringent process to ensure we provide high-quality software coding services.
            </p>
            <ul className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Defining the Scope:</strong> After understanding your requirements, we define the project's scope, challenges, and details.
              </li>
              <li>
                <strong>Project Planning:</strong> We create a project plan that includes database design, site structure, and a risk management plan.
              </li>
              <li>
                <strong>Project Specifications:</strong> We document all project details, deadlines, and milestones, and provide the team with clear targets.
              </li>
              <li>
                <strong>Coding:</strong> Our programmers develop the logic and write the necessary code and scripts.
              </li>
              <li>
                <strong>Validation & Integration:</strong> We write code to validate data and integrate the different modules to ensure the application's functions work seamlessly.
              </li>
              <li>
                <strong>Testing & Debugging:</strong> The entire application is tested from a user's perspective, and we rectify any errors found during debugging.
              </li>
              <li>
                <strong>Deployment:</strong> This is the final stage where the application is released.
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Software Programming Tools We Leverage
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Nimble Acuity, we work with the latest and best in technology. Our software programmers use the following tools:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Programming Languages:</strong> ASP, PHP, XML, Java, HTML, ASP.NET, C#, VB Script, JavaScript</li>
              <li><strong>Databases:</strong> MS SQL Server, MySQL, Oracle, MS Access</li>
              <li><strong>Project Management:</strong> MS Project, Base Camp</li>
              <li><strong>UI Design Tools:</strong> Photoshop, Flash, Dream Weaver, Corel Draw</li>
              <li><strong>Source Control:</strong> VSS</li>
              <li><strong>Servers:</strong> Apache and other advanced server technologies</li>
              <li><strong>Development Tools:</strong> MS Visual Studio 2003, LLBLGen Pro</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We are a leading software programming service provider with years of experience. Partnering with Nimble Acuity can help you save on the expenses of hiring and training new employees. Outsourcing can help you save 50-60% on costs compared to an onshore project.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                We follow stringent processes and provide daily reports to keep you on track.
              </li>
              <li>
                Our rigorous quality assurance processes ensure quality at every step and fewer errors.
              </li>
              <li>
                We offer diverse engagement models, including co-sourced, in-sourced, and dedicated development groups, to fit your needs.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Accelerate Your Development?
            </h3>
            <p className="text-gray-700 mb-6">
              Outsource your software development to Nimble Acuity and get access to accurate software coding services. We have skilled developers, stunning designs, and a strong infrastructure to deliver custom solutions for diverse problem scenarios.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Experience the difference that our organized workflow and technological expertise can make for your business.
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

export default SoftwareProgramming;