import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MicrosoftStackDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Microsoft Stack Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to the latest tools and technologies to implement top-quality stack development services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking to access the latest tools and technologies to implement Microsoft stack solutions for your enterprise? Are you falling short of skilled resources that can cater to all your stack development needs? Then, the best step for your firm would be to outsource stack development services to an experienced .NET development company.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is one such service provider that can cater to all your needs with ease. We leverage the latest tools and technologies while delivering top-notch services. We have some of the most experienced and skilled resources who can take care of all your stack development needs with ease.
            </p>
          </div>

          {/* Microsoft Stack Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Microsoft Stack Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Having been in the industry for over two decades, we understand each client's unique business needs and provide them with customized solutions. Some of the key services we offer include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Power BI Services</h4>
                <p>We have some of the most experienced and skilled MS Power BI experts who can help clients to record, transform, analyze, and process the data to derive key insights.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft SharePoint Services</h4>
                <p>Our team of highly qualified SharePoint experts can help you to enhance your team's collaboration capabilities and streamline document management.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Power Apps Services</h4>
                <p>We have the required skills and expertise to provide clients with high-quality applications using the Power Apps platform while combining the Agile and DevOps methodologies.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Azure Stack Services</h4>
                <p>We have the required skills and expertise to provide a plethora of solutions using the MS Azure stack. We can help with services related to networking, analytics, storage, and computation using the Azure stack.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft Dynamics 365 Services</h4>
                <p>We have the required skills and expertise to leverage the Dynamics 365 platform to help you become more agile and cater to your customer's needs with a gamut of applications.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us for Microsoft Stack Development Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Outsourcing Microsoft stack development services to us can give you access to a series of benefits that you can take advantage of. Some of the key reasons for you to choose us are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> We help our clients with highly affordable and flexible pricing plans that will suit their budgets.</li>
              <li><strong>Information Security:</strong> Being an ISMS-certified firm, you can rest assured that all the data you share with us will be kept safe and secure at all times.</li>
              <li><strong>High-Quality Services:</strong> Being an ISO-certified company, you can be assured that all the stack development services we provide will be of the best quality and error-free.</li>
              <li><strong>Experienced Team:</strong> Our team comprises some of the most experienced and certified stack development experts who can cater to all your needs.</li>
              <li><strong>Round-the-Clock Support:</strong> All our teams are available around the clock to assist you in every possible way.</li>
              <li><strong>Short Turnaround Time:</strong> Having delivery centers across time zones allows us to deliver high-quality services within a quick turnaround time.</li>
              <li><strong>Best Infrastructure:</strong> We have access to the latest tools and technologies and world-class infrastructure to support your projects.</li>
              <li><strong>Highly Scalable Services:</strong> We have the required bandwidth to scale up the service requirements as and when the client asks for it.</li>
              <li><strong>Single Point of Contact (SPOC):</strong> We will assign a dedicated manager to every client. This manager will be the single point of contact for all your needs.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Enhance Your Business Solutions?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading pioneer in providing top-quality Microsoft stack development services and a series of other enterprise solutions to global clients. We have some of the most experienced and skilled stack developers on board who can cater to all your needs with ease. We leverage the latest tools and technologies while delivering top-notch services to clients. If you are looking for a reliable and cost-effective Microsoft stack development service providing company, then your search ends here.
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

export default MicrosoftStackDevelopment;