import React from "react";
import CSmainmenu from "../CSmainmenu";

const ApparelDesignServices: React.FC = () => {
  const services = [
    "Custom Apparel Design",
    "Apparel Designs for T-shirts",
    "Apparel Designs Consultation",
  ];

  const processSteps = [
    "Receiving Order: Understand client's design requirements and TAT expectations.",
    "Designing: Collect ideas, create basic design, get approval, then add details.",
    "Quality Review and Feedback: QA teams ensure the design aligns with client's expectations.",
    "Delivery: Final designs delivered in the requested format if no revisions are needed.",
  ];

  const benefits = [
    "Flexible Pricing Solutions: Customize orders to reduce costs.",
    "100% Secure Data: Protects all design ideas and intellectual property.",
    "ISO Certified Apparel Design Services Provider",
    "Cutting-Edge Technology: Adobe Illustrator, Sketch, and top design tools.",
    "Quick Turnaround Times: Fast and agile design delivery.",
    "Scalability: Solutions can be scaled to meet your needs.",
    "Professional Apparel Design Team: Experienced and quality-compliant.",
    "Round-the-clock Support: 24/7 assistance for global clients.",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to a Dublin-based Client: Professional, high-quality artwork delivered quickly.",
    "Nimble Provided Vector Artwork to US-based Label Designer: Flawless vector artwork services delivered efficiently.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-purple-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Apparel Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Scorch the competition with powerful apparel designs created by top fashion designers to get your brand noticed at rates starting at $12/hour.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Got apparel ideas to turn into printable designs but lack in-house experts? Nimble Auity offers world-class apparel design services tailored to your needs, boosting productivity and helping you scale efficiently.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
          Our Apparel Design Services
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
            Our Apparel Design Process
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
          Why Choose Nimble for Apparel Design
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
          Get Professional Apparel Designs Today
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Work with Nimble Auity’s team of expert designers to create unique, print-ready apparel designs that elevate your brand. Contact us now for custom apparel design services.
        </p>
        <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ApparelDesignServices;
