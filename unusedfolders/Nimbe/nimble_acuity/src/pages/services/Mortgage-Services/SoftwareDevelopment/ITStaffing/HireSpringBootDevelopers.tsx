import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const HireSpringBootDevelopers: React.FC = () => {
  return (
    <>
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h1 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Spring Boot Developers
            </h1>
            <p className="text-lg text-gray-600">
              Hire Spring Boot Web Developers from **Nimble Acuity** to scale up your app and software development game at the most reasonable prices.
            </p>
          </div>

          <hr className="my-16" />

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you hunting for a trustworthy, effective company that offers the best software solutions using the Spring Boot framework? Partner with **Nimble Acuity**; our team comprises the best Spring Boot developers who offer impeccable software development services to boost your business.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With the increase in digital interactions between brands and customers, it is essential to build scalable apps and websites that drive internet traffic. The vast Spring Boot framework has some unique features which make app development easier for developers. It allows easy integration with other frameworks; whether starting a new project from scratch or overhauling an existing one, you can use Spring development with several other Java frameworks.
            </p>
          </div>

          <hr className="my-16" />

          {/* Our IT Staffing for Spring Boot Developers Solutions */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our IT Staffing for Spring Boot Developers Solutions
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              With years of Java Spring Boot Development experience, our Spring Boot test-driven developers ensure seamless integration of your applications with its ecosystem. Our Spring Boot development services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2">
              <li>
                <strong>Spring Boot Design and Development:</strong> Our expert teams allow you to design bespoke applications for your business requirements.
              </li>
              <li>
                <strong>Spring Boot Migration:</strong> We ensure your data is correctly moved from existing systems to new ones. We are always looking for ways to deliver more refined digital solutions, making us a leading Spring Boot development company.
              </li>
              <li>
                <strong>Spring Boot Micro-Services:</strong> Using **Nimble Acuity**'s Java Spring Boot developers, you can create applications that are rich in features and highly user-friendly.
              </li>
              <li>
                <strong>Spring Boot Web Development:</strong> We offer bespoke solutions for web development. Our expert developer teams ensure you receive the best digital services for your site.
              </li>
              <li>
                <strong>Spring Boot API Development:</strong> We offer API testing and development options to ensure that your apps and webpages are free from errors and bugs.
              </li>
              <li>
                <strong>Support & Maintenance:</strong> We have a certified and trusted team who are always willing to offer round-the-clock maintenance and support solutions for our clients.
              </li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Other Services */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit from
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>Custom Software Development</li>
              <li>Enterprise Solutions</li>
              <li>ServiceNow Services</li>
              <li>Infrastructure Management Services</li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Why Nimble Acuity is the Preferred Provider */}
          <div className="max-w-6xl mb-16">
            <h2 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why is Nimble Acuity the Preferred Spring Boot Developer Provider?
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** is a premier Spring Boot developer company that gives you access to large pools of talent, thus helping you to research and hire top Java application developers. Outsource Spring Boot developers from us to enjoy the following benefits:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>
                <strong>Cost-effective Services:</strong> One of the reasons most companies pick us is because of our affordable rates. With our flexible pricing system, you only pay for the services you need.
              </li>
              <li>
                <strong>Amazing Expertise:</strong> **Nimble Acuity** is an ISO-certified company; we have various associations and quality certificates that establish the fact that we completely adhere to international quality standards.
              </li>
              <li>
                <strong>Infrastructure:</strong> We have all the resources and technologies required to develop test-driven Spring Boot. Our team comprises the best developers from all over the world.
              </li>
              <li>
                <strong>Data Security:</strong> We make an absolute commitment to the best practices in security, which allows you to trust that your data is safe with us.
              </li>
              <li>
                <strong>Scalability:</strong> We let you scale our services up and down as per your business requirement. Whether you need a single developer or an expansive development team, we have you covered.
              </li>
            </ul>
          </div>

          <hr className="my-16" />

          {/* Outsource Spring Boot Developers to Nimble Acuity */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Outsource Spring Boot Developers to Nimble Acuity
            </h3>
            <p className="text-gray-700 mb-6">
              We are a leading Spring Boot development services provider with 18,000+ happy clients. By outsourcing software developers from us, you get to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>Partner with a service provider with a reputation for unparalleled services.</li>
              <li>Work with an outsourcing company specializing in Spring Boot API development.</li>
              <li>A team of globally qualified experts that deliver software services tailored to your needs.</li>
              <li>Dedicated project managers and round-the-clock customer support via calls, texts, and SMSs.</li>
            </ul>
            <p className="text-gray-700 mb-8 font-medium">
              Connect with us now and hire Spring Boot rapid application developers the easy way!
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

export default HireSpringBootDevelopers;