"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function Simulation5D() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble 5D Simulation Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Visualize all construction milestones and evaluate project progress virtually with our 5D simulation services, starting at $12/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get Started
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity provides 5D simulation services to help manage project complexity, control costs, reduce material waste, and generate reliable estimates. We integrate cost data into 3D and 4D BIM models for visualization in Revit, Navisworks, Tekla, BDS, Archicad, and other BIM platforms.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">5D Simulation Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Improved Cost Forecast and Estimation Services: Estimate total project costs by comparing component quantities and current purchasing rates.",
            "More Precise and Quicker Quantity Take-off Services: Save time and reduce errors by linking cost information with 3D BIM and 4D scheduling.",
            "Automated Quantity Take-offs According to Design Changes: Automatically update quantity take-offs when designs are modified, keeping data consistent.",
            "Optimal Selection of Available Options: Evaluate design options with accurate cost estimates for better decision-making during bidding or construction.",
            "Access via Multiple Platforms: Cloud-hosted solutions allow remote access from any device, facilitating collaboration and better project coordination."
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
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 max-w-3xl mx-auto text-center">
          <li>BIM Quantity Estimation Services</li>
          <li>Laser Scan to BIM Services</li>
          <li>Building Information Modeling</li>
          <li>BIM App Development Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-blue-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing Options:</strong> Extremely cost-effective services tailored to your budget.</li>
          <li><strong>Tools and Technologies:</strong> Latest BIM software and technologies for 5D simulations.</li>
          <li><strong>Structured Process:</strong> Robust and disciplined process ensures quality delivery.</li>
          <li><strong>Superb Infrastructure:</strong> World-class offices with uninterrupted power and network connectivity.</li>
          <li><strong>High-quality Services:</strong> ISO-certified services guarantee superior output.</li>
          <li><strong>Experienced Team:</strong> 26+ years of global experience in BIM and 5D simulation services.</li>
          <li><strong>Data Security:</strong> Strict protocols ensure your project data is secure.</li>
          <li><strong>Short Turnaround:</strong> Timely delivery for every project.</li>
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
      <section className="py-16 px-6 text-center bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Professional 5D Simulation Services</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Nimble Acuity provides scalable, reliable, and affordable 5D simulation services tailored to your construction projects.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
