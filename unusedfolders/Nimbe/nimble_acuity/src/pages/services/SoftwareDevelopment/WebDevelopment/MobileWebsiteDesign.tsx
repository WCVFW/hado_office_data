import React from 'react';
import { Link } from "react-router-dom";
import SoftwareHeader from "@/pages/services/SoftwareDevelopment/SoftwareHeader";

const MobileWebsiteDesign: React.FC = () => {
  return (
    <>
      {/* Header */}
      <SoftwareHeader />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

          {/* Hero Section */}
          <div className="max-w-4xl mb-12 pt-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#006A7C] mb-4">
              Mobile Website Design Services
            </h2>
            <p className="text-lg text-gray-600">
              Get a fast, customer-friendly, robust, and intuitive mobile website designed by experts at affordable rates.
            </p>
          </div>

          {/* Intro */}
          <div className="max-w-5xl mb-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              With more mobile devices in the world than laptops and desktops combined, having a mobile-friendly website is no longer an option—it's a necessity. Businesses must prioritize creating a seamless experience for the over 2.5 billion smartphone users worldwide. When you're planning your business website, you need to think about a traditional site and a mobile-optimized one.
            </p>
            <p className="text-gray-700 leading-relaxed">
              **Nimble Acuity** is a leading provider of offshore mobile website design services, dedicated to helping you develop innovative and responsive websites. Our team of expert designers and developers has extensive experience working with clients across various industries, ensuring we deliver high-quality, mobile-first solutions.
            </p>
          </div>

          {/* Our Mobile Website Design Solutions */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Mobile Website Design Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Custom Designs</h4>
                <p>We create highly customized mobile website designs that display perfectly on any device, regardless of screen size or resolution, ensuring a consistent user experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile Versioning</h4>
                <p>We can create a miniaturized version of your current website that automatically detects the user's device type, providing a smooth and intuitive browsing experience.</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold text-[#006A7C]">Mobile SEO Services</h4>
                <p>With Google favoring mobile-friendly sites, a strong SEO foundation is crucial. Our team provides quality mobile SEO services to help your website rank higher than your competitors.</p>
              </div>
            </div>
          </div>

          {/* Our Mobile Website Design Process */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Our Design Process
            </h3>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">01.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Requirement Analysis</h4>
                  <p>We begin by carefully analyzing your business goals and objectives to devise a strategic plan that is sent to you for approval.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">02.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Design & Development</h4>
                  <p>Once approved, our team begins designing and building both the front-end and back-end of your mobile website, ensuring a fast and intuitive interface.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-3xl font-bold text-[#006A7C]">03.</span>
                <div className="flex-1 space-y-1">
                  <h4 className="text-xl font-bold text-[#006A7C]">Testing & Delivery</h4>
                  <p>We run rigorous tests to ensure the website is bug-free and runs smoothly on every device. Once it passes all checks, we deliver the final design to you.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Nimble Acuity */}
          <div className="max-w-6xl mb-16">
            <h3 className="text-2xl font-semibold text-[#006A7C] mb-4">
              Why Partner with Nimble Acuity?
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Cross-platform Compatibility:</strong> Our mobile web designs are compatible with multiple platforms and operating systems, providing a consistent user experience.</li>
              <li><strong>Analytics Enabled:</strong> Our designs are equipped with analytics to help you analyze web page performance and better understand customer preferences.</li>
              <li><strong>Experienced Designers:</strong> We have a highly talented team of mobile web designers who can handle any of your requirements within a quick timeframe.</li>
              <li><strong>Affordable Pricing:</strong> Our pricing is highly flexible, ensuring you only pay for the effort and resources invested in your project.</li>
              <li><strong>Information Security:</strong> As an ISO/IEC 27001:2022 ISMS certified organization, we guarantee that all your data is completely secure.</li>
              <li><strong>Quick Turnaround Time:</strong> Our talented team and multiple delivery centers allow us to provide services within a quick turnaround time.</li>
              <li><strong>Ease of Scalability:</strong> We have the bandwidth to easily scale up or down based on your project requirements.</li>
              <li><strong>Single Point of Contact:</strong> We assign a dedicated project manager who will be your single point of contact for all your needs and updates.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="max-w-4xl mt-16">
            <h3 className="text-2xl font-bold text-[#006A7C] mb-4">
              Ready for a Mobile-First Experience?
            </h3>
            <p className="text-gray-700 mb-6">
              Nimble Acuity has been a leading provider of mobile website design services for over two decades. Our team stays updated with the latest trends and delivers innovative, high-quality designs.
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

export default MobileWebsiteDesign;