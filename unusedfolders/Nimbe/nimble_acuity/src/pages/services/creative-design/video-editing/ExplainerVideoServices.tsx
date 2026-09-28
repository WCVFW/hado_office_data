import React from "react";
import CSmainmenu from "../CSmainmenu";

const ExplainerVideoServices: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Nimble Auity 3D Explainer Video Production Services
        </h1>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Attract a large audience towards your business with high-quality 3D
          explainer video production services starting at just $12/hour.
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-lg leading-relaxed">
          Although 2D images are good at simplifying ideas, it's vital to add
          the third dimension as well. Nimble Auity helps businesses create
          attractive 3D videos that explain products, services, or ideas
          effectively. With 20+ years of expertise, we have delivered thousands
          of projects globally, ensuring precision, creativity, and cost
          efficiency.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          3D Explainer Video Production Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "3D Cartoon Explainer Videos",
              desc: "Build emotional connections with engaging animated cartoons.",
            },
            {
              title: "3D Infographic Explainer Videos",
              desc: "Use icons and abstract visuals for professional storytelling.",
            },
            {
              title: "Tech Industry 3D Videos",
              desc: "Showcase technology, software, and products effectively.",
            },
            {
              title: "Medical 3D Videos",
              desc: "Combine motion graphics and 3D animation for healthcare.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl shadow-md bg-gray-50 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our 3D Explainer Video Production Process
        </h2>
        <ol className="space-y-6 text-lg">
          <li>
            <strong>Scripting:</strong> Research and develop engaging scripts
            tailored to your goals.
          </li>
          <li>
            <strong>Storyboarding:</strong> Visual outlines ensure your vision
            matches the final video.
          </li>
          <li>
            <strong>Voiceover:</strong> Professional artists record voiceovers
            matching your brand tone.
          </li>
          <li>
            <strong>Creation:</strong> Skilled designers produce high-quality 3D
            animations.
          </li>
          <li>
            <strong>Completion:</strong> Final video delivery after revisions
            and approval.
          </li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Cost-efficient pricing",
            "ISO-certified production process",
            "High data security",
            "Latest tools & software",
            "World-class infrastructure",
            "Fast turnaround time",
            "Scalable solutions",
            "24/7 customer support",
            "Dedicated project manager",
          ].map((point, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <blockquote className="italic bg-white shadow-md p-6 rounded-2xl">
          "I am overwhelmed with the support & level of understanding of your
          team. The effort you spent diligently with a quick turnaround time has
          helped my company reap immense profits."
          <footer className="mt-4 font-semibold">
            – Graphics Manager, Electronics Company, South Korea
          </footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let Nimble Auity Bring Your Ideas to Life
        </h2>
        <p className="mb-6 text-lg">
          Blow your audience away with powerful and visually engaging 3D
          explainer videos.
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default ExplainerVideoServices;
