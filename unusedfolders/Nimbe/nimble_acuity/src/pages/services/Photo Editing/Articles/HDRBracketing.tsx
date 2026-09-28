import React from "react";
import PEMainMenu from "../PEmainmenu";

const HDRBracketing: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Everything You Need to Know About HDR Bracketing</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn how to create HDR images using manual and auto HDR bracketing techniques along with exposure and focus bracketing tips.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <p>
          Photography bracketing turns bracketed images into HDR by using advanced HDR bracketing techniques. 
          This guide explains how to create HDR using different bracketing techniques and shares best practices for shooting bracketed images.
        </p>
      </section>

      {/* Manual & Auto HDR Bracketing */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Manual & Auto HDR Bracketing</h2>
        <p>
          <strong>Manual Bracketing:</strong> Find the correct shutter speed for accurate exposure. Take overexposed and underexposed shots at 1–3 stop increments using the exposure compensation dial.
        </p>
        <p>
          <strong>Auto HDR Bracketing:</strong> Faster and easier than manual bracketing. Ideal for dynamic scenes as your camera adjusts exposure automatically.
        </p>
      </section>

      {/* Exposure Bracketing */}
      <section className="bg-gray-50 py-12 px-6 space-y-6">
        <h2 className="text-2xl font-semibold mb-4">Exposure Bracketing Photography</h2>
        <p>
          Exposure bracketing captures multiple images at different exposures and blends them to create an HDR image. Typically, three shots are enough: one underexposed, one normal, and one overexposed.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Use a tripod to avoid camera shake.</li>
          <li>Set ISO low for good lighting conditions.</li>
          <li>Use aperture priority or manual mode for control.</li>
          <li>Adjust exposure compensation for under/over-exposed shots.</li>
        </ul>
      </section>

      {/* Focus Bracketing */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Focus Photography Bracketing</h2>
        <p>
          Focus bracketing involves shooting multiple photos at different focal points. Later, blend these images to achieve a wider depth of field or macro precision.
        </p>
        <p>
          Recommended lens aperture: f/5.6 – f/8. Cover foreground, midground, and background in multiple shots for maximum depth.
        </p>
      </section>

      {/* Focus Stacking */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Focus Stacking in Photoshop</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Layer all images on top of each other.</li>
          <li>Auto-align layers to remove movement.</li>
          <li>Auto-blend layers or manually blend with a soft brush at 10% opacity.</li>
          <li>Adjust layer opacity gradually for natural blending.</li>
        </ol>
      </section>

      {/* Merging HDR */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Merging Bracketed Images into HDR</h2>
        <p>
          Use software like Photoshop or Lightroom to merge bracketed photos:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Photoshop:</strong> Use Bridge or Camera Raw → Merge to HDR → Refine and remove ghosts.</li>
          <li><strong>Lightroom:</strong> Develop module → Merge → HDR → Auto-align & de-ghost → Save HDR file.</li>
        </ul>
      </section>

      {/* Conclusion & CTA */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Shoot HDR Like a Pro
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          With exposure and focus bracketing techniques, you can capture high-dynamic-range landscapes and interiors with ease. Nimble Acuity offers professional photo editing to enhance your HDR images.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us for HDR Editing
        </button>
      </section>
    </div>
  );
};

export default HDRBracketing;
