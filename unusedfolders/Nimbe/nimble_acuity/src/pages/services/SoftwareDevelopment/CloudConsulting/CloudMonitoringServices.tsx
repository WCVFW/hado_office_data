import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CloudMonitoringServices: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Cloud Monitoring Services
            </h2>
            <p className="text-lg text-gray-600">
              Get access to full-stack monitoring of your applications on the cloud by choosing services from our experienced and skilled team.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Are you struggling to get a clear picture of your cloud-based applications' uptime, performance, and health? Are you looking for extremely skilled and talented cloud monitoring experts who can take care of all your requirements? Then, the best step for your firm would be to outsource cloud monitoring services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a cloud monitoring service company that can be your one-stop-shop for all your needs. We have some of the most experienced and talented cloud monitoring experts on board who can take care of all your requirements. We leverage the latest tools and technologies while delivering top-notch services.
            </p>
          </div>

          {/* Cloud Monitoring Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Cloud Monitoring Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              **Nimble Acuity** has been one of the leading providers of cloud-based monitoring services to global clients for over two decades now. We have the resources to understand each client's unique requirements and provide them with customized services within a quick time. Some of the key cloud monitoring services we offer include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>AWS Integration Services:</strong> We can help you discover and monitor AWS resources including EC2, Auto Scaling, SQS, RDS, and ELB within a short time.</li>
              <li><strong>Google Cloud Integration:</strong> We have the required skills and expertise to discover and monitor Google Cloud resources such as App Engine, Compute Engine, and Cloud SQL.</li>
              <li><strong>Uptime Monitoring Services:</strong> Our team can help you monitor the availability of VMs, URLs, and APIs from probes around the globe.</li>
              <li><strong>Logging Integration Services:</strong> Our team can help you get critical information from the dashboard and charts and create logs.</li>
              <li><strong>Cluster Support Services:</strong> We have the required skills and resources to provide clients with cluster support services and define relationships based on tags and regions.</li>
            </ul>
          </div>

          {/* Other Services You Can Benefit From */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Other Services You Can Benefit From
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li>IT Risk & Security Management</li>
              <li>Remote Monitoring Services</li>
              <li>Digital Forensics Services</li>
              <li>Data Center Services</li>
            </ul>
          </div>

          {/* Why Choose Nimble Acuity for Cloud Monitoring Services? */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Choose Nimble Acuity for Cloud Monitoring Services?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Outsourcing cloud monitoring services to **Nimble Acuity** can give you access to a series of benefits. Some of the major reasons for you to choose us as your cloud monitoring services company are listed here:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing:</strong> We help our customers with highly flexible and cost-effective pricing options that will suit their business requirements perfectly.</li>
              <li><strong>Superior Quality Services:</strong> Being an ISO certified organization, you can rest assured that all the cloud-based infrastructure monitoring services delivered by us will be of the best quality.</li>
              <li><strong>Data Security:</strong> We are an ISO/IEC 27001:2022 ISMS certified firm, which ensures all the data you share with us is completely safe and secure.</li>
              <li><strong>SPOC:</strong> We will assign you a dedicated manager who will be the single point of contact for all your needs.</li>
              <li><strong>Quick Turnaround Time:</strong> Our team operates through several delivery locations across the globe, enabling us to deliver services within a quick time.</li>
              <li><strong>Best Infrastructure:</strong> We have access to the latest cloud monitoring tools and international-standard office spaces.</li>
              <li><strong>Skilled Experts:</strong> Our team comprises some of the most experienced and skilled cloud monitoring experts who can cater to all your requirements efficiently.</li>
              <li><strong>Easily Scalable Services:</strong> We have the required skills and bandwidth to ramp up the service requirements and scale up the team size as needed.</li>
              <li><strong>24/7 Support:</strong> All our teams are available at all times via phone or email to answer your queries.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Monitor Your Cloud?
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has been one of the pioneers in providing quality cloud monitoring services and a gamut of other infrastructure management services to global clients. We have some of the most experienced and skilled cloud monitoring specialists who can cater to all your needs with ease. We leverage the power of the latest and the best cloud monitoring tools and software while delivering top-notch services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you are looking for a reliable and efficient cloud monitoring service provider, then your search ends here. Get in touch with us today!
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

export default CloudMonitoringServices;