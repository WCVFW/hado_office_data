import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMCoordination() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Coordination Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Ensure all your design elements work together seamlessly. Prices start at $12/hour.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Multi-disciplinary designs like architectural, structural, and MEP often create conflicts. Nimble engineers conduct coordination checks to prevent delays, accidents, and high rectification costs. We ensure every design element complements each other for smooth construction execution.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM Coordination Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Constructability Analysis",
              desc: "Using your existing or newly created 3D BIM model, our engineers analyze construction processes, operational clearances, plant accessibility, and support systems to highlight any inconsistencies."
            },
            {
              title: "BIM Model Coordination",
              desc: "All design elements are checked for conflicts, human errors, or non-compliance. Our team proposes solutions and compiles a detailed coordination report."
            },
            {
              title: "4D Coordination Checks",
              desc: "Create 4D BIM models using Autodesk Navisworks to sequence construction processes, identify workflow conflicts, and reduce labor costs and delays."
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
        <h2 className="text-3xl font-bold text-center mb-10">BIM Coordination Service Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Client Liaison: Nimble engineer discusses project scope, requirements, and timelines.</li>
          <li>Design/BIM Model Submission: Client provides designs or BIM model and data.</li>
          <li>Creation of 4D BIM: If required, generate a fully sequenced 4D BIM model.</li>
          <li>Constructability Analysis: Initial analysis conducted and report shared with client.</li>
          <li>Coordination Checks: Thorough inspection for conflicts or design issues.</li>
          <li>Coordination Report: Generate detailed report with suggested resolutions.</li>
          <li>Final Submission: Senior engineer validates accuracy before submitting to the client.</li>
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
        <h2 className="text-3xl font-bold text-center mb-10">Benefits of Choosing Nimble BIM Coordination</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Flexible pricing plans with fast turnaround times",
            "Highly trained and skilled BIM engineers with global experience",
            "Access to the latest BIM software: AutoCAD, Revit, BIM 360, Navisworks, SketchUp, ArchiCAD",
            "Specialist constructability and workflow coordination services to avoid costly onsite issues"
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
              <h3 className="text-xl font-semibold mb-2">US Architectural Firm</h3>
              <p className="text-gray-600">
                Built CAD models with complete electrical layouts, switch positions, and RCP for 230 sites in 2 months using 11 members.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">UK-based Engineering Company</h3>
              <p className="text-gray-600">
                Provided architectural drafting and detailing (CAD) services ensuring accurate and timely delivery for all project stages.
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
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Coordination</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Ensure your project runs smoothly with complete design coordination checks. Contact our engineers to start today.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
