"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function GeospatialServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Geospatial Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Specialized geospatial services provided by seasoned professionals at prices starting at $12/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity’s strategic, result-oriented, and end-to-end geospatial services help organizations with efficient data collection and analysis. By integrating GIS and IT into your existing operations, we enable you to focus on core activities like innovation while enhancing operational efficiency.
        </p>
        <p>
          With over 26+ years of engineering support experience, Nimble Acuity leverages GIS, LiDAR, 3D city modeling, geospatial web services, remote sensing, CAD, BIM, geosimulation, Terrestrial Laser Scanning, cartography, and GIS software to meet varied client needs.
        </p>
      </section>

      {/* Geospatial Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Our Geospatial Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Planimetric Mapping Services", desc: "Digitizing maps to capture natural and man-made features for accurate GIS solutions at cost-effective rates." },
            { title: "Orthophoto Production Services", desc: "Accurate base maps for reliable GIS information and systems." },
            { title: "Photogrammetric Services", desc: "Synchronizing high-speed imaging and remote sensing for precise location-based mapping." },
            { title: "Topographic Mapping Services", desc: "Updated and precise topographic maps to support critical business decisions." },
            { title: "Terrain Modeling Services", desc: "Combining multiple mapping techniques to provide accurate terrain models quickly." },
            { title: "LiDAR Mapping Services", desc: "High-resolution LiDAR digital terrain models to meet specialized requirements." },
            { title: "Geographic Information System Services (GIS)", desc: "Comprehensive GIS and spatial data management services for unmatched accuracy." },
            { title: "GIS Surveying Services", desc: "Advanced GIS analysis and data management for precise geographical surveys." },
            { title: "Cadastral Mapping Services", desc: "Creating cadastral maps to streamline property registration and land ownership processes." },
            { title: "Digital Elevation Modeling Services", desc: "Accurate elevation images for evaluating floodplains, terrain slopes, earthquakes, and more." }
          ].map((service) => (
            <Card key={service.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-bold text-lg text-blue-700 mb-2">{service.title}</h3>
                <p className="text-gray-800">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Other Services You Can Benefit From</h2>
        <div className="grid gap-6 md:grid-cols-2 text-lg text-gray-800">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Civil Engineering Services</CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Architectural Design Services</CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Infrastructure Engineering Services</CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Building Information Modeling (BIM)</CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Why Choose Nimble Acuity as Your Geospatial Partner?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Cost-effective pricing for specialized geospatial services</li>
          <li>World-class infrastructure for optimal performance</li>
          <li>Experienced and skilled geospatial professionals</li>
          <li>Use of latest and stable technologies</li>
          <li>High accuracy in 2D, 3D, CAD, web mapping, and other geospatial services</li>
          <li>High-quality, tailored solutions for diverse business needs</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Client Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>UAV LiDAR Mapping of Canadian Railroad:</strong> Performed UAV LiDAR mapping of more than 600 km of Canadian railroads with high accuracy and affordable rates.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Radius Mapping Services for US Land Expedition Firm:</strong> Delivered high-quality radius mapping services with quick turnaround times.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Geospatial Services</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Leverage expert resources and global delivery frameworks to optimize your operations with specialized geospatial solutions.
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
