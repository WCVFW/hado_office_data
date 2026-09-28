"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function StructuralFabrication() {
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
          Nimble Structural Fabrication Drawing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Receive high-quality structural fabrication drawing services from professional and experienced structural engineers.
        </motion.p>
        <Button size="lg" className="bg-white text-green-700 font-semibold">
          Request a Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Struggling to find high-quality structural fabrication drawing services? Nimble offers professional, cost-effective, 
          and reliable solutions for both local and international clients. Our team of highly skilled structural engineers provides 
          fabrication drawings for commercial, industrial, and residential structures.
        </p>
        <p>
          With over 26+ years of experience, Nimble Acuity delivers precise drawings for connections, trusses, columns, base plates, 
          and more while ensuring compliance with international standards.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Structural Fabrication Drawing Services We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          <li>Connection Details for Steel Trusses</li>
          <li>Tender Drawings</li>
          <li>Summary for Field and Shop Bolt</li>
          <li>Schematic Drawings</li>
          <li>Sketch Drawings</li>
          <li>Installation Drawings</li>
          <li>Detailed Design Drawings</li>
          <li>Builder's Work Drawings</li>
          <li>Steel Member Detail Drawings for Bracings, Beams, Connecting Members, Columns</li>
          <li>Record Drawings</li>
        </ul>
      </section>

      {/* Tools and Software */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Tools and Software We Use</h2>
        <p className="text-center mb-4">
          We utilize the latest CAD software to ensure precision and high-quality outputs:
        </p>
        <ul className="list-disc list-inside space-y-2 max-w-3xl mx-auto text-center">
          {["CATIA", "Solid Edge", "SOLIDWORKS", "AutoCAD", "Inventor"].map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural Fabrication Drawing Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Requirement Analysis:</strong> Thoroughly understand client requirements and gather relevant information.</li>
          <li><strong>Planning:</strong> Create a detailed project execution plan based on the requirement analysis.</li>
          <li><strong>Building & Monitoring:</strong> Execute the project while monitoring every step and updating the client.</li>
          <li><strong>Quality Control:</strong> QA teams verify all outputs for accuracy and adherence to standards.</li>
          <li><strong>Final Delivery:</strong> Deliver all finalized drawings securely to the client.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services You Can Benefit From</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
          {[
            "Retrofitting & Rehabilitation of Existing Structures",
            "Custom Home Design & Analysis Services",
            "Finite Element Modeling & Analysis",
            "Peer Review Services"
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
            "Reasonable and cost-effective pricing options",
            "World-class infrastructure with latest tools and technologies",
            "ISO-certified high-quality services",
            "Global delivery centers in multiple time zones",
            "Data security with ISO/IEC 27001:2022 ISMS certification",
            "Dedicated project manager as a single point of contact",
            "Round-the-clock support for all client queries",
            "Highly experienced and scalable engineering team"
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Structural Fabrication Excellence
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Our team works as an extension of your in-house team to deliver professional, reliable, and cost-effective structural fabrication drawing services.
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
