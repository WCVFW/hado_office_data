import React from "react";
import CSmainmenu from "../CSmainmenu";

const StoryboardAnimaticServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-yellow-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Storyboard Animatic Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Pre-visualize your animated film with innovative storyboard animatics. Services start at just $25/second.
        </p>
        <button className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Nimble Auity helps you pre-visualize your animated movie without expensive software or full-time experienced artists. Save resources, stay on schedule, and get professional results.
        </p>
        <p>
          Our animators import storyboards into Adobe After Effects and sync them with speech and soundtrack, ensuring you understand exactly how the movie will appear in its final form.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Storyboard Animatic Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Movie Storyboard Animatic",
              desc: "Import hand-drawn characters and animate them with proper pace, flow, soundtrack, and speech synchronization.",
            },
            {
              title: "2D and 3D Storyboard Animatic",
              desc: "Animate characters and objects with realistic camera movements to enhance pre-visualization.",
            },
            {
              title: "TVC Storyboard Animatic",
              desc: "Storyboard animatics for television commercials using fast camera movements, puppet tools, and shot/frame count/time-codes.",
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
          Nimble Storyboard Animatic Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Collect client requirements through collaboration.",
            "Request the concept and storyboard material from the client.",
            "Project leads review concept and create storyboard framework.",
            "Prepare the project and brief the team on tasks.",
            "Train the team to work as an extension of the client's team for cultural fit.",
            "Commence project and execute storyboard animatic per client requirements.",
            "Send project to client for review and incorporate feedback.",
            "Share finalized storyboard with client via SFTP.",
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
      <section className="bg-yellow-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Nimble for Storyboard Animatic Services
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-4xl mx-auto">
          {[
            "Affordable Storyboard Animatic Design Services with customizable options.",
            "ISO 9001:2015 Certified Storyboard Animatic Services Provider.",
            "100% Data Security with ISO/IEC 27001:2022 compliance.",
            "Quick Turnaround Time with on-time delivery.",
            "Professional animators and artists with decades of experience.",
            "Scalable services for ongoing projects.",
            "Superb infrastructure to handle large projects efficiently.",
            "Round-the-clock support in multiple languages.",
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
          <p className="italic">"This is FANTASTIC! I am very happy with the result. Your turn-around is great, quality is great, and the price is great also. I will send you many more videos to edit. Fantastic job!"</p>
          <p className="font-semibold">Real Estate Videographer and Photographer, USA</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="mb-6">
          Efficient, cost-effective, and professional storyboard animatic services.
        </p>
        <button className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default StoryboardAnimaticServices;
