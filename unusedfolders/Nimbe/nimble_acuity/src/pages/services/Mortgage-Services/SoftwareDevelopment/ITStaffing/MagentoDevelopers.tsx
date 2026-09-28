import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const MagentoDevelopers: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Hire Magento Developers
            </h2>
            <p className="text-lg text-gray-600">
              Get robust eCommerce solutions developed by professional Magento Developers. Hire our Magento developers starting at just $2200 per month.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With more and more marketers jostling for space in the e-commerce arena, you need to ensure that your online storefront can stand out, attract customers, and offer an exciting buying experience. Offering a seamless and consistent experience across every touchpoint is crucial. Businesses can achieve this by launching Magento online stores that are beautifully designed and crafted to include specific functionality.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we pride ourselves on our ability to provide bespoke digital solutions that help our customers meet their business goals. Our team of software developers continuously upgrades their skills to include the latest technology in their repertoire.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Magento Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We specialize in crafting high-performance Magento eCommerce stores that can help you meet all your business requirements. Our Magento Developers come with various specialties, so you can hire as per your needs:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Custom Magento Development:</strong> Our team is adept at creating high-octane eCommerce sites with rich functionality to match your specific requirements.</li>
              <li><strong>Multiple Magento Store Development:</strong> We can create as many Magento sites as you want and help you manage all of them smoothly through a centralized admin interface.</li>
              <li><strong>Magento Theme Development:</strong> We create unique themes that truly reflect your brand, ensuring they run seamlessly across all browsers and devices.</li>
              <li><strong>Responsive Magento Developers:</strong> Our experts will ensure your Magento store runs smoothly, enabling customers to browse and buy on the go from their mobile devices.</li>
              <li><strong>Mobile Backend Development:</strong> When you hire Magento developers from us, they can help secure the financial transactions of customers purchasing from your store on mobile devices.</li>
              <li><strong>Magento Module Development:</strong> Hire dedicated Magento programmers from **Nimble Acuity** to build custom modules and ensure your site is unique.</li>
              <li><strong>Magento Extension Development:</strong> If your business requires functionality not currently available, our developers can create custom extensions for you.</li>
              <li><strong>Magento Version Upgrade Services:</strong> Our team will efficiently and seamlessly upgrade your Magento eCommerce site for both the Community and Enterprise editions.</li>
              <li><strong>Magento Maintenance and Support:</strong> We offer continued, round-the-clock support to ensure the uninterrupted and smooth performance of your online store.</li>
              <li><strong>Magento Migration Services:</strong> We are happy to help you migrate your eCommerce site to Magento, or even to a newer version, with minimal disruption.</li>
              <li><strong>BI and Analytics:</strong> We'll configure your site to generate detailed reports, giving you a synopsis of how your business is performing.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you hire Magento developers from **Nimble Acuity**, you get professionals with the right skills to build your eCommerce site exactly as you want it. We are a leading provider of IT staffing for Magento developers for the following reasons:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>People With the Right Skill:</strong> Choose the Magento developers with the skills sets you need for your business.</li>
              <li><strong>Cost-Saving Solution:</strong> Save about 40 to 60% of the cost of having a full-time Magento developer on your payroll.</li>
              <li><strong>Transparent Services:</strong> We provide complete integrity and transparency, keeping you in the loop at every stage.</li>
              <li><strong>Flexible Hiring Models:</strong> We offer flexible models for hiring—hourly, monthly, or project-wise.</li>
              <li><strong>Superb Infrastructure:</strong> Save big on infrastructure and operational expenditure.</li>
              <li><strong>Timely Services:</strong> Outsourcing IT staffing saves you time and ensures your projects are delivered within deadlines and budgets.</li>
              <li><strong>Advanced SDK and Technology:</strong> Get applications powered by state-of-the-art technologies and modern work methods.</li>
              <li><strong>Dedicated SPOC:</strong> A dedicated point of communication will be assigned to each team.</li>
              <li><strong>Round-the-clock Support:</strong> Enjoy easy access and round-the-clock communication through multiple channels.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Choose Nimble Acuity to Hire Magento Developers
            </h3>
            <p className="text-gray-700 mb-6">
              **Nimble Acuity** has experienced Magento professionals who are experts in consumer behavior, stay on top of market trends, and are passionate about innovation. We are the world's leading IT staffing experts who can help you find competent developers with the right skill set for building your eCommerce sites.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us now to hire offshore Magento CMS developers. Our team will evaluate your needs and provide the correct information, including the cost.
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

export default MagentoDevelopers;