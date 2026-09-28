import React from "react";
import CSmainmenu from "../CSmainmenu";

const TradeShowBoothDesign: React.FC = () => {
  const services = [
    "Custom Trade Show Booth Designs",
    "Modular Trade Show Booth Designs",
    "Portable Trade Show Booth Designs",
  ];

  const processSteps = [
    "Receiving Order: Collaborate with clients to understand design requirements and TAT expectations.",
    "Designing: Collect client ideas to create solutions that are easy to deploy and redeploy.",
    "Quality Review and Feedback: QA team ensures designs comply with standards.",
    "Delivery: Approved designs are delivered securely via SFTP.",
  ];

  const benefits = [
    "Flexible Pricing Solutions: Customize your order to stay within budget.",
    "100% Secure Data: Client data is protected at all times.",
    "ISO Certified Trade Show Booth Design Services Provider",
    "Cutting-Edge Technology: Professional software used for realistic designs.",
    "Quick Turnaround Times: Fast results without compromising quality.",
    "Scalability: Increase bandwidth to accommodate larger orders.",
    "Professional Trade Show Booth Design Team: Experienced designers for stellar results.",
    "Round-the-clock Support: 24/7 service in your preferred language.",
  ];

  const caseStudies = [
    "Nimble Provided 50 Illustrations a Day to a US-based Client: Cost-effective, high-quality illustrations.",
    "Nimble Provided Illustrations for a Denmark-based Writer: Fantasy book illustrations delivered efficiently.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-purple-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Trade Show Booth Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Become the center of attention at trade shows with booths designed by our top designers at rates starting at $12/hour.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Plan trade shows with confidence. Nimble Auity delivers top-notch trade show booth designs tailored to your marketing goals. Our experts create authentic booth designs that attract visitors and convert them into customers.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">
          Trade Show Booth Design Services We Offer
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
            Our Trade Show Booth Design Process
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
          Why Choose Nimble for Trade Show Booth Design
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
          Get Your Trade Show Booth Designed by Experts
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to create trade show booths that attract visitors and elevate your brand. Contact us today for expert trade show booth design services.
        </p>
        <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default TradeShowBoothDesign;
