import React from "react";
import CSmainmenu from "../CSmainmenu";

const PosterDesignServices: React.FC = () => {
  const posterTypes = [
    "Banners / Hoardings",
    "Brochures and Booklets",
    "Signage",
    "Postcards or Greeting Cards",
    "Direct Mailers",
    "Stickers and Tags",
    "Car Wrap Design",
    "Point of Sale",
  ];

  const processSteps = [
    "Determining the Format of Poster",
    "Designing the Content",
    "Suitable Template",
    "Designing the Poster",
    "Colouring",
    "Final Clear up",
  ];

  const benefits = [
    "Standard Certifications: ISO 9001:2015 certified",
    "Creative Design: Trendy, customized, and budget-conscious",
    "Cost-Efficient: Up to 60% cost savings compared to others",
    "High Data Security: NDA, VPN, secured servers, ISO/IEC 27001:2022 compliant",
    "Latest Tools and Technology: Up-to-date design software and prototyping",
    "Domain Expertise: Healthcare, IT, telecom, marketing, and more",
    "Round the Clock Client Support: Dedicated manager available 24/7",
    "Promotional Ideas: Innovative concepts for better engagement",
    "Various Designs: Posters, booklets, cards, hoardings, banners",
    "World Class Infrastructure: End-to-end project responsibility",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-yellow-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Poster Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Creative poster designs that reflect your brand, starting at just $10/hour. Increase conversions and make your message stand out.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Is poster design becoming an uphill challenge for your workflow? Nimble Auity provides expert poster design services to help brands deliver impactful messaging. With two decades of experience, our custom designs focus not just on attention, but on actual conversions.
        </p>
        <p>
          Our professional designers fuse creativity with innovation, ensuring your posters stand out and effectively communicate your brand story.
        </p>
      </div>

      {/* Poster Design Types */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Poster Design Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posterTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Poster Design Process We Follow</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index} className="font-medium">{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-yellow-600 mb-8 text-center">Why Choose Nimble Poster Design Services</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-yellow-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Hire professional designers at Nimble Auity to create high-quality, impactful posters. Contact us now for a free quote and watch your brand message come alive.
        </p>
        <button className="px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default PosterDesignServices;
