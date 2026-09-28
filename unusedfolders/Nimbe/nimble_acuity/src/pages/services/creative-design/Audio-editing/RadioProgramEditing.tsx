import React from "react";
import CSmainmenu from "../CSmainmenu";

const RadioProgramEditing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Radio Program Editing Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Our editing wizards convert recordings of radio programs into captivating audio by enriching its quality and adding bespoke sound effects at rates starting at $12 per hour.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Editing radio programs has become a vital process requiring expertise and advanced technology. Nimble Auity offers professional radio program editing services using specialized software, expert teams, and sound effects to deliver high-quality shows at affordable prices.
        </p>
        <p>
          With 26+ years of experience, Nimble professionals follow exceptional editing processes, including BGM score addition, audio trimming, noise removal, and more, ensuring your radio programs captivate your audience.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Radio Program Editing Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Voice Management Services",
              desc: "Ensure pure and clear voice output by filtering, smoothing, and arranging audio for best listener experience.",
            },
            {
              title: "Program Production",
              desc: "Manage recordings, editing, and production tasks to ensure professional radio shows.",
            },
            {
              title: "Music Enhancement Services",
              desc: "Optimize tracks, tunes, and music according to your radio show's theme to attract audiences.",
            },
            {
              title: "Program Planning",
              desc: "Design exciting show plans to highlight host strengths, advertise content, and create smooth show flow.",
            },
            {
              title: "Addition of Sound Effects",
              desc: "Use high-quality sound effects to create engaging radio shows from our extensive catalog.",
            },
            {
              title: "Audio Layering",
              desc: "Layer music, clips, atoms, and dialogues to ensure consistent playback and no dead air.",
            },
            {
              title: "Technical Services",
              desc: "Provide audio importing, playlist preparation, ID3 tagging, MIDI control, and other technical support.",
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
        <h2 className="text-3xl font-semibold mb-10 text-center">Radio Program Editing Process</h2>
        <ol className="space-y-8">
          {[
            "Project Scope - Define project scope including pricing, program editing, and turnaround time.",
            "Analyze and Assign Manager - Dedicated manager works closely with client for timely updates.",
            "Allocating Team - Assign experts according to project requirements for high-quality output.",
            "Quality Assurance - Internal reviews ensure all radio shows meet quality standards.",
            "Final Delivery - QA-approved shows delivered via secure FTP or encrypted channels in desired formats.",
          ].map((step, idx) => (
            <li key={idx} className="bg-purple-50 p-6 rounded-lg shadow flex items-start gap-4">
              <span className="font-bold text-purple-600 text-2xl">{`0${idx + 1}`}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Audio Conversion Services",
            "Podcast Editing Services",
            "Ad Jingle Creation Services",
            "Corporate Audio Editing Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Auity */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Nimble Auity for Radio Program Editing?</h2>
        <ul className="space-y-4 list-disc list-inside">
          {[
            "Flexible Pricing Options customized for your requirements.",
            "ISO Certified Company ensuring international quality standards.",
            "Highly Secured Data Management with ISMS certification.",
            "Creative Vision to produce captivating radio shows.",
            "Tailor-Made Services suited for global clients.",
            "Appealing Content with professional scripts and captions.",
            "Legal Competency ensuring compliance with broadcasting laws.",
            "High Scalability for fluctuating radio show requirements.",
            "State-of-the-Art Infrastructure with latest tools and software.",
            "Secure Data Transfer using SFTP and VPN protocols.",
            "24/7 Customer Support across multiple time zones.",
            "Short Turnaround Time delivering services 35% faster than competitors.",
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
              title: "Audio Speakers Catalog Design for a Hong Kong Based Client",
              desc: "We designed an audio speaker catalog for a client in just 24 hours with 100% match and cost-effectiveness.",
            },
            {
              title: "Live Video Editing for a Swedish Film Producer",
              desc: "Nimble provided live video editing services helping the TV production house reduce overhead cost.",
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
        <blockquote className="bg-purple-50 p-8 rounded-lg italic shadow">
          "I am overjoyed with the support and understanding of your team. The diligent work with a quick turnaround time helped my company earn immense profits."
          <cite className="block mt-4 font-bold">Graphics Manager, Electronics Company, South Korea</cite>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Started with Nimble Auity Today</h2>
        <p className="mb-6">
          Contact us now to learn how Nimble can deliver high-quality radio program editing services with fast turnaround times and affordable pricing.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default RadioProgramEditing;
