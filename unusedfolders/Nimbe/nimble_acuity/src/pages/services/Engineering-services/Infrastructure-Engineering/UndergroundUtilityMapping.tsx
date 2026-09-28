"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function UndergroundUtilityMapping() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <ESmainmenu/>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Underground Utility Mapping Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto"
        >
          Get access to reliable and professional underground utility mapping services 
          provided by highly-experienced engineers at prices starting from only{" "}
          <span className="font-semibold">$16/hour</span>.
        </motion.p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-gray-700 space-y-6">
        <p>
          Are you looking to map underground utilities in a specific area? Are you
          finding it difficult to perform necessary sub-surface infrastructure upgrades
          because you don’t know how you might affect various utilities present in the
          sub-surface, such as important pipes and cables? If so, you are in the right place.
        </p>
        <p>
          Nimble Auity is a top underground utility mapping service provider and has
          robust processes in place to efficiently and effectively perform highly-accurate
          underground utility mapping. We make use of the latest best practices and tools
          to accurately map utilities in the subsurface. Our solutions help you avoid
          damaging critical lines, pipes, and cables while ensuring effective upgrades.
        </p>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Underground Utility Mapping Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Initial Detailed Study",
              desc: "Comprehensive study using all available service data to reduce misidentification risks.",
            },
            {
              title: "Identify and Document Chambers",
              desc: "Inspection chambers/manholes are lifted and documented to cover the entire area of interest.",
            },
            {
              title: "Trace Conducting Service Lines",
              desc: "Advanced tools trace active and passive service lines, including storm and foul drainage.",
            },
            {
              title: "Perform Tightly-spaced Scans",
              desc: "Utility scan devices with GPR systems verify positions of non-conducting services.",
            },
            {
              title: "Post-processing",
              desc: "GPR data is recorded, processed, and analyzed for maximum accuracy and modeling insights.",
            },
          ].map((service, i) => (
            <Card
              key={i}
              className="hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-blue-800">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Nimble Auity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Affordable Pricing Options",
            "Cutting-edge Tools & Technologies",
            "Structured and Streamlined Process",
            "ISO-certified High-quality Services",
            "World-class Infrastructure",
            "26+ Years of Experience",
            "100% Data Security (GDPR Compliant)",
            "Short Turnaround Time",
          ].map((adv, i) => (
            <Card
              key={i}
              className="p-6 border-l-4 border-blue-700 shadow-sm hover:shadow-md"
            >
              <p className="text-gray-700 font-medium">{adv}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-blue-800">
                MEP Design & Drafting for Australian Electric Firm
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Nimble delivered advanced MEP design and drafting services to a leading
                Australian electric services firm, ensuring top-notch quality.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md transition">
            <CardHeader>
              <CardTitle className="text-blue-800">
                BIM Services for Singapore-based Tech Giant
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our experts provided quick and high-quality BIM modeling services to a top
                Singapore-based technology firm.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
        <blockquote className="italic text-gray-700 text-lg">
          “The commitment and focus of Nimble’s managers and engineers were excellent,
          and greatly surpassed our expectations.”
        </blockquote>
        <p className="mt-4 font-semibold text-blue-700">
          SVP & Co-Founder - Engineering Resource Company
        </p>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Partner with Nimble Auity for Underground Utility Mapping Services
        </h2>
        <p className="max-w-3xl mx-auto mb-8 text-lg">
          With over 26 years of expertise and a global clientele, Nimble delivers accurate,
          secure, and efficient underground utility mapping services tailored to your needs.
        </p>
        <Button size="lg" className="bg-white text-blue-900 font-semibold hover:bg-gray-200">
          Contact Us Today
        </Button>
      </section>
    </div>
  );
}
