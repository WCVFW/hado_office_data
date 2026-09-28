import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const ParallaxDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Parallax Web Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Give your site visitors a sensation of depth and immersive browsing with our professional parallax web design services.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              At **Nimble Acuity**, we understand that a website's design is not just about showy graphics; it's about creating a cohesive and engaging experience that drives traffic and quality leads. Our team has strong expertise in offering **custom parallax web design services** to clients worldwide. We focus on making your front end visually appealing and highly functional.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our parallax design solutions offer you the best chance to impress your site visitors and convert them into valuable leads. We create a feeling of depth and immersive browsing, which leads to better performance and user feedback. By partnering with us, you can focus on your core business while we ensure your website delivers a stunning experience.
            </p>
          </div>

          {/* Our Parallax Design Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Parallax Web Design Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Parallax Design and Animation</h4>
                <p>We create a smooth, animated effect by layering background elements to scroll at different rates. Using **HTML5 and CSS3**, we implement modern design concepts to give your website a dynamic and professional look.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Custom Theme Creation</h4>
                <p>If you're unsure about the right theme, our experts can help you select and customize a theme that makes a powerful impression. Our solutions are designed to fit your brand identity and stand out in the market.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Single-Page Design</h4>
                <p>We can implement the captivating 3D effect on specific pages, especially those with high traffic. This approach allows you to highlight key content and provide a focused, immersive experience without redesigning your entire site.</p>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Parallax Web Design Process
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">
                We follow a streamlined, 7-step process to ensure all deliverables are met on time and to your exact specifications:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>**Strategy and Proposal:** We start by working with you to understand your specific needs and business requirements.</li>
                <li>**Designing:** Our project heads design a wireframe that incorporates your design vision.</li>
                <li>**Client Approval:** The wireframe is provided for your approval before we proceed to development.</li>
                <li>**Development and Integration:** Our development team brings the design to life using the latest web technologies.</li>
                <li>**Quality Check:** We perform multi-level quality checks to ensure the design meets our high standards and your expectations.</li>
                <li>**Go-live:** The site is launched, and we monitor it to analyze data and make any necessary improvements.</li>
                <li>**Support and Maintenance:** After launch, we provide ongoing support, optimization, and future enhancements for your scalable design.</li>
              </ol>
            </div>
          </div>

          {/* Why Partner with Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cost-Effective Pricing:</strong> Our services are tailored to your needs, ensuring you get high-quality results without an excessive price tag.</li>
              <li><strong>High-Quality Services:</strong> We are an **ISO 9001:2015 certified** service provider, guaranteeing the consistent delivery of top-notch solutions.</li>
              <li><strong>Rapid Turnaround Time:</strong> Our streamlined processes allow us to implement solutions quickly and within the stipulated time frame.</li>
              <li><strong>Scalable Solutions:</strong> Our designs are highly scalable, allowing your project to grow and evolve with your business needs.</li>
              <li><strong>100% Data Security:</strong> Your data is always safe with us. We employ robust security systems to prevent breaches and data loss.</li>
              <li><strong>24/7 Support:</strong> We offer unmatched support to clients across different geographies through phone, email, and web chat.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for a Stunning Parallax Website?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity is a leading provider of parallax web design services. With decades of experience, we have the infrastructure and expertise to offer world-class design solutions that drive traffic and sales. Get in touch with us to receive a custom proposal and a free quote.
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

export default ParallaxDesign;