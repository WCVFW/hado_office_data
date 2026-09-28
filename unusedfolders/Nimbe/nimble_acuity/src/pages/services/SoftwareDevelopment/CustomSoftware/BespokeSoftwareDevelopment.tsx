import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const BespokeSoftwareDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Bespoke Software Development Services
            </h2>
            <p className="text-lg text-gray-600">
              We develop software to your unique specifications, helping you gain a competitive advantage with seamless support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Sometimes, off-the-shelf software doesn't align with unique business goals. Companies with specific needs prefer to work with a bespoke software development service provider like Nimble Acuity. We help you adapt software to your unique demands and integrate it seamlessly into your existing systems.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nimble Acuity is a leading bespoke software development company offering a variety of solutions, including web apps, mobile apps, and desktop software. We deliver business-ready solutions, fine-tuned for every unique need at affordable rates.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Comprehensive Bespoke Software Solutions
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Bespoke Application Development:</strong> We create engaging experiences that influence customer happiness and boost conversion rates.</li>
              <li><strong>Bespoke Application Software Development:</strong> Our expertise helps us build high-security and high-performance applications tailored to your business needs.</li>
              <li><strong>Bespoke Web Content Management:</strong> We design personalized and consistent digital experiences by creating a high-quality content management system.</li>
              <li><strong>Bespoke Mobile Solutions:</strong> Our team develops intuitive and immersive mobile solutions to increase engagement and provide a compelling user experience.</li>
              <li><strong>Bespoke Software in DevOps:</strong> We automate the end-to-end delivery process on popular cloud platforms, ensuring our solutions are ready to integrate seamlessly.</li>
              <li><strong>Bespoke Testing Solutions:</strong> We use both automation and manual testing to ensure error-free application delivery across all platforms.</li>
              <li><strong>Big Data Bespoke Development:</strong> We help you navigate Big Data challenges and ensure orderly data aggregation and interpretation for actionable insights.</li>
              <li><strong>Bespoke Cloud Managed Services:</strong> Get round-the-clock infrastructure managed services to handle your cloud needs with zero supervision.</li>
            </ul>
          </div>

          {/* Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Streamlined Bespoke Software Development Process
            </h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700">
              <li><strong>Initial Consultation:</strong> You contact us with your specific business need.</li>
              <li><strong>Analysis and Solutions:</strong> We examine your requirements and advise on the correct solutions.</li>
              <li><strong>Tool Selection:</strong> We select the most suitable bespoke business software development tools for your project.</li>
              <li><strong>Quality Control:</strong> Our professionals perform a multi-tier evaluation to ensure the procedure is flawless.</li>
              <li><strong>Flexible Preparation:</strong> The quality control results allow for faster preparations for future needs.</li>
              <li><strong>Reporting and Analytics:</strong> We provide detailed reports and data that can be analyzed for clear results.</li>
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>Affordable Pricing:</strong> Our flexible pricing gives you complete control without channel fees or commitments.</li>
              <li><strong>Latest Tools:</strong> We use robust, modern technologies for solution customization, ensuring fast setup and delivery.</li>
              <li><strong>ISO Compliant:</strong> We adhere to ISO standards as a leading bespoke software development service provider.</li>
              <li><strong>Secure Data Management:</strong> We ensure data security 24/7/365 with superior data management practices.</li>
              <li><strong>High-Quality Services:</strong> We are committed to delivering the best possible support and quality to our customers.</li>
              <li><strong>Quick Turnaround:</strong> We are flexible in meeting your expectations and delivering results quickly.</li>
              <li><strong>Scalable Solutions:</strong> Our services provide scalable solutions that increase the efficiency of your organization.</li>
              <li><strong>24/7 Support:</strong> We provide round-the-clock assistance via phone, email, and web chat.</li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Bespoke Software?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity provides a broad range of best-in-class enterprise software solutions that help customers grow faster. Choose us today to benefit from our high-performance bespoke software development services.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              If you're seeking timely, dependable, efficient, and cost-effective bespoke software development and maintenance, simply get in touch right now.
            </p>
            <Link to="/contact">
              <button className="bg-[#006A7C] text-white px-8 py-3 rounded-xl shadow hover:bg-[#005662] transition font-medium">
                Get in Touch Today
              </button>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
};

export default BespokeSoftwareDevelopment;