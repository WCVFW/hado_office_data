import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SanityTesting: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Sanity Testing Services
            </h2>
            <p className="text-lg text-gray-600">
              Get your new software build verified and tested for bugs using our sanity testing services from an experienced team of software testers at affordable prices starting at $20 an hour.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a skilled team of software testers who can verify and test your new software build before proceeding further with development? Is your in-house team unable to handle the sanity testing requirements? Then, the best option for you would be to outsource sanity testing to an experienced and skilled sanity testing service provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading service provider who can take care of all your sanity testing needs with ease. Sanity testing is used to test a new software build with minor code changes or functionality and ensure that the bugs have been fixed and no new bugs have been introduced due to these changes. We leverage the latest tools and software while delivering top-notch sanity testing services to clients.
            </p>
          </div>

          {/* Sanity Testing Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Sanity Testing Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We provide quality and customized sanity testing services to meet each client's specific requirements. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Regression Testing</h4>
                <p>
                  We test if a recent code change has affected the existing functionalities of the software system. Our team can help you with accurate and high-quality regression testing within a quick timeframe.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Exploratory Testing</h4>
                <p>
                  In this approach, our software testers check the system on the fly without pre-defined test cases. Our team has the required skills and experience to provide highly efficient exploratory testing services.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Incremental Integration Testing</h4>
                <p>
                  Our team integrates and tests each block of the system to find any defects or bugs. This saves time and helps detect issues at an early stage before full system integration is carried out.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Unit Testing</h4>
                <p>
                  We test each component or unit for defects to validate if they are working as expected. This helps you save costs by finding issues early before diving into deeper testing processes.
                </p>
              </div>
            </div>
          </div>

          {/* Key Benefits of Sanity Testing Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Key Benefits of Sanity Testing Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Sanity testing helps ensure that new builds are free of new bugs and that existing ones are fixed. Some of the key advantages include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>It helps in quickly identifying any defects in the system's core functionality.</li>
              <li>Since documentation is not required, it can be completed in a short time.</li>
              <li>If defects are found early, it saves a lot of time by avoiding deeper regression tests.</li>
              <li>It saves time and effort as it focuses only on one or a few areas of functionality.</li>
              <li>It ensures that a small code change works as intended after the update.</li>
              <li>It is highly helpful in finding dependent missing objects in the software build.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing sanity testing services to us is highly advantageous. Some of the key reasons to choose us are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> We provide highly flexible pricing options that will suit your business requirements and budget.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, ensuring that all your data is safe and secure with us at all times.</li>
              <li><strong>Experienced Software Testers:</strong> Our team consists of qualified, experienced, and certified software testers who leverage the latest tools to deliver top-notch services.</li>
              <li><strong>High-quality Services:</strong> Being an ISO certified organization, we ensure all our services are of the best quality and undergo a multi-level quality check.</li>
              <li><strong>Dedicated Project Manager:</strong> You will be assigned a single point of contact for all your needs and to resolve any queries regarding the project.</li>
              <li><strong>Easily Scalable Services:</strong> Our team has the skills and bandwidth to scale up the service requirements and expand resources as and when the project demands.</li>
              <li><strong>Quick Turnaround Time:</strong> Our global presence allows us to deliver quality sanity testing services within a quick turnaround time, every single time.</li>
              <li><strong>World-class Infrastructure:</strong> We have access to the latest tools and technologies and international standard office spaces to deliver top-notch services.</li>
              <li><strong>24/7 Availability:</strong> All our teams are available around the clock to answer your queries and resolve your issues via phone or email.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Ensure Your Software is Bug-Free?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been a pioneer in providing quality sanity testing and a series of other software testing services to clients around the globe. We have some of the most qualified and experienced sanity testing experts on board who have been catering to the needs of clients worldwide, leveraging the latest and best testing tools and technologies.
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

export default SanityTesting;