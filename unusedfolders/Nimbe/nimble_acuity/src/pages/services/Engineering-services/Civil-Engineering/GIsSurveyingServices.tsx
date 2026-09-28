"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function GIsSurveyingServices() {
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
          Nimble Acuity GIS Surveying Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Precision GIS surveying services for property mapping, utility analysis, fiber layouts, base maps, and advanced geospatial insights.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Surveyors worldwide depend on GIS technologies to collect, update, analyze, and manage spatial data efficiently. Nimble offers GIS-based surveying services to support specialized infrastructure and development projects, ensuring precise and timely results.
        </p>
        <p>
          Leveraging years of experience in Spatial Technology and GIS, Nimble Acuity has successfully completed hundreds of projects, providing reliable and accurate geospatial insights.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">GIS Surveying Services</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Property & Utility Mapping: Utility asset mapping, coding, consumer indexing, and cable routing",
            "Electrical Infrastructure Surveying: Overhead/underground power lines & grid systems",
            "Fiber Optic Cable Layouts Surveying: Design, implementation, and geospatial efficiency analysis",
            "Consumer Concentration Indexing: Color-coded concentration analysis for prioritization",
            "Ground Survey: Civil & geographical surveys for roads, tunnels, dams, pipelines, and cities",
            "Cellular Antenna Radiation Mapping: Population density & impact analysis",
            "Base Map Creation: Satellite imagery, geo-referencing, network overlays, and entity data collection"
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>
            <strong>Reliability:</strong> Over 26+ years of GIS & CAD experience across Mining, Transportation, Energy, and other sectors.
          </li>
          <li>
            <strong>Confidentiality:</strong> Secure infrastructure ensures all GIS and mapping data remain safe and protected.
          </li>
          <li>
            <strong>Latest Software:</strong> Skilled in Autodesk & ESRI GIS products to deliver accurate and efficient results.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for GIS Surveying</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Whenever you face challenging GIS and geospatial service requirements, Nimble Acuity is your one-stop solution for high-quality GIS surveying, analysis, and mapping.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
