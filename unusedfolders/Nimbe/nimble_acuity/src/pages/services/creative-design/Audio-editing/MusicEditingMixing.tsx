import React from "react";
import CSmainmenu from "../CSmainmenu";

const MusicEditingMixing: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Music Editing and Mixing Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Our music editors use analog gear to mix and edit raw audio files and uniquely mix diverse tracks and tunes to wow your audience at rates starting at just $12 per hour.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Are you trying to create a gobsmacking track with music editing and mixing? Lacking expertise or resources, or working with a low budget? Nimble Auity is the ideal partner for professional music editing and mixing services.
        </p>
        <p>
          With 26+ years of experience, Nimble has worked with top musicians, recording studios, video agencies, and professional sound artists worldwide. Our team masters looping, multi-song mixes, rearrangements, syncing tasks, editing, and more to deliver outstanding results.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Music Editing and Mixing Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Mixing Audio",
              desc: "Our professionals create and mix audios using various instruments, elements, and vocals to produce compositions that satisfy your audience.",
            },
            {
              title: "Creating Background Music",
              desc: "We develop high-quality, soothing background music that creates heartfelt ambiance for your audience.",
            },
            {
              title: "Professional Audio Enhancements",
              desc: "Enhance audio quality by reducing noise, elevating clarity, and eliminating dead air for a professional output.",
            },
            {
              title: "Audio Mastering",
              desc: "Our experts perform element enhancements, compression, loudness boosting, crossfading, noise elimination, and more.",
            },
            {
              title: "Show Programming",
              desc: "We craft show programs optimized for timing and structure to deliver an engaging audio experience.",
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
        <h2 className="text-3xl font-semibold mb-10 text-center">Music Editing and Mixing Process</h2>
        <ol className="space-y-8">
          {[
            "Requirement Gathering and Statement of Work - Our manager and experts connect with clients to gather precise requirements.",
            "Data Transfer and Research - Client data is securely transferred and analyzed to develop effective strategies.",
            "Allocation of Appropriate Team - Dedicated manager, experts, and QA team are assigned to the project.",
            "Music Editing and Mixing - Experts eliminate noise, remove dead air, and enhance audio for charming output.",
            "Quality Assurance - QA team verifies output and provides feedback for corrections if necessary.",
            "Final Delivery - Approved files are delivered via secure FTP, and client feedback is incorporated.",
          ].map((step, idx) => (
            <li key={idx} className="bg-indigo-50 p-6 rounded-lg shadow flex items-start gap-4">
              <span className="font-bold text-indigo-600 text-2xl">{`0${idx + 1}`}</span>
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
        <h2 className="text-3xl font-semibold mb-10 text-center">Why Choose Nimble Auity for Music Editing & Mixing?</h2>
        <ul className="space-y-4 list-disc list-inside">
          {[
            "Cost-Effective Services with payment only for services received.",
            "ISO Certified Company following international standards.",
            "High Data Security with exclusive IT teams and restricted access.",
            "High-Quality Services using latest software, high-speed internet, and QA teams.",
            "Highly Scalable team ensuring timely delivery even with large projects.",
            "Modern Infrastructure with latest software, technology, and secure protocols.",
            "Short Turnaround Time ensuring on-time project completion.",
            "Single Point of Contact for clear communication and updates.",
            "Secured Data Transfer Protocols using secure FTP/VPN.",
            "Round-the-clock Customer Support across multiple time zones.",
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
              title: "Audio Speakers Catalog Design for a Hong Kong Client",
              desc: "We designed an audio speaker catalog in just 24 hours, perfectly matching client requirements.",
            },
            {
              title: "Live Video Editing for a Swedish Film Producer",
              desc: "Nimble provided live video editing, helping the production house reduce overhead costs.",
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
        <blockquote className="bg-indigo-50 p-8 rounded-lg italic shadow">
          "I am overjoyed with the support and understanding of your team. The diligent work with a very quick turnaround time helped my company earn immense profits."
          <cite className="block mt-4 font-bold">Graphics Manager, Electronics Company, South Korea</cite>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get Started with Nimble Auity Today</h2>
        <p className="mb-6">
          Contact us now to learn how Nimble can deliver high-quality music editing and mixing services at affordable rates with guaranteed quality.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MusicEditingMixing;
