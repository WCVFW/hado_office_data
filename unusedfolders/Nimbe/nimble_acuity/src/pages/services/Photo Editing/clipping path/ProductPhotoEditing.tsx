import React from "react";
import PEMainMenu from "../PEmainmenu";

const ProductPhotoEditing: React.FC = () => {
  return (
    <section className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Nimble Product Photo Editing Services
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Delight Your Clients with Pixel-Perfect Precision. Maximize Impact with our
          Specialized Product Photo Editing Services.
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-5xl mx-auto px-6 space-y-4 text-gray-700 leading-relaxed">
        <p>
          Coping with the latest product image editing techniques, trends, and software updates
          can be time-consuming and resource-intensive. Time constraints, technical complexities,
          and the need for impeccable quality often delay deliveries. This is where{" "}
          <strong>product photo editing services</strong> come into play.
        </p>
        <p>
          Overcome such obstacles by outsourcing your editing tasks to a reliable service
          provider. Enhance efficiency and ensure the delivery of visually stunning product
          images that captivate your clients and drive growth.
        </p>
        <p>
          With over two decades of experience, our specialists understand diverse business needs
          and deliver images that impress and elevate your reputation.
        </p>
      </div>

      {/* Services */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Product Photo Clipping Services We Offer
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Apparel Photo Editing Services",
            "Furniture Photo Clipping Services",
            "E-commerce Product Photo Clipping Services",
            "Channel Masking Services",
            "Food Photo Clipping Services",
            "Automobile Photo Clipping Services",
          ].map((service, idx) => (
            <li key={idx} className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
              {service}
            </li>
          ))}
        </ul>
      </div>

      {/* Process */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Process We Follow
          </h2>
          <ol className="space-y-4 text-gray-700">
            <li><strong>01. Requirement Gathering</strong> – Collect all project details.</li>
            <li><strong>02. Quality Assessment</strong> – Evaluate image quality and requirements.</li>
            <li><strong>03. Editing & Enhancement</strong> – Apply advanced techniques.</li>
            <li><strong>04. Quality Control</strong> – Thorough checks to ensure accuracy.</li>
            <li><strong>05. Timely Delivery</strong> – Secure delivery within deadlines.</li>
          </ol>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Why Choose Us?
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <li><strong>Data Security</strong> – ISO/IEC 27001:2022 certified protection.</li>
          <li><strong>Professional Expertise</strong> – Skilled editors with advanced techniques.</li>
          <li><strong>Scalability</strong> – Easily manage large volumes without delays.</li>
          <li><strong>Latest Infrastructure</strong> – Efficient delivery with modern tools.</li>
          <li><strong>Multiple Centers</strong> – Global centers for quick turnaround.</li>
          <li><strong>24/7 Support</strong> – Round-the-clock customer assistance.</li>
          <li><strong>High-Quality Services</strong> – Customized, top-tier editing outcomes.</li>
          <li><strong>Cost-Effective Pricing</strong> – Flexible, project-based pricing.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-600 py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Product Photo Editing Services to Us
        </h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Partner with us to save time, scale efficiently, and deliver captivating product
          visuals that enhance your brand image and customer trust.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow hover:bg-gray-100 transition">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default ProductPhotoEditing;
