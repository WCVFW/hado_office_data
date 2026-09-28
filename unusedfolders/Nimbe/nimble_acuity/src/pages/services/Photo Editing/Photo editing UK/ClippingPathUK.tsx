import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PEMainMenu from "../PEmainmenu";

const services = [
  {
    title: "Food Photo Clipping Services",
    desc: "Perfect isolation of food items for menus, websites, and marketing.",
  },
  {
    title: "Product Image Clipping",
    desc: "Pixel-perfect extractions for e-commerce products.",
  },
  {
    title: "Car/Automobile Clipping",
    desc: "Flawless clipping for complex automotive visuals.",
  },
  {
    title: "Ghost Mannequin Removal",
    desc: "Showcase garments professionally without mannequins.",
  },
  {
    title: "Hair Masking Services",
    desc: "Preserve fine details in portraits and model photography.",
  },
  {
    title: "Background Replacement",
    desc: "Change settings and moods with seamless background swaps.",
  },
];

const process = [
  "Request a Quote",
  "Quote & Agreement",
  "Upload Images",
  "Adjustments & Approval",
  "Image Editing",
  "Quality Control",
  "Download Final Images",
];

export default function ClippingPathUK() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <PEMainMenu/>
      <section className="bg-gradient-to-r from-blue-900 to-indigo-700 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Clipping Path Services for UK
        </motion.h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-8">
          Optimize your post-production process with our expert clipping path
          services. We deliver pixel-perfect precision for complex shapes with
          fast turnaround and consistent quality.
        </p>
        <Button size="lg" variant="secondary">
          Get a Free Quote
        </Button>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Specialized Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg rounded-2xl hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Clipping Path Workflow
        </h2>
        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
          {process.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md w-64 text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-3">
                {String(idx + 1).padStart(2, "0")}
              </div>
              <p className="text-gray-700 font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why UK Studios & Photographers Choose Us
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <ul className="space-y-4 list-disc pl-6">
            <li>Specialized expertise in hand-drawn clipping paths</li>
            <li>Consistent quality control and scalable workflows</li>
            <li>High-volume image handling with precision</li>
            <li>Flexible customization based on project needs</li>
          </ul>
          <ul className="space-y-4 list-disc pl-6">
            <li>GDPR-compliant data security</li>
            <li>Fast turnaround times to meet tight deadlines</li>
            <li>Seamless collaboration and transparent communication</li>
            <li>Cost-effective outsourcing with premium results</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Streamline Your Post-Production Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8">
          Don’t let clipping path challenges slow down your workflow. Nimble
          to us and ensure efficiency, precision, and professional results.
        </p>
        <Button size="lg" variant="secondary">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
