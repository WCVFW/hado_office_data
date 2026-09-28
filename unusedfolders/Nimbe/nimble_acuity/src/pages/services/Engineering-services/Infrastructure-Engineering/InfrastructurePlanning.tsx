"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function InfrastructurePlanning() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-indigo-900 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Infrastructure Planning Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          If you are looking to design high-end infrastructure, choose our impeccable services and receive the best outcomes at 
          <span className="font-semibold text-orange-500"> $14/hour</span>.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-800 space-y-6">
        <p>
          Infrastructure development reflects how advanced society is. Nimble Auity helps plan, manage, and navigate complex infrastructure projects 
          with technical and managerial expertise to deliver exceptional results.
        </p>
        <p>
          Our experience in global, community-based, and local projects gives us a competitive edge. Trust us to provide solutions tailored to your needs.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Our Infrastructure Planning Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Geotechnical Investigation",
              desc: "Assessment of soil and earthworks to plan solid foundational structures for your project."
            },
            {
              title: "Topography Survey",
              desc: "Land and drone-based surveys to understand surface features and elevations, creating detailed 3D maps."
            },
            {
              title: "Groundwater Assessment",
              desc: "Analyze water flow and hydrological balance to forecast future water usage on the site."
            },
            {
              title: "Flood Risk Assessment",
              desc: "Evaluate flood risks from groundwater, surface water, rivers, and sewer sources to plan safer infrastructure."
            },
            {
              title: "Gradient Analysis",
              desc: "Determine grading and leveling for proper alignment of structures using precise cut and fill estimates."
            },
            {
              title: "Internal and External Road Planning",
              desc: "Design pathways and roads from gravel to concrete, connecting key locations and supporting heavy machinery."
            },
            {
              title: "Module Cleaning System",
              desc: "Plan wet and dry cleaning systems including pumps, storage tanks, and piping networks."
            },
            {
              title: "Security System Planning",
              desc: "Design access gates, vigilance systems, security cabins, and watchtowers for safe premises."
            },
            {
              title: "Plumbing and Sanitary",
              desc: "Plan drainage, water tanks, septic systems, and water supply systems for buildings efficiently."
            },
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-orange-500">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800">
          {[
            "Infrastructure Engineering Services",
            "Civil Engineering Services",
            "Architectural Design Services",
            "Mechanical Engineering Services",
          ].map((item, i) => (
            <Card key={i} className="p-4 border-l-4 border-orange-500 hover:shadow-md">
              <p className="text-gray-800">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Pricing",
            "High-Quality Services",
            "Well-Established Infrastructure",
            "Data Security",
            "Quick Turnaround Times",
            "Single Point of Contact",
            "Scalability",
            "24x7 Support",
          ].map((adv, i) => (
            <Card key={i} className="p-6 border-l-4 border-orange-500 shadow-sm hover:shadow-md">
              <p className="text-gray-800 font-medium">{adv}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-orange-500">
                Land Development Services for US Engineering Firm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Delivered bespoke land development services at affordable rates for a leading US engineering company.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-orange-500">
                3D Modeling & Photorealistic Renders for Global Engineering Firm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Provided photorealistic 3D modeling and rendering solutions to a global engineering company at cost-effective rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “Nimble Auity has turned around drawings quickly for us with excellent drafting skills and attention to detail.”
        </blockquote>
        <p className="mt-4 font-semibold text-orange-500">
          Principal - Design and Architecture Company in the US
        </p>
      </section>

      {/* CTA */}
      <section className="bg-indigo-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Auity for Infrastructure Planning Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Get the best outcomes for your infrastructure projects with Nimble Auity’s expert planning, design, and management solutions.
        </p>
        <Button size="lg" className="bg-orange-500 text-white font-semibold hover:bg-orange-400">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
