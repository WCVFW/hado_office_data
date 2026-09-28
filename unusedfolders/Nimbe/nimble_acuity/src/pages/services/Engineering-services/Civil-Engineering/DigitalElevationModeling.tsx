"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function DigitalElevationModeling() {
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
          Nimble Acuity Digital Elevation Modeling (DEM)
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Highly accurate elevation data for GIS, terrain analysis, disaster planning, and infrastructure projects with rapid delivery and advanced visualization.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity provides innovative Digital Elevation Modeling (DEM) services for the GIS industry, leveraging accurate terrain topography at regularly spaced intervals to reflect ridge lines, slope breaks, streams, and abrupt relief changes.
        </p>
        <p>
          Our DEM services support Agriculture, Petroleum, Civil Engineering, Forestry, and other industry verticals by providing data compatible with modern technologies, optical machinery, and satellite navigation systems.
        </p>
      </section>

      {/* Scope of Work */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Scope of Work</h2>
        <p className="mb-4">
          Nimble Acuity has successfully completed multiple projects including Digital Surface Models (2m & 5m), DEM collection, and DSM & DTM generation over extensive areas. Our DEM services allow for comprehensive terrain analysis and relief mapping.
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Rendering 3D visualization",
            "DEM maps in 2D or 3D CAD",
            "Building layouts and Relief Maps",
            "DEM generation of 1000 km² in 24 hours",
            "DEMs for digital orthophotography",
            "Rectification of satellite images and aerial photographs",
            "Planning ventures, logistics, seismic, site, pipeline route or facility",
            "Drainage and sight analysis",
            "Terrain parameters extraction",
            "Exhibiting water flow patterns"
          ].map((item) => (
            <Card key={item} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* DEM Applications */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Popular DEM Applications</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>3D Visualization Rendering</li>
          <li>Creating Relief Maps and Physical Models</li>
          <li>Extracting Terrain Parameters</li>
          <li>Gravity Measurement Terrain Correction or Reduction</li>
          <li>Modeling Mass Movement of Water (e.g., landslides)</li>
          <li>Orthorectification</li>
          <li>Terrain Analysis in Physical Geography & Geomorphology</li>
          <li>Volume Calculations</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Why Choose Nimble Acuity DEM Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Precision & Accuracy:</strong> Contemporary tools remove errors and enhance terrain density.</li>
          <li><strong>Fast Delivery:</strong> Rapid DEM generation while maintaining stringent quality standards.</li>
          <li><strong>Advanced Visualization:</strong> Multi-colored and shaded maps for quick interpretation.</li>
          <li><strong>Flexible Solutions:</strong> Human expertise combined with advanced technology for efficient outcomes.</li>
          <li><strong>Industry Compliance:</strong> DEM maps adhere to GIS standards and client specifications.</li>
          <li><strong>Cost-Effective:</strong> Pocket-friendly rates without compromising quality.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for DEM Services</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Combine human expertise with advanced technology to generate fast, accurate, and insightful DEMs for GIS and infrastructure projects. Nimble Acuity ensures precision, security, and timely delivery for every client.
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
