import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const GUITesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              GUI Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure a smooth user experience by thoroughly testing the Graphical User Interface (GUI) of your application.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Do you want to check that all the GUI elements—like menus, icons, buttons, dialog boxes, and toolbars—are working smoothly and as expected? Do you need to partner with an experienced and reliable provider that can thoroughly test the GUI of your application? If so, we can help.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of GUI testing solutions to clients of all sizes across the globe. We have the experience and expertise to perform comprehensive, in-depth GUI testing to ensure that the UI functionality works according to specifications and that users have a smooth experience.
            </p>
          </div>

          {/* GUI Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              GUI Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** is a leading GUI testing company that can help you with a wide range of GUI testing solutions. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Manual GUI Testing</h4>
                <p>Our highly seasoned testers will manually check the graphical screens to ensure all elements in the user interface work as specified in the business requirements document. We provide valuable information on how your product performs.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Record and Replay Testing</h4>
                <p>We use automation tools to perform GUI testing. During the "Record" phase, test steps are captured. In the "Playback" stage, the recorded steps are executed on the application being tested for efficient, repeatable testing.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Model-based GUI Testing</h4>
                <p>We use model-based GUI testing to predict a system's behavior. By building a graphical representation of the system, we can generate test cases to identify possible undesirable states and ensure a robust GUI.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              There are many challenges in GUI testing, but our experience ensures we deliver the best services. Outsourcing GUI testing to us provides a host of benefits, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> Our solutions are priced extremely cost-effectively, ensuring you get the highest return on investment.</li>
              <li><strong>Experienced Team:</strong> Our GUI testing team is backed by decades of solid experience in providing a wide range of software testing services to a global clientele.</li>
              <li><strong>Superior Quality Services:</strong> As an ISO-certified company, we make use of multi-level quality checks to ensure we always provide the highest quality services.</li>
              <li><strong>Structured Process:</strong> We utilize a streamlined and disciplined process to deliver all our GUI testing services efficiently.</li>
              <li><strong>Data Security:</strong> We take the security of your data very seriously. Our stringent data security measures ensure your information is always safe and secure.</li>
              <li><strong>Quick Turnaround Time:</strong> We always provide our GUI testing services on time, every time, as we understand how critical time can be for your projects.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your User Interface?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of state-of-the-art GUI testing services. Our team of professionals is highly experienced in using the latest tools, technologies, and methodologies to provide robust solutions that help you develop your product quickly and enhance productivity.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get a Free Quote
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default GUITesting;