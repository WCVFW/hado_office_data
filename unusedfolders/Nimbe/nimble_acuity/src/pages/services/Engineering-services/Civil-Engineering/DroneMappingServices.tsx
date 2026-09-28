"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function DroneMappingServices() {
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
          Nimble Drone Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Improve outputs for land surveyors and landscape architects with our accurate drone mapping services starting at just $11/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Drones generate high-resolution maps that fill imaging gaps left by satellites. Widely used in construction, oil & gas, and defense, drone mapping enables precise outputs for land surveyors and landscape architects.
        </p>
        <p>
          Nimble Acuity is an experienced drone mapping service provider. Our specialized team leverages intelligence platforms to capture, store, and analyze data, producing results in 2D, 3D, digital surface models, or orthophotography formats.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-900">Drone Mapping Services We Offer</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Orthomosaic Maps - photorealistic representation of an area.",
            "3D Point Cloud - prelude to accurate 3D drone mapping.",
            "Digital Surface Models (DSM) - elevation model capturing natural and artificial features.",
            "Digital Elevation Model (DEM) - digital representation of ground surface terrain.",
            "Digital Terrain Model (DTM) - computer-manipulated topographic model.",
            "Contour Maps - connect points of equal elevation on a topography."
          ].map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Our Drone Mapping Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Requirements Gathering: Understand the scope, effort, and time involved.",
            "Choosing Drone: Recommend multi-rotor or fixed-wing drones based on survey area and complexity.",
            "Choosing Camera Quality: Select cameras for high-detail and wide-area coverage.",
            "RTK Compatibility: Decide whether to include real-time kinematic (RTK) GPS for location accuracy.",
            "Report Generation: Produce a detailed project report including processed images, geo-referencing, flight data, and accuracy."
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
        <h2 className="text-3xl font-bold mb-8 text-center text-teal-600">Benefits of Outsourcing Drone Mapping Services to Nimble</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          {[
            "Reduce Upfront Costs: No need to purchase drones, software, or hire/train mappers.",
            "Easy Access to Mapping Experts: Experienced professionals complete tasks efficiently.",
            "Compliance Adherence: Stay within legal, licensing, and regulatory requirements.",
            "Legal Risk Assistance: Team flags potential legal issues and ensures compliance."
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
          Partner with Nimble Acuity for Expert Drone Mapping
        </h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Achieve precise land surveying, slope monitoring, and urban planning with our ISO-certified drone mapping services. Save costs and get accurate results with Nimble.
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
