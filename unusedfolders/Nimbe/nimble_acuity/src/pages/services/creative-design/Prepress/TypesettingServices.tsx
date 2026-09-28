import React from "react";
import { Button } from "@/components/ui/button";
import CSmainmenu from "../CSmainmenu";

const TypesettingServices: React.FC = () => {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Nimble Auity – Typesetting Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Nimble typesetting services handle your pre-press requirements with precision and
          accuracy at prices starting at just <strong>$10/hour</strong>.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold">
          Get Started
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Over the years, typesetting services have evolved, and so has the way books are
          viewed. While a well-written book matters, so does the layout, font, headers, and
          overall structure. Nimble Auity ensures balance between design and readability,
          delivering print-ready manuscripts that make the right impact.
        </p>
        <p className="text-lg text-gray-700">
          With 26+ years of experience, <strong>Nimble</strong> converts manuscripts into
          error-free, precise, and reader-friendly layouts—whether professional, creative, or
          quirky. You focus on writing, and let us handle flawless typesetting.
        </p>
      </section>

      {/* Services Offered */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Typesetting Services We Offer
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Chapter Headings",
              desc: "Immersive and consistent chapter headings that capture reader attention.",
            },
            {
              title: "Cover Page & Illustrations",
              desc: "Catchy cover designs and in-layout illustrations by our graphic team.",
            },
            {
              title: "Fonts",
              desc: "Custom font selections to match your book’s style and theme.",
            },
            {
              title: "Alt Text Usage",
              desc: "Accessible alt text to enhance usability and provide context for visuals.",
            },
            {
              title: "Bullets & Lists",
              desc: "Stylish, consistent lists and bullets that complement your theme.",
            },
            {
              title: "Running Headers & Footers",
              desc: "Easy navigation with headers, footers, and custom design options.",
            },
            {
              title: "Proofreading",
              desc: "Thorough quality checks to eliminate errors and ensure readability.",
            },
            {
              title: "Multiple Languages",
              desc: "Support for 15+ global languages including English, French, German, Hindi, Chinese, Japanese, and more.",
            },
            {
              title: "Multiple Categories",
              desc: "Covers journals, textbooks, comics, magazines, legal books, catalogs, travel guides, and more.",
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

      {/* Process */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Typesetting Process</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {[
            {
              step: "01. Requirements Analysis",
              desc: "Understand category, theme, specifications, and language of your manuscript.",
            },
            {
              step: "02. Resource Allocation",
              desc: "Assign expert team, project manager, and software tools for your project.",
            },
            {
              step: "03. Typesetting",
              desc: "Apply layout, fonts, and formatting. Share drafts, collect feedback, refine.",
            },
            {
              step: "04. Delivery",
              desc: "Final error-free, print-ready file delivered in the format your printer needs.",
            },
          ].map((p, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-lg mb-3">{p.step}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Other Services You Can Benefit From
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Creative Design Services", "Illustrator Services", "Artwork Services", "Writing Services"].map(
            (item, idx) => (
              <div
                key={idx}
                className="p-6 bg-indigo-50 rounded-xl shadow hover:bg-indigo-100 transition"
              >
                <p className="font-medium">{item}</p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble for Typesetting Services?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Affordable Solutions",
              desc: "Flexible pricing so you pay only for the services you use.",
            },
            {
              title: "Latest Technology",
              desc: "We use Adobe InDesign, QuarkXpress, Latex, and more to ensure quality.",
            },
            {
              title: "Single Point of Contact",
              desc: "Dedicated project manager for smooth communication and updates.",
            },
            {
              title: "100% Accuracy",
              desc: "Error-free typesetting to keep your readers engaged and satisfied.",
            },
            {
              title: "24/7 Support",
              desc: "Round-the-clock assistance for queries, revisions, and updates.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Nimble Edited 100,000 Drone Videos for Italian Studio
            </h3>
            <p className="text-gray-600">
              A leading Italian video production house required clipping and editing of drone
              footage. Nimble delivered high-quality results quickly.
            </p>
          </div>
          <div className="bg-white border rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">
              Nimble Delivered Engaging Content for HR Software Provider
            </h3>
            <p className="text-gray-600">
              An international HR management software provider trusted Nimble for creative
              writing services. We provided engaging content at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          “Thanks for your fast turnaround time and attention to detail for our busy
          Australian ad agency. We appreciate your hard work.”
        </blockquote>
        <p className="mt-4 font-semibold text-gray-800">
          – CEO, Digital Marketing Agency, Australia
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-indigo-700 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Give Your Book the Professional Finish It Deserves
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Nimble Auity delivers superior, error-free, and impactful typesetting services for
          books, eBooks, journals, and more. Impress your readers with flawless design.
        </p>
        <Button className="bg-white text-indigo-700 hover:bg-gray-100 rounded-full px-6 py-3 text-lg font-semibold">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default TypesettingServices;
