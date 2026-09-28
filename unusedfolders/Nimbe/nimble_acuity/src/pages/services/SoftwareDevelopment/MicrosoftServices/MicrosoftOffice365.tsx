import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MicrosoftOffice365: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Microsoft Office 365 Services
            </h2>
            <p className="text-lg text-gray-600">
              Build seamless team coordination and boost your ROI with our end-to-end Office 365 consulting services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              There is more to optimizing Microsoft 365 than simply shifting your e-mail to the cloud. You need an implementation strategy that goes beyond technical configuration to ensure that your organization can effectively manage the new environment. Our enterprise collaboration practices guarantee a smooth adoption of Microsoft 365 to create an advanced and productive workplace that is aligned to your business goals.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Already have Microsoft 365, but need help with it? We can help customize it to fit your business needs. At **Nimble Acuity**, we have over two decades of experience as an Office 365 company. We've helped over 18,000 clients streamline business communication and build better ROI through seamless internal collaboration. By outsourcing Office 365 services to us, you can save up to 60% on operational costs.
            </p>
          </div>

          {/* Our Office 365 Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Office 365 Services
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              **Nimble Acuity** is a premier Office 365 service provider. Our services include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Admin Center Setup</h4>
                <p>We set up the Microsoft 365 admin center, giving you access to all the training guides. We help your organization prepare your environment for a successful deployment.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">E-mail Setup</h4>
                <p>We customize and configure your e-mail using Exchange Online. We help you seamlessly migrate your existing e-mail to Microsoft 365.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Calendar and Contact Setup</h4>
                <p>When we port your e-mail, we ensure your contacts and calendars are also seamlessly synchronized using various import and export methods.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Microsoft 365 Setup</h4>
                <p>We help set up security policies, productivity tools, and device management capabilities. Our team updates your devices to the latest versions and connects them to Azure AD to streamline your business processes.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Remote Work Setup</h4>
                <p>We ensure that your employees can work on the go while maintaining data security and safeguarding user credentials.</p>
              </div>
            </div>
          </div>

          {/* Why Outsource to Us? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are a leading Office 365 service providing company with a global reputation. The benefits of partnering with us include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing Options:</strong> We offer affordable solutions so any business can benefit from our Microsoft 365 services.</li>
              <li><strong>High-Quality Services:</strong> We are a trusted Microsoft Office partner with over two decades of industry experience, offering impeccable services to clients across time zones.</li>
              <li><strong>Data Security:</strong> Being an ISO/IEC 27001:2022-certified company, we take data security seriously. We have a robust ISMS system in place to detect and prevent any unauthorized access.</li>
              <li><strong>Short Turnaround:</strong> Our experts provide seamless services with quick turnarounds. We mutually agree on the TAT after reviewing the project's complexity and strictly adhere to our deadlines.</li>
              <li><strong>Round-the-Clock Availability:</strong> We are available 24/7. So, you can reach out to us at any hour of the day. During emergencies, our experts are just a call away.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Transform Your Workplace?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** offers the best Office 365 services, transforming the way your employees interact and communicate. We provide training for your staff so they can leverage the power of Microsoft 365 to create a highly productive work culture. We work with you to understand your deployment requirements, and our experts implement the necessary tools to meet your needs.
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

export default MicrosoftOffice365;