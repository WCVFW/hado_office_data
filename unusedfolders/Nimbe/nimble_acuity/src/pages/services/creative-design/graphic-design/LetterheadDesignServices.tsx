import React from "react";
import CSmainmenu from "../CSmainmenu";

const LetterheadDesignServices: React.FC = () => {
  const services = [
    "Custom Letterhead Design",
    "Full-color Letterhead Design",
    "Corporate Letterhead Design",
    "Industry-specific Letterhead Design",
    "Brand Letterhead Design",
  ];

  const designOptions = [
    "Paper or Stock in Satin, Gloss or Matte finish",
    "Heavyweight paper to print double-sided",
    "Full-color or custom color",
    "Embossing",
    "Matching Style for your Business e.g. business cards, envelopes, stationery, banners, brochures, etc.",
    "Follow-on Pages or Supplementary Pages",
  ];

  const processSteps = [
    "Creative Brief: Provide company logo, colors, and budget via our form or email.",
    "Get a Quote: Receive a quote based on your requirements.",
    "Custom Designs: Receive multiple design samples within 48 hours.",
    "Select your Design and Download: Approve your favorite design and download print-ready files.",
  ];

  const benefits = [
    "Cost-efficient and Time-saving",
    "ISO Certified Company: International standard quality",
    "High Data Security: Your designs and data remain private",
    "World-class Infrastructure: Advanced workspace & latest tools",
    "High-quality Services: Experienced designers & graphic artists",
    "More Creative: 100+ designers offering multiple ideas",
    "Advanced Technology and Tools: Adobe Illustrator, CorelDraw, Adobe InDesign, MS-Word",
    "Access to Highly Experienced Team: 100+ designers with 15+ years experience",
    "Quick Turnaround Time: Sample designs in 48 hours",
    "24/7 Customer Support",
    "Money-back Guarantee",
  ];

  const caseStudies = [
    "Nimble Provided Prepress and Vector Artwork to a Dublin-based Client: Custom designs delivered within TAT.",
    "Nimble Provided Vector Artwork to US-based Label Designer: Vector artwork delivered in record time.",
  ];

  return (
    <section className="bg-gray-50">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-blue-600 text-white py-16 px-6 md:px-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Letterhead Design Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          A perfect letterhead design conveys your identity to your customers
          and adds value to your business. Nimble Auity provides professional
          services at budget-friendly rates starting at $12/hour.
        </p>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-16 space-y-4 text-gray-800">
        <p>
          Every time a company sends a letter, bill, or invoice, a branded
          business letterhead is used. Nimble Auity offers creative letterhead
          design solutions for clients locally and internationally for over
          26+ years, providing professional designers, quality assurance, and
          advanced tools.
        </p>
      </div>

      {/* Services Offered */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Letterhead Design Services We Offer
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

      {/* Design Options */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Letterhead Design Options
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {designOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Design Process */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Letterhead Design Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-800">
          {processSteps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
            Why Choose Nimble for Letterhead Design Services
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Client Case Studies */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">
          Client Case Studies
        </h2>
        <ul className="space-y-4 text-gray-800">
          {caseStudies.map((caseStudy, index) => (
            <li key={index}>{caseStudy}</li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16 text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get Your Professional Letterhead Today
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Nimble Auity creates professional, high-quality letterheads that
          enhance your brand identity. Contact us today for a free quote and
          start impressing your clients.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default LetterheadDesignServices;
