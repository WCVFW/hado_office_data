import React from "react";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const Art2DServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative bg-gradient-to-r from-green-600 to-green-400 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Nimble Auity – 2D Art Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Bring your ideas to life with our proficient 2D services for artwork, starting at just <strong>$10 per hour</strong>!
        </p>
        <Button className="bg-white text-green-700 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <p className="text-lg leading-relaxed text-gray-700">
          No matter which industry sector you belong to, 2D design is a prerequisite to create enticing media content.
          From click-worthy advertising campaigns to theme-based art for game projects, businesses are turning to
          Nimble for world-class 2D artwork services that drive engagement.
        </p>
        <p className="mt-6 text-lg text-gray-700">
          At <strong>Nimble Auity</strong>, we deliver sophisticated artwork services tailored to unique, complex, and evolving needs. 
          Our passionate 2D experts use the latest tools and techniques to produce concept art in diverse formats—be it contemporary styles or unique conceptualization.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">2D Art Services We Offer</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "2D Game Art Services",
              desc: "Create exceptional 2D game assets that resonate seamlessly with gamers.",
            },
            {
              title: "Logo and Packaging Designs",
              desc: "Striking logos and enticing packaging designs that boost sales and brand value.",
            },
            {
              title: "2D Design Solutions for Marketing Campaigns",
              desc: "Marketing & branding materials like brochures, flyers, booklets, and standee designs.",
            },
            {
              title: "Technical Illustrations",
              desc: "Deliver information through schematics, diagrams, and immaculate visual aids.",
            },
            {
              title: "Floor Planning & Coloring",
              desc: "Simple, clutter-free 2D floor plans and real estate layouts with clear visuals.",
            },
            {
              title: "Image Vectorization",
              desc: "Retrace or convert your images into high-quality vector artwork or illustrations.",
            },
            {
              title: "Pop Arts",
              desc: "Unique pop art for storybooks, comics, and creative projects at reasonable rates.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Layout & Formatting Design", "Magazine Layout Design", "DTP Services", "Book Layout Design"].map(
            (item, idx) => (
              <div
                key={idx}
                className="p-6 bg-green-50 rounded-xl shadow hover:bg-green-100 transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble for Your 2D Art Requirements?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Proficient Team of Technical Experts",
              desc: "Our professionals with 5+ years of experience leverage top tools for innovative artwork.",
            },
            {
              title: "Quick Turnaround",
              desc: "With delivery centers worldwide, we promise turnaround times as short as 24–48 hours.",
            },
            {
              title: "Uncompromised Data Security",
              desc: "We use VPNs, FTP servers, and regular backups to ensure your files are always safe.",
            },
            {
              title: "Reasonable Pricing",
              desc: "Customized estimates that balance quality and affordability for every project.",
            },
            {
              title: "Free Trial",
              desc: "Experience our artwork quality firsthand before committing to a full project.",
            },
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Prepress & Vector Artwork for Dublin Printing Company
            </h3>
            <p className="text-gray-600">
              A Dublin-based client sought a reliable artwork partner. Nimble delivered accurate prepress
              and vector solutions within quick time.
            </p>
          </div>
          <div className="bg-gray-50 border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Vector Artwork Services for US Label Designer
            </h3>
            <p className="text-gray-600">
              A US-based label designer needed cost-effective vector artwork. Our team delivered high-quality
              solutions at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “The quality of artwork delivered during the trial period was exceptional, and that helped us
          decide on Nimble as our new design partner over multiple global competitors.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">
          – Director of Operations, Leading Pharmaceutical Company in Netherlands
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-green-600 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Get a Step Closer to Crafting Stunning 2D Artwork
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          For over two decades, <strong>Nimble Auity</strong> has been a trusted 2D art service provider for global clients. 
          Let us bring your ideas to life with stunning, customized designs.
        </p>
        <Button className="bg-white text-green-700 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default Art2DServices;
