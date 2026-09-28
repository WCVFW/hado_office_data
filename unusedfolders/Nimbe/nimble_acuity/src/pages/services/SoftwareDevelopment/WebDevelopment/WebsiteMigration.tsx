import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const WebsiteMigration: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Website Migration Services
            </h2>
            <p className="text-lg text-gray-600">
              Ensure a seamless website transfer without losing valuable traffic. We provide professional, SEO-friendly migration services to maintain your site's visibility and rankings.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand the complexities of website migration, from the sheer volume of work to the risks to your data integrity and SEO performance. Our expert team ensures that your website transfer is a smooth, stress-free process. We specialize in performing **SEO-friendly migrations** that protect your organic visibility and search engine rankings. We can also assist with migrating your Google Analytics, Google Tag Manager, and even domain names.
            </p>
          </div>

          {/* Website Migration Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Website Migration Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">SEO Migration Services</h4>
                <p>We move your website quickly and efficiently while minimizing SEO risks and downtime. Our services include comprehensive URL redirect mapping, canonicalization, and site move verification on major search engines to ensure all links and rankings are preserved.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">CMS Migration Services</h4>
                <p>Seamlessly migrate your existing website to any CMS, including WordPress, Drupal, or Joomla. We work with you to evaluate your current site, create a custom migration strategy, and test all functionalities to ensure a flawless transfer.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Web Hosting Migration</h4>
                <p>We facilitate the transfer of your website to a new web host, ensuring minimal downtime and optimal performance. Our process includes full data backup, careful migration, and updating domain names to guarantee a consistent user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Domain Migration Services</h4>
                <p>Changing your domain name can be risky. We implement an optimal redirect strategy and perform appropriate URL mapping to guide search engine crawlers and transfer authority to your new domain, protecting your established online presence.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Affordable Pricing:</strong> Our solutions are reasonably priced to provide the highest return on your investment.</li>
              <li><strong>High-quality Services:</strong> We are committed to an ISO-certified, structured process to ensure every migration is reliable and robust.</li>
              <li><strong>Experienced Team:</strong> Our team has extensive experience in providing website migration services to clients across various industries.</li>
              <li><strong>Quick Turnaround Time:</strong> We are dedicated to fast and efficient service delivery, ensuring your project is completed on time without compromising quality.</li>
              <li><strong>Data Security:</strong> We comply with international data security and privacy laws to ensure your data is always protected.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Migrate Your Website?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has a proven track record of delivering superior, secure, and efficient website migration services. Let us help you create a tailored strategy to meet your specific migration goals and ensure your online presence remains strong.
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

export default WebsiteMigration;