import React from "react";
import CSmainmenu from "../CSmainmenu";

const CharacterDesigningServices: React.FC = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Character Designing Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          High-quality character design support for gaming houses, ad agencies, publishers, 3D artists, and more at the most affordable costs.
        </p>
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Contact Us
        </button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="mb-4">
          Nimble Auity offers professional character designing services for films, books, websites, games, and more. Our artists illustrate, model, and animate characters with storyboards, scripts, and previews throughout the project.
        </p>
        <p>
          Our skilled designers, illustrators, and animators adhere to creative briefs and develop eye-catching characters for comics, games, animation, web content, mascots, and marketing collateral.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Nimble Character Designing Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Comic Characters",
              desc: "Illustrate characters from stick figures to full-fledged comics using principles of animation like squash and stretch, incorporating movement and life.",
            },
            {
              title: "Gaming Characters",
              desc: "Conceptualize, design, and develop characters for video games with scripting, storyboarding, animation, and audio integration.",
            },
            {
              title: "Mascot Characters",
              desc: "Create eye-catching mascots for marketing campaigns that engage audiences and capture your brand vision.",
            },
            {
              title: "Book Character Illustration",
              desc: "Design characters for book covers and inner pages, including children's books, textbooks, and technical journals.",
            },
            {
              title: "Characters for Branding Collateral",
              desc: "Produce unique characters for ads, banners, flyers, and digital marketing material that complement your brand.",
            },
            {
              title: "Character Animation",
              desc: "Produce 3D character animations for video games, film, advertising, apps, and online content to communicate messages effectively.",
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
          Nimble's Character Designing Process Flow
        </h2>
        <ol className="list-decimal list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Briefing: Receive project brief from client and prepare Scope of Work (SOW).",
            "Input: Client transfers scripts and character samples via secure FTP, Dropbox, or email.",
            "Design Allocation: Assign tasks to illustrators, artists, animators, or designers.",
            "Illustration/Animation Execution: Create designs using Adobe Illustrator, 3DS Max, Maya, Adobe After Effects, including 3D animation techniques.",
            "Quality Check: QC specialists conduct thorough quality assessment.",
            "Approval: First draft sent to client for feedback and approval.",
            "Edits: Incorporate client revisions and finalize design/animation.",
            "Final Upload: Deliver final files via secure FTP or Dropbox in PDF, TIFF, EPS, or JPEG formats.",
          ].map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Benefits of Choosing Nimble</h2>
        <ul className="list-disc list-inside space-y-4 max-w-3xl mx-auto">
          {[
            "Service Expertise: 30+ trained designers, illustrators, and animators.",
            "High-quality: 99% SLA adherence, ISO quality guidelines followed.",
            "Easy Outsourcing: Scale projects across time zones with 24/6 support.",
            "Security: 100% NDA compliance and GDPR adherence.",
            "Skilled Team: Experts in Adobe Photoshop, Illustrator, 3DS Max, Maya, Premiere Pro.",
            "Fast Delivery: 12-15 illustrations delivered within 24 hours (depending on project).",
            "Accurate Illustrations: Every illustration adheres to client specifications.",
            "Cost-effectiveness: Hourly/project rates, FTE options, and customized packages.",
            "Quick Turnaround: Timely delivery without compromising quality.",
          ].map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-16 px-6 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="mb-6">
          Fast, reliable, and cost-effective character designing services for your projects.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default CharacterDesigningServices;
