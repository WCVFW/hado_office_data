"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionScheduling() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Construction Scheduling & Tracking Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Avoid multiple scheduling and planning issues by leveraging our expert construction scheduling and tracking services starting at $12/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Is your project team struggling to manage schedules? Are projects finishing late despite added resources? Nimble Acuity helps clients predict resource needs, finish dates, and manage schedules using industry best practices and cutting-edge tools.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">Construction Scheduling & Tracking Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Precise Project Schedule: Create time-based construction schedules to efficiently plan all activities.",
            "Manage and Track Tasks and Resources: Estimate tasks and resources by linking 3D models with on-site information.",
            "3D BIM Model Linking: Link construction schedules with accurate 3D BIM models for better visualization and management.",
            "Other Services: Program Management Schedules, Preliminary Schedules, Linear Schedules, Periodic Updates, Planned vs As-Built Analysis, Project Acceleration, Total Float Management, Time Impact Analysis, Monte Carlo Risk Simulations, 'What if' Scenarios, Window Analysis, Critical Chain Method, Linear Schedule Analysis, Collapsed As-Built, Resource & Cost Loaded Schedules, Schedule Delay Analysis, Critical Path Method (CPM) Scheduling."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 max-w-3xl mx-auto text-center">
          <li>BIM Quantity Estimation Services</li>
          <li>Laser Scan to BIM Services</li>
          <li>As-built BIM Modeling Services</li>
          <li>BIM App Development Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing Options:</strong> Cost-effective services without compromising quality.</li>
          <li><strong>World-class Infrastructure:</strong> Offices equipped with uninterrupted power and network connectivity.</li>
          <li><strong>High-quality Services:</strong> ISO-certified services ensure top-quality construction scheduling solutions.</li>
          <li><strong>Global Delivery Centers:</strong> 10+ locations worldwide provide convenient service coverage.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022 compliant secure data handling.</li>
          <li><strong>Tools and Technologies:</strong> Latest legal software for construction scheduling and tracking.</li>
          <li><strong>Experienced Team:</strong> Qualified engineers with deep expertise in construction scheduling.</li>
          <li><strong>Quick Turnaround Time:</strong> Services delivered within stipulated timeframes.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Revit MEP Services for UK Engineering Consultants",
              desc: "Nimble provided high-quality, reliable, and cost-effective Revit MEP services for UK-based engineering consultants."
            },
            {
              title: "Building Scans Converted to BIM Models for European Client",
              desc: "Created accurate 3D BIM models of old residential buildings from scans, floor plans, sections, and elevations for a European architectural firm."
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
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Expert Construction Scheduling & Tracking</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Nimble Acuity provides scalable, reliable, and affordable construction scheduling services tailored to your project needs.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
