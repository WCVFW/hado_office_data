"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function VirtualConstructionServices() {
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
          Nimble Virtual Construction Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Leverage computer-generated models and BIM for world-class virtual construction services starting at just $11/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Nimble Acuity has 20+ years of experience in providing virtual construction services to clients locally and internationally. Our experts utilize Building Information Modeling (BIM) to enhance designs, reduce paper-based workflows, and deliver precise construction simulations. Facility managers, architects, structural engineers, detailers, general contractors, site managers, and project managers rely on our services for a comprehensive view of projects before actual construction begins.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700">Virtual Construction Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "BIM Pre-construction Support: Design and develop BIM plans, feasibility analysis, structural analysis with MEP systems, 5D cost estimation, 4D scheduling, and COBie-compliant data capturing.",
            "BIM Fabrication, Coordination, and Modeling: Extract construction drawings from BIM, convert CAD to Revit, create 3D models, perform auditing, model valuation, spool drawings, fabrication, clash detection, and analyze plumbing, structural, and electrical systems.",
            "BIM for Facility Management (COBie): Build models for FM integration, CMMS, database appending, 6D BIM modeling for FM, and infrastructure modifications using BIM."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Virtual Construction Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Virtual Construction Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Requirement Gathering:</strong> Project lead connects with client and collects existing BIM data.</li>
          <li><strong>Project Team Formation:</strong> Documented information shared with collaborators and team formed.</li>
          <li><strong>Action Plan Execution:</strong> Qualified professionals implement virtual construction workflow.</li>
          <li><strong>Monitoring:</strong> Dedicated team lead ensures on-schedule delivery.</li>
          <li><strong>Quality Control:</strong> Review BIM models and recommend changes if necessary.</li>
          <li><strong>Delivery:</strong> Models and comprehensive work reports delivered to the client.</li>
        </ol>
      </section>

      {/* Related Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Other Services You Can Benefit From</h2>
        <ul className="list-disc list-inside space-y-2 text-lg text-gray-800 max-w-3xl mx-auto text-center">
          <li>HVAC Design and Drafting Services</li>
          <li>Construction Drawing Services</li>
          <li>GIS Surveying Services</li>
          <li>Geospatial Services</li>
        </ul>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>High-quality Services:</strong> Bespoke and efficient virtual construction solutions.</li>
          <li><strong>Affordable Services:</strong> Rates based on your requirements, not generic pricing.</li>
          <li><strong>Superb Infrastructure:</strong> Secure ODCs with proprietary software for the team.</li>
          <li><strong>ISO Certified:</strong> ISO 9001:2015 compliant virtual construction services.</li>
          <li><strong>100% Security:</strong> BIM data secured according to ISO/IEC 27001:2015.</li>
          <li><strong>Quick Turnaround Time:</strong> On-schedule or ahead of schedule delivery.</li>
          <li><strong>Scalable Services:</strong> Easily handle additional workload.</li>
          <li><strong>SPOC:</strong> Dedicated agent for client queries and smooth communication.</li>
          <li><strong>Professional FTE:</strong> Skilled experts handling all types of virtual design challenges.</li>
          <li><strong>Round-the-clock Support:</strong> 24/7 assistance to clarify the process and answer queries.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Construction Drawings for Property Management Firm",
              desc: "Nimble provided timely construction drawings for a historic property management company in the US."
            },
            {
              title: "Construction Drawings for Italian Architectural Firm",
              desc: "Delivered high-quality construction drawings for a London-based apartment complex to an Italian architecture company."
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get World-Class Virtual Construction Services</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Avoid hiring full-time experts. Nimble Acuity provides scalable, reliable, and affordable virtual construction services tailored to your project requirements.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
