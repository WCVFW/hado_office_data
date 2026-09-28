import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function VirtualTours() {
  const services = [
    {
      title: "Residential 3D Walkthrough Services",
      desc: "High-definition 3D walkthrough videos for homes, villas, townhouses, and apartments with immersive furniture, décor, and interior details."
    },
    {
      title: "3D Virtual Tours for Commercial Properties",
      desc: "Walkthrough animation for office buildings, hotels, art galleries, malls, and retail spaces with detailed floor plans and interiors."
    },
    {
      title: "3D Virtual Tours for Exhibitions, Museums, and Events",
      desc: "Virtual tours for exhibitions, trade shows, museums, and events using platforms like vFairs, 6Connex, Hexafair with interactive zooming, panning, and commentary."
    },
    {
      title: "3D Virtual Tours for Industrial Establishments",
      desc: "Breathtaking walkthroughs for warehouses, factory plants, mines, and business parks with accurate detailing as per client requirements."
    },
    {
      title: "3D Floor Plan Walkthrough",
      desc: "Navigation-enabled 3D floor plan walkthroughs for interiors and all project sectors of any size, offering life-like virtual experience."
    },
    {
      title: "3D Flythrough Animation",
      desc: "HD flythrough animation for real estate exteriors, bird-eye views, panoramic views, and aerial visualization of the project."
    },
    {
      title: "3D Interior and Exterior Architectural Virtual Tour Services",
      desc: "Complete walkthrough animations with video enhancement services to deliver realistic virtual experiences for investors and buyers."
    }
  ];

  const processSteps = [
    "Determine project goals: Brainstorm and establish scope and KPIs.",
    "Collect information: Gather images, CAD files, maps, and footage from client.",
    "Approval on sample animation: Provide initial sample for client feedback.",
    "Walkthrough designing: Execute project as per client plan.",
    "Multiple quality checks: Rigorous internal review before client submission.",
    "Modifications and submission: Incorporate client feedback and securely deliver final videos."
  ];

  const reasons = [
    "Cost-effective services with flexible pricing structures.",
    "Experienced and hassle-free service teams for smooth project execution.",
    "High-quality, detailed, and accurate animation for virtual tours.",
    "Time-saving solutions with commitment to tight deadlines.",
    "Strong data safety and confidentiality measures.",
    "Multi-country operations enabling 24x7 support and global reach."
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble 3D Virtual Tours & Walkthrough Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Stunning 3D architectural virtual tours and walkthrough animations for enriched experiences at cost-effective rates.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our 3D Virtual Tours & Walkthrough Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our 3D Virtual Tours & Walkthrough Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {reasons.map((reason, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">✅ {reason}</li>
          ))}
        </ul>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
        <p className="text-gray-700 mb-4">
          Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and learn procedures quickly to deliver exceptional results.
        </p>
        <p className="text-gray-500 italic">— General Partner, A Manufacturing Company in the US</p>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-700 mb-6">
          Transform your architectural and construction presentations into captivating 3D walkthroughs and virtual tours with Nimble Acuity. Share your project requirements today and engage your investors, buyers, and customers in extraordinary virtual experiences.
        </p>
        <Button className="bg-indigo-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
