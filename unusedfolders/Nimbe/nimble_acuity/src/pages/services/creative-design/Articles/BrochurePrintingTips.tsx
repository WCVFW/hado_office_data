import React from "react";
import CSmainmenu from "../CSmainmenu";

const BrochurePrintingTips: React.FC = () => {
  const tips = [
    {
      title: "Be Innovative and Original",
      description:
        "A brochure should seamlessly convey what a business stands for. Draw inspiration from competitors and different industries, but ensure your design remains unique and innovative."
    },
    {
      title: "Look Not Just for a Design Expert",
      description:
        "Choose designers who understand your business and its USP. This ensures high-quality brochures by eliminating guesswork and aligning design with business goals."
    },
    {
      title: "Selecting The Right Paper",
      description:
        "Heavier paper gives a professional look, increasing credibility and reliability in the eyes of the customer. Invest in quality for better impact."
    },
    {
      title: "Designing and Printing Resolution",
      description:
        "Images and artwork should be at least 300dpi. Avoid low-quality images to ensure vibrant, sharp prints that reflect the professionalism of your brand."
    },
    {
      title: "Accounting for Print Bleed",
      description:
        "Include extra space beyond page borders to cover paper movement during printing. This prevents inconsistencies and ensures the final brochure looks polished."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Brochure Printing: 5 Useful Tips to Remember
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity shares essential tips to create impressive, professional brochures that captivate and convert your audience.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Brochures remain a key marketing tool for businesses of all sizes. High-quality brochures not only capture interest but can also convert readers into loyal customers.
        </p>
        <p>
          Understanding design, print quality, and messaging nuances ensures your brochure stands out while aligning with business objectives.
        </p>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          5 Brochure Printing Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-2">{tip.title}</h3>
              <p className="text-gray-700">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="mb-4">
          Nimble Auity helps you combine creativity and aesthetics to produce high-quality brochures that represent your business effectively.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition">
          Contact Us for Brochure Design Services
        </button>
      </section>
    </div>
  );
};

export default BrochurePrintingTips;
