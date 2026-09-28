import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function GISServices() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Geographic Information System (GIS) Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get access to state-of-the-art GIS services provided by highly experienced engineers at prices starting from only <span className="font-semibold">$16/hour</span>.
        </p>
        <Button className="mt-6 bg-white text-blue-700 font-semibold hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Integrating maps and information using geographic information systems while keeping project costs low is crucial for industries like Defense, Telecommunications, Construction, Civil Engineering, Mining, Oil & Gas, Public Utilities, and Transportation. From data collection to geological mapping and geospatial analysis, <strong>Nimble Auity’s GIS services</strong> bring experience and expertise to help clients understand functionality based on geographical data.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          The skilled team at <strong>Nimble</strong> uses advanced GIS technologies and tools to analyze, map, and model spatial databases—helping clients integrate geospatial information, visualize scenarios, and make data-driven decisions.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our GIS Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            "Surveys Based on Planimetric Mapping",
            "Photogrammetric Mapping Services",
            "Underground Utility Mapping",
            "GIS and CADD Data Development & Maintenance",
            "3D Corridor Mapping & GIS Database Creation",
            "GIS Development & Terrain Modeling"
          ].map((service, index) => (
            <Card key={index} className="shadow-lg rounded-2xl hover:shadow-xl transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service}</h3>
                <p className="text-gray-600 text-sm">
                  Nimble provides cutting-edge GIS solutions tailored to your specific project needs, ensuring precision, accuracy, and compliance with international standards.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">
          Advantages of Partnering with Nimble
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 text-gray-700 text-lg">
          <li>✅ Lower operational costs with flexible pricing</li>
          <li>✅ Time-zone advantage for faster turnaround</li>
          <li>✅ ISO-certified with strict data security (ISO/IEC 27001:2022)</li>
          <li>✅ Better tracking and spatial data management</li>
          <li>✅ Compliance with Open Geospatial Consortium (OGC)</li>
          <li>✅ Higher ROI and reduced total cost of ownership</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                Radius Map Creation using CAD
              </h3>
              <p className="text-gray-600">
                Nimble created high-quality CAD-based radius maps for a U.S. consulting firm, achieving 100% accuracy and on-time delivery.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">
                As-Built Drawings for U.S. Architectural Firm
              </h3>
              <p className="text-gray-600">
                Nimble developed detailed CAD models with layouts and electrical positions for 230+ sites within just 2 months.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-4xl mx-auto text-center py-12 px-6">
        <blockquote className="text-xl italic text-gray-700">
          "We are very satisfied with Nimble’s services. They have met all our deadlines and exceeded expectations in quality. Truly a valuable part of our team."
        </blockquote>
        <p className="mt-4 text-gray-500">— Spokesperson, Oil Exploration Company, USA</p>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Auity for GIS Services
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-6">
          With over two decades of GIS expertise, Nimble delivers accurate, timely, and cost-effective solutions that comply with global standards.
        </p>
        <Button className="bg-white text-indigo-700 font-semibold hover:bg-gray-100">
          Get a Free Consultation
        </Button>
      </section>
    </div>
  );
}
