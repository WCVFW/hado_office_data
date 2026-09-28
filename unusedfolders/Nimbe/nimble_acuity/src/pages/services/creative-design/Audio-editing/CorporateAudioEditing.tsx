import React from "react";
import CSmainmenu from "../CSmainmenu";

const CorporateAudioEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-blue-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Corporate Audio Editing Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Our professional audio editing team edits hours of corporate recordings to help you store data for current and future purposes at rates starting from $12/hour.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Corporate Audio Editing Matters</h2>
        <p className="mb-4">
          Nowadays, most corporate organizations are data-centric. Events like conferences, scrum sessions, and training generate large volumes of audio data crucial for future purposes. Nimble provides professional corporate audio editing services to preserve and enhance these audio files with 100% accuracy.
        </p>
        <p>
          Our team ensures high-quality audio editing for sensitive corporate content while maintaining strict confidentiality.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Corporate Audio Editing Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Audio Conversion",
              desc: "We provide audio conversion services for nearly 20 types of corporate audio formats including MP3, Real Media, Windows Media, and Wave.",
            },
            {
              title: "Podcast Editing Services",
              desc: "Editing panel discussions, one-on-one sessions, seminars, and workshops to make corporate podcasts presentable and professional.",
            },
            {
              title: "Recordings of Meetings",
              desc: "Clean and edit formal or informal meetings efficiently for transcription or submission to stakeholders.",
            },
            {
              title: "Recordings of Conferences",
              desc: "Compile conference audio files and edit to make them easily understandable and presentable.",
            },
            {
              title: "Recordings of Training",
              desc: "Process and edit training sessions to make them useful for future employees or absent team members.",
            },
            {
              title: "Improve Voice Recordings",
              desc: "Remove filler words, correct mistakes, level vocals, and enhance clarity.",
            },
            {
              title: "Audio Edits for Publishing",
              desc: "Prepare publishable audio content with high-quality editing for corporate use.",
            },
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Corporate Audio Editing Process</h2>
        <ol className="space-y-8">
          {[
            "Requirement Collection / Project Scope - Our audio experts collect requirements, expected TAT, and project data.",
            "Allocating the Right Resources - Dedicated manager and experts are assigned according to project size.",
            "Project Execution - Using latest audio software to sequence recordings for corporate use.",
            "Quality Assurance - Multi-level checks ensure error-free output.",
            "Final Delivery - Secure FTP delivery in the format preferred by clients (ogg, vog, MPEG, etc).",
          ].map((step, idx) => (
            <li key={idx} className="bg-blue-50 p-6 rounded-lg shadow flex items-start gap-4">
              <span className="font-bold text-blue-600 text-2xl">{`0${idx + 1}`}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {["Video Editing Services", "Illustrator Services", "Storyboard Services", "Digital Advertising Services"].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Auity */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Nimble Auity for Corporate Audio Editing?</h2>
        <ul className="space-y-4 list-disc list-inside">
          {[
            "Cost-Efficient Audio Editing Services without compromising quality.",
            "100% Information Security with ISO-certified protocols.",
            "Secure Data Transfer via encrypted FTP.",
            "Top-notch Infrastructure for high-volume projects.",
            "Multiple Levels of Quality Assurance for error-free output.",
            "Dedicated Team of Audio Editing Professionals.",
            "High Scalability to adjust resource allocation as needed.",
            "Quick Turnaround Time due to efficient processes.",
            "High-Quality Services with zero errors.",
            "Round the Clock Customer Support across multiple time zones.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Client Case Studies</h2>
        <div className="space-y-6">
          {[
            {
              title: "Rotoscoping Services for Media House",
              desc: "Nimble provided high-quality rotoscoping services to a leading South Asian media production firm, saving overhead time and cost.",
            },
            {
              title: "Wedding Video Editing for Wedding Film Firm",
              desc: "Nimble assisted a leading Canadian wedding filmmaker by completing pending video editing tasks within stipulated time.",
            },
          ].map((caseStudy, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{caseStudy.title}</h3>
              <p>{caseStudy.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="bg-blue-50 p-8 rounded-lg italic shadow">
          "This is FANTASTIC! Really, I am very happy with the result. Your turn-around is great, quality is great, and the price is great also. I will send you hopefully many more videos to edit. I look forward to working together with you and your team. Once again, fantastic job. I am very pleased."
          <cite className="block mt-4 font-bold">Real Estate Videographer and Photographer, USA</cite>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="bg-blue-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Started with Nimble Auity Today</h2>
        <p className="mb-6">
          Contact us now to learn more about pricing, process, and how we can deliver high-quality corporate audio editing services for your business.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CorporateAudioEditing;
