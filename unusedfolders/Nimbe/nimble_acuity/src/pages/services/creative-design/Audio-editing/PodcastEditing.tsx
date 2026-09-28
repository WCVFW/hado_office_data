import React from "react";
import CSmainmenu from "../CSmainmenu";

const PodcastEditing: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Podcast Editing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get high-quality podcast editing done by seasoned editors who use
          proprietary tools to make your content sound crisp and clear — starting
          at just $12/hour.
        </p>
      </section>

      {/* Intro */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-6">
          Are you unable to hire a podcast editing team on short notice? Do you
          lack the technology or bandwidth to edit hundreds of podcasts daily?
          If so, partner with Nimble Auity and let us do the heavy lifting on
          your behalf. As a top podcast editing service provider, we accept all
          challenges — whether simple or complex.
        </p>
        <p>
          Our infrastructure houses some of the latest audio editing tools that
          isolate the vocal content from the podcast to edit portions that are
          distorted while recording. With 26+ years of experience, nothing is
          more satisfying to us than seeing you become another one of our happy
          customers.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Podcast Editing Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Interview Podcast Editing",
              desc: "We balance volume for interviews ensuring consistent, professional listening experiences compliant with 16 LUFS.",
            },
            {
              title: "Panel Podcast Editing",
              desc: "For multi-speaker panels, we remove distortions, echoes, and noise using Ableton, Logic Pro, and DAWs.",
            },
            {
              title: "Narrative Podcast Editing",
              desc: "We deliver studio-like quality by removing unwanted audio elements to refine storytelling.",
            },
            {
              title: "Multi-host Podcast Editing",
              desc: "Our team ensures crisp audio with noise removal, cleansing, and cancellation for multi-host podcasts.",
            },
            {
              title: "Commentary Podcast Editing",
              desc: "We optimize commentary podcasts by removing cross speech and background noise using compressors and reverb tools.",
            },
            {
              title: "Clearing Clutter",
              desc: "Repetitive words, vocalizations, and breathing sounds are eliminated for clarity.",
            },
            {
              title: "Adding Details",
              desc: "We enrich podcasts with intros, outros, tags, and metadata for discoverability.",
            },
            {
              title: "Podcast File Conversions",
              desc: "We convert to/from OGG, AAC, MP3 and fix compatibility issues effortlessly.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Podcast Editing Process
        </h2>
        <ol className="space-y-6">
          {[
            "Delivery of the analog or digital audio files.",
            "Preliminary cleaning for analogue tapes/records.",
            "Conversion to digital format and editing with proprietary tools.",
            "Detailed review using Soundtrack Pro.",
            "Quality check by engineers and QC experts.",
            "Final export in 32-bit AIFF, 44.1 kHz or format of choice.",
            "Secure delivery via SFTP.",
          ].map((step, i) => (
            <li key={i} className="flex items-start">
              <span className="bg-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4">
                {i + 1}
              </span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Other Services You Can Benefit From
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Video Editing Services",
            "Illustration Services",
            "Storyboard Services",
            "Digital Advertising Services",
          ].map((service, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-white rounded-full shadow text-gray-700 font-medium"
            >
              {service}
            </span>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Auity for Podcast Editing?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "Affordable, customizable packages to fit any budget.",
            "ISO 9001:2015 certified quality standards.",
            "100% data security and confidentiality.",
            "Quick turnaround times.",
            "Experienced podcast editing professionals.",
            "Scalable solutions tailored to your needs.",
            "State-of-the-art infrastructure for high-quality editing.",
            "24/7 multilingual customer support.",
            "Dedicated SPOC for streamlined communication.",
          ].map((point, i) => (
            <div key={i} className="flex items-start">
              <span className="text-purple-600 font-bold mr-2">✓</span>
              <p>{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Rotoscoping Services for Media House
            </h3>
            <p className="text-gray-600">
              Nimble Auity provided high-quality rotoscoping to a leading South
              Asian media firm, significantly reducing post-production
              overheads.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold mb-2">
              Wedding Video Editing for Canadian Film Firm
            </h3>
            <p className="text-gray-600">
              A top Canadian wedding filmmaker outsourced editing to Nimble
              Auity. We completed pending assignments with high quality and
              within tight deadlines.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <blockquote className="italic text-lg text-gray-700 mb-4">
          “This is FANTASTIC! Really, I am very happy with the result. Your
          turn-around is great, quality is great, and the price is great also. I
          look forward to working together with you and your team. Fantastic
          job.”
        </blockquote>
        <p className="font-semibold text-gray-600">
          Real Estate Videographer & Photographer, USA
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Elevate Your Podcast?
        </h2>
        <p className="mb-6">
          Contact Nimble Auity today for professional, affordable, and
          error-free podcast editing services tailored to your needs.
        </p>
        <button className="bg-white text-indigo-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default PodcastEditing;
