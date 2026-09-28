"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ContourMappingServices() {
  return (
    <div className="w-full bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Contour Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Access the latest aerial surveying equipment and data capturing methods at prices starting at just $11/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Contour mapping represents the topography and landscapes of an area, capturing hills, valleys, and plains. Available in 2D and 3D models, contour mapping is widely used by energy companies, engineering firms, architects, and real estate developers.
        </p>
        <p>
          Nimble Acuity has over 20 years of experience as a contour mapping service provider, leveraging expert staff, cutting-edge aerial surveying equipment, and modern data capturing methodologies to deliver highly accurate mapping services.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Contour Mapping Services We Offer</h2>
        <ul className="list-disc list-inside space-y-4 text-lg max-w-4xl mx-auto text-gray-800">
          <li>
            <strong>Contour Elevation Mapping:</strong> Detailed elevation maps with projection parameters, contours with 'Z' values, relief & planimetric, boundary lines, water areas, vegetation, and habitations in vector format.
          </li>
          <li>
            <strong>Mine Mapping:</strong> Field notes and mapping of seams above/below ground, providing critical information for exploration, reclamation, development, equipment moves, and surface area evaluation.
          </li>
          <li>
            <strong>Structure Contour Mapping:</strong> Shows elevation or depth of formations, such as stratigraphic units, mineral deposits, fractures, aquifers, and other geological structures.
          </li>
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Our Contour Mapping Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Requirement Analysis: Understand client needs and blueprint a smooth mapping process.",
            "Risk Assessment: Identify risks, outline controls, and plan safe/legal execution.",
            "Tool Determination: Assign tools, software, drones, and a dedicated project team.",
            "Pre-Flight Planning: Conduct pre-flight survey, preliminary findings, and flight area assessment.",
            "Authorization: Obtain permissions from authorities and stakeholders, completing legal formalities.",
            "Project Execution: Conduct drone survey following best practices, project guidelines, and timelines.",
            "Data Processing: Analyze imagery and generate outputs compatible with GIS programs.",
            "Delivery: Perform quality check, correct inconsistencies, and submit the final report to the client."
          ].map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "HVAC Design and Drafting Services",
            "Terrain Modeling Services",
            "GIS Surveying Services",
            "Drainage Design Services"
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Benefits of Outsourcing Contour Mapping Services</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "End-to-End Services: We utilize drones, software, and traditional methods (RUAS) based on project scope.",
            "Access to the Best Devices: High-end drones (fixed-wing, multi-rotor) and software like AutoCAD and MicroStation.",
            "Expert Staff: Fast access to mapping experts preparing sketches, reports, maps, and ensuring measurement accuracy."
          ].map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Client Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>MEP Design & Drafting for Australian Electric Service Company:</strong> Delivered expert MEP design services efficiently.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for Top Italian Architectural Firm:</strong> Provided precise construction drawings for a London apartment complex.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Testimonials</h2>
        <Card className="p-6 max-w-3xl mx-auto hover:shadow-lg transition-shadow duration-300">
          <CardContent>
            <p>
              "Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quick to learn procedures."
            </p>
            <p className="mt-2 font-semibold">- General Partner, Manufacturing Company, US</p>
          </CardContent>
        </Card>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-900 via-teal-600 to-amber-500 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Acuity for Expert Contour Mapping
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Over 20 years of expertise delivering precise contour maps for energy, engineering, architectural, and real estate sectors. Achieve accurate results with Nimble Acuity.
        </p>
        <Button
          size="lg"
          className="bg-amber-500 text-white font-semibold hover:bg-amber-600"
        >
          Contact Our Experts
        </Button>
      </section>
    </div>
  );
}
