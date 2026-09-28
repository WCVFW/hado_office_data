import React from "react";
import CSmainmenu from "../CSmainmenu";

const ThreeDSculptingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble 3D Sculpting Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          High-end 3D sculpting for product demos, prototypes, anatomy studies, and more starting at $12/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Need precise 3D sculpting without breaking the bank? Nimble provides award-winning 3D sculpting services using high-end proprietary tools for scalable and hyperreal models. Our experts handle complex rendering to your exact specifications.
        </p>
        <p>
          We cater to various applications like product demonstration, prototype design, marketing, healthcare, and video games.
        </p>
      </section>

      {/* 3D Sculpting Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">3D Sculpting Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "3D Sculpting for 3D Printing",
              desc: "Render models for 3D printing with various materials using additive manufacturing and mesh techniques for precise textures.",
            },
            {
              title: "3D Sculpting for Marketing",
              desc: "Create hyper-detailed 3D models to showcase product features, add shading and textures to appeal to your audience.",
            },
            {
              title: "3D Sculpting for Product Design",
              desc: "Design complex objects like automotive components, jewelry, and circuits using advanced poly-organic sculpting methods.",
            },
            {
              title: "3D Sculpting for Healthcare",
              desc: "Create precise prosthetics, medical implants, and research models for healthcare professionals and researchers.",
            },
            {
              title: "3D Sculpting for Video Games",
              desc: "Develop hyperreal characters, props, and low-poly or complex meshes tailored for immersive game experiences.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Industries We Serve</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            "Engineering",
            "Architecture",
            "Healthcare",
            "Entertainment",
            "Filmmaking",
            "Promotions & Marketing",
            "Automobiles",
            "Prototype Design",
            "Construction",
          ].map((industry, idx) => (
            <li key={idx} className="bg-blue-50 rounded-lg py-4 font-medium">
              {industry}
            </li>
          ))}
        </ul>
      </section>

      {/* 3D Sculpting Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">3D Sculpting Process We Follow</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          <li>Collect client requirements and understand specifications.</li>
          <li>Plan the approach and finalize the strategy for the 3D model.</li>
          <li>Assign selected 3D modelers and editors and resolve potential challenges.</li>
          <li>Provide the team with project data and technology.</li>
          <li>Commence sculpting according to schedule and specifications.</li>
          <li>Analyze completed models through QA and deliver within the deadline.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Services You Can Benefit From</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {[
            "Illustrator Services",
            "Character Design Services",
            "Animatics Services",
            "Motion Graphics Services",
          ].map((service, idx) => (
            <li key={idx} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              {service}
            </li>
          ))}
        </ul>
      </section>

      {/* Why Nimble */}
      <section className="bg-blue-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble 3D Sculpting Services?</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Affordable 3D Sculpting Services starting at $12/hour.",
            "ISO 9001:2015 certified services with consistent, high-quality outputs.",
            "100% Data Security with ISO/IEC 27001:2022 compliance.",
            "Quick Turnaround Time adhering to schedules.",
            "Professional team with years of 3D sculpting experience.",
            "Scalable services for ongoing projects.",
            "Superb infrastructure with latest sculpting tools and 3D printing technology.",
            "Round-the-clock support across global delivery centers.",
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
            <strong>Nimble Created 3D Models of Vintage Envelopes for International Artist:</strong> Delivered 3D models of 3 vintage letters with Victorian stamps in 22 hours.
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
          "This is FANTASTIC! Very happy with the result, turn-around, and quality. The price is great too. Looking forward to working with your team again." <br />
          <strong>Real Estate Videographer and Photographer, USA</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Choose Nimble Auity for 3D Sculpting Services
        </h2>
        <p className="mb-6">
          Professional, affordable, and accurate 3D sculpting services tailored to your requirements. Partner with us today!
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ThreeDSculptingServices;
