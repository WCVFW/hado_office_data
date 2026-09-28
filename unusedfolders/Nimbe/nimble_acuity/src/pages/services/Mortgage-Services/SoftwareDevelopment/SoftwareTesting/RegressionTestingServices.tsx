import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const RegressionTestingServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Regression Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Check the functionality and response of your software or application with our high-quality regression testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              What is Regression Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              **Regression testing (RT)** is a type of software testing that checks whether any recent changes made to the code are affecting the functionality of the existing software application. It involves full or partial testing of the software using already executed test cases to ensure that existing functionalities are still working correctly. This is done to guarantee that even the smallest of changes do not have any side effects on the software.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one of the leading companies offering quality regression testing services. Our solutions help clients significantly reduce their software development time and costs. Our software testing engineers are highly skilled and capable of using the latest testing tools and technologies to provide the best quality services in the industry.
            </p>
          </div>

          {/* Why Businesses Need Regression Testing */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Do Businesses Need Regression Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              There are many benefits to regression testing. It increases the chances of detecting errors and bugs that may have been caused by changes made to the software application's code, such as application enhancements or bug fixes. This type of testing also ensures there are no undesirable effects from changing the operating environment. Regression testing is often needed when there is a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>**Defect while fixing an existing bug**</li>
              <li>**Fixing performance issues**</li>
              <li>**Change in the requirement and the code is modified**</li>
            </ul>
          </div>
          
          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Regression Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              We are a top regression testing service provider with a team of highly experienced software testers. Our vast experience working with clients across numerous domains enables us to successfully handle any kind of regression testing requirement. Some of the key services we offer include:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Automated Regression Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Automated Regression Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team is trained to work on the latest automated testing tools and technologies, saving you considerable time and money while achieving the desired outcome.
                </p>
              </div>
              
              {/* Corrective Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Corrective Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  When there are no particular changes in the application's specifications, we carry out corrective regression testing with the required expertise and robust infrastructure to ensure the best possible results.
                </p>
              </div>

              {/* Test Case Management */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Test Case Management</h4>
                <p className="text-gray-700 leading-relaxed">
                  We have the resources and bandwidth to provide adequate regression test case management services to our global clients, helping to produce quality testing results quickly and with minimal resources.
                </p>
              </div>
              
              {/* Integration Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Integration Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We have the expertise to provide you with the best system integration regression testing services, making use of a comprehensive number of testing tools and technologies to deliver valuable results.
                </p>
              </div>
              
              {/* Progressive Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Progressive Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  When new specifications are added to an existing software application, we design and implement new test cases to ensure seamless integration and functionality.
                </p>
              </div>

              {/* Functional Regression Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Functional Regression Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  With our functional regression testing, we ensure you have a bug-free system after each modification. We help you upgrade your system safely with patches and fixes that improve functionality.
                </p>
              </div>
            </div>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** has been providing streamlined and cost-effective regression testing services to clients for over two decades. Partnering with us can help you avail the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-effective Prices:</strong> We provide our top-quality services at affordable prices, which can be customized based on your requirements.</li>
              <li><strong>Expert Team:</strong> We have a team of highly skilled and experienced software testers who ensure all aspects of the application are checked thoroughly.</li>
              <li><strong>Advanced Tools and Technologies:</strong> We make use of some of the latest software testing tools such as Selenium, LoadRunner, Visual Studio Team System, SoapUI, etc.</li>
              <li><strong>Superb Infrastructure:</strong> We have a state-of-the-art infrastructure in place to ensure we deliver the best results to all our clients.</li>
              <li><strong>High-quality Service:</strong> Our sales representatives ensure all client needs are addressed politely and professionally.</li>
              <li><strong>Complete Data Privacy:</strong> We maintain complete confidentiality of every project.</li>
              <li><strong>Quick Turnaround Time:</strong> Our multiple delivery centers spread across time zones help us deliver superior results quickly without compromising on quality.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Advance with a Bug-Free Product?
            </h3>
            <p className="text-gray-700 mb-6">
              If you are looking for reliable, effective, and cost-effective software regression testing services, you are in the right place. Our team boasts the experience of having worked with clients from different domains and parts of the world. We have the required skills, resources, and best infrastructure to provide end-to-end regression testing services at highly cost-effective rates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Get in touch with us now to know more!
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

export default RegressionTestingServices;