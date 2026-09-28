import React from "react";
import CSmainmenu from "../CSmainmenu";

const ThreeDGameModelingServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble 3D Game Modeling Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Realistic and innovative 3D graphics for your game development starting at just $10/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Looking to create innovative and realistic 3D models for your games? Nimble Auity provides skilled 3D game modeling experts using the latest tools to deliver high-quality game assets, character models, and environments.
        </p>
        <p>
          From concept design to animation and game enhancement, we handle your 3D game modeling needs with precision and creativity.
        </p>
      </section>

      {/* 3D Game Modeling Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">3D Game Modeling Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "3D Game Concept Design",
              desc: "From concept sketches to complete game modeling, our experts use the latest software to create unique and innovative 3D game designs.",
            },
            {
              title: "3D Game Character Modeling",
              desc: "Bring your 3D game characters to life with captivating designs in well-structured environments to engage players.",
            },
            {
              title: "3D Game Enhancement",
              desc: "Enhance your existing game prototype with superior 3D modeling, textures, and localization services for immersive gameplay.",
            },
            {
              title: "3D Game Modeling Animations",
              desc: "We create rich texture surfaces, realistic 3D characters, and intricate level designs to meet all animation requirements.",
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
        <h2 className="text-3xl font-semibold text-center mb-10">Why Choose Nimble for 3D Game Modeling?</h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Affordable pricing plans starting at $10/hour.",
            "Data security ensured with ISMS certification.",
            "Experienced game modeling experts with global exposure.",
            "World-class infrastructure with latest 3D modeling software.",
            "Highly scalable services to meet increasing demands.",
            "Error-free services with ISO-certified quality assurance.",
            "Dedicated SPOC for smooth project management.",
            "Quick turnaround time through global delivery locations.",
            "24/7 support via phone and email.",
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
          "The quality of artwork delivered during the trial period was exceptional, helping us finalize our new outsourced partner." <br />
          <strong>Director - Operations, Leading Pharmaceutical Company, Netherlands</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Choose Nimble Auity for 3D Game Modeling Services
        </h2>
        <p className="mb-6">
          Professional, reliable, and cost-effective 3D game modeling solutions tailored to your requirements. Partner with us today!
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ThreeDGameModelingServices;
