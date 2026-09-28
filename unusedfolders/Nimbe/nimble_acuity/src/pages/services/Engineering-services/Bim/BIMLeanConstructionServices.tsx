import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMLeanConstructionServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Lean Construction Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Identify and eliminate waste, reduce costs and project timelines, and enhance productivity starting at $12/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          The lean philosophy, initially developed in the automobile industry, is now transforming the AEC sector. Nimble Acuity integrates lean principles with BIM workflows to eliminate non-value-adding processes, reduce costs, improve project timelines, and enhance productivity.
        </p>
        <p>
          With extensive experience delivering successful BIM projects worldwide, our team ensures high-quality, on-time deliverables for clients in the US, UK, Australia, Singapore, UAE, and Europe.
        </p>
      </section>

      {/* BIM Lean Construction Services */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Lean Construction Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Eliminating Wastage",
              desc: "Identify and remove waste in time, materials, and effort. Perform clash tests, energy simulations, and select efficient designs."
            },
            {
              title: "Providing Enhanced Customer Value",
              desc: "Achieve project goals effectively, improve client understanding using 3D models, and facilitate better collaboration between clients and suppliers."
            },
            {
              title: "Reducing Cycle Times",
              desc: "Automatically generate updates to material schedules and quantities, provide precise prefabrication information, and visualize workflows to detect conflicts."
            },
            {
              title: "Workflow and Collaboration Improvements",
              desc: "Create detailed schedules of tasks, processes, and deliveries to enhance BIM collaboration and throughput across project teams."
            }
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md rounded-2xl hover:shadow-lg transition">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Building Information Modeling (BIM)",
            "Architectural Services",
            "Civil Engineering Services",
            "Mechanical Engineering Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble */}
      <section className="bg-white py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble Acuity?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable pricing options with hourly and full-time equivalent rates",
            "ISO-certified high-quality lean construction services",
            "World-class infrastructure for delivering BIM solutions",
            "Use of latest BIM tools and lean construction principles",
            "Structured, robust processes for all lean services",
            "Experienced BIM team with 26+ years in AEC industry",
            "Strict adherence to international data security regulations",
            "Timely delivery with short turnaround time"
          ].map((reason, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              {reason}
            </div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">3D Modeling & Photorealistic Rendering</h3>
              <p className="text-gray-600">
                Delivered precise 3D models and photorealistic renders for a top engineering firm at cost-effective rates.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Caseworks & Countertops Design</h3>
              <p className="text-gray-600">
                Delivered high-quality countertop and casework designs to a US-based manufacturer at competitive rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “They have been able to learn our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Lean Construction Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your BIM lean construction requirements and receive a customized service plan tailored to enhance productivity, reduce waste, and optimize project timelines.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
