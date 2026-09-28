import React from "react";
import CSmainmenu from "../CSmainmenu";

const IllustrationStoryboardServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Illustration Storyboard Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Effectively plan your video project's sequence of events with high-quality illustration storyboards starting at $10/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Introduction */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Nimble Auity offers professional illustration storyboard services to help you visualize your project in stunning detail, eliminate errors, and stimulate creative ideas before production begins.
        </p>
        <p>
          Our team has extensive experience creating true-to-concept storyboards for clients worldwide using hand-drawing and advanced software tools.
        </p>
      </section>

      {/* Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Illustration Storyboard Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Digimatics Creation Services",
              desc: "Replace hand-drawn sketches with digital imagery and multimedia content for efficient video planning.",
            },
            {
              title: "Concept Panel Creation Services",
              desc: "Create visually stunning concept panels to sell your ideas with convincing and superbly rendered imagery.",
            },
            {
              title: "Thumbnail Sketch Creation Services",
              desc: "Cost-effective rough versions of storyboards with minimal details to save time and money.",
            },
            {
              title: "Black and White Storyboard Creation Services",
              desc: "Enhanced panels with grey tones suitable for animatics or commercial pitches.",
            },
            {
              title: "Color Storyboard Creation Services",
              desc: "Detailed color storyboards for clear communication of concepts before production.",
            },
            {
              title: "Cartoon Storyboard Creation Services",
              desc: "Authentic and entertaining cartoon storyboards tailored to your requirements.",
            },
            {
              title: "Continuity Board Creation Services",
              desc: "Document poses, dialogues, and actions with the latest tools for scene continuity.",
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
        <h2 className="text-3xl font-semibold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto text-center">
          {[
            "Video Game Storyboard Services",
            "Cartoon Storyboard Services",
            "Storyboard Animatic Services",
            "Character Design Services",
          ].map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-blue-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble Illustration Storyboard Services?
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Affordable Pricing Options: High value for money services starting at $10/hour.",
            "High-quality Services: ISO-certified firm delivering meticulous storyboard illustrations.",
            "Superb Infrastructure: World-class offices ensuring top-quality outputs.",
            "Tools and Technologies: Use of latest software and advanced tools for illustration.",
            "Structured Process: Systematic approach delivering high-quality storyboards on time.",
            "Experienced Team: 26+ years of experience in illustration storyboard creation.",
            "Data Security: Strict compliance with international privacy and data security laws.",
            "Short Turnaround: Fast and timely delivery of all storyboard projects.",
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
            <strong>Nimble Auity Provided 2D Animation Services to UK-based Children's Book Writer:</strong> Delivered timely, cost-effective, and reliable 2D animation services.
          </p>
          <p>
            <strong>Nimble Auity Provided High-quality Animation Services for Social Awareness Campaign:</strong> End-to-end animation services to educate youth on drug and alcohol dangers.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Testimonials</h2>
        <p>
          "Thanks for your fast turnaround time, efficiency, reliability, high-quality, and attention to detail. We greatly appreciate all your hard work." <br />
          <strong>CEO, Digital Marketing Agency, Australia</strong>
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Choose Nimble Auity for Illustration Storyboard Services
        </h2>
        <p className="mb-6">
          Professional, efficient, and cost-effective illustration storyboards tailored to your project. Partner with us today!
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default IllustrationStoryboardServices;
