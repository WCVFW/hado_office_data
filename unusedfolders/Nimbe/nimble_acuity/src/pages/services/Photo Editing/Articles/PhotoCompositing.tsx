import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotoCompositing: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Turn Ideas into Reality with Photo Compositing
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn how to combine multiple images into a single, realistic or surreal masterpiece.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          Photo compositing is the creative art of combining dissimilar images to create a single composite picture. It gives the impression that all elements belong to the same scene.
        </p>
        <p>
          Compositing is widely used in advertisements, websites, and media. By layering images and masking unnecessary elements, photographers can achieve realistic or surreal effects.
        </p>
      </section>

      {/* Why Use Compositing */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Why Use Photo Compositing?
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Illustrate products, blogs, websites, or art projects effectively</li>
          <li>Create impossible yet visually compelling scenes</li>
          <li>Combine multiple objects, people, or times in one frame</li>
          <li>Enhance storytelling and emotional impact</li>
        </ul>
      </section>

      {/* Popular Composite Ideas */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Popular Composite Photography Ideas
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold">The Creative Composite</h3>
            <p>Create levitating objects or people by masking supports.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Cloning</h3>
            <p>Duplicate the same subject in one scene to show different actions or emotions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Watching Time Pass By</h3>
            <p>Layer images from different times to show day-to-night or seasonal changes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">We Are the Only Ones Here</h3>
            <p>Remove unwanted people or objects from busy scenes using masking.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Magical Imagery</h3>
            <p>Combine impossible elements to create surreal, dreamlike compositions.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">The Technical Composite</h3>
            <p>Use compositing for exposure correction, astrophotography, or scientific purposes.</p>
          </div>
        </div>
      </section>

      {/* Tips for Shooting */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Tips for Shooting Photographs
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>Lighting:</strong> Keep lighting consistent across all images.</li>
          <li><strong>Background:</strong> Avoid busy or low-contrast backgrounds; use a green screen if possible.</li>
          <li><strong>Location:</strong> Choose locations that simplify cutouts and blending.</li>
          <li><strong>Equipment:</strong> Use a tripod; smartphones and affordable attachments work fine.</li>
        </ul>
      </section>

      {/* Step-by-Step Guide */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Basic Guide to Photo Compositing
        </h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>Choose a Concept:</strong> Brainstorm, sketch, and plan your design.</li>
          <li><strong>Assemble Images:</strong> Use your photos or stock images creatively.</li>
          <li><strong>Photograph Subjects:</strong> Capture elements consistently or use separate images.</li>
          <li><strong>Remove Backgrounds:</strong> Mask unwanted elements; corrections are fine.</li>
          <li><strong>Combine into Rough Composite:</strong> Layer all images and arrange them thoughtfully.</li>
          <li><strong>Enhance Details:</strong> Use Gaussian blur, dodge/burn, and smudge tools to refine edges and shadows.</li>
          <li><strong>Finalize:</strong> Adjust brightness, contrast, and focus to create emphasis and semi-vignette effect.</li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Professional Photo Compositing Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity provides high-quality photo compositing services with experienced editors using the latest tools and techniques to bring your vision to life.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PhotoCompositing;
