import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIM6DModeling() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble 6D BIM Modeling Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get expert 6D BIM models for your design & construction projects at rates starting at $12/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Need 6D BIM modeling with integrated lifecycle management for your project? Nimble Acuity provides accurate BIM models with system manuals, maintenance schedules, energy performance, and decommissioning data—all integrated into the 3D model.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our 6D BIM Modeling Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "6D BIM Energy Simulation Modeling",
              desc: "Generate energy analysis models from 3D BIM using Autodesk Insight 360. Perform daylight, shadow, ventilation, and indoor climate analyses."
            },
            {
              title: "6D BIM Sustainability Modeling",
              desc: "Analyze heat and energy flow using computational networks. Evaluate sustainability levels of the building project for long-term planning."
            },
            {
              title: "6D BIM Facility Management Information",
              desc: "Add system manuals, configuration guides, maintenance schedules, and diagnostic information to support lifecycle management."
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

      {/* Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">6D BIM Service Process Flow</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Client Liaison: Nimble engineer discusses project scope, objectives, and specifications.</li>
          <li>Information Gathering: Collect all data required for 3D, 4D, and 5D BIM models.</li>
          <li>Creation of 3D, 4D, and 5D BIM Models: Convert design/as-built info, construction plans, and cost data into functional BIM models.</li>
          <li>Energy & Environmental Analysis: Perform energy and sustainability analysis using Autodesk Insight 360 and integrate results into the BIM model.</li>
          <li>Facility Management Information: Include system manuals, maintenance schedules, and lifecycle data in the model.</li>
          <li>Checks and Revisions: Senior engineer ensures accuracy and compliance. Apply revisions if necessary.</li>
          <li>Submission to Client: Deliver the final 6D BIM model ready for immediate use.</li>
        </ol>
      </section>

      {/* Related Services Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "Retail Visual Merchandising Services",
            "3D Architectural Walkthroughs",
            "Building Information Model",
            "Landscape Design and Drafting Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Benefits of Choosing Nimble 6D BIM Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "High-quality & secure solutions at affordable rates",
            "Complete range of 6D BIM services including energy and lifecycle management",
            "Deep understanding of your project or asset",
            "Single point of contact and expert customer service"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              {benefit}
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
              <h3 className="text-xl font-semibold mb-2">Singapore-based Technology Giant</h3>
              <p className="text-gray-600">
                Delivered 6D BIM modeling services with detailed lifecycle management within a quick turnaround time.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">US-based Survey Giant</h3>
              <p className="text-gray-600">
                Converted floor-wise laser scans from five angles into a single Revit model and submitted via Dropbox.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “They have met all our deadlines and exceeded our expectations in quality. We consider them a valuable part of our team.”
        </blockquote>
        <p className="mt-2 text-gray-600">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble 6D BIM Modeling</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements and let Nimble Acuity create accurate 6D BIM models with integrated lifecycle management.
        </p>
        <Button className="bg-white text-green-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
