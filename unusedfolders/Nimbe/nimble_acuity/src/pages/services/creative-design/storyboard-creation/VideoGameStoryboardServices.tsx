import React from "react";
import CSmainmenu from "../CSmainmenu";

const VideoGameStoryboardServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Video Game Storyboard Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Experience advanced narrative design blending story arcs, gameplay mechanics, and character development for your video games.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Take your video game development to the next level with precision planning and intricate detailing. Nimble Auity provides expert storyboard services that combine character illustrations, plot articulation, and gameplay alignment to streamline your pre-production phase and create immersive player experiences.
        </p>
        <p>
          Our services offer early detection of potential issues, saving time and resources while ensuring your game's vision is translated into a captivating experience.
        </p>
      </section>

      {/* Client Success Stories */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="max-w-6xl mx-auto space-y-6 text-center">
          <p>
            <strong>NBA Game Analytics Provider:</strong> US-based sports analytics firm boosted efficiency by 60% with our precise sports data tagging.
          </p>
          <p>
            <strong>Wedding Videography Firm, US:</strong> Scaled rapidly with our cost-effective, error-free storyboard services during peak season, securing a 1.5-year partnership.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Video Game Storyboard Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Cartoon Storyboard Services",
              desc: "Scene-by-scene storyboards with dialogues, sounds, camera directions, narrative consistency, and gameplay alignment.",
            },
            {
              title: "Storyboard Animatic Services",
              desc: "Transform static boards into dynamic timelines, integrate basic animations and sounds, and pre-visualize pacing and event sequence.",
            },
            {
              title: "eLearning Storyboard Services",
              desc: "Design educational game narratives with interactive elements, learning objectives, and immersive experiences.",
            },
            {
              title: "Illustration Storyboard Services",
              desc: "Detailed storyboard illustrations reflecting unique art styles and ensuring visual coherence and aesthetic enhancement.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Video Game Storyboarding Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Idea Generation: Develop central theme, characters, and environment using creativity and market insight.",
            "Narrative Formation: Create detailed narratives, dialogues, and game scenarios.",
            "Visual Drafting: Translate script into visual sketches for preliminary aesthetics.",
            "Gameplay Design: Convert sketches into panel sequences outlining game flow and character interactions.",
            "Refinement Phase: Incorporate feedback and refine storyboards.",
            "Development Phase: Developers code, animate, and design sound effects.",
            "Quality Assurance: Playtesting for smooth, engaging, and bug-free gaming experience.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Tools Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Software Tools We Specialize In
        </h2>
        <p className="text-center max-w-4xl mx-auto">
          Storyboarder, Toon Boom Storyboard Pro, Twine, Plot, FrameForge, Storyboard Studio
        </p>
      </section>

      {/* Benefits Section */}
      <section className="bg-blue-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble for Video Game Storyboards
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Transform game concepts into visually stunning, narrative-driven storyboards.",
            "Coherent narrative construction mapping plotlines, character interactions, and world-building.",
            "Strategic level and puzzle designing ensuring balance and engagement.",
            "Effective communication among stakeholders reducing misalignment.",
            "Iterative feedback integration for continual refinement.",
            "Efficient time and resource management by identifying potential issues early.",
            "Optimized player experience focusing on progression, rewards, and intuitive interfaces.",
            "Highlight unique game attributes for competitive market positioning.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Industries We Cater To
        </h2>
        <p className="text-center max-w-4xl mx-auto">
          Video Game, Film and Animation, Education, Advertising, Healthcare, Defense, Technology
        </p>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Additional Services
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto text-center">
          {[
            "Graphic Design Services",
            "3D Design Services",
            "Logo Design Services",
            "Illustration Services",
          ].map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="mb-6">
          Transform your video game development with precision storyboarding and creative expertise.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default VideoGameStoryboardServices;
