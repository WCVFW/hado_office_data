import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PEMainMenu from "../PEmainmenu";

const services = [
  {
    title: "Image Enhancement",
    description:
      "Sophisticated enhancements like blemish removal, light and color adjustments, and sharpening using Adobe Creative Suite.",
  },
  {
    title: "Photo Restoration",
    description:
      "Restore old, damaged, or faded photos to their original glory with advanced tools and techniques.",
  },
  {
    title: "Object Removal",
    description:
      "Declutter images by removing unwanted elements while keeping the natural aesthetic intact.",
  },
  {
    title: "Color Correction",
    description:
      "Balance and enhance colors, ensuring consistency across all images with expert color grading.",
  },
  {
    title: "Background Removal",
    description:
      "Isolate subjects with clean, precise background removal for polished, professional results.",
  },
];

const advancedServices = [
  "Portrait Retouching",
  "Product Photo Retouching",
  "Wedding Photo Retouching",
  "Jewellery Retouching",
  "Skin Retouching",
  "Photoshop Retouching",
  "Real Estate Retouching",
  "Headshot Retouching",
  "Model Retouching",
];

const processSteps = [
  "Consultation",
  "Photo Submission",
  "Assessment & Planning",
  "Retouching",
  "Quality Check",
  "Review",
  "Revisions",
  "Delivery",
  "Support",
];

export default function PhotoRetouchingUK() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Photo Retouching Services in UK
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          From simple improvements to intricate modifications, we deliver fast,
          cost-effective, and high-end photo retouching services tailored to the
          UK market.
        </p>
        <Button size="lg" className="rounded-2xl">
          Get Started
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Professional Photo Retouching Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advanced Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Advanced Retouching Services
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {advancedServices.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow-sm text-center font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Photo Retouching Process
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-100 rounded-xl shadow-sm text-center"
            >
              <span className="block text-2xl font-bold text-gray-800 mb-2">
                {idx + 1}.
              </span>
              <p className="text-gray-700 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Us?
        </h2>
        <ul className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 text-lg">
          <li>✔ Premium Quality Retouching</li>
          <li>✔ Sophisticated IMAC Workstations</li>
          <li>✔ Expertise in Full Adobe Suite</li>
          <li>✔ Bespoke Custom Retouching</li>
          <li>✔ GDPR-Compliant Services</li>
          <li>✔ 24-Hour Turnarounds</li>
          <li>✔ Dedicated Project Managers</li>
          <li>✔ Round-the-Clock Availability</li>
        </ul>
      </section>

      {/* CTA Footer */}
      <footer className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nimble Photo Retouching Services UK
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-6">
          Save time, elevate your marketing campaigns, and enhance your brand
          image within the UK market with our state-of-the-art photo retouching
          services.
        </p>
        <Button size="lg" className="rounded-2xl">
          Contact Us
        </Button>
      </footer>
    </div>
  );
}
