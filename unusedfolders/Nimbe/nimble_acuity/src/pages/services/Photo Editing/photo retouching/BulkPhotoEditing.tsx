import React from "react";
import PEMainMenu from "../PEmainmenu";

const BulkPhotoEditing: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Bulk Photo Editing Service
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Leverage our streamlined processes, AI-powered tools, and
          pre-existing infrastructure to achieve consistent outcomes in less
          time and at lesser costs. <br />
          <span className="font-semibold">
            Contact us for cost-contained bulk editing services with quick
            turnarounds.
          </span>
        </p>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <p className="text-lg leading-relaxed mb-6">
          When dealing with many photos, manually editing each one can be
          time-consuming and may result in inconsistencies across the images.
          Why invest your billable hours in mass editing photos when you can use
          our automated processes, AI-powered tools, and pre-existing
          infrastructure to achieve consistent outcomes in less time and at much
          lesser costs?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          As a globally renowned bulk photo editing service company, we bring
          you industry-leading software, streamlined processes, and extensive
          experience serving clients across{" "}
          <span className="font-semibold">160+ countries</span>.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Professional Bulk Photo Editing Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Bulk Image Conversion Services",
                desc: "Advanced algorithms ensure optimal quality during format conversion with automated workflows for large volumes.",
              },
              {
                title: "Wedding Photography Post Processing",
                desc: "AI scripts organize wedding day shoots, applying adjustments for consistency and enhancing image nuances.",
              },
              {
                title: "Wedding Photo Enhancement",
                desc: "Automated workflows and presets refine skin tones, correct colors, and enhance portraits consistently.",
              },
              {
                title: "Wedding Portrait Enhancement",
                desc: "AI-driven tools like PortraitPro perfect balance, facial harmony, and detail while preserving natural character.",
              },
              {
                title: "Real Estate Image Editing",
                desc: "Cohesive property portfolios with HDR imaging, clarity, and vibrancy for interiors and exteriors.",
              },
              {
                title: "Fashion Image Editing",
                desc: "Selective retouching enhances fabrics, jewelry, and accessories with precise color grading for harmony.",
              },
              {
                title: "Jewelry Image Editing",
                desc: "Enhance brilliance, refine textures, and highlight craftsmanship with advanced bulk editing.",
              },
              {
                title: "Image Clipping Services",
                desc: "Remove distractions, isolate subjects, and enable seamless object integration into new contexts.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-gray-50 border rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Industries */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Technology We Leverage</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adobe Lightroom</li>
            <li>Adobe Photoshop</li>
            <li>Luminar AI, Topaz AI</li>
            <li>PortraitPro</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Industries We Empower</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Real Estate</li>
            <li>Corporate</li>
            <li>Automobile</li>
            <li>Jewelry</li>
            <li>E-Commerce</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-indigo-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us as Your Bulk Photo Editing Partner?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                desc: "Skilled professionals with advanced tools deliver high-quality edits within deadlines.",
              },
              {
                title: "100% Data Security",
                desc: "ISO/IEC 27001:2022 certified with advanced fail-safe systems and breach prevention.",
              },
              {
                title: "Short Turnaround Time",
                desc: "Reduce turnaround by 50% with 24-hour TATs and same-day deliveries.",
              },
              {
                title: "24/7 Availability",
                desc: "Our customer support team is available round-the-clock to resolve issues instantly.",
              },
              {
                title: "Flexible Pricing",
                desc: "Cost-effective models tailored to project complexity, photo volume, and timelines.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="bg-white p-6 rounded-2xl shadow italic">
          “Thank you for the excellent work you have done for me. The quality
          was very high, the price excellent and the turnaround time was very
          fast. 10/10.”
          <footer className="mt-4 text-sm font-semibold text-gray-600">
            — Professional Photographer, Australia
          </footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Bulk Photo Editing Services to Us
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg">
          Save up to <span className="font-semibold">60% on overheads</span>.
          Get consistent, high-quality results with our professional team.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Request a Free Quote
        </a>
      </section>
    </div>
  );
};

export default BulkPhotoEditing;
