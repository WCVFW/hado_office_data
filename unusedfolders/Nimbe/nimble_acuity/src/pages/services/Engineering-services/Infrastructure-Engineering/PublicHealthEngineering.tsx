"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function PublicHealthEngineering() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-teal-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-4xl font-bold mb-4"
        >
          Public Health Engineering Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          Get highly-experienced and qualified engineers working on your public health 
          engineering projects at prices starting from <span className="font-semibold">$15/hour</span>.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 space-y-6">
        <p>
          Are you looking for experienced and qualified public health engineers to assist with your projects? 
          Do you need well-designed water and wastewater systems to ensure buildings remain healthy, 
          sustainable, and successful? Nimble Auity is your trusted partner.
        </p>
        <p>
          We have helped clients worldwide handle diverse challenges, from high-rise drainage systems to fire 
          suppression, piping gases and fluids for healthcare facilities, and ultra-pure water systems. 
          With our integrated approach, civil, water, mechanical, and electrical engineers ensure total synchronization 
          of infrastructure and plumbing systems.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Public Health Engineering Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Survey and Investigation Services",
              desc: "Feasibility studies, engineering/topographical/land surveys, right-of-way acquisition, geophysical and geotechnical investigations, hydrological & hydraulic investigations, and underground leak detection using GPR.",
            },
            {
              title: "Water Supply, Stormwater & Sewerage Systems",
              desc: "Raw water sourcing, electro-mechanical design, cross-country transportation, water treatment & distribution, sewage treatment, stormwater drainage, and leak detection.",
            },
            {
              title: "Construction Phase Services",
              desc: "Bid document generation, vendor evaluation, contract award, project management, and construction supervision.",
            },
            {
              title: "Enterprise GIS Services",
              desc: "Asset management and maintenance management system services to support operational efficiency and monitoring.",
            },
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Town Planning Services",
            "Land Development Design Services",
            "Laser Scan to BIM Services",
            "Revit Modeling Services",
          ].map((item, i) => (
            <Card key={i} className="p-4 border-l-4 border-blue-700 hover:shadow-md">
              <p className="text-gray-700">{item}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-gray-100 py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Nimble Auity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Pricing Options",
            "High-quality ISO-certified Services",
            "World-class Infrastructure",
            "Latest Tools & Technologies",
            "Structured Delivery Process",
            "Experienced 26+ Year Team",
            "Data Security & GDPR Compliance",
            "Short Turnaround Time",
          ].map((adv, i) => (
            <Card key={i} className="p-6 border-l-4 border-blue-700 shadow-sm hover:shadow-md">
              <p className="text-gray-700 font-medium">{adv}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Advanced MEP Design & Drafting Services to Australian Company
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nimble provided advanced MEP design and drafting services to an Australian electric services firm.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-blue-800">
                BIM Modeling Services to Singapore-based Tech Giant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team delivered top-quality BIM modeling services quickly to a leading Singapore technology company.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “Hyde Engineering is fully satisfied with Nimble's services. Deadlines were met, and quality expectations exceeded. Nimble is a valuable part of our team.”
        </blockquote>
        <p className="mt-4 font-semibold text-blue-700">
          Spokesperson, Oil Exploration Company in the US
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Auity for Public Health Engineering Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          With over 26 years of experience and a global clientele, Nimble delivers high-quality, secure, and efficient public health engineering services tailored to your requirements.
        </p>
        <Button size="lg" className="bg-white text-blue-700 font-semibold hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
