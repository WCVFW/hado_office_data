"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function TopographicMapping() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Topographic Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Comprehensive 2D/3D topographic maps for smarter route planning, disaster management, infrastructure, and telecom projects with precision and accuracy.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          3D topographic maps are essential for route planning, disaster management, and thematic data preparation for transport and telecom industries. Nimble Acuity delivers high-precision 2D/3D topographic maps covering hundreds of square kilometers, using detailed planimetric and projection parameters.
        </p>
        <p>
          With over two decades of geospatial and engineering experience, Nimble Acuity is a trusted partner for utilities, transportation, mining, municipal, and public land administration projects worldwide.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Topographic Mapping Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Topographic Mapping", desc: "Multi-dimensional digital topographic maps showing water areas, roads, railways, vegetation, contours, electrical assets, and other natural/man-made features." },
            { title: "Topographic Survey", desc: "Comprehensive surveys of natural and man-made features worldwide with quantitative and qualitative analysis." },
            { title: "Topographic Map Updates", desc: "Maintain accurate and up-to-date maps for infrastructure, urban planning, industrial projects, recreational activities, and military use." },
          ].map((service) => (
            <Card key={service.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-bold text-lg text-green-700 mb-2">{service.title}</h3>
                <p className="text-gray-800">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Why Choose Nimble Acuity for Topographic Mapping</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Cost Saving:</strong> High-precision topographic maps at competitive prices.</li>
          <li><strong>Technology Expertise:</strong> Photogrammetry, LiDAR datasets, aerial photo interpretation, and softcopy analysis.</li>
          <li><strong>Quality and Confidentiality:</strong> Precise surveys, rigorous quality control, and secure data handling.</li>
          <li><strong>Best Infrastructure:</strong> Access to top-notch mapping tools, offices, and uninterrupted network connectivity.</li>
          <li><strong>End-to-End Services:</strong> Interpretation of maps to maximize value for planning, development, and analysis.</li>
          <li><strong>Zooming Capability:</strong> Maps can be zoomed up to 250% for detailed inspection without loss of accuracy.</li>
          <li><strong>Single Point Contact:</strong> Dedicated project manager to keep you updated at all times.</li>
          <li><strong>24/7 Availability:</strong> Expert team reachable via phone or email for instant support.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Topographic Mapping</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Our skilled professionals combined with advanced technical facilities ensure timely delivery, accuracy, and compliance with global standards for all topographic mapping projects.
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
