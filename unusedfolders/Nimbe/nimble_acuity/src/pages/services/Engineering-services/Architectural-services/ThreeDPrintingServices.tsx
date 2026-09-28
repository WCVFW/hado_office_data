import React from "react";
import ESmainmenu from "../ESmainmenu";

const ThreeDPrintingServices: React.FC = () => {
  const industries = [
    "Medical Equipment Manufacturers",
    "Corporates",
    "Real Estate Developers",
    "Architects",
    "Individual Professionals",
    "Furniture Design and Manufacturing",
  ];

  const processSteps = [
    "Receive Drawings from Client: Send detailed drawings or hand-drawn sketches.",
    "Receive Specifications: Provide exact specifications for color, texture, and finishes.",
    "File Creation: Team creates 3D printing files in your choice of format (.WRL, .CTL, .STL, .OBJ).",
    "Final Delivery: Completed 3D printing SLA or STL files delivered to the client.",
  ];

  const pricingOptions = [
    "File-based: Ideal for low-volume or single project requirements.",
    "Hourly-based: Perfect for recurring 3D printing services.",
    "Full-time equivalents (FTE): For continuous projects requiring full-time service.",
  ];

  const benefits = [
    "24/7 availability of experienced 3D printing experts",
    "3D printing file compatibility with any 3D printer, e.g., EDEN350V, Proto3000",
    "Reduce current 3D printing costs by 40–70%",
    "No need to constantly upgrade 3D printing software",
    "Save on additional resources or infrastructure costs",
    "Expertise in Fused Deposition Modeling (FDM) and PolyJet technology",
    "Over 26+ years of extensive experience",
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          3D Printing File Creation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble works with you to convert your designs into ready-to-print 3D models for easy prototyping and high-quality results.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 text-lg leading-relaxed">
        <p>
          Nimble Acuity is a pioneer in 3D printing and architectural services, providing high-quality 3D printing CAD file creation for clients worldwide. From gadgets to furniture, vehicles, jewelry, and mechanical parts, our skilled 3D drafters and modelers deliver accurate, detailed, and eye-catching designs.
        </p>
      </section>

      {/* Industries Served */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">3D Printing File Creation Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-green-600 mb-2">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Our 4-Step 3D Printing File Creation Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Pricing Options */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Flexible Pricing Options</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          {pricingOptions.map((option, idx) => (
            <li key={idx}>{option}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Benefits of Partnering with Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Bring Your Ideas to Life with Nimble</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Whether you have your 3D files ready or just an idea, Nimble Acuity will expertly design your model and provide high-quality 3D printing outputs.
        </p>
        <button className="px-6 py-3 bg-white text-green-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ThreeDPrintingServices;
