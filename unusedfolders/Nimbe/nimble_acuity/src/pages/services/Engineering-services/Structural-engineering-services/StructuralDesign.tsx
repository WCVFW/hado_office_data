"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function StructuralDesign() {
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
          Nimble Structural Design & Drafting Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Get access to high-quality structural design and drafting expertise covering all types of structural 
          design projects, latest codes, methods, and standards.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Request a Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Are you struggling to fulfill all your structural design and drafting work or looking to enhance your 
          productivity and efficiency? Nimble is the right partner if you want to increase productivity while 
          reducing costs. With decades of experience, Nimble Acuity delivers complete engineering and design services 
          that transform preliminary requirements into detailed final designs.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Structural Design & Drafting Services We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          <li>
            <strong>Structural Design Services:</strong> Load calculations, beam & column designs.
          </li>
          <li>
            <strong>Structural Engineering & Analysis:</strong> Analysis of steel structures, buildings, bridges, and vehicles.
          </li>
          <li>
            <strong>Rebar & Steel Detailing Services:</strong> Shop or placing drawings with precise rebar size, spacing, and lap.
          </li>
          <li>
            <strong>Structural Drafting Services:</strong> Foundation plans, roof trusses, structural layouts, pre-stressed structure drawings, fabrication, and as-built drawings.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural Design & Drafting Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Requirement Analysis:</strong> Understand client requirements and challenges in detail.</li>
          <li><strong>Planning:</strong> Project manager plans in consultation with experts to ensure accurate delivery.</li>
          <li><strong>Team Assembly:</strong> Assemble a team to meet exact project needs.</li>
          <li><strong>Building & Monitoring:</strong> Execute project while keeping the client updated at all stages.</li>
          <li><strong>Scaling-up if Required:</strong> Scale resources up or down as project demands.</li>
          <li><strong>Quality Control:</strong> Multi-stage internal QA ensures error-free outputs.</li>
          <li><strong>Final Delivery:</strong> Deliver finalized designs securely to the client.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
          {[
            "High Rise Structures Design & Analysis Services",
            "Industrial Structures Design & Analysis Services",
            "Custom Home Design & Analysis Services",
            "Retrofitting & Rehabilitation of Existing Structures"
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <Button size="sm" variant="outline" className="mt-2">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto">
          {[
            "Affordable pricing tailored to your business requirements",
            "World-class infrastructure with latest tools and technologies",
            "ISO-certified high-quality engineering services",
            "Global delivery centers across multiple time zones",
            "Strict data security with ISO/IEC 27001:2022 ISMS certification",
            "Dedicated project manager as single point of contact",
            "Round-the-clock support for seamless project execution",
            "Highly experienced and scalable engineering team"
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Structural Excellence
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Our team works as an extension of your in-house team to deliver reliable, cost-effective, and high-quality structural design and drafting services.
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
