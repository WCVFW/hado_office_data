import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function VirtualRealityServices() {
  const vrApplications = [
    {
      title: "Virtual Reality in Architecture",
      desc: "Walkthrough movies of sites using VR headsets, providing 1:1 scale visualization of interior spaces and systems like HVAC, electrical, plumbing, and fire."
    },
    {
      title: "Virtual Reality in Construction",
      desc: "Simulate and test construction sites virtually to reduce errors, analyze feasibility, and experience real-life environments without investment in structures."
    },
    {
      title: "VR in AEC Marketing & Sales",
      desc: "Use VR for immersive marketing to stakeholders, investors, and customers, offering life-like walkthroughs without waiting for project completion."
    },
    {
      title: "VR in Manufacturing",
      desc: "Analyze and simulate 3D product models from all angles, enabling stress analysis, assembly process simulation, and improved product design."
    },
    {
      title: "VR in Automotive Engineering",
      desc: "Accelerate research, design, and testing, including VR-led simulation test drives, reducing development time and enhancing efficiency."
    },
    {
      title: "VR in Aviation",
      desc: "Immersive training simulators for pilots to practice challenging scenarios like engine failures and cabin emergencies safely and cost-effectively."
    }
  ];

  const vrTools = [
    "PrioVR Motion Capture Device",
    "Google Glass VR Headset",
    "Matterport 3D Camera",
    "VRSCA High-Performance VR System",
    "Roto Motorized VR Chair",
    "3DiO Virtual Immersive Environment",
    "3D Laser Scanner"
  ];

  const reasons = [
    "Customizable and budget-friendly service packages.",
    "Dedicated expert team of engineers, designers, and VR developers.",
    "Global development centers with top-notch infrastructure and technical aid.",
    "Stringent data security measures to ensure confidentiality.",
    "Fast turnaround times with scalable solutions for tight deadlines."
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Virtual Reality Engineering Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Futuristic, impressive, and cost-effective VR engineering services for bespoke architecture, construction, manufacturing, and more.
        </p>
      </section>

      {/* VR Applications Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Virtual Reality Engineering Applications
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vrApplications.map((app, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-700">{app.title}</h3>
                <p className="text-gray-600">{app.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* VR Tools Section */}
      <section className="py-12 px-6 bg-gray-50 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Advanced Virtual Reality Tools We Use</h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
          {vrTools.map((tool, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm text-center">✅ {tool}</li>
          ))}
        </ul>
      </section>

      {/* Why Choose Nimble Section */}
      <section className="py-12 px-6 bg-gray-100 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Why Choose Nimble as Your VR Engineering Partner</h2>
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
          Nimble provides top-notch virtual reality solutions to transform architecture, construction, manufacturing, and AEC workflows. Connect with our experts today to elevate your projects.
        </p>
        <Button className="bg-blue-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
