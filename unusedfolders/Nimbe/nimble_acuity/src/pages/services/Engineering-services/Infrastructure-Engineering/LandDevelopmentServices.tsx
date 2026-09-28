import React from "react";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function LandDevelopmentServices() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Auity Land Development Design Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Get aesthetic and utility-conscious land development design services at
          cost-effective rates (starting at $18/hour).
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          Contact Us
        </Button>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Intro */}
        <section className="space-y-4 text-center">
          <p>
            Nimble Auity is a leading provider of land development design services
            in India and abroad. We provide our clients with designs of
            international standards and ensure adherence to all local regulatory
            requirements.
          </p>
          <p>
            Our engineers first understand your requirements and then come up with
            a plan that precisely caters to your demands.
          </p>
        </section>

        {/* Services */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Land Development Design & Drafting Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Feasibility Studies",
                desc: "Expert concept schemes and drawings with site-specific data for approvals.",
              },
              {
                title: "Site Planning & Design",
                desc: "Drafting layouts and providing geotechnics, topography, zoning, and land-use data.",
              },
              {
                title: "Commercial Site Design",
                desc: "Full design & engineering services for commercial buildings, offices, and retail centers.",
              },
              {
                title: "Residential Development",
                desc: "Site layout, roads, drainage, utilities, and landscaping for community projects.",
              },
              {
                title: "Environmental Design",
                desc: "Geotechnical reports, stormwater drainage designs, foundation reports and more.",
              },
              {
                title: "Stormwater Management",
                desc: "Subdivision projects, retail planning, landscape design, and hydrology reports.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Our Designing & Drafting Capabilities
          </h2>
          <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside text-gray-700">
            <li>Cover sheet and notes sheet</li>
            <li>Existing conditions and demolition plans</li>
            <li>Site plans</li>
            <li>Grading plan and earthwork calculations</li>
            <li>Sediment and erosion control plans</li>
            <li>Outfall analysis</li>
            <li>Best management practices calculations</li>
            <li>Utility plan and profiles</li>
            <li>Road profiles & sight distance plan</li>
          </ul>
        </section>

        {/* Clients */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Clients We Cater To
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-medium">
            <span className="px-4 py-2 bg-gray-100 rounded">Real Estate Companies</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Contractors</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Land Developers</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Surveying Firms</span>
            <span className="px-4 py-2 bg-gray-100 rounded">Property Owners</span>
          </div>
        </section>

        {/* Why Nimble Auity */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-10">
            Why Choose Nimble Auity?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <ul className="list-disc list-inside space-y-2">
              <li>World-class Infrastructure</li>
              <li>Strict Quality Assurance</li>
              <li>Global Delivery Centers</li>
              <li>Cutting-edge Software</li>
            </ul>
            <ul className="list-disc list-inside space-y-2">
              <li>Cost-effective Pricing</li>
              <li>Quick Turnaround</li>
              <li>Experienced Team</li>
              <li>Dedicated Project Manager</li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 p-8 rounded-lg shadow">
          <h2 className="text-3xl font-semibold mb-6 text-center">Testimonials</h2>
          <blockquote className="italic text-lg text-gray-700 max-w-3xl mx-auto">
            “Hyde Engineering is very satisfied with Nimble's services. They have
            met all our deadlines and exceeded expectations.”
          </blockquote>
          <p className="mt-4 text-center text-sm text-gray-600">
            – Spokesperson, Oil exploration company in the US
          </p>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-semibold">
            Outsource Land Development Design Services to Nimble Auity
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            With 26+ years of experience, Nimble Auity provides reliable, accurate,
            and cost-effective civil engineering design services. Our designs
            adhere to all local regulatory requirements.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Get in Touch
          </Button>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-12">
        <p>&copy; {new Date().getFullYear()} Nimble Auity. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
