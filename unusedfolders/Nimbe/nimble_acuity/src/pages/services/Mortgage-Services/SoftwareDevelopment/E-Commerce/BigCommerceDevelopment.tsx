import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const BigCommerceDevelopment: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              BigCommerce Development Services
            </h2>
            <p className="text-lg text-gray-600">
              Boost your eCommerce success with our user-friendly BigCommerce development services, including custom design, seamless integration, and ongoing support.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Navigating the constantly shifting digital terrain can be challenging, but you're never alone with our BigCommerce development services. We have a deep understanding of the complexities of the BigCommerce platform, leveraging this knowledge to craft solutions tailored to your specific needs and hurdles. Whether it's theme customization, performance optimization, or smooth migration, our team of certified BigCommerce developers is primed to deliver resilient, scalable, and feature-packed eCommerce solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we recognize the critical role customization plays in your business. Our services go beyond the initial setup, offering continuous maintenance and support to ensure your store always operates at peak performance. We're committed to helping you revolutionize your eCommerce journey and spur sustainable growth for your business.
            </p>
          </div>

          {/* BigCommerce Development Services We Offer */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              BigCommerce Development Services We Offer
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              As your trusted BigCommerce partner, we can customize your store to deliver the digital experiences that appeal to your customers and streamline back-end operations. Our offerings include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Store Setup, Design & Development</h4>
                <p>We leverage BigCommerce's robust functionality to offer speedy and reliable solutions. We design engaging storefronts, enhance functionality, and handle the entire development project from inception to implementation.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom App & Plugin Development</h4>
                <p>We provide tailored app, plugin, and extension development services to enhance your online store's functionality, drive sales, and give your business a competitive edge. This includes intelligent chatbot development.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Theme & Template Creation</h4>
                <p>Our conversion-centric theme customization and bespoke template creation services ensure you have a high-quality, distinct site that mirrors your brand and stands out from the crowd.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Migration & Integration Services</h4>
                <p>We ensure a smooth transition from platforms like Magento or Shopify to BigCommerce without downtime or data loss. We also seamlessly integrate vital systems and payment gateways for a secure and efficient process.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Support, Maintenance & Optimization</h4>
                <p>We offer continuous support and maintenance, ensuring your store is always updated and optimized. Our services include catalog management and comprehensive SEO optimization to boost your online visibility.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Advanced API & Headless Solutions</h4>
                <p>Leverage our expertise in API development and headless architecture to build a flexible, content-rich, and scalable e-commerce platform that offers a superior user experience and boosts conversions.</p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our extensive experience with the BigCommerce platform and our commitment to your success make us the ideal partner for your e-commerce journey.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Proficient BigCommerce Developers:</strong> Our team of certified developers brings a wealth of knowledge and technical proficiency, delivering robust and scalable solutions that align with your business objectives.</li>
              <li><strong>Proven Track Record:</strong> We have a proven success in delivering projects across various industries, creating visually stunning and highly functional e-commerce stores that drive conversions.</li>
              <li><strong>Top-Most Security:</strong> We are committed to protecting your business and customer data. We ensure your platform has top-level security, including PCI DSS compliance.</li>
              <li><strong>Cost-Effective Solutions:</strong> Our premium BigCommerce development services are offered at competitive prices with a transparent pricing model and no hidden fees, ensuring a high return on investment.</li>
              <li><strong>Scalable Operations:</strong> Our solutions are designed on a modern MACH architecture, offering high flexibility and scalability to easily handle increases in traffic and sales, ensuring seamless experiences for your customers.</li>
              <li><strong>Responsive Designs:</strong> We create stores that are responsive and optimized for all devices, ensuring your customers enjoy a consistent shopping experience.</li>
              <li><strong>24/7 Support:</strong> Our commitment does not end at development. We offer continual support and maintenance services, ensuring your store operates smoothly and uninterrupted.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Build Your Online Store?
            </h3>
            <p className="text-gray-700 mb-6">
              Let us help you create a powerful online presence with our top-notch BigCommerce development services. We have the necessary skills and experience to build a new site, re-platform, or extend your existing retail operation.
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

export default BigCommerceDevelopment;