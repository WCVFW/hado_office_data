import React from "react";
import ESmainmenu from "../ESmainmenu";

const SketchUpServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Expert SketchUp Services for Precision Designs
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto">
          Design, document, and visualize your architectural drawings in 3D.
        </p>
        <p className="text-md md:text-lg font-medium">
          Transform conceptual drawings into detailed 3D models with our custom SketchUp services.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow hover:bg-gray-100 transition">
          Contact Us Now
        </button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="text-lg leading-relaxed mb-4">
          Design complexities of the engineering landscape compel architects,
          contractors, and designers worldwide to communicate architectural
          drawings in 3D. SketchUp facilitates better design visualization, but
          its technical complexities often make in-house operations labor and
          cost intensive. This is where professionals and businesses consider
          Nimble SketchUp services.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          With 26+ years of engineering design and 3D modeling expertise, Nimble
          manages large files and creates realistic textures that stand out.
        </p>
        <p className="text-lg leading-relaxed">
          Gain access to our skilled engineers, drafters, and architects who
          help you precisely visualize your elevations and construction plans.
          We use the latest technology to transform site survey plans and
          concept drawings into modifiable 3D models, improving precision and
          reducing operational costs.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          SketchUp Modeling Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "3D Modeling",
            "3D Rendering",
            "3D Animation",
            "CAD Drafting",
            "Photorealistic Rendering",
            "3D Architectural Visualization",
            "2D Drawing to 3D SketchUp",
            "Architectural Drawings",
            "SketchUp 3D Modeling",
            "SketchUp 3D Rendering",
            "Interior/Exterior Design",
            "3D Floor Plan Creation",
            "HVAC System Design",
            "Architectural Walkthrough",
            "SketchUp to CAD",
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {`Our ${service} services are crafted to enhance your project outcomes by providing accurate, detailed, and customizable solutions using advanced SketchUp techniques.`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Tools We Leverage</h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <span>SketchUp</span>
          <span>3ds Max</span>
          <span>Enscape</span>
          <span>V-Ray</span>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 bg-gray-100 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Industries We Empower
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Building Design",
            "Interior Design",
            "HVAC System Design",
            "Construction Planning",
            "Real Estate Marketing",
          ].map((industry, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{industry}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble for SketchUp Services?
        </h2>
        <ul className="space-y-6 text-lg leading-relaxed">
          <li>
            <strong>Unparalleled Quality:</strong> Process optimization with Six
            Sigma methods, advanced infrastructure, and licensed software.
          </li>
          <li>
            <strong>Absolute Data Security:</strong> GDPR-compliant systems,
            NDAs, and secure access protocols.
          </li>
          <li>
            <strong>Adherence to International Standards:</strong> Expertise in
            US, UK, Europe, and Australia rendering standards.
          </li>
          <li>
            <strong>SketchUp Proficiency:</strong> A skilled team with ongoing
            training on the latest industry advancements.
          </li>
          <li>
            <strong>Cost-efficient Services:</strong> Reduce costs by up to 60%
            without infrastructure or software investments.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Testimonials
        </h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg italic mb-4">
            "Ante Architecture + Design has used Nimble on numerous occasions
            for our CAD drafting needs. Nimble has turned around drawings
            quickly with excellent drafting skills and attention to detail. We
            consider Nimble very professional and thorough in their work."
          </p>
          <p className="font-semibold">
            — Principal, Design and Architecture company in the US
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Harness Technology & Talent with Nimble
        </h2>
        <p className="text-lg mb-6">
          Work with proficient engineers, drafters, and architects who create
          meticulous models of building systems. Bring your site survey plans to
          life with detailed, modifiable 3D models.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-2xl shadow hover:bg-gray-100 transition">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default SketchUpServices;
