import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMClashDetection() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Clash Detection Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Avail specialist BIM Clash Detection services to identify and resolve issues in your BIM model at rates starting at $12/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Do you lack in-house skills or time for clash detection? Nimble Acuity’s expert BIM engineers detect and resolve clashes in your models, saving time and preventing costly errors.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Clash Detection Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Hard Clash Detection",
              desc: "Identify geometric conflicts where two or more elements occupy the same space. Rectify clashes, quality-check, and compile resolution reports."
            },
            {
              title: "Soft Clash Detection",
              desc: "Detect design elements that are too close, violating clearance tolerances. Ensure safety-critical elements like wiring and gas lines are properly spaced."
            },
            {
              title: "MEP Inspections",
              desc: "Run separate and integrated MEP clash detection for structural, mechanical, electrical, and plumbing designs. Resolve clashes across multiple formats like Revit, AutoCAD, or Orion."
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
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Clash Detection Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Client Liaison: Nimble engineer discusses project scope, compliance standards, and timelines.</li>
          <li>Design/BIM Model Submission: Client submits their designs or 3D BIM model.</li>
          <li>Execution of Clash Detection: Engineers integrate designs and run clash detection in Autodesk Revit.</li>
          <li>Rectification of Clashes: Apply standards to eliminate clashes and update models.</li>
          <li>Production of Clash Resolution Report: Senior engineer checks for accuracy and compliance.</li>
          <li>Submission to Client: Deliver resolved BIM models, reports, and revised designs.</li>
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
        <h2 className="text-3xl font-bold text-center mb-10">Key Benefits of Choosing Nimble</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable, high-quality, and secure solutions",
            "Specialist engineering and BIM skills",
            "Expertise with all latest BIM software and tools",
            "Knowledgeable and informed customer service"
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
              <h3 className="text-xl font-semibold mb-2">As-Built Drawings for US Architectural Firm</h3>
              <p className="text-gray-600">
                Built CAD models for 230 sites within 2 months using only 11 team members.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Architecture Drafting & Detailing Services</h3>
              <p className="text-gray-600">
                Assisted a UK-based engineering company with CAD architectural drafting and detailing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “They have met all our deadlines and exceeded our expectations in quality. We consider them a valuable part of our team.”
        </blockquote>
        <p className="mt-2 text-gray-600">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Clash Detection</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements and let Nimble Acuity handle clash detection and resolution quickly and efficiently.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
