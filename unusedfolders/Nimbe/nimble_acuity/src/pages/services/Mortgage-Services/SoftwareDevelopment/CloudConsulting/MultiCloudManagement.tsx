import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MultiCloudManagement: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Multi-Cloud Management Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to a streamlined and highly secure multi-cloud environment to manage your applications.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you looking for a secure multi-cloud environment to manage your various applications? Do your business services demand skilled resources that can deal with all your cloud management needs? Then, the best option for you would be to outsource multi-cloud management services to an experienced and skilled provider.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a multi-cloud management company that can take care of all your business requirements. We have a team of skilled and experienced technology professionals who can handle all your cloud-management needs. We've got the latest technology ready to deliver top-quality service and support to our clients.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Multi-cloud Management Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing your services to **Nimble Acuity** can help you manage and reduce costs effectively, allowing you to focus more on value-added areas of the business. Some of the key services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Cloud Deployment Solutions:</strong> We offer an automation platform that helps you deliver many different IT solutions to your customers, helping you develop a reputation as a trusted company.</li>
              <li><strong>Cloud Network Services:</strong> Our management network services provide a single point of control over your entire network, enabling you to quickly and easily monitor critical IT systems for failures.</li>
              <li><strong>Multi-Cloud Management Platforms:</strong> Our platform is a comprehensive tool that allows you to collect and manage all the cloud resources used by your company, with support for multiple technology stacks.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Multi-Cloud Management?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing multi-cloud management services to **Nimble Acuity** can help you take advantage of a range of rewards and benefits. Here are some key reasons to choose us:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing Options:</strong> We provide our customers with several different pricing plans to choose from.</li>
              <li><strong>Data Security:</strong> We are ISMS (Information Security Management System) certified, ensuring that your data is handled securely.</li>
              <li><strong>High-quality Services:</strong> As an ISO-certified firm, all our services adhere to a strict code of conduct and meet a high set of specifications.</li>
              <li><strong>Experienced Team:</strong> We have a team of seasoned professionals who can handle all your cloud needs and more.</li>
              <li><strong>Quick Turnaround Time:</strong> We operate through several delivery locations across the globe, allowing us to provide services at the fastest time.</li>
              <li><strong>Highly Scalable Services:</strong> Our team has the capacity and resources to provide a scalable cloud management service as your requirements demand.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Streamline Your Cloud Operations?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** is a leading pioneer in providing multi-cloud management services. With a wide range of services, we offer multiple options to choose from, helping customers save both time and money. We have a pool of experienced and reliable experts to deliver the kind of services you seek while managing your infrastructure responsibly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient multi-cloud management company, your search ends here. Get in touch with us today!
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

export default MultiCloudManagement;