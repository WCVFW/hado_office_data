"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CadastralMappingServices() {
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
          Nimble Acuity Cadastral Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          High-quality cadastral maps using AutoCAD and advanced GIS tools to make land valuation and taxation seamless.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Pulling up property records instantly accelerates decision-making and avoids administration hassles during land valuation and taxation. Nimble provides cadastral mapping services leveraging dimensions, locations, and geospatial data to produce high-quality maps for managing public records. We have helped real estate developers, architects, and BIM agencies streamline cadastral processes efficiently.
        </p>
        <p>
          Using tools like ERFAS Imagine, ArcFM, ArcGIS, AutoCAD, and more, Nimble Acuity is recognized as a leading cadastral mapping service provider in India, offering accurate services at affordable rates.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">Cadastral Mapping Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Scanning of Hard Copy Maps: Digitize and merge separate cadastral maps with proper layer structures.",
            "Cadastral Conversion of Documents: Convert GIS data from land records, legal descriptions, deeds, and plats.",
            "GIS Digital Library Creation: Capture and index documents to streamline GIS access and verification.",
            "Spatial Adjustment on Cadastral Maps: Ensure accurate records using digital orthophotography, enhancing topology and spatial accuracy."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Our Cadastral Mapping Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>Project lead contacts the client to gather requirements and perform a preliminary assessment.</li>
          <li>A project team is selected and briefed.</li>
          <li>Cadastral mapping is executed and service facets explained to the client.</li>
          <li>Quality control team evaluates the project.</li>
          <li>Project sign-off after satisfying compliance and quality parameters.</li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Why Choose Nimble for Cadastral Mapping?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>High-quality Services:</strong> Ensuring complete process adherence to prescribed standards.</li>
          <li><strong>Affordable Services:</strong> Cost-effective solutions without compromising on quality.</li>
          <li><strong>Superb Infrastructure:</strong> Advanced cadastral mapping tools and technologies.</li>
          <li><strong>ISO Certified:</strong> ISO 9001:2015 and ISO/IEC 27001:2022 compliant provider.</li>
          <li><strong>Quick Turnaround:</strong> Fast and efficient execution to meet tight deadlines.</li>
          <li><strong>Scalable Services:</strong> Easily scale projects based on your evolving requirements.</li>
          <li><strong>Professional Team:</strong> Experienced experts with domain-specific knowledge.</li>
          <li><strong>24/7 Support:</strong> Round-the-clock assistance via phone, email, or webchat.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "3D Rendering Services for US-based Interior Design Firm",
              desc: "Delivered 3D rendering services under 36 hours, helping complete projects on schedule."
            },
            {
              title: "Radius Mapping Services for US-based Land Expedition Firm",
              desc: "Provided high-quality radius mapping services quickly with experienced civil engineers."
            }
          ].map((story) => (
            <Card key={story.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-cyan-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Cadastral Mapping</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Talk to our cadastral mapping specialists to save time, cost, and gain professional insight for your land and geospatial projects.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
