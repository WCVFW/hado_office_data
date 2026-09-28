import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function BIMVRServices() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble BIM & 3D Virtual Reality Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Visualize your construction project with BIM and 3D virtual reality, starting at just $16/hour.
        </p>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          Nimble Acuity is a leading BIM and 3D virtual reality service provider, helping architects and engineers design smarter, visualize better, and save time and money. Our solutions provide consistent, integrated 3D analysis for construction projects.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Our BIM & 3D Virtual Reality Services</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Providing a 1:1 Realistic Representation",
              desc: "We leverage VR platforms and BIM models to provide a 1:1 representation of your building, allowing you to experience real-scale dimensions directly from the model."
            },
            {
              title: "Enabling Enhanced Design Intent",
              desc: "Actual finishes applied in the BIM model are displayed, expressing design intent clearly and providing an effective marketing tool."
            },
            {
              title: "Dynamic Representation Services",
              desc: "Users can interact with the model in real-time, make changes, and immediately visualize effects, improving decision-making for design intent."
            },
            {
              title: "Visualization and Evaluation",
              desc: "Feature-rich BIM models enable interactive 3D VR visualizations, enhancing understanding of complex designs and facilitating better stakeholder communication."
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

      {/* Related Services Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-gray-700">
          {[
            "As-built BIM Modeling Services",
            "BIM Quantity Estimation Services",
            "Laser Scan to BIM Services",
            "BIM App Development Services"
          ].map((service, idx) => (
            <Card key={idx} className="p-6 rounded-xl shadow hover:shadow-md transition text-gray-700">
              <CardContent>{service}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Nimble Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nimble for BIM & 3D VR Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-700">
          {[
            "Affordable Pricing Options for all budgets",
            "High-quality services backed by ISO certification",
            "World-class infrastructure with uninterrupted connectivity",
            "Global delivery centers across multiple time zones",
            "ISO/IEC 27001:2022 certified data security",
            "Single point of contact for project updates",
            "Experienced and qualified engineering team",
            "Quick turnaround times to meet deadlines"
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
              <h3 className="text-xl font-semibold mb-2">European Client - Laser Scan to BIM</h3>
              <p className="text-gray-600">
                Converted building scans to high-quality 3D BIM models and 2D floor plans, sections, and elevations efficiently.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">UK Engineering Consultants - Revit MEP</h3>
              <p className="text-gray-600">
                Delivered reliable BIM and Revit MEP services, maintaining high quality and cost-effectiveness.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity is now a tremendous resource for our engineering department. They pay high attention to detail, are attentive to our needs, and quickly adapted to our procedures.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble BIM & 3D VR</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Transform your construction project with high-quality, cost-effective BIM and 3D virtual reality solutions. Contact us today!
        </p>
        <Button className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
