"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function StructuralShopDrawing() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Structural Shop Drawing Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          High-quality structural shop drawing services delivered at cost-effective rates by professional and skilled structural engineers.
        </motion.p>
        <Button size="lg" className="bg-white text-green-700 font-semibold">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          Struggling to find reliable structural shop drawing services? Nimble provides dedicated services to increase productivity, reduce costs, and maintain high-quality output for both domestic and international projects.
        </p>
        <p>
          Our team of certified and skilled structural engineers ensures precise and accurate shop drawings, covering pre-fabricated components, elevators, windows, and more. We handle electrical and non-electrical components with precision, streamlining communication with subcontractors, manufacturers, and vendors.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Structural Shop Drawing Services We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Changes/Alteration Notes",
            "Detailed Comparison Information",
            "Jobsite Dimension Verification",
            "Fabrication Information",
            "MEP Coordination",
            "Placement/Installation Information"
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Structural Shop Drawing Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Requirement Analysis:</strong> Gather detailed client requirements, sort, and analyze.</li>
          <li><strong>Planning:</strong> Create a detailed project plan incorporating client inputs and stringent checks.</li>
          <li><strong>Execution and Monitoring:</strong> Execute the project as per plan while continuously monitoring and updating the client.</li>
          <li><strong>Quality Control:</strong> Perform thorough quality checks and address errors or inconsistencies.</li>
          <li><strong>Final Delivery:</strong> Deliver error-free project files securely to the client.</li>
        </ol>
      </section>

      {/* Tools & Infrastructure */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">World-class Tools & Infrastructure</h2>
        <p className="text-center mb-4">
          Leveraging advanced tools and global infrastructure to ensure superior quality and efficient delivery:
        </p>
        <ul className="list-disc list-inside space-y-2 max-w-3xl mx-auto text-center">
          {["AutoCAD", "Revit", "Tekla Structures", "Advance Steel", "SolidWorks"].map((tool, i) => (
            <li key={i}>{tool}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 max-w-4xl mx-auto text-lg">
          {[
            "Affordable and cost-effective pricing starting at $15 per hour",
            "ISO 9001:2000 certified quality assurance",
            "Global delivery centers for time-zone advantages",
            "ISO/IEC 27001:2022 ISMS certified data security",
            "Single point of contact with a dedicated project manager",
            "Round-the-clock support across all teams",
            "Experienced and highly skilled structural engineers",
            "Easily scalable services based on project requirements"
          ].map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center">Client Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Nimble Provided Structural Modeling Support for a Concrete Supplying Giant:</strong> Developed a strategic communication framework for gathering building information, performed scope and seismic analysis, and delivered accurate reports.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Nimble Provided Architectural & Structural 3D Revit Models for a Renowned Design Agency:</strong> Leveraged point cloud data to deliver sustainable 3D Revit models within the deadline.
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
              "Ante Architecture + Design has used Nimble on numerous occasions for our CAD drafting needs. Nimble has turned around drawings quickly with excellent skill & attention to detail. Very professional & thorough."
            </p>
            <p className="mt-2 font-semibold">- Principal, Design and Architecture Company, US</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Shop Drawing Excellence
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          With 26+ years of global experience, we deliver precise structural shop drawings while reducing costs and improving efficiency.
        </p>
        <Button
          size="lg"
          className="bg-white text-green-700 font-semibold hover:bg-gray-200"
        >
          Connect with Our Experts
        </Button>
      </section>
    </div>
  );
}
