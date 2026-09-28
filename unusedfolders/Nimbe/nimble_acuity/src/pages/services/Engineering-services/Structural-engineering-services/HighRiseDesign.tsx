"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function HighRiseDesign() {
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
          Nimble High-Rise Structures Design & Analysis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Providing world-class, safe, and efficient high-rise structural design and analysis services for commercial
          and residential construction projects.
        </motion.p>
        <Button size="lg" className="bg-white text-indigo-700 font-semibold">
          Get a Free Consultation
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <p className="mb-6">
          With clients that include Fortune 1000 companies globally, Nimble Acuity specializes in multi-storied building
          design for landmark and world-class structures. We combine economical designs with technical superiority,
          usability, and dynamic analysis for structures sensitive to critical factors.
        </p>
        <p className="mb-6">
          Our expert team of drafters and modelers provide reinforced concrete, steel, composite, masonry, timber,
          aluminum, and glass structure design & analysis. Nimble ensures your project meets time, cost, and quality
          requirements while maintaining safety and functionality.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">High-Rise Structure Design & Analysis Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            "High-rise Structures (RCC, Steel, Composite)",
            "Prefabricated Buildings",
            "Residential Buildings",
            "Industrial Structures (Steel Plants, Oil Refineries, Chemical Plants, Warehouses)",
            "Erecting Timber & RCC Residential Buildings",
            "Advanced Structural Analysis",
            "Blast Analysis and Simulation",
            "Human Comfort Analysis",
            "Seismic Engineering and Strengthening",
            "Construction and Erection Engineering",
            "Multidisciplinary Engineering Coordination",
            "Sustainability",
            "Value Engineering",
            "3D Modeling and Drafting",
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-lg">
              <CardContent className="p-6 text-center text-gray-700">{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design Process Flow */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Structural Design Process Flow</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg max-w-4xl mx-auto">
          <li><strong>Define Scope of the Project:</strong> Conceptual, preliminary, or detailed analysis.</li>
          <li><strong>Analyze Inputs from Client:</strong> Adapt to specified high-rise structural requirements.</li>
          <li><strong>Project Execution:</strong> Create basic structural design with inputs.</li>
          <li><strong>Structural Analysis:</strong> Develop structural detail drawings in 2D or 3D formats.</li>
          <li><strong>Recommend Structural Changes:</strong> Present layout plans, elevations, and sections.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto">
          {[
            "Increased productivity and design lifecycle efficiency",
            "Reduced field failures and product recalls",
            "Decreased ECOs and processing time",
            "Higher ROI for stakeholders",
            "Additional expertise on product design and analysis",
            "Predictable outcomes with global talent pool",
            "Qualitative delivery framework ensuring success",
            "Professionalism and structured approach",
            "Clear project focus and timely delivery",
            "Enhanced innovation, creativity, and problem-solving",
            "100% secure and assured project submission",
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Reliable High-Rise Structural Design Services
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Partner with Nimble Acuity for safe, efficient, and fully compliant high-rise structural design and analysis
          solutions.
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
