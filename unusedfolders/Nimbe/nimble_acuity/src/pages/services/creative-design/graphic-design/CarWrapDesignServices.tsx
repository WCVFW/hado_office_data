import React from "react";
import CSmainmenu from "../CSmainmenu";

const CarWrapDesignServices: React.FC = () => {
  const wrapTypes = [
    "Color Change Wrap",
    "Graphics Wrap",
    "Matte Finish",
    "Satin Finish",
    "Partial Wraps",
  ];

  const processSteps = [
    "Requirement Analysis: Understand your design concept and requirements.",
    "Exploring Designers: Select top designers to create sample wraps.",
    "Feedback: Send samples to you and gather feedback.",
    "Editing Phase: Make changes based on your suggestions.",
    "Delivery: Provide the final car wrap design files.",
  ];

  const benefits = [
    "Pocket-Friendly Pricing",
    "ISO Certified Company: ISO 9001:2015",
    "Cutting-Edge Technology: Latest tools and software",
    "Quick Turnaround Times",
    "Single Point of Contact",
    "Scalability: Meet high demand without exceeding deadlines",
    "Round-the-Clock Support",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to a Dublin-based Client: Customized designs delivered within TAT.",
    "Nimble Provided Vector Artwork to US-based Label Designer: Delivered high-quality vector artwork on time.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-green-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Car Wrap Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Capture attention and promote your business with eye-catching car wrap designs by Nimble Auity at budget-friendly rates.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Car wrap designs are an innovative offline advertising method, offering high visibility and exposure at minimal investment. Nimble Auity provides professional, tailored solutions for businesses to maximize marketing impact.
        </p>
        <p>
          Our skilled team ensures designs are aligned with your brand identity while keeping your vehicle aesthetically appealing.
        </p>
      </div>

      {/* Car Wrap Types */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Car Wrap Types We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wrapTypes.map((type, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800">{type}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Our Car Wrap Design Process</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-green-600 mb-8 text-center">Why Choose Nimble for Car Wrap Design Services</h2>
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
          {caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-green-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Custom Car Wrap Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Let Nimble Auity create visually striking car wraps that maximize your brand visibility. Contact us today for consultation and a quote.
        </p>
        <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default CarWrapDesignServices;
