import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function MixedRealityServices() {
  const mrServices = [
    {
      title: "Architectural & Engineering Design Services using MR",
      desc: "Interactive design models overlaid on real spaces, blending holographic images with physical environments using HoloLens."
    },
    {
      title: "Construction Support Using Mixed Reality",
      desc: "Design iterations, clash detection, virtual interior mockups, and site safety analysis with BIM and Trimble Connect integrated with HoloLens."
    },
    {
      title: "Advanced MR Project Collaboration",
      desc: "Facilitate multi-team collaboration on 3D models, including avatar-based interactions and immersive project reviews."
    },
    {
      title: "Marketing & Sales Solutions using MR",
      desc: "Visualize prefabricated homes, commercial projects, and interior designs for enhanced marketing, sales, and customer engagement."
    },
    {
      title: "Virtual Staging Services",
      desc: "Transform empty spaces into fully furnished virtual environments for real estate, interior designers, and furniture retailers."
    },
    {
      title: "Virtual Showcase of Properties",
      desc: "Enable 3D tours and walkthroughs of properties using MR headsets like Matterport, saving time and costs."
    },
    {
      title: "Virtual Commerce",
      desc: "Develop interactive, shoppable VR/MR experiences for real estate properties, including furniture and lighting modifications."
    },
    {
      title: "Project Commissioning",
      desc: "Interactive manuals, specifications, and performance metrics directly in MR apps for seamless project handover."
    }
  ];

  const manufacturingMR = [
    "Logistics: Streamline and integrate supply chain management using MR for smart tracking.",
    "Product Design & Development: Test, simulate, and refine products virtually at lower cost.",
    "Assembling & Maintenance: Faster and more accurate assembly with fault detection.",
    "Training: Virtual MR-based training for personnel safety and reduced development costs."
  ];

  const reasons = [
    "World-class team of designers, developers, MR engineers, and software experts.",
    "Leading-edge technology and top-class infrastructure to deliver advanced solutions.",
    "Dedicated project manager ensuring single point of contact and seamless communication.",
    "Affordable and customizable service packages.",
    "Highest quality security systems for complete data confidentiality."
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Mixed Reality Engineering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          State-of-the-art mixed reality apps and engineering solutions for architecture, construction, and manufacturing at industry-best rates.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Mixed Reality Engineering Solutions for the AEC Industry
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mrServices.map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-purple-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Manufacturing Section */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Mixed Reality Solutions for Manufacturing</h2>
        <ul className="list-decimal list-inside text-gray-700 space-y-3">
          {manufacturingMR.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      {/* MR Apps Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Popular MR Apps & Integrations</h2>
        <p className="text-gray-700 text-center mb-6">
          The following tools can be used independently or collaboratively to enhance MR engineering outcomes:
        </p>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {["Trimble Connect", "SketchUp Viewer", "Trimble SiteVision", "Trimble PULSE", "The Remote Expert"].map((app, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm text-center">✅ {app}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Reasons to Hire Nimble as Your MR Engineering Partner</h2>
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
          Nimble Acuity has been a tremendous resource for our engineering department. They are very precise and attentive to all our needs and have been able to learn our procedures quicker than I ever thought possible.
        </p>
        <p className="text-gray-500 italic">— General Partner, A Manufacturing Company in the US</p>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-700 mb-6">
          Nimble Acuity delivers cutting-edge mixed reality solutions to transform architecture, construction, and manufacturing workflows. Connect with our experts today to elevate your projects.
        </p>
        <Button className="bg-purple-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
