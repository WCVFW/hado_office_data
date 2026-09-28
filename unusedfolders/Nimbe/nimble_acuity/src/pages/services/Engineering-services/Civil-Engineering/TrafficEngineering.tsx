import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ESmainmenu from "../ESmainmenu";

export default function TrafficEngineering() {
  return (
    <div className="w-full bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <ESmainmenu/>
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Nimble Acuity Traffic Engineering Services
        </motion.h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Get complete traffic engineering solutions for existing or new
          transport network infrastructure at prices starting at{" "}
          <span className="font-semibold">$12/hour</span>.
        </p>
        <Button className="mt-6 bg-white text-indigo-600 hover:bg-gray-200">
          Contact Us
        </Button>
      </section>

      {/* Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16 space-y-6">
        <p>
          The goal of any multi-modal transportation infrastructure is to be
          safe and accessible for the efficient mobility of people and goods.
          Effective and comprehensive traffic engineering is an integral part of
          design and development. <strong>Nimble Acuity</strong> provides a
          complete spectrum of traffic engineering services to its global
          clientele addressing the needs of extensive research, modeling,
          planning, implementing, and modifying infrastructure for highways and
          urban, rural, and regional roads.
        </p>
        <p>
          Our adroit team of civil engineers, specialized engineers, and
          designers, offer robust engineering services to develop road safety
          programs, traffic collision minimization plans, transit road designs,
          and efficient strategies for optimizing road spaces, intersection
          operations, ensuring accessibility and parking spaces, amongst other
          components.
        </p>
      </section>

      {/* Services */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Traffic Engineering Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Traffic Analysis Solutions",
              content:
                "Includes Traffic Impact Studies, Road Safety Audits, Signal Timing Optimization, Parking Review, and Traffic Simulation.",
            },
            {
              title: "Traffic Design Engineering Services",
              content:
                "Covers Route Signing, Signalization, Pavement Markings, Traffic Calming Systems, Lighting Systems, Transportation Management, Control Systems, and ITS.",
            },
            {
              title: "Our Traffic Engineering Process",
              content:
                "From understanding project needs, brainstorming, site inspection, devising the master plan, execution, revisions, to final submission.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="shadow-lg hover:shadow-xl transition rounded-2xl"
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gradient-to-r from-indigo-50 to-blue-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Hire Nimble Acuity?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Cost-effective Pricing",
            "Standardized ISO 9001:2015 Certified Services",
            "Experienced Team Support",
            "24/7 Global Support",
            "Faster Turnaround Times",
            "100% Data Security",
            "Scalability for Large Projects",
          ].map((point, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md"
            >
              <p className="font-medium text-gray-800">{point}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Client Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                HVAC Modeling of 19-Story Commercial Building
              </h3>
              <p className="text-gray-600">
                Nimble Acuity modeled HVAC components for an American contractor
                using Navisworks during the pandemic with utmost precision.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">
                UAV LiDAR Mapping of Canadian Railroad
              </h3>
              <p className="text-gray-600">
                We performed UAV LiDAR Mapping of 600+ km of Canadian railroads
                with exceptional cost-effectiveness and accuracy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic">
          “The commitment and focus of Nimble Acuity's managers and engineers
          were excellent, and surpassed our expectations.”
        </blockquote>
        <p className="mt-4 font-medium">SVP & Co-Founder - Engineering Firm</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Optimize Your Traffic Infrastructure?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Nimble Acuity is a global leader in traffic engineering services. Let
          our expert team help you plan, design, and execute smart, safe, and
          efficient transportation solutions.
        </p>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700">
          Get Started Today
        </Button>
      </section>
    </div>
  );
}
