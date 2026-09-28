"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionGADrawings() {
  return (
    <div className="w-full bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Construction & GA Drawing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          High-quality construction drawings and GA services to turn architectural ideas into precise reality, starting from affordable pricing options.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          The global construction industry thrives on ideas that turn into drawings. Nimble Acuity provides high-quality drafting expertise, creating detailed construction drawings and GA designs that enable precise project analysis, planning, and execution.
        </p>
        <p>
          With 26+ years of experience, Nimble Acuity has handled projects ranging from commercial and residential buildings to renovations, delivering 2D construction drawings, BIM services, structural and steel drawings with fast turnaround times.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our Construction Drawing Services</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li>
            <strong>Detailed Sectional Drawings:</strong> Extract wall thickness, roof details, and floor-to-floor heights from detailed 2D drawings.
          </li>
          <li>
            <strong>Fabrication Drawings:</strong> Pictorial representations of components for architects and fabricators to build structures effectively.
          </li>
          <li>
            <strong>Council Approval Drawings:</strong> Prepare drawings required for state or county approvals before execution.
          </li>
          <li>
            <strong>Steel Construction Detail Drawings:</strong> Include bolt, nut, riveting, and welding details for steel structures.
          </li>
          <li>
            <strong>Re-drawing Existing Drawings:</strong> Convert PDFs, blueprints, and hand sketches to CAD or Revit formats.
          </li>
          <li>
            <strong>General Arrangement Drawings:</strong> Include floor plans, sections, elevations, MEP & HVAC, and flooring layouts.
          </li>
        </ul>
      </section>

      {/* Documents Required */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Documents Required for Construction Drawings</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Site plan</li>
          <li>Architectural elevations</li>
          <li>Basic cross-section details</li>
          <li>Architectural floor plans</li>
          <li>Basic electrical plans</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Why Choose Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>
            <strong>Experienced Team:</strong> Civil, structural engineers, and architects with 5+ years of experience handling large volumes of work.
          </li>
          <li>
            <strong>Swift Turnaround:</strong> Global delivery centers enable fast project execution irrespective of size or scale.
          </li>
          <li>
            <strong>High-Quality Services:</strong> Adherence to international drafting standards with multiple QA checks.
          </li>
          <li>
            <strong>Latest Software:</strong> Licensed AutoCAD & Revit ensuring precise and error-free drawings.
          </li>
          <li>
            <strong>Cost-Effective Services:</strong> Flexible pricing options: per hour, per design, or FTE.
          </li>
          <li>
            <strong>Data Security:</strong> Authorized personnel access only, secure FTP/VPN transfers, backup maintained.
          </li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Construction Drawing Process Flow</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Send File: Transfer files via email, FTP, VPN, or cloud.",
            "Assign Files: Engineering team reviews and estimates.",
            "Project Approval: Sign all necessary documents after estimation approval.",
            "Draft Construction Drawings: AutoCAD & Revit team drafts drawings.",
            "Client Feedback: Drafts sent for review and comments.",
            "Feedback Implementation: Modifications applied based on feedback.",
            "Quality Check: QA team ensures adherence to client's standards.",
            "Final Delivery: Drawings uploaded or sent securely."
          ].map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Client Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for Top Italian Architectural Firm:</strong> Delivered accurate drawings for a London apartment complex.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for Historic Property Management Firm:</strong> Provided rapid and precise civil engineering services for a US client.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Reliable Construction & GA Drawings
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Experience 26+ years of expert construction drawing services with precise, cost-effective, and high-quality results for your next project.
        </p>
        <Button
          size="lg"
          className="bg-amber-500 text-white font-semibold hover:bg-amber-600"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
