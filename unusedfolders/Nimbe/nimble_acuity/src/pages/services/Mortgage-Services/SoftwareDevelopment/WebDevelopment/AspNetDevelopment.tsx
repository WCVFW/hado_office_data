import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const AspNetDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ASP.NET Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Build high-quality web apps and applications without the overhead of hiring full-time developers. Partner with **Nimble Acuity** for cost-effective ASP.NET development.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              The Microsoft .NET framework is a powerful platform for building mission-critical web applications. It's a versatile choice for developing a wide range of solutions, from basic websites to intricate enterprise-grade systems for desktop, mobile, and cloud environments.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** provides professional **ASP.NET development services** tailored to your business needs. Our experienced developers have extensive expertise in building stable and robust applications using ASP.NET, MVC, C#, and other Microsoft technologies. We deliver intuitive, cutting-edge user experiences without the premium price tag.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our ASP.NET Development Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We stay updated with the latest advancements in the .NET platform to ensure our solutions are future-proof and aligned with your business goals. Our comprehensive services include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom ASP.NET Application Development:</strong> We build custom, cross-platform apps for web, mobile, cloud, and IoT using ASP.NET, MVC5, and other endorsed frameworks.</li>
              <li><strong>Desktop Application Development:</strong> We create rich desktop applications using WinForms, WPF, and Universal Windows Platform (UWP).</li>
              <li><strong>Mobile App Development:</strong> We develop robust Windows Phone apps and can also build cross-platform Android and iOS applications using Xamarin.</li>
              <li><strong>Azure Development:</strong> Our expertise extends to creating and deploying dynamic web and mobile applications on the Azure cloud.</li>
              <li><strong>E-commerce Platform Development:</strong> We build custom e-commerce solutions, from shopping carts to secure payment integrations, giving you full control over your online store.</li>
              <li><strong>Legacy Application Migration:</strong> We migrate your legacy applications to ASP.NET and MVC to add new functionalities and modernize your software.</li>
              <li><strong>Maintenance and Support:</strong> We provide ongoing support to keep your applications up and running, including new feature implementation, updates, and bug fixes.</li>
              <li><strong>Dedicated Programmers:</strong> You can hire our experienced ASP.NET programmers to work exclusively on your projects, with a dedicated project manager to provide real-time insights.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choosing **Nimble Acuity** means partnering with a team that has a deep understanding of the .NET ecosystem. We are a trusted choice for companies that demand quality and reliability.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>ISO Certified Quality:</strong> We are an ISO 9001:2015 certified company, ensuring our services meet the highest standards of quality and timeliness.</li>
              <li><strong>Cost-effective Solutions:</strong> Our pricing is flexible and affordable, allowing you to customize services to fit your budget.</li>
              <li><strong>100% Information Security:</strong> Your data and confidential ideas are protected with robust security policies and ISO/IEC 27001:2022 certified data management practices.</li>
              <li><strong>Team of Experienced Developers:</strong> Our programmers have extensive knowledge of web standards and are experts in building applications with any back-end database.</li>
              <li><strong>Scalable Solutions:</strong> Our services are scalable, allowing you to adjust resources as your business needs evolve.</li>
              <li><strong>Round-the-clock Support:</strong> We provide unparalleled 24/7 support through your preferred medium, including phone, email, and webchat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Innovate with ASP.NET?
            </h3>
            <p className="text-700 mb-6">
              Our highly qualified .NET developers at **Nimble Acuity** are pioneers in providing world-class applications. With decades of experience, we have what it takes to design, develop, and deliver high-quality ASP.NET solutions at competitive rates.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you’re looking to build cutting-edge applications, contact us for ASP.NET development or consulting solutions. We'll be more than glad to assist you.
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

export default AspNetDevelopment;