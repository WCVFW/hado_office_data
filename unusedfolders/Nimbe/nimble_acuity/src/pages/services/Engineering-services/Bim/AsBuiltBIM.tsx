import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function AsBuiltBIM() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble As-built BIM Modeling Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At hourly rates starting at $12, save time and money with precision As-built BIM modeling.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Struggling with large projects requiring complex as-built BIM models? Nimble Acuity’s experienced team provides end-to-end project management, delivering precise models using ArchiCAD, SketchUp, Autodesk Revit, and other industry-standard tools.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">As-built BIM Modeling Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Using BIM Models for Field Verification",
              desc: "Laser scanning converts point cloud data into as-built BIM models, enabling real-time monitoring, capturing MEP components, and updating ongoing construction stages."
            },
            {
              title: "Using Markup Drawings/ Existing Building Plans",
              desc: "We convert existing 2D building plans into 3D as-built BIM models, providing red markup drawings and ensuring all dimensions are accurate and usable."
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
        <h2 className="text-3xl font-bold text-center mb-10">As-built BIM Modeling Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Analyze client requirements and create a sound project plan.</li>
          <li>Assign roles and responsibilities to qualified engineers.</li>
          <li>Provide estimated turnaround time and rates for delegated tasks.</li>
          <li>Quality control team ensures unmatched accuracy.</li>
          <li>Deliver projects before the deadline and share reports with stakeholders.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble As-built BIM Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "High-quality ISO 9001:2015 compliant services",
            "Affordable and flexible rates",
            "State-of-the-art infrastructure and software",
            "ISO-certified As-built BIM modeling provider",
            "100% data security compliant with ISO/IEC 27001:2022",
            "Quick turnaround times",
            "Scalable services for multiple projects",
            "Dedicated SPOC for communication",
            "Professional FTE team with 6+ years of experience",
            "24/7 support via phone, email, or webchat"
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
                Delivered well-defined BIM models representing 2D sections, plans, elevations, and more for a European architecture client.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nimble Provided Architectural Rendering to Wisconsin Civil Engineering Client</h3>
              <p className="text-gray-600">
                Offered timely architectural rendering services, ensuring complete client satisfaction.
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
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble As-built BIM Modeling</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements and we will help you customize As-built BIM modeling services at affordable rates.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
