import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function GeothermalEngineering() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Acuity Geothermal Engineering Services
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Maximize the efficiency of your building’s heating and cooling systems
          with advanced geothermal design and analysis solutions crafted by
          experts — starting at <span className="font-semibold">$12/hour</span>.
        </p>
        <Button className="mt-6 bg-white text-green-700 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <p>
          Installation of geothermal systems for sustainable cooling and heating
          requires expertise, experience, and technical skills for optimum
          results. As a one-time integration, it must be done right the first
          time — and that’s where{" "}
          <strong>Nimble Acuity’s geothermal engineering experts</strong> step
          in.
        </p>
        <p>
          Our certified engineers, including{" "}
          <strong>Certified GeoExchange Designers (CGD)</strong>, recognized by
          the International Ground Source Heat Pump Association, have completed
          300+ geothermal projects worldwide. This makes Nimble Acuity a global
          leader in geothermal system analysis, design, and commissioning.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Geothermal Engineering Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Open-loop System Design",
              desc: "Uses a well or reservoir for heat exchange. Cost-effective, suitable for homes, ensures efficiency without contaminating water supply.",
            },
            {
              title: "Closed-loop System Design",
              desc: "Piping filled with antifreeze/water is buried underground or in ponds. Includes horizontal, vertical, and pond loops designed for efficiency.",
            },
            {
              title: "Geothermal Analysis",
              desc: "Soil testing, conductivity, heat flow, energy savings ratio, and load profiling using advanced software for accurate plans.",
            },
            {
              title: "Geothermal Design",
              desc: "Comprehensive prototypes and blueprints, ductwork design, and optimized layouts tailored to site requirements.",
            },
            {
              title: "System Installation",
              desc: "Trained technicians safely install geothermal systems with precision using specialized trench boxes for piping.",
            },
            {
              title: "Maintenance & Consultation",
              desc: "Full upkeep and advisory services to analyze needs and create the most effective design frameworks.",
            },
          ].map((s, i) => (
            <Card
              key={i}
              className="shadow-lg hover:shadow-xl transition rounded-2xl"
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-r from-emerald-50 to-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Geothermal Engineering Process
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "01. Need Assessment",
            "02. Site Testing & Analysis",
            "03. Load Capacity Calculations",
            "04. Designing",
            "05. QC & Client Review",
            "06. Installation",
            "07. Support Services",
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <p className="font-medium text-gray-800">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Hire Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            "Flexible Pricing & Custom Plans",
            "ISO-Certified Quality Assurance",
            "Skilled Engineers & Technicians",
            "State-of-the-Art Infrastructure",
            "Dedicated Project Managers (SPOC)",
            "Quick Turnarounds",
            "Complete Data Protection (ISO/IEC 27001:2022)",
          ].map((point, i) => (
            <Card key={i} className="shadow-lg rounded-2xl">
              <CardContent className="p-6">
                <p className="text-gray-700 font-medium">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                HVAC Modeling of 19-Story Building
              </h3>
              <p className="text-gray-600">
                Nimble Acuity’s engineers used Navisworks to model HVAC
                components for a 19-story US building at cost-effective rates
                and quick turnaround.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                UAV LiDAR Mapping of Canadian Railroads
              </h3>
              <p className="text-gray-600">
                We conducted UAV LiDAR mapping of over 600 km of Canadian
                railroads with accuracy and efficiency, delighting the client.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-green-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “The commitment and focus of Nimble Acuity's managers and engineers
          were excellent, surpassing all our expectations.”
        </blockquote>
        <p className="mt-4 font-medium">SVP & Co-Founder - Engineering Firm</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Install an Efficient Geothermal System?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity is a global leader in geothermal engineering services.
          From analysis and design to installation and support, our experts
          ensure maximum efficiency for your building.
        </p>
        <Button className="bg-green-600 text-white hover:bg-green-700">
          Get Free Consultation
        </Button>
      </section>
    </div>
  );
}
