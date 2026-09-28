import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function RevitModeling() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Acuity Revit Modeling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          We facilitate sustainable constructions via highly customized Revit
          models with integrated architectural, structural, and MEP components.
        </p>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700 space-y-6">
        <p>
          Unlike traditional paper-based approaches, Revit models offer
          unprecedented time and cost benefits throughout a project's lifecycle.
          In fact, after closely analyzing 32 Revit-assisted projects, the
          experts at CIFE, an arm of Stanford University, concluded that this
          technology decreases the time required to get an expenditure quote by
          up to 80% and eliminates 40% chances of unbudgeted changes.
        </p>
        <p>
          Are you looking for featured BIM services that include planning,
          scheduling, sequencing, clash detection and resolution, and more?
          Partner with our globally experienced team of engineers; our glorious
          clientele includes top-dollar restaurant chains, private sector
          undertakings, healthcare service providers, and government research
          facilities. Reach out to us to create highly customized 3D models with
          integrated architectural, structural, and MEP components.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Revit Modeling Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Revit MEP Modeling Services",
              desc: "We assist you with efficient planning, scheduling, clash detection, and facility management. Contact us for enhanced collaboration, automation, parametric family creation, and more."
            },
            {
              title: "Revit Drafting Services",
              desc: "We provide end-to-end 3D drafting services with unparalleled accuracy and precision using Revit. Our services facilitate quick, efficient, sustainable, and green constructions."
            },
            {
              title: "Revit Family Creation Services",
              desc: "Our Revit family creation services help categorize design elements to simplify and streamline the construction process. We assure speed and quality in our BIM models to enhance accuracy and reduce inconsistency."
            },
            {
              title: "Revit Architecture Services",
              desc: "We design top-notch Revit models that help architects coordinate all data inputs effectively and produce federated deliverables. Includes 3D renderings, custom family creation, and point cloud scans."
            },
            {
              title: "Revit BIM Modeling Services",
              desc: "Our Revit BIM models help accelerate construction processes while ensuring safety, consistency, cost-effectiveness, flexibility, and green building."
            },
            {
              title: "Structural Revit Modeling Services",
              desc: "Create bidirectional views including 3D details, schedules, and sections. Structural analysis is easier as all details are stored within the same model."
            }
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-blue-700">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Choose Nimble Acuity as Your Revit Modeling Company?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Affordable Pricing Options",
            "Best Infrastructure with world-class tools",
            "High-quality ISO-certified Services",
            "Global Delivery Centers in multiple time zones",
            "ISO/IEC 27001:2022 Certified Data Security",
            "Single Point of Contact with dedicated PM",
            "Experienced Engineering Team",
            "Easily Scalable Services"
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✅ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Additional Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto text-gray-700">
          <Card><CardContent className="p-6"><h3 className="font-semibold mb-2">Architectural Engineering Services</h3><p>Durable and budget-friendly designs ensuring resilient buildings.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h3 className="font-semibold mb-2">Civil Engineering Services</h3><p>High-quality and productive infrastructure solutions for growing urban needs.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h3 className="font-semibold mb-2">BIM Modeling Services</h3><p>Practical BIM models that enable supervision and real-time collaboration.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h3 className="font-semibold mb-2">Structural Engineering Services</h3><p>Ensuring structures withstand environmental and operational stresses.</p></CardContent></Card>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Customer Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card><CardContent className="p-6"><h3 className="font-semibold mb-2">Revit MEP Services for Engineering Consultants (UK)</h3><p>Provided cost-effective MEP modeling solutions within a quick turnaround.</p></CardContent></Card>
          <Card><CardContent className="p-6"><h3 className="font-semibold mb-2">Revit Modeling for a Swiss Architectural Firm</h3><p>Delivered accurate Revit modeling services within client’s SLA timeline.</p></CardContent></Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center text-gray-700 italic">
          "They have met all our deadlines and exceeded our expectations in quality. We consider them a valuable part of our team." <br />
          <span className="font-semibold not-italic">— Spokesperson, Oil exploration company in the US</span>
        </blockquote>
      </section>

      {/* Closing Section */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          Our well-established Revit modeling processes ensure a structured data
          flow throughout the design and construction process. Operators gain
          access to accurate asset information from day one, ensuring smooth
          workflows that save both time and resources.
        </p>
        <p className="text-gray-700 mb-8">
          Benefits of partnering with us include 26+ years of experience,
          18,000+ happy clients, certified specialists, and clientele across 160+
          countries.
        </p>
        <Button className="bg-blue-700 text-white px-6 py-3 rounded-xl">
          Contact Us for a Free Trial
        </Button>
      </section>
    </div>
  );
}
