"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ESmainmenu from "../ESmainmenu";

export default function CivilInformationModelingServices() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="text-center py-16 px-6 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Nimble Civil Information Modeling Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
        >
          Professional civil information modeling services starting at just $12/hour. Handle horizontal projects, LiDAR checks, city information modeling, and more with Nimble Acuity.
        </motion.p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Request a Quote
        </Button>
      </section>

      {/* Introduction */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-lg text-gray-900">
        <p className="mb-6">
          The global construction market is booming. To deliver projects efficiently, you need a top-tier civil information modeling services partner. Nimble Acuity provides high-quality civil information modeling solutions that meet international standards for quality, safety, and technology.
        </p>
        <p>
          Our expert architects and engineers develop models for projects ranging from individual buildings to large townships. Outsourcing civil information modeling services to Nimble ensures cost-effective, precise, and reliable results.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700">Civil Information Modeling Services We Offer</h2>
        <div className="grid gap-6 md:grid-cols-2 mt-6">
          {[
            "Heavy Construction Services: Expert architects and engineers provide high-definition structures for infrastructural projects, including BIM, survey layout, machine control grading, and more.",
            "Horizontal Projects Services: Civil modeling for roadways, tunnels, highways, airfields, water pipes, bridges, sewer and stormwater systems, executed by our specialized in-house team.",
            "LiDAR Check: Elevation data for flood risk planning, emergency management, natural resource management, and other pre-construction analyses.",
            "City Information Modeling Services: Digital models for city planning that consider traffic, housing supply, environmental factors, and design challenges for precise outcomes."
          ].map((service) => (
            <Card key={service} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <p className="text-gray-800">{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Civil Information Modeling Process */}
      <section className="py-12 px-6 max-w-6xl mx-auto bg-white">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Civil Information Modeling Process</h2>
        <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Information Collection:</strong> Gather blueprints and understand client requirements.</li>
          <li><strong>LiDAR:</strong> Analyze earth surface for virtual design planning.</li>
          <li><strong>Preparing the Base:</strong> Establish base for detailed design development.</li>
          <li><strong>Selection of Tools:</strong> Utilize Civil 3D, AutoCAD, and other technologies for modeling.</li>
          <li><strong>Professional Civil Modeling:</strong> Deliver error-free, high-quality models capturing detailed nuances.</li>
          <li><strong>Quality Check:</strong> Independent review to enhance model accuracy and quality.</li>
          <li><strong>Confidential Transfers:</strong> Deliver final models safely in client-preferred formats.</li>
        </ol>
      </section>

      {/* Why Choose Nimble */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Why Choose Nimble Acuity?</h2>
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-800 max-w-4xl mx-auto">
          <li><strong>Cost-effective:</strong> Competitive pricing without compromising quality.</li>
          <li><strong>Excellent Infrastructure:</strong> Access to the best tools and technology for timely project delivery.</li>
          <li><strong>Global Delivery Centers:</strong> 8+ delivery centers provide phone, email, and webchat support.</li>
          <li><strong>Customizable Services:</strong> Tailored to client needs with minimal post-submission errors.</li>
          <li><strong>Quick Design Change Management:</strong> Rapid problem-solving to handle design modifications efficiently.</li>
          <li><strong>Highly Qualified Team:</strong> Architects, civil engineers, construction specialists, and 3D modeling experts worldwide.</li>
          <li><strong>Complete Confidentiality:</strong> MOU/NDA agreements and secure file handling protocols.</li>
        </ul>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-teal-700 text-center">Client Success Stories</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: "MEP Design and Drafting for Australian Electric Service Company",
              desc: "Nimble helped an Australian electric service firm with expert MEP design and drafting services."
            },
            {
              title: "Construction Drawings for a Top Italian Architectural Firm",
              desc: "Provided accurate construction drawings for an apartment complex in London for a leading Italian firm."
            }
          ].map((story) => (
            <Card key={story.title} className="p-4 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{story.title}</h3>
                <p className="text-gray-700">{story.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner with Nimble Acuity</h2>
        <p className="mb-6 text-lg max-w-2xl mx-auto">
          Explore the possibilities of outsourcing civil information modeling services. Contact our experts today for customized solutions at competitive rates.
        </p>
        <Button size="lg" className="bg-amber-500 text-white font-semibold hover:bg-amber-600">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
