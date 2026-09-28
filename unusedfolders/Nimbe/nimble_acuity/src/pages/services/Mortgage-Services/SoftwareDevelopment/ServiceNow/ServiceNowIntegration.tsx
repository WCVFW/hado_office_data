import React from 'react';
import { Link } from 'react-router-dom';
import SoftwareHeader from '@/pages/services/SoftwareDevelopment/SoftwareHeader';

const ServiceNowIntegration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              ServiceNow Integration Services
            </h2>
            <p className="text-lg text-gray-600">
              We optimize ServiceNow solution benefits through seamless platform integration services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Cloud-based platforms like ServiceNow are a boon to businesses. They simplify the process of adapting to a hybrid workforce through web services integration. To make the transition quicker and easier, we have a team of highly qualified software professionals who can integrate and configure ServiceNow web services for your team. Our ServiceNow API integration facilitates communication between data and devices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Outsource your ServiceNow integration services to **Nimble Acuity**. We seamlessly connect ServiceNow solutions with third-party apps and data sources through LDAP, JDBC, Web Services, Excel, CSV, and e-mail. We also leverage technologies like REST, SOAP, and WSDL. Hire our experts now to increase operational efficiency at a reduced cost.
            </p>
          </div>

          {/* Our Integration Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              ServiceNow Integration Services We Offer
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Data Source Integration</h4>
                <p>
                  We help you integrate your ServiceNow web service solutions with SaaS, IaaS, legacy systems, ERP systems, third-party data sources, databases, and on-prem applications.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">App Integration</h4>
                <p>
                  We integrate apps like Skype and solutions like Email, Active Directory, Web Services, and Twitter with your ServiceNow solution to ensure added agility and increased efficiency at lower costs.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Providing Ready Adaptors</h4>
                <p>
                  We maintain a library of valuable integration adaptors for different industry applications and tools. This facilitates a centralized system to control and manage data flow across multiple technologies.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Integration Services?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Affordable Pricing Options:</strong> We offer affordable and flexible pricing packages that are customized to suit your specific requirements.
              </li>
              <li>
                <strong>High-Quality Services:</strong> We are an ISO/IEC 27001:2022-certified company, ensuring the quality and reliability of our services.
              </li>
              <li>
                <strong>Experienced Team:</strong> Our team has years of experience in designing, developing, and implementing a comprehensive range of software projects.
              </li>
              <li>
                <strong>Short Turnaround:</strong> Our engineers and experts provide seamless services with quick turnarounds and are highly committed to meeting all our deadlines.
              </li>
              <li>
                <strong>Advanced Tools and Technologies:</strong> Our global team is highly trained and experienced in using the latest and best techniques and workflows to provide professional integration services.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Integrate Your Systems?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading provider of ServiceNow integration services. Our team of certified and committed engineers tackles any integration project with professionalism and attention to detail, leveraging the latest technologies to deliver top-notch solutions.
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

export default ServiceNowIntegration;