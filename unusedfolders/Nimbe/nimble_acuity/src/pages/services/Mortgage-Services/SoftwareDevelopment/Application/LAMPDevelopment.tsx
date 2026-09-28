import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const LAMPDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              LAMP Development Services
            </h2>
            <p className="text-lg text-gray-600">
              LAMP, a technology stack used to handle heavily coded websites and complex e-commerce solutions, requires high levels of precision. We offer this precision with our dedicated LAMP developers.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Our developers have the capability to take over at any stage of a development life cycle. We understand that the LAMP web development platform may vary depending on the web programming language or operating system used, and our developers are proficient in using PHP, Perl, or Python programming languages and different operating systems like Microsoft Windows, Mac OS, Solaris, or Open BSD, depending upon your requirement.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our LAMP Web Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LAMP platform consists of four components that are structured in a layered way. Each layer provides a critical part of the entire software stack. Some of the services we offer as part of the LAMP stack include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Linux Development:</strong> **Nimble Acuity's** team of Linux developers are well-versed with the technology to produce the best results, leveraging its flexibility, security, and zero licensing cost.</li>
              <li><strong>Apache Development:</strong> Our team of Apache developers is skilled enough to support both static and dynamic web pages.</li>
              <li><strong>MySQL Development:</strong> Our MySQL experts will help you manage your own database servers and set up new ones without worrying about security loopholes.</li>
              <li><strong>PHP Development:</strong> Our team of PHP web developers are highly qualified and trained in Python, Perl, and PHP to deliver quality web pages.</li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Benefits of LAMP Development
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The LAMP web development platform is highly flexible and offers developers the ability to create flawless web applications from scratch. Following are the benefits of LAMP-based web development:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>The web applications developed using LAMP are compatible with a majority of web browsers.</li>
              <li>The coding process is easy, and applications can get up and running in minimum time.</li>
              <li>LAMP-based applications can be easily developed and deployed locally.</li>
              <li>The robust Linux architecture ensures safe and secure LAMP web development.</li>
              <li>The LAMP stack can be acquired at a comparatively low price compared to other software architecture bundles.</li>
              <li>LAMP stacks are constantly updated and can run on many platforms, giving flexibility to users.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for LAMP Web Development Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity's** team of LAMP developers is highly skilled and trained to work on different technologies and produce some of the best results. Our designs conform to the latest trends and fulfill all our clients' requirements.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Our LAMP-based solutions have enabled our customers to benefit from diverse open-source applications and frameworks and thereby reduce costs.</li>
              <li>Our developers have relevant experience in working with LAMP technology and can provide a customized solution to suit every client's need.</li>
              <li>We have served thousands of customers across the globe.</li>
              <li>LAMP developers can be hired from us on an FTE or part-time basis.</li>
              <li>We provide LAMP services at very reasonable prices.</li>
              <li>We adhere to strict quality standards so as to ensure all deliverables match your exact requirement.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with LAMP?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity**, a well-known LAMP web development company with more than two decades of experience, leverages Linux, Apache, MySQL, and PHP open-source software to develop extensively dynamic and steadfast websites. We can help you with end-to-end coding for your website development, or if you have an unfinished project, we can take that over and deliver outstanding websites with features that enhance their usability.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Our LAMP application development team delivers results within the given timeframe with prices to suit every budget. If you have any kind of LAMP application development requirement, feel free to get in touch with us.
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

export default LAMPDevelopment;