import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const SeleniumTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Selenium Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Test your software application across browsers, platforms, and programming languages with our expert Selenium testing services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you planning to test your software across different browsers, platforms, and programming languages, but unable to find the right resources for your Selenium testing requirements? The best solution is to outsource Selenium testing services to an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is your one-stop shop for all your Selenium testing needs. Our team of qualified and experienced Selenium WebDriver experts can handle your requirements with ease. By leveraging the latest tools and technologies, we deliver top-notch, reliable services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Selenium Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Having been a pioneer in providing top-quality Selenium testing services for years, we understand each client's unique demands and provide customized services within a quick turnaround time. Key services we offer include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Functional Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Selenium Automated Functional Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team has the expertise to provide accurate functional testing automation using Selenium, helping to uncover flaws that may have gone unnoticed during manual testing.
                </p>
              </div>

              {/* Regression Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Selenium Automated Regression Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Regression testing is key to ensuring that fixing old bugs doesn't introduce new ones. We have the expertise to provide accurate Selenium automated regression testing services.
                </p>
              </div>

              {/* Browser Compatibility Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Selenium Browser Compatibility Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We leverage the power of Selenium tools to test your software's browser compatibility, ensuring your application works flawlessly across all major browsers.
                </p>
              </div>

              {/* Automated Framework Creation */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Automated Framework Creation</h4>
                <p className="text-gray-700 leading-relaxed">
                  We can help you develop your own automated testing framework, allowing you to identify and correct flaws in your software with greater speed and efficiency.
                </p>
              </div>
              
              {/* Integration with Test Management Tools */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Integration with Test Management Tools</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our expert testers can help you with flawless and error-free integration of your application with various test management tools, a critical aspect of effective software testing.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Selenium Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Selenium testing offers a multitude of benefits for both the development team and the end-user. Key advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Multi-browser support</li>
              <li>Easy language and framework support</li>
              <li>Open-source and cost-effective</li>
              <li>Easy to implement and use</li>
              <li>Support across different operating systems</li>
              <li>Parallel test execution for faster time-to-market</li>
            </ul>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Selenium Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your Selenium testing services to us provides you with a wide range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Flexible Pricing:** Our highly affordable and flexible pricing options are designed to suit your business requirements and budget perfectly.</li>
              <li>**Information Security:** As an ISO/IEC 27001:2022 ISMS certified organization, we ensure all your data is kept safe and secure.</li>
              <li>**Experienced Testers:** Our team comprises some of the most skilled Selenium testing experts who are trained to work with the latest technologies.</li>
              <li>**High-Quality Services:** We are an ISO-certified firm, and our services undergo a multi-level quality assurance process to ensure excellence.</li>
              <li>**Dedicated Manager:** You will be assigned a single point of contact to handle all your needs and resolve any issues.</li>
              <li>**Highly Scalable:** We have the required skills and bandwidth to ramp up resources on your project as your needs grow.</li>
              <li>**World-Class Infrastructure:** We have access to the latest testing tools and technologies in state-of-the-art office spaces.</li>
              <li>**24/7 Support:** Our teams are available around the clock to answer your queries via email or phone.</li>
              <li>**Short Turnaround Times:** Our global presence provides a time zone advantage, allowing us to deliver top-quality services quickly.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leader in providing quality Selenium testing and a variety of other software testing services to clients around the globe. Our skilled and talented Selenium testing experts can handle all your needs in a hassle-free manner. We leverage the best tools and technologies to meet your needs.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for an efficient and reliable Selenium testing service provider? You've come to the right place. Get in touch with us today!
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

export default SeleniumTesting;