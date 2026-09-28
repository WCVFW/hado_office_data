"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PhotogrammetricServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Photogrammetric Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          End-to-end photogrammetry services including geological mapping, aerial imaging, and digital elevation models with precision, reliability, and timely delivery.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity provides precision-driven photogrammetric services for land administration, utilities, transportation, geological mapping, and location-based projects. We leverage advanced technology and a specialized team to deliver timely results.
        </p>
        <p>
          With over 12 years of experience in aerial imaging and mapping, Nimble ensures quality, process-oriented delivery that exceeds client expectations.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Our Photogrammetry Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Planimetric Services", desc: "Collect detailed information on roads, highways, lands, railways, water bodies, layouts, and vegetation through aerial imaging." },
            { title: "Aerial Photogrammetry", desc: "Generate accurate measurements and models for land development projects and physical characteristics." },
            { title: "Digital Elevation Model (DEM)", desc: "High-quality elevation mapping for precise terrain analysis." },
            { title: "Contour Generation & Terrain Mapping", desc: "Accurate terrain mapping with up to 2 feet of precision for infrastructure planning." },
            { title: "Orthophoto Production & Digital Terrain Models", desc: "Create georeferenced orthophotos and 3D terrain models for large-scale projects." },
            { title: "3D Collection of Aviation Features", desc: "Support international airports with high-precision 3D data collection." },
            { title: "Satellite Image Cleanup & Aero Triangulation", desc: "Refine satellite images, perform bundle block adjustments, and deliver precise geospatial datasets." },
          ].map((service) => (
            <Card key={service.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-bold text-lg text-indigo-700 mb-2">{service.title}</h3>
                <p className="text-gray-800">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Information Security */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-4 text-center text-indigo-700">Information Security & Confidentiality</h2>
        <p className="text-gray-800 text-lg mb-4">
          We understand the sensitive nature of development projects. Nimble Acuity ensures strict data protection and confidentiality at all stages of your photogrammetry project. Our processes include rigorous risk mitigation and security protocols to safeguard your information.
        </p>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-indigo-700">Why Choose Nimble Acuity</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Precision & Accuracy:</strong> Advanced technology and expert teams ensure top-quality results.</li>
          <li><strong>Process-Oriented Delivery:</strong> Structured workflows for timely and reliable outcomes.</li>
          <li><strong>Domain Expertise:</strong> Specialized knowledge in land administration, utilities, and geospatial mapping.</li>
          <li><strong>Large-Scale Projects:</strong> Efficient handling of terabytes of geospatial data for major projects.</li>
          <li><strong>Information Security:</strong> Strict confidentiality and data protection policies in place.</li>
          <li><strong>Cost-Effective Solutions:</strong> Access premium services within your budget.</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Photogrammetric Services</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Experience domain expertise, advanced technology, and process-driven delivery for all your photogrammetry needs. Ensure precision, security, and timely results by choosing Nimble Acuity.
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
