"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function OrthophotoProduction() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Orthophoto Production Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Accurate, high-quality Orthophoto production and photogrammetric mapping services for urban planning, utilities, transportation, and large-scale geospatial projects.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Photomapping projects such as urban planning, transportation, land administration, and public utility services require precise orthophoto production. Nimble Acuity serves as your dedicated Orthophoto production partner, delivering accurate imaging, timely project delivery, large-scale mapping, and uniform geometry. By integrating aerial imagery with GIS systems, we provide fast, robust, and dynamic photogrammetric outputs.
        </p>
        <p>
          With over 20 years of experience, Nimble Acuity has successfully completed diverse orthophoto production projects globally, ensuring reliable results and smooth operations across all terrains.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Orthophoto Production Services</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Orthorectification Services", desc: "Remove image perspective and relief effects to create planimetrically correct images. Use with Google Earth, ArcMap, WMS, OSSIM Planet, and more." },
            { title: "Ortho Mosaicking Services", desc: "Combine orthorectification and mosaicking to correct image distortions and stitch multiple images into a single seamless visual." },
            { title: "Color Balancing", desc: "Precise color balancing, seamline editing, and tile cutting for accurate colored or B&W Orthophotos." },
            { title: "Thermal Imagery Services", desc: "High-quality thermal imagery for digital photography, aerial photography, analysis, and urban planning applications." },
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

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">6 Reasons to Choose Nimble for Orthophoto Production</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Process Excellence:</strong> We follow global standards and maintain strict timelines for reliable results.</li>
          <li><strong>Team of Experts:</strong> 70+ engineers with 2–5+ years of experience handle complex orthophoto projects in various formats.</li>
          <li><strong>Accuracy:</strong> Advanced spatial technology ensures precise results every time.</li>
          <li><strong>Attention to Detail:</strong> Careful handling of massive datasets for flawless visual outputs.</li>
          <li><strong>Economical Services:</strong> High accuracy at competitive pricing.</li>
          <li><strong>Ethical Responsibility:</strong> Strict data security and confidentiality for all client projects.</li>
        </ul>
      </section>

      {/* Work Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Our Work Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg text-gray-800">
          <li>Partner with your in-house team to align project objectives and expected results.</li>
          <li>Define each step of the project cycle with clear objectives and deliverables.</li>
          <li>Assign a dedicated representative to keep you updated on project progress.</li>
          <li>Maintain secure data sharing via SharePoint, Dropbox, and FTP.</li>
          <li>Implement rigorous process standards to ensure timely, high-quality project delivery.</li>
        </ol>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Orthophoto Production</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Cutting-edge GIS and spatial technology coupled with professional execution ensures cost-effective, high-quality Orthophoto production for all project scales.
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
