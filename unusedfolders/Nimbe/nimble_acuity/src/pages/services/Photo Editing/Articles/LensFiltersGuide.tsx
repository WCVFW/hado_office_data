import React from "react";
import PEMainMenu from "../PEmainmenu";

const LensFiltersGuide: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-green-700 to-teal-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">What Are Lens Filters and Why Should You Use Them?</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Discover the types of lens filters, their uses, and how they can enhance your photography.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          Lens filters are external attachments for your camera lens that serve multiple purposes: protecting the lens and creating unique visual effects.
          They help photographers adapt to changing lighting conditions and bring creativity to their shots.
        </p>
        <p>
          Filters come in various sizes and qualities, ranging from circular screw-in filters to special effects filters. Choosing the right filter depends on your photography style and lens type.
        </p>
      </section>

      {/* Filter Types */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Types of Lens Filters</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Circular Screw-in Filters</h3>
        <p className="mb-4">
          Common for eliminating glare and UV protection. Comes in different densities and colors, with thickness affecting vignette and lens hood compatibility.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Square and Rectangular Filters</h3>
        <p className="mb-4">
          Used in landscape photography for capturing wide scenes and adjusting contrast. Rectangular filters allow graduated effects for changing light conditions.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Drop-in Filters</h3>
        <p className="mb-4">
          Ideal for telephoto lenses. Polarizing or clear drop-in filters help isolate subjects and create stunning imagery.
        </p>
      </section>

      {/* Camera Lens Filters Explained */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Camera Lens Filters Explained</h2>
        <ul className="list-disc list-inside space-y-3 mb-6">
          <li>
            <strong>UV Filter:</strong> Protects your lens from scratches and fingerprints. Look for multi-resistant coating (MRC) to avoid image issues.
          </li>
          <li>
            <strong>Polarizing Filter:</strong> Enhances outdoor shots with water and skies. Rotating alignment adjusts polarization, but reduces light by 2 stops.
          </li>
          <li>
            <strong>Neutral Density (ND) Filter:</strong> Limits light to allow longer exposure for effects like foggy waterfalls or portrait flash in daylight.
          </li>
          <li>
            <strong>Color Warming Filters:</strong> Adjust white balance or mood with color subtraction or color correction. Mostly replaced by software today.
          </li>
          <li>
            <strong>Close-up Filters:</strong> Secondary lens for macro photography. Affordable but slightly reduces image quality compared to dedicated macro lenses.
          </li>
          <li>
            <strong>Special Effects Filters:</strong> Adds soft glow, bokeh, or vintage effects, mostly replaced by digital editing tools.
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-teal-700 to-green-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Photo Editing Services to Professionals
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          At Nimble Acuity, we offer full-suite photo editing solutions to enhance your images with precision and creativity. With years of experience, we help bring your vision to life.
        </p>
        <button className="px-6 py-3 bg-white text-teal-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default LensFiltersGuide;
