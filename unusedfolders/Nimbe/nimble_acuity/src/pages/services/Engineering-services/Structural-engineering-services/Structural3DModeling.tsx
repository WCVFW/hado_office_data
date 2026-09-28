"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function Structural3DModeling() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Structural 3D Modeling, Drafting & Rendering Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Boost profitability and simplify collaboration with accurate, efficient, and seamless 3D modeling and rendering services for structural engineers.
        </motion.p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Structural engineering relies heavily on precise calculations to determine distances, load paths, roof positions, wall bracings, and foundation layouts. Nimble provides 3D modeling services to improve accuracy, efficiency, and collaboration while revealing potential errors before construction.
        </p>
        <p>
          Move beyond 2D limitations with our AutoCAD 3D structural modeling services. We offer automatic column & beam schedules, accurate rebar schedules, and seamless collaboration tools to save time and enhance profitability.
        </p>
      </section>

      {/* 3D Modeling Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural 3D Modeling Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "3D Furniture Modeling Services: Enhance presentations and marketing with precise 3D furniture models.",
            "3D Product Modeling Services: Accurate models compatible with e-commerce platforms worldwide.",
            "3D Revit Modeling Services: Seamless workflows with federated project outputs, annotations, and work sharing.",
            "AutoCAD 3D Modeling Services: Reduce design time and costs with precise CAD models.",
            "AutoCAD 3D Solid Modeling Services: Collision-free, accurate solid models for dependable assembly.",
            "SolidWorks 3D Modeling Services: Certified experts deliver 3D models with BOM and material specs.",
            "Parametric 3D Modeling Services: Versatile and modifiable models to reduce fabrication time."
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* 3D Rendering Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural 3D Rendering Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "3D Furniture Rendering Services: Accurate renderings for presentations and planning.",
            "3D Product Rendering Services: Bring designs to life to enhance marketing and sales.",
            "3D Interior Rendering Services: Highlight designs and minimize execution inaccuracies.",
            "Photorealistic 3D Rendering Services: Visualize projects with stunning accuracy.",
            "Commercial 3D Rendering Services: Renderings for retail, offices, stadiums, hotels, and more."
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* 3D Drafting Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural 3D Drafting Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "3D CAD Drafting Services: Dynamically create and modify product, part, or assembly details to increase productivity."
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto text-lg">
          {[
            "Quality Assurance: Multiple rounds of checks to meet international standards.",
            "Dedicated Project Management: Periodic assessments and reviews to exceed expectations.",
            "Latest Tools & Software: Advanced tools for precise drafting, modeling, and rendering.",
            "World-class Infrastructure: State-of-the-art offices enabling flexibility and scalability.",
            "Global Delivery Centers: 10+ centers providing time-zone advantages.",
            "Flexible Pricing Model: Transparent and customizable pricing options."
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>2D to 3D Conversion of Mechanical Legacy Drawings:</strong> Converted 1600 legacy drawings into 3D for an American engineering firm within six months at affordable rates.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Reverse Engineering of Machine Parts:</strong> Reverse engineered five parametric 3D models per month while ensuring 1nm hole positioning accuracy at affordable rates.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <Card className="p-6 max-w-3xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <p>
              "Our assigned account representative was extremely versed in engineering drawings and architectural services, making communication effortless."
            </p>
            <p className="mt-2 font-semibold">- President, Construction Company, US</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for 3D Modeling Excellence
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Accurate 3D modeling, drafting, and rendering solutions to reduce costs, minimize errors, and streamline your structural projects.
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-700 font-semibold hover:bg-gray-200"
        >
          Connect with Our Experts
        </Button>
      </section>
    </div>
  );
}
