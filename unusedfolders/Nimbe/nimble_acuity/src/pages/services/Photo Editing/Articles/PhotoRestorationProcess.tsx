import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotoRestorationProcess: React.FC = () => {
  const damages = [
    "Dogears on images",
    "Something written on or drawn over images",
    "Faded colors",
    "Rips and tears",
    "Water damage",
    "Oil damage",
    "Smudges",
    "Blurriness",
    "Blemishes",
    "Wrinkles and creases",
  ];

  const steps = [
    {
      step: "01. Receive & Scan Images",
      description:
        "Send your physical photos to us, and we will use special scanning techniques to get the clearest representation of the image as possible. If you prefer digital images, we’ll send scanning instructions.",
    },
    {
      step: "02. Identify the Problems",
      description:
        "We identify all issues such as tears, blemishes, and color problems. Some clients prefer to keep certain elements like grain, so we always confirm before restoring.",
    },
    {
      step: "03. Piece Together Torn Images",
      description:
        "Using specialized software and editing, we bring torn edges together and fill in gaps with precise colors to make the damage invisible.",
    },
    {
      step: "04. Fixing Blemishes and Retouching",
      description:
        "We remove grainy marks, stains, water damage, and fingerprints, while adjusting details to soften or sharpen the image as required.",
    },
    {
      step: "05. Color Correction and Enhancement",
      description:
        "Enhance image clarity and color. Convert sepia to black & white, or highlight elements with vibrant tones such as flowers, cheeks, or lips.",
    },
    {
      step: "06. Revive Old Memories the Easy Way",
      description:
        "From individuals to studios, anyone can use our restoration services. Send us as many images as you need, and let our experts bring them back to life.",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Digital Photo Restoration Process – Technique to Recreate Old Images
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Preserve memories, revive history, and recreate old photographs with
          Nimble Acuity’s expert digital photo restoration services.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg text-gray-700 mb-6">
          Over time, photos fade, tear, and gather marks of age. With our
          advanced restoration techniques, we bring them back to life so your
          personal and cultural stories can be passed to future generations.
        </p>
      </section>

      {/* Damages Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          What Kind of Photos Can Be Fixed?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {damages.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-xl shadow p-4 text-center hover:shadow-md transition"
            >
              <p className="text-gray-700">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Photo Restoration Process at Nimble Acuity
        </h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-purple-600 mb-2">
                {s.step}
              </h3>
              <p className="text-gray-700">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nimble Photo Restoration Services to Nimble Acuity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Our skilled editors specialize in restoring old images with precision
          and care. Whether it’s one photo or a collection, we’re here to help
          you bring memories back to life.
        </p>
        <button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PhotoRestorationProcess;
