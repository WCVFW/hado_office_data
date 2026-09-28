import React from "react";
import PEMainMenu from "../PEmainmenu";

const PanoramaServices: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Overview of Fisheye and Cylindrical Panoramas
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Whether you’re a novice photographer or an experienced professional,
          explore the art of fisheye and cylindrical panoramas to elevate your
          panoramic photography skills.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          Fisheye and 360° panoramas are powerful techniques that help capture
          immersive views. Cylindrical panoramas give a wide horizontal sweep,
          while fisheye panoramas allow expansive coverage with fewer images.
        </p>
      </section>

      {/* Cylindrical vs Fisheye */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Cylindrical & Fisheye Panoramas – In Brief
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">
              Cylindrical Panoramas
            </h3>
            <p>
              Meant to be viewed from the inside of a cylinder, these panoramas
              cover 360° horizontally. Best for interiors and exteriors where
              floor and ceiling aren’t the focus.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-3">Fisheye Panoramas</h3>
            <p>
              Wide-angled shots that cover more with fewer images. Ideal for
              virtual tours, easy to create, and more cost-effective than other
              panorama types.
            </p>
          </div>
        </div>
      </section>

      {/* Cylindrical vs Spherical */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Cylindrical vs. Spherical Panoramas
        </h2>
        <p className="mb-4">
          Cylindrical panoramas capture 360° horizontally but exclude the top
          and bottom. Spherical panoramas, however, cover the full 360° in all
          directions—including the up and down view—making them the most
          immersive option.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Cylindrical panoramas – great for wide open areas, easy to print and
            visualize spaces.
          </li>
          <li>
            Spherical panoramas – full immersion, no tripod or photographer
            shadow in view.
          </li>
          <li>
            Spherical panoramas are ideal for interactive virtual tours and
            high-impact visuals.
          </li>
        </ul>
      </section>

      {/* How to Shoot */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          How to Shoot Panoramic Photography
        </h2>
        <h3 className="text-lg font-semibold mb-3">What You Need</h3>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Camera with fisheye lens (10.5mm recommended)</li>
          <li>Tripod with a panoramic head</li>
          <li>Correct entrance pupil setup for precision</li>
        </ul>
        <h3 className="text-lg font-semibold mb-3">Steps to Capture</h3>
        <ol className="list-decimal list-inside space-y-1">
          <li>Pick an ideal spot to shoot your panorama.</li>
          <li>
            Rotate around yourself and capture overlapping images (15–30%
            overlap recommended).
          </li>
          <li>
            Use DSLR with fisheye lens for fewer shots (5–8 images for full
            sphere).
          </li>
          <li>Ensure consistent level and exposure settings.</li>
        </ol>
      </section>

      {/* Tips Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Useful Panoramic Photography Tips
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Use panorama/stitch mode on your camera.</li>
          <li>
            A panoramic head (like Nodal Ninja) helps avoid parallax errors.
          </li>
          <li>Maintain 15–30% overlap between images.</li>
          <li>Shoot RAW format for maximum editing flexibility.</li>
          <li>Use tripod and manual settings for consistency.</li>
          <li>
            Avoid movement in scenes and shoot quickly to prevent lighting
            changes.
          </li>
        </ul>
      </section>

      {/* How to Create */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-8">
          How to Create a 360° Panorama
        </h2>
        <p className="mb-4">
          After capturing images, process them with photo editing tools and then
          stitch them using specialized software like PTGui, Panotour, or Hugin.
          While effective, stitching requires skill, time, and effort. If
          needed, you can Nimble image stitching to experts like
          Nimble Acuity.
        </p>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-700 to-blue-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Try Your Hand at Fisheye and Cylindrical Panoramas!
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Now that you know how to shoot and create 360° panoramas, why not get
          started today? Experience the difference with professional panoramic
          editing services from Nimble Acuity.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Sign Up for a FREE Trial
        </button>
      </section>

      {/* Verticals Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Verticals / Industries We Cater To
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
          {[
            "Online Apparels Shopping",
            "Online Electronic Store",
            "Online Automobile Store",
            "Online Sports Accessories",
            "Publishing Houses",
            "Portrait Studios",
            "Real Estate Companies",
          ].map((vertical, idx) => (
            <div
              key={idx}
              className="p-4 bg-white border rounded-lg shadow hover:shadow-md"
            >
              {vertical}
            </div>
          ))}
        </div>
      </section>

      {/* Closing Section */}
      <section className="text-center py-12 px-6">
        <p className="max-w-3xl mx-auto">
          Need help stitching your 360° spherical panoramas? Get in touch with
          our experts today and let us deliver high-quality panoramic
          photography editing for your business.
        </p>
      </section>
    </div>
  );
};

export default PanoramaServices;
