import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import NavigationMenu from "../MegaMenu";

const PropertyRiskManagement: React.FC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Nimble Property Risk Management Services
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          With our risk management services for properties, no matter how complex
          the crisis is, we will deliver you the expected results at prices
          starting at <span className="font-semibold">$14/hour</span>.
        </p>
      </section>

      {/* Intro */}
      <section className="py-12 px-6 max-w-5xl mx-auto space-y-6">
        <p>
          Are you a commercial building owner or a residential property owner?
          Are you obligated to ensure that your building premises are safe? As
          you know, by law, you need to comply with different kinds of risks
          related to designing, managing, and maintaining a property.
        </p>
        <p>
          The risk management services for properties provided by Nimble Acuity
          include services like property inspections, property audits, fire
          protection, property replacements, loss analysis, cost valuations,
          building code compliance, security, and more.
        </p>
        <p>
          At Nimble Acuity, our team will proactively manage your property risk and will
          work with you to build a plan that will suit you and prevent any losses
          from occurring. Our risk management in property management can be
          counted on to save you money.
        </p>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Property Risk Management Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Evaluate property hazards",
            "On-site surveys",
            "Highly structured service plans",
            "Develop compliance plans",
            "Manage inspection",
            "Property management risk assessment",
            "Internal audits",
            "Develop testing strategies",
            "Appraise property",
            "Replacement costs",
            "Evaluate protection systems",
            "Audits & inspections",
            "Natural hazard assessments",
            "Equipment breakdown report",
            "Fire protection engineering",
            "Identify risks",
            "Design safeguards",
            "24/7 accessibility",
            "Monitoring & tracking",
            "Improving your risk profile",
            "Self-inspections, housekeeping, permits",
          ].map((service, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-4">
                <p>{service}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Other Services You Can Benefit From</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Business Research Services",
            "Market Research Services",
            "Financial Research Report Services",
            "Research Reports Services",
          ].map((srv, idx) => (
            <Card key={idx} className="shadow hover:shadow-lg transition">
              <CardContent className="p-4 text-center font-medium">{srv}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Nimble Acuity */}
      <section className="py-12 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Nimble Acuity for Property Risk Management Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Customization",
              desc: "We analyze your property risks and uncover opportunities to help you reduce costs.",
            },
            {
              title: "Dedicated Team Lead",
              desc: "We provide you with regular updates, negotiate on your behalf, and present you with results.",
            },
            {
              title: "Proven Experience",
              desc: "26+ years of experience managing numerous projects by identifying and assessing risks in real estate.",
            },
            {
              title: "Saves Time",
              desc: "Nimble to Nimble Acuity and dedicate more time to your core business while we manage risks.",
            },
            {
              title: "Reduced Costs",
              desc: "Streamlined processes help reduce staffing, labor, and equipment costs.",
            },
            {
              title: "Faster Completion",
              desc: "Our experts handle tasks quickly, ensuring smooth business operations.",
            },
          ].map((item, idx) => (
            <Card key={idx} className="shadow-md hover:shadow-lg transition">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Client Success Stories</h2>
        <div className="space-y-6">
          <Card className="shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold">
                Nimble Acuity Provided Reliable and Accurate Research Services to Shanghai Trade Consultants
              </h3>
              <p>
                A leading group of Chinese trade consultants required reliable and
                accurate research services. Our assistants delivered highly
                accurate and cost-effective services.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow">
            <CardContent className="p-4">
              <h3 className="font-semibold">
                Nimble Acuity Provided World-class Secondary Research Solutions to a Swiss Company
              </h3>
              <p>
                A leading Swiss firm required reliable research services. We
                delivered accurate services within a quick time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <blockquote className="italic max-w-3xl mx-auto">
          “Nimble Acuity has been a tremendous resource for our team. They are
          very precise and attentive to all our needs and have been able to
          learn our procedures quicker than I ever thought possible.”
        </blockquote>
        <p className="mt-4 font-semibold">
          – General Partner, Manufacturing company in the US
        </p>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center bg-blue-700 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Nimble Risk Management Services to Nimble Acuity
        </h2>
        <p className="max-w-3xl mx-auto mb-6">
          Our certified experts provide comprehensive property risk management
          backed by the latest technology. Get in touch with us today to learn
          more.
        </p>
        <Button className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 rounded-lg text-lg font-semibold">
          Contact Us
        </Button>
      </section>
    </div>
  );
};

export default PropertyRiskManagement;
