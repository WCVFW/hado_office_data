import React from "react";
import CSmainmenu from "../CSmainmenu";

const MerchandiseDesignServices: React.FC = () => {
  const services = [
    "Custom Merchandise Design",
    "Merchandise Designs for Both Genders",
    "Merchandise Design for Business",
  ];

  const processSteps = [
    "Receiving Order: Collect client information to understand merchandise design requirements.",
    "Merchandise Design: Turn client ideas into a basic art form, then develop detailed designs.",
    "Quality Review and Feedback: Assess quality and implement changes if required.",
    "Delivery: Convert final designs into client-requested formats and deliver securely.",
  ];

  const benefits = [
    "Flexible Pricing Solutions: Adjust project scope based on complexity and budget.",
    "100% Secure Data: Ensures data safety at all times.",
    "ISO Certified Merchandise Design Services Provider",
    "Cutting-Edge Technology: Adobe Illustrator, Sketch, and other professional tools.",
    "Quick Turnaround Times: Agile design process for rapid delivery.",
    "Scalability: Scale services up or down based on your requirements.",
    "Professional Merchandise Design Team: Experienced in ISO-compliant design practices.",
    "Round-the-clock Support: 24/7 assistance for immediate satisfaction.",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to a Dublin-based Client: High-quality prepress artwork delivered swiftly.",
    "Nimble Provided Vector Artwork to US-based Label Designer: Flawless vector artwork completed on time.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-purple-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Merchandise Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get merchandise designs that attract attention with our top designers at rates starting at $12/hour.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Need merchandise designs that look savvy and appealing? Nimble Auity delivers high-quality, cost-effective merchandise design services. Our expert designers transform your ideas into perfect designs, saving time, effort, and cost.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
          Merchandise Design Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Design Process */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
            Our Merchandise Design Process
          </h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
          Why Choose Nimble for Merchandise Design
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
            Client Case Studies
          </h2>
          <ul className="space-y-4 text-gray-800">
            {caseStudies.map((caseStudy, index) => (
              <li key={index}>{caseStudy}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Professional Merchandise Designs Today
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Work with Nimble Auity’s top designers to create unique, appealing merchandise designs that elevate your brand. Contact us now for expert merchandise design services.
        </p>
        <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default MerchandiseDesignServices;
