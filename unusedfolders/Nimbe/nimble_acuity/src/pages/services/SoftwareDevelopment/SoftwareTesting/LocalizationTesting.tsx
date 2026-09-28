import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader"; // Assuming this header component exists

const LocalizationTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Localization Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure complete user satisfaction by testing your software for specific regions with our expert localization services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If your software application is intended for a global audience, it’s crucial to ensure it functions flawlessly in every local region. Are you struggling to find skilled and experienced localization testing experts who can take care of your needs? The right step for your firm is to partner with an experienced service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is your one-stop shop for all your localization testing requirements. We have a team of highly qualified and experienced software testing experts who can handle all your needs with ease. By leveraging the latest localization tools and techniques, we deliver top-notch, reliable services.
            </p>
          </div>

          {/* Services Offered */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Localization Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              Having served clients globally, our vast experience allows us to understand diverse business requirements and provide customized services. Some of the key localization software testing services we offer include:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Verification Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Verification Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Verification testing is a critical step in the testing phase. We provide flawless verification testing services to ensure that all specified requirements of your application are met.
                </p>
              </div>

              {/* Functional Testing */}
              <div>
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Functional Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  Our team has the expertise to provide accurate functional testing services during localization. We ensure that all functions of the software application run smoothly and as expected.
                </p>
              </div>

              {/* Regression Testing */}
              <div className="md:col-span-2">
                <h4 className="text-xl font-semibold text-[#006A7C] mb-2">Regression Testing</h4>
                <p className="text-gray-700 leading-relaxed">
                  We verify that recent changes to the build or code have not negatively affected the existing features of your software application. Our team ensures flawless regression testing with a quick turnaround time.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Localization Testing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Localization testing helps you verify language vocabulary, user interface elements, date and time formats, and currency for a specific region. Some of the key benefits include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>Reduced time for software testing</li>
              <li>Lower overall testing costs</li>
              <li>Increased scalability and flexibility</li>
              <li>Reduced overall support costs</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Localization Testing Process
            </h3>
            <p className="text-gray-700 leading-relaxed mb-8">
              As a leading provider of localization testing, we deliver top-quality services within a quick turnaround time by following a systematic and streamlined process:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>**Test Environment Setup:** We set up the optimal test environment to perform a high-quality testing process.</li>
              <li>**Product Selection:** The product to be tested is carefully selected for localization testing.</li>
              <li>**Script Generation:** We generate scripts that adhere to the local culture and region.</li>
              <li>**Attribute Comparison:** In-built and local attributes of the software system are compared to test the overall software quality.</li>
              <li>**Analysis and Result:** After the comparison, the testing process is analyzed for success. The results are then shared with your development team.</li>
            </ol>
          </div>

          {/* Why Choose */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose **Nimble Acuity** for Localization Testing?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Partnering with us for your localization testing needs offers a range of benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>**Cost-Effective and Flexible Pricing:** Our services are highly affordable with flexible pricing options that fit your business needs and budget.</li>
              <li>**Skilled Testers:** We have a team of highly skilled and experienced localization testing specialists who use the latest tools and technologies to deliver top-notch services.</li>
              <li>**High-Quality Services:** As an ISO-certified organization, we ensure all delivered services are completely error-free through a rigorous quality check process.</li>
              <li>**Information Security:** Your data security is our top priority. We are an ISO/IEC 27001:2022 ISMS certified organization, ensuring your data is always safe and secure.</li>
              <li>**Dedicated Project Manager:** You will be assigned a dedicated project manager as a single point of contact for all your requirements and queries.</li>
              <li>**Round-the-Clock Support:** Our support teams are available 24/7 to resolve your issues via phone or email.</li>
              <li>**Short Turnaround Time:** Our global delivery centers and skilled team allow us to provide high-quality services within a short turnaround time.</li>
              <li>**Scalable Services:** We offer highly scalable services with the bandwidth to ramp up resources on your project as your needs grow.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Partner with **Nimble Acuity**
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a pioneer in providing quality localization testing and other software testing services. We leverage the latest tools and software to deliver error-free services. Our team of highly skilled and experienced localization testing specialists can take care of all your business requirements in a hassle-free manner.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Are you looking for a reliable and efficient localization testing company? Look no further. Get in touch with us today!
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

export default LocalizationTesting;