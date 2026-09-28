import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const DjangoDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Django Web Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Our Django web developers build superb business websites and web apps using a scalable Python-based framework at rates as low as $20 per hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you want a website with a clean, pragmatic design and functionality that drives traffic and offers incredible scalability, you should outsource Django web development services. Our expert developers are highly familiar with the Django framework and will carefully determine your business needs to build a custom website or web app with improved functionality, security, and UI.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a top **Django web development service provider** with over 26 years of experience. We have a community of Python Django web developers who are adept at building end-to-end Django solutions at reasonable rates.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Django Web Development Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Nimble Acuity, we take a unique, innovation-driven approach to address special business needs. Our Django solutions include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Advanced Web Development:</strong> We build powerful web apps with fast and seamless UIs to be the perfect fascia for your online business.</li>
              <li><strong>Support & Maintenance:</strong> Our developers and support team can assist you remotely to keep your Django apps and websites running smoothly.</li>
              <li><strong>Django Mobile App Development:</strong> We use our expertise to develop custom Django mobile apps that are light, sophisticated, and feature-laden without a cluttered presentation.</li>
              <li><strong>Django Migration:</strong> We offer seamless migration services to ensure there is no data loss when you move your web services to the Django framework.</li>
              <li><strong>Django QA:</strong> We provide a full suite of testing services, including unit and acceptance tests, to ensure your Django site is 100% reliable for end-users.</li>
              <li><strong>Django API Development:</strong> Our solutions ensure secure and functional API implementations that make your web services stable and reliable.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              What makes us a leading Django web development service provider? Here are some of our key differentiators:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cost-Effective Pricing:</strong> We offer flexible pricing models that allow you to customize your requirements and control expenses.</li>
              <li><strong>High-Quality Services:</strong> We are consistent in ensuring the unwavering quality of our services and measure client satisfaction before and after project sign-off.</li>
              <li><strong>Seamless Integration:</strong> We can integrate our implementation with your existing Django framework to avoid unnecessary expenses and technology costs.</li>
              <li><strong>Rapid Turnaround:</strong> Our teams are cut out to work on a tight schedule, ensuring we deliver results on time to prevent delays in your workflow.</li>
              <li><strong>Scalable Solutions:</strong> Our Django web development solutions are highly scalable and can support extraneous needs as you grow.</li>
              <li><strong>ISO Certified:</strong> As an ISO 9001:2015 certified partner, we are trusted for our commitment to quality, timeliness, and security.</li>
              <li><strong>100% Data Security:</strong> Your business data is safe with us, as digital security is a core part of our infrastructure and SLA.</li>
              <li><strong>Round-the-Clock Support:</strong> We offer close-knit support via phone, email, and webchat to clients from all geographies.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build with Django?
            </h3>
            <p className="text-gray-700 mb-6">
              At **Nimble Acuity**, our infrastructure, technologies, and development teams align as one to offer world-class **Django web development services**. From simple web designs to advanced backend functions, we undertake all Django development and overhaul requirements with ease.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              With over 26 years of experience in software technologies, we have become a leading Django web development services provider. To learn more about outsourcing your Django needs, get in touch with us now. We guarantee a free quote.
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

export default DjangoDevelopment;