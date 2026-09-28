import React from "react";
import CSmainmenu from "../CSmainmenu";

const ToteBagDesignServices: React.FC = () => {
  const services = [
    "Custom Tote Bag Design",
    "Tote Bag Designs for Both Genders",
    "Tote Bag Design for Business",
  ];

  const processSteps = [
    "Receiving Order: Collect client information and prepare project map & estimates",
    "Designing: Create concepts based on client input and obtain approval",
    "Quality Review and Feedback: Review sample and make necessary corrections",
    "Delivery: Dispatch final designs securely",
  ];

  const benefits = [
    "Flexible Pricing Solutions: Pay only for what you need",
    "100% Secure Data: GDPR compliant, secure channels",
    "ISO Certified Services Provider",
    "Cutting-Edge Technology: Adobe Illustrator, Sketch, etc.",
    "Quick Turnaround Times",
    "Scalability: Scale up as per requirements",
    "Professional Tote Bag Design Team",
    "Round-the-clock Support",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-green-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Tote Bag Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Powerful custom tote bag designs to get your brand noticed at rates starting at $12/hour.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Looking for professional tote bag designs? Nimble Auity converts your ideas into ready-to-print, brand-focused designs.
        </p>
        <p>
          Whether simple brand insignias or custom artwork, our expert designers ensure your tote bags make a lasting impression.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Tote Bag Design Services We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Tote Bag Design Process</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Why Choose Nimble Tote Bag Design Services</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Client Case Studies</h2>
        <ul className="space-y-4 text-gray-800">
          <li>
            <strong>Prepress and Vector Artwork for Dublin Client:</strong> Nimble provided custom designs per client request and delivered within assured TAT.
          </li>
          <li>
            <strong>Vector Artwork for US Label Designer:</strong> Nimble offered vector artwork promptly for a top US-based label and sticker designer.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Custom Tote Bag Design Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to create professional tote bag designs that elevate your brand. Contact us for a free consultation and quote.
        </p>
        <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ToteBagDesignServices;
