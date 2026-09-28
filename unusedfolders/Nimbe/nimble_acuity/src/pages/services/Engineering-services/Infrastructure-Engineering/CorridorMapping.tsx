"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function CorridorMapping() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-indigo-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          3D Corridor Mapping & GIS Database Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          Get access to error-free, quick, and reliable 3D mapping of roads, pipelines, and other linear structures 
          and create precise GIS databases starting at <span className="font-semibold">$14/hour</span>.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 space-y-6">
        <p>
          Need help mapping roads, pipelines, and other linear structures in 3D? Nimble Auity provides efficient, 
          accurate, and cost-effective 3D corridor mapping and GIS database generation services. 
          Our experts leverage the latest GIS and remote sensing tools for precision and reliability.
        </p>
        <p>
          Proper management of corridors for utilities and transportation assets is essential for infrastructure projects. 
          By acquiring the right data, creating accurate terrain models, and analyzing geospatial information, 
          we help optimize the lifecycle of your corridors efficiently.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our 3D Corridor Mapping & GIS Database Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Acquisition & Incorporation of Field Data",
              desc: "Easily incorporate terrain data to create base maps, digital terrain models, GIS databases, and other reference data.",
            },
            {
              title: "Evaluation of Corridors",
              desc: "Analyze corridors for optimum routing and evaluate ongoing changes like vegetation encroachment or infrastructure updates.",
            },
            {
              title: "Spatial Analysis & Report Generation",
              desc: "Perform advanced spatial analyses, queries, and thematic mapping to generate comprehensive high-quality reports.",
            },
            {
              title: "Creating Accurate Corridor Designs",
              desc: "Generate horizontal and vertical geometries for any corridor design while ensuring compliance with design criteria.",
            },
            {
              title: "Managing Geospatial Information",
              desc: "Efficiently manage and share geospatial data with integrated map-based project and workflow interfaces.",
            },
            {
              title: "Visualizing Large Point Cloud Datasets",
              desc: "Handle and visualize massive datasets with billions of points using blendable shading options for easier interpretation.",
            },
            {
              title: "Processing Raster Images",
              desc: "Edit and enhance raster data to improve the quality and context of 3D corridor mapping deliverables.",
            },
            {
              title: "Map Publishing",
              desc: "Integrate and publish high-quality geospatial maps from multiple data sources for maximum value.",
            },
          ].map((service, i) => (
            <Card key={i} className="hover:shadow-lg transition duration-300 border border-gray-200">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-purple-800">{service.title}</CardTitle>
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
            "Urban Development Services",
            "Town Planning Services",
            "Land Development Design Services",
            "Infrastructure Engineering Services",
          ].map((item, i) => (
            <Card key={i} className="p-4 border-l-4 border-purple-700 hover:shadow-md">
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
            "Affordable Pricing",
            "World-Class Infrastructure",
            "Cutting-Edge Technology",
            "ISO-Certified Quality",
            "Dedicated Project Manager",
            "24/7 Support Services",
            "Quick Turnaround",
            "Data Security & Confidentiality",
          ].map((adv, i) => (
            <Card key={i} className="p-6 border-l-4 border-purple-700 shadow-sm hover:shadow-md">
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
              <CardTitle className="text-purple-800">
                Space Planning Services for US Parcel Management Provider
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                A dedicated layout expert, quality analyst, and account manager designed over 15 layouts per month using AutoCAD.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-purple-800">
                BIM Modeling Services for US Survey Giant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our experts analyzed multiple floor-wise laser scans and converted them into a single Revit model.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “Nimble Auity has become a tremendous resource for our engineering division. They are precise, attentive, and quickly adapted to our processes.”
        </blockquote>
        <p className="mt-4 font-semibold text-purple-700">
          General Partner, Manufacturing Company, US
        </p>
      </section>

      {/* CTA */}
      <section className="bg-purple-700 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Auity for 3D Corridor Mapping & GIS Database Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          Leverage over 26 years of experience, expert engineers, and cutting-edge technology to get accurate, reliable, and cost-effective 3D corridor mapping and GIS database services.
        </p>
        <Button size="lg" className="bg-white text-purple-700 font-semibold hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
