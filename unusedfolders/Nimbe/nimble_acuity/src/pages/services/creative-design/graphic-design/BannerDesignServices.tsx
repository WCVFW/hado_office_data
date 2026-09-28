import React from "react";
import CSmainmenu from "../CSmainmenu";

const BannerDesignServices: React.FC = () => {
  const bannerTypes = [
    "Web Banner Designs",
    "Outdoor Banners",
    "Event Banners",
    "On-site Promotional Banners",
    "Print Banner Designs",
    "Display Ad Banners",
  ];

  const processFlow = [
    "Briefing: Nimble's Business Development Managers get banner design creative brief from the client.",
    "Input: Client transfers sample images or input Word documents via FTP, Dropbox, email, or G-Drive.",
    "Banner Design Creation: Graphic design professionals create banner designs in dynamic (HTML, GIF) and static (JPG, PNG, TIFF) formats using Adobe Illustrator, FXP software, etc.",
    "Review: Edits (if any) are completed according to client instructions.",
    "Final Output: Final designs transferred to the client via Dropbox or FTP.",
  ];

  const benefits = [
    "Affordable Pricing - Competitively priced services, hourly/FTE/ad-hoc options.",
    "Original Designs - No two banners look alike; stand out from the crowd.",
    "Fast Deliveries - Strict turnaround times, professional designs within one business day.",
    "Qualified Team - Designers with 3+ years of experience handling any banner requirement.",
    "Remarketing - Reach out to customers who have previously engaged with your brand.",
    "Brand Awareness - Introduce your brand to target audiences effectively.",
    "Increased Sales - Display banners improve ROI when targeted effectively.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-green-700 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Banner Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Engage your visitors and increase click-through rates with professional banner designs from Nimble Auity, delivered quickly and affordably.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Whether you need web banners, outdoor banners, or promotional banners for events, Nimble Auity creates professional designs that attract attention, increase engagement, and improve ROI. Our banners serve as powerful marketing tools that enhance brand visibility and online presence.
        </p>
        <p>
          Our designers blend colors, images, logos, and text effectively, ensuring your banner communicates the right message across all platforms and devices.
        </p>
      </div>

      {/* Banner Types */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Types of Banner Designs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bannerTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process Flow */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Process</h2>
          <div className="space-y-6">
            {processFlow.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-green-700 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-gray-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Benefits of Nimble Banner Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <p className="text-gray-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-green-700 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Opt for Nimble Auity’s creative banner design services and reach your target audience effectively. Contact us for a free trial or quote.
        </p>
        <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default BannerDesignServices;
