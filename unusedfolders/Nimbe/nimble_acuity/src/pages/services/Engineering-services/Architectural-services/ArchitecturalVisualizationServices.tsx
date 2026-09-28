import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ArchitecturalVisualizationServices() {
  const services = [
    {
      title: "Interior 3D Visualization Services",
      desc: "Stellar 3D visuals of indoor spaces with detailed interior elements for realistic glimpses of finished interiors."
    },
    {
      title: "Exterior 3D Visualization Services",
      desc: "High-definition exterior 3D models using cutting-edge software, perfect for marketing and portfolio creation."
    },
    {
      title: "3D Walkthrough Animation",
      desc: "Immersive 3D walkthroughs to provide stakeholders a real-life feel of the space."
    },
    {
      title: "3D Floor Plans",
      desc: "Custom floor plans detailing functionality, spaces, entry/exit points, furniture, décor, and more."
    },
    {
      title: "Virtual Reality Services",
      desc: "360-degree lifelike VR experiences for interactive architectural visualization."
    },
    {
      title: "3D Landscape Design Services",
      desc: "Explore natural surroundings and synergy between buildings and landscapes."
    },
    {
      title: "Aerial View Visualization Services",
      desc: "High-quality bird's-eye 3D views offering realistic panoramic property visualization."
    },
    {
      title: "Product Renderings",
      desc: "Photorealistic product models with attention to textures, lighting, and details."
    },
    {
      title: "Solutions for Lighting, Textures, and Other Effects",
      desc: "Professional fixes for lighting, textures, and alignments ensuring flawless 3D models."
    }
  ];

  const propertyTypes = [
    "Residential: Family-owned homes, Apartments, Bungalows, Villas, Private houses",
    "Commercial: Office buildings, Shopping complexes, Gymnasiums, Hotels, Academic institutions, Manufacturing facilities",
    "Industrial: Sports academies, Stadiums, Museums, Recreational centers, Boutique halls"
  ];

  const processSteps = [
    "Requirement Analysis: Understanding client’s 3D visualization needs.",
    "Drafting 3D Models: Creating pilot models per defined scope.",
    "Client Approval: Sending drafts for client validation.",
    "3D Visualization: Developing final designs with textures and lighting.",
    "Rendering: Extracting 3D renders for reference.",
    "Adding Professional Effects: Final touches to make designs stand out.",
    "Project Delivery: Delivering final files via secured FTP/SSL in desired formats."
  ];

  const successStories = [
    {
      title: "Piping Instrumentation Indexes for a US-based Client",
      desc: "Achieved 99.9% accurate cataloging and reduced costs by 50%."
    },
    {
      title: "MTO Detailing Services for a US-based Scaffolding Giant",
      desc: "Provided cost-effective MTO detailing from GFC drawings, ensuring timely delivery."
    }
  ];

  const whyChooseUs = [
    "Best architectural visualization and rendering services with industry-leading quality.",
    "Experienced team of 3D designers, CAD specialists, editors, and architects.",
    "Instant project initiation and fast TAT (first draft in 4 working days).",
    "Scalable solutions for bulk work without compromising quality.",
    "World-class infrastructure and advanced software systems.",
    "Flexible and reasonable pricing for HD quality services.",
    "Data backup and protection with stringent security measures."
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Acuity 3D Architectural Visualization Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Boost the value of your real estate project with stunning 3D architectural visualization services at cost-effective rates.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our 3D Architectural Visualization Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Property Types */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">Types of Properties We Cater To</h2>
        <ul className="max-w-4xl mx-auto text-gray-700 space-y-4 list-disc list-inside">
          {propertyTypes.map((type, idx) => (
            <li key={idx}>{type}</li>
          ))}
        </ul>
      </section>

      {/* Process Steps */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our 7-Step 3D Visualization Process</h2>
        <ol className="space-y-4 list-decimal list-inside text-gray-700">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Hire Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {whyChooseUs.map((item, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">
              ✅ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {successStories.map((story, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h3 className="font-semibold">{story.title}</h3>
                <p>{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-700 mb-6">
          If you are looking for professional and cost-effective 3D architectural visualization services, get in touch with Nimble Acuity today!
        </p>
        <Button className="bg-purple-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
