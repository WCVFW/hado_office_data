import React from "react";
import CSmainmenu from "../CSmainmenu";

const CharacterCreationServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-purple-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Character Creation Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Get professional character creation services starting at just $10/hour to create high-quality digital characters for storytelling, increase engagement, and transform viewers into buyers.
        </p>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Are you in search of a character creation service provider to get hundreds of characters created in record time? Nimble Auity understands the needs of production companies that are hard-pressed on time and resources. With our 26+ years of experience, we deliver high-quality character designs custom-made for individual businesses.
        </p>
        <p>
          Nimble helps save time and cost while ensuring characters meet your exact specifications.
        </p>
      </section>

      {/* Character Creation Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Character Creation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Creation of Video Game Characters",
              desc: "We create high-quality in-game characters to exact specifications with graphics and audio for marketable renders.",
            },
            {
              title: "Creation of Toons",
              desc: "Transform concepts into expressive mock drafts, gradually adding details to create interactive cartoon characters.",
            },
            {
              title: "Creation of Mascots",
              desc: "Design mascots that become your brand identity, bringing them to life quickly with refreshing design concepts.",
            },
            {
              title: "2D Character Creation",
              desc: "Get 2D characters for digital campaigns that fully reflect your brand idea and purpose.",
            },
            {
              title: "3D Character Creation",
              desc: "Our animators create interactive characters for video games and visual media that are visually engaging and expressive.",
            },
            {
              title: "Creation of Book Characters",
              desc: "Design characters for print media including book covers and inners, making them expressive and appealing to readers.",
            },
            {
              title: "Creation of Characters for Branding",
              desc: "High-quality characters for digital and print media with distinctive colors that connect with your brand.",
            },
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Character Creation Process */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Our Character Creation Process</h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Briefing: Understand client requirements and create scope of work.",
            "Input: Receive character samples and scripts via secure channels.",
            "Design Allocation: Assign tasks to illustrators, artists, animators, or designers.",
            "Character Creation: Render characters using Adobe AfterEffects, 3DS Max, Illustrator, Maya, etc.",
            "Quality Check: QC team ensures compliance with standards.",
            "Approval: Send initial drafts to client for approval.",
            "Edits: Incorporate client feedback and adjustments.",
            "Final Upload: Deliver character designs in JPEG, TIFF, EPS, and PDF via secure FTP.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Illustrator Services",
            "Magazine Layout Service",
            "Prepress Services",
            "Digital Advertising Services",
          ].map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-bold text-lg">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">
          Why Choose Nimble for Character Creation?
        </h2>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Cost-effective and customizable services.",
            "ISO 9001:2015 certified provider.",
            "High-quality character designs for digital and non-digital channels.",
            "Quick turnaround for bulk projects without compromising quality.",
            "Scalable solutions to match your project size.",
            "100% data security.",
            "Professional experts with 10+ years of experience.",
            "State-of-the-art infrastructure and design tools.",
            "Round-the-clock support for any time zone.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">Client Success Stories</h2>
        <div className="space-y-6">
          {[
            {
              title: "Prepress and Vector Artwork for Dublin-based Client",
              desc: "Our team delivered prepress and vector artwork quickly to meet client deadlines efficiently.",
            },
            {
              title: "Vector Artwork for US-based Label Designer",
              desc: "Provided flawless vector artwork solutions through referral, meeting all client needs promptly.",
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
      <section className="bg-purple-50 py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <blockquote className="bg-white p-8 rounded-lg italic shadow">
          "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new partner."
          <cite className="block mt-4 font-bold">Director - Operations, Leading pharmaceutical company, Netherlands</cite>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="bg-purple-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="mb-6">
          Get high-quality, scalable character creation services tailored for your brand or project.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CharacterCreationServices;
