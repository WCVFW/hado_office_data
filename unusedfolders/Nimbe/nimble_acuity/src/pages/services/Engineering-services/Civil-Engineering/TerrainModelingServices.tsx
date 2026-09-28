"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function TerrainModelingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Terrain Modeling Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          High-precision 3D digital terrain models for urban development, geological studies, infrastructure planning, and more.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Digital terrain models are crucial for urban development, geological applications, transportation planning, and land-use studies. Nimble Acuity creates clear, detailed, and simulated 3D terrain images to support your projects with precision.
        </p>
        <p>
          Our GIS-based 3D terrain modeling services are executed by experienced drafters and modelers, delivering accurate elevation data to produce realistic and actionable views of the terrain.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Terrain Modeling Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "City Planning & Civil Monitoring Systems for Urban Planners and Architects",
            "Terrain Models to Support 3D Analysis",
            "Generation of Plaster, Foam, or Thermoplastic Terrain Models",
            "Visualization of Planned Infrastructure Projects",
            "High Resolution Printing of Terrain Models"
          ].map((item) => (
            <Card key={item} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Industries We Cater To</h2>
        <ul className="columns-2 md:columns-3 gap-4 text-gray-800 text-lg space-y-2 max-w-5xl mx-auto">
          {[
            "Gas and Oil Extraction Industries",
            "Archaeological Expeditors",
            "Municipal Planning Commissions",
            "Disaster Management Teams",
            "Real Estate Builders",
            "Chemical Industries",
            "Mining Industry",
            "Ship Building Industries",
            "Transportation Industry",
            "Land Developers",
            "Utilities Industry"
          ].map((industry) => (
            <li key={industry}>{industry}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Why Choose Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>Expertise in leading GIS & 3D terrain modeling technologies</li>
          <li>ISO-certified organization ensuring top-quality deliverables</li>
          <li>High accuracy, economical pricing, and timely project delivery</li>
          <li>Access to world-class infrastructure and advanced tools</li>
          <li>Models simplify project analysis and planning</li>
          <li>26+ years of GIS & terrain modeling experience</li>
          <li>Customizable models of any size and dimension</li>
          <li>24/7 support and project updates</li>
          <li>Dedicated project manager as single point of contact</li>
          <li>Strict data security and confidentiality</li>
        </ul>
      </section>

      {/* Client Success Story */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-gray-50 text-gray-900">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Client Success Story</h2>
        <Card className="p-6 mx-auto max-w-4xl hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <h3 className="text-2xl font-semibold mb-2">BIM Modeling for US-Based Survey Giant</h3>
            <p className="text-gray-800 mb-2">
              Nimble Acuity's BIM experts analyzed multiple floor-wise laser scans provided by the client and converted them into a single Revit model. The completed model was delivered efficiently via Dropbox.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Terrain Modeling</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Access high-quality digital terrain models, GIS expertise, and 3D terrain analysis services that ensure accurate project outcomes and informed decision-making.
        </p>
        <Button
          size="lg"
          className="bg-amber-500 text-white font-semibold hover:bg-amber-600"
        >
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
