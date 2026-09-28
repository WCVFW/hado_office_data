import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CADServices() {
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Nimble Acuity – Transforming Ideas into Reality with Precision CAD Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Elevate your designs with our expert CAD design services. Nimble your CAD needs to us for cost-efficient & high-quality services.
        </p>
        <Button className="mt-6 bg-white text-blue-600 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Embark on a Journey of Precision and Innovation</h2>
          <p className="mb-4">
            With our comprehensive CAD design services, we merge technical prowess, advanced methodologies, and a personalized approach to help you achieve your project objectives. Our end-to-end CAD design, drafting, and modeling services encompass every aspect of design, from concept to completion.
          </p>
          <p>
            Our CAD services are more than just drafting and drawing. We provide precision engineering, detailed analysis, and comprehensive project management.
          </p>
        </div>
        <div>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">Technologies We Use</h3>
              <ul className="list-disc ml-6 space-y-1">
                <li>SOLIDWORKS</li>
                <li>AutoCAD</li>
                <li>Unigraphics NX</li>
                <li>Inventor</li>
                <li>CATIA</li>
                <li>CREO</li>
                <li>Siemens NX</li>
                <li>Pro Engineer (Pro-E) WildFire</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Expert CAD Design, Drafting, Drawing and Modeling Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            {
              title: "Architectural Prowess",
              desc: "Precise CAD Drawing for Optimal Design Solutions.",
            },
            {
              title: "AutoCAD Design Services",
              desc: "Streamlining workflow and reducing design time.",
            },
            {
              title: "3D CAD Design Services",
              desc: "Visualizing concepts with SolidWorks and AutoCAD.",
            },
            {
              title: "2D CAD Design Services",
              desc: "Transforming complex designs into accurate blueprints.",
            },
            {
              title: "CAD Drafting Services",
              desc: "Minimizing errors with precision drafting tools.",
            },
            {
              title: "3D CAD Rendering Services",
              desc: "Lifelike design replication with advanced rendering.",
            },
          ].map((service, i) => (
            <Card key={i} className="shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Industries We Serve</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          {["Aerospace", "Automotive", "Energy, Process and Plant", "Engineering and Manufacturing", "Glass", "Electrical", "Millwork", "Hospitals", "Commercial", "Retail", "Industrial"].map((industry, i) => (
            <Card key={i} className="shadow-sm">
              <CardContent className="p-6 font-medium">{industry}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Customer Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">UK-Based Construction Company</h3>
              <p>
                Reduced cost by 40% using Nimble's CAD Drawing Services for restoration projects with 100% accuracy.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-2">New Jersey-based Kitchen Equipment Manufacturer</h3>
              <p>
                Streamlined fabrication with Nimble’s AutoCAD 3D modeling expertise, achieving time and cost efficiency.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <p className="max-w-3xl mx-auto mb-4">
          "Nimble Acuity has turned around drawings quickly for us with excellent drafting skill and attention to detail. Very professional and thorough in their work."
        </p>
        <p className="font-semibold">— Principal, Design and Architecture company in US</p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Outsource CAD Design and Drafting Services to Nimble Acuity</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          With over two decades of experience, we deliver excellence in CAD design, drawing, modeling, and drafting services to a global clientele.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700">
          Get Started
        </Button>
      </section>
    </div>
  );
}
