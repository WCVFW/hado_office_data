"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function MEPDesignServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity MEP Design & Drafting Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Reduce project overheads, boost operational efficiency, and minimize errors with accurate and detailed MEP designs and drafts.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity provides specialized MEP design and drafting services for diverse sectors including education, healthcare, residential, commercial, and retail projects. Our experts help mechanical and electrical engineers, consultants, and contractors create accurate CAD drawings from designs and marked-up images, enabling streamlined construction management, reduced overheads, and improved operational efficiency.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Our MEP Design & Drafting Solutions</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Revit MEP Drafting Services:</strong> Create accurate 2D and 3D layouts, equipment placements, duct and pipe routing, and electrical plans.</li>
          <li><strong>MEP BIM Drafting Services:</strong> Generate 3D MEP models for energy efficiency, cost estimations, and more using BIM software.</li>
          <li><strong>MEP Engineering Services:</strong> Design and optimize MEP systems ensuring efficiency, safety, and compliance.</li>
          <li><strong>Mechanical Drafting Services:</strong> Visualize equipment layouts, pipe routing, and mechanical components in 2D/3D.</li>
          <li><strong>MEP Electrical Design & Drafting:</strong> Electrical schematics, circuit diagrams, panel schedules, and layouts for buildings.</li>
          <li><strong>Plumbing Design & Drafting:</strong> Plumbing layouts, piping diagrams, fixture schedules, and detailed drawings.</li>
          <li><strong>MEP Conversion Services:</strong> Convert legacy drawings and sketches into digital MEP models using BIM software.</li>
        </ul>
      </section>

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Our MEP CAD Drafting Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Address Query:</strong> Gather requirements and assess capabilities.</li>
          <li><strong>Evaluate Work:</strong> Assess scope, costs, and timelines.</li>
          <li><strong>Initiate Design:</strong> Approve and start design based on client brief.</li>
          <li><strong>Design Approval:</strong> Quality check and send drafts to client.</li>
          <li><strong>Undertake Changes:</strong> Implement client feedback.</li>
          <li><strong>Project Handover:</strong> Upload final files to client’s platform of choice.</li>
        </ol>
      </section>

      {/* Key Areas Covered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Key Areas Covered</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Mechanical:</strong> Heating & cooling equipment selection, duct layout, underfloor heating, ventilation, chilled beams, plant room design.</li>
          <li><strong>Electrical:</strong> Lighting, power distribution, fire protection, HT/LT lines, ELV systems (CCTV, access control, PA), panel schedules.</li>
          <li><strong>Public Health Engineering:</strong> Plumbing, STP design, piping, fire fighting systems, water balancing, residential/commercial/industrial plumbing systems.</li>
        </ul>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Why Choose Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Serving diverse industry verticals including architects, contractors, and engineering consultants globally.</li>
          <li>Advanced technical expertise with latest software: AutoCAD, Revit, MicroStation, Navisworks, EPLAN, Carrier-HAP, Train-Trace 600.</li>
          <li>Qualified engineers & draftsmen with ISO/FDA compliance knowledge.</li>
          <li>Over 20 years of experience ensuring superior quality, accuracy, and timely delivery.</li>
          <li>Compliance with all civil and mechanical standards: ASHRAE, AS (Mech.), IBC, ACCA, UBC, AIA-drawing, BOMA, IFMA.</li>
          <li>ISO/IEC 27001:2022 certified for data security.</li>
          <li>24/7 support and scalable services to meet project demands.</li>
          <li>Flexible pricing models to fit budgets and requirements.</li>
        </ul>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Additional Engineering Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Mechanical Engineering Services</li>
          <li>Architectural Engineering Services</li>
          <li>Civil Engineering Services</li>
          <li>Structural Engineering Services</li>
          <li>Electrical Engineering Services</li>
          <li>BIM Services</li>
        </ul>
      </section>

      {/* Customer Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Customer Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Revit MEP Services for UK-based Engineering Consultants:</strong> Cost-effective MEP services delivered within quick turnaround.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>MEP Design for Australian Electric Service Company:</strong> Customized, high-quality MEP design and drafting solutions delivered efficiently.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Expert MEP Designs
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Streamline your MEP projects with our accurate, efficient, and scalable design & drafting solutions.
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
