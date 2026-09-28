import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import NavigationMenu from "../MegaMenu";

export default function HealthcareMarketResearch() {
  return (
    <div className="space-y-12 p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <NavigationMenu/>
      <section className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Nimble Healthcare Market Research Services
        </motion.h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Stay updated with the latest trends in the healthcare industry leveraging our analysis and stats report by outsourcing to us at highly affordable prices (Starts at $14 an hour).
        </p>
        <Button size="lg">Get Started</Button>
      </section>

      {/* Services Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Healthcare Market Research Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Branding Research",
              desc: "Showcase your products effectively and promote your brand to the global audience.",
            },
            {
              title: "Customer Satisfaction Research",
              desc: "Gain key insights into how customers, physicians, and patients perceive your services.",
            },
            {
              title: "Healthcare Market Segmentation",
              desc: "Understand consumer behavior, demographics, and customer needs in detail.",
            },
            {
              title: "New Product Development Research",
              desc: "Validate new product ideas and understand exactly what customers are looking for.",
            },
            {
              title: "Competitor Analysis",
              desc: "Stay ahead with insights into market competitors and their strategies.",
            },
          ].map((service, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Why Choose Nimble Acuity for Offshore Healthcare Market Research Services?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Affordable Pricing",
            "Information Security (ISO/IEC 27001:2022 certified)",
            "Experienced Market Research Team",
            "Error-free Quality Services (ISO Certified)",
            "Best Infrastructure & Tools",
            "Dedicated Project Manager",
            "Easily Scalable Services",
            "Multiple Delivery Locations",
            "Round the Clock Support",
          ].map((benefit, i) => (
            <div key={i} className="flex items-start space-x-3">
              <CheckCircle2 className="text-green-600 mt-1" />
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Client Testimonials</h2>
        <blockquote className="text-center text-gray-700 max-w-3xl mx-auto italic">
          “The services that Nimble Acuity provided helped us achieve substantial cost and time savings on several difficult research projects.”
        </blockquote>
        <p className="text-center font-medium">
          – Senior Vice President, Automotive & Transportation Industry Solutions Group
        </p>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold">
          Nimble Healthcare Market Research Services to Nimble Acuity
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          If you are searching for a quality and cost-effective healthcare market research service provider, then your search ends here.
        </p>
        <Button size="lg">Contact Us Today</Button>
      </section>
    </div>
  );
}
