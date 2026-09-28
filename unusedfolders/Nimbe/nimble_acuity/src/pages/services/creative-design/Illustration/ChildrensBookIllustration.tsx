import React from "react";
import CSmainmenu from "../CSmainmenu";

const ChildrensBookIllustration: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <div className="relative bg-gradient-to-r from-purple-100 to-pink-100 py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">
          Nimble Children's Book Illustration Services
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Break free from in-house illustration challenges. Overcome creative
          hurdles and experience cost efficiency with our comprehensive
          children's book illustration services.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12 space-y-6 leading-relaxed text-gray-700">
        <p>
          Creating captivating illustrations for children's books can be
          daunting for most authors and publishers. Some of the major hurdles
          experienced when doing it in-house include creative blocks, or the
          time, resource, and cost-related constraints. Delegating your
          requirements to a professional children's book illustration company
          like <strong>Nimble</strong> ensures timely delivery and efficient
          cost management.
        </p>
        <p>
          We offer comprehensive children's book illustration solutions that
          help you create outstanding illustrations for children's books at
          minimal costs. We have an extensive network of talented illustrators
          who convert your ideas into engaging artwork that captivates young
          readers.
        </p>
        <p>
          Avail custom children's book illustration support to ensure
          consistent, high-quality designs, manage deadlines, and reduce
          overhead expenses.
        </p>
      </div>

      {/* Success Stories */}
      <div className="bg-purple-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Case Study on Rotoscoping Services for Media House
            </h3>
            <p>
              We Provided High-quality Rotoscoping Services to a Leading South
              Asian Media Production Firm. Learn how Nimble's rotoscoping
              professionals provided exclusive rotoscoping solutions at a
              cost-effective rate that helped the client save 50% cost.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="font-semibold text-lg mb-2">
              Nimble Provided Financial Research Support Services
            </h3>
            <p>
              A leading investment firm in Ireland was looking for
              comprehensive creative artwork services under one roof. We won the
              trust of the customer with our initial free sample and since then
              there has been no looking back. We now function as the customer's
              virtual studio.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-5xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Testimonials
        </h2>
        <blockquote className="italic text-gray-700 border-l-4 border-purple-500 pl-4">
          "The quality of Artwork delivered during the trial period was
          exceptional and that helped us to decide on our new Nimble Partner
          from a couple of quotes from companies across the globe."
          <footer className="mt-2 font-semibold text-purple-700">
            Director, Operations, Leading Pharmaceutical Company in Netherlands
          </footer>
        </blockquote>
      </div>

      {/* Services Offered */}
      <div className="bg-purple-50 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-purple-800 mb-8">
          Children's Book Illustrations We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Textbook Illustration Services",
              desc: "We collaborate with authors to create illustration artwork for textbooks, ensuring precision and minimal background noise."
            },
            {
              title: "Book Cover Illustration",
              desc: "Provide custom book cover illustrations designed to convey the right message to your audience."
            },
            {
              title: "Character Illustration",
              desc: "Compelling visuals that make your story come alive with perfect harmony between narrative and artwork."
            },
            {
              title: "Brand Illustration Services",
              desc: "Convert your brand ethos into compelling visuals with strong branding acumen and tools like Adobe Creative Cloud."
            },
            {
              title: "Comic Illustration Services",
              desc: "Create engaging comic sequences using digital tools like Photoshop and Procreate."
            }
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-12">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Children's Book Illustrations Process Flow
        </h2>
        <ol className="space-y-4 text-gray-700 list-decimal list-inside">
          <li>Character Design – conceptualize unique, engaging characters.</li>
          <li>Creation of Miniature Drafts – provide a snapshot of the story.</li>
          <li>Preliminary Sketching – create initial sketches for each scene.</li>
          <li>
            Advancing Rough Drafts to Final Illustrations – transform sketches
            into detailed illustrations.
          </li>
          <li>Adding Color Elements – infuse vibrant colors.</li>
          <li>Refinements and Enhancements – ensure every detail is perfect.</li>
          <li>Quality Assurance – check illustrations meet top standards.</li>
          <li>Completion and Delivery – final product ready for publication.</li>
        </ol>
      </div>

      {/* Why Choose Us */}
      <div className="bg-purple-100 py-12 px-6 lg:px-20">
        <h2 className="text-3xl font-semibold text-purple-800 mb-6">
          Why Choose Nimble as Your Children’s Book Illustration Partner?
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc list-inside">
          <li>Best-in-class services from 30+ illustrators & designers.</li>
          <li>ISO-certified services with encrypted file transfers & NDA.</li>
          <li>Free trial option before full project commitment.</li>
          <li>Rich domain experience across industries & time zones.</li>
          <li>Fastest turnarounds with 24/7 illustrator availability.</li>
        </ul>
      </div>

    </section>
  );
};

export default ChildrensBookIllustration;
