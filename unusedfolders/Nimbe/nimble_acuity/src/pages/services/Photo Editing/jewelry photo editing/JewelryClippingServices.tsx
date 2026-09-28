import React from "react";
import PEMainMenu from "../PEmainmenu";

const JewelryClippingServices: React.FC = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <PEMainMenu />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-100 to-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Nimble Jewelry Photo Clipping Services
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We offer GDPR-compliant jewelry photo clipping services to photo
          studios across the US and the UK. Contact us now to ensure up to 60%
          cost savings.
        </p>
      </section>

      {/* Challenge Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Why Nimble Jewelry Clipping Path Services?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Photo studios face operational challenges like multiple client
          requirements, tight deadlines, and workflow disruptions. Outsourcing
          jewelry clipping services helps address these challenges efficiently,
          ensuring faster TATs and significant cost savings.
        </p>
        <p className="text-gray-600 leading-relaxed">
          By partnering with us, you can commit to 24-48 hour turnarounds and
          save up to 60% on costs by avoiding infrastructure and software
          investments.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-10">
          Our Jewelry Image Clipping Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {[
            "Background Removal Services",
            "Color Correction Services",
            "Shadow Creation Services",
            "Reflections Removal Services",
            "Dust & Scratch Removal Services",
            "Background Retouching Services",
            "High-End Jewelry Retouching",
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service}
              </h3>
              <p className="text-gray-600 text-sm">
                Professional {service.toLowerCase()} using advanced clipping path
                techniques to ensure flawless jewelry images.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
          Why Choose Us?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 list-disc pl-5 text-gray-600">
          <li>ISO 9001:2015 certified quality standards</li>
          <li>Adobe-certified professionals with global expertise</li>
          <li>24-48 hour turnaround times</li>
          <li>Absolute scalability and business flexibility</li>
          <li>100% client confidentiality with secure processes</li>
          <li>Cost-effective customized pricing</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-8">
          Client Success Stories
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Panorama Stitching for Real Estate Client
            </h3>
            <p className="text-gray-600">
              Delivered cost-effective image stitching services within a short
              duration, helping a leading real estate organization boost its
              property marketing.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              Automobile Image Clipping for UK Client
            </h3>
            <p className="text-gray-600">
              Seamless clipping services provided to a leading automobile brand
              in the UK, ensuring quick turnaround and quality outputs.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <blockquote className="italic text-lg text-gray-700 mb-4">
          "We are very satisfied by the excellent work of this company. The
          order was done very fast and was reliable."
        </blockquote>
        <p className="text-gray-600">– CEO, Web Agency Germany</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-12 px-6 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Jewelry Photo Clipping Services to Us
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Partner with an ISO-certified service provider for a seamless,
          cost-effective, and reliable outsourcing experience.
        </p>
        <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-gray-100">
          Get Started Today
        </button>
      </section>
    </div>
  );
};

export default JewelryClippingServices;
