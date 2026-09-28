"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CustomHomeDesign() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Custom Home Design & Analysis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          From concept to construction, Nimble Acuity provides detailed custom home design & analysis services
          to builders, architects, and home developers globally.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Get a Free Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Nimble Acuity offers consistent innovation and the highest level of engineering drawing support for home
          developers, builders, and architects. Our team ensures that every project, large or small, gets meticulous
          attention from conceptualization through the drawing stage.
        </p>
        <p className="mb-6">
          With 20+ years of expertise, global delivery model, and strict adherence to international building codes,
          Nimble Acuity delivers high-quality, cost-effective custom home design & analysis services.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Custom Home Design & Analysis Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Construction Documentation",
            "SketchUp Modeling",
            "Interior Design Services",
            "2D CAD Drafting",
            "3D Rendering Services",
            "3D Architectural Walkthrough",
            "Landscape Design & Drafting",
            "Building Information Modeling (BIM) Services",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process / Benefits */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Nimble Acuity?
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Affordable and flexible pricing models",
            "World-class development labs and high-end technologies",
            "Multi-stage quality assurance for accurate, error-free deliverables",
            "Strict confidentiality and data security policies",
            "Quick turnaround via multiple global delivery centers",
            "Talented engineers and drafters with extensive industry experience",
            "Custom attention to detail for every project",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Build Safer, Smarter, and Better Homes
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for end-to-end custom home design and analysis services. Our expert team ensures
          every detail is precise, compliant, and aligned with your vision.
        </p>
        <Button
          size="lg"
          className="bg-white text-indigo-700 font-semibold hover:bg-gray-200"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
