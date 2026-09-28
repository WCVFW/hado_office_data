"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PlanimetricMapping() {
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
          Nimble Acuity Planimetric Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          High-accuracy GIS and planimetric mapping services for urban planning, infrastructure, transportation, natural resource management, and more.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Geographic Information Systems (GIS) provide intelligent maps for urban planning, infrastructure, transportation, energy exploration, natural resource conservation, disaster management, and more. As a geospatial industry leader, Nimble Acuity delivers complex planimetric mapping projects on time and within budget for global clients including municipal organizations, urban planners, public utilities, and mapping agencies.
        </p>
        <p>
          Our expertise includes planimetric feature collection, updating old planimetric data (Driveways, Sidewalks, Buildings, Water bodies, Vegetation limits, Roads, Ditches, Railways, Poles, etc.) using aerial imagery to create accurate and detailed planimetric maps.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Planimetric Mapping Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "GIS Mapping of Structures", desc: "Digitize natural and manmade structures critical for GIS projects." },
            { title: "Photogrammetry Digitization", desc: "Convert aerial photographs into precise planimetric data." },
            { title: "Map Analysis & Symbol Generation", desc: "Analyze maps, symbols, and contours to generate accurate representations." },
            { title: "2D & 3D Vector Mapping", desc: "Create detailed 2D or 3D vector maps compatible with CAD systems." },
            { title: "Feature Enhancement", desc: "Add buildings, waterways, roads, and utility elements for accurate imagery." }
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

      {/* Process Flow */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Planimetric Mapping Process Flow</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg text-gray-800">
          <li>Refer to digital and aerial photographs and stereo imagery to extract planimetric data.</li>
          <li>Collect all visual planimetric features (manmade and natural) in the project area.</li>
          <li>Develop break lines and contours if required to aid terrain modeling.</li>
          <li>Convert all features into digital format and create 2D or 3D vector maps as needed.</li>
          <li>Convert the maps into CAD format as per client request.</li>
          <li>Add natural & manmade structures to provide a comprehensive planimetric map.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Why Choose Nimble for Planimetric Mapping?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>Unmatched reputation for accurate and cost-effective GIS mapping globally.</li>
          <li>Proven expertise, technological advantage, and strong commitment to each project.</li>
          <li>ISO-certified company delivering high-quality planimetric mapping services.</li>
          <li>Access to a global talent pool for superior 2D & 3D vector maps across scales.</li>
          <li>Strict quality policy, global delivery norms, and competitive project costs.</li>
          <li>Expertise in extracting and digitizing planimetric data from aerial photographs.</li>
        </ul>
      </section>

      {/* Client Success Story */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Client Success Story</h2>
        <Card className="p-4 hover:shadow-lg transition-shadow duration-300 max-w-4xl mx-auto">
          <CardContent>
            <strong>Radius Mapping Services for US-Based Client:</strong>  
            Nimble provided high-quality radius mapping services to a New York-based land expedition services firm with quick turnaround and exceptional precision.
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Planimetric Mapping</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Accurate planimetric data and advanced mapping features delivered by skilled professionals using state-of-the-art technology and processes.
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
