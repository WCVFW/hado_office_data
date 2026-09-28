import React from "react";
import CSmainmenu from "../CSmainmenu";

const PrepressTips: React.FC = () => {
  const tips = [
    {
      title: "Color Profiles Optimization",
      description:
        "Use ICC profiles and calibrated monitors to ensure color consistency across devices, minimizing shifts during printing and achieving accurate spot colors."
    },
    {
      title: "Meticulous Pre-flight Checks",
      description:
        "Pre-flight software automatically detects low resolution, missing fonts, and improper bleed settings, helping avoid costly printing mistakes."
    },
    {
      title: "Right Imposition Techniques",
      description:
        "Optimize page layout and sheet usage with imposition software to ensure correct page order, reduce paper waste, and facilitate folding and binding."
    },
    {
      title: "Higher Image Resolution",
      description:
        "Ensure images are high-resolution to maintain sharpness and detail in printed materials such as magazines, comics, and journals."
    },
    {
      title: "Accurate Font Embedding",
      description:
        "Embed fonts in PDFs to maintain consistent typography across platforms, avoiding substitutions or reflows during printing."
    },
    {
      title: "Effective Proofing",
      description:
        "Use digital or hard proofing (e.g., Epson proofs with color calibration) to validate color accuracy and layout before mass printing."
    },
    {
      title: "Managing Bleed and Trim Areas",
      description:
        "Define safe zones and 3mm bleed margins to prevent design elements from being cut off or misaligned during trimming."
    },
    {
      title: "Print File Format Enhancement",
      description:
        "Save final designs in print-optimized formats such as PDF/X to preserve layout, fonts, and colors and minimize RIP errors."
    },
    {
      title: "Clearly Defining Print Specifications",
      description:
        "Align with your printer on paper stock, coating, and finishing options to ensure your design works seamlessly with production capabilities."
    },
    {
      title: "File Compression and Design Compacting",
      description:
        "Use lossless compression (PDF or ZIP) to reduce file size without compromising quality, enabling efficient storage and transfer."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          10 Prepress Tips for Effective Print Publishing
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Nimble Auity shares essential prepress techniques to ensure high-quality, precise, and professional print production.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="mb-4">
          Prepress bridges the gap between creative vision and tangible print reality. It requires precision, technical knowledge, and a detailed understanding of design and print technologies.
        </p>
        <p>
          From color management to proofing, file preparation, and imposition, prepress techniques ensure that your designs translate flawlessly onto the final printed product.
        </p>
      </section>

      {/* Tips Section */}
      <section className="py-16 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Top 10 Prepress Tips
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
          Incorporating these prepress tips into your workflow ensures professional print results, reduces errors, and aligns your creative vision with high-quality production standards.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
          Contact Nimble Auity for Prepress & Printing Services
        </button>
      </section>
    </div>
  );
};

export default PrepressTips;
