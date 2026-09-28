import React from "react";
import ESmainmenu from "../ESmainmenu";

const VirtualStagingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Virtual Staging Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Turn your unfurnished and unattractive homes or offices into stylish and eye-catching properties at prices starting at just $20 per image.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Nimble Acuity leverages advanced 3D rendering technologies to virtually furnish and stage properties, helping real estate professionals showcase the potential of homes and offices before they are physically furnished.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Virtual Staging Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Furniture Replacement Services", desc: "Remove or replace unwanted furniture to make your property photos attractive and appealing." },
            { title: "Remodeling Services", desc: "Enhance homes or offices with high-quality remodeling to showcase full potential." },
            { title: "Restyling Services", desc: "Boost aesthetics by restyling properties for a modern and attractive look." },
            { title: "Color Change Services", desc: "Update old and dull colors with trendy, eye-catching palettes." },
            { title: "Virtual Twilight", desc: "Create stunning virtual twilight images for captivating property presentation." },
            { title: "Envisioning Services", desc: "Visualize properties even before construction with realistic 3D models." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Benefits of Virtual Real Estate Staging Services</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700">
          <li>Provide photorealistic-quality images for effective property marketing.</li>
          <li>Render realistic housing interiors for faster property sales.</li>
          <li>Display cohesive designs saving time, effort, and revenue.</li>
          <li>Help buyers visualize their personal choices with custom furnishings.</li>
          <li>Define accurate sizing and placements for furniture and décor.</li>
        </ul>
      </section>

      {/* Industries Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Real Estate Developers and Agents",
            "Furniture and Furnishings Manufacturers & Retailers",
            "Interior Decoration Agencies and Designers",
            "Fashion Magazines and Studio Decorations",
            "Architecture Magazines",
          ].map((industry, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Virtual Staging Process We Follow</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700">
          <li>Scoping Work – Define scope and ensure complete details.</li>
          <li>Effort & Pricing – Estimate time, resources, and pricing.</li>
          <li>Project Assignment – Allocate team and resources.</li>
          <li>Establish Concept – Receive drawings and understand client vision.</li>
          <li>Create Model – Convert 2D drawings into detailed 3D models.</li>
          <li>Texturing & Lighting – Apply textures, colors, and lighting.</li>
          <li>Drafts Shared – Collect feedback from clients.</li>
          <li>Final Edits – Apply changes and quality checks.</li>
          <li>Final Render – Generate high-quality 3D images.</li>
          <li>Final Delivery – Share deliverables via client-preferred methods.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity for Virtual Staging?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable Pricing Options with flexible packages.",
            "Data Security – ISO/IEC 27001:2022 certified firm for secure handling.",
            "Best Infrastructure – Latest virtual staging tools & international-standard offices.",
            "Sell Real Estate Faster – Staged homes sell quicker and for higher value.",
            "Portray Real Estate Images Attractively – Photorealistic rendering for prospects.",
            "Stage a Home Virtually – Fully furnish rooms digitally for maximum appeal.",
            "Leverage Latest 3D Rendering Technologies – Realistic property visualization.",
            "Better Visualization – Save effort, time, and revenue while showcasing properties.",
            "Customized Services – Furnish properties as per client preferences.",
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Properties Virtually</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Collaborate with Nimble Acuity to stage your properties virtually and attract more buyers with stunning visual presentations.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default VirtualStagingServices;
