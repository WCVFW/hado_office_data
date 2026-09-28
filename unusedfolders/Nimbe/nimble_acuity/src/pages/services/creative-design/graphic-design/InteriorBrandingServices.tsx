import React from "react";
import CSmainmenu from "../CSmainmenu";

const InteriorBrandingServices: React.FC = () => {
  const services = [
    "Interior Signage Designs",
    "Interior Design Mockups",
    "Interior Graphics",
    "Interior Decoration Designs",
    "Commercial Interior Design",
  ];

  const benefits = [
    "Access to dedicated professional designers for seamless collaboration",
    "Unique and innovative brand-integrated designs that enhance interiors",
    "Savings on operational and infrastructural costs",
    "Time efficiency to focus on other core business activities",
  ];

  const whyChoose = [
    "Highly Affordable Interior Branding Designs: Dedicated designers or FTEs as per project requirements",
    "Skilled and Experienced Designers: Proficient in integrating your brand in interiors",
    "Quick Turnaround Time: Fast delivery while upholding your brand identity",
    "Impeccable Designs: Designs that instantly captivate your target audience",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-green-700 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Interior Branding Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Transform your corporate or retail spaces into experiential environments that reinforce your brand identity and engage your audience.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Consistent branding starts with employee engagement and immersive environments. Nimble Auity provides interior branding designs that embed your brand into your premises—from ceilings, floors, and walls to counters and retail spaces.
        </p>
        <p>
          Our global experience allows us to understand the complexities of interior branding, delivering designs that uphold your brand identity while creating a comfortable, experiential space for employees and visitors alike.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Our Interior Branding Design Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Benefits of Interior Branding Design Services</h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Why Choose Nimble */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Why Choose Nimble Auity?</h2>
        <ul className="list-decimal list-inside space-y-3 text-gray-800">
          {whyChoose.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-green-700 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Started Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to transform your interiors into brand-engaging spaces that captivate employees and customers alike. Contact us now for a free quote.
        </p>
        <button className="px-8 py-4 bg-white text-green-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default InteriorBrandingServices;
