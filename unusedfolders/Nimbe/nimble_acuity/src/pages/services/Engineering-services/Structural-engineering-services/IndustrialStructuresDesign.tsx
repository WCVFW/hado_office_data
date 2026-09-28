"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function IndustrialStructuresDesign() {
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
          Nimble Industrial Structures Design & Analysis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Complex industrial structures require precision, safety, and compliance. Nimble Acuity provides end-to-end
          industrial design and analysis services to meet these challenges efficiently.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Request a Free Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Industrial structures are complex and require thorough understanding to ensure both static and dynamic
          loading. With over two decades of experience, Nimble Acuity has supported clients globally in every phase
          of industrial structural design — from concept designing, drafting, and modeling to construction preparation.
        </p>
        <p className="mb-6">
          Our team of structural engineers, drafters, and quality analysts deliver customized designs ensuring
          compliance with industry-specific standards, strength requirements, and safety regulations.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Industrial Structure Design & Analysis Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Concept Design Drafts for Industrial Structures",
            "Load Bearing Structures & Machine Foundations",
            "Printing Press, Chemical Plants, Steel Production",
            "Oil Refineries & Allied Industries",
            "Power Plants Design & Analysis",
            "Vibration Isolation & Life Improvement Studies",
            "2D & 3D Modeling & Drafting",
            "Customized Industrial Structure Analysis",
            "Compliance to US, Canadian, British, Caribbean Standards",
            "Pre-existing Design Documentation Analysis",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Industrial Structure Design & Analysis Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Defining Scope of Project:</strong> Conceptual, preliminary, or detailed analysis.</li>
          <li><strong>Analyzing Client Inputs:</strong> Adapt to client-specific industrial requirements.</li>
          <li><strong>Project Execution:</strong> Drafting basic structural layouts per client standards.</li>
          <li><strong>Building on Industrial Structure Analysis:</strong> 2D/3D modeling and detailed analysis.</li>
          <li><strong>Make Recommended Changes:</strong> Present layouts, elevations, and section plans.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "State-of-the-art infrastructure with secure labs and cloud-based backups",
            "Latest tools: Revit, AutoCAD, MicroStation, STAAD.Pro, TEKLA, X-STEEL",
            "Low operating costs while maintaining high-quality output",
            "Highly skilled engineering team adhering to international standards",
            "Multi-stage quality assurance for error-free deliverables",
            "Quick turnaround with strategically located global delivery centers",
            "Compliance with US, Canadian, British, Caribbean design standards",
            "Full support throughout design, modeling, analysis, and documentation",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Reliable Industrial Structural Design Services
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for precise, efficient, and fully compliant industrial structure design and
          analysis solutions, delivered with global expertise.
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
