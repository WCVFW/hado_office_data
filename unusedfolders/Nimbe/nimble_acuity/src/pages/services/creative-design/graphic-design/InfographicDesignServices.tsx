import React from "react";
import CSmainmenu from "../CSmainmenu";

const InfographicDesignServices: React.FC = () => {
  const services = [
    "Responsive Infographic Design",
    "Business Infographic Design",
    "Creative Infographic Design",
    "Illustrator Infographic Design",
    "Animated Infographic",
    "Infographic Design for Products",
    "Infographic Design for Social Media",
    "Infographic Design for PPT",
    "Infographic Design for Google Slides",
    "Infographic Video Design",
    "Infographic Design for Newsletters",
  ];

  const benefits = [
    "High-quality: ISO-certified firm with multi-level quality checks",
    "World-class Infrastructure",
    "Advanced Tools: Latest infographic software",
    "Scalable Support: Flexible staffing options",
    "Experienced Team",
    "Data Security: Secure file transfer protocols",
    "Express Design Delivery",
    "Dynamic Pricing: Individualized estimates",
  ];

  const additionalServices = [
    "Graphic Design Services",
    "3D Design Services",
    "Illustration Services",
    "Animation Services",
    "Audio Editing Services",
    "Video Editing Services",
  ];

  const caseStudies = [
    "Sticker Design Services for an Advertising Firm: Designed 753 stickers with 99.9% accuracy for a Melbourne-based agency within 30 days.",
    "Designing Restaurant Menus for a Reputed Printing Company: Designed 200+ menus with over 97% accuracy for an international printing company.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-green-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Infographic Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Transform your content into visually appealing, high-resolution, and reader-friendly infographics.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Communicate complex ideas effectively with professional infographic design services from Nimble Auity. Simplify complex data and convert it into visually digestible and shareable content.
        </p>
        <p>
          Serving global clients for over 26 years, we handle complex projects while delivering a wide range of infographic creation services.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Our Custom Infographic Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Why Choose Nimble Infographic Design Services</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Additional Services */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Additional Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {additionalServices.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Client Case Studies</h2>
        <ul className="space-y-4 text-gray-800">
          {caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Custom Infographics Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Work with Nimble Auity to transform your data into visually compelling infographics. Contact us today to get started with a free consultation and quote.
        </p>
        <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default InfographicDesignServices;
