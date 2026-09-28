"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function SteelDetailing() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Steel Detailing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Design accurate 3D models, shop drawings, and BOMs to ensure precision in every detail of your construction projects.
        </motion.p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          In the fast-paced construction industry, challenges like project delays, budget overruns, and miscommunication can impact your projects. Nimble provides steel detailing services designed to eliminate errors, streamline workflows, and ensure timely project delivery.
        </p>
        <p>
          Our team specializes in creating detailed drawings for fabricators and contractors, covering steel members such as columns, beams, braces, trusses, stairs, handrails, joists, metal decking, fences, and more.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Structural Steel Detailing Services We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Shop Drawings",
            "Bill of Materials (BOM)",
            "Connection Design",
            "Fabrication Drawings",
            "Assembly Drawings",
            "Erection Drawings",
            "Quantity Takeoff Services",
            "Steel Fabrication Detailing",
            "Steel Estimation",
            "Single Part/Fittings Drawings",
            "Handrails and Guard Rails Drawings",
            "Beams Drawing",
            "Steel Joist and Deck Detailing",
            "Anchor Bolt Details Drawing",
            "Miscellaneous Metal Detailing",
            "Stair Plan and Elevations"
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Tools We Leverage</h2>
        <p className="text-center mb-4">
          Using the latest software ensures precise, efficient, and reliable deliverables:
        </p>
        <ul className="list-disc list-inside space-y-2 max-w-3xl mx-auto text-center">
          {["AutoCAD", "Tekla Structures", "Advance Steel", "Revit", "SolidWorks"].map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>
      </section>

      {/* Clients */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Clients We Serve</h2>
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {["General Contractors", "Steel Fabricators", "Steel Detailing Firms", "Construction Companies", "Architects", "Engineers"].map((client, i) => (
            <Card key={i} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>{client}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural Steel Detailing Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Data Input:</strong> Input project data into Revit for detailing foundation.</li>
          <li><strong>Initial Check:</strong> Verify the model for accuracy at the start.</li>
          <li><strong>Conversion:</strong> Transform the model into detailed plans.</li>
          <li><strong>Second Verification:</strong> Confirm the plans align with the model.</li>
          <li><strong>Client Approval:</strong> Send plans to client for review and approval.</li>
          <li><strong>Paper Check:</strong> Conduct thorough checks while awaiting approval.</li>
          <li><strong>Package Completion:</strong> Prepare final approved package with QC report.</li>
          <li><strong>Final Check and QC:</strong> Perform last quality check for error-free deliverables.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Acuity for Steel Detailing?</h2>
        <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto">
          {[
            "High-quality services with ISO 9001:2000 certification",
            "Client privacy and GDPR-compliant data handling",
            "Quick turnaround times from global delivery centers",
            "World-class infrastructure with latest software and tools",
            "Experienced, skilled, and licensed team of detailers",
            "Project security with ISO/IEC 27001:2013 ISMS certification",
            "Easily scalable engineering services",
            "Competitive pricing without compromising quality"
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience the Difference with Nimble Steel Detailing
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Focus on your core competencies while we handle every intricate detail of steel detailing, ensuring precision, compliance, and efficiency.
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
