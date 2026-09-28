import React from "react";
import PEMainMenu from "../PEmainmenu";

const ParallaxEffectGuide: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-blue-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Know How to Add Parallax Effect to Your Images
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn the techniques behind the Ken Burns effect, 2.5D parallax, and how
          to make your images and videos visually engaging.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          The parallax effect, also called the Ken Burns effect or 2.5D parallax,
          brings 2D images to life by adding depth and motion. Popular in
          documentaries, creative filmmaking, and web design, it allows your
          visuals to engage viewers by panning, zooming, and creating a 3D-like
          illusion.
        </p>
        <p>
          Tools like Adobe Photoshop and After Effects make parallax editing
          easier, while open-source alternatives also provide opportunities for
          experimentation.
        </p>
      </section>

      {/* Components & Implementation */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Components of the Parallax Effect & Implementation
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Tell stories using visuals to immerse viewers in the plot.</li>
          <li>Simplify the concept; avoid cluttering the image.</li>
          <li>Plan the type of parallax effect relevant to your content.</li>
          <li>Use interactive elements without overloading design.</li>
          <li>Apply a layered approach to add depth, CTA, and key information.</li>
          <li>Ensure responsive design for all screen sizes.</li>
          <li>Combine multiple design elements for a dynamic look.</li>
        </ul>
      </section>

      {/* Why Use Parallax */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Use Parallax Effects
        </h2>
        <ul className="list-disc list-inside space-y-3 mb-6">
          <li>Improved user experience compared to static images.</li>
          <li>Reduced bounce rates by engaging users longer.</li>
          <li>Increased engagement through dynamic storytelling and unboxing effects.</li>
          <li>Used in gaming, websites, and multimedia for immersive visuals.</li>
        </ul>
      </section>

      {/* Types of Parallax Effect */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Types of Parallax Effects
        </h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">Parallax Scrolling Effect</h3>
        <ul className="list-disc list-inside space-y-2 mb-4">
          <li>Vertical Scroll – background moves at different speeds as user scrolls.</li>
          <li>Horizontal Scroll – images move horizontally during scrolling.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">Parallax Transparency Effect</h3>
        <p className="mb-4">
          Creates fading in/out transitions revealing new layers as user scrolls.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Parallax Blur Effect</h3>
        <p className="mb-4">
          Smooth blurring triggered by scrolling, similar to PowerPoint fade effects.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Parallax Rotate & Scale Effects</h3>
        <p className="mb-4">
          Rotatable or zooming elements grab user attention and create tunnel or spotlight illusions.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">Mouse Based Parallax Effects</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Mouse Track – elements follow cursor movement, creating dynamic trails.</li>
          <li>3D Tilt – images tilt side-to-side based on cursor for immersive experience.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Add Parallax Effects Professionally
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity offers expert photo editing services to create high-quality parallax effects
          for images, videos, and websites. With 26+ years of experience, we help your visuals stand out.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default ParallaxEffectGuide;
