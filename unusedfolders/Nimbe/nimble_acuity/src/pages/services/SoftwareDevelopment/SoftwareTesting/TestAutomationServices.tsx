import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const TestAutomationServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Test Automation Services
            </h2>
            <p className="text-lg text-gray-600">
              Complement your manual testing processes with our customizable and highly productive test automation services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we don't believe in a one-size-fits-all solution for test automation. Instead, we engage in effective and insightful interactions with your teams to design a highly economical automated testing framework that caters to your unique needs and can be scaled as your business grows.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We focus on building a robust, secure, and stable foundation for your software, making quality a core part of your brand identity.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Test Automation Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We offer a comprehensive suite of services designed to integrate seamlessly with your development cycle. Our services include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Building Test Frameworks */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Building Test Frameworks</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our fully customizable and functional framework provides the perfect infrastructure for all your automated testing needs.
                </p>
              </div>

              {/* Manual to Automatic Migration */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Manual to Automatic Migration</h4>
                <p className="text-gray-700 leading-relaxed">
                  Increase your organization’s productivity with a seamless transition from manual to automated testing processes.
                </p>
              </div>

              {/* Testing Platform Migration */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Testing Platform Migration</h4>
                <p className="text-gray-700 leading-relaxed">
                  Move your complete automation framework and processes to any platform of your choice with our expert migration services.
                </p>
              </div>
              
              {/* Auto Script Generators */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Auto Script Generators</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our automated script generators simplify your testing processes by developing test scripts based on your specific inputs.
                </p>
              </div>
              
              {/* Customized and Phased Automation */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Customized and Phased Automation</h4>
                <p className="text-gray-700 leading-relaxed">
                  We deliver economical and smart solutions by selectively identifying areas where automation can help, rather than automating the whole system at once.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Automate? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Does Your Business Need Test Automation?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The common reluctance to test automation and reliance on manual testing can be risky and directly affect your software's quality. It's crucial to perform a reality check to see if test automation is right for you.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Task 1: Calculate Your Manual Hours</h4>
                <p className="text-gray-700 leading-relaxed">
                  Calculate the time and effort your team spends on manual testing. You may be astounded by the hours and costs incurred by your company.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Task 2: Evaluate Accuracy and Monotony</h4>
                <p className="text-gray-700 leading-relaxed">
                  Can you guarantee the accuracy of manual test results? Are test cases prone to human errors? Does monotony ever strike your testing team, impacting their performance?
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Task 3: Unburden Your QA Team</h4>
                <p className="text-gray-700 leading-relaxed">
                  Is your QA team tirelessly performing manual tasks when they could be more productive? Automation frees them up to conduct faster quality checks and improve the overall robustness of your software.
                </p>
              </div>
            </div>
            <p className="text-gray-700 mt-6 font-medium">
              If your answer to any of the above is "yes," it's time to switch to automated testing.
            </p>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Test Automation to **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              By outsourcing your test automation to us, you can be assured of your software's quality, robustness, and stability. Our services will not only save you time and money but also unburden your quality analysis team, allowing them to focus on more productive tasks that enhance your software's overall quality.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Ready to enhance your software development lifecycle with top-tier test automation?
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

export default TestAutomationServices;