import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const SitefinityDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Sitefinity CMS Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Modernize your web and application management with custom Sitefinity CMS solutions and automation-ready features.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you need a CMS-based web solution with scalable features and top-tier reliability, **Nimble Acuity** is your fastest way to get there. By partnering with us for **Sitefinity CMS development**, you can integrate powerful features like drag-and-drop interfaces, inline editing, and digital asset management. Our experts can also develop custom features for managing products, personalizing the online shopping experience, and ensuring **PCI-DSS compliance**.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As a leading **Sitefinity development company**, we use this platform for rapid prototyping of future-ready CMS. Our key differentiators include our ability to deliver fast scaling, seamless data migration, and a shorter time to deployment. We'll help you unlock greater productivity and improve your business processes.
            </p>
          </div>

          {/* Our Sitefinity Development Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Sitefinity CMS Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Sitefinity Consulting</h4>
                <p>We provide expert guidance to help you build a powerful, user-friendly website. Just tell us the features you need, and we'll customize a solution to fit your specific requirements.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Sitefinity Implementation</h4>
                <p>We excel at integrating Sitefinity with other enterprise applications like SharePoint, ERP, and CRM to boost performance and streamline your business processes with minimal supervision.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Customization & Integration</h4>
                <p>We can unlock greater productivity across your enterprise by customizing the Sitefinity architecture to meet your unique business needs and integrate seamlessly with your existing systems.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migration Support</h4>
                <p>Our team leads the way in Sitefinity migration, ensuring a planned and timely transfer of your data to the CMS platform of your choice without any data loss.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Maintenance & Support</h4>
                <p>We provide dedicated maintenance services, including launching, testing, and bug fixes, to ensure high availability and minimal downtime for your Sitefinity systems.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">B2B & B2C Support</h4>
                <p>We can manage your online presence with smarter B2B and B2C Sitefinity solutions, creating custom integrations that are more effective than traditional CRMs.</p>
              </div>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Solutions:</strong> Our services are a more affordable option than hiring a full-time professional, providing you with high-quality results within your budget.</li>
              <li><strong>High-Quality Services:</strong> We are an **ISO 9001:2015 certified** company, so quality is always a priority. We go above and beyond to ensure our deliverables are top-notch.</li>
              <li><strong>Rapid Turnaround Time:</strong> We have one of the fastest turnaround times in the industry, delivering agile solutions that meet your deadlines.</li>
              <li><strong>Guaranteed Scalability:</strong> Our solutions are designed to be highly scalable, allowing your system to expand easily on demand as your business grows.</li>
              <li><strong>100% Data Security:</strong> The safety of your digital data is our top priority. Our team employs stringent security measures to protect your information and prevent data loss.</li>
              <li><strong>Round-the-Clock Support:</strong> Our team is available 24/7 and can be reached via phone, email, or webchat to provide you with unmatched support.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Modernize Your CMS?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has a reputation for delivering world-class Sitefinity CMS solutions. With decades of experience, we have the infrastructure and expertise to provide top-tier CRMs that boost business performance. Get in touch with us now to receive a quick and free quote.
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

export default SitefinityDevelopment;