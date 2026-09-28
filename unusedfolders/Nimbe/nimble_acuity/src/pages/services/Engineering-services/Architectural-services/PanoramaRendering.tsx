import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function PanoramaRendering() {
  const services = [
    {
      title: "360-degree Panoramic Designs",
      desc: "Fully immersive panoramic designs of architectural floor plans, interiors, and exteriors, transforming 2D plans into 3D presentations for builders, architects, and engineers."
    },
    {
      title: "3D Panoramic Virtual Tours",
      desc: "Interactive VR tours allowing viewers to pan, zoom, rotate, and experience realistic property walkthroughs."
    },
    {
      title: "Panorama Stitching Services",
      desc: "We offer equirectangular, cylindrical, rectilinear, spherical stitching for interior and exterior real estate projects."
    },
    {
      title: "VR Panorama Solutions",
      desc: "Stereo panoramas developed with REVIT cloud rendering and VR tech for viewing on Google headsets, cardboard, or 3D viewers."
    },
    {
      title: "Panoramic Site Inspection Services",
      desc: "Overlay CAD drawings on drone maps for 360-degree site review, progress tracking, and error identification."
    },
    {
      title: "Panoramic Photography",
      desc: "Professional panoramic photography for architecture ensuring clarity and precision beyond smartphone capabilities."
    },
    {
      title: "Panoramic Video Services",
      desc: "3D panorama videos showcasing interior, exterior, and landscape visualization for real estate marketing."
    },
    {
      title: "360-degree Panorama Enhancement Services",
      desc: "High-quality editing including light/color correction, spot removal, and hue balance to make designs more professional."
    }
  ];

  const processSteps = [
    "Analysis: Gather project info, scope, and KPIs.",
    "Transfer of images/videos: Access all necessary media for conversion.",
    "Elementary design: Draft execution plan and sample panoramas for approval.",
    "Panoramic Rendering: Create finalized designs after approval.",
    "Final review and delivery: Incorporate changes and deliver via secured FTP."
  ];

  const reasons = [
    "Affordable, customizable packages for all business sizes.",
    "26+ years of expertise with top talent in panorama rendering.",
    "Tailor-made services to match the uniqueness of your project.",
    "Quick TAT with scalable solutions for bulk work.",
    "ISO 9001:2007 certified ensuring reliable, standardized quality.",
    "Highest standards of data safety and confidentiality."
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble 360-Degree Panorama Rendering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          High-quality 3D panorama rendering for architecture and construction at cost-effective prices.
        </p>
      </section>

      {/* Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our 360-Degree Panorama Rendering Services
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

      {/* Process Steps */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Our 5-Step Panorama Rendering Process</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-4">
          {processSteps.map((step, idx) => (
            <li key={idx}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Nimble Acuity?</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {reasons.map((reason, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm">✅ {reason}</li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 text-center">
        <p className="text-gray-700 mb-6">
          From top real estate organizations to SMEs, Nimble Acuity delivers exceptional 360-degree panorama rendering services worldwide. Share your requirements today and transform your projects with immersive 3D experiences.
        </p>
        <Button className="bg-purple-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
