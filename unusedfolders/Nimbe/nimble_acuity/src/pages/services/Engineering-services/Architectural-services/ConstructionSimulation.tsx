import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function ConstructionSimulation() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-indigo-900 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nimble Acuity 4D Construction Simulation Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Get access to high-quality 4D construction simulation services
          provided by highly-qualified and talented professionals at prices
          starting from only $11/hour.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-gray-700 space-y-6">
        <p>
          Are you looking for 4D construction simulation models to enhance the
          collaboration between your project teams and your clients? Are you
          looking for effective and efficient 4D construction simulation
          services that provide improved construction plans and clear project
          milestones? Are you looking for help to improve your construction
          schedules, manage your supply chain, and track materials? If so, you
          are in the right place.
        </p>
        <p>
          Nimble Acuity is a leading 4D construction simulation service provider
          and has helped numerous clients with outsourcing 4D construction
          simulation services. Our BIM engineers have helped architects, real
          estate firms, consultants, and contractors by providing them improved
          cost-aligned construction plans and clear project milestones to manage
          the supply chain and track materials. Our 4D construction simulation
          services provide a clear outline of the construction, development,
          operation, and maintenance of construction projects throughout their
          lifespans.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">
          4D Construction Simulation Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "4D Pre-bid Presentation Services",
              desc: "Our 4D pre-bid presentation with BIM offers a realistic view of the construction project."
            },
            {
              title: "4D BIM Construction Phasing Services",
              desc: "Visualize the series of construction events that are planned for your project."
            },
            {
              title: "4D Time Line Services",
              desc: "Incorporate individual 3D components or assemblies into your construction schedule."
            },
            {
              title: "4D Construction Simulation Services",
              desc: "Combine 3D models with project schedules across create, enhance, and realize phases."
            },
            {
              title: "4D Building Construction & Maintenance Planning",
              desc: "Integrate with CPM schedule to identify ongoing or pending maintenance activities."
            },
            {
              title: "4D Construction Video Animation Services",
              desc: "Make your project go live before it does so on-site with engaging video animation."
            },
            {
              title: "4D Applications for Construction Planning",
              desc: "Simplify execution and planning sequence with clear 4D visualizations."
            },
            {
              title: "4D Construction, Demolition & Renovation",
              desc: "Address improper design, inefficient material handling, and unexpected changes."
            },
            {
              title: "4D Simulation for Construction",
              desc: "Monitor construction progress against predefined schedules using BIM models."
            },
            {
              title: "4D Simulation for Asset Planning",
              desc: "Establish logistics of asset planning, including estimation and simulation."
            },
            {
              title: "4D Simulation for Asset Operation & Maintenance",
              desc: "Visualize installation processes integrating logistical, geometrical, and schedule data."
            }
          ].map((service, idx) => (
            <Card key={idx} className="rounded-2xl shadow-md hover:shadow-lg transition">
              <CardContent className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-indigo-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our 4D Construction Simulation Process
        </h2>
        <ol className="space-y-4 text-gray-700">
          {[
            "Scoping of Work – We define the scope of the project and ensure that details are available.",
            "Understand the Input – We carefully analyze the input and establish clarity.",
            "Pricing and Effort Estimation – We estimate the resources, time, and pricing.",
            "Project Assignment – We assign the project to the appropriate personnel.",
            "Project Execution – The project is executed according to the plan.",
            "Drafts Shared – The first drafts of the project are shared with the client.",
            "Final Edits Incorporated – Feedback from the client is incorporated into the drafts.",
            "Final Delivery – After feedback, the final deliverable is delivered to the client."
          ].map((step, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              {idx + 1}. {step}
            </li>
          ))}
        </ol>
      </section>

      {/* Other Services */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Other Services You Can Benefit From
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            "3D Architectural Walkthroughs",
            "Building Information Model",
            "Landscape Design and Drafting Services",
            "SketchUp Modeling Services"
          ].map((srv, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h3 className="font-semibold">{srv}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Why Nimble 4D Construction Simulation Services?
        </h2>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          {[
            "Cost-effective Pricing Options",
            "World-class Infrastructure",
            "High-quality ISO-certified Services",
            "Global Delivery Centers in multiple time zones",
            "Tools & Technologies: Navisworks, Autodesk Revit",
            "ISO/IEC 27001:2022 Certified Data Security",
            "Single Point of Contact with dedicated PM",
            "24/7 Support from global teams"
          ].map((item, idx) => (
            <li key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
              ✅ {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Redesign of Precast Designs Using REVIT
              </h3>
              <p>
                A leading US manufacturer of precast concrete and polymer
                products needed redesign within quick TAT and 95% accuracy. We
                delivered as promised.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                Technical Drafting & Drawing Services (Canada)
              </h3>
              <p>
                A Canadian architectural firm needed scalable drafting work. Our
                quality and professionalism led to a long-term engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-center text-gray-700 italic">
          "Nimble Acuity has been a tremendous resource for our engineering
          department. They are very precise and attentive to all our needs and
          have been able to learn our procedures quicker than I ever thought
          possible."
          <br />
          <span className="font-semibold not-italic">
            — General Partner, Manufacturing Company in the US
          </span>
        </blockquote>
      </section>

      {/* Closing CTA */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-gray-700 mb-6">
          Nimble Acuity is a pioneer in providing cost-effective and
          high-quality 4D construction simulation services worldwide. Our team
          comprises highly-skilled and qualified personnel leveraging
          state-of-the-art tools and infrastructure.
        </p>
        <p className="text-gray-700 mb-8">
          If you are looking for a reliable, professional, and affordable 4D
          construction simulation partner, get in touch with us today!
        </p>
        <Button className="bg-indigo-700 text-white px-6 py-3 rounded-xl">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
