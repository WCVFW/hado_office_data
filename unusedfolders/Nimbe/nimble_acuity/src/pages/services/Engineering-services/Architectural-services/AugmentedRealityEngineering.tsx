import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function AugmentedRealityEngineering() {
  const arServices = [
    {
      title: "AR in Architecture and Construction",
      desc: "From design to development, AR amplifies site presentations, enables 3D end-product visualization, and integrates with BIM for highly immersive projects."
    },
    {
      title: "Spatial Know-how",
      desc: "Leverage AR wearables like DAQRI Smart Glasses and Microsoft HoloLens for precise measurements of physical elements and distances."
    },
    {
      title: "Real-time Project Dynamics",
      desc: "AR helps project managers and construction teams foresee project requirements, reducing errors and costly revisions."
    },
    {
      title: "Safety and Inspection Solutions",
      desc: "Wearable AR devices improve safety measures by identifying risks and complex job-site areas in real-time."
    },
    {
      title: "Complex Construction Processes",
      desc: "Apps like AugView visualize underground environments, buried cables, and hidden trenches to simplify construction planning."
    },
    {
      title: "Smoother Training",
      desc: "AR reduces training time by providing direct guidance and practical instructions for new team members."
    },
    {
      title: "AR in Engineering",
      desc: "Visual recognition of components, wiring checks, bug identification, and quality validation become easier with AR."
    },
    {
      title: "AR in Manufacturing",
      desc: "Reduces production downtime, handles shop-floor issues efficiently, and facilitates data access for KPI tracking."
    }
  ];

  const realities = [
    "Augmented Reality: Layers 3D models into the real environment for interactive experiences.",
    "Virtual Reality: Fully computer-generated simulation of real-life environments.",
    "Mixed Reality: Combines real and virtual worlds for 3D immersive interactions with physical objects."
  ];

  const arTools = [
    "Morpholio AR Sketchwalk",
    "DAQRI SMART HELMET",
    "Augment",
    "Fologram",
    "GAMMA AR",
    "Microsoft HoloLens",
    "WakingApp",
    "ARKit",
    "Dalux"
  ];

  const whyChooseUs = [
    "Highly motivated and creative team of designers, engineers, and domain experts.",
    "Quality assurance with complete data security for all projects.",
    "Affordable pricing models suitable for businesses of all sizes.",
    "Quick project delivery with fast turnaround times.",
    "24/7 assistance and support with a dedicated project manager.",
    "World-class infrastructure and technological aid for optimal service."
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Acuity Augmented Reality Engineering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Avail path-breaking augmented reality solutions for architecture and construction in combination with BIM.
        </p>
      </section>

      {/* AR Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Augmented Reality Engineering Solutions
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {arServices.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* AR, VR, MR */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Understanding AR, VR, and MR</h2>
        <ul className="space-y-4 text-gray-700 list-disc list-inside">
          {realities.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* Tools */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Popular AR Tools and Apps We Use</h2>
        <ul className="grid md:grid-cols-3 gap-4 text-gray-700">
          {arTools.map((tool, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">{tool}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {whyChooseUs.map((item, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">✅ {item}</li>
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
          Transform your architectural and construction projects with Nimble Acuity’s AR technologies. Share your requirements with us and connect with our experts today.
        </p>
        <Button className="bg-blue-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
