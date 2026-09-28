"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function LiDARMappingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity LiDAR Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Advanced LiDAR mapping for accurate terrain, object detection, volumetric analysis, and topographical insights.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Studying geographical features and terrains requires precision and expertise. Nimble Acuity offers advanced LiDAR mapping services leveraging GIS and spatial technology to deliver reliable geospatial solutions.
        </p>
        <p>
          Using Light Detection and Ranging (LiDAR) from ground and aerial platforms, we produce highly accurate topographical maps with precise elevation and object location, serving industries like transportation, forestry, geological mapping, utilities, and location-based services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">LiDAR Mapping Services Offered</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Contour mapping",
            "Point cloud filtering & contour highlighting",
            "Photographic adjustment using fusion of Digital Orthophoto & Hyperspectral Imagery",
            "High water and floodplain mapping",
            "Volumetric calculations & 3D modeling",
            "Corridor surveys",
            "Transmission lines processing",
            "Panoramic images via terrestrial laser scanning",
            "Morphometry & clinometry analysis for terrain slope and shape",
            "Integration of geological & geophysical info to develop DTM for unstable areas"
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Benefits of Nimble LiDAR Mapping</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>Automated processes with minimal operator interaction</li>
          <li>Greater mapping accuracy with reduced capital investment</li>
          <li>Aerial LiDAR coverage up to 1000 sq.km. with DEM in under 24 hours</li>
          <li>Round-the-clock LiDAR data collection services</li>
          <li>Reliable volumetric determination & 3D model generation</li>
          <li>Accurate ortho-rectified DEM production</li>
          <li>Supports multiple output formats: ASCII, CAD, ESRI, LAS</li>
          <li>Optimized LiDAR point cloud densities based on accuracy, speed, and budget</li>
        </ul>
      </section>

      {/* Work Scope */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Scope of Our Work</h2>
        <p className="text-lg text-gray-800 max-w-4xl mx-auto mb-4">
          Nimble Acuity has executed numerous LiDAR projects, including 3D feature extraction from mobile laser scanner data, terrain modeling, volumetric analysis, and high-precision topographical mapping across diverse terrains.
        </p>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-6">
          <span className="text-gray-500">LiDAR Mapping Sample</span>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for LiDAR Mapping</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Achieve precise terrain insights, volumetric modeling, and 3D geospatial solutions with our expert LiDAR mapping services at competitive rates.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
