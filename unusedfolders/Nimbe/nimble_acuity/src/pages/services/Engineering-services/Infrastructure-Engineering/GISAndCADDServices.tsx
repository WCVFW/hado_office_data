import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function GISAndCADDServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Acuity GIS & CADD Data Development & Maintenance
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl mb-6">
          Get access to high-quality, cost-effective GIS and CADD development & maintenance services from highly experienced professionals – starting at just <span className="font-semibold">$14/hour</span>.
        </p>
        <Button size="lg" className="rounded-2xl bg-white text-blue-700 font-semibold shadow-lg hover:bg-gray-100">
          Contact Us Today
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Why Choose Nimble Acuity for GIS & CADD?
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed text-center">
          We help clients map, analyze, and interpret spatial information seamlessly. From automating workflows to custom application development, Nimble Acuity ensures smooth GIS & CADD integration for both private firms and government entities.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our GIS & CADD Development and Maintenance Services
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "Data Development & Collection",
              desc: "Flawless maps using remote sensing tools, real-time data collection, and field data capture.",
            },
            {
              title: "Mapping Services",
              desc: "Cross country pipelines, water & sewer networks, electric & telecom networks, land use, facility mapping, and more.",
            },
            {
              title: "Data Processing",
              desc: "Improve execution, processing, and management of spatial data with advanced solutions.",
            },
            {
              title: "Data Management",
              desc: "Boost efficiency with 3D model design, optimized data flow, and feature recognition.",
            },
            {
              title: "Training Services",
              desc: "Master AutoCAD, ArcGIS, QGIS, FME, PostGIS, PostgreSQL, ERDAS Imagine, and more.",
            },
            {
              title: "Custom Applications",
              desc: "Seamless development of tailored GIS & CADD applications to fit your workflows.",
            },
          ].map((service, i) => (
            <Card key={i} className="rounded-2xl shadow-md hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">
          Advantages of Partnering with Nimble Acuity
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            "Affordable Pricing Options",
            "High-quality ISO-certified Services",
            "Cutting-edge Tools & Technologies",
            "Structured & Streamlined Processes",
            "World-class Infrastructure",
            "26+ Years of Industry Experience",
            "Robust Data Security (GDPR Compliant)",
            "Quick Turnaround Time",
            "Higher ROI & Reduced TCO",
          ].map((adv, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700 font-medium">{adv}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                CAD Models for US Architectural Firm
              </h3>
              <p className="text-gray-600">
                Built CAD models with electrical layouts, switch positions, RCP, and more for 230 sites in just 2 months.
              </p>
            </CardContent>
          </Card>
          <Card className="rounded-2xl shadow-md hover:shadow-xl transition">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                AutoCAD Conversion for Interior Design Firm
              </h3>
              <p className="text-gray-600">
                Provided comprehensive AutoCAD conversion services for a reputed US-based interior design company.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “The commitment and focus of Nimble Acuity’s engineers and managers are excellent, and significantly surpassed our expectations.”
        </blockquote>
        <p className="mt-4 font-semibold">SVP & Co-Founder – Engineering Resource Company</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4">
          Let’s Build Smarter GIS & CADD Solutions Together
        </h2>
        <p className="max-w-2xl mx-auto mb-6 text-gray-700">
          Nimble Acuity delivers precision, efficiency, and innovation in GIS & CADD data development and maintenance services. Get in touch with us today, and our team will respond within 24 hours.
        </p>
        <Button size="lg" className="rounded-2xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800">
          Get a Free Consultation
        </Button>
      </section>
    </div>
  );
}
