import React from "react";
import CSmainmenu from "../CSmainmenu";

const PrepressInfrastructure: React.FC = () => {
  const infrastructureItems = [
    {
      title: "Color Management System",
      description:
        "Nimble Auity ensures color consistency throughout prepress production using Gretag Macbeth hardware and software. This system guarantees accurate color reproduction for all client requirements."
    },
    {
      title: "Proofing",
      description:
        "Our proofing services utilize a variety of flatbed machines for wet proofing, ensuring precision before final printing."
    },
    {
      title: "CIP3",
      description:
        "We implement CIP3 digital ink management software to streamline prepress production and supply accurate ink profiles to printing presses."
    },
    {
      title: "Copy Dot Scanner",
      description:
        "Nimble integrates film using copy dot scanners, converting halftone film separations into digital formats for seamless workflow."
    },
    {
      title: "Scanners",
      description:
        "High-end drum scanners like S3900 Hell and Screen SG8060P ensure superior color precision and accuracy in all scanned images."
    },
    {
      title: "Work Stations",
      description:
        "Our professionals use high-end MACs and PCs with the latest prepress software for precise retouching, color correction, and manipulation."
    },
    {
      title: "Connectivity",
      description:
        "High-bandwidth leased lines facilitate rapid and secure transfer of digital data across our prepress network."
    },
    {
      title: "RenderView Remote Proofing",
      description:
        "Clients can review and approve proofs from anywhere, anytime using RenderView remote proofing technology."
    },
    {
      title: "Electronic Imposition",
      description:
        "We use Brisque RIP and Preps software to electronically impose digital files, improving accuracy and efficiency."
    },
    {
      title: "Digital Proofing",
      description:
        "Our team uses advanced digital proofers with 1440 dpi resolution to ensure print-ready files are flawless."
    },
    {
      title: "CTP and Digital Plates",
      description:
        "CTP (Computer-to-Plate) technology with digital plates enables sharp, precise images in prepress production."
    }
  ];

  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-green-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Prepress Infrastructure at Nimble Auity
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover the cutting-edge tools, technology, and workflows that Nimble Auity uses to deliver accurate, high-quality prepress solutions globally.
        </p>
      </section>

      {/* Infrastructure List */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infrastructureItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <p className="mb-4">
          Partnering with Nimble for prepress solutions gives your organization a competitive advantage with precision, speed, and top-quality results.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition">
          Contact Nimble Auity for Prepress Services
        </button>
      </section>
    </div>
  );
};

export default PrepressInfrastructure;
