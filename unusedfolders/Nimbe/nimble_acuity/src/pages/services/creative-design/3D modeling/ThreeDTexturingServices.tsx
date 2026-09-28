import React from "react";
import CSmainmenu from "../CSmainmenu";

const ThreeDTexturingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble 3D Texturing Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Present your ideas, models, and concepts using superior 3D texturing techniques starting at just $10/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Looking to present your concepts, ideas, and models innovatively? Nimble Auity provides skilled 3D texturing experts using the latest tools to deliver technically superior and creative 3D texturing services.
        </p>
        <p>
          Our team ensures precision, quality, and timely delivery for all your 3D texturing requirements.
        </p>
      </section>

      {/* 3D Texturing Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">3D Texturing Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "High-end Texturing Services",
              desc: "Superior quality texturing for occlusion maps, normal maps, diffuse, and specular maps for animation, videos, and games.",
            },
            {
              title: "Texturing & Carving",
              desc: "Accurate texturing and carving details for wooden furniture models, including colors, surface textures, and more.",
            },
            {
              title: "3D Industrial Modeling",
              desc: "High-quality assembly animation and industrial modeling using SolidWorks for effective fabrication.",
            },
            {
              title: "Surface Modeling Services",
              desc: "Error-free surface modeling using polygonal, primitive, subdivisional, NURBS, Zbrush modeling, and more.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Services You Can Benefit From</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Creative Design Services",
            "Video Editing Services",
            "Storyboard Services",
            "Corporate Audio Editing Services",
          ].map((service, idx) => (
            <li key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-blue-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble for 3D Texturing?</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Flexible and cost-effective pricing packages starting at $10/hour.",
            "Information security with ISMS certification for complete data safety.",
            "Highly skilled 3D texturing experts handling all requirements.",
            "State-of-the-art infrastructure with latest 3D texturing software.",
            "Easily scalable services to meet increasing project demands.",
            "ISO-certified quality assurance for superior error-free services.",
            "Dedicated project manager as a single point of contact.",
            "Short turnaround time with global delivery centers.",
            "24/7 support via email and phone for all queries.",
          ].map((reason, idx) => (
            <li key={idx}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Success Stories</h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Created 3D Models of Vintage Envelopes for International Artist:</strong> Delivered 3D models of vintage letters with Victorian stamps in 22 hours with precision and quality.
          </p>
          <p>
            <strong>Nimble Provided 3D Modeling Services for Australian Signage Design Company:</strong> Modeled, shaded, lit, and rendered client logos in PNG format within 36 hours.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "Thanks for your fast turnaround time and attention to detail for our busy Australian ad agency, appreciate your hard work." <br />
          <strong>CEO, Digital Marketing Agency, Australia</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Choose Nimble Auity for 3D Texturing Services
        </h2>
        <p className="mb-6">
          Professional, reliable, and cost-effective 3D texturing solutions tailored to your requirements. Partner with us today!
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ThreeDTexturingServices;
