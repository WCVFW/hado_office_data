"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function LandSurveyingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-700 via-teal-600 to-emerald-400 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Land Surveying Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Reliable land surveying for highways, bridges, buildings, and more using precision technology. Services starting at $12/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Get a Free Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Surveying is crucial for construction safety and accuracy. Nimble provides both field and desk services using high-order GPS, total stations, and terrestrial/aerial scanners. Partnering with Nimble allows you to save costs on software and staff while gaining precise, actionable surveying data.
        </p>
        <p>
          With over 26+ years of experience, Nimble Acuity has assisted engineers, architects, and builders worldwide. Using AutoCAD and other sophisticated tools, we provide detailed plans and site measurements to accelerate project timelines.
        </p>
      </section>

      {/* Land Surveying Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Land Surveying Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            { title: "Land Surveying", desc: "Measure elevation, gradient, curves, and ensure land stability for highways, bridges, and utility corridors." },
            { title: "Highway Surveying", desc: "Analyze terrain, topography, and right-of-way for safe, standard-compliant highway designs." },
            { title: "Bridge Surveying", desc: "Precision surveys for bridge construction to ensure compliance, safety, and budget adherence." },
            { title: "Utility Tunnel Surveying", desc: "Survey municipal and utility tunnels, assessing boundary, location, and topography." },
            { title: "Topographic Surveying", desc: "High-quality topography surveys for public and private projects ensuring sustainable layouts." },
            { title: "ALTA Title Surveying", desc: "Licensed surveyors provide detailed land parcel maps following legal protocols for CRE transactions." },
            { title: "Boundary Surveying", desc: "Modern boundary mapping using field and desk surveys to record evidence and support project planning." },
            { title: "Condominium Surveying", desc: "Survey built-up areas for apartments or empty land to determine unit separation and floor plans." },
            { title: "Layout Surveying", desc: "Accurate and timely surveying of land layouts while complying with OSHA and state laws." }
          ].map((service) => (
            <Card key={service.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-bold text-lg text-green-700 mb-2">{service.title}</h3>
                <p className="text-gray-800">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Land Surveying Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Land Surveying Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li><strong>Requirement Discovery:</strong> Understand client requirements and challenges.</li>
          <li><strong>Collection of Preliminary Data:</strong> Analyze data to assess feasibility of the survey.</li>
          <li><strong>Team Selection:</strong> Assign OSHA-certified surveyors and sign NDA.</li>
          <li><strong>Land Surveying:</strong> Conduct surveys using a custom workflow to ensure accuracy.</li>
          <li><strong>Quality Check:</strong> Verify data using modeling tools for 100% reliable outcomes.</li>
          <li><strong>Report Submission:</strong> Submit detailed survey reports within deadlines.</li>
        </ol>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Other Services You Can Benefit From</h2>
        <div className="grid gap-6 md:grid-cols-2 text-lg text-gray-800">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Terrain Modeling Services</CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Lidar Mapping Services</CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>GIS Surveying Services</CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>Geospatial Services</CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Why Choose Nimble Acuity Land Surveying</h2>
        <ul className="list-disc list-inside space-y-3 text-lg max-w-4xl mx-auto text-gray-800">
          <li>Friendly, customizable pricing</li>
          <li>High-quality and precise surveying services</li>
          <li>Use of project management & land surveying software for efficiency</li>
          <li>ISO/IEC 27001:2022 certified for data security</li>
          <li>Quick turnaround times for all projects</li>
          <li>ISO 9001:2015 certified for compliance with standards</li>
          <li>Scalable services to meet ongoing project needs</li>
          <li>Experienced OSHA-certified surveyors delivering from secure ODCs</li>
          <li>24/7 multilingual support</li>
        </ul>
      </section>

      {/* Customer Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-700">Customer Success Stories</h2>
        <div className="space-y-6 max-w-4xl mx-auto text-lg">
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for Top US Property Management Firm:</strong> Delivered high-quality construction drawings on time.
            </CardContent>
          </Card>
          <Card className="p-4 hover:shadow-lg transition-shadow duration-300">
            <CardContent>
              <strong>Construction Drawings for Top Italian Architectural Firm:</strong> Delivered a London apartment complex project with precision and efficiency.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-700 via-teal-600 to-emerald-400 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Land Surveying</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Get precise, reliable, and scalable land surveying services delivered by experienced professionals.
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
