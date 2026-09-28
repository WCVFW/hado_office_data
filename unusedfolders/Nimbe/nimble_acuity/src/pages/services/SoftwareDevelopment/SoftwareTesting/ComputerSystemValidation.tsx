import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const ComputerSystemValidation: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Computer System Validation Services
            </h2>
            <p className="text-lg text-gray-600">
              Effectively reduce compliance issues and product recall risk by outsourcing your computer system validation services to our expert team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Want to streamline your computer system validation (CSV) process and keep your systems legally compliant? Do you need to ensure your products are fit for consumers?
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsource CSV services to Nimble Acuity to make sure your GxP systems operate at peak quality and efficiency. As a leading computer system validation service provider, we use a rigorous, risk-based process to ensure the accuracy, reliability, and consistent performance of your GxP computerized systems. Our dedicated experts develop and implement various validation strategies to ensure your software and systems meet regulatory requirements and minimize legal risks.
            </p>
          </div>

          {/* Our Computer System Validation Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Computer System Validation Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              As an experienced computer system validation service provider, we offer an end-to-end suite of services to help you manage all aspects of system validation and execution. Our services include:
            </p>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Analysis and System Remediation:</span> We carefully analyze your systems to ensure they meet the latest US FDA guidelines for 100% regulatory compliance. We also identify and remediate issues that could lead to compliance problems.
              </li>
              <li>
                <span className="font-semibold">Process Consulting:</span> We offer comprehensive CSV consultation services to optimize and harmonize your validation processes. Our experts can also develop templates, checklists, and training modules to reduce your CSV timelines and ensure your GxP systems operate efficiently.
              </li>
              <li>
                <span className="font-semibold">Risk-Based Validation and Planning:</span> Our experts perform a comprehensive risk assessment to identify risks associated with your GxP computerized systems. We work with you to create a successful validation plan that identifies key elements posing high regulatory risks.
              </li>
              <li>
                <span className="font-semibold">Validation Test Execution:</span> We provide a comprehensive range of well-developed and perfectly executed validation test scripts. These scripts can help your testing team validate applications and computerized systems used for clinical data management, electronic data capture, pharmacovigilance, and more.
              </li>
            </ul>
          </div>

          {/* Our CSV Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Computer System Validation Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The major tasks performed during our validation process include:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700 pl-4">
              <li>
                <span className="font-semibold">Evaluating Your Validation Master Plan:</span> We carefully check your existing validation plan to ensure it's complete and follows industry best practices. We can also help you establish a new strategy and remediate any constraints.
              </li>
              <li>
                <span className="font-semibold">Defining an Appropriate Validation Technique:</span> Depending on your project and systems, we define the most suitable validation technique, such as inspection, simulation, analysis, or testing, to expertly validate your system according to regulations.
              </li>
              <li>
                <span className="font-semibold">Performing Validation Actions:</span> Our experts carry out the defined validation procedures at the right time, in the right environment, using the right tools and techniques, and analyze the results.
              </li>
              <li>
                <span className="font-semibold">Ascertaining the Limits and Mitigating Challenges:</span> We define clear limits for your results and ensure they are well within these boundaries, addressing any challenges along the way.
              </li>
            </ol>
          </div>

          {/* Why Choose Nimble Acuity for CSV Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Computer System Validation?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing CSV services to us provides a variety of benefits you can take advantage of:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Comprehensive Knowledge:** We have extensive knowledge of life sciences software and systems.</li>
              <li>**Integrated, Agile Solutions:** We offer agile solutions geared for continuous process improvement.</li>
              <li>**Customized Services:** All our solutions can be tailored to your specific organizational needs to help you reap maximum benefits.</li>
              <li>**Fast Turnaround Time:** Our global delivery centers help us quickly and efficiently deliver all our projects, well within the promised time frame.</li>
              <li>**Complete Data Security:** Our data protection norms are strict and stringent.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              Maximize your business's potential by outsourcing CSV services to us. We can help you validate your computer programs, ensuring they meet all applicable regulatory and customer requirements.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us today to learn more about how we can help your business.
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

export default ComputerSystemValidation;