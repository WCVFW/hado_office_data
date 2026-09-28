"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function Simulation4D() {
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
          Nimble 4D Simulation Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Improve construction schedules, manage your supply chain, and track materials efficiently with our 4D BIM simulation services, starting at $12/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity provides 4D construction simulation services that integrate schedule and time information into 3D BIM models. Our services help teams visualize milestones, improve coordination, and enhance overall construction planning. With 18+ years of global experience, we deliver reliable and professional 4D BIM solutions.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">4D Simulation Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Step-By-Step Scheduling Services: Visualize project timelines with lead time, creation, installation, and other allowances.",
            "4D Graphical Visualization Services: Convert scheduling data into intuitive graphical designs for easy comparison with actual plans.",
            "Optimal Resource Utilization Services: Enhance planning and resource allocation using datasheets, graphs, and coordinated schedules.",
            "Improved Interdisciplinary Coordination Services: Minimize rework and ensure smooth collaboration among various onsite teams."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Additional Services</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 max-w-3xl mx-auto text-center">
          <li>4D Pre-bid Presentation Services</li>
          <li>4D BIM Construction Phasing Services</li>
          <li>4D Timeline Services</li>
          <li>4D Construction Simulation Services</li>
          <li>4D Building Construction Planning Services</li>
          <li>4D Construction Video Animation Services</li>
          <li>4D Applications for Construction Planning Services</li>
          <li>4D Construction, Demolition, and Renovation Services</li>
          <li>4D Simulation for Construction Services</li>
          <li>4D Simulation for Asset Planning & Operation</li>
        </ul>
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 max-w-3xl mx-auto text-center">
          <li>BIM Quantity Estimation Services</li>
          <li>Laser Scan to BIM Services</li>
          <li>Building Information Modeling</li>
          <li>BIM 5D Cost Estimation Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing Options:</strong> Hourly and FTE pricing to fit your budget.</li>
          <li><strong>High-quality Services:</strong> ISO-certified solutions for reliability and accuracy.</li>
          <li><strong>Superb Infrastructure:</strong> World-class offices with 200% power backup and disaster recovery centers.</li>
          <li><strong>Data Security:</strong> GDPR-compliant and fully secure client data.</li>
          <li><strong>Short Turnaround:</strong> Timely delivery based on mutually agreed deadlines.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Client Success Stories</h2>
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
      <section className="py-16 px-6 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Professional 4D Simulation Services</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Nimble Acuity delivers scalable, reliable, and affordable 4D BIM simulation services tailored to your construction projects.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
