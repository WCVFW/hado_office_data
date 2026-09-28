import React from "react";
import PEMainMenu from "../PEmainmenu";

const PhotoCompositingGuide: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Turn Ideas into Reality with Photo Compositing
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Learn how to combine multiple images into a single, realistic, or surreal masterpiece.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <p>
          Photo compositing is the art of blending dissimilar images to create a single cohesive picture. It is widely used in advertisements, websites, and creative photography.
        </p>
        <p>
          By layering and masking images, you can achieve effects ranging from realistic to imaginative. Digital compositing simplifies this process and opens the door to endless creativity.
        </p>
      </section>

      {/* Uses of Photo Compositing */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Why Use Photo Compositing?</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>Illustrate products, blogs, or websites effectively</li>
          <li>Create surreal or impossible scenes</li>
          <li>Combine different objects, times, or locations into a single image</li>
          <li>Enhance storytelling through creativity</li>
        </ul>
      </section>

      {/* Popular Composite Photography Ideas */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Popular Composite Photography Ideas</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">The Creative Composite</h3>
            <p>Levitating objects or people by masking out supports to create a floating effect.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Cloning</h3>
            <p>Create multiple occurrences of the same subject in a single scene to depict different emotions or actions.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Watching Time Pass By</h3>
            <p>Layer images captured at different times of the day or seasons to show change in one composite.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">We Are the Only Ones Here</h3>
            <p>Remove unwanted people or objects from busy scenes using masking techniques.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Magical Imagery</h3>
            <p>Combine impossible elements to create surreal, imaginative, or dreamlike scenes.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">The Technical Composite</h3>
            <p>Use compositing for exposure correction, astrophotography, or other technical enhancements.</p>
          </div>
        </div>
      </section>

      {/* Tips for Shooting */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Tips for Shooting Photographs</h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>Lighting:</strong> Keep consistent lighting across all images.</li>
          <li><strong>Background:</strong> Avoid busy or low-contrast backgrounds. Use a green screen if possible.</li>
          <li><strong>Location:</strong> Choose locations that simplify cut-outs and blending.</li>
          <li><strong>Equipment:</strong> Tripods and even smartphones can be used effectively.</li>
        </ul>
      </section>

      {/* Step-by-Step Guide */}
      <section className="max-w-5xl mx-auto py-12 px-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center mb-6">A Basic Guide for Photo Compositing</h2>
        <ul className="list-disc list-inside space-y-3">
          <li><strong>Choose the Concept:</strong> Brainstorm and sketch ideas before shooting.</li>
          <li><strong>Assemble the Images:</strong> Use your photos or stock images for the composite.</li>
          <li><strong>Photograph the Subject/Model:</strong> Capture your elements consistently.</li>
          <li><strong>Remove the Background:</strong> Mask unwanted elements using Photoshop or similar tools.</li>
          <li><strong>Combine Images:</strong> Layer all images into a rough composite and arrange them carefully.</li>
          <li><strong>Enhance the Details:</strong> Use Gaussian blur, dodge, burn, and smudge tools to refine edges and shadows.</li>
          <li><strong>Finalize:</strong> Adjust brightness, contrast, and focus to highlight the subject and create a semi-vignette effect.</li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <h2 className="text-2xl font-semibold mb-4">
          Nimble Professional Photo Compositing Services
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          At Nimble Acuity, we offer high-quality photo compositing services with experienced editors using the latest tools and techniques to bring your vision to life.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default PhotoCompositingGuide;
