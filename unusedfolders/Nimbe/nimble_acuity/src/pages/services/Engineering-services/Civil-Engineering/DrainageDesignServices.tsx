"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function DrainageDesignServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Acuity Drainage Design Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Access high-quality drainage design services from skilled professionals starting at just $11/hour.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          Struggling with detailed drainage designs for your developments? Nimble provides accurate, reliable, and timely drainage design services using the latest engineering tools and software. Our expert team handles retrofit designs, drainage layouts, and detailed hydraulic simulations for projects of any scale.
        </p>
        <p>
          Nimble Acuity engineers combine expertise, technology, and precision to deliver environmentally-friendly and sustainable drainage solutions that meet international and local standards.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">Drainage Design Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Initial Drainage Assessment: Analyze existing drainage systems and suggest modifications.",
            "Initial Design Recommendations: Provide preliminary options with sustainable, eco-friendly drainage techniques.",
            "Detailed Drainage Layouts: Design layouts, construction details, and longsections as per standards.",
            "Hydraulic Analysis and Simulation: Simulate storm and foul water systems with accurate hydraulic flow analysis.",
            "Storm Water Flow Design: Model stormwater flow attenuation measures including storage facilities.",
            "Detailed Drainage Schedules: Prepare plans, sections, and schedules for construction approvals.",
            "Flood Flow Route Modeling: Model flood flow routes for both existing and proposed developments.",
            "Retrofit Design Services: Upgrade or tie-in to existing sewer systems with detailed layout drawings and analysis reports."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Drainage Design Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Our Drainage Design Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li>
            <strong>Preliminary Assessment:</strong> Evaluate existing drainage site, stormwater runoff, storage, and flood mitigation measures.
          </li>
          <li>
            <strong>Detailed Drainage Design:</strong> Develop stormwater and foul water designs with sustainable calculations based on surveys and drawings.
          </li>
          <li>
            <strong>Specialized Drainage Design:</strong> Focus on retrofit or infrastructure-related drainage projects to ensure industry-standard compliance.
          </li>
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Why Choose Nimble for Drainage Design?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Affordable Pricing:</strong> Flexible, customized pricing to suit any budget.</li>
          <li><strong>World-class Infrastructure:</strong> Latest tools, software, and uninterrupted facilities.</li>
          <li><strong>High-quality Services:</strong> Diligent adherence to quality standards.</li>
          <li><strong>Global Delivery Centers:</strong> Work across multiple time zones for faster project completion.</li>
          <li><strong>Latest Tools & Technologies:</strong> Fully licensed software for accurate drainage designs.</li>
          <li><strong>Data Security:</strong> ISO/IEC 27001:2022-certified, ensuring complete data protection.</li>
          <li><strong>Single Point of Contact:</strong> Dedicated project manager for seamless communication.</li>
          <li><strong>24/7 Support:</strong> Round-the-clock assistance from engineering and support teams.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Client Success Stories</h2>
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
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity for Drainage Design</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Talk to our drainage design specialists to get accurate, cost-effective, and timely solutions for your projects.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
