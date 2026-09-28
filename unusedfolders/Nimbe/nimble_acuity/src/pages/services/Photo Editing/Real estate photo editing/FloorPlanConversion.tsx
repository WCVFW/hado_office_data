import React from "react";
import PEMainMenu from "../PEmainmenu";

const FloorPlanConversion: React.FC = () => {
  return (
    <div className="px-6 py-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">
          Nimble Real Estate Floor Plan Conversion Services
        </h1>
        <p className="text-lg mb-4">
          Explore our real estate floor plan conversion services for authentic
          architectural interpretation.
        </p>
        <p className="mb-2">
          <strong>Expertise in spatial relationships and proportional scaling</strong>{" "}
          for your real estate needs.
        </p>
        <p className="mb-4">
          Accurately translating architectural dimensions into appropriately
          scaled 2D floor plans is of utmost importance in providing clients
          with an authentic depiction of properties. The pitfalls of mistakes in
          scaling and proportions must be addressed, as they can result in
          distorted floor plans that misrepresent the actual space. Our
          expertise lies in addressing these challenges by meticulously
          converting intricate architectural drawings into precise 2D floor
          plans.
        </p>
        <p>
          By partnering with us, you save time and costs, enhance your team's
          overall effectiveness, and focus on driving business growth.
        </p>
      </section>

      {/* Solutions Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Solutions We Offer as A Real Estate Floor Plan Conversion Service Provider
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Black and White Floor Plan</strong> – Converts complex
            architectural elements into easy 2D layouts for property evaluation.
          </li>
          <li>
            <strong>2D Floor Plan Conversion</strong> – User-friendly layouts
            that preserve spatial integrity and flow.
          </li>
          <li>
            <strong>Architectural Floor Plan Conversion</strong> – Accurate
            scaling with details like fixtures and furnishings.
          </li>
          <li>
            <strong>Colored Floor Plan Conversion</strong> – Vibrant, visually
            appealing floor plans for marketing.
          </li>
          <li>
            <strong>Remodeling Floor Plan</strong> – Visualize transformations
            and potential redesigns.
          </li>
          <li>
            <strong>Standard 2D Floor Plan Services</strong> – Clear
            representations of property layouts.
          </li>
          <li>
            <strong>Colored Floor Plan with Furniture</strong> – Combines layouts
            with interior design elements.
          </li>
          <li>
            <strong>2D Floor Plan Rendering Services</strong> – High-quality,
            accurate 2D renderings.
          </li>
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Us as Your Real Estate Floor Plan Company
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Quick Turnaround Time</li>
          <li>Accurate and Detailed Representation</li>
          <li>Expertise in spatial design</li>
          <li>Strict Quality Assurance</li>
          <li>High Volume Handling</li>
          <li>Data Security (GDPR & ISO compliant)</li>
          <li>Dynamic & Flexible Pricing</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Additional Services You Can Benefit From
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>Real Estate Image Editing Services</li>
          <li>Image Enhancement Services</li>
          <li>Real Estate Photo Blending Services</li>
          <li>Panorama Image Stitching Services</li>
        </ul>
      </section>

      {/* Success Stories */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Customer Success Stories</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              Case Study on HDR Blending and Image Editing for Bangladeshi Client
            </h3>
            <p>
              Helped a digital advertising material supplier with HDR blending &
              portrait editing, saving 40% costs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              Case Study on Panorama Stitching Services for Real Estate Company
            </h3>
            <p>
              Delivered precision panorama stitching with dimension correction,
              sharpness, and prompt turnaround.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
        <blockquote className="italic border-l-4 pl-4">
          “I used Nimble Acuity.com for some photo retouching. I'm thrilled
          with the work and time they saved me. The whole process was efficient,
          and the result was great. I recommend them.”
          <footer className="mt-2 font-semibold">– Graphic Designer, Canada</footer>
        </blockquote>
      </section>

      {/* CTA */}
      <section className="text-center mt-10">
        <h2 className="text-xl font-semibold mb-4">
          Nimble Real Estate Floor Plan Conversion Services to Us
        </h2>
        <p className="mb-6">
          Partner with us to optimize your real estate operations. Experience
          accurate conversions, consistency in presentation, and efficient
          resource allocation.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default FloorPlanConversion;
