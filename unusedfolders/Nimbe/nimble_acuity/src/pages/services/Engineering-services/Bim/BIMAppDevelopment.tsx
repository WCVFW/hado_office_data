import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMAppDevelopment() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM App Development Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Starting at $12/hour, save time and money by outsourcing BIM app development to Nimble Acuity.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Looking for a partner to design a unique BIM app for your business? Nimble Acuity builds robust, efficient, user-friendly, and risk-free BIM apps. We leverage standard APIs or create custom ones to automate tasks and enhance productivity throughout the project lifecycle.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">BIM App Development Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Automation of Business Workflow",
              desc: "Identify repetitive project tasks and automate them with custom algorithms to boost productivity and reduce errors."
            },
            {
              title: "Customization of BIM Software",
              desc: "Leverage standard APIs or develop custom ones to meet your business goals without affecting usability or creating steep learning curves."
            },
            {
              title: "DynamoBIM",
              desc: "Use visual programming with DynamoBIM to circumvent time-consuming BIM tasks and improve efficiency without impacting user experience."
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

      {/* Development Process Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">BIM App Development Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Client Collaboration: Understand requirements and challenges to align expectations.</li>
          <li>Project Definition: Address challenges efficiently without affecting usability.</li>
          <li>Team Formation: Select developers with experience, API knowledge, and cultural fit.</li>
          <li>BIM App Development: Implement modules in sync with project scope and algorithm requirements.</li>
          <li>App Testing: Run automated test suites to capture bugs and glitches.</li>
          <li>App Release: Deploy the API in a real-time environment with training for swift adoption.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble BIM App Development?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Cost-effective rates for small and large projects",
            "State-of-the-art infrastructure with automation",
            "Bug-free, high-quality services and support",
            "Dedicated offshore delivery centers with 100% security",
            "Advanced tools and technologies like Revit, Forge, Navisworks",
            "ISO 9001:2015 certified BIM App development",
            "Full compliance with ISO/IEC 27001:2022 data security standards",
            "Scalable services with on-time delivery",
            "Highly qualified developers and project management professionals"
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
              <h3 className="text-xl font-semibold mb-2">Nimble Converted Scans to BIM Models for a European Client</h3>
              <p className="text-gray-600">
                Created high-quality 3D models of old residential buildings including 2D floor plans, sections, and elevations.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nimble Provided Construction Drawings for a Historic Property Management Firm</h3>
              <p className="text-gray-600">
                Delivered accurate construction drawings with 100% client satisfaction using qualified civil engineers.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. They met all deadlines and exceeded expectations in quality.”
        </blockquote>
        <p className="mt-2 text-gray-600">— Spokesperson, Oil Exploration Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM App Development</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements and get a custom quote and estimated TAT for BIM app development services.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
