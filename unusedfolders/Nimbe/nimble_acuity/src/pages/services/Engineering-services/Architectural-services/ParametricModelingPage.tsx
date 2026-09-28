import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ParametricModelingPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-4xl font-bold mb-4">
          Nimble Auity Parametric & Computational Modeling Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl">
          Hire professional parametric modeling specialists to deliver
          architectural projects faster and at lower costs.
        </p>
        <Button className="mt-6 bg-white text-slate-900 font-semibold rounded-xl px-6 py-3 shadow-lg">
          Get a Free Quote
        </Button>
      </section>

      {/* Intro Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-800">
        <p className="text-lg leading-relaxed mb-4">
          Are you unsatisfied with slow turnaround for computational modeling
          from your in-house team? If so, you need to partner with{" "}
          <strong>Nimble Auity</strong> — we value your time, money, and
          concerns. Our proven experience spans industries like{" "}
          <em>architecture, aerospace, automobile, and manufacturing</em>.
        </p>
        <p className="text-lg leading-relaxed">
          Nimble Auity delivers robust parametric modeling with algorithmic and
          generative approaches. Whether you’re a contractor or fabricator, our
          services simplify fabrication where traditional methods are inaccurate
          or slow.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Parametric & Computational Modeling Services
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                Boundary Representation Modeling
              </h3>
              <p>
                We join edges and points generatively to create models with
                special boundaries. Using FEM, we design solid surfaces and
                complex mesh forms with actuated volume and other geometric
                elements.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                Constructive Solid Geometry Modeling
              </h3>
              <p>
                From simple to complex geometry, we design models that can be
                transformed into shapes with extrusion or sweeping methods.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Industries We Serve
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            "Architectural Design",
            "Landscape Architecture",
            "Urban Design",
            "Urban Planning",
            "Transport Planning",
            "Structural Design",
            "Facade Engineering",
            "Town Planning",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Parametric & Computational Modeling Process
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            "Consultation & Requirement Discovery",
            "Importing Your Existing Templates",
            "Parametric & Computational Modeling",
            "Design Analysis",
            "Project Reporting & Documentation",
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="text-2xl font-bold text-slate-700">
                {i + 1}.
              </span>
              <p className="text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            "ISO 9001:2015 certified with proven quality standards",
            "Strong data security (ISO/IEC 27001:2022 accredited)",
            "High accuracy and BIM coordination expertise",
            "Faster turnaround using algorithms & automation",
            "Scalable services powered by AI-driven design",
            "Cost-effective solutions (30% cheaper)",
            "Dedicated project manager for every client",
            "24/7 global support with secure data exchange",
          ].map((point, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-5">
              ✅ {point}
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                Construction Drawings for Historic Property Firm
              </h3>
              <p>
                Nimble Auity delivered highly accurate designs at unbeatable
                rates for a property management client.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-xl mb-3">
                REVIT Modeling for Swiss Architecture Firm
              </h3>
              <p>
                Nimble Auity was chosen for its skill and bandwidth to deliver
                as per SLA with precision.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center text-gray-800">
        <h2 className="text-3xl font-bold mb-6">What Our Clients Say</h2>
        <blockquote className="italic text-lg">
          "Nimble Auity has been a tremendous resource for our engineering
          department. Very precise, attentive, and quick to adapt to our
          procedures."
        </blockquote>
        <p className="mt-4 font-semibold">– General Partner, US Manufacturing Company</p>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Partner with Nimble Auity Today
        </h2>
        <p className="max-w-3xl mx-auto mb-6 text-lg">
          With 26+ years of experience, we deliver scalable, precise, and
          cost-effective parametric and computational modeling services.
        </p>
        <Button className="bg-white text-slate-900 font-semibold rounded-xl px-6 py-3 shadow-lg">
          Contact Us Now
        </Button>
      </section>
    </div>
  );
}
