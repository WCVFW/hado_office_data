import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMModelAuditing() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM Model Auditing Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Starting at $11/hour, hire Nimble Acuity’s top BIM execution planning specialists for your project success.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Is the quality of your BIM model making you feel jittery? Nimble Acuity ensures consistent, reliable BIM model audits, enhancing your design with additional detail while eliminating errors and rework.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM Model Auditing Services We Offer</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Visual Checks with BIM",
              desc: "Export 3D BIM models for real-time navigation. Detect misplaced objects, clean models, and ensure precise alignment with design philosophy."
            },
            {
              title: "Clash Checks with BIM",
              desc: "Perform clash detection using Navisworks to capture design inconsistencies. Compare reports, resolve clashes, and export 3D models for review."
            },
            {
              title: "Nomenclature Checks with BIM",
              desc: "Standardize BIM files on a centralized platform. Ensure correct file naming, OmniClass, and Uniformat codes, improving collaboration and traceability."
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
        <h2 className="text-3xl font-bold text-center mb-10">BIM Model Auditing Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Nimble Acuity’s BIM auditing experts consult clients to understand BIM model challenges.</li>
          <li>Tasks are delegated based on expertise, familiarity, and cultural fit of auditors.</li>
          <li>Investigative approach is used to find flaws and provide actionable recommendations.</li>
          <li>Quality control ensures auditing meets standards and reports are accurate.</li>
          <li>Reports are delivered ahead of schedule and client feedback is collected.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble BIM Model Auditing?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "High-quality auditing services with consistent standards",
            "Affordable services with customizable options",
            "Robust, access-controlled infrastructure",
            "ISO 9001:2015 certified auditing services",
            "100% data security and ISO/IEC 27001:2015 compliance",
            "Quick turnaround time for tight deadlines",
            "Scalable services for projects of any size",
            "Dedicated SPOC for smooth project communication",
            "Professional BIM auditors with extensive experience",
            "Round-the-clock support"
          ].map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
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
              <h3 className="text-xl font-semibold mb-2">Revit MEP Services for UK-based Engineering Consultants</h3>
              <p className="text-gray-600">
                Delivered high-quality Revit MEP models on time for engineering consultants in the United Kingdom.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">AutoCAD Conversion for Interior Design Client</h3>
              <p className="text-gray-600">
                Provided accurate AutoCAD conversions for a US-based interior design firm with exceptional client satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They are precise, attentive, and quick to learn our procedures.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM Model Auditing</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements and customize BIM model auditing services at nominal rates.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
