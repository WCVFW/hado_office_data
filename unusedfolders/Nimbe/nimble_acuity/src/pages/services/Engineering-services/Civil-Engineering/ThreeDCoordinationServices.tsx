"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ThreeDCoordinationServices() {
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
          Nimble 3D Coordination Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Get precise 3D coordination services from experienced professionals starting at just $11/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Tired of 3D coordination services handled without engineering precision? Nimble Acuity delivers expert 3D coordination solutions with certified engineers and modelers from top architectural institutes. Our services save time, reduce costs, and ensure timely project completion with accuracy.
        </p>
        <p>
          Our team of 100+ specialists is skilled in MEP, structural, and architectural 3D coordination. From clash detection to walkthroughs, we provide end-to-end support for all project requirements.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700">3D Coordination Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "3D MEP Coordination: Carry out MEP clash detection and weekly coordination meets with structural and architectural teams.",
            "Coordinated 3D Modeling: Create coordinated 3D models for MEP, structural, and architectural trades with maintenance and installation clearances.",
            "As-Built Drawings: Incorporate point cloud data to produce as-built 3D models reflecting real-time site changes.",
            "3D Walkthrough: Create detailed custom 3D models of components prior to installation.",
            "On-Site BIM Coordination: Dedicated onsite personnel perform collision tests and weekly coordination meets.",
            "Analysis of Clash Detection: Detect and resolve discrepancies in 3D models and MEP systems before fabrication and installation."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* 3D Coordination Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Our 3D Coordination Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>
            <strong>Project Engagement:</strong> Collect client requirements, point cloud data, and project information.
          </li>
          <li>
            <strong>Team Formation:</strong> Discuss project scope, assign resources, and brief the team.
          </li>
          <li>
            <strong>Planning:</strong> Prepare project plan, cost estimates, and turnaround time details.
          </li>
          <li>
            <strong>Supervision:</strong> Dedicated team supervises the project and creates timely reports for stakeholders.
          </li>
          <li>
            <strong>Quality Evaluation:</strong> Certified quality control experts evaluate workflow to ensure compliance with timelines and standards.
          </li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Why Nimble for 3D Coordination Services?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>High-quality Services:</strong> Certified professionals delivering tailored 3D coordination solutions.</li>
          <li><strong>Affordable Services:</strong> Reasonable rates suitable for organizations of all sizes.</li>
          <li><strong>World-class Infrastructure:</strong> Access to advanced tools and resources for flawless service.</li>
          <li><strong>ISO Certified:</strong> ISO 9001:2015 certified, ensuring reliable and standardized service quality.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2015-compliant for complete safety of client data.</li>
          <li><strong>Quick Turnaround:</strong> Scalable bandwidth for meeting tight deadlines efficiently.</li>
          <li><strong>Single Point of Contact:</strong> SPOC assigned to manage access rights, priorities, and communications.</li>
          <li><strong>Professional FTE:</strong> Certified engineers adept in MEP, architectural, and structural domains.</li>
          <li><strong>Round-the-clock Support:</strong> 24/7 assistance for all client queries.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "MEP Design and Drafting for Australian Electric Service Company",
              desc: "Nimble helped an Australian electric service firm with professional MEP design and drafting services efficiently."
            },
            {
              title: "Construction Drawings for a Top Italian Architectural Firm",
              desc: "Delivered accurate construction drawings for an apartment complex in London for a leading Italian architectural firm."
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
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for 3D Coordination</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Contact our 3D coordination specialists to customize services for your project requirements and get results within budget.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
