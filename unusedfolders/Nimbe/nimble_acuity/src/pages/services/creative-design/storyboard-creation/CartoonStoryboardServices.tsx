import React from "react";
import CSmainmenu from "../CSmainmenu";

const CartoonStoryboardServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Cartoon Storyboard Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          High-quality cartoon storyboards created by expert animators and sketch artists starting at just $12/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Planning to start a cartoon series? Nimble Auity provides cartoon storyboard services to improve the quality of training videos, explainer videos, TVCs, and films. Our team of animators, sketch artists, and editors transform your ideas into high-quality storyboards with dialogues, montages, and scene transitions.
        </p>
        <p>
          With 26+ years of experience, we cater to production houses and independent cartoonists. Outsourcing cartoon storyboard services is practical for saving time and money while ensuring creative quality.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Cartoon Storyboard Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "2D Animation Storyboards",
              desc: "We create storyboards that make 2D animation realistic and engaging, weaving stories seamlessly with visuals.",
            },
            {
              title: "3D Animation Storyboards",
              desc: "Add depth to your 3D animations with storyboards that complement visuals and characters while maintaining the plot.",
            },
            {
              title: "CGI Animation Storyboards",
              desc: "Storyboard design that enhances CGI videos with strong plotlines and realistic visuals.",
            },
            {
              title: "Whiteboard Animation Storyboards",
              desc: "Professionally designed storyboards for whiteboard animations highlighting marketing messages, characters, and visuals.",
            },
            {
              title: "Anime Storyboards",
              desc: "Custom storyboards for anime with action lines, dubbing variations, and subtitles for effective storytelling.",
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
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Cartoon Storyboard Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Collect client requirements and understand expectations.",
            "Obtain cartoon plot and design for planning storyboard presentation.",
            "Select project team based on timely delivery and storyboard quality.",
            "Delegate project tasks to selected members and follow schedule.",
            "Provide cultural-fit training to team members for client support.",
            "Ensure compliance with quality standards for 100% accuracy.",
            "Deliver finished storyboard design via SFTP and maintain reports.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Tools Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Storyboarding Tools We Leverage</h2>
        <p className="text-center max-w-4xl mx-auto">
          Articulate Storyline, Autodesk SketchBook Express, Cinemek, FRAME FORGE, MOVIE STORM, ShotPro, StoryBoard Quick, StoryBoard Artist, Storyboard Pro, Studio Binder.
        </p>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto text-center">
          {[
            "Character Design Services",
            "Animatics Services",
            "Motion Graphics Services",
            "Digital Advertising Services",
          ].map((service, idx) => (
            <li key={idx}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Section */}
      <section className="bg-blue-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble for Cartoon Storyboard Services
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Affordable Cartoon Storyboard Design Services with customization options.",
            "ISO 9001:2015 Certified Cartoon Storyboard Services Provider.",
            "100% Data Security and strict confidentiality.",
            "Quick Turnaround Time with trained and punctual teams.",
            "Professional artists, directors, and editors for high-quality results.",
            "Scalable services to match project needs.",
            "Superb infrastructure with latest storyboard designing technology.",
            "Round-the-clock support in English and multiple languages.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto text-center">
          <p className="italic">
            "This is FANTASTIC! I am very happy with the result. Your turn-around is great, quality is great, and the price is great also. I will send you many more videos to edit. Fantastic job!"
          </p>
          <p className="font-semibold">Real Estate Videographer and Photographer, USA</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="mb-6">
          Efficient, cost-effective, and professional cartoon storyboard services.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CartoonStoryboardServices;
