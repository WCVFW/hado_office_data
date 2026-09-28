import React from "react";
import PEMainMenu from "../PEmainmenu";


const EcommerceImageClipping: React.FC = () => {
  return (
    <div>
      {/* Navigation */}
      <PEMainMenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          E-commerce Image Clipping Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Make your products irresistible with flawless images. Drive more clicks
          on the BUY button through professional e-commerce image clipping.
        </p>
      </section>

      {/* Why Image Clipping Matters */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Image Clipping is Crucial for E-commerce
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Online customers can’t physically touch or feel your products. The
          only factor influencing their decision is the product’s image. Within
          seconds, they decide whether to purchase — making image quality
          critical.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Image clipping enhances your photos by removing distractions,
          correcting lighting, and perfecting details. The difference between
          before-and-after images is undeniable — once you see it, you’ll know
          your e-commerce site can’t do without it.
        </p>
      </section>

      {/* Free Trial CTA */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Sign Up for a FREE Trial
        </h2>
        <p className="text-gray-600 mb-6">
          Experience the quality of our work before you Nimble.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition">
          Try it Now – Stop Editing, Start Clicking
        </button>
      </section>

      {/* Verticals We Cater To */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Verticals / Industries We Cater To
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
          {[
            "Online Apparels Shopping",
            "Online Electronic Store",
            "Online Automobile Store",
            "Online Sports Accessories",
            "Publishing Houses",
            "Portrait Studios",
            "Real Estate Companies",
          ].map((vertical, idx) => (
            <div
              key={idx}
              className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md text-center"
            >
              {vertical}
            </div>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Our E-commerce Image Clipping Services
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto list-disc pl-5 text-gray-700">
          <li>Background removal</li>
          <li>Image tracing</li>
          <li>Image masking</li>
          <li>Color correction</li>
          <li>Mirror image creation</li>
          <li>Dropping shadow</li>
          <li>Retouching</li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Why Nimble to Nimble Acuity?
        </h2>
        <p className="text-gray-600 mb-4">
          We treat every product image as more than just a photograph. Our team
          highlights its USP, ensuring it creates the right virtual impact on
          your customers.
        </p>
        <p className="text-gray-600">
          With state-of-the-art editing tools and artistic expertise, our photo
          editors add depth, clarity, and appeal to your images — helping you
          win customer trust and boost sales.
        </p>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your E-commerce Images?
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Clipping path outsourcing is a necessity for every online business.
          Partner with Nimble Acuity and get high-quality, sales-ready
          product photos at scale.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100 transition">
          Contact Us Today
        </button>
      </section>
    </div>
  );
};

export default EcommerceImageClipping;
