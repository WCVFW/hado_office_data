import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotoshopServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Adobe Photoshop Services</h1>
        <p className="max-w-3xl mx-auto text-lg">
          High-quality digital image editing services using Adobe Photoshop, catering to portrait studios, publishing houses, e-commerce stores, and real estate firms worldwide.
        </p>
      </section>

      {/* Key Features */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Key Features of Adobe Photoshop Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Convert images from color to black and white and vice-versa</li>
          <li>Crop unwanted parts of an image</li>
          <li>Add details like captions, date, or time</li>
          <li>Resize images - enlarge or reduce</li>
          <li>Adjust contrast, brightness, and overall image quality</li>
        </ul>
      </section>

      {/* Photoshop Features */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Features of Adobe Photoshop</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Compatible with Windows, Mac OS, and Linux (with CrossOver)</li>
          <li>Edit and manipulate digital images</li>
          <li>Refine images or develop graphics</li>
          <li>Supports multiple color schemes: RGB, CMYK, Grayscale, Bitmap</li>
        </ul>
      </section>

      {/* Photoshop CS6 Features */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Features of Photoshop CS6</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Paint directly on 3D models, add filter layers</li>
          <li>New HUD (Head Up Display) shows vital info at the cursor</li>
          <li>Wrap 2D images around 3D shapes & convert gradient maps to 3D</li>
          <li>Add depth to layers and text</li>
          <li>Print-quality output with ray-tracing rendering engine</li>
          <li>Content-Aware Scaling & revolutionary 3D editing</li>
          <li>Enhanced color correction tools: Dodge, Burn, and Sponge</li>
          <li>Editable 3D properties, motion graphics shortcuts</li>
        </ul>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Industries We Cater To</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "Online Apparels Shopping",
            "Online Electronic Store",
            "Online Automobile Store",
            "Online Sports Accessories",
            "Publishing Houses",
            "Portrait Studios",
            "Real Estate Companies",
          ].map((industry, index) => (
            <div key={index} className="bg-white shadow rounded p-4 text-center">
              {industry}
            </div>
          ))}
        </div>
      </section>

      {/* Nimble Acuity Advantage */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Nimble Acuity</h2>
        <p>
          Our image editing professionals are proficient with all versions of Adobe Photoshop, including CS6. We leverage advanced features and plug-ins such as LightMachine, ColorWasher, and PTLens to deliver high-quality images at cost-effective rates.
        </p>
        <p>
          Expertise across formats: RAW, JPEG, TIFF, EPS, PDF, BMP, GIF, and PSD. Fast turnaround times with professional-grade results.
        </p>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-12 px-6 space-y-4">
        <h2 className="text-2xl font-semibold mb-4">Our Related Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Photo Retouching Services</li>
          <li>Photo Restoration Services</li>
          <li>Real Estate Post-Processing Services</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Contact Nimble Acuity to Nimble professional Adobe Photoshop services and elevate your images.
        </p>
        <button className="px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PhotoshopServices;
