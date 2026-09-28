"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function RetrofittingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Retrofitting & Rehabilitation Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Strengthen and upgrade existing structures with Nimble Acuity’s expert retrofitting and rehabilitation
          services. Cost-effective, precise, and globally trusted.
        </motion.p>
        <Button size="lg" className="bg-white text-green-700 font-semibold">
          Get a Free Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Working as a reliable support service partner, Nimble Acuity helps analyze old structures for retrofitting
          and rehabilitation to meet new building regulations. Our experienced structural engineers and adept
          drafters work as an extension of your in-house team, adding immense value.
        </p>
        <p className="mb-6">
          With nearly two decades of experience and a global talent pool, Nimble Acuity delivers cost-effective
          solutions with precision, ensuring structural safety and regulatory compliance.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Retrofitting & Rehabilitation Services We Offer
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Strength Evaluation",
            "Rehabilitation of Heritage Buildings",
            "Seismic Retrofitting",
            "Epoxy Treatment",
            "FRPC Wrapping",
            "Structural Analysis for Aging Buildings",
            "Design Defect Correction",
            "Load & Seismic Strengthening",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Retrofitting & Rehabilitation Process
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Define Scope of Project:</strong> Determine if conceptual, preliminary, or detailed analysis is required.</li>
          <li><strong>Analyze Inputs from Client:</strong> Adapt to the client's retrofitting methodology and requirements.</li>
          <li><strong>Project Execution:</strong> Create basic retrofitting drawings based on client inputs.</li>
          <li><strong>Assign Project Execution:</strong> Engineers and designers follow client standards to meet regulations.</li>
          <li><strong>Build on Retrofitting & Rehabilitation:</strong> Develop detailed drawings in 2D or 3D formats.</li>
          <li><strong>Recommend Structural Changes:</strong> Present layout plans and sections with recommendations for higher building strength.</li>
        </ol>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble for Retrofitting & Rehabilitation?</h2>
        <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto">
          {[
            "Reduce downtime by 30%",
            "Multi-time zone, multi-system support",
            "Cost-effective CNC support model",
            "Hassle-free scaling of resources",
            "Fastest turnaround with high-quality service",
            "Compliance with ASCE/SEI Standard 41-06 for seismic performance",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Enhance Building Safety & Longevity
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for reliable retrofitting and rehabilitation services. Our global delivery model
          ensures expert structural engineering support at cost-effective rates.
        </p>
        <Button
          size="lg"
          className="bg-white text-green-700 font-semibold hover:bg-gray-200"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
