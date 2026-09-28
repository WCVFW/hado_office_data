import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";
import React from 'react';
import { Link } from "react-router-dom";

const CustomTemplateDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Custom Template Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Create a stunning and trustworthy online presence with high-quality, user-friendly templates designed to attract customers and showcase your business offerings.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Research shows that over 94% of customers don't trust a business or e-commerce website with an unappealing design. With Nimble Acuity's custom template design services, you can get ahead of your competitors with a high-quality, user-friendly design.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our custom template designs are easy-to-use and affordable. We offer the flexibility to add site components, widgets, features, and color schemes to perfectly match your brand identity.
            </p>
          </div>

          {/* Services */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Website Template Design Service Offerings
            </h3>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <strong>Custom eBay Template Design:</strong>
                <p className="mt-2">Differentiate your eBay store with a mobile-compatible and fully responsive design optimized for quick loading. We include eBay-specific elements like promo banners, navigation bars, and custom galleries for product images, with a cohesive design and matching color palette throughout.</p>
              </li>
              <li>
                <strong>Custom Joomla Template Design:</strong>
                <p className="mt-2">For this popular CMS, our skilled designers can create a fully responsive template with an extensive range of module positions and flexible layouts. We also provide a unique pick of color schemes, wireframes, and font selections and can quickly convert existing PSD files into a functional Joomla template.</p>
              </li>
              <li>
                <strong>Custom WordPress Template Design:</strong>
                <p className="mt-2">We work with the user-friendly WordPress platform to deliver quality templates within a tight budget. Our services include converting your self-designed PSD files into a functional WordPress theme, supporting semantic coding for efficient SEO, and integrating popular social media platforms.</p>
              </li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 columns-1 sm:columns-2 md:columns-2">
              <li><strong>In-built SEO:</strong> Our custom template designs include built-in search engine optimization.</li>
              <li><strong>HTML & CSS:</strong> We provide options for HTML and PSD with CSS versions of your designs.</li>
              <li><strong>Clean Code:</strong> We use clear, cross-border codes to ensure seamless performance.</li>
              <li><strong>Original Designs:</strong> We offer original and new website template design ideas that make your website stand out.</li>
              <li><strong>Easy to Modify:</strong> Our templates can be easily modified and updated as your business grows.</li>
              <li><strong>Professional Graphics:</strong> Our team creates professionally designed graphics for your website.</li>
              <li><strong>Cross-Browser Compatibility:</strong> We meticulously test every template for compatibility with popular browsers.</li>
              <li><strong>Dedicated Support:</strong> Our team is always available to provide ongoing customer support.</li>
              <li><strong>Quick Turnaround:</strong> We can work within very short timeframes to get your website online quickly.</li>
              <li><strong>Cost-Effective Pricing:</strong> Our pricing offers are unbeatable compared to other service providers.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready to Design Your Custom Template?
            </h3>
            <p className="text-gray-700 mb-6">
              Our custom template designs are backed by a skilled team with years of experience. With expertly coded and completely secure CSS/XHTML websites, you can enjoy a seamless web interface that works flawlessly.
            </p>
            <p className="text-gray-700 mb-8 font-medium">
              Contact us to outsource custom template design services and see the difference. We will be glad to assist you with a customized business, e-commerce, or retail website template design.
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

export default CustomTemplateDesign;