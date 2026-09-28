import React from "react";
import DSmainmenu from "../DSmainmenu";

const HtmlToResponsiveConversion: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <DSmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble HTML to Responsive Conversion Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Align your UI elements with precision and consistency. Standardize your
          interface with our conversion expertise.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          A website that seamlessly adapts to any device is a necessity for any
          organization aiming to increase reach and engagement. Our HTML to
          responsive conversion services address the unique challenges of
          presenting vast amounts of information in a user-friendly manner. By
          partnering with us, you can convert static, outdated web pages into
          dynamic, responsive platforms that enhance accessibility and user
          engagement.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Custom HTML to Responsive Conversion Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Responsive Layout Development",
              desc: "We convert fixed-width HTML layouts to fluid, mobile-first design using CSS media queries. Compatible with smartphones, tablets, desktops, and large displays.",
            },
            {
              title: "Framework-Based Conversion",
              desc: "We migrate static HTML to responsive frameworks like Bootstrap, Foundation, or Tailwind, refactoring with grid systems and reusable components.",
            },
            {
              title: "Cross-Browser & Cross-Device Compatibility",
              desc: "We ensure consistent rendering across Chrome, Firefox, Safari, Edge, iOS, Android, tablets, and desktops while fixing layout inconsistencies.",
            },
            {
              title: "Semantic & Clean Code Refactoring",
              desc: "We rewrite outdated HTML with semantic HTML5, optimize CSS/JS, and remove inline styles or deprecated tags.",
            },
            {
              title: "Image & Asset Optimization",
              desc: "We modernize image practices with CSS-controlled scalable images (srcset, max-width, height:auto) for Retina and other displays.",
            },
            {
              title: "QA Testing & Validation",
              desc: "Responsive layout testing across devices, W3C validation, and Lighthouse audits for performance and accessibility.",
            },
            {
              title: "CMS or Web App Integration",
              desc: "We integrate responsive HTML into WordPress, Shopify, or custom CMS with modular, scalable code ready for React, Angular, or Vue.",
            },
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          What Sets Our HTML to Responsive Conversion Services Apart?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
          {[
            "Device-Agnostic User Experience",
            "Modern, Maintainable Codebase",
            "Enhanced Performance and Load Speed",
            "Cross-Browser Reliability",
            "Future-Ready Frontend Foundation",
            "Compliant with Latest Web Standards",
          ].map((point, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{point}</h3>
              <p className="text-sm text-gray-600">
                We ensure {point.toLowerCase()} with our advanced CSS methodologies
                and responsive-first approach.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">
          Additional Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
          {[
            "Custom Software Development Services",
            "Mobile App Development Services",
            "Enterprise Software Solutions",
            "Database Services",
          ].map((srv, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-2">{srv}</h3>
              <p className="text-sm text-gray-600">
                Explore our {srv.toLowerCase()} to extend your business
                capabilities.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Customer Testimonials</h2>
        <blockquote className="max-w-2xl mx-auto italic text-gray-700">
          “We were very satisfied with the quality-of-service Nimble Acuity provided. They
          were able to meet our requests with great professionalism and
          flexibility. We look forward to having your team fulfill future
          projects for us.”
        </blockquote>
        <p className="mt-4 font-semibold">Spokesperson, Online health lessons company in Canada</p>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            "Nimble Acuity Provided PDF to Excel Data Conversion for a Florida-Based Professor",
            "Nimble Acuity Provided XML Conversion to a Norwegian Academic Literature Publisher",
          ].map((cs, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-2">{cs}</h3>
              <a href="#" className="text-blue-600 text-sm font-medium">
                Read more →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <h2 className="text-3xl font-bold mb-6">
          Nimble your HTML to Responsive Conversion Needs
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Convert your legacy systems into agile, responsive frameworks with our
          proven expertise. Let’s build your future-ready website today.
        </p>
        <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default HtmlToResponsiveConversion;