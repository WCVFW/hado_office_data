import React from "react";
import CSmainmenu from "../CSmainmenu";

const PhotomaticStoryboardServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Photomatic Storyboard Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Test your storyboard's effectiveness with sound effects and voiceovers before filming, arranged and edited by experts at just $10/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Storyboarding has evolved into photomatic storyboards, where still photos are sequenced with sound and voiceovers to test effectiveness. Nimble Auity handles the time-consuming tasks of taking photos, arranging, editing, and adding elements, letting you focus on what you do best.
        </p>
        <p>
          Benefit from our experienced team of illustrators and storyboard artists who craft high-quality sequences tailored to your project.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Photomatic Storyboard Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digital Art Storyboards",
              desc: "Enhance your digital images and add animations to create a seamless sequence of scenes.",
            },
            {
              title: "Concept Art Storyboards",
              desc: "Visualize your ideas with sketches and drafts, exploring multiple concepts before finalizing.",
            },
            {
              title: "Basic Storyboards",
              desc: "Create minimalistic panels with still photos, digital text, images, audio, and lighting info.",
            },
            {
              title: "Detailed Storyboards",
              desc: "Include transitions, camera angles, dialogues, voiceovers, music, sound effects, and actions for complex storyboards.",
            },
            {
              title: "Shot-specs Storyboards",
              desc: "Plan early-stage projects with shot size, lens length, two-shot info, and other technical details.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Storyboarding Tools We Leverage
        </h2>
        <p className="text-center max-w-4xl mx-auto">
          articulate STORYLINE, Autodesk SketchBook Express, Cinemek, FRAME FORGE, MOVIE STORM, ShotPro, StoryBoard Quick, StoryBoard Artist, Storyboard Pro, Studio Binder
        </p>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto text-center">
          {[
            "Illustrator Services",
            "Magazine Layout Service",
            "Prepress Services",
            "Digital Advertising Services",
          ].map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Benefits of Outsourcing Photomatic Storyboard Services to Nimble
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Storyboards are versatile: Applicable across films, comics, animation, games, and apps.",
            "Establish clear guidelines: Provides visual expectations for all departments.",
            "Better presentation: Dynamic visuals for stakeholder approval and pitching.",
            "Create excellent advertisements: Save time and provide clear direction for campaigns.",
            "Support media development: Developers get all necessary assets to begin work immediately.",
            "Save time and money: Professionals deliver accurate storyboards on schedule.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="space-y-6 text-center">
          <p>
            <strong>Nimble Auity Provided Prepress and Vector Artwork to Dublin-based Client:</strong> Delivered robust solutions quickly for a top Dublin business.
          </p>
          <p>
            <strong>Nimble Auity Provided Vector Artwork to US-based Label Designer:</strong> Reliable, flawless vector artwork services delivered on time.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "The quality of Artwork delivered during the trial period was exceptional and helped us choose Nimble as our partner." <br />
          <strong>Director - Operations, Leading pharmaceutical company in the Netherlands</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Choose Nimble Auity for Photomatic Storyboard Services
        </h2>
        <p className="mb-6">
          A professional photomatic storyboard provides structure, direction, and brings your ideas to life beautifully. Partner with us today.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PhotomaticStoryboardServices;
