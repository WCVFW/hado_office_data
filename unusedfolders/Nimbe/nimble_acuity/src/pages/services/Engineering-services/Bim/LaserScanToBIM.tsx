import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function LaserScanToBIM() {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Nimble Laser Scan to BIM Services
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          At just $11/hour, get experts to convert laser scans to BIM models for precision 3D modeling and robust construction.
        </p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 space-y-6">
        <p className="text-gray-700 text-lg leading-relaxed">
          Save time and money by outsourcing laser scan to BIM services. Nimble Acuity converts raw laser scans into accurate 3D BIM models, reducing dependency on conventional surveys, human errors, and rework costs. Enhance construction quality, collaboration, and transparency in your AEC projects.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Laser Scan to BIM Services We Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Laser Scan Raw Data to 3D BIM Model Conversion",
              desc: "We transform your survey data into precise MEP and architectural models using advanced BIM software, with simulations and high-quality drawings."
            },
            {
              title: "Creating 3D BIM Models with Revit",
              desc: "Our engineers leverage Revit Architecture and MEP to create detailed 3D models for buildings, electrical, and plumbing systems."
            },
            {
              title: "Using Point Cloud Data for BIM Modeling",
              desc: "We model existing buildings using scanned data for retrofitting and renovations, covering MEP and structural elements."
            },
            {
              title: "Extraction of Information from BIM Models",
              desc: "BIM models embed rich data for efficient planning and as-built drawings, capturing real data using LiDAR and minimizing human errors."
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
        <h2 className="text-3xl font-bold text-center mb-10">Laser Scan to BIM Process</h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-700 text-lg">
          <li>Nimble works with clients to understand requirements, turnaround time, and project scope.</li>
          <li>Survey professionals aggregate data using LiDAR or provided raw laser scans.</li>
          <li>Revit is used to create precise 3D models for engineering and construction teams; additional data is added as required.</li>
          <li>Project leads and QC teams verify accuracy and compliance from scanning to model generation.</li>
        </ol>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Nimble Laser Scan to BIM Services?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "High-quality, error-free conversion services",
            "Affordable and customizable service options",
            "Fully equipped, world-class infrastructure",
            "ISO 9001:2015 certified services",
            "100% data security compliant with ISO/IEC 27001:2015",
            "Quick turnaround time",
            "Scalable services to meet project demands",
            "Single Point of Contact (SPOC) for communication",
            "Experienced BIM professionals with 5+ years of expertise",
            "24/7 round-the-clock support"
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
              <h3 className="text-xl font-semibold mb-2">Nimble Provided Construction Drawings for a Top Historic Property Management Firm</h3>
              <p className="text-gray-600">
                Our team delivered construction drawings for a US-based property management company with 100% client satisfaction.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Nimble Provided REVIT Modeling Services to Swiss Architectural Firm</h3>
              <p className="text-gray-600">
                Delivered accurate REVIT models for a Swiss architecture firm in record time, ensuring complete client satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-blue-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-gray-700 italic">
          “Nimble Acuity has been a tremendous resource for our engineering department. Very precise and attentive, learning our procedures quicker than expected.”
        </blockquote>
        <p className="mt-2 text-gray-600">— General Partner, Manufacturing Company, US</p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started with Nimble Laser Scan to BIM Services</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Share your requirements with our experts and we will help you customize high-quality laser scan to BIM conversion services at nominal rates.
        </p>
        <Button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">
          Contact Us
        </Button>
      </section>
    </div>
  );
}
