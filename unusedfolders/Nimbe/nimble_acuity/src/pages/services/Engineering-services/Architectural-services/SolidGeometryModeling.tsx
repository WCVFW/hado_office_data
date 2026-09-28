import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function SolidGeometryModeling() {
  const services = [
    {
      title: "Solid Geometry Parametric Designs",
      desc: "Using advanced parametric design techniques, we create highly optimized 3D models. Design parameters are set and adjusted, allowing automatic optimized solutions."
    },
    {
      title: "Customized Algorithms for Parametric Design",
      desc: "For unique design needs, our engineers code special algorithms to generate geodesic frameworks, meshed surfaces, and more, controlling generative design processes."
    },
    {
      title: "Construction Solid Geometry Modeling",
      desc: "Basic service where 2D outlines are extruded into 3D models for simulations, analysis, and visualization. Ideal for construction, engineering, and architecture."
    }
  ];

  const processSteps = [
    "Consultation with a Nimble representative.",
    "Discuss timeframes and project requirements.",
    "Agree on deliverables and fees.",
    "Send relevant information and documents.",
    "Assign a senior engineer to oversee the project.",
    "Create sample models and send for verification.",
    "Develop the specific models based on client needs.",
    "Perform rigorous quality assessment.",
    "Deliver final models to the client.",
    "Implement any requested changes quickly.",
    "Submit the finished product."
  ];

  const benefits = [
    "Fast and client-friendly rates with quick turnaround.",
    "Specialized, qualified engineers with coding and design skills.",
    "Dedicated teams assigned to specific clients for consistency.",
    "Access to advanced software like AutoCAD and MicroStation.",
    "Stunning, practical designs for investors and stakeholders."
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Construction Solid Geometry Modeling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Create precise and practical geometric models for architecture, construction, and engineering projects with Nimble’s expert modeling services.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Construction Solid Geometry Modeling Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Solid Geometry Modeling Process</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Benefits of Choosing Nimble</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">✅ {benefit}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are very precise and attentive to all our needs and have been able to learn our procedures quicker than I ever thought possible.
        </p>
        <p className="text-gray-500 italic">— General Partner, A Manufacturing Company in the US</p>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-700 mb-6">
          Nimble delivers expert construction solid geometry modeling services with precision and accuracy. Get in touch today for a consultation.
        </p>
        <Button className="bg-green-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
