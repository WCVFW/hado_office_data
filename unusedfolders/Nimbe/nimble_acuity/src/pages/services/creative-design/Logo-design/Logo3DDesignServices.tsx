import React from "react";
import CSmainmenu from "../CSmainmenu";

const Logo3DDesignServices: React.FC = () => {
  return (
    <div><CSmainmenu/>
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-10">

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
        Nimble 3D Logo Design Services
      </h1>
      <p className="text-gray-700 text-lg">
        Convert your existing logo or create a new 3D logo for your business with Nimble Auity’s professional logo design services.
      </p>

      {/* Introduction */}
      <p className="text-gray-700">
        At Nimble Auity, we convert current logos into 3D logos or create brand new ones to project your brand in the best light. We cater especially to the 3D logo needs of animation companies, web marketers, event planners, entertainment companies, and manufacturers.
      </p>

      {/* Services Offered */}
      <h2 className="text-2xl font-semibold text-gray-800">Professional 3D Logo Design Services</h2>
      <p className="text-gray-700">
        Our 3D logos are dynamic, eye-catching, and suitable for video presentations, commercials, product packages, web animations, and mobile platforms. Trusted by over 19,000 businesses, our talented in-house designers ensure impactful brand identity.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>Symbol 3D Logo Design:</strong> Simple, abstract, and stylized icons for easy recollection.</li>
        <li><strong>Wordmark 3D Logo Designs:</strong> Custom fonts and memorable 3D designs including the company name.</li>
        <li><strong>Typography 3D Logo Designs:</strong> Logo designs focused on brand initials, ideal for long company names.</li>
        <li><strong>Combination 3D Logo Designs:</strong> Combines wordmark and symbol for versatile logo presentation.</li>
        <li><strong>Emblem 3D Logo Designs:</strong> Incorporates company or brand name within the logo itself.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800">Converting 2D Logos</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li><strong>2D to 3D Logo:</strong> Convert existing 2D logos into fully original 3D logos with client input and industry research.</li>
        <li><strong>2D to Animated 3D Logo:</strong> Turn static logos into dynamic 3D animations for online marketing, TV, and other media using CorelDraw, Adobe Illustrator, Photoshop, After Effects, Maya, and 3DS MAX.</li>
      </ul>

      {/* Process */}
      <h2 className="text-2xl font-semibold text-gray-800">3D Logo Design Process</h2>
      <ol className="list-decimal list-inside text-gray-700 space-y-2">
        <li>Concept Brief</li>
        <li>Brainstorming</li>
        <li>Sketching & Conceptualizing</li>
        <li>Modeling</li>
        <li>Texturing</li>
        <li>Revisions</li>
        <li>Final Delivery</li>
      </ol>

      {/* Benefits */}
      <h2 className="text-2xl font-semibold text-gray-800">Benefits of Nimble 3D Logo Design Services</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>Hassle-free services</li>
        <li>Up to 3 design revisions</li>
        <li>FREE quality testing</li>
        <li>Work in your own time zone</li>
        <li>Fluent English-speaking account managers and designers</li>
        <li>24-48 hours turnaround</li>
        <li>Up to 60% cost savings</li>
        <li>100% data security</li>
        <li>24/6 support</li>
        <li>Skilled professionals in Photoshop, Illustrator, Corel Draw, InDesign</li>
        <li>ISO quality processes</li>
        <li>99% SLA adherence</li>
        <li>Fully customizable, original logos that strengthen brand identity</li>
      </ul>

      {/* Case Studies */}
      <h2 className="text-2xl font-semibold text-gray-800">Case Studies</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Sticker Design for an Advertising Firm:</strong> 3200 resource hours to deliver a fully-functional 3D animation and modeled video for a Scandinavian medical research company.
        </li>
        <li>
          <strong>Logo Vectorization for Australian Company:</strong> Timely and cost-efficient logo design and vectorization for a startup specializing in marketing and web development.
        </li>
      </ul>

      {/* Testimonials */}
      <h2 className="text-2xl font-semibold text-gray-800">Testimonials</h2>
      <p className="text-gray-700 italic">
        "The quality of artwork delivered during the trial period was exceptional and helped us decide on our new Nimble partner."
        <br />
        <span className="font-semibold">— Director, Operations, Leading Pharmaceutical Company, Netherlands</span>
      </p>

      {/* CTA */}
      <div className="text-center mt-8">
        <a
          href="/contact-us"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-semibold transition"
        >
          Contact Us for 3D Logo Design
        </a>
      </div>
    </div>
    </div>
  );
};

export default Logo3DDesignServices;
