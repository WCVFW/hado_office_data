import React from "react";
import CSmainmenu from "../CSmainmenu";

const AnimationRenderingServices: React.FC = () => {
  return (
    <section className="bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          3D Animation Rendering Services
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6">
          Enhance your 3D animation projects with Nimble Auity’s professional rendering services, powered by an experienced team of creative animators.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Get Started
        </a>
      </div>

      {/* Overview */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-6">
        <p>
          Create your concept and watch your animation come to life. Nimble provides a dedicated team of creative animators who handle high-end software, hardware, and infrastructure, giving you full creative control without the overheads.
        </p>
        <p>
          With a well-defined workflow, our team ensures efficiency, accuracy, and cost-effective 3D rendering for global audiences, catering to studios, individuals, and creative projects.
        </p>
      </div>

      {/* Rendering Services Offered */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Rendering Services Offered
        </h2>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl mb-2">Conceptual Walkthrough Services</h3>
            <p>
              Architectural renderings for commercial, residential, industrial buildings, interiors, exteriors, modular furniture, and landscape designing with realistic lighting and shadows.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Exterior/Interior Walkthrough Services</h3>
            <p>
              Capture products and spaces from all angles with photo-realistic rendering, including interior lighting, natural lighting, and landscaping.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Product Animation & Presentation Services</h3>
            <p>
              Convert virtual drawings into functional/non-functional models, enabling rapid prototyping and eliminating traditional physical modeling.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Assembly Animation & Architectural Walkthrough</h3>
            <p>
              Detailed 3D modeling with photo-realistic rendering and animation to showcase complex assemblies and architectural designs.
            </p>
          </div>
        </div>
      </div>

      {/* Software Used */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Software We Use</h2>
        <p className="text-lg text-gray-700">
          3ds MAX | Maya | SketchUp | Rhinoceros | Cinema 4D | AUTODESK REVIT | SOLIDWORKS
        </p>
      </div>

      {/* 3D Rendering Process */}
      <div className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">3D Animation Rendering Process Flow</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li><strong>Concept and Storyboard:</strong> Define concept, create storyboard, layout, character design, and story flow.</li>
          <li><strong>Layout and Animatics:</strong> Design layout and pre-visualize film/cartoon.</li>
          <li><strong>Model Execution:</strong> Convert 2D concept to high-detail 3D models.</li>
          <li><strong>Texture Rendering:</strong> Apply textures to models.</li>
          <li><strong>Skeletal Rigging:</strong> Develop skeletons and animate specific parts.</li>
          <li><strong>Develop Key Frames:</strong> Define movements and timings.</li>
          <li><strong>Cleanup, Coloring, and Motion Capture:</strong> Final drawings and coloring for finished animation.</li>
          <li><strong>Animation:</strong> Bring 3D characters to life.</li>
          <li><strong>Lighting, Compositing, and FX:</strong> Define light properties, edit sound/video, and collate 3D elements.</li>
          <li><strong>Voice Over:</strong> Integrate voice, music, and special effects.</li>
          <li><strong>Final Delivery:</strong> Generate final 3D model and animation output.</li>
        </ul>
      </div>

      {/* Benefits */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Benefits of Partnering with Nimble</h2>
        <ul className="max-w-4xl mx-auto list-disc list-inside space-y-4 text-gray-700">
          <li>Access to the latest software tools and high-end infrastructure.</li>
          <li>Highly skilled technical resources ensuring superior output.</li>
          <li>Guaranteed project delivery within defined turnaround times.</li>
          <li>Adherence to high-quality standards and best practices.</li>
          <li>Strict data security, privacy, and confidentiality protocols.</li>
          <li>Cost-effective pricing models tailored to project requirements.</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Reliable 3D Animation Rendering</h2>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-6">
          Convert your sketches and CAD drawings into photorealistic 3D renderings. Nimble’s team ensures quality, efficiency, and timely delivery for all industries.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-lg shadow-lg hover:scale-105 transition transform"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AnimationRenderingServices;
