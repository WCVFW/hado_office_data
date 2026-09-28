import React from "react";
import CSmainmenu from "../CSmainmenu";

const MenuDesign: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <CSmainmenu/>
      <section className="bg-gradient-to-r from-teal-100 to-blue-100 text-gray-900 py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Menu Design Services
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          Create a lasting impression with professional menu design services
          starting at just{" "}
          <span className="font-bold text-teal-700">$10/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <p className="mb-6 leading-relaxed">
          Restaurant interiors set the mood, but menus seal the deal. At{" "}
          <span className="font-semibold">Nimble Auity</span>, we design menus
          that are both informative and beautiful, helping your brand stand out
          while making dining effortless for your customers.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Menu Design Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Static Menu",
            "A la Carte Menu",
            "Du Jour (Daily) Menu",
            "Cycle Menu",
            "Beverage Menu",
            "Cocktail Menu",
            "Dessert Menu",
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-teal-50 border border-teal-100 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-xl mb-2 text-teal-700">
                {item}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Elegant {item.toLowerCase()} designs tailored to your
                restaurant’s theme.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Our Menu Designing Process
        </h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            "Requirement Analysis",
            "Designing Samples",
            "Feedback",
            "Editing",
            "Delivery",
          ].map((step, idx) => (
            <div key={idx} className="flex items-start space-x-4">
              <div className="bg-teal-600 text-white w-10 h-10 flex items-center justify-center rounded-full font-bold">
                {idx + 1}
              </div>
              <div>
                <h3 className="font-semibold text-lg text-teal-700">{step}</h3>
                <p className="text-sm text-gray-600">
                  A structured approach to ensure quality and consistency.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white px-6">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Affordable Rates",
            "Data Security",
            "Modern Infrastructure",
            "Dedicated Manager (SPOC)",
            "Scalability",
            "Prompt Delivery",
            "24/7 Customer Support",
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="p-6 bg-blue-50 border border-blue-100 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2 text-blue-700">{benefit}</h3>
              <p className="text-sm text-gray-600">
                Ensuring {benefit.toLowerCase()} for every project.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title:
                "Nimble Auity Delivered Creative Content Writing for HR Firm",
              desc: "Helped a leading HR company with fast, reliable creative content.",
            },
            {
              title:
                "Nimble Auity Provided Video Editing to Swedish Film House",
              desc: "High-quality editing with cost-effective turnaround.",
            },
          ].map((cs, idx) => (
            <div
              key={idx}
              className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2 text-teal-700">
                {cs.title}
              </h3>
              <p className="text-sm text-gray-600">{cs.desc}</p>
              <button className="mt-4 text-teal-600 font-semibold hover:underline">
                Read more →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto bg-blue-50 border border-blue-100 p-6 rounded-xl italic shadow-sm">
          “I am impressed with the support and professionalism of your team. The
          quick turnaround helped my company achieve great results.”
          <footer className="mt-4 font-semibold text-right text-blue-700">
            – Graphics Manager, Electronics Company, South Korea
          </footer>
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-100 to-teal-100 text-gray-900 py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Elevate Your Menu Design with Nimble Auity
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Contact us today and experience menu design services that add value to
          your restaurant brand.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-full font-bold shadow hover:bg-teal-700 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MenuDesign;
