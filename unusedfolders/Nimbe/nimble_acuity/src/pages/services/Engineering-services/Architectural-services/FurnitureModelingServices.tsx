import React from "react";
import ESmainmenu from "../ESmainmenu";

const FurnitureModelingServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          3D Furniture Modeling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Nimble Acuity brings your furniture designs to life with realistic 3D modeling and rendering services starting at just $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          Furniture designers and manufacturers can now breathe life into their furniture designs with Nimble Acuity's 3D furniture modeling services. Our expert designers use advanced 3D modeling software to deliver accurate, realistic models, minimize iterations, increase productivity, and reduce production costs.
        </p>
      </section>

      {/* Furniture Types */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our 3D Furniture Rendering Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Home Furniture", desc: "Garden, poolside, and kitchen furniture designed with functionality and aesthetics in mind." },
            { title: "Corporate Furniture", desc: "Ergonomic designs that optimize comfort and space management for offices and commercial areas." },
            { title: "Industrial Furniture", desc: "Durable designs with optimal space utilization, high usability, and rugged construction." },
            { title: "Storage Furniture", desc: "Innovative designs maximizing storage space while ensuring usability and convenience." },
            { title: "Healthcare Furniture", desc: "3D models meeting hospital needs, user groups, and clinical requirements with accuracy." },
            { title: "Recreational & Relaxation Furniture", desc: "Creative designs supporting functionality, usability, and practicality for leisure spaces." },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Acuity for Furniture Modeling?</h2>
        <ul className="list-disc list-inside space-y-4 text-gray-700 text-lg">
          <li><strong>Customized Design & Development:</strong> We gather images and sketches to create high-quality 3D furniture models.</li>
          <li><strong>Cost-effectiveness:</strong> Projects of any size are accommodated with flexible pricing structures.</li>
          <li><strong>Attention to Detail:</strong> Quality requirement gathering ensures even the minutest details are captured.</li>
          <li><strong>Strict Quality Adherence:</strong> Experienced 3D modelers ensure all models are natural and unique; QA checks every stage.</li>
          <li><strong>Global Outreach:</strong> Scale-up services for clients across diverse industries worldwide.</li>
          <li><strong>Data Security:</strong> Stringent privacy and security protocols ensure your designs are safe.</li>
          <li><strong>Contemporary Software & Technologies:</strong> AutoCAD, Autodesk 3DS Max, SketchUp, Autodesk Revit, and more.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Client Success Stories</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div>
            <strong>Nimble Provided Furniture Modeling Services to an American Interior Design Firm:</strong> Delivered realistic furniture models within stipulated timelines with professional attention to detail.
          </div>
          <div>
            <strong>Nimble Provided Furniture Modeling Services to a Belgium-based Interior Design House:</strong> Successful project completion resulting in client satisfaction with detailed and accurate furniture models.
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Furniture Designs Today</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Get your furniture concepts transformed into life-like 3D models with Nimble Acuity. We use advanced tools and technology to provide affordable and visually appealing furniture modeling services.
        </p>
        <button className="px-6 py-3 bg-white text-purple-700 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default FurnitureModelingServices;
