"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import PEMainMenu from "../PEmainmenu";

const PhotoshopAdvancedRetouchingPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Photoshop Advanced Retouching Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          We Photoshop your photographs to help you better communicate with your
          target audience, evoke emotions, and bring them a step closer to your brand.
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">Get Started</Button>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Why Photoshop Retouching Matters</h2>
        <p className="text-gray-700 leading-relaxed">
          Do you have a story to tell and images help you to define, create, and build your brand?
          Crisp, flawless images help you stand out. At Nimble Acuity, our experts ensure your
          brand creates a strong “visual presence” in the minds of customers.
        </p>
      </section>

      {/* Services We Offer */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Photoshop Retouching Services We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Portrait Retouching",
              desc: "Flawless, natural-looking portraits with blemish and spot removal.",
            },
            {
              title: "Product Retouching",
              desc: "Enhance product images with color correction, lighting fixes, and background removal.",
            },
            {
              title: "Real Estate Retouching",
              desc: "Showcase properties with perfect lighting, scale, and angle corrections.",
            },
            {
              title: "Wedding Photo Retouching",
              desc: "Professional wedding edits including color correction and portrait enhancement.",
            },
            {
              title: "Jewelry Retouching",
              desc: "Add shine, sparkle, and precision edits to showcase jewelry perfectly.",
            },
            {
              title: "Old Photo Restoration",
              desc: "Restore vintage photos by fixing scratches, stains, and improving sharpness.",
            },
            {
              title: "Custom Retouching",
              desc: "Affordable, professional custom retouching for all your unique needs.",
            },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Verticals We Serve */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Verticals We Serve</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Real Estate Developers",
            "Online Retailers",
            "Wedding Photographers",
            "Organizations",
            "Publishing Houses",
            "Portrait Studios",
            "Amateur Photographers",
            "Individual Clients",
          ].map((item, idx) => (
            <li
              key={idx}
              className="bg-gray-100 py-6 px-4 rounded-xl shadow text-gray-800 font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Process Section */}
      <section className="bg-gray-900 text-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Photoshop Retouching Process We Follow
        </h2>
        <ol className="max-w-4xl mx-auto space-y-6 text-left">
          {[
            "Requirement Discovery – Source raw images that require retouching.",
            "Preliminary Editing – De-noising and artifact removal.",
            "Color Correction – Adjust exposure, tone, and contrast.",
            "Advanced Retouching – Diffusions, gradients, filters, sharpening.",
          ].map((step, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">{idx + 1}.</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Acuity for Photoshop Retouching?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Certified Photoshop Retouching Company (ISO 9001:2015).",
            "26+ years of experience delivering flawless results.",
            "Data security with ISO/IEC 27001:2022 compliance.",
            "Swift delivery within short turnarounds.",
            "Scalable and flexible services.",
            "Competitive pricing and customizable plans.",
            "Skilled Adobe-certified editors.",
            "Latest technology and secure FTP/VPN transfers.",
            "Dedicated 24/7 customer support.",
          ].map((point, idx) => (
            <div
              key={idx}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <p className="text-gray-800">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Outstanding job, in record time, and it was so easy! The retouching
          was excellent and delivered within 12 hours. We look forward to
          working with you again.”
        </blockquote>
        <p className="mt-4 font-semibold">– Director of Operations, Insurance Company, Canada</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Nimble Photoshop Retouching to Nimble Acuity – Photo Editing Experts
        </h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Backed by expert photo editors and cutting-edge technology, we deliver
          world-class retouching services at international quality standards.
        </p>
        <Button className="px-8 py-3 text-lg bg-white text-yellow-600 hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
};

export default PhotoshopAdvancedRetouchingPage;
