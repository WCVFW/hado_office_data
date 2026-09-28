import React from "react";
import CSmainmenu from "../CSmainmenu";

const TattooDesignServices: React.FC = () => {
  const services = [
    "Custom Tattoo Design",
    "Tattoo Designs for Both Genders",
    "Tattoo Design for Business",
  ];

  const processSteps = [
    "Receiving Order: Acquire business requirements and communicate estimates",
    "Designing: Prepare a custom tattoo design plan based on client input",
    "Quality Review and Feedback: Evaluate completed designs and make fixes if needed",
    "Delivery: Final designs delivered securely if no revisions are required",
  ];

  const benefits = [
    "Flexible Pricing Solutions: Pay only for what you need",
    "100% Secure Data: GDPR compliant, secure channels",
    "ISO Certified Tattoo Design Services Provider",
    "Cutting-Edge Technology: Adobe Illustrator, Sketch, and more",
    "Quick Turnaround Times",
    "Scalability: Scale as per requirements",
    "Professional Tattoo Design Team",
    "Round-the-clock Support",
  ];

  const caseStudies = [
    "Prepress and Vector Artwork for Dublin Client: Nimble provided custom designs per client request and delivered within assured TAT.",
    "Vector Artwork for US Label Designer: Nimble offered vector artwork promptly for a leading US-based label and sticker designer.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-purple-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nimble Tattoo Design Services</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Authentic tattoo designs for your business and customers at rates starting at $12/hour.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Need tattoo designs that can be stenciled on products or skin? Nimble Auity converts your ideas into professional designs with utmost quality control.
        </p>
        <p>
          Whether you have an existing idea or need original tattoo concepts, our expert designers deliver exceptional results.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">Tattoo Design Services We Offer</h2>
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
          <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">Tattoo Design Process</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-800">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">Why Choose Nimble Tattoo Design Services</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-purple-600 mb-8 text-center">Client Case Studies</h2>
        <ul className="space-y-4 text-gray-800">
          {caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-purple-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Custom Tattoo Design Today</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with Nimble Auity to create professional tattoo designs that elevate your brand. Contact us for a free consultation and quote.
        </p>
        <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default TattooDesignServices;
